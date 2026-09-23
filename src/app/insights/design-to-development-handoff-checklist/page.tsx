import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { servicePages } from "@/components/ServicePage/serviceData";
import { articles } from "@/data/articles";
import { absoluteUrl, buildMetadata, SITE_NAME } from "@/lib/seo";

const entry = articles.find((item) => item.slug === "design-to-development-handoff-checklist")!;
const relatedService = entry.relatedService ? servicePages[entry.relatedService] : undefined;

export const metadata: Metadata = buildMetadata({
    title: entry.seoTitle ?? entry.title,
    description: entry.metaDescription ?? entry.dek,
    path: `/insights/${entry.slug}`,
});

const zeroDriftGuarantees = [
    "Visual hierarchy remains intact: typographic scale, elevation, and spacing relationships behave predictably across viewports.",
    "Component behavior is preserved: interactive elements respond to state transitions consistently, wherever they sit in the layout.",
    "Edge cases fail gracefully: multiline text, broken images, and slow responses get absorbed without breaking the layout's structural bounds.",
    "Accessibility guarantees hold: contrast, focus management, semantics, and keyboard access survive the trip from static frames to markup.",
];

const mockupVsProduction: [string, string, string][] = [
    ["Viewport", "Fixed width (e.g. exactly 1440px or 390px)", "A continuous spectrum with variable aspect ratios"],
    ["Data", "Curated strings, balanced titles, clean avatars", "Empty states, missing metadata, localized and multi-line strings"],
    ["Interaction", "A single rest state, the “happy path”", "Idle, hover, focus-visible, active, disabled, loading, error"],
    ["Scope", "An isolated canvas instance", "Shared component logic reused across the app"],
    ["Execution", "Passive visual presentation", "Event listeners, network latency, asynchronous rendering"],
];

const translationQuestions = [
    "Does this container stretch infinitely, clamp to a maximum width, or scale proportionally?",
    "What happens to this table when a cell holds fifty characters instead of eight?",
    "How does the layout respond when an asset takes three seconds to resolve over a flaky connection?",
];

const checklistSections: [string, string[]][] = [
    ["A. Before Handoff: Design Readiness", [
        "Tokenized Values: Spacing, colors, radius, elevations, and typography use centralized system tokens rather than raw, detached values.",
        "Clean Component Instances: Core UI elements link directly to the design system library; detached components are refactored into registered variants or removed.",
        "Structural Auto-Layout: Containers use explicit flex/stack alignment rather than absolute positioning, matching how CSS actually lays out boxes.",
        "Semantic Layer Naming: Frames reflect DOM order (header, nav, main, section, aside) rather than unlabeled, nested groups.",
        "Removed Artifacts: Deprecated iterations, exploration drafts, and detached prototypes live in an archive page so engineers never reference stale designs.",
    ]],
    ["B. Component Governance", [
        "Prop Alignment: Component properties map conceptually to frontend props (size: sm | md | lg, intent: primary | secondary | danger).",
        "Composition Over Duplication: Variations are handled through structured properties and slotted children, not one-off duplicate components.",
        "System Exceptions Reviewed: Any component with no design-system equivalent has been reviewed with engineering to decide whether it becomes a shared component or a local one.",
        "Boundaries Defined: Components state explicitly how they interact with neighbors — for example, the card manages padding and content flows within it.",
    ]],
    ["C. Responsive Behavior", [
        "Fluid vs. Fixed Rules: Containers state whether they fill available width, hug their content, or respect a maximum width.",
        "Breakpoint Logic: Layout changes are defined for compact (<640px), medium (640–1024px), and expanded (>1024px) ranges.",
        "Wrapping and Stacking Order: Horizontal groups specify what stacks on top of what when space runs out.",
        "Typography Scaling: Header scales state whether they use fluid clamps or fixed breakpoint tiers.",
        "Overflow Rules: Text-heavy elements state whether they wrap, truncate with an ellipsis, or scroll.",
    ]],
    ["D. States and Interactions", [
        "Interactive States: Every clickable element has documented default, hover, focus-visible, active, and disabled styles.",
        "Asynchronous States: Data-driven containers define loading/skeleton, empty, error, and success states.",
        "Transitions: Animated properties on modals, dropdowns, and drawers specify duration, easing, and what actually animates.",
    ]],
    ["E. Edge Cases and Dynamic Data", [
        "Extreme String Lengths: Headings, cells, and list items are verified against both unusually long and unusually short content.",
        "Image Variances: Media containers specify object-fit behavior for images that don't match the mockup's aspect ratio.",
        "Asset Failures: Avatars and media cards define a fallback (initials, placeholder icon) for missing or broken images.",
        "Numerical Extremes: Metric cards handle zero, single digits, and large numbers without breaking their container.",
        "Permission Boundaries: The layout accounts for actions that are hidden or disabled based on user role.",
    ]],
    ["F. Accessibility", [
        "Contrast Ratios: Text and critical controls meet WCAG AA (4.5:1 for normal text, 3:1 for large text and graphical components).",
        "Semantic Hierarchy: Heading levels are sequential and chosen for structure, not for matching a font size.",
        "Touch Targets: Interactive elements keep a minimum 44×44px hit area even when the visible icon is smaller.",
        "Form Labels: Inputs have persistent, visible labels, not placeholder text standing in for one, with programmatic error messages.",
        "Reduced Motion: Large transitions and parallax have a subtler fallback when prefers-reduced-motion is set.",
    ]],
    ["G. Handoff Documentation", [
        "Behavioral Annotations: Notes cover business logic, sorting behavior, and state triggers — not what's already visible in the file.",
        "Asset Export Readiness: Vectors are cleaned, paths flattened, and SVGs stripped of anything that blocks CSS styling.",
        "Explicit Constraints: Min/max widths and z-index order are documented for anything that overlaps, like sticky headers or tooltips.",
        "Known Trade-offs: Deliberate compromises between the ideal design and the deadline are flagged directly in the spec.",
    ]],
    ["H. Developer Implementation", [
        "Token Consumption: The frontend consumes the same token structure as the design file, not hardcoded values.",
        "Semantic Markup: Layouts use proper elements (dialog, nav, button, fieldset) instead of nested, clickable divs.",
        "Defensive CSS: Styling anticipates changing content — text wrapping, scroll containers, and aspect-ratio handled natively.",
        "Early Flagging: Unclear behavior or un-mocked states are raised while scaffolding the component, not discovered in final QA.",
    ]],
    ["I. Design QA and Visual Validation", [
        "In-Browser Review: The design team reviews staging in a real browser, not static screenshots or emulator approximations.",
        "Dynamic Resizing: The interface is checked by resizing the window continuously, not just at fixed breakpoints.",
        "Keyboard Walkthrough: The interface is navigated with only Tab, Enter, Space, and arrow keys to verify focus order and visibility.",
        "Structured Feedback: Review tickets state location (URL, component, viewport), expected behavior, and actual behavior with a screenshot or video.",
    ]],
];

