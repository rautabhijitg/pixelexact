import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check, CircleArrowRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { servicePages } from "@/components/ServicePage/serviceData";
import { articles } from "@/data/articles";
import { absoluteUrl, buildMetadata, SITE_NAME } from "@/lib/seo";

const entry = articles.find((item) => item.slug === "how-we-deliver-projects-in-weeks-not-months")!;
const relatedService = entry.relatedService ? servicePages[entry.relatedService] : undefined;

export const metadata: Metadata = buildMetadata({
    title: entry.seoTitle ?? entry.title,
    description: entry.metaDescription ?? entry.dek,
    path: `/insights/${entry.slug}`,
});

const frictionPoints = [
    "Static Handoff Disconnects: Design files capture a fixed layout, not real-world variables like dynamic data length, network latency, or keyboard focus states. Frontend teams spend weeks translating static canvases into working interaction states, surfacing edge cases the design never accounted for.",
    "Redundant Primitive Construction: Without a proven library of foundation components, developers spend early sprints rebuilding form inputs, modals, accessible tables, and navigation patterns that already exist in nearly every product.",
    "Coupled Blockers: When frontend work is tightly bound to live backend endpoints, client-side engineering waits on API schemas, databases, and services to finish first.",
    "Delayed Quality Checkpoints: Responsive and accessibility checks get pushed to the end of the cycle, so structural problems surface days before launch, when fixing them is most expensive.",
];

const unifiedTeamPoints = [
    "Designers work with the browser in mind: CSS Grid, Flexbox, viewport units, and semantic HTML, not just a static canvas.",
    "Frontend engineers apply design-system judgment directly: typographic hierarchy, spacing rhythm, and micro-interactions, without needing a red-lined spec for every screen.",
    "Edge cases get resolved before code is written: empty states, error boundaries, extreme viewport widths, text truncation, and touch targets.",
];

const componentSystemTable: [string, string, string, string][] = [
    ["Foundations", "Raw CSS, colors, and spacing redefined on every screen", "Centralized design tokens synced between Figma and code", "Consistency by default; changes propagate everywhere at once"],
    ["Component Primitives", "Comboboxes, modals, and tables built from scratch", "Pre-tested, accessible, keyboard-navigable patterns", "Skips the first sprints of baseline construction"],
    ["State & Interaction", "One-off focus states and loading behavior", "Encapsulated ARIA attributes and focus traps", "Meets accessibility standards by default, not by exception"],
    ["Feature Focus", "Most of the sprint spent on plumbing", "Most of the sprint spent on the product's actual logic", "Faster time-to-market for what makes the product different"],
];

const tokenGuarantees = [
    "What it is: A shared set of variables for color, spacing, type scale, and radius, defined once and consumed by both the design file and the codebase.",
    "Why it matters: When a color or spacing value changes, it propagates automatically instead of requiring a manual sweep through dozens of files.",
    "What it changes: Visual consistency stops depending on everyone remembering the rules, across a full product or an entire multi-brand suite.",
];

const contractFirstSteps: [string, string][] = [
    ["Define the Contract", "The API shape, request/response schema, and data types get agreed on day one, before either side starts building."],
    ["Mock Deterministically", "Frontend engineers build against a mock server that mirrors the real contract exactly, so full interaction flows and error states get built immediately, not after the backend ships."],
    ["Work in Parallel, Not in Sequence", "Backend engineers focus on logic, security, and data. Frontend engineers focus on rendering and experience. Neither is blocked on the other."],
    ["Cut Over With Minimal Friction", "When the real endpoints go live, swapping the mock adapter for the live one is a small, contained change, not an integration sprint."],
];

const aiLoopSteps: [string, string][] = [
    ["Architect Prompting", "Senior practitioners define context, types, accessibility constraints, and design tokens before anything gets generated."],
    ["AI Scaffolding", "AI generates boilerplate, transforms schemas, and scaffolds tests, handling the mechanical parts of implementation."],
    ["Senior Inspection", "Every output gets a human review for logic, accessibility, edge cases, and code quality before it goes further."],
    ["Automated Pipeline", "Visual, responsive, and accessibility checks run in continuous integration before anything reaches production."],
];

const aiUseCases = [
    "Scaffolding accessible component boilerplate from pre-defined tokens and types.",
    "Writing data-mapping functions that turn legacy outputs into modern view models.",
    "Generating edge-case test scenarios: unusual input lengths, character encodings, timeout conditions.",
    "Speeding up the mechanical parts of migrating a legacy codebase to a modern stack.",
];

