export type CaseStudyArtVariant = "dashboard" | "mobile" | "modernization" | "aiWorkflow";

export type CaseStudy = {
    slug: string;
    tag: string;
    title: string;
    /** On-page hero summary and /work listing card blurb. */
    summary: string;
    /** SEO meta description, distinct from the on-page summary. Falls back to summary if omitted. */
    metaDescription?: string;
    /** <title> tag text, distinct from the on-page h1. Falls back to title if omitted. */
    seoTitle?: string;
    relatedService: string;
    focus: string[];
    publishedAt: string;
    art: CaseStudyArtVariant;
};

export const caseStudies: CaseStudy[] = [
    {
        slug: "saas-dashboard-redesign",
        tag: "SaaS / Product redesign",
        title: "Dashboard redesign & design system",
        summary: "Rebuilt a legacy dashboard's UX and UI, then implemented the frontend component by component.",
        relatedService: "ui-design-systems",
        art: "dashboard",
        focus: [
            "Audit the existing dashboard's UX and identify where navigation and information density were slowing users down",
            "Redesign the interface and extract a reusable design system from the result",
            "Implement the new interface in production, component by component, against the same design",
        ],
        publishedAt: "2026-01-01",
    },
    {
        slug: "startup-mvp-launch",
        tag: "Startup / MVP",
        title: "Research-led product launch",
        summary: "Took an early-stage product from user research to a launch-ready, validated interface in weeks.",
        relatedService: "ux-product-design",
        art: "mobile",
        focus: [
            "Run early research to pressure-test the product direction before committing to a build",
            "Design and prototype the core flows, validated with usability testing",
            "Hand off a launch-ready interface with the fidelity engineering needed to build it correctly",
        ],
        publishedAt: "2026-01-01",
    },
    {
        slug: "legacy-presentation-layer-modernization",
        tag: "Legacy modernization",
        title: "Presentation-layer modernization",
        summary: "A modern, on-brand interface for a mission-critical legacy application, delivered without a backend rewrite or business disruption.",
        metaDescription: "How a mission-critical enterprise legacy application got a modern, consistent interface without a backend rewrite: a presentation-layer modernization case study covering design systems, SCSS architecture, and incremental migration.",
        seoTitle: "Legacy Application Modernization Case Study: Presentation-Layer Rebuild",
        relatedService: "legacy-application-modernization",
        art: "modernization",
        focus: [
            "Separate the presentation layer from legacy business logic without disrupting what already works",
            "Rebuild the interface on a modern, component-based frontend architecture",
            "Ship the modernized UI incrementally, screen by screen, alongside the existing system",
        ],
        publishedAt: "2026-01-01",
    },
    {
        slug: "pixel-exact-ai-enabled-website",
        tag: "AI-Enabled Delivery",
        title: "Our Own AI-Enabled Website Build",
        summary: "How we used ChatGPT, Claude, and Gemini inside a senior-led delivery process to design, build, and ship pixelexact.com.",
        metaDescription: "How Pixel Exact used ChatGPT, Claude, and Gemini inside a senior-led delivery process to design, build, and ship pixelexact.com.",
        seoTitle: "How We Built Our Website With AI-Enabled Delivery",
        relatedService: "how-we-deliver",
        art: "aiWorkflow",
        focus: [
            "Use AI throughout strategy, design, development, content, and QA, without letting it make unreviewed decisions",
            "Keep senior judgment accountable for architecture, accessibility, performance, and brand quality at every stage",
            "Prove the same delivery workflow Pixel Exact offers clients, on Pixel Exact's own website",
        ],
        publishedAt: "2026-10-03",
    },
];
