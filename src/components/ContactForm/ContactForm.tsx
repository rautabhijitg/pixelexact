"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { CONTACT_EMAIL } from "@/lib/seo";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_MAX_LENGTH = 100;
const EMAIL_MAX_LENGTH = 254;
const COMPANY_MAX_LENGTH = 100;
const MESSAGE_MIN_LENGTH = 10;
const MESSAGE_MAX_LENGTH = 5000;

export default function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");
    const [errors, setErrors] = useState<Errors>({});
    const startedAtRef = useRef(0);
    useEffect(() => {
        startedAtRef.current = Date.now();
    }, []);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const form = event.currentTarget;
        const data = new FormData(form);
        const honeypot = String(data.get("company_website") ?? "").trim();
        const name = String(data.get("name") ?? "").trim();
        const email = String(data.get("email") ?? "").trim();
        const company = String(data.get("company") ?? "").trim();
        const message = String(data.get("message") ?? "").trim();

        if (honeypot) {
            setStatus("success");
            return;
        }

        const nextErrors: Errors = {};
        if (!name) nextErrors.name = "Enter your name.";
        else if (name.length > NAME_MAX_LENGTH) nextErrors.name = `Name must be ${NAME_MAX_LENGTH} characters or fewer.`;
        if (!email) nextErrors.email = "Enter your email.";
        else if (!EMAIL_PATTERN.test(email) || email.length > EMAIL_MAX_LENGTH) nextErrors.email = "Enter a valid email address.";
        if (!message) nextErrors.message = "Tell us what you're working on.";
        else if (message.length < MESSAGE_MIN_LENGTH) nextErrors.message = `Tell us a bit more (at least ${MESSAGE_MIN_LENGTH} characters).`;
        else if (message.length > MESSAGE_MAX_LENGTH) nextErrors.message = `Message must be ${MESSAGE_MAX_LENGTH} characters or fewer.`;

        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) return;

        setStatus("submitting");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    company: company.slice(0, COMPANY_MAX_LENGTH),
                    message,
                    startedAt: startedAtRef.current,
                }),
            });

            if (!response.ok) {
                const body = await response.json().catch(() => null) as { fieldErrors?: Errors } | null;
                if (body?.fieldErrors) setErrors(body.fieldErrors);
                throw new Error("Request failed");
            }

            setStatus("success");
        } catch {
            setStatus("error");
        }
    }

    if (status === "success") {
        return (
            <div className="contact-form__success" role="status">
                <p>Thanks for reaching out. Your message has been received, we&apos;ll connect with you shortly.</p>
                <p>Keep an eye on your inbox for a confirmation. If you don&apos;t hear back in a day or two, email us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
            </div>
        );
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form__honeypot" aria-hidden="true">
                <label htmlFor="company_website">Leave this field empty</label>
                <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="contact-form__field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" autoComplete="name" required maxLength={NAME_MAX_LENGTH} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
                {errors.name && <p className="contact-form__error" id="name-error">{errors.name}</p>}
            </div>

            <div className="contact-form__field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" required maxLength={EMAIL_MAX_LENGTH} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
                {errors.email && <p className="contact-form__error" id="email-error">{errors.email}</p>}
            </div>

            <div className="contact-form__field">
                <label htmlFor="company">Company <span>(optional)</span></label>
                <input id="company" name="company" type="text" autoComplete="organization" maxLength={COMPANY_MAX_LENGTH} />
            </div>

            <div className="contact-form__field">
                <label htmlFor="message">What are you working on?</label>
                <textarea id="message" name="message" rows={5} required minLength={MESSAGE_MIN_LENGTH} maxLength={MESSAGE_MAX_LENGTH} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />
                {errors.message && <p className="contact-form__error" id="message-error">{errors.message}</p>}
            </div>

            {status === "error" && (
                <p className="contact-form__error" role="alert">
                    Something went wrong sending that. Please try again, or email us directly at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                </p>
            )}

            <button className="contact-form__submit" type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending…" : "Book a Consultation"}
            </button>
        </form>
    );
}