const qualityCheckpoints = [
    "Fluid Responsive Behavior: Layouts get checked continuously across real viewport ranges, not just a fixed set of breakpoints, from a small phone up to an ultrawide monitor.",
    "Cross-Browser Hardening: Interfaces get tested across Chromium, WebKit, and Gecko, catching rendering differences before a user does.",
    "Accessibility Built In, Not Bolted On: Landmarks, contrast, keyboard navigation, and ARIA roles are part of the base components, meeting WCAG 2.1/2.2 AA by default.",
    "Design Match Checks: Regular side-by-side comparisons keep implementation honest against the approved design intent.",
    "Component Consistency Audits: Code gets checked periodically for one-off CSS that would otherwise fracture the shared component system.",
];

const pipelinePhases: [string, string][] = [
    ["Discover & Deconstruct", "Audit scope, legacy constraints, and user journeys, and identify what can come from the existing component library versus what needs custom work."],
    ["Define Interaction & Schema", "Senior UX leads sketch the flows while architects specify the API and data contracts."],
    ["Synchronize Design Tokens", "Brand colors, spacing, and typography get tokenized and shared between design tools and the codebase."],
    ["Deploy Reusable Building Blocks", "Proven UI primitives, navigation, layout shells, and form patterns give the product a working frame from day one."],
    ["AI-Assisted Scaffolding", "Senior developers use AI to scaffold boilerplate views and data adapters mapped to the agreed tokens and contracts."],
    ["Parallel Engineering", "Frontend work proceeds against the mock contract while backend builds the real APIs, services, and data layer, at the same time."],
    ["Continuous Validation", "Responsive, visual, cross-browser, and accessibility checks run in CI alongside regular senior review."],
    ["Production Cutover", "Final integration, performance checks, and launch, once the real endpoints replace the mocks."],
];

const compressionReasons = [
    "No sprint gets spent debating baseline form styling or dropdown accessibility, because that groundwork already exists.",
    "Frontend engineers don't sit idle waiting for a backend endpoint to go live.",
    "The final weeks of a project aren't spent fixing UI defects that a continuous process would have caught earlier.",
];

const fitCases = [
    ["Complex Enterprise SaaS & Internal Tools", "Dashboards, workflows, and permission structures that need real UI consistency and accessibility, not a template."],
    ["Legacy Application Modernization", "Rebuilding a legacy interface onto a modern stack, where backend migration and frontend rebuild need to happen in parallel, not sequentially.", "/services/legacy-application-modernization", "Explore legacy modernization"],
    ["Launches on a Fixed Deadline", "A product that needs to hit a real market window without giving up accessibility or design quality to get there."],
    ["Multi-Brand Design System Rollouts", "Bringing a fragmented set of products under one shared, tokenized frontend."],
] as const;

