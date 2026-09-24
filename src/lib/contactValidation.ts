// Shared between the client form (src/components/ContactForm/ContactForm.tsx) and the
// server handler (src/app/api/contact/route.ts) so the two can never silently drift apart.
// The server always re-validates independently — these constants only keep the limits
// themselves in one place, not the validation logic itself.
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const NAME_MAX_LENGTH = 100;
export const EMAIL_MAX_LENGTH = 254;
export const COMPANY_MAX_LENGTH = 100;
export const MESSAGE_MIN_LENGTH = 10;
export const MESSAGE_MAX_LENGTH = 5_000;