const handoffGate: [string, string[]][] = [
    ["Phase 1: Ready for Engineering", [
        "Are all components linked to shared system libraries, with no detached primitives?",
        "Are loading, empty, disabled, and error states visually defined?",
        "Are responsive behaviors documented: fluid rules, wrap order, and breakpoints?",
        "Are non-standard assets exported, optimized, and verified?",
    ]],
    ["Phase 2: Active Implementation", [
        "Are production components consuming design tokens instead of hardcoded values?",
        "Are edge cases — long strings, missing assets, variable data — verified against live API responses?",
        "Have ambiguities been raised in the ticket instead of resolved by silent assumption?",
    ]],
    ["Phase 3: Release Ready", [
        "Has the interface been tested in a live staging environment across arbitrary viewports?",
        "Do all interactive elements have working keyboard focus and clear state transitions?",
        "Has a joint design-engineering review signed off on responsive, interactive, and token fidelity?",
    ]],
];

const maturityComparison: [string, string, string][] = [
    ["Deliverable", "Static frames showing ideal layouts", "Dynamic component specifications and system rules"],
    ["Tokens & Styles", "Hardcoded hex values, ad-hoc spacing", "Shared design tokens mapped directly to code variables"],
    ["Responsiveness", "Isolated mobile and desktop mockups", "Documented fluid scaling, wrap points, and container rules"],
    ["States", "Only the default state is drawn", "Default, hover, focus, active, loading, empty, and error states"],
    ["Data Realism", "Curated, uniform content", "Edge-case testing with long strings, missing data, and broken assets"],
    ["Quality Assurance", "Pixel review at the end of the sprint", "Continuous in-browser system validation"],
];

const failurePatterns = [
    ["Designing Only the Happy Path", "Mockups use short, balanced copy, high-resolution photos, and ideal data counts.", "Production breaks the moment real data arrives: names wrap awkwardly, missing images leave blank boxes, heavy data feeds distort card heights."],
    ["Treating the Canvas as an Absolute Spec", "Assuming a 42px gap on a 1440px canvas must be exactly 42px on every screen.", "Developers hardcode brittle layout rules that break the moment a user resizes, zooms, or opens a high-density display."],
    ["Missing Component Governance", "Shared components get detached and tweaked per-screen instead of maintained as a system.", "Engineering can't reuse components; one-off CSS overrides pile up and future design-system updates stop propagating."],
    ["Handoff as a Final Hand-Off", "Designers disengage after the handoff date instead of staying involved through implementation.", "Engineers make design decisions under deadline pressure, and the shipped product drifts from what was intended."],
    ["Reviewing Screenshots Instead of Living Code", "Design QA compares static exports side-by-side with screenshots of staging.", "Interactive bugs — broken focus traps, clunky hover states, layout breaks on resize — ship straight to production."],
] as const;

