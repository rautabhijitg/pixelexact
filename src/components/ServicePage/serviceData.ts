export type ServicePageData = {
    slug: string;
    eyebrow: string;
    title: string;
    summary: string;
    metaDescription: string;
    intro: string;
    situations: string[];
    outcomes: string[];
    deliverables: string[];
    process: [string, string][];
    faqs: [string, string][];
    relatedServices: string[];
    art?: "ux" | "ui" | "frontend" | "website" | "consultancy" | "toolkit";
    /** Short, scannable one-liner for the Services mega menu (nav), distinct from the hero summary. */
    menuDescription: string;
};

export const servicePages: Record<string, ServicePageData> = {
    "ux-product-design": {
        slug: "ux-product-design",
        eyebrow: "SERVICE / 01",
        title: "UX & Product Design",
        summary: "Make the right problem visible before making anything pretty.",
        metaDescription: "Senior-led UX and product design: research, information architecture, wireframes, prototyping, and usability testing that validate direction before you build.",
        intro: "We combine research, product thinking, and usability validation to turn complex requirements into clear experiences people can actually use, before a single screen gets designed.",
        situations: [
            "You're about to build something new and don't want to guess what users actually need.",
            "Usage doesn't match what you expected, and support tickets keep pointing at the same confusion.",
            "You need to validate a direction before committing engineering time to it.",
            "A core flow, like onboarding, checkout, or setup, loses people and you can't pinpoint where or why.",
        ],
        outcomes: ["Clearer product direction", "Flows grounded in real user behavior", "Accessible experiences ready to build"],
        deliverables: ["User research and interviews", "Information architecture and user flows", "Wireframes, prototypes, and usability testing", "Accessibility and experience audits"],
        process: [["Understand", "We establish the users, constraints, and decisions that matter."], ["Shape", "We turn evidence into flows, priorities, and a usable product direction."], ["Validate", "We test the experience with real people before development begins."]],
        faqs: [
            ["What does a UX design engagement include?", "Depending on the gap, it can include user research and interviews, information architecture, user flows, wireframes, prototypes, and usability testing, always ending with a direction validated with real people rather than internal opinion."],
            ["Can you validate a direction without a full design project?", "Yes. If you need a focused review or a second opinion rather than a full engagement, that's what Consultancy is for."],
            ["Do you design for accessibility by default?", "Accessibility is part of how we evaluate any experience, not a separate add-on requested at the end. Audits are included in the deliverables above."],
            ["What if we already have some research?", "We build on what exists rather than repeating it. The goal is a validated direction, not a fixed research process."],
        ],
        relatedServices: ["ui-design-systems", "consultancy"],
        art: "ux",
        menuDescription: "Research, UX strategy, and usability testing that validate your product before you build.",
    },
    "ui-design-systems": {
        slug: "ui-design-systems",
        eyebrow: "SERVICE / 02",
        title: "UI & Design Systems",
        summary: "Create a visual language that stays consistent as the product grows.",
        metaDescription: "UI design and design systems built to scale: interface design, design tokens, component libraries, and documented governance so consistency holds as you grow.",
        intro: "We design polished interfaces and the systems behind them, so every new screen feels intentional, familiar, and ready for production, without starting from a blank page each time.",
        situations: [
            "Every new feature seems to introduce a new pattern, and the product feels less consistent than it did last year.",
            "You need a public-facing website that matches the ambition of the product behind it.",
            "The interface works but feels dated next to newer competitors.",
            "Design and engineering keep rebuilding similar components differently, and no one owns the difference.",
        ],
        outcomes: ["A coherent, distinctive product language", "Reusable components that reduce design drift", "A documented system teams can govern"],
        deliverables: ["Interface and visual design", "Design tokens and component libraries", "Responsive states and interaction patterns", "Design system documentation and governance"],
        process: [["Define", "We align the visual language with the product, brand, and people using it."], ["Systemize", "We turn interface decisions into flexible, reusable components."], ["Scale", "We document the rules so the system keeps working beyond launch."]],
        faqs: [
            ["When should a startup invest in a design system?", "Once more than one person is building screens, or the product is growing faster than your visual consistency can keep up. Before that, a well-designed interface is usually enough on its own."],
            ["Do you design the marketing website as well as the product?", "Yes, website and digital branding are part of this service alongside the product interface, so both share the same visual language."],
            ["Will our team be able to maintain the system after you leave?", "That's the point of the documentation and governance deliverable: rules your team can apply to new screens without us in the room."],
            ["What is actually included in a design system?", "Design tokens, a component library, documented interaction and responsive states, and governance notes on when and how to extend it."],
        ],
        relatedServices: ["ux-product-design", "frontend-application-development", "website-design-development"],
        art: "ui",
        menuDescription: "Interface design and design systems that keep your product consistent as it scales.",
    },
    "frontend-application-development": {
        slug: "frontend-application-development",
        eyebrow: "SERVICE / 03",
        title: "Frontend & Application Development",
        summary: "Build the interface to match the design, exactly.",
        metaDescription: "Pixel-accurate frontend and application development: component-driven builds, responsive implementation, and presentation-layer modernization for legacy interfaces.",
        intro: "Our frontend team turns approved design into robust, accessible product experiences without compromising the details users notice, because the people building it are the people who designed it.",
        situations: [
            "A finished design keeps losing fidelity every time it gets built.",
            "You have a legacy application whose interface no longer reflects the quality of the product underneath it.",
            "You need frontend capacity that doesn't require months of onboarding.",
            "The product has outgrown its original frontend architecture, and every change now feels riskier than the last.",
        ],
        outcomes: ["Pixel-accurate implementation", "Responsive, accessible interfaces", "A maintainable codebase your team can extend"],
        deliverables: ["Production React and Next.js interfaces", "Component-driven frontend architecture", "Responsive implementation across devices", "Legacy presentation-layer modernization"],
        process: [["Plan", "We establish the component model, technical constraints, and delivery path."], ["Build", "We implement the interface in small, reviewable pieces."], ["Refine", "We compare the result to the design, test devices, and remove drift."]],
        faqs: [
            ["Can you build the frontend for a design you didn't create?", "Yes. Most engagements pair our own design work with implementation, but we also build from a settled design handed off by your team."],
            ["What does frontend modernization involve?", "Rebuilding the presentation layer, a legacy application's interface, on modern, component-driven architecture without touching the backend or business logic underneath it."],
            ["Can you work with an existing engineering team?", "Yes. We work inside your codebase and conventions where that makes sense, and hand off component-driven architecture your team can extend on its own."],
            ["Do you only build in React and Next.js?", "That's our default stack for production interfaces. If your product runs on something else, tell us and we'll scope accordingly."],
        ],
        relatedServices: ["ui-design-systems", "design-toolkit", "website-design-development"],
        art: "frontend",
        menuDescription: "Pixel-accurate frontend builds and application development that match your design exactly.",
    },
    "website-design-development": {
        slug: "website-design-development",
        eyebrow: "SERVICE / 04",
        title: "Website Design & Development",
        summary: "A website that looks right, loads fast, and is built to be found.",
        metaDescription: "Website design and development as one engagement: UX, UI, frontend implementation, performance, accessibility, and technical SEO foundations.",
        intro: "We design and build the whole website, structure, interface, frontend code, and the performance and SEO foundations underneath it, as one engagement instead of three separate ones.",
        situations: [
            "Your website doesn't reflect the quality of the product or business behind it.",
            "You need a new site and don't want to coordinate a designer, a developer, and an SEO consultant separately.",
            "Your current site is slow, hard to maintain, or falls short on accessibility.",
            "You're launching something new and need a site that's ready for real traffic and real search visibility from day one.",
        ],
        outcomes: ["A website designed and built by one team", "Fast, accessible pages that hold up under real traffic", "A technical foundation search engines can actually index"],
        deliverables: ["Website UX and information architecture", "Interface design and responsive layouts", "Production frontend build, performance-tuned", "Technical SEO and accessibility foundations"],
        process: [["Plan", "We define the site's structure, content needs, and technical requirements before design starts."], ["Design & Build", "We design the interface and build the frontend in the same process, so nothing drifts between them."], ["Launch & Tune", "We test performance, accessibility, and search fundamentals, then ship."]],
        faqs: [
            ["How is this different from UI & Design Systems or Frontend & Application Development?", "Those services go deep on interface design or frontend engineering, usually for an existing product. Website Design & Development bundles both, plus performance and SEO groundwork, as one engagement for a standalone website."],
            ["Do you handle SEO as part of this?", "We build the technical foundations search engines depend on: semantic structure, performance, and crawlability. We're not an ongoing SEO or content marketing service."],
            ["Can you work within our existing brand?", "Yes. We design within an existing brand system, or help establish one if you don't have it yet."],
            ["What do you build the site on?", "Production React and Next.js by default, the same stack we use for application frontends. If you need a different platform, tell us and we'll scope accordingly."],
        ],
        relatedServices: ["ui-design-systems", "frontend-application-development"],
        art: "website",
        menuDescription: "Website design and development built for performance, accessibility, and search visibility.",
    },
    consultancy: {
        slug: "consultancy",
        eyebrow: "SERVICE / 05",
        title: "Consultancy",
        summary: "Senior judgment, without a full project commitment.",
        metaDescription: "Senior UX, UI, accessibility, and frontend consultancy: focused reviews, audits, and second opinions without committing to a full project.",
        intro: "Get focused guidance when you need an experienced perspective, a stuck decision resolved, or a practical plan, without committing to a full engagement to get it.",
        situations: [
            "Your team has the capability but wants a senior second opinion before a major decision.",
            "Something feels wrong with the product's UX and you can't isolate exactly what.",
            "You need an accessibility or design-system review ahead of a deadline or requirement.",
            "You're stuck on a design-to-development handoff problem that needs an outside diagnosis.",
        ],
        outcomes: ["A clear recommendation", "Senior review of risks and tradeoffs", "A practical next step for your team"],
        deliverables: ["UX and product critique", "UI and design system review", "Accessibility and frontend audits", "Roadmap and delivery advisory"],
        process: [["Frame", "We clarify the decision, context, and constraints around the question."], ["Review", "We inspect the experience, system, or implementation with a senior lens."], ["Advise", "You leave with prioritized actions your team can use immediately."]],
        faqs: [
            ["When should we use consultancy instead of a full project?", "When you have a specific decision, review, or audit to resolve rather than an open-ended body of work. If the scope grows into ongoing design or build work, it can extend into one of the other services."],
            ["Can Pixel Exact handle design and frontend development together?", "Yes, that continuity is the core of how we work. Consultancy is the entry point when you only need the judgment first."],
            ["Is this a one-off review or an ongoing arrangement?", "Either. Some engagements are a single focused review, others are a recurring arrangement for teams that want senior input on an ongoing basis."],
            ["Do you need full project access to give a useful review?", "No. We scope the review to what you can share, whether that's a live product, a design file, or a codebase."],
        ],
        relatedServices: ["ux-product-design", "frontend-application-development"],
        art: "consultancy",
        menuDescription: "Senior UX, UI, and frontend expertise on demand, without a full project.",
    },
    "design-toolkit": {
        slug: "design-toolkit",
        eyebrow: "SERVICE / 06",
        title: "Design Toolkit",
        summary: "A growing library of 40+ production-ready UI components, and proof of how we build.",
        metaDescription: "Design Toolkit: a growing library of 40+ production-ready UI components, buttons, forms, navigation, tables, and more, built to speed up your next interface.",
        intro: "Design Toolkit shortens the distance between idea and interface with thoughtfully designed components that are ready to explore, adapt, and build, less a service to buy than evidence of the standard behind everything else we do.",
        situations: [
            "You want proof of build quality before committing to a larger engagement.",
            "You need to move fast on a new interface without starting from a blank canvas.",
            "You want a foundation your team can adapt instead of building a design system from zero.",
            "You're comparing studios and want to see the work, not just hear about it.",
        ],
        outcomes: ["Faster product exploration", "Consistent patterns across teams", "Production-minded components from day one"],
        deliverables: ["Buttons, forms, navigation, and feedback patterns", "Tables, charts, cards, and layout primitives", "Accessible states and responsive behavior", "A living library that keeps growing"],
        process: [["Explore", "Start with a library of patterns shaped by real product work."], ["Adapt", "Fit components to your brand, content, and product constraints."], ["Extend", "Add new patterns while keeping the system coherent."]],
        faqs: [
            ["Can we use Design Toolkit components in our own codebase?", "Yes, components are built to be adapted to your brand, content, and stack rather than locked to ours."],
            ["Is Design Toolkit a replacement for a custom design system?", "No. It's a starting foundation and a demonstration of our production standard, not a substitute for a system built around your product."],
            ["How often is the library updated?", "It's an actively maintained, growing library. New patterns are added as they're built and proven in real product work."],
            ["Can we try it before committing to anything?", "Yes, that's the point. Explore the components first, then talk to us if you want it adapted to your product."],
        ],
        relatedServices: ["ui-design-systems", "frontend-application-development"],
        art: "toolkit",
        menuDescription: "40+ production-ready components that speed up your next interface.",
    },
    "how-we-deliver": {
        slug: "how-we-deliver",
        eyebrow: "THE ENGINE BEHIND ALL SIX",
        title: "How We Deliver",
        summary: "AI-enabled workflows that ship in weeks, not months.",
        metaDescription: "How Pixel Exact delivers: senior involvement and AI-enabled workflows that compress timelines across research, design, and frontend development without cutting quality.",
        intro: "We use AI to accelerate research, design, documentation, and development while keeping senior judgment accountable at every stage, across every service on this site.",
        situations: [
            "You want to know how the timeline gets compressed before you commit to it.",
            "You've been burned by 'AI-powered' vendors who used it to cut corners instead of time.",
            "You want senior people accountable for the work, not just present at kickoff.",
        ],
        outcomes: ["Shorter feedback loops", "More visible decisions and progress", "Speed without sacrificing craft"],
        deliverables: ["A focused delivery plan", "Weekly working increments", "AI-assisted research and production workflows", "Transparent reviews and handoffs"],
        process: [["Align", "We define the outcome, scope, risks, and decisions needed to move."], ["Deliver", "We work in visible increments so feedback arrives while change is still cheap."], ["Launch", "We refine the experience and leave your team with a clear path forward."]],
        faqs: [
            ["How does AI fit into the design process?", "It accelerates research synthesis, exploration, production, and iteration. Every decision is still made and owned by a senior practitioner, not automated away."],
            ["Can you really deliver in weeks instead of months?", "Where scope allows it, yes, because research, design, and development happen inside one connected process instead of handing off between separate teams. It's not a guarantee that applies to every project regardless of size."],
            ["Does moving faster mean less review or lower quality?", "No. The speed comes from removing hand-off friction, not from skipping review. Senior involvement stays constant throughout."],
        ],
        relatedServices: ["ux-product-design", "frontend-application-development"],
        menuDescription: "Senior involvement and AI-enabled workflows, explained.",
    },
};

export const serviceOrder = [
    "ux-product-design",
    "ui-design-systems",
    "frontend-application-development",
    "website-design-development",
    "consultancy",
    "design-toolkit",
] as const;
