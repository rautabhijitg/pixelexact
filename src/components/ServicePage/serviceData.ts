export type ServicePageData = {
    slug: string;
    eyebrow: string;
    title: string;
    summary: string;
    intro: string;
    outcomes: string[];
    deliverables: string[];
    process: [string, string][];
};

export const servicePages: Record<string, ServicePageData> = {
    "ux-product-design": {
        slug: "ux-product-design",
        eyebrow: "SERVICE / 01",
        title: "UX & Product Design",
        summary: "Make the right problem visible before making anything pretty.",
        intro: "We combine research, product thinking, and usability validation to turn complex requirements into clear experiences people can actually use.",
        outcomes: ["Clearer product direction", "Flows grounded in real user behavior", "Accessible experiences ready to build"],
        deliverables: ["User research and interviews", "Information architecture and user flows", "Wireframes, prototypes, and usability testing", "Accessibility and experience audits"],
        process: [["Understand", "We establish the users, constraints, and decisions that matter."], ["Shape", "We turn evidence into flows, priorities, and a usable product direction."], ["Validate", "We test the experience with real people before development begins."]],
    },
    "ui-design-systems": {
        slug: "ui-design-systems",
        eyebrow: "SERVICE / 02",
        title: "UI & Design Systems",
        summary: "Create a visual language that stays consistent as the product grows.",
        intro: "We design polished interfaces and the systems behind them, so every new screen feels intentional, familiar, and ready for production.",
        outcomes: ["A coherent, distinctive product language", "Reusable components that reduce design drift", "A documented system teams can govern"],
        deliverables: ["Interface and visual design", "Design tokens and component libraries", "Responsive states and interaction patterns", "Design system documentation and governance"],
        process: [["Define", "We align the visual language with the product, brand, and people using it."], ["Systemize", "We turn interface decisions into flexible, reusable components."], ["Scale", "We document the rules so the system keeps working beyond launch."]],
    },
    "frontend-development": {
        slug: "frontend-development",
        eyebrow: "SERVICE / 03",
        title: "Frontend & Application Development",
        summary: "Build the interface to match the design, exactly.",
        intro: "Our frontend team turns approved design into robust, accessible product experiences without compromising the details users notice.",
        outcomes: ["Pixel-accurate implementation", "Responsive, accessible interfaces", "A maintainable codebase your team can extend"],
        deliverables: ["Production React and Next.js interfaces", "Component-driven frontend architecture", "Responsive implementation across devices", "Legacy presentation-layer modernization"],
        process: [["Plan", "We establish the component model, technical constraints, and delivery path."], ["Build", "We implement the interface in small, reviewable pieces."], ["Refine", "We compare the result to the design, test devices, and remove drift."]],
    },
    consultancy: {
        slug: "consultancy",
        eyebrow: "SERVICE / 04",
        title: "Consultancy",
        summary: "Bring a senior UX, UI, accessibility, or frontend question.",
        intro: "Get focused guidance when you need an experienced perspective, a sharper decision, or a practical plan without committing to a full project.",
        outcomes: ["A clear recommendation", "Senior review of risks and tradeoffs", "A practical next step for your team"],
        deliverables: ["UX and product critique", "UI and design system review", "Accessibility and frontend audits", "Roadmap and delivery advisory"],
        process: [["Frame", "We clarify the decision, context, and constraints around the question."], ["Review", "We inspect the experience, system, or implementation with a senior lens."], ["Advise", "You leave with prioritized actions your team can use immediately."]],
    },
    "design-toolkit": {
        slug: "design-toolkit",
        eyebrow: "SERVICE / 05",
        title: "Design Toolkit",
        summary: "A growing library of 40+ production-ready UI components.",
        intro: "Design Toolkit shortens the distance between idea and interface with thoughtfully designed components that are ready to explore, adapt, and build.",
        outcomes: ["Faster product exploration", "Consistent patterns across teams", "Production-minded components from day one"],
        deliverables: ["Buttons, forms, navigation, and feedback patterns", "Tables, charts, cards, and layout primitives", "Accessible states and responsive behavior", "A living library that keeps growing"],
        process: [["Explore", "Start with a library of patterns shaped by real product work."], ["Adapt", "Fit components to your brand, content, and product constraints."], ["Extend", "Add new patterns while keeping the system coherent."]],
    },
    "how-we-deliver": {
        slug: "how-we-deliver",
        eyebrow: "SERVICE / 06",
        title: "How We Deliver",
        summary: "AI-enabled workflows that ship in weeks, not months.",
        intro: "We use AI to accelerate research, design, documentation, and development while keeping senior judgment accountable at every stage.",
        outcomes: ["Shorter feedback loops", "More visible decisions and progress", "Speed without sacrificing craft"],
        deliverables: ["A focused delivery plan", "Weekly working increments", "AI-assisted research and production workflows", "Transparent reviews and handoffs"],
        process: [["Align", "We define the outcome, scope, risks, and decisions needed to move."], ["Deliver", "We work in visible increments so feedback arrives while change is still cheap."], ["Launch", "We refine the experience and leave your team with a clear path forward."]],
    },
};
