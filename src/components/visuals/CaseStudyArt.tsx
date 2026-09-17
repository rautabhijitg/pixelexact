import BrowserChrome from "./BrowserChrome";

type CaseStudyArtProps = {
    variant: "dashboard" | "mobile" | "modernization";
    className?: string;
};

/**
 * Abstract, brand-colored interface artifacts for case-study cards.
 * Deliberately not a real screenshot — no client project exists yet to show
 * one, and inventing a fake one would be misleading. These represent the
 * *kind* of interface each engagement involved.
 */
export default function CaseStudyArt({ variant, className }: CaseStudyArtProps) {
    return (
        <div className={`artifact case-art${className ? ` ${className}` : ""}`} aria-hidden="true">
            <BrowserChrome />
            {variant === "dashboard" && <DashboardArt />}
            {variant === "mobile" && <MobileArt />}
            {variant === "modernization" && <ModernizationArt />}
        </div>
    );
}

function DashboardArt() {
    return (
        <svg className="artifact__canvas" viewBox="0 0 400 260" role="presentation">
            <rect x="0" y="0" width="88" height="260" fill="var(--color-background-secondary)" />
            {[28, 58, 88, 118].map((y) => (
                <rect key={y} x="20" y={y} width="48" height="6" rx="3" fill="var(--color-border)" />
            ))}
            <rect x="112" y="16" width="90" height="10" rx="2" fill="var(--color-border)" />
            <circle cx="372" cy="21" r="10" fill="var(--color-border)" />
            {[112, 196, 280].map((x, i) => (
                <g key={x}>
                    <rect x={x} y="46" width="72" height="48" fill="none" stroke="var(--color-border)" />
                    <rect x={x + 10} y={i === 0 ? 58 : 62} width={i === 0 ? 10 : 8} height={i === 0 ? 10 : 8} fill={i === 0 ? "var(--color-acid)" : "var(--color-primary)"} opacity={i === 0 ? 1 : 0.5} />
                    <rect x={x + 12} y="78" width="40" height="6" fill="var(--color-border)" />
                </g>
            ))}
            {[40, 70, 55, 95, 65, 100, 75, 50, 85].map((h, i) => (
                <rect
                    key={i}
                    x={112 + i * 30}
                    y={250 - h}
                    width="20"
                    height={h}
                    fill={i === 4 ? "var(--color-acid)" : "var(--color-primary)"}
                    opacity={i === 4 ? 1 : 0.85}
                />
            ))}
        </svg>
    );
}

function MobileArt() {
    return (
        <svg className="artifact__canvas" viewBox="0 0 400 260" role="presentation">
            <rect x="140" y="6" width="120" height="248" rx="16" fill="none" stroke="var(--color-border)" strokeWidth="2" />
            <rect x="180" y="16" width="40" height="6" rx="3" fill="var(--color-border)" />
            <rect x="154" y="36" width="92" height="10" rx="2" fill="var(--color-border)" />
            {[0, 1, 2, 3].map((row) => {
                const y = 56 + row * 38;
                const active = row === 1;
                return (
                    <g key={row}>
                        <rect x="154" y={y} width="92" height="32" fill="none" stroke="var(--color-border)" />
                        <rect x="162" y={y + 8} width="16" height="16" fill={active ? "var(--color-acid)" : "var(--color-background-secondary)"} />
                        <rect x="186" y={y + 9} width="44" height="6" fill="var(--color-border)" />
                        <rect x="186" y={y + 19} width="30" height="4" fill="var(--color-border)" opacity="0.6" />
                    </g>
                );
            })}
            <rect x="140" y="228" width="120" height="26" fill="none" stroke="var(--color-border)" />
            {[168, 200, 232].map((cx, i) => (
                <circle key={cx} cx={cx} cy="241" r={i === 1 ? 5 : 4} fill={i === 1 ? "var(--color-acid)" : "var(--color-border)"} />
            ))}
        </svg>
    );
}

function ModernizationArt() {
    return (
        <svg className="artifact__canvas" viewBox="0 0 400 260" role="presentation">
            <line x1="200" y1="0" x2="200" y2="260" stroke="var(--color-border)" strokeDasharray="4 6" />
            {[0, 1, 2, 3, 4].map((row) => (
                <rect key={row} x={20 + (row % 2) * 6} y={20 + row * 32} width={140 - (row % 3) * 14} height="18" fill="none" stroke="var(--color-border)" />
            ))}
            <rect x="30" y="188" width="60" height="8" fill="var(--color-border)" />
            <rect x="30" y="202" width="90" height="8" fill="var(--color-border)" opacity="0.6" />

            <rect x="224" y="20" width="156" height="14" fill="var(--color-primary)" opacity="0.9" />
            {[1, 2, 3].map((row) => (
                <rect key={row} x="224" y={20 + row * 32} width="156" height="14" fill="none" stroke="var(--color-primary)" />
            ))}
            <rect x="224" y="148" width="76" height="10" fill="var(--color-acid)" />
            <rect x="224" y="168" width="156" height="8" fill="var(--color-primary)" opacity="0.35" />

            <path d="M192 130 L214 130 M208 123 L216 130 L208 137" fill="none" stroke="var(--color-acid)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
