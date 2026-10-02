"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import {
    applyConsentToGoogle,
    DEFAULT_PREFERENCES,
    readConsent,
    trackingServices,
    writeConsent,
    type ConsentPreferences,
} from "@/lib/consent";

export const OPEN_PREFERENCES_EVENT = "pixelexact:open-cookie-preferences";

type Category = {
    key: keyof Omit<ConsentPreferences, "necessary">;
    label: string;
    description: string;
};

const CATEGORIES: Category[] = [
    {
        key: "analytics",
        label: "Analytics",
        description: trackingServices.analytics.length > 0
            ? `Helps us understand how visitors use the website so we can improve content, usability, and performance. Currently used for: ${trackingServices.analytics.join(", ")}.`
            : "Helps us understand how visitors use the website so we can improve content, usability, and performance. No analytics technology is currently active.",
    },
    {
        key: "performance",
        label: "Performance",
        description: trackingServices.performance.length > 0
            ? `Used for performance monitoring and technical diagnostics. Currently used for: ${trackingServices.performance.join(", ")}.`
            : "Used for performance monitoring and technical diagnostics. No performance technology is currently active — this category is ready if one is added later.",
    },
    {
        key: "functional",
        label: "Functional",
        description: trackingServices.functional.length > 0
            ? `Supports optional convenience features beyond core site functionality. Currently used for: ${trackingServices.functional.join(", ")}.`
            : "Supports optional convenience features beyond core site functionality. No optional functional technology is currently active — this category is ready if one is added later.",
    },
    {
        key: "marketing",
        label: "Marketing & Advertising",
        description: trackingServices.marketing.length > 0
            ? `Used for advertising and marketing measurement. Currently used for: ${trackingServices.marketing.join(", ")}.`
            : "Used for advertising and marketing measurement. No marketing or advertising technology is currently active — this category is ready if one is added later.",
    },
];

