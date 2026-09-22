import BrowserChrome from "./BrowserChrome";

export type ToolkitGalleryVariant =
    | "overview"
    | "forms"
    | "data-grid"
    | "dialogs"
    | "utilities"
    | "dashboard"
    | "responsive-nav"
    | "sign-in";

/**
 * Conceptual, illustrative panels for the Design Toolkit "See It In Action"
 * gallery — the same abstract, brand-colored interface-artifact language used
 * everywhere else on the site (ServiceArt, CaseStudyArt), not real product
 * screenshots. There's no live component-library product to capture, so
 * these represent the *kind* of surface each row of the library covers.
 */
export default function ToolkitGalleryArt({ variant }: { variant: ToolkitGalleryVariant }) {
    return (
        <div className="artifact gallery-art" aria-hidden="true">
            <BrowserChrome />
            {variant === "overview" && <OverviewArt />}
            {variant === "forms" && <FormsArt />}
            {variant === "data-grid" && <DataGridArt />}
            {variant === "dialogs" && <DialogsArt />}
            {variant === "utilities" && <UtilitiesArt />}
            {variant === "dashboard" && <DashboardArt />}
            {variant === "responsive-nav" && <ResponsiveNavArt />}
            {variant === "sign-in" && <SignInArt />}
        </div>
    );
}

function OverviewArt() {
    return (
        <svg className="artifact__canvas" viewBox="0 0 300 190" role="presentation">
            <rect x="0" y="0" width="300" height="26" fill="var(--color-background-secondary)" />
            <rect x="14" y="10" width="40" height="6" fill="var(--color-primary)" />
            {[160, 190, 220, 250].map((x) => (
                <rect key={x} x={x} y="11" width="24" height="4" fill="var(--color-border)" />
            ))}
            <rect x="0" y="26" width="72" height="164" fill="var(--color-background-secondary)" />
            {[42, 62, 82, 102].map((y, i) => (
                <rect key={y} x="16" y={y} width="42" height="6" fill={i === 0 ? "var(--color-acid)" : "var(--color-border)"} opacity={i === 0 ? 1 : 0.7} />
            ))}
            <rect x="86" y="40" width="70" height="4" fill="var(--color-border)" opacity="0.6" />
            <path d="M86 40 l60 0" stroke="var(--color-border)" strokeDasharray="2 3" />
            {["Home", "Products"].map((_, i) => (
                <rect key={i} x={86 + i * 50} y="40" width="40" height="4" fill={i === 1 ? "var(--color-text-secondary, var(--color-border))" : "var(--color-border)"} />
            ))}
            {[0, 1, 2].map((i) => (
                <rect key={i} x={86 + i * 26} y="60" width="20" height="16" fill={i === 0 ? "var(--color-primary)" : "none"} stroke="var(--color-border)" />
            ))}
            <rect x="86" y="90" width="190" height="1" fill="var(--color-border)" />
            <rect x="86" y="104" width="140" height="8" fill="var(--color-border)" opacity="0.5" />
            <rect x="86" y="120" width="100" height="6" fill="var(--color-border)" opacity="0.35" />
        </svg>
    );
}