export default function DesignToDevelopmentHandoffChecklistPage() {
    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: entry.title,
        description: entry.metaDescription ?? entry.dek,
        datePublished: entry.publishedAt,
        url: absoluteUrl(`/insights/${entry.slug}`),
        publisher: { "@type": "Organization", name: SITE_NAME },
    };

    return (
        <div className="service-page">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <Header backHref="/insights" backLabel="All insights" />
            <Breadcrumb items={[{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }, { name: entry.title, path: `/insights/${entry.slug}` }]} />

            <main id="main-content">
                <section className="service-page__hero">
                    <div className="service-page__wrap service-page__hero-grid">
                        <div>
                            <p className="service-page__eyebrow">{entry.topic}</p>
                            <h1>{entry.title}</h1>
                            <div className="service-page__hero-cta">
                                <Link className="service-page__button" href="/contact">Talk to a Senior Architect <ArrowUpRight aria-hidden="true" size={18} /></Link>
                                <Link className="service-page__inline-link" href="#checklist">Jump to the Checklist <ArrowDown aria-hidden="true" size={14} /></Link>
                            </div>
                        </div>
                        <p className="service-page__summary">{entry.dek}</p>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap service-page__intro-grid">
                        <Reveal>
                            <div>
                                <p className="service-page__intro">The Figma canvas is pristine. Auto-layout is configured, tokens are mapped, components are organized, and stakeholder sign-off is complete. The ticket moves to &ldquo;Ready for Development.&rdquo;</p>
                                <p className="service-page__intro">Two weeks later the staging build lands, and at a glance it looks roughly right. Then you interact with it: spacing feels loose on smaller laptops, the nav wraps awkwardly at 1080px, a secondary button swaps color with no transition, focus states are invisible, and one long customer name pushes the action button off-screen.</p>
                                <p className="service-page__intro">The design team logs thirty visual bugs. Engineering pushes back: none of those viewport widths were drawn, the loading and error states were never mocked, and the deadline is in forty-eight hours.</p>
                            </div>
                        </Reveal>
                        {relatedService && (
                            <Reveal index={1}>
                                <div className="service-page__outcomes">
                                    <p className="service-page__label">Related service</p>
                                    <p><Link className="service-page__inline-link" href={`/services/${relatedService.slug}`}>{relatedService.title} <ArrowUpRight aria-hidden="true" size={14} /></Link></p>
                                </div>
                            </Reveal>
                        )}
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">THE CORE CONCEPT</p>
                                <h2>Defining &ldquo;Zero Drift&rdquo;</h2>
                                <p className="service-page__index-summary">This isn&apos;t sub-pixel parity between a vector canvas and every rendered DOM node. Browsers are dynamic: font rendering differs across operating systems, extensions inject styles, and content continuously shifts boundaries. Chasing pixel parity across every client configuration is a fool&apos;s errand. Zero drift means eliminating the unintended gap between design intent, the tokens and primitives that encode it, the component architecture built on those tokens, and the interface a user actually gets. A zero-drift implementation holds up on four fronts:</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="service-page__outcomes">
                                {zeroDriftGuarantees.map((item) => {
                                    const [label, text] = item.split(/:\s*/);
                                    return <p key={label}><Check aria-hidden="true" size={18} /><strong>{label}:</strong>&nbsp;{text}</p>;
                                })}
                            </div>
                        </Reveal>
                        <Reveal index={1}><p className="service-page__index-summary">Zero drift is about behavioral parity. When an interface behaves predictably under production stress, visual alignment takes care of itself.</p></Reveal>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">WHY STATIC MOCKUPS FAIL</p>
                                <h2>A Screen Is a Point in Time. Software Is Continuous.</h2>
                                <p className="service-page__index-summary">The traditional design deliverable is &ldquo;the screen&rdquo;: a 1440px frame and a 375px frame, populated with ideal sample data, considered finished. That fails because static screens capture a moment, while production software runs continuously.</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="service-page__table-wrap">
                                <table className="service-page__table">
                                    <thead><tr><th>Dimension</th><th>The Static Mockup</th><th>The Dynamic Production System</th></tr></thead>
                                    <tbody>
                                        {mockupVsProduction.map(([dimension, mockup, production]) => <tr key={dimension}><td>{dimension}</td><td>{mockup}</td><td>{production}</td></tr>)}
                                    </tbody>
                                </table>
                            </div>
                        </Reveal>
                        <Reveal index={1}>
                            <p className="service-page__index-summary">When an interface moves from canvas to browser, the developer has to translate static geometry into dynamic rules:</p>
                            <ul className="service-page__list">
                                {translationQuestions.map((question) => <li key={question}>{question}</li>)}
                            </ul>
                            <p className="service-page__index-summary">If the design deliverable doesn&apos;t answer these, the developer has to invent an answer. Every uncommunicated decision is an invitation for drift to enter the codebase.</p>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt" id="checklist">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">THE OPERATIONAL CHECKLIST</p>
                                <h2>The Zero-Drift Checklist</h2>
                                <p className="service-page__index-summary">This is structured to remove guesswork: the behavioral contracts that need to exist between design and engineering before, during, and after code gets written.</p>
                            </div>
                        </Reveal>
                        {checklistSections.map(([title, items], index) => (
                            <Reveal className="service-page__checklist-block" key={title} index={index % 3}>
                                <h3>{title}</h3>
                                <ul className="service-page__list">
                                    {items.map((item) => {
                                        const [label, text] = item.split(/:\s*/);
                                        return <li key={label}><strong>{label}:</strong> {text}</li>;
                                    })}
                                </ul>
                            </Reveal>
                        ))}
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">THE HANDOFF GATE</p>
                                <h2>A Fast, High-Signal Gate Between Phases</h2>
                                <p className="service-page__index-summary">Before work moves between product phases, run it through this. If any question comes back &ldquo;no,&rdquo; the work isn&apos;t ready to transition.</p>
                            </div>
                        </Reveal>
                        <div className="service-page__text-grid">
                            {handoffGate.map(([title, questions], index) => {
                                const isLast = index === handoffGate.length - 1 && handoffGate.length % 2 === 1;
                                return (
                                    <Reveal className={`service-page__text-grid-item${isLast ? " service-page__text-grid-item--wide" : ""}`} key={title} index={index}>
                                        <h3>{title}</h3>
                                        <ul className="service-page__list">
                                            {questions.map((question) => <li key={question}>{question}</li>)}
                                        </ul>
                                    </Reveal>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">WHAT MATURITY LOOKS LIKE</p>
                                <h2>Low-Maturity vs. High-Maturity Handoff</h2>
                                <p className="service-page__index-summary">The difference isn&apos;t the tools. Both use Figma, Git, and a modern framework. It&apos;s how decisions and state get structured.</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="service-page__table-wrap">
                                <table className="service-page__table">
                                    <thead><tr><th>Operational Area</th><th>Low-Maturity Handoff</th><th>High-Maturity Handoff</th></tr></thead>
                                    <tbody>
                                        {maturityComparison.map(([area, low, high]) => <tr key={area}><td>{area}</td><td>{low}</td><td>{high}</td></tr>)}
                                    </tbody>
                                </table>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">RECOGNIZING THE PATTERN</p>
                                <h2>Common Failure Patterns, and Their Cost</h2>
                            </div>
                        </Reveal>
                        <div className="service-page__text-grid">
                            {failurePatterns.map(([title, pattern, consequence], index) => {
                                const isLast = index === failurePatterns.length - 1 && failurePatterns.length % 2 === 1;
                                return (
                                    <Reveal className={`service-page__text-grid-item${isLast ? " service-page__text-grid-item--wide" : ""}`} key={title} index={index}>
                                        <h3>{title}</h3>
                                        <p><strong>Pattern:</strong> {pattern}</p>
                                        <p><strong>Cost:</strong> {consequence}</p>
                                    </Reveal>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap service-page__intro-grid">
                        <Reveal>
                            <div>
                                <p className="service-page__intro">A design-to-development handoff isn&apos;t a transaction. It isn&apos;t an email with a file attached, or a ticket marked with an asset export.</p>
                                <p className="service-page__intro">A mature handoff is the transfer of a behavioral system: its components, states, responsive rules, and accessibility guarantees, not just its pixels.</p>
                                <p className="service-page__intro">Design with system tokens. Account for missing and extreme data. Define interactive states upfront. Validate the result in a real browser. Do that consistently, and drift stops being something you fix in QA, because it stops happening in the first place.</p>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__cta">
                    <div className="service-page__wrap">
                        <p className="service-page__eyebrow">READY WHEN YOU ARE</p>
                        <h2>Want your next handoff to ship without drift?</h2>
                        <p>Tell us where design and engineering keep losing each other. We&apos;ll show you where the system is missing rules.</p>
                        <Link className="service-page__button" href="/contact">Book a Consultation <ArrowUpRight aria-hidden="true" size={18} /></Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
