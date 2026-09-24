import { NextResponse } from "next/server";
import { SITE_NAME } from "@/lib/seo";
import {
    EMAIL_PATTERN,
    NAME_MAX_LENGTH,
    EMAIL_MAX_LENGTH,
    COMPANY_MAX_LENGTH,
    MESSAGE_MIN_LENGTH,
    MESSAGE_MAX_LENGTH,
} from "@/lib/contactValidation";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

const MAX_CONTENT_LENGTH_BYTES = 20_000;
const MIN_SUBMIT_MS = 1_200; // faster than this and it's almost certainly a bot filling the form programmatically.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1_000;
const RATE_LIMIT_MAX_REQUESTS = 5;

type ContactPayload = {
    name?: unknown;
    email?: unknown;
    company?: unknown;
    message?: unknown;
    company_website?: unknown; // honeypot
    startedAt?: unknown; // client-side form-render timestamp, used for a timing-based bot check
};

// In-memory, per-server-instance fixed-window limiter. This app runs as a single
// persistent Node.js process (not independently-scaled serverless instances), so this
// map is effective rather than trivially bypassable. If that deployment model ever
// changes, replace with a shared store (e.g. Upstash Redis).
const submissionsByIp = new Map<string, { count: number; windowStart: number }>();

function isRateLimited(ip: string): boolean {
    const now = Date.now();

    // Opportunistic cleanup so this map doesn't grow unbounded over the life of a
    // long-running process — negligible cost at contact-form request volumes.
    for (const [key, value] of submissionsByIp) {
        if (now - value.windowStart > RATE_LIMIT_WINDOW_MS) submissionsByIp.delete(key);
    }

    const entry = submissionsByIp.get(ip);

    if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
        submissionsByIp.set(ip, { count: 1, windowStart: now });
        return false;
    }

    entry.count += 1;
    return entry.count > RATE_LIMIT_MAX_REQUESTS;
}

function getClientIp(request: Request): string {
    const forwardedFor = request.headers.get("x-forwarded-for");
    if (forwardedFor) return forwardedFor.split(",")[0]!.trim();
    return request.headers.get("x-real-ip") ?? "unknown";
}

function isTrustedOrigin(request: Request): boolean {
    const origin = request.headers.get("origin");
    if (!origin) return true; // some proxies/clients omit it; we don't hard-fail on absence alone.

    let originHost: string;
    try {
        originHost = new URL(origin).host;
    } catch {
        return false;
    }

    // Compared against the incoming request's Host header — preferring
    // X-Forwarded-Host, which a reverse proxy sets to the original public
    // hostname — rather than request.url. Behind a reverse proxy (this app's
    // production deployment), request.url can reflect an internal host/port
    // instead of the domain the browser actually used, which was rejecting
    // every legitimate submission with a 403.
    const forwardedHost = request.headers.get("x-forwarded-host");
    const host = forwardedHost?.split(",")[0]?.trim() || request.headers.get("host");

    return host === originHost;
}

function cleanText(value: unknown, maxLength: number): string {
    if (typeof value !== "string") return "";
    return value.replace(/[\r\n\t]+/g, " ").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

type EmailMessage = {
    to: string;
    subject: string;
    html: string;
    text: string;
    replyTo?: string;
};

async function sendEmail(apiKey: string, fromEmail: string, message: EmailMessage): Promise<boolean> {
    try {
        const response = await fetch(RESEND_ENDPOINT, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: fromEmail,
                to: [message.to],
                reply_to: message.replyTo,
                subject: message.subject,
                html: message.html,
                text: message.text,
            }),
        });

        if (!response.ok) {
            const errorBody = await response.text().catch(() => "");
            console.error("Contact form: Resend API error.", response.status, errorBody);
            return false;
        }

        return true;
    } catch (error) {
        console.error("Contact form: network error calling Resend.", error);
        return false;
    }
}

