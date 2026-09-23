export type Article = {
    slug: string;
    topic: string;
    title: string;
    /** On-page hero summary and Insights-index card blurb. */
    dek: string;
    /** SEO meta description, distinct from the on-page dek. Falls back to dek if omitted. */
    metaDescription?: string;
    /** <title> tag text, distinct from the on-page h1. Falls back to title if omitted. */
    seoTitle?: string;
    relatedService?: string;
    status: "coming-soon" | "published";
    publishedAt?: string;
    body?: string[];
};

export const articles: Article[] = [
    {
        slug: "modernizing-legacy-ui-without-touching-business-logic",
        topic: "Architecture & Modernization",
        title: "Modernizing Legacy UI Without Touching Underlying Business Logic",
        dek: "How isolating the presentation layer from core backend services allows enterprise teams to overhaul monolithic user experiences, eliminate technical debt, and deploy modern interfaces with zero backend downtime.",
        relatedService: "legacy-application-modernization",
        status: "coming-soon",
    },
    {
        slug: "how-we-deliver-projects-in-weeks-not-months",
        topic: "Velocity & AI Delivery",
        title: "How We Compress Enterprise Delivery Timelines into Weeks, Not Months",
        dek: "A breakdown of our AI-accelerated delivery pipeline: how senior-led workflows, reusable design tokens, and automated front-end scaffolding eliminate typical agency delivery bottlenecks without cutting quality.",
        relatedService: "how-we-deliver",
        status: "coming-soon",
    },
    {
        slug: "design-to-development-handoff-checklist",
        topic: "Design-to-Code Workflow",
        title: "The Zero-Drift Checklist: A Practical Guide to Design-to-Dev Handoff",
        dek: "Static mockups fail when edge cases and component governance are ignored. Here is the operational checklist our senior team uses to bridge Figma and production code with exact visual and behavioral fidelity.",
        metaDescription: "Eliminate visual drift and rework. Learn how mature product teams bridge Figma and production code using a battle-tested design-to-development checklist.",
        seoTitle: "Design-to-Development Handoff: The Zero-Drift Checklist",
        relatedService: "frontend-application-development",
        status: "published",
        publishedAt: "2026-09-23",
    },
];
