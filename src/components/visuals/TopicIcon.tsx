import { ListChecks, RefreshCw, Rocket, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
    "Legacy modernization": RefreshCw,
    Delivery: Rocket,
    Process: ListChecks,
};

/** Lightweight topic marker for Insights — an icon, not an illustration, on purpose. */
export default function TopicIcon({ topic }: { topic: string }) {
    const Icon = ICONS[topic] ?? ListChecks;
    return <Icon aria-hidden="true" size={18} />;
}