export default function HowWeDeliverArticlePage() {
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
        <div className="insight-page">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <Header backHref="/insights" backLabel="All insights" />
            <Breadcrumb items={[{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }, { name: entry.title, path: `/insights/${entry.slug}` }]} />

            <main id="main-content">
                <section className="service-page__hero">
                    <div className="service-page__wrap service-page__hero-grid">
                        <div>
                            <p className="service-page__eyebrow">{entry.topic}</p>
                            <h1>{entry.title}</h1>

                        </div>
                        <p className="service-page__summary">{entry.dek}</p>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div>
                                <p className="insight-page__intro">Enterprise software initiatives rarely stall because engineers lack commitment or talent. They stall because delivery is structured around sequential handoffs, interfaces rebuilt from scratch, tightly coupled architecture, and quality checks that arrive too late to matter.</p>
                                <p className="insight-page__intro">When a release stretches across quarters, the bottleneck is almost never raw coding speed. It&apos;s friction: designers delivering static mockups disconnected from technical constraints, frontend developers rebuilding the same interface primitives project after project, backend work blocking UI integration, and QA uncovering layout and accessibility failures weeks before launch.</p>
                                <p className="insight-page__intro">Compressing a timeline doesn&apos;t mean cutting corners or handing a junior team an AI code generator. It means eliminating the rework that a fragmented process makes inevitable.</p>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">THE REAL COST OF HANDOFFS</p>
                                <h2>The Bottleneck Isn&apos;t Effort. It&apos;s Workflow Friction.</h2>
                                <p className="service-page__index-summary">The traditional path runs like a relay: UX discovery, static UI mockups, a handoff document, frontend scaffolding, backend coupling, then a QA cycle that finds what the earlier stages missed. Context gets lost at every exchange, and technical debt accumulates along the way.</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="service-page__outcomes">
                                {frictionPoints.map((item) => {
                                    const [label, text] = item.split(/:\s*/);
                                    return <p key={label}><Check aria-hidden="true" size={18} /><strong>{label}:</strong>&nbsp;{text}</p>;
                                })}
                            </div>
                        </Reveal>
                        <Reveal index={1}><p className="service-page__index-summary">Accelerating delivery means restructuring the process so teams spend their time on what&apos;s actually unique to the product, not on solving the same plumbing again.</p></Reveal>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">ONE TEAM, NOT A RELAY</p>
                                <h2>Senior UX, UI, and Frontend Under One Roof</h2>
                                <p className="service-page__index-summary">One of the biggest sources of delay in digital product work is the divide between design and engineering. When they operate as separate disciplines, or separate vendors, every iteration needs a formal handoff, a meeting, and a negotiation. <Link className="service-page__inline-link" href="/services/ux-product-design">Our UX and product design work <ArrowUpRight aria-hidden="true" size={14} /></Link> is built to close that gap from the start.</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <ul className="service-page__list">
                                {unifiedTeamPoints.map((point) => <li key={point}>{point}</li>)}
                            </ul>
                        </Reveal>
                        <Reveal index={1}><p className="service-page__index-summary">When implementation is guided by one team that owns both the design and the code, the usual backlog of late-stage UI bugs, mismatched breakpoints, and accessibility gaps shrinks dramatically, because nobody is reverse-engineering someone else&apos;s intent.</p></Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">STOP REBUILDING PRIMITIVES</p>
                                <h2>Reusable Component Systems</h2>
                                <p className="service-page__index-summary">Every product needs data tables, forms, filters, dialogs, and status indicators. Building these from scratch on every project spends engineering time on the least differentiated part of the build.</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="service-page__table-wrap">
                                <table className="service-page__table">
                                    <thead><tr><th>Layer</th><th>Traditional Custom Build</th><th>Reusable Component Model</th><th>Business Advantage</th></tr></thead>
                                    <tbody>
                                        {componentSystemTable.map(([layer, traditional, reusable, advantage]) => <tr key={layer}><td>{layer}</td><td>{traditional}</td><td>{reusable}</td><td>{advantage}</td></tr>)}
                                    </tbody>
                                </table>
                            </div>
                        </Reveal>
                        <Reveal index={1}><p className="service-page__index-summary">This is exactly what our <Link className="service-page__inline-link" href="/services/design-toolkit">design toolkit <ArrowUpRight aria-hidden="true" size={14} /></Link> exists for: a proven starting point instead of a blank repository.</p></Reveal>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">THE SINGLE SOURCE OF TRUTH</p>
                                <h2>Design Tokens Turn Decisions Into Reusable Logic</h2>
                                <p className="service-page__index-summary">Inconsistent spacing, mismatched colors, and one-off breakpoints are what happen when visual decisions live only in individual files. Design tokens turn those decisions into a single, structured source shared between design and code, the foundation of our <Link className="service-page__inline-link" href="/services/ui-design-systems">UI &amp; design systems <ArrowUpRight aria-hidden="true" size={14} /></Link> work.</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="service-page__outcomes">
                                {tokenGuarantees.map((item) => {
                                    const [label, text] = item.split(/:\s*/);
                                    return <p key={label}><Check aria-hidden="true" size={18} /><strong>{label}:</strong>&nbsp;{text}</p>;
                                })}
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">PARALLEL, NOT SEQUENTIAL</p>
                                <h2>Decoupled Architecture Enables True Parallel Delivery</h2>
                                <p className="service-page__index-summary">In a typical setup, frontend work waits on the backend. If an API takes six weeks to design and secure, the frontend team spends six weeks idle, or builds throwaway stubs that break the moment real integration begins. Contract-first architecture removes that dependency.</p>
                            </div>
                        </Reveal>
                        <div className="service-page__process">
                            {contractFirstSteps.map(([title, description], index) => (
                                <Reveal className="service-page__process-step" key={title} index={index}>
                                    <h3><CircleArrowRight aria-hidden="true" size={22} />{title}</h3>
                                    <p>{description}</p>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">AI, SUPERVISED</p>
                                <h2>AI Accelerates Execution. Senior Judgment Owns It.</h2>
                                <p className="service-page__index-summary">AI is a genuine multiplier for an experienced team, and a liability in the hands of one that isn&apos;t. Used without judgment, it produces code that looks plausible and fails quietly: subtle security gaps, broken semantics, bloated performance. Used by senior practitioners, it removes the mechanical parts of the work while people stay in control of architecture, quality, and security.</p>
                            </div>
                        </Reveal>
                        <div className="service-page__process service-page__process--four">
                            {aiLoopSteps.map(([title, description], index) => (
                                <Reveal className="service-page__process-step" key={title} index={index}>
                                    <h3><CircleArrowRight aria-hidden="true" size={22} />{title}</h3>
                                    <p>{description}</p>
                                </Reveal>
                            ))}
                        </div>
                        <Reveal className="service-page__checklist-block" index={1}>
                            <h3>Where AI Actually Helps</h3>
                            <ul className="service-page__list">
                                {aiUseCases.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </Reveal>
                        <Reveal index={2}><p className="service-page__index-summary">AI accelerates execution. Senior practitioners still own the architecture, the decisions, and the result. Every AI-assisted change goes through the same review and testing as anything else before it ships.</p></Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">QUALITY BUILT IN, NOT BOLTED ON</p>
                                <h2>Continuous Validation, Not Late-Stage QA</h2>
                                <p className="service-page__index-summary">Deferring quality checks to the end of a release is a false economy: a structural defect found in late-stage staging costs far more to fix than the same defect caught mid-sprint. Our <Link className="service-page__inline-link" href="/services/frontend-application-development">frontend engineering <ArrowUpRight aria-hidden="true" size={14} /></Link> work is built around exactly this loop.</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="service-page__outcomes">
                                {qualityCheckpoints.map((item) => {
                                    const [label, text] = item.split(/:\s*/);
                                    return <p key={label}><Check aria-hidden="true" size={18} /><strong>{label}:</strong>&nbsp;{text}</p>;
                                })}
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section" id="pipeline">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">THE PIPELINE</p>
                                <h2>The End-to-End Delivery Pipeline</h2>
                                <p className="service-page__index-summary">Put together, reusable systems, decoupled contracts, senior expertise, and AI-assisted tooling become an eight-phase pipeline.</p>
                            </div>
                        </Reveal>
                        <div className="service-page__process">
                            {pipelinePhases.map(([title, description], index) => (
                                <Reveal className="service-page__process-step" key={title} index={index % 3}>
                                    <h3><CircleArrowRight aria-hidden="true" size={22} />{title}</h3>
                                    <p>{description}</p>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">WHY THIS COMPRESSES TIMELINES</p>
                                <h2>Timeline Compression Without Cutting Corners</h2>
                                <p className="service-page__index-summary">Strip out handoff delays, redundant component work, sequential blockers, and late-stage rework, and a timeline compresses on its own, not because anyone worked longer hours, but because fewer hours got spent on things that didn&apos;t need doing twice:</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <ul className="service-page__list">
                                {compressionReasons.map((reason) => <li key={reason}>{reason}</li>)}
                            </ul>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">IS THIS THE RIGHT FIT</p>
                                <h2>Is This Delivery Model Right for Your Team?</h2>
                                <p className="service-page__index-summary">This model is built for a specific kind of project, not every project.</p>
                            </div>
                        </Reveal>
                        <div className="service-page__text-grid">
                            {fitCases.map((item, index) => {
                                const [title, description, href, linkLabel] = item;
                                const isLast = index === fitCases.length - 1 && fitCases.length % 2 === 1;
                                return (
                                    <Reveal className={`service-page__text-grid-item${isLast ? " service-page__text-grid-item--wide" : ""}`} key={title} index={index}>
                                        <h3>{title}</h3>
                                        <p>{description}</p>
                                        {href && linkLabel && <Link href={href}>{linkLabel} <ArrowUpRight aria-hidden="true" size={14} /></Link>}
                                    </Reveal>
                                );
                            })}
                        </div>
                        <Reveal index={1}><p className="service-page__index-summary">If a project is a small marketing site or a one-off campaign page with no real integration work, a simpler build is the more sensible choice. This process is built for products that need to hold up under real, ongoing use.</p></Reveal>
                    </div>
                </section>

                {relatedService && (
                    <section className="service-page__section service-page__section--alt">
                        <div className="service-page__wrap insight-page__cta-grid">
                            <Reveal>
                                <div className="service-page__outcomes">
                                    <p className="service-page__label">Related service</p>
                                    <p><Link className="service-page__inline-link" href={`/services/${relatedService.slug}`}>{relatedService.title} <ArrowUpRight aria-hidden="true" size={14} /></Link></p>
                                </div>
                            </Reveal>
                            {/* <Reveal><div className="service-page__hero-cta">
                                <Link className="service-page__button" href="/contact">See If This Fits Your Project <ArrowUpRight aria-hidden="true" size={18} /></Link>
                                {/* <Link className="service-page__inline-link" href="#pipeline">Jump to the Pipeline <ArrowDown aria-hidden="true" size={14} /></Link> */}
                            {/*</div></Reveal> */}
                        </div>
                    </section >
                )
                }

                <section className="service-page__cta">
                    <div className="service-page__wrap">
                        <p className="service-page__eyebrow">READY WHEN YOU ARE</p>
                        <h2>Want a straight read on your timeline?</h2>
                        <p>Tell us the scope. We&apos;ll tell you what&apos;s realistic and where the time actually goes.</p>
                        <Link className="service-page__button" href="/contact">Book a Consultation <ArrowUpRight aria-hidden="true" size={18} /></Link>
                    </div>
                </section>
            </main >
            <Footer />
        </div >
    );
}
