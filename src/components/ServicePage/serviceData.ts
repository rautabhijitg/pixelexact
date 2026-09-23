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
    art?: "ux" | "ui" | "frontend" | "website" | "consultancy" | "toolkit" | "modernization";
    /** Short, scannable one-liner for the Services mega menu (nav), distinct from the hero summary. */
    menuDescription: string;
    /** Optional photographic hero background (path under /public). Most service pages have none and use the plain hero. */
    heroImage?: string;
};

export const servicePages: Record<string, ServicePageData> = {
    "ux-product-design": {
        slug: "ux-product-design",
        eyebrow: "SERVICE / 01",
        title: "UX & Product Design",
        summary: "Solve the right problem before designing a single screen.",
        metaDescription: "Senior-led UX and product design: AI-accelerated research, information architecture, wireframes, prototyping, and usability testing that validate direction before you build.",
        intro: "We blend 40+ years of collective experience with modern AI acceleration to compress research synthesis, scenario modeling, and prototyping cycles without cutting corners.",
        situations: [
            "You're preparing to launch a new product or feature set and can't afford to spend engineering cycles guessing what users actually need.",
            "Key user journeys, like onboarding, checkout, registration, or workspace configuration, are leaking users, but your analytics can't explain the underlying friction.",
            "Customer support and success teams repeatedly field the same complaints, signaling persistent cognitive friction and counter-intuitive task flows.",
            "You need to de-risk an architectural or product direction with executive stakeholders and investors before locking in expensive engineering resources.",
        ],
        outcomes: ["Clear Product Direction: business priorities aligned with verifiable user motivations", "Friction-Free Task Flows: information architecture grounded in real behavioral patterns", "WCAG-Compliant Foundations: accessibility baked in from day one, not retrofitted", "Accelerated Time-to-Market: validated prototypes that eliminate costly post-launch rework"],
        deliverables: ["AI-Augmented User Research & Synthesis", "Information Architecture & User Journey Mapping", "Wireframing, Rapid Prototyping & Usability Testing", "Accessibility (WCAG) & Cognitive Load Audits", "Engineering-Ready Specifications & Handoff Blueprints"],
        process: [["Understand", "We align on business goals, technical constraints, and target users. Using AI-assisted transcription and semantic clustering, we analyze dozens of hours of interview recordings, competitor patterns, and support logs in hours, extracting key themes and pain points instantly."], ["Shape", "We convert behavioral evidence into structured flows, wireframes, and clickable prototypes. AI speeds up edge-case ideation, user persona scenario modeling, and copy variations, while our senior architects ensure structural cohesion, feasibility, and brand alignment."], ["Validate", "We run usability tests with real users across varied viewports, then synthesize test recordings rapidly to pinpoint bottlenecks, refine interactions, and deliver a de-risked blueprint ready for UI and frontend execution."]],
        faqs: [
            ["What does a complete UX design engagement include?", "Engagements typically include user research, stakeholder interviews, information architecture, user journeys, low-to-high fidelity wireframes, interactive prototypes, accessibility audits, and usability test reporting. Every project ends with a validated direction backed by real user data, never internal guesswork."],
            ["How does AI accelerate your UX delivery without hurting quality?", "AI handles the administrative and manual tasks: transcribing interviews, clustering sentiment in user feedback, drafting persona edge cases, and generating test scenarios. Senior practitioners lead all interviews, design the actual architecture, interpret nuanced human behaviors, and make the strategic product decisions."],
            ["Can you validate a direction without committing to a full design project?", "Yes. If you need a fast heuristic review, a conversion audit of a single flow, or architectural advice on an existing feature, our Consultancy engagement gives you direct access to senior specialists without a multi-month commitment."],
            ["Do you design for accessibility (WCAG) by default?", "Yes. Accessibility is an architectural requirement, not an optional add-on. We evaluate contrast, keyboard navigation flow, target sizes, and screen-reader hierarchy as part of every UX deliverable to ensure WCAG 2.1/2.2 AA alignment."],
            ["What if we already have existing user research or customer feedback?", "We build directly on what you have. We ingest your existing surveys, customer interview transcripts, analytics data, and support logs, using our AI synthesis pipeline to extract actionable gaps quickly so you don't pay to rediscover known facts."],
        ],
        relatedServices: ["ui-design-systems", "frontend-application-development", "consultancy"],
        art: "ux",
        menuDescription: "Research, UX strategy, and usability testing that validate your product before you build.",
        heroImage: "/images/services/ux_services.webp",
    },
    "ui-design-systems": {
        slug: "ui-design-systems",
        eyebrow: "SERVICE / 02",
        title: "UI & Design Systems",
        summary: "Build a cohesive visual language that scales without design drift.",
        metaDescription: "UI and design systems built to scale: AI-accelerated design tokens, production-ready component libraries, accessibility linting, and governance documentation.",
        intro: "We leverage intelligent automation to eliminate tedious asset generation, token mapping, and manual documentation, allowing our senior team to focus on strategic visual identity and architectural precision.",
        situations: [
            "Every release or new feature seems to introduce custom buttons, one-off modals, and mismatched patterns, making your platform feel fragmented and unpolished.",
            "Your public-facing website, customer portals, and core application interfaces look like they were built by three different companies, undermining brand credibility.",
            "Your product delivers solid functional utility, but the visual interface looks dated, heavy, and uncompetitive alongside modern market alternatives.",
            "Designers recreate patterns in Figma while developers continuously rebuild similar components from scratch in code, inflating sprint costs with zero shared governance.",
        ],
        outcomes: ["A Distinctive, Production-Grade Visual Language: premium aesthetics tailored to your brand positioning and target market", "Radical Sprint Velocity: reusable components and tokens that eliminate designing or coding screens from a blank canvas", "Zero Design Drift: single-source-of-truth token architecture that synchronizes Figma variables directly with production code", "WCAG 2.1/2.2 Compliance by Default: color contrast, focus states, and accessible interactions baked into component DNA"],
        deliverables: ["High-Fidelity UI & Digital Brand Styling", "Semantic Design Tokens & Variable Architecture", "Production-Ready Component Libraries", "Automated Accessibility & AI Quality Linting", "Governance Documentation & Developer Handoff Specs"],
        process: [["Define", "We establish core visual principles, color palettes, and typographic hierarchies aligned with your brand identity. AI-assisted token structuring maps color ramps, accessible contrast pairs, and fluid spacing scales instantly, cutting weeks of foundational setup down to days."], ["Systemize", "We convert visual rules into modular, reusable components. Using AI-assisted prompt workflows and automated linting, we rapidly model every permutation, hover, focus, disabled, active, error, loading skeletons, and responsive breakpoints, ensuring zero missing states for developers."], ["Scale", "We codify the rules into clear, living documentation and developer-friendly token exports (JSON/CSS/SCSS). AI-assisted documentation tools generate instant component usage guidelines, prop tables, and implementation snippets, giving your teams a sustainable system they can run indefinitely."]],
        faqs: [
            ["When should a company invest in a formal design system?", "The moment more than one designer or developer touches the interface, or whenever your release velocity outpaces your team's ability to maintain visual consistency. Investing early prevents costly design debt, duplicated front-end code, and brand erosion down the road."],
            ["How does AI accelerate design system delivery without compromising quality?", "AI handles the repetitive manual heavy lifting: generating mathematical token curves, checking color contrast ratios across hundreds of themes, drafting boilerplate component states, and structuring documentation. Senior human architects lead every aesthetic decision, establish governance rules, and ensure technical viability in production."],
            ["Do you design public marketing websites alongside product interfaces?", "Yes. We frequently build both in tandem, utilizing the same core design tokens and visual DNA. This ensures that the user experience transitioning from your marketing pages to your core application is seamless and cohesive."],
            ["Will our in-house team be able to maintain this system after handoff?", "Yes, that is the central objective of our documentation and governance deliverable. We hand over an intuitive, documented single source of truth in Figma and code-ready tokens with clear contribution guidelines, so your engineers and designers can build new features independently."],
            ["What exactly is included in the final design system handoff?", "A complete token taxonomy (colors, typography, spacing, shadows), fully populated Figma component variants with responsive auto-layouts, interaction and accessibility specifications, documentation on usage rules, and export-ready tokens compatible with your frontend stack."],
        ],
        relatedServices: ["ux-product-design", "frontend-application-development", "website-design-development", "design-toolkit"],
        art: "ui",
        menuDescription: "Interface design and design systems that keep your product consistent as it scales.",
        heroImage: "/images/services/Design_System.webp",
    },
    "frontend-application-development": {
        slug: "frontend-application-development",
        eyebrow: "SERVICE / 03",
        title: "Frontend & Application Development",
        summary: "Pixel-accurate implementation engineered with decoupled architecture.",
        metaDescription: "Pixel-accurate frontend and application engineering: AI-accelerated development, decoupled architecture, and legacy UI modernization built for any technology stack.",
        intro: "We do not rely on generic, cut-and-paste AI code. We combine senior architectural judgment with AI-enabled development pipelines to eliminate routine busywork, automate validation, and compress release cycles.",
        situations: [
            "Approved Figma designs lose typography scales, spacing tokens, responsiveness, and interaction polish the moment they enter production code.",
            "Your core business logic is locked inside an enterprise backend, such as Java, .NET, or a legacy monolith, making UI modernization feel too risky or disruptive to touch.",
            "Your engineering team is fully committed to backend logic and platform features, leaving little capacity for high-polish, accessible UI execution without months of onboarding.",
            "Your current frontend has outgrown its original setup. Every minor layout adjustment risks breaking unrelated views, turning simple UI sprints into complex regression nightmares.",
        ],
        outcomes: ["Zero Design Drift: pixel-accurate translation from Figma design tokens directly into semantic, production-grade components", "2x–3x Faster Delivery Velocity: AI-accelerated development cycles that compress boilerplate scaffolding, state generation, and testing timelines", "Decoupled Architecture Safety: complete freedom to redesign, test, and modernize the presentation layer without touching backend logic", "Strict WCAG 2.1/2.2 AA Compliance: screen-reader support, keyboard navigation, and semantic HTML built in by default"],
        deliverables: ["Modern Web Applications & Component Architectures", "Technology-Agnostic Implementation", "Decoupled Legacy UI Modernization", "Comprehensive Multi-Device & Cross-Browser Precision", "Automated Quality Linting & Component Governance"],
        process: [["Architect & Decouple", "We define the component taxonomy, data-contract interfaces, and state-management boundaries. By decoupling the presentation layer from backend business logic early, we ensure development proceeds in parallel without blocking on backend endpoints."], ["AI-Accelerated Build", "Using AI-assisted development tools and intelligent scaffolding, our senior engineers automate boilerplate setup, interface typing, and edge-case handling in minutes. This cuts development time substantially while keeping code maintainable and clean."], ["Automated Linting & Validation", "We run automated AI-assisted code reviews and accessibility linters alongside rigorous visual regression testing against original Figma files, verifying performance, WCAG contrast, and keyboard flow before delivering clean, review-ready pull requests."]],
        faqs: [
            ["What frontend and backend technologies do you support?", "We're technology-agnostic. On the frontend, we build production systems in React, Next.js, Angular, and Vue.js. For backend integration, we routinely connect presentation layers to enterprise stacks including Java, .NET Core, Node.js, Python, or headless CMS platforms using REST, GraphQL, or gRPC."],
            ["What does decoupled frontend modernization mean for legacy systems?", "It means we redesign and re-engineer the entire visual and interactive layer using modern, modular frontend frameworks without altering your underlying backend code or core business logic. Your existing data pipelines and services remain stable, while your users get a modern, high-speed interface."],
            ["How do you achieve 2x–3x faster delivery with AI without introducing bugs?", "We leverage AI for rapid scaffolding, automated test generation, syntax validation, and pattern linting. Crucially, every line of code, architectural decision, and component interface is directed and audited by senior engineers. AI provides the speed; our senior architects ensure engineering integrity."],
            ["Can you build the frontend from designs created by an external team?", "Yes. While we frequently deliver end-to-end design and code, we regularly step in to build production frontends from approved Figma files delivered by in-house teams or external design studios, guaranteeing zero drift in the final build."],
            ["Can you integrate directly with our in-house engineering team?", "Yes. We adapt to your Git workflows, CI/CD pipelines, branching conventions, and ticketing systems. We hand over modular, well-documented components and clear pull requests that your in-house engineers can easily review, merge, and extend."],
        ],
        relatedServices: ["ui-design-systems", "design-toolkit", "website-design-development", "consultancy"],
        art: "frontend",
        menuDescription: "Pixel-accurate frontend builds and application development that match your design exactly.",
        heroImage: "/images/services/Frontend.webp",
    },
    "website-design-development": {
        slug: "website-design-development",
        eyebrow: "SERVICE / 04",
        title: "Website Design & Development",
        summary: "Built to convert, optimized to rank, engineered to load in milliseconds.",
        metaDescription: "Turnkey website design and development: AI-accelerated delivery, Core Web Vitals performance, technical SEO, and WCAG accessibility in one engagement.",
        intro: "We combine senior architectural design with modern AI delivery pipelines to eliminate repetitive manual coding and optimize performance before launch.",
        situations: [
            "Your business or digital product has evolved, but your public-facing website looks dated, fails to convert qualified visitors, and underrepresents the quality of your offering.",
            "You're tired of juggling three separate vendors, a design agency, a development shop, and an SEO contractor, who point fingers when deadlines slip or layouts break.",
            "Your current site scores poorly on Google's Core Web Vitals, takes several seconds to load on mobile devices, and exposes your company to accessibility liabilities (WCAG non-compliance).",
            "You're launching a new company, product, or brand initiative and need a web platform built for high organic search indexing and rapid lead generation from day one.",
        ],
        outcomes: ["Single-Team Accountability: zero friction or design degradation between your approved Figma screens and live code", "2x–3x Faster Time-to-Market: AI-driven workflows that collapse multi-month agency retainers into streamlined delivery sprints", "Core Web Vitals Scores of 95+: lightweight, server-side rendered architectures built for sub-second page loads", "Search-Ready Architecture: semantic HTML5, dynamic schema markup, automated sitemaps, and crawlable site structures built in from day one"],
        deliverables: ["Conversion-Focused UX & Information Architecture", "High-Fidelity UI Design & Responsive Breakpoints", "High-Performance Modern Frontend Build", "Technical SEO Architecture & Crawlability", "Comprehensive WCAG Accessibility & Security Auditing"],
        process: [["Plan & Structure", "We define user personas, key conversion funnels, and technical constraints. Using AI-assisted content analysis and semantic mapping, we structure site architecture and draft content outlines in hours, eliminating typical weeks of scoping delays."], ["Design & Build Simultaneously", "Instead of waiting for designs to finish before writing code, our senior team builds in parallel. AI-enabled scaffolding rapidly turns design tokens into production-ready frontend components, responsive layouts, and interactive micro-states without layout drift."], ["Audit, Optimize & Launch", "Before going live, we run automated AI-assisted code checks, visual regression suites, and Core Web Vitals audits. We fine-tune asset delivery, verify accessibility compliance, configure server-level caching, and deploy a flawless production site."]],
        faqs: [
            ["How does AI make your website delivery 2x–3x faster without hurting quality?", "AI handles boilerplate code generation, responsive breakpoint scaffolding, image asset optimization, metadata tagging, and accessibility linting. Senior human designers and engineers lead all creative direction, write core business logic, optimize performance, and audit every screen for pixel accuracy."],
            ["How is this different from UI & Design Systems or Frontend Development?", "Our UI and Frontend services are focused on application interfaces and design system scale for existing software products. Website Design & Development is an all-in-one engagement specifically designed for high-impact marketing and corporate websites, bundling UX, visual design, frontend code, technical SEO, and Core Web Vitals into a single project."],
            ["Do you handle ongoing SEO or content marketing?", "We build the foundational technical SEO infrastructure search engines need: semantic markup, crawlable site maps, schema tags, and fast page loads. We don't write monthly blog posts or run link-building retainers, but we ensure your site is technically optimized for search engines to index and rank."],
            ["What tech stacks and content management systems (CMS) do you support?", "By default, we build with Next.js and React paired with headless CMS options, such as Sanity, Contentful, or Strapi, to provide top-tier performance and flexibility. If your organization requires integration with a custom CMS, WordPress (headless), or enterprise backends, we scope our architecture to fit your infrastructure."],
            ["Can you work with our existing brand guidelines?", "Yes. We can adopt your established visual assets, typography, and color tokens, or we can expand your existing identity into a comprehensive modern web design system."],
        ],
        relatedServices: ["ui-design-systems", "frontend-application-development", "consultancy"],
        art: "website",
        menuDescription: "Website design and development built for performance, accessibility, and search visibility.",
        heroImage: "/images/services/website-design.webp",
    },
    consultancy: {
        slug: "consultancy",
        eyebrow: "SERVICE / 05",
        title: "Consultancy",
        summary: "Senior architectural judgment on demand, without vendor lock-in.",
        metaDescription: "Strategic technical and UX consultancy: AI-accelerated audits, code assessments, and UX roadmaps delivered by senior specialists, without a full project commitment.",
        intro: "Traditional consultancies spend weeks manually gathering data and billing hourly retainers. We use AI-native diagnostics to extract data in hours so our senior architects can spend their time on strategic synthesis and practical solutions.",
        situations: [
            "Your in-house engineers have the capability to build, but your leadership wants seasoned technical oversight to validate stack choices, decoupled UI architectures, or legacy modernization roadmaps before spending capital.",
            "You know something in your core funnel is broken, retention is dropping or conversions are stagnating, but your internal team is too close to the product to diagnose the root cause objectively.",
            "An enterprise client, regulatory mandate, or executive board requires a formal WCAG 2.1/2.2 AA accessibility evaluation and remediation plan ahead of a strict launch date.",
            "Your sprint velocity has stalled because your designers and frontend developers are locked in a cycle of revisions, missing component tokens, and broken handoff communication that needs outside resolution.",
        ],
        outcomes: ["Actionable, Prioritized Roadmaps: a structured backlog of high-impact fixes ranked by effort, business value, and technical severity", "2x–3x Faster Audit Turnarounds: AI-assisted diagnostics that deliver deep reports in days", "De-risked Technical Investments: senior validation of architecture, component libraries, and performance before committing engineering hours", "Zero Agency Retainer Lock-In: pure strategic clarity with no pressure to sign multi-month implementation contracts"],
        deliverables: ["UX Architecture, Conversion & Heuristic Teardowns", "Design System, Token & Component Governance Audits", "Frontend Architecture & Codebase Diagnostics", "Rapid WCAG 2.1/2.2 AA Accessibility Audits", "Delivery Velocity & Team Workflow Advisory"],
        process: [["Frame & Ingest", "We define the key challenges, architectural boundaries, and constraints. Using AI-assisted heuristic scrapers, log analyzers, and automated code-linting suites, we ingest and scan design files, codebases, or user session data in hours, establishing a comprehensive baseline instantly."], ["Senior Evaluation & Stress-Testing", "Our senior practitioners manually inspect the flagged findings. We evaluate architectural trade-offs, WCAG compliance gaps, component maintainability, and design patterns through the lens of 40+ years of real-world delivery experience."], ["Deliver Prioritized Action Plans", "Instead of a bloated theoretical deck, you receive a concise, prioritized matrix of recommendations categorized by impact and implementation effort, ready for your engineers and designers to implement immediately."]],
        faqs: [
            ["How does AI make your consultancy 2x–3x faster without missing nuances?", "AI handles the tedious diagnostic heavy lifting: running automated accessibility scans across dozens of pages, identifying frontend bundle bloat, parsing user session sentiment, and cataloging component discrepancies. Our human senior architects analyze the results, evaluate edge cases, and craft strategic recommendations tailored to your business context."],
            ["When should we book consultancy instead of a full design or development engagement?", "Choose consultancy when you have a defined problem, an urgent deadline, an architectural bottleneck, or an internal question that needs senior clarity rather than extra hands on keyboards. If the audit surfaces work that your team can't staff internally, you can seamlessly expand into our UX, Design System, or Frontend services."],
            ["Is this a one-time audit or an ongoing advisory engagement?", "We support both models. Many clients engage us for a single, high-impact teardown or accessibility audit ahead of a funding round or product launch. Others retain us for recurring fractional advisory, such as bi-weekly architecture reviews, PR audits, and design critique, to guide internal teams."],
            ["Do you need full access to our source code and internal repos?", "No. We scope our review to whatever access level you're comfortable providing. We can perform rigorous audits via screen-share walk-throughs, staging URLs, public production sites, Figma files, or direct read-only repository access."],
            ["Can you help our internal team implement the recommendations?", "Yes. Our audit reports are written as concrete, developer-ready implementation tasks. If your internal team needs additional bandwidth or hands-on coaching to execute the plan, we can step in directly through our Frontend & Application Development or UI & Design Systems teams."],
        ],
        relatedServices: ["ux-product-design", "frontend-application-development", "ui-design-systems", "website-design-development"],
        art: "consultancy",
        menuDescription: "Senior UX, UI, and frontend expertise on demand, without a full project.",
        heroImage: "/images/services/Consultancy.webp",
    },
    "design-toolkit": {
        slug: "design-toolkit",
        eyebrow: "SERVICE / 06",
        title: "Design Toolkit",
        summary: "Accelerate multi-tenant, white-label, and post-M&A product delivery by 2x–3x.",
        metaDescription: "Frontend UI Toolkit: a production-ready library of 40+ modular components on a decoupled architecture, built for multi-tenant, white-label, and post-M&A delivery.",
        intro: "We use our toolkit as a foundational springboard, augmenting development using proprietary AI linters and automated scaffolding to deliver custom products at unmatched speed.",
        situations: [
            "You've acquired multiple products running disparate legacy stacks and need to unify them under a single visual brand and consistent design system without rebuilding backends from scratch.",
            "Your SaaS platform needs dynamic, tenant-specific theming, custom layouts, and white-label branding for enterprise clients without spawning branched, unmaintainable codebases.",
            "You can't afford 6–9 months to build a custom design system from zero; your product team needs an immediate, production-ready foundation to ship roadmap features today.",
            "You're evaluating design and frontend engineering studios and want tangible, production-grade proof of code architecture, WCAG accessibility, and token governance before signing a contract.",
        ],
        outcomes: ["2x–3x Faster Sprint Velocity: eliminates foundational boilerplate setup and component authoring, shrinking months of front-end roadmaps into streamlined weeks", "Write Once, Render Everywhere: true presentation decoupling, swap templates, grids, and themes while leaving core data contracts and backend logic 100% intact", "Instant Multi-Tenant Theming: switch brand tokens, primary color schemes, typography curves, and light/dark modes dynamically at runtime", "Global Market Readiness: native bidirectional support (RTL/LTR) and seamless localization integration ready for worldwide deployment"],
        deliverables: ["Decoupled Architecture (Code Once, Deploy Anywhere)", "40+ Pre-Engineered, Battle-Tested UI Components", "Multi-Tenant & White-Label Token Governance", "Adaptive Theming & Dynamic Light/Dark Modes", "Global-Ready: Bidirectional (RTL/LTR) & Multilingual Support", "Mobile-First & Pixel-Perfect Responsiveness"],
        process: [["Ingest & Tokenize", "We ingest your existing brand assets or acquired platforms' UI assets. Using AI-assisted token structuring, we map legacy styles into centralized design tokens, colors, spacing, typography, in days instead of weeks."], ["Assemble & Customize", "Instead of building common UI elements from scratch, we adapt our 40+ battle-tested components to your exact UX requirements. AI-assisted code generation scaffolds edge cases, loading skeletons, error boundaries, and responsive variants, rapidly under senior engineering oversight."], ["Automated Linting, Accessibility & Integration", "We integrate the customized toolkit into your target stack, React, Next.js, Angular, Vue, .NET Core, or Java. Our automated AI linters verify WCAG 2.1/2.2 AA compliance, check token consistency, and run visual regression tests before production handoff."]],
        faqs: [
            ["How does this toolkit accelerate Multi-Tenant and White-Label applications?", "Because the toolkit is built on dynamic design tokens and decoupled architecture, each tenant or client can load a distinct visual theme, layout configuration, and logo asset at runtime while executing the exact same shared frontend logic. This removes the need to maintain separate code branches for each white-label customer."],
            ["How does this assist during Mergers & Acquisitions (M&A)?", "Following an acquisition, companies frequently inherit disparate tech stacks and fragmented customer experiences. Our toolkit lets you apply a unified, modern brand wrapper across all acquired products quickly by decoupling the frontend presentation from disparate backend engines, harmonizing your product portfolio in weeks rather than waiting years for backend consolidation."],
            ["Can we integrate these components directly into our existing codebase and tech stack?", "Yes. The toolkit is technology-agnostic and built to conform to enterprise frameworks, including React, Next.js, Angular, and Vue.js, and integrates with backend environments such as Java, .NET Core, or Python. It's an open foundation engineered to be owned and extended by your internal team."],
            ["How does this achieve 2x–3x faster delivery without generating technical debt?", "By starting with 40+ pre-built, accessible, and responsive components, your engineering team skips months of baseline scaffolding. AI tooling automates routine configuration, token generation, and state variations, while senior frontend architects ensure strict clean-code standards, WCAG compliance, and enterprise modularity."],
            ["Can we test the components before committing to a larger engagement?", "Yes. You can test our live, interactive component demo to review our code quality, design fidelity, keyboard accessibility, and state handling firsthand."],
        ],
        relatedServices: ["ui-design-systems", "frontend-application-development", "consultancy"],
        art: "toolkit",
        menuDescription: "40+ production-ready components built for multi-tenant, white-label, and enterprise delivery.",
        heroImage: "/images/services/Toolkit.webp",
    },
    "legacy-application-modernization": {
        slug: "legacy-application-modernization",
        eyebrow: "SERVICE / 07",
        title: "Legacy Application Modernization",
        summary: "A modern experience for your legacy application, without rewriting a single line of backend logic.",
        metaDescription: "Presentation-layer modernization for legacy applications: a modern, on-brand interface delivered without rewriting backend logic, frameworks, or business-critical systems.",
        intro: "We offer a non-disruptive modernization service focused exclusively on the presentation layer, the part of your application your users actually see and feel. Backend logic, workflows, and existing HTML stay untouched, while the interface is fully rebuilt around a modern design system.",
        situations: [
            "Your application still works, but its interface looks and feels dated next to where your brand is headed.",
            "A full rebuild feels too risky, costly, or disruptive to the business-critical systems it would touch.",
            "You want a modern, on-brand interface without rewriting backend logic or workflows.",
            "Leadership wants proof the transformation works before committing to a full rollout.",
        ],
        outcomes: ["A modernized UI without backend or framework rewrites", "A cleaner, faster experience for users", "Executive buy-in before a full rollout"],
        deliverables: ["Presentation-layer overhaul, zero functional risk", "Parallel rollout with zero downtime", "A complete, modern design system", "Scalable, maintainable frontend architecture", "Controlled, incremental migration"],
        process: [["Assess", "We audit the current UI, design-system gaps, and technical constraints of your legacy application."], ["Demonstrate", "We build a working proof of concept on a real screen, so stakeholders see the transformation before committing to the full engagement."], ["Modernize", "We roll out the new presentation layer incrementally, component by component, alongside the existing UI."], ["Hand Off", "You're left with a scalable, documented frontend architecture your team can extend independently."]],
        faqs: [
            ["Does this replace our backend or framework?", "No. This service rebuilds only the presentation layer, the part of the application your users see and feel. Backend logic, workflows, and existing HTML stay untouched."],
            ["Will this disrupt our existing UI while it's in progress?", "No. A parallel styling system lets the old and new UI run side by side, so you can migrate screen by screen with isolated testing and no breaking changes to existing HTML or CSS."],
            ["How do we know this will work before committing to a full rollout?", "We build a working proof of concept on one of your real screens first, so stakeholders can see the transformation before committing to the full engagement."],
        ],
        relatedServices: ["frontend-application-development", "consultancy"],
        art: "modernization",
        menuDescription: "A modern interface for your legacy application, without rebuilding the backend underneath it.",
        heroImage: "/images/services/Legacy_Modernisation.webp",
    },
    "how-we-deliver": {
        slug: "how-we-deliver",
        eyebrow: "THE ENGINE BEHIND ALL SEVEN",
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
    "legacy-application-modernization",
] as const;
