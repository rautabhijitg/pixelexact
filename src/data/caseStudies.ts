export type CaseStudyArtVariant = "dashboard" | "mobile" | "modernization" | "aiWorkflow" | "onboarding";

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
        slug: "healthcare-self-service-portal-redesign",
        tag: "Healthcare / Enterprise UX",
        title: "Rebuilding Self-Service Trust in a Healthcare Records Portal",
        summary: "A fragmented legacy portal pushed over a thousand callers a day onto the phone line. Splitting it into a no-login status tracker and a full request portal cut IVR call volume by 25% in the first month.",
        metaDescription: "How redesigning a legacy healthcare records portal into a no-login status tracker and a full self-service request portal cut IVR call volume by 25% in the first month.",
        seoTitle: "Healthcare Portal Redesign Case Study: 25% Fewer IVR Calls",
        relatedService: "ux-product-design",
        art: "dashboard",
        focus: [
            "Make request status, expected delivery, and balances visible so users stop calling the phone line to find out",
            "Split one overloaded portal into a lightweight no-login tracker and a full authenticated request portal",
            "Prototype in HTML with AI-assisted tooling to cut stakeholder feedback cycles from 8–12 days to 2–3",
        ],
        publishedAt: "2026-10-03",
    },
    {
        slug: "startup-mvp-launch",
        tag: "B2B Fintech / UX Strategy",
        title: "Transforming B2B Fintech Client Onboarding",
        summary: "Redesigned a 20+ day, paper-based enterprise onboarding process into a unified, self-service digital experience targeting account activation in under 48 hours.",
        metaDescription: "How a leading US fintech provider cut enterprise client onboarding from 20+ business days to under 48 hours through unified, self-service UX.",
        seoTitle: "B2B Fintech Onboarding: From 20+ Days to 48 Hours",
        relatedService: "ux-product-design",
        art: "onboarding",
        focus: [
            "Replace a paper-based, multi-week onboarding process with a unified, self-service digital experience",
            "Eliminate redundant data entry across a five-product enterprise platform with a fill-once data architecture",
            "Design for US financial compliance (KYB, W-9, FinCEN UBO) from the start, not as a late addition",
        ],
        publishedAt: "2026-10-03",
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
