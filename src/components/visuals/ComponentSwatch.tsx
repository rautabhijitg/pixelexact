export type ComponentKind = "button" | "input" | "card" | "modal" | "nav" | "table" | "tabs" | "toast" | "chart" | "form" | "menu";

export const toolkitItems: { kind: ComponentKind; label: string }[] = [
    { kind: "button", label: "Button" },
    { kind: "input", label: "Input" },
    { kind: "card", label: "Card" },
    { kind: "modal", label: "Modal" },
    { kind: "nav", label: "Nav" },
    { kind: "table", label: "Table" },
    { kind: "tabs", label: "Tabs" },
    { kind: "toast", label: "Toast" },
    { kind: "chart", label: "Chart" },
    { kind: "form", label: "Form" },
    { kind: "menu", label: "Menu" },
];

export default function ComponentSwatch({ kind, label }: { kind: ComponentKind; label: string }) {
    return (
        <div className="component-swatch">
            <svg width="40" height="40" viewBox="0 0 64 64" aria-hidden="true">
                {renderKind(kind)}
            </svg>
            <span>{label}</span>
        </div>
    );
}

function renderKind(kind: ComponentKind) {
    switch (kind) {
        case "button":
            return <rect x="8" y="24" width="48" height="16" rx="8" fill="var(--color-primary)" />;
        case "input":
            return (
                <>
                    <rect x="6" y="24" width="52" height="16" fill="none" stroke="var(--color-border)" />
                    <line x1="14" y1="28" x2="14" y2="36" stroke="var(--color-acid)" strokeWidth="2" />
                </>
            );
        case "card":
            return (
                <>
                    <rect x="10" y="10" width="44" height="44" fill="none" stroke="var(--color-border)" />
                    <rect x="16" y="18" width="26" height="4" fill="var(--color-border)" />
                    <rect x="16" y="28" width="32" height="3" fill="var(--color-border)" opacity="0.6" />
                    <rect x="16" y="35" width="24" height="3" fill="var(--color-border)" opacity="0.6" />
                </>
            );
        case "modal":
            return (
                <>
                    <rect x="10" y="8" width="44" height="40" fill="none" stroke="var(--color-border)" />
                    <path d="M42 14 L48 20 M48 14 L42 20" stroke="var(--color-border)" strokeWidth="1.5" strokeLinecap="round" />
                    <rect x="16" y="36" width="20" height="8" rx="4" fill="var(--color-acid)" />
                </>
            );
        case "nav":
            return (
                <>
                    {[10, 26, 42].map((x) => (
                        <rect key={x} x={x} y="16" width="10" height="4" fill="var(--color-border)" />
                    ))}
                    <circle cx="54" cy="18" r="4" fill="var(--color-primary)" />
                </>
            );
        case "table":
            return (
                <>
                    <rect x="8" y="10" width="48" height="40" fill="none" stroke="var(--color-border)" />
                    <line x1="8" y1="22" x2="56" y2="22" stroke="var(--color-border)" />
                    <line x1="8" y1="34" x2="56" y2="34" stroke="var(--color-border)" />
                    <line x1="30" y1="10" x2="30" y2="50" stroke="var(--color-border)" />
                </>
            );
        case "tabs":
            return (
                <>
                    <rect x="8" y="24" width="16" height="16" fill="none" stroke="var(--color-border)" />
                    <rect x="26" y="24" width="16" height="16" fill="var(--color-primary)" />
                    <rect x="44" y="24" width="12" height="16" fill="none" stroke="var(--color-border)" />
                </>
            );
        case "toast":
            return (
                <>
                    <rect x="8" y="24" width="48" height="16" rx="4" fill="none" stroke="var(--color-border)" />
                    <circle cx="18" cy="32" r="3" fill="var(--color-acid)" />
                    <rect x="26" y="29" width="26" height="6" fill="var(--color-border)" />
                </>
            );
        case "chart":
            return (
                <>
                    {[20, 32, 14, 26].map((h, i) => (
                        <rect key={i} x={12 + i * 12} y={50 - h} width="8" height={h} fill={i === 1 ? "var(--color-acid)" : "var(--color-primary)"} opacity={i === 1 ? 1 : 0.85} />
                    ))}
                </>
            );
        case "form":
            return (
                <>
                    {[12, 28, 44].map((y) => (
                        <rect key={y} x="8" y={y} width="48" height="10" fill="none" stroke="var(--color-border)" />
                    ))}
                </>
            );
        case "menu":
            return (
                <>
                    {[14, 24, 34, 44].map((y) => (
                        <g key={y}>
                            <circle cx="12" cy={y} r="2" fill="var(--color-primary)" />
                            <rect x="20" y={y - 2} width="32" height="4" fill="var(--color-border)" />
                        </g>
                    ))}
                </>
            );
        default:
            return null;
    }
}
