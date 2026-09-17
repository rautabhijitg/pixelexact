import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESEND_ENDPOINT = "https://api.resend.com/emails";

type ContactPayload = {
    name?: unknown;
    email?: unknown;
    company?: unknown;
    message?: unknown;
    company_website?: unknown; // honeypot
};

export async function POST(request: Request) {
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

    const name = typeof payload.name === "string" ? payload.name.trim() : "";
    const email = typeof payload.email === "string" ? payload.email.trim() : "";
    const company = typeof payload.company === "string" ? payload.company.trim() : "";
    const message = typeof payload.message === "string" ? payload.message.trim() : "";

    if (!name || !email || !message || !EMAIL_PATTERN.test(email)) {
        return NextResponse.json({ error: "Missing or invalid fields." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Pixel Exact <onboarding@resend.dev>";

    if (!apiKey || !toEmail) {
        console.error("Contact form: RESEND_API_KEY and/or CONTACT_TO_EMAIL is not configured.");
        return NextResponse.json({ error: "Email delivery is not configured yet." }, { status: 500 });
    }

    const subject = `New consultation request from ${name}`;
    const text = [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        "",
        message,
    ].filter((line): line is string => line !== null).join("\n");

    let resendResponse: Response;
    try {
        resendResponse = await fetch(RESEND_ENDPOINT, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: fromEmail,
                to: [toEmail],
                reply_to: email,
                subject,
                text,
            }),
        });
    } catch (error) {
        console.error("Contact form: network error calling Resend.", error);
        return NextResponse.json({ error: "Could not send email." }, { status: 502 });
    }

    if (!resendResponse.ok) {
        const errorBody = await resendResponse.text().catch(() => "");
        console.error("Contact form: Resend API error.", resendResponse.status, errorBody);
        return NextResponse.json({ error: "Could not send email." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
}
