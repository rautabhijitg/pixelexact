"use client";

import { useState, type FormEvent } from "react";
import { CONTACT_EMAIL } from "@/lib/seo";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");
    const [errors, setErrors] = useState<Errors>({});

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
        if (!email) nextErrors.email = "Enter your email.";
        else if (!EMAIL_PATTERN.test(email)) nextErrors.email = "Enter a valid email address.";
        if (!message) nextErrors.message = "Tell us what you're working on.";

        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) return;

        setStatus("submitting");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, company, message }),
            });

            if (!response.ok) throw new Error("Request failed");
            setStatus("success");
        } catch {
            setStatus("error");
        }
    }

    if (status === "success") {
        return (
            <div className="contact-form__success" role="status">
                <p>Thanks, that&apos;s sent.</p>
                <p>We reply directly, usually within a day or two. If you don&apos;t hear back, email us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
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
                <input id="name" name="name" type="text" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
                {errors.name && <p className="contact-form__error" id="name-error">{errors.name}</p>}
            </div>

            <div className="contact-form__field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
                {errors.email && <p className="contact-form__error" id="email-error">{errors.email}</p>}
            </div>

            <div className="contact-form__field">
                <label htmlFor="company">Company <span>(optional)</span></label>
                <input id="company" name="company" type="text" autoComplete="organization" />
            </div>

            <div className="contact-form__field">
                <label htmlFor="message">What are you working on?</label>
                <textarea id="message" name="message" rows={5} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />
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