export default function CookieConsent() {
    // Intentionally start with the SSR-safe default (no banner, no stored
    // preferences) rather than reading localStorage in a lazy initializer —
    // `window` doesn't exist during server rendering, so a lazy initializer
    // here would compute a different value on the server than on the client,
    // causing a real hydration mismatch (the banner could flash, or
    // incorrectly reappear for a returning visitor). The effect below reads
    // the real, persisted state once mounted and corrects it — a legitimate
    // "synchronize with an external store on mount" effect, not a case that
    // could be replaced by a derived value or a different initializer.
    const [preferences, setPreferences] = useState<ConsentPreferences>(DEFAULT_PREFERENCES);
    const [bannerVisible, setBannerVisible] = useState(false);
    const [hydrated, setHydrated] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [draft, setDraft] = useState<ConsentPreferences>(preferences);

    const dialogRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const lastFocusedRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        // Deliberate exception to the "no setState directly in an effect"
        // rule: this is a one-time read of a browser-only store
        // (localStorage) that cannot exist during SSR, so there is no
        // derived value or lazy initializer that could replace it without
        // reintroducing the hydration mismatch this effect exists to avoid.
        const existing = readConsent();
        if (existing) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setPreferences(existing.preferences);
            applyConsentToGoogle(existing.preferences);
        } else {
            setBannerVisible(true);
        }
        setHydrated(true);
    }, []);

    useEffect(() => {
        const openForEditing = () => {
            setDraft(preferences);
            setDialogOpen(true);
        };
        window.addEventListener(OPEN_PREFERENCES_EVENT, openForEditing);
        return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, openForEditing);
    }, [preferences]);

    // Focus management: trap Tab within the dialog, close on Escape, lock
    // background scroll, and restore focus to whatever triggered it on close.
    useEffect(() => {
        if (!dialogOpen) return;

        lastFocusedRef.current = document.activeElement as HTMLElement | null;
        closeButtonRef.current?.focus();

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeydown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                event.preventDefault();
                setDialogOpen(false);
                return;
            }
            if (event.key !== "Tab" || !dialogRef.current) return;

            const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
            );
            if (focusable.length === 0) return;
            const first = focusable[0]!;
            const last = focusable[focusable.length - 1]!;

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };

        document.addEventListener("keydown", handleKeydown);
        return () => {
            document.removeEventListener("keydown", handleKeydown);
            document.body.style.overflow = previousOverflow;
            lastFocusedRef.current?.focus();
        };
    }, [dialogOpen]);

    const commit = (next: ConsentPreferences) => {
        writeConsent(next);
        applyConsentToGoogle(next);
        setPreferences(next);
        setBannerVisible(false);
        setDialogOpen(false);
    };

    const handleAcceptAll = () => {
        commit({ necessary: true, analytics: true, performance: true, functional: true, marketing: true });
    };

    const handleRejectAll = () => {
        commit({ necessary: true, analytics: false, performance: false, functional: false, marketing: false });
    };

    const handleCustomize = () => {
        setDraft(preferences);
        setDialogOpen(true);
    };

    const handleSaveDraft = () => {
        commit(draft);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    return (
        <>
            {hydrated && bannerVisible && (
                <div
                    className={`cookie-consent-banner${dialogOpen ? " cookie-consent-banner--hidden" : ""}`}
                    role="region"
                    aria-label="Cookie consent"
                    aria-hidden={dialogOpen}
                >
                    <div className="cookie-consent-banner__inner">
                        <p className="cookie-consent-banner__text">
                            We use cookies and similar technologies for essential site functionality and, with your
                            permission, for analytics and other optional purposes. See our{" "}
                            <Link href="/cookie-policy">Cookie Policy</Link> for details. You can change your choice
                            anytime from Cookie Settings in the footer.
                        </p>
                        <div className="cookie-consent-banner__actions">
                            <button type="button" tabIndex={dialogOpen ? -1 : 0} className="cookie-consent__link-button" onClick={handleCustomize}>Customize</button>
                            <button type="button" tabIndex={dialogOpen ? -1 : 0} className="cookie-consent__button cookie-consent__button--ghost" onClick={handleRejectAll}>Reject Non-Essential</button>
                            <button type="button" tabIndex={dialogOpen ? -1 : 0} className="cookie-consent__button cookie-consent__button--primary" onClick={handleAcceptAll}>Accept All</button>
                        </div>
                    </div>
                </div>
            )}

            {dialogOpen && (
                <div className="cookie-consent-overlay">
                    <div
                        className="cookie-consent-dialog"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="cookie-consent-heading"
                        aria-describedby="cookie-consent-description"
                        ref={dialogRef}
                    >
                        <div className="cookie-consent-dialog__header">
                            <h2 id="cookie-consent-heading">Cookie Preferences</h2>
                            <button type="button" className="cookie-consent-dialog__close" aria-label="Close" onClick={handleCloseDialog} ref={closeButtonRef}>
                                <X aria-hidden="true" size={20} />
                            </button>
                        </div>

                        <p id="cookie-consent-description" className="cookie-consent-dialog__intro">
                            Choose which categories of cookies and similar technologies this site can use. Necessary
                            technology is always on. See the full <Link href="/cookie-policy">Cookie Policy</Link>{" "}
                            for what each category covers.
                        </p>

                        <div className="cookie-consent-dialog__categories">
                            <div className="cookie-consent-category">
                                <div className="cookie-consent-category__header">
                                    <span className="cookie-consent-category__label">Necessary</span>
                                    <span className="cookie-consent-category__always-on">Always On</span>
                                </div>
                                <p className="cookie-consent-category__description">
                                    Required for the site to function: core functionality, security, and remembering
                                    this consent choice. These cannot be switched off.
                                </p>
                            </div>

                            {CATEGORIES.map((category) => {
                                const isOn = draft[category.key];
                                const toggleId = `cookie-consent-toggle-${category.key}`;
                                return (
                                    <div className="cookie-consent-category" key={category.key}>
                                        <div className="cookie-consent-category__header">
                                            <span className="cookie-consent-category__label" id={`${toggleId}-label`}>{category.label}</span>
                                            <button
                                                type="button"
                                                id={toggleId}
                                                className="cookie-consent-toggle"
                                                role="switch"
                                                aria-checked={isOn}
                                                aria-labelledby={`${toggleId}-label`}
                                                onClick={() => setDraft((current) => ({ ...current, [category.key]: !current[category.key] }))}
                                            >
                                                <span className="cookie-consent-toggle__track"><span className="cookie-consent-toggle__thumb" /></span>
                                                <span className="cookie-consent-toggle__state">{isOn ? "On" : "Off"}</span>
                                            </button>
                                        </div>
                                        <p className="cookie-consent-category__description">{category.description}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="cookie-consent-dialog__footer">
                            <button type="button" className="cookie-consent__button cookie-consent__button--primary" onClick={handleSaveDraft}>Save Preferences</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
