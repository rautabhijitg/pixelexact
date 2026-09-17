/**
 * About page hero visual. No team photo exists, and we won't invent one —
 * this reuses the exact geometry of the wordmark's logo-mark (see
 * Header/Footer `site-header__logo-mark`) as a large brand motif over the
 * same precision-grid pattern used elsewhere on the site (homepage
 * `pe__grid-overlay`), rather than introducing a new visual language.
 */
export default function BrandPattern() {
    return (
        <div className="brand-pattern" aria-hidden="true">
            <div className="brand-pattern__grid" />
            <div className="brand-pattern__mark">
                <svg width="120" height="120" viewBox="0 0 30 30">
                    <rect x="0" y="0" width="9" height="9" fill="var(--color-acid)" />
                    <rect x="12" y="0" width="18" height="9" fill="var(--color-primary)" />
                    <rect x="0" y="11" width="9" height="19" fill="var(--color-primary)" />
                    <rect x="11" y="11" width="9" height="9" fill="var(--color-acid)" />
                    <rect x="21" y="11" width="9" height="9" fill="var(--color-primary)" />
                    <rect x="11" y="22" width="18" height="8" fill="var(--color-primary)" />
                </svg>
            </div>
        </div>
    );
}
