export type Article = {
    slug: string;
    topic: string;
    title: string;
    dek: string;
    relatedService?: string;
    status: "coming-soon" | "published";
    publishedAt?: string;
    body?: string[];
};

export const articles: Article[] = [
    {
        slug: "modernizing-legacy-ui-without-touching-business-logic",
        topic: "Legacy modernization",
        title: "Modernizing a legacy UI without touching your business logic",
        dek: "How a decoupled presentation layer lets you rebuild the interface without putting the rest of the system at risk.",
        relatedService: "legacy-application-modernization",
        status: "coming-soon",
    },
    {
        slug: "how-we-deliver-projects-in-weeks-not-months",
        topic: "Delivery",
        title: "How we deliver projects in weeks, not months",
        dek: "The mechanics behind a senior-led, AI-enabled workflow, and where the time actually gets saved.",
        relatedService: "how-we-deliver",
        status: "coming-soon",
    },
    {
        slug: "design-to-development-handoff-checklist",
        topic: "Process",
        title: "A practical checklist for design-to-development handoff",
        dek: "The recurring places handoff breaks down between design and engineering, and how to close them.",
        relatedService: "frontend-application-development",
        status: "coming-soon",
    },
];
