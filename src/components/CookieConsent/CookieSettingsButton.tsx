"use client";

import { OPEN_PREFERENCES_EVENT } from "./CookieConsent";

type CookieSettingsButtonProps = {
    className?: string;
};

/** Reopens the global cookie preference dialog. Kept as its own tiny client
 * component so Footer (and anywhere else this is used) can stay a Server
 * Component — only this one button needs interactivity. */
export default function CookieSettingsButton({ className }: CookieSettingsButtonProps) {
    return (
        <button
            type="button"
            className={className}
            onClick={() => window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT))}
        >
            Cookie Settings
        </button>
    );
}