function FormsArt() {
    return (
        <svg className="artifact__canvas" viewBox="0 0 300 190" role="presentation">
            <rect x="20" y="18" width="120" height="8" fill="var(--color-border)" opacity="0.6" />
            <rect x="20" y="34" width="130" height="24" fill="none" stroke="var(--color-border)" />
            <rect x="160" y="18" width="80" height="8" fill="var(--color-border)" opacity="0.6" />
            <rect x="160" y="34" width="120" height="24" fill="none" stroke="var(--color-border)" />
            <path d="M270 42 l5 5 l7 -9" stroke="var(--color-acid)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="translate(-16,0)" />
            <rect x="20" y="76" width="80" height="8" fill="var(--color-border)" opacity="0.6" />
            <rect x="20" y="92" width="130" height="24" fill="none" stroke="var(--color-acid)" strokeWidth="1.5" />
            <path d="M132 100 l10 0 M132 108 l6 0" stroke="var(--color-border)" strokeWidth="1.5" />
            {[[20, 132, "checkbox"], [90, 132, "radio"]].map(([x, y, kind], i) => (
                <g key={i}>
                    {kind === "checkbox"
                        ? <rect x={x as number} y={y as number} width="14" height="14" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" />
                        : <circle cx={(x as number) + 7} cy={(y as number) + 7} r="7" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" />}
                    <rect x={(x as number) + 22} y={(y as number) + 5} width="46" height="5" fill="var(--color-border)" opacity="0.6" />
                </g>
            ))}
            <rect x="20" y="160" width="260" height="20" fill="none" stroke="var(--color-border)" strokeDasharray="3 4" />
            <path d="M144 165 l0 10 M139 170 l5 -5 l5 5" stroke="var(--color-acid)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function DataGridArt() {
    return (
        <svg className="artifact__canvas" viewBox="0 0 300 190" role="presentation">
            <rect x="20" y="14" width="150" height="16" rx="8" fill="none" stroke="var(--color-border)" />
            <circle cx="32" cy="22" r="3" fill="var(--color-border)" />
            <rect x="220" y="14" width="60" height="16" rx="4" fill="var(--color-primary)" />
            <rect x="20" y="44" width="260" height="16" fill="var(--color-background-secondary)" />
            {[30, 130, 200].map((x, i) => (
                <g key={x}>
                    <rect x={x} y="49" width={i === 0 ? 70 : 50} height="6" fill="var(--color-border)" opacity="0.7" />
                    <path d="M0 0 l3 3 l3 -3" transform={`translate(${x + (i === 0 ? 74 : 54)}, 49)`} stroke="var(--color-text-secondary, var(--color-border))" strokeWidth="1.2" fill="none" />
                </g>
            ))}
            {[68, 90, 112, 134].map((y, row) => (
                <g key={y}>
                    <rect x="20" y={y} width="260" height="1" fill="var(--color-border)" opacity="0.5" />
                    <rect x="30" y={y + 8} width={row === 1 ? 90 : 60} height="5" fill="var(--color-border)" opacity="0.5" />
                    <rect x="130" y={y + 8} width="40" height="5" fill="var(--color-border)" opacity="0.5" />
                    <rect x="200" y={y + 8} width={row === 2 ? 30 : 50} height="5" fill={row === 2 ? "var(--color-acid)" : "var(--color-border)"} opacity={row === 2 ? 1 : 0.5} />
                </g>
            ))}
            {[0, 1, 2, 3].map((i) => (
                <circle key={i} cx={130 + i * 14} cy="172" r={i === 0 ? 4 : 3} fill={i === 0 ? "var(--color-primary)" : "var(--color-border)"} />
            ))}
        </svg>
    );
}

function DialogsArt() {
    return (
        <svg className="artifact__canvas" viewBox="0 0 300 190" role="presentation">
            <rect x="0" y="0" width="300" height="190" fill="var(--color-background-secondary)" opacity="0.5" />
            <rect x="80" y="36" width="140" height="104" fill="var(--color-paper)" stroke="var(--color-border)" />
            <rect x="98" y="54" width="80" height="8" fill="var(--color-border)" />
            <rect x="98" y="72" width="104" height="5" fill="var(--color-border)" opacity="0.6" />
            <rect x="98" y="82" width="90" height="5" fill="var(--color-border)" opacity="0.6" />
            <rect x="98" y="112" width="56" height="18" rx="4" fill="var(--color-primary)" />
            <rect x="160" y="112" width="42" height="18" rx="4" fill="none" stroke="var(--color-border)" />
            <path d="M198 42 l8 8 M206 42 l-8 8" stroke="var(--color-border)" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="182" y="158" width="98" height="20" rx="4" fill="var(--color-paper)" stroke="var(--color-acid)" strokeWidth="1.5" />
            <circle cx="196" cy="168" r="4" fill="var(--color-acid)" />
            <rect x="208" y="164" width="60" height="4" fill="var(--color-border)" opacity="0.6" />
            <rect x="208" y="171" width="40" height="3" fill="var(--color-border)" opacity="0.4" />
        </svg>
    );
}

function UtilitiesArt() {
    return (
        <svg className="artifact__canvas" viewBox="0 0 300 190" role="presentation">
            <line x1="24" y1="34" x2="276" y2="34" stroke="var(--color-border)" strokeWidth="1.5" />
            {[24, 108, 192, 276].map((x, i) => (
                <g key={x}>
                    <circle cx={x} cy="34" r="6" fill={i <= 1 ? "var(--color-acid)" : "var(--color-paper)"} stroke="var(--color-acid)" strokeWidth={i <= 1 ? 0 : 1.5} />
                    <rect x={x - 20} y="46" width="40" height="5" fill="var(--color-border)" opacity="0.6" />
                </g>
            ))}
            <g transform="translate(24,68)">
                {Array.from({ length: 14 }).map((_, i) => (
                    <rect key={i} x={i * 18} y="0" width="15" height="15" fill="none" stroke="var(--color-border)" opacity={i === 5 ? 1 : 0.5} />
                ))}
                <rect x={5 * 18} y="0" width="15" height="15" fill="var(--color-primary)" />
            </g>
            <rect x="24" y="112" width="252" height="8" rx="4" fill="var(--color-background-secondary)" />
            <rect x="24" y="112" width="160" height="8" rx="4" fill="var(--color-acid)" />
            <circle cx="150" cy="158" r="16" fill="none" stroke="var(--color-border)" strokeWidth="3" />
            <path d="M150 142 a16 16 0 0 1 11 27" fill="none" stroke="var(--color-acid)" strokeWidth="3" strokeLinecap="round" />
        </svg>
    );
}

function DashboardArt() {
    return (
        <svg className="artifact__canvas" viewBox="0 0 300 190" role="presentation">
            <rect x="0" y="0" width="64" height="190" fill="var(--color-background-secondary)" />
            {[20, 40, 60, 80].map((y) => (
                <rect key={y} x="16" y={y} width="32" height="5" fill="var(--color-border)" opacity="0.7" />
            ))}
            {[76, 128, 180].map((x) => (
                <g key={x}>
                    <rect x={x} y="16" width="46" height="34" fill="none" stroke="var(--color-border)" />
                    <rect x={x + 8} y="26" width="20" height="6" fill="var(--color-acid)" />
                    <rect x={x + 8} y="36" width="28" height="4" fill="var(--color-border)" opacity="0.6" />
                </g>
            ))}
            <rect x="232" y="16" width="52" height="34" fill="var(--color-primary)" />
            <rect x="240" y="26" width="20" height="6" fill="var(--color-white, #fff)" />
            <rect x="240" y="36" width="28" height="4" fill="var(--color-white, #fff)" opacity="0.7" />
            {[36, 58, 44, 70, 50, 30].map((h, i) => (
                <rect key={i} x={76 + i * 30} y={140 - h} width="20" height={h} fill={i === 4 ? "var(--color-acid)" : "var(--color-primary)"} opacity={i === 4 ? 1 : 0.8} />
            ))}
            <rect x="76" y="150" width="208" height="1" fill="var(--color-border)" opacity="0.5" />
            <rect x="76" y="160" width="12" height="12" fill="var(--color-background-secondary)" />
            <rect x="94" y="163" width="120" height="5" fill="var(--color-border)" opacity="0.6" />
        </svg>
    );
}

function ResponsiveNavArt() {
    return (
        <svg className="artifact__canvas" viewBox="0 0 300 190" role="presentation">
            <rect x="16" y="24" width="110" height="20" rx="3" fill="none" stroke="var(--color-border)" />
            {[28, 56, 84].map((x) => (
                <rect key={x} x={x} y="32" width="18" height="4" fill="var(--color-border)" />
            ))}
            <circle cx="112" cy="34" r="4" fill="var(--color-primary)" />
            <text x="16" y="58" fontSize="8" fill="var(--color-text-secondary, var(--color-border))" fontFamily="sans-serif">Desktop</text>

            <rect x="140" y="24" width="70" height="20" rx="3" fill="none" stroke="var(--color-border)" />
            {[150, 170].map((x) => (
                <rect key={x} x={x} y="32" width="14" height="4" fill="var(--color-border)" />
            ))}
            <rect x="196" y="30" width="10" height="8" fill="var(--color-primary)" />
            <text x="140" y="58" fontSize="8" fill="var(--color-text-secondary, var(--color-border))" fontFamily="sans-serif">Tablet</text>

            <rect x="226" y="24" width="54" height="20" rx="3" fill="none" stroke="var(--color-border)" />
            <path d="M270 30 h6 M270 34 h6 M270 38 h6" stroke="var(--color-acid)" strokeWidth="1.5" strokeLinecap="round" />
            <text x="226" y="58" fontSize="8" fill="var(--color-text-secondary, var(--color-border))" fontFamily="sans-serif">Mobile</text>

            <path d="M40 78 L40 168" stroke="var(--color-border)" strokeDasharray="3 4" />
            <rect x="60" y="80" width="180" height="86" fill="none" stroke="var(--color-border)" />
            <rect x="76" y="96" width="70" height="8" fill="var(--color-border)" opacity="0.6" />
            <rect x="76" y="112" width="110" height="5" fill="var(--color-border)" opacity="0.4" />
            <rect x="76" y="124" width="90" height="5" fill="var(--color-border)" opacity="0.4" />
            <rect x="76" y="142" width="56" height="14" rx="3" fill="var(--color-acid)" />
        </svg>
    );
}

function SignInArt() {
    return (
        <svg className="artifact__canvas" viewBox="0 0 300 190" role="presentation">
            <rect x="90" y="20" width="120" height="150" fill="none" stroke="var(--color-border)" />
            <rect x="130" y="36" width="40" height="8" fill="var(--color-primary)" />
            <rect x="108" y="60" width="84" height="18" fill="none" stroke="var(--color-border)" />
            <rect x="108" y="86" width="84" height="18" fill="none" stroke="var(--color-border)" />
            <circle cx="182" cy="95" r="4" fill="none" stroke="var(--color-border)" strokeWidth="1.2" />
            <rect x="108" y="112" width="84" height="18" rx="3" fill="var(--color-acid)" />
            <line x1="108" y1="140" x2="192" y2="140" stroke="var(--color-border)" opacity="0.5" />
            {[0, 1, 2].map((i) => (
                <circle key={i} cx={122 + i * 28} cy="152" r="9" fill="none" stroke="var(--color-border)" />
            ))}
        </svg>
    );
}
