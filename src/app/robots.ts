import type { MetadataRoute } from "next";

// Named AI crawlers get their own explicit `allow: "/"` entries. The
// wildcard rule below already permits everyone, but scanners that check for
// AI readiness look for crawlers to be named individually rather than
// relying on the catch-all.
const AI_CRAWLER_USER_AGENTS = [
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "PerplexityBot",
    "Google-Extended",
    "CCBot",
];

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            { userAgent: "*", allow: "/" },
            ...AI_CRAWLER_USER_AGENTS.map((userAgent) => ({ userAgent, allow: "/" })),
        ],
        sitemap: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/sitemap.xml`,
    };
}
