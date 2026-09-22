export type CaseStudyArtVariant = "dashboard" | "mobile" | "modernization";

export type CaseStudy = {
    slug: string;
    tag: string;
    title: string;
    summary: string;
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
        summary: "Modernized a legacy application's interface with a decoupled architecture.",
        relatedService: "legacy-application-modernization",
        art: "modernization",
        focus: [
            "Separate the presentation layer from legacy business logic without disrupting what already works",
            "Rebuild the interface on a modern, component-based frontend architecture",
            "Ship the modernized UI incrementally, screen by screen, alongside the existing system",
        ],
        publishedAt: "2026-01-01",
    },
];
