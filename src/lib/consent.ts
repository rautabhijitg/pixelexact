// Centralized cookie/tracking consent architecture.
//
// Adding a new provider later should mean adding one line to
// `trackingServices` below — not touching the banner, the storage logic, or
// any unrelated component.

export type ConsentCategory = "necessary" | "analytics" | "performance" | "functional" | "marketing";

export type ConsentPreferences = {
    necessary: true;
    analytics: boolean;
    performance: boolean;
    functional: boolean;
    marketing: boolean;
};

export type ConsentRecord = {
    version: string;
    updatedAt: string;
    preferences: ConsentPreferences;
};

/** Bump this if the categories or their meaning change materially — a version
 * mismatch is treated as "no consent on file" so the banner reappears. */
export const CONSENT_VERSION = "1.0";

const STORAGE_KEY = "pixel-exact-consent";

/** Single registry of what each category actually controls. Reflects only
 * technologies that genuinely exist in this project today — do not list a
 * provider here before it's actually wired in. */
export const trackingServices: Record<Exclude<ConsentCategory, "necessary">, string[]> = {
    analytics: ["Google Analytics"],
    performance: [],
    functional: [],
    marketing: [],
};

export const DEFAULT_PREFERENCES: ConsentPreferences = {
    necessary: true,
    analytics: false,
    performance: false,
    functional: false,
    marketing: false,
};

function isValidPreferences(value: unknown): value is ConsentPreferences {
    if (!value || typeof value !== "object") return false;
    const v = value as Record<string, unknown>;
    return (
        v.necessary === true &&
        typeof v.analytics === "boolean" &&
        typeof v.performance === "boolean" &&
        typeof v.functional === "boolean" &&
        typeof v.marketing === "boolean"
    );
}

/** Reads and validates the stored consent record. Any malformed, tampered,
 * or outdated-version value is treated as "no decision on file" rather than
 * trusted or allowed to crash the app. */
export function readConsent(): ConsentRecord | null {
    if (typeof window === "undefined") return null;

    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;

        const parsed: unknown = JSON.parse(raw);
        if (
            typeof parsed !== "object" ||
            parsed === null ||
            typeof (parsed as Record<string, unknown>).version !== "string" ||
            typeof (parsed as Record<string, unknown>).updatedAt !== "string" ||
            !isValidPreferences((parsed as Record<string, unknown>).preferences)
        ) {
            return null;
        }

        const record = parsed as ConsentRecord;
        if (record.version !== CONSENT_VERSION) return null;
        return record;
    } catch {
        return null;
    }
}

export function writeConsent(preferences: ConsentPreferences): ConsentRecord {
    const record: ConsentRecord = {
        version: CONSENT_VERSION,
        updatedAt: new Date().toISOString(),
        preferences,
    };

    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    } catch {
        // Storage unavailable (private browsing quota, disabled storage, etc).
        // The choice still applies for the current session via in-memory state;
        // it just won't persist to the next visit.
    }

    return record;
}

type GtagConsentValue = "granted" | "denied";

function toGtagConsent(preferences: ConsentPreferences): Record<string, GtagConsentValue> {
    return {
        analytics_storage: preferences.analytics ? "granted" : "denied",
        ad_storage: preferences.marketing ? "granted" : "denied",
        ad_user_data: preferences.marketing ? "granted" : "denied",
        ad_personalization: preferences.marketing ? "granted" : "denied",
        functionality_storage: preferences.functional ? "granted" : "denied",
        personalization_storage: preferences.functional ? "granted" : "denied",
    };
}

/** Pushes the current preferences into Google's Consent Mode. Safe to call
 * even if gtag hasn't loaded yet (gtag.js buffers queued commands) or failed
 * to load at all (window.gtag is just undefined, so this is a no-op). */
export function applyConsentToGoogle(preferences: ConsentPreferences): void {
    if (typeof window === "undefined") return;
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof gtag !== "function") return;
    gtag("consent", "update", toGtagConsent(preferences));
}