export async function POST(request: Request) {
    const contentLength = Number(request.headers.get("content-length") ?? 0);
    if (contentLength > MAX_CONTENT_LENGTH_BYTES) {
        return NextResponse.json({ error: "Request is too large." }, { status: 413 });
    }

    if (!isTrustedOrigin(request)) {
        return NextResponse.json({ error: "Invalid request." }, { status: 403 });
    }

    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp)) {
        return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    let payload: ContactPayload;
    try {
        payload = await request.json();
    } catch {
        return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    // Honeypot: bots that fill this out get a fake success and no email is sent.
    if (typeof payload.company_website === "string" && payload.company_website.trim()) {
        return NextResponse.json({ ok: true });
    }

    // Timing check: submissions faster than a human could plausibly fill the form
    // out get the same fake success, and are silently dropped.
    const startedAt = Number(payload.startedAt);
    if (Number.isFinite(startedAt) && Date.now() - startedAt < MIN_SUBMIT_MS) {
        return NextResponse.json({ ok: true });
    }

    const name = cleanText(payload.name, NAME_MAX_LENGTH);
    const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase().slice(0, EMAIL_MAX_LENGTH) : "";
    const company = cleanText(payload.company, COMPANY_MAX_LENGTH);
    const message = typeof payload.message === "string" ? payload.message.trim().slice(0, MESSAGE_MAX_LENGTH) : "";

    const errors: Record<string, string> = {};
    if (!name) errors.name = "Enter your name.";
    if (!email || !EMAIL_PATTERN.test(email) || email.length > EMAIL_MAX_LENGTH) errors.email = "Enter a valid email address.";
    if (!message || message.length < MESSAGE_MIN_LENGTH) errors.message = `Tell us a bit more about what you're working on (at least ${MESSAGE_MIN_LENGTH} characters).`;

    if (Object.keys(errors).length > 0) {
        return NextResponse.json({ error: "Missing or invalid fields.", fieldErrors: errors }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_RECEIVER_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Pixel Exact <onboarding@resend.dev>";

    if (!apiKey || !toEmail) {
        console.error("Contact form: RESEND_API_KEY and/or CONTACT_RECEIVER_EMAIL is not configured.");
        return NextResponse.json({ error: "Email delivery is not configured yet." }, { status: 500 });
    }

    const submittedAt = new Date();
    const submittedAtDisplay = `${submittedAt.toLocaleString("en-US", { dateStyle: "full", timeStyle: "short", timeZone: "UTC" })} UTC`;

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const businessHtml = `
        <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
            <h2 style="margin: 0 0 20px; color: #173963;">New contact form submission</h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
                <tr><td style="padding: 10px 16px 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: 600; white-space: nowrap; vertical-align: top;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5;">${safeName}</td></tr>
                <tr><td style="padding: 10px 16px 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: 600; white-space: nowrap; vertical-align: top;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5;"><a href="mailto:${safeEmail}" style="color: #173963;">${safeEmail}</a></td></tr>
                ${company ? `<tr><td style="padding: 10px 16px 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: 600; white-space: nowrap; vertical-align: top;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5;">${safeCompany}</td></tr>` : ""}
                <tr><td style="padding: 10px 16px 10px 0; border-bottom: 1px solid #e5e5e5; font-weight: 600; white-space: nowrap; vertical-align: top;">Message</td><td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5;">${safeMessage}</td></tr>
                <tr><td style="padding: 10px 16px 10px 0; font-weight: 600; white-space: nowrap; vertical-align: top;">Submitted</td><td style="padding: 10px 0;">${submittedAtDisplay}</td></tr>
            </table>
        </div>
    `.trim();

    const businessText = [
        "New contact form submission",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        `Submitted: ${submittedAtDisplay}`,
        "",
        message,
    ].filter((line): line is string => line !== null).join("\n");

    const businessSent = await sendEmail(apiKey, fromEmail, {
        to: toEmail,
        subject: `New contact form submission from ${name}`,
        html: businessHtml,
        text: businessText,
        replyTo: email,
    });

    if (!businessSent) {
        return NextResponse.json({ error: "Could not send your message. Please try again." }, { status: 502 });
    }

    const confirmationHtml = `
        <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; max-width: 480px; margin: 0 auto; color: #1a1a1a;">
            <h2 style="margin: 0 0 16px; color: #173963;">Thanks for getting in touch.</h2>
            <p style="margin: 0 0 12px; line-height: 1.6;">Hi ${safeName},</p>
            <p style="margin: 0 0 12px; line-height: 1.6;">Thanks for reaching out to ${SITE_NAME}. We've received your message and will connect with you shortly.</p>
            <p style="margin: 0; line-height: 1.6;">Best,<br />${SITE_NAME}</p>
        </div>
    `.trim();

    const confirmationText = `Hi ${name},\n\nThanks for reaching out to ${SITE_NAME}. We've received your message and will connect with you shortly.\n\nBest,\n${SITE_NAME}`;

    const confirmationSent = await sendEmail(apiKey, fromEmail, {
        to: email,
        subject: `We've received your message — ${SITE_NAME}`,
        html: confirmationHtml,
        text: confirmationText,
        replyTo: toEmail,
    });

    if (!confirmationSent) {
        // The business already has the lead, which is the part that matters most, so we
        // still report success to the visitor. Logged (without message content) for follow-up.
        console.warn("Contact form: business notification sent, but user confirmation email failed to send.");
    }

    return NextResponse.json({ ok: true });
}
