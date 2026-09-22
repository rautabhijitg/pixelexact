import BrowserChrome from "./BrowserChrome";
import ComponentSwatch, { toolkitItems } from "./ComponentSwatch";

type ServiceArtVariant = "ux" | "ui" | "frontend" | "website" | "consultancy" | "toolkit" | "modernization";

/**
 * One distinct visual per service — never the same artifact reused across
 * pages. Abstract, brand-colored interface compositions rather than photos,
 * consistent with the rest of the site's geometric, precision-grid language.
 */
export default function ServiceArt({ variant }: { variant: ServiceArtVariant }) {
    if (variant === "toolkit") {
        return (
            <div className="artifact service-art" aria-hidden="true">
                <BrowserChrome />
                <div className="service-art__toolkit-grid">
                    {toolkitItems.slice(0, 8).map((item) => (
                        <ComponentSwatch key={item.kind} kind={item.kind} label={item.label} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <>
            <div className={`artifact ${variant === "consultancy" ? "service-art--compact" : "service-art"}`} aria-hidden="true">
                <BrowserChrome />
                {variant === "ux" && <UxArt />}
                {variant === "ui" && <UiArt />}
                {variant === "frontend" && <FrontendArt />}
                {variant === "website" && <WebsiteArt />}
                {variant === "consultancy" && <ConsultancyArt />}
                {variant === "modernization" && <ModernizationArt />}
            </div>
            {variant === "modernization" && (
                <p className="service-art__caption">Conceptual example — illustrates the legacy-to-modern transformation, not an actual client screenshot.</p>
            )}
        </>
    );
}

function UxArt() {
    return (
        <svg className="artifact__canvas" viewBox="0 0 480 300" role="presentation">
            {/* research cluster */}
            {[[60, 40], [110, 60], [40, 90], [90, 100]].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="4" fill="var(--color-border)" />
            ))}
            <path d="M60 40 L110 60 M60 40 L40 90 M110 60 L90 100 M40 90 L90 100" stroke="var(--color-border)" strokeWidth="1" />

            {/* flow */}
            <rect x="30" y="160" width="110" height="64" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" />
            <rect x="46" y="178" width="50" height="6" fill="var(--color-primary)" />
            <rect x="46" y="192" width="70" height="4" fill="var(--color-primary)" opacity="0.5" />

            <path d="M144 192 L182 192" stroke="var(--color-primary)" strokeWidth="1.5" markerEnd="url(#arrow)" />

            <rect x="186" y="160" width="110" height="64" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" />
            <rect x="202" y="178" width="50" height="6" fill="var(--color-primary)" />
            <rect x="202" y="192" width="70" height="4" fill="var(--color-primary)" opacity="0.5" />

            <path d="M300 192 L338 192" stroke="var(--color-acid)" strokeWidth="1.5" markerEnd="url(#arrow-accent)" />

            <rect x="342" y="160" width="108" height="64" fill="var(--color-primary)" />
            <rect x="358" y="178" width="50" height="6" fill="var(--color-white, #fff)" />
            <rect x="358" y="192" width="70" height="4" fill="var(--color-white, #fff)" opacity="0.6" />

            <defs>
                <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0 0 L6 3 L0 6 Z" fill="var(--color-primary)" />
                </marker>
                <marker id="arrow-accent" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0 0 L6 3 L0 6 Z" fill="var(--color-acid)" />
                </marker>
            </defs>
        </svg>
    );
}

function UiArt() {
    const tokens = ["var(--color-primary)", "var(--color-acid)", "var(--color-border)", "var(--color-background-secondary)"];
    return (
        <svg className="artifact__canvas" viewBox="0 0 480 300" role="presentation">
            {tokens.map((fill, i) => (
                <rect key={i} x={30 + i * 46} y="30" width="34" height="34" fill={fill} stroke={i === 3 ? "var(--color-border)" : "none"} />
            ))}
            <rect x="230" y="30" width="34" height="34" fill="none" stroke="var(--color-border)" strokeDasharray="3 3" />

            <rect x="30" y="110" width="140" height="34" rx="17" fill="var(--color-primary)" />
            <rect x="190" y="110" width="140" height="34" fill="none" stroke="var(--color-border)" />
            <line x1="204" y1="127" x2="204" y2="127" stroke="var(--color-acid)" />

            <rect x="30" y="168" width="140" height="86" fill="none" stroke="var(--color-border)" />
            <rect x="44" y="182" width="80" height="6" fill="var(--color-border)" />
            <rect x="44" y="196" width="100" height="4" fill="var(--color-border)" opacity="0.6" />
            <rect x="44" y="208" width="60" height="4" fill="var(--color-border)" opacity="0.6" />
            <rect x="44" y="226" width="60" height="18" rx="9" fill="var(--color-acid)" />

            {[0, 1, 2].map((i) => (
                <rect key={i} x={190 + i * 50} y="168" width="40" height="86" fill={i === 1 ? "var(--color-primary)" : "none"} stroke="var(--color-border)" />
            ))}
        </svg>
    );
}

function FrontendArt() {
    return (
        <svg className="artifact__canvas" viewBox="0 0 480 300" role="presentation">
            <rect x="30" y="30" width="190" height="20" fill="var(--color-border)" opacity="0.5" />
            <rect x="30" y="64" width="190" height="70" fill="none" stroke="var(--color-border)" />
            <rect x="44" y="78" width="90" height="8" fill="var(--color-border)" />
            <rect x="44" y="94" width="120" height="5" fill="var(--color-border)" opacity="0.6" />
            <rect x="44" y="106" width="70" height="5" fill="var(--color-border)" opacity="0.6" />
            <rect x="30" y="150" width="90" height="26" rx="4" fill="var(--color-primary)" />

            <line x1="248" y1="10" x2="248" y2="290" stroke="var(--color-border)" strokeDasharray="4 6" />
            <path d="M232 145 L246 138 M232 152 L246 159 M264 138 L278 145 L264 152" fill="none" stroke="var(--color-acid)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

            {[[280, 34, 120], [280, 48, 90], [296, 62, 70], [280, 76, 110], [296, 90, 60], [280, 104, 130], [296, 118, 50], [280, 132, 95]].map(([x, y, w], i) => (
                <rect key={i} x={x} y={y} width={w} height="6" fill={i === 3 ? "var(--color-acid)" : "var(--color-primary)"} opacity={i === 3 ? 1 : 0.55} />
            ))}
        </svg>
    );
}

function WebsiteArt() {
    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    return (
        <svg className="artifact__canvas" viewBox="0 0 480 300" role="presentation">
            {/* site nav */}
            <rect x="20" y="16" width="440" height="24" fill="none" stroke="var(--color-border)" />
            <circle cx="34" cy="28" r="4" fill="var(--color-acid)" />
            {[356, 384, 412].map((x) => (
                <rect key={x} x={x} y="25" width="16" height="4" fill="var(--color-border)" />
            ))}

            {/* hero */}
            <rect x="20" y="54" width="270" height="76" fill="var(--color-background-secondary)" />
            <rect x="308" y="64" width="150" height="12" fill="var(--color-primary)" />
            <rect x="308" y="84" width="130" height="5" fill="var(--color-border)" />
            <rect x="308" y="94" width="110" height="5" fill="var(--color-border)" opacity="0.6" />
            <rect x="308" y="110" width="76" height="18" rx="4" fill="var(--color-acid)" />

            {/* content cards */}
            {[20, 178, 336].map((x) => (
                <g key={x}>
                    <rect x={x} y="146" width="124" height="72" fill="none" stroke="var(--color-border)" />
                    <rect x={x + 12} y="160" width="60" height="6" fill="var(--color-border)" />
                    <rect x={x + 12} y="174" width="90" height="4" fill="var(--color-border)" opacity="0.6" />
                    <rect x={x + 12} y="184" width="70" height="4" fill="var(--color-border)" opacity="0.6" />
                </g>
            ))}

            {/* footer bar */}
            <rect x="20" y="234" width="440" height="16" fill="var(--color-border)" opacity="0.35" />

            {/* performance score ring */}
            <circle cx="404" cy="270" r={radius} fill="none" stroke="var(--color-border)" strokeWidth="3" />
            <circle
                cx="404"
                cy="270"
                r={radius}
                fill="none"
                stroke="var(--color-acid)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={`${circumference * 0.94} ${circumference}`}
                transform="rotate(-90 404 270)"
            />
            <text x="404" y="274" textAnchor="middle" fontSize="13" fill="var(--color-primary)" fontFamily="sans-serif">98</text>

            {/* search / seo glyph */}
            <circle cx="60" cy="264" r="9" fill="none" stroke="var(--color-primary)" strokeWidth="2" />
            <line x1="67" y1="271" x2="76" y2="280" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

function ModernizationArt() {
    return (
        <svg className="artifact__canvas" viewBox="0 0 480 300" role="presentation">
            {/* legacy panel */}
            <rect x="20" y="20" width="8" height="8" fill="var(--color-border)" />
            <text x="36" y="27" fontSize="10" letterSpacing="1" fill="var(--color-muted-dark, var(--color-text-secondary))" fontFamily="sans-serif">LEGACY</text>
            <rect x="20" y="40" width="200" height="10" fill="var(--color-border)" opacity="0.6" />
            {[62, 84, 104, 122, 140, 160].map((y, i) => (
                <rect key={y} x={20 + (i % 2) * 4} y={y} width={190 - (i % 3) * 20} height="14" fill="none" stroke="var(--color-border)" />
            ))}
            <rect x="20" y="186" width="70" height="18" fill="none" stroke="var(--color-border)" />
            <rect x="98" y="186" width="70" height="18" fill="none" stroke="var(--color-border)" />
            <rect x="20" y="220" width="200" height="8" fill="var(--color-border)" opacity="0.4" />
            <rect x="20" y="238" width="140" height="8" fill="var(--color-border)" opacity="0.4" />

            {/* divider + transformation arrow */}
            <line x1="240" y1="10" x2="240" y2="290" stroke="var(--color-border)" strokeDasharray="4 6" />
            <path d="M222 150 L236 150 M230 143 L238 150 L230 157" fill="none" stroke="var(--color-acid)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* modern panel */}
            <rect x="260" y="20" width="8" height="8" rx="2" fill="var(--color-acid)" />
            <text x="276" y="27" fontSize="10" letterSpacing="1" fill="var(--color-primary)" fontFamily="sans-serif">MODERN</text>
            <rect x="260" y="44" width="200" height="20" rx="5" fill="var(--color-primary)" />
            <rect x="260" y="78" width="150" height="9" rx="4" fill="var(--color-border)" opacity="0.6" />
            <rect x="260" y="94" width="110" height="7" rx="3" fill="var(--color-border)" opacity="0.4" />

            {[260, 340, 420].map((x) => (
                <g key={x}>
                    <rect x={x} y="120" width="60" height="54" rx="6" fill="none" stroke="var(--color-border)" />
                    <rect x={x + 10} y="132" width="24" height="24" rx="5" fill="var(--color-background-secondary)" />
                </g>
            ))}

            <rect x="260" y="192" width="130" height="24" rx="12" fill="var(--color-acid)" />
            <rect x="260" y="234" width="200" height="1" stroke="none" fill="var(--color-border)" opacity="0.5" />
            <rect x="260" y="246" width="180" height="7" rx="3" fill="var(--color-border)" opacity="0.4" />
            <rect x="260" y="262" width="140" height="7" rx="3" fill="var(--color-border)" opacity="0.4" />
        </svg>
    );
}

function ConsultancyArt() {
    return (
        <svg className="artifact__canvas" viewBox="0 0 480 150" role="presentation">
            <rect x="40" y="20" width="240" height="110" fill="none" stroke="var(--color-border)" />
            <rect x="56" y="36" width="90" height="8" fill="var(--color-border)" />
            <rect x="56" y="54" width="130" height="5" fill="var(--color-border)" opacity="0.6" />
            <rect x="56" y="66" width="100" height="5" fill="var(--color-border)" opacity="0.6" />
            <rect x="56" y="90" width="70" height="20" rx="4" fill="var(--color-primary)" />

            <circle cx="146" cy="40" r="9" fill="var(--color-acid)" />
            <text x="146" y="44" textAnchor="middle" fontSize="10" fill="var(--color-white, #fff)" fontFamily="sans-serif">1</text>
            <path d="M155 40 L200 40" stroke="var(--color-acid)" strokeDasharray="2 3" />

            <circle cx="90" cy="100" r="9" fill="var(--color-acid)" />
            <text x="90" y="104" textAnchor="middle" fontSize="10" fill="var(--color-white, #fff)" fontFamily="sans-serif">2</text>
            <path d="M99 100 L200 100" stroke="var(--color-acid)" strokeDasharray="2 3" />

            <rect x="330" y="40" width="110" height="8" fill="var(--color-border)" />
            <rect x="330" y="58" width="150" height="6" fill="var(--color-border)" opacity="0.6" />
            <rect x="330" y="72" width="150" height="6" fill="var(--color-border)" opacity="0.6" />
            <rect x="330" y="86" width="120" height="6" fill="var(--color-border)" opacity="0.6" />
        </svg>
    );
}
