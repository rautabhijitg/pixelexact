export type HomeFaqLink = {
    /** Literal substring inside `answer` that gets replaced with a link to `href`, labeled `label`. */
    token: string;
    href: string;
    label: string;
};

export type HomeFaq = {
    question: string;
    answer: string;
    links?: HomeFaqLink[];
};

// Sourced from each service's own positioning and FAQs in serviceData.ts —
// rewritten at homepage scope (not copied verbatim) to avoid duplicate
// content across pages, while staying factually consistent with them.
export const homeFaqs: HomeFaq[] = [
    {
        question: "What services does Pixel Exact provide?",
        answer: "Seven services built around one connected delivery process: UX & Product Design, UI & Design Systems, Frontend & Application Development, Website Design & Development, Consultancy, a production-ready Design Toolkit, and Legacy Application Modernization. Each can be engaged on its own or combined, depending on whether you need a full product built end to end or targeted support for one bottleneck. See the {{link}} for what each one covers.",
        links: [{ token: "{{link}}", href: "/services", label: "full services overview" }],
    },
    {
        question: "What does a UX & Product Design engagement include?",
        answer: "Typically user research, information architecture, wireframes, interactive prototypes, and usability testing, aimed at validating a product direction with real user behavior before any UI or code work begins. It's the right starting point when you're launching something new, seeing unexplained drop-off in a key flow, or need to de-risk a direction with stakeholders before committing engineering time. Full detail in {{link}}.",
        links: [{ token: "{{link}}", href: "/services/ux-product-design", label: "UX & Product Design" }],
    },
    {
        question: "What's the difference between UI & Design Systems and the Design Toolkit?",
        answer: "{{link1}} builds a bespoke visual language and governed component library from your brand and product requirements. The {{link2}} is a ready-made library of 40+ pre-built, accessible components you can adopt and customize immediately, useful when you need a production-ready foundation without a multi-month system-building phase. Teams with distinctive brand requirements typically start with the former; teams needing to move fast, or unifying products after an acquisition, often start with the latter.",
        links: [
            { token: "{{link1}}", href: "/services/ui-design-systems", label: "UI & Design Systems" },
            { token: "{{link2}}", href: "/services/design-toolkit", label: "Design Toolkit" },
        ],
    },
    {
        question: "Can you build the frontend for a product we've already designed?",
        answer: "Yes. We regularly build production frontends from approved Figma files delivered by an in-house team or an external design studio, matching the design exactly rather than reinterpreting it. We're technology-agnostic on the frontend (React, Next.js, Angular, Vue) and integrate with your existing backend stack. See {{link}}.",
        links: [{ token: "{{link}}", href: "/services/frontend-application-development", label: "Frontend & Application Development" }],
    },
    {
        question: "Can you modernize a legacy application without rewriting the backend?",
        answer: "Yes. {{link}} rebuilds only the presentation layer, the part users see and interact with, while your backend logic, workflows, and existing HTML stay untouched. A parallel styling system lets the new interface roll out screen by screen alongside the old one, so nothing breaks mid-migration. We typically build a working proof of concept on one real screen before committing to a full rollout.",
        links: [{ token: "{{link}}", href: "/services/legacy-application-modernization", label: "Legacy Application Modernization" }],
    },
    {
        question: "What's included in a Website Design & Development engagement?",
        answer: "UX, visual design, frontend build, technical SEO, and Core Web Vitals performance work, bundled into a single engagement for marketing and corporate websites rather than split across separate vendors. This differs from UI & Design Systems or Frontend & Application Development, which are aimed at product interfaces and application-scale work rather than a standalone website. More in {{link}}.",
        links: [{ token: "{{link}}", href: "/services/website-design-development", label: "Website Design & Development" }],
    },
    {
        question: "When should we book a Consultancy engagement instead of a full project?",
        answer: "When you have a defined problem, an architectural question, or a deadline that needs senior clarity rather than extra hands on keyboards, for example, a UX audit, a WCAG accessibility review, or a frontend architecture diagnostic. If the findings surface work you can't staff internally, it can expand into our UX, Design System, or Frontend teams. See {{link}}.",
        links: [{ token: "{{link}}", href: "/services/consultancy", label: "Consultancy" }],
    },
    {
        question: "Can your team work alongside our existing in-house engineers or designers?",
        answer: "Yes. We adapt to your existing Git workflows, CI/CD pipelines, branching conventions, and ticketing systems, and hand over modular, documented components your team can review, merge, and extend directly. This applies whether we're building a full frontend, extending a design system, or advising alongside your team through {{link}}.",
        links: [{ token: "{{link}}", href: "/services/consultancy", label: "Consultancy" }],
    },
    {
        question: "How does AI fit into your delivery process?",
        answer: "It accelerates the repetitive, mechanical parts of the work, research synthesis, boilerplate scaffolding, accessibility linting, and documentation, so a senior team spends its time on architecture, design judgment, and code review instead. Every decision is still made and owned by a senior practitioner; AI speeds up execution, it doesn't replace judgment. More in {{link}}.",
        links: [{ token: "{{link}}", href: "/services/how-we-deliver", label: "How We Deliver" }],
    },
    {
        question: "How does the engagement process work, from first contact to delivery?",
        answer: "Most engagements move through three phases: aligning on outcome, scope, and risks; delivering in visible weekly increments so feedback arrives while changes are still cheap; and a launch phase that leaves your team with a documented, clear path forward. The exact shape depends on which service, or combination of services, fits your project. See {{link}} for the full breakdown.",
        links: [{ token: "{{link}}", href: "/services/how-we-deliver", label: "how we deliver" }],
    },
];

/** Plain-text answer with link tokens resolved to their visible label — used for
 * FAQPage JSON-LD so structured data matches rendered content exactly. */
export function homeFaqPlainAnswer(faq: HomeFaq): string {
    let text = faq.answer;
    for (const link of faq.links ?? []) {
        text = text.split(link.token).join(link.label);
    }
    return text;
}
