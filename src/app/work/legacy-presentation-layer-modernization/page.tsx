import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, CircleArrowRight, RotateCcw } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { servicePages } from "@/components/ServicePage/serviceData";
import CaseStudyArt from "@/components/visuals/CaseStudyArt";
import { caseStudies } from "@/data/caseStudies";
import { buildMetadata } from "@/lib/seo";

const entry = caseStudies.find((item) => item.slug === "legacy-presentation-layer-modernization")!;
const relatedService = servicePages[entry.relatedService];

export const metadata: Metadata = buildMetadata({
    title: entry.seoTitle ?? entry.title,
    description: entry.metaDescription ?? entry.summary,
    path: `/work/${entry.slug}`,
});

const overview: [string, string][] = [
    ["Client", "Large enterprise, name withheld"],
    ["Platform", "Mission-critical legacy application"],
    ["Discipline", "UX strategy, design system, frontend architecture"],
    ["Scope", "Presentation layer only — HTML/CSS with SCSS"],
    ["Stakeholders", "CEO, CFO, CTO"],
];

const problemSymptoms = [
    "The interface relied on older design trends and leaned heavily on dark colors.",
    "UI components were fragmented, with no shared source of visual truth.",
    "Styling was inconsistent from screen to screen.",
    "The system had little flexibility to support future growth.",
];

const rebuildConcerns = [
    "The high risk and complexity of rewriting a deeply integrated enterprise system.",
    "The time and cost of rebuilding from scratch.",
    "Disruption to established workflows, dependencies, and business operations.",
];

const designSystemPoints = [
    "Built from the ground up to replace fragmented, inconsistent UI styling.",
    "Defined core design tokens — color, typography, spacing — alongside reusable component standards.",
    "Established a single source of truth that keeps every screen, and every future enhancement, consistent.",
];

const figmaPoints = [
    "Delivered the complete modernized visual design in Figma, including a softer color palette and improved visual hierarchy.",
    "Redesigned key screens while keeping layouts and workflows familiar, so users wouldn't need retraining.",
    "Used the Figma designs to demonstrate the transformation to leadership and win executive buy-in before any development began.",
];

const architecturePoints = [
    "Designed a scalable SCSS architecture separating global styles, shared utilities, component styles, and page-level layouts.",
    "Introduced an mx- prefix system and a parallel styling layer so modern and legacy UI could run side by side.",
    "Established a component-by-component migration process, with isolated testing and controlled deployment.",
];

const scssTree: [string, string][] = [
    ["global/", "Design tokens, typography, and the base reset"],
    ["shared/", "Utilities, mixins, and helpers used across components"],
    ["components/", "Buttons, forms, tables, cards"],
    ["pages/", "Page-level layouts"],
    ["legacy/", "Existing CSS — untouched"],
];

const migrationSteps: [string, string][] = [
    ["Identify", "Select one legacy component."],
    ["Build", "Create its prefixed, modernized version."],
    ["Test in Isolation", "Verify the new component without affecting legacy screens."],
    ["Deploy", "Release it in a controlled way, with zero downtime."],
    ["Repeat", "Move to the next component, starting the loop again from Identify."],
];

const solutionHighlights: [string, string][] = [
    ["Presentation-Layer Modernization Without Functional Changes", "The interface could be fully transformed without touching business logic or backend systems — modernization at a fraction of the cost, time, and risk of a full redevelopment."],
    ["Parallel UI Implementation With Zero Downtime", "A parallel styling system let the old and new UI run side by side, with full backward compatibility and no breaking changes to the existing HTML or CSS."],
    ["Complete Rebranding Through a Modern Design System", "A clean, minimal interface with a softer color palette and clearer visual hierarchy established one consistent design language across every screen, while keeping workflows familiar."],
    ["Structured, Maintainable Frontend Architecture", "A scalable architecture separating global styles, shared utilities, component styles, and page-level layouts reduced technical debt and made long-term maintenance easier."],
    ["Controlled, Incremental Migration Strategy", "A clear mx- class prefix separated modernized components from legacy code, enabling safe, component-by-component upgrades, each tested in isolation and deployed in a controlled way."],
];

const impact = [
    "Avoided High-Risk Redevelopment: The client received a modernized UI without rewriting the application, avoiding significant operational and financial risk.",
    "Improved User Productivity and Experience: Cleaner layouts, clearer hierarchy, and simpler navigation reduced cognitive load and helped users complete tasks more efficiently.",
    "Leadership Buy-In Through Demonstration: A working demonstration showed the UI could be modernized independently of functionality, which helped build executive confidence.",
    "A Brand-New Look for a Legacy System: Users experienced what felt like a completely new application, even though the underlying system stayed the same.",
    "Future-Ready, Scalable UI Foundation: The new presentation layer can now evolve on its own, supporting faster enhancements, easier maintenance, and long-term scalability.",
    "Design-to-Code Consistency: Because the Figma designs, the design system, and the frontend architecture were built together, the delivered UI stayed faithful to the approved design — a foundation now in place for future work.",
];

const technologies = [
    "Figma — visual design and design system",
    "Design tokens and a reusable component library",
    "Presentation-layer styling architecture — SCSS-based structure",
    "Modular design system with global, shared, and component-scoped styles",
    "Legacy-compatible HTML/CSS enhancement strategy",
];

export default function LegacyModernizationCaseStudyPage() {
    return (
        <div className="service-page">
            <Header backHref="/work" backLabel="All work" />
            <Breadcrumb items={[{ name: "Home", path: "/" }, { name: "Work", path: "/work" }, { name: entry.title, path: `/work/${entry.slug}` }]} />

            <main id="main-content">
                <section className="service-page__hero">
                    <div className="service-page__wrap service-page__hero-grid">
                        <div>
                            <p className="service-page__eyebrow">{entry.tag}</p>
                            <h1>{entry.title}</h1>
                        </div>
                        <p className="service-page__summary">{entry.summary}</p>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal>
                            <CaseStudyArt variant={entry.art} className="case-art--hero" />
                            <p className="service-page__label service-page__art-caption">Illustrative representation of the transformation — not an actual client screenshot</p>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__table-wrap">
                                <table className="service-page__table">
                                    <tbody>
                                        {overview.map(([field, detail]) => <tr key={field}><th scope="row">{field}</th><td>{detail}</td></tr>)}
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
                                <p className="service-page__eyebrow">THE CHALLENGE</p>
                                <h2>Functionally Stable. Falling Behind Visually.</h2>
                                <p className="service-page__index-summary">The application was functionally stable — it did what it needed to do. But its interface was outdated and increasingly out of step with where the brand was headed:</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <ul className="service-page__list">
                                {problemSymptoms.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </Reveal>
                        <Reveal index={1}><p className="service-page__index-summary">Together, these issues were affecting usability, maintainability, and how the brand was perceived. Leadership wanted the product to feel modern and competitive — but a full redevelopment was off the table, because of:</p></Reveal>
                        <Reveal index={2}>
                            <ul className="service-page__list">
                                {rebuildConcerns.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </Reveal>
                        <Reveal index={3}><p className="service-page__index-summary">The common assumption was that real modernization would require a complete rebuild. Leadership did not want to take that path.</p></Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal>
                            <blockquote className="service-page__pull-quote">
                                <p>Modernization didn&apos;t need a rebuild. It needed the right layer.</p>
                            </blockquote>
                        </Reveal>
                        <Reveal index={1}><p className="service-page__index-summary service-page__index-summary--spaced">The presentation layer — the part of the application users actually see and interact with — was the right boundary for modernization. It could be rebuilt independently, while backend logic, workflows, and legacy HTML stayed exactly as they were.</p></Reveal>
                    </div>
                </section>

                <section className="service-page__section" id="contributions">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">KEY CONTRIBUTIONS</p>
                                <h2>Three Moves That Made Modernization Possible</h2>
                            </div>
                        </Reveal>

                        <Reveal className="service-page__checklist-block">
                            <h3>01 — Created a New Design System</h3>
                            <p className="service-page__index-summary">A new <Link className="service-page__inline-link" href="/services/ui-design-systems">design system <ArrowUpRight aria-hidden="true" size={14} /></Link> replaced fragmented, inconsistent UI styling.</p>
                            <ul className="service-page__list">
                                {designSystemPoints.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </Reveal>

                        <Reveal className="service-page__checklist-block" index={1}>
                            <h3>02 — Designed a New Visual Experience in Figma</h3>
                            <p className="service-page__index-summary">The modernized visual direction was fully designed and validated in Figma before a single line of production code was written — the same <Link className="service-page__inline-link" href="/services/ux-product-design">UX &amp; product design <ArrowUpRight aria-hidden="true" size={14} /></Link> discipline applied to every engagement.</p>
                            <ul className="service-page__list">
                                {figmaPoints.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </Reveal>

                        <Reveal className="service-page__checklist-block" index={2}>
                            <h3>03 — Set Up the Frontend Architecture</h3>
                            <p className="service-page__index-summary">The modernized UI needed a <Link className="service-page__inline-link" href="/services/frontend-application-development">frontend architecture <ArrowUpRight aria-hidden="true" size={14} /></Link> that could run alongside the legacy system rather than replace it outright.</p>
                            <ul className="service-page__list">
                                {architecturePoints.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">THE TRANSFORMATION</p>
                                <h2>From Scattered Styling to a Governed System</h2>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="service-page__flow">
                                <span className="service-page__flow-step">Design Tokens</span>
                                <ArrowRight aria-hidden="true" size={18} className="service-page__flow-arrow" />
                                <span className="service-page__flow-step">Reusable Components</span>
                                <ArrowRight aria-hidden="true" size={18} className="service-page__flow-arrow" />
                                <span className="service-page__flow-step">Consistent UI</span>
                                <ArrowRight aria-hidden="true" size={18} className="service-page__flow-arrow" />
                                <span className="service-page__flow-step">Modernized Screens</span>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section" id="architecture">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">TECHNICAL ARCHITECTURE</p>
                                <h2>A Styling Architecture Built to Run Alongside Legacy Code</h2>
                                <p className="service-page__index-summary">The SCSS structure keeps every layer of styling — tokens, utilities, components, pages, and the untouched legacy styles — isolated and easy to reason about.</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="service-page__code-panel">
                                <p className="service-page__label">Representative SCSS structure</p>
                                <ul className="service-page__tree">
                                    <li><span className="service-page__tree-label">styles/</span></li>
                                    <li>
                                        <ul>
                                            {scssTree.map(([label, desc]) => (
                                                <li key={label}><span className="service-page__tree-label">{label}</span><span className="service-page__tree-desc">{desc}</span></li>
                                            ))}
                                            <li><span className="service-page__tree-label">main.scss</span><span className="service-page__tree-desc">Single entry point</span></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">PARALLEL STYLING</p>
                                <h2>Old and New, Running Side by Side</h2>
                                <p className="service-page__index-summary">The existing styling remains intact while the new presentation layer is introduced alongside it.</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="service-page__code-panel">
                                <p className="service-page__label">SCSS</p>
                                <pre>{`/* Legacy: left exactly as it was */
.btn-primary { ... }

/* Modernized: isolated by prefix */
.mx-btn { ... }
.mx-btn--primary { ... }`}</pre>
                            </div>
                        </Reveal>
                        <Reveal index={1}>
                            <div className="service-page__code-panel">
                                <p className="service-page__label">HTML</p>
                                <pre>{`<!-- Same markup, new layer -->
<button class="btn-primary mx-btn mx-btn--primary">`}</pre>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section" id="migration">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">MIGRATION STRATEGY</p>
                                <h2>A Controlled, Component-by-Component Loop</h2>
                                <p className="service-page__index-summary">Rather than a single cutover, each component moved through the same five-step loop — isolated, tested, and deployed on its own schedule.</p>
                            </div>
                        </Reveal>
                        <div className="service-page__process">
                            {migrationSteps.map(([title, description], index) => (
                                <Reveal className="service-page__process-step" key={title} index={index}>
                                    <h3>{index === migrationSteps.length - 1 ? <RotateCcw aria-hidden="true" size={22} /> : <CircleArrowRight aria-hidden="true" size={22} />}{title}</h3>
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
                                <p className="service-page__eyebrow">THE SOLUTION</p>
                                <h2>Modernize the Presentation Layer. Leave the Backend Alone.</h2>
                                <p className="service-page__index-summary">The modernization strategy changed only the presentation layer, leaving backend logic, workflows, and legacy HTML fully intact — delivering visual and usability improvements without putting operational stability at risk.</p>
                            </div>
                        </Reveal>
                        <div className="service-page__text-grid">
                            {solutionHighlights.map(([title, description], index) => {
                                const isLast = index === solutionHighlights.length - 1 && solutionHighlights.length % 2 === 1;
                                return (
                                    <Reveal className={`service-page__text-grid-item${isLast ? " service-page__text-grid-item--wide" : ""}`} key={title} index={index}>
                                        <h3>0{index + 1} — {title}</h3>
                                        <p>{description}</p>
                                    </Reveal>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">BUSINESS &amp; UX IMPACT</p>
                                <h2>What the New Presentation Layer Changed</h2>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="service-page__outcomes">
                                {impact.map((item) => {
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
                                <p className="service-page__eyebrow">TOOLS &amp; TECHNOLOGIES USED</p>
                                <h2>What Powered the Rebuild</h2>
                            </div>
                        </Reveal>
                        <div className="service-page__deliverables">
                            {technologies.map((item, index) => {
                                const isLast = index === technologies.length - 1 && technologies.length % 2 === 1;
                                return (
                                    <Reveal className={`service-page__deliverable${isLast ? " service-page__deliverable--wide" : ""}`} key={item} index={index}>
                                        <span>0{index + 1}</span>
                                        <h3>{item}</h3>
                                    </Reveal>
                                );
                            })}
                        </div>
                        <Reveal index={1}><p className="service-page__index-summary service-page__index-summary--spaced"><strong>No backend or framework changes were required.</strong> The entire engagement stayed scoped to the presentation layer — explore the full <Link className="service-page__inline-link" href="/services/legacy-application-modernization">Legacy Application Modernization <ArrowUpRight aria-hidden="true" size={14} /></Link> service, or see how reusable components factor into faster delivery in the <Link className="service-page__inline-link" href="/services/design-toolkit">Design Toolkit <ArrowUpRight aria-hidden="true" size={14} /></Link>.</p></Reveal>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">SUMMARY</p>
                                <h2>Modernization Didn&apos;t Need a Rebuild. It Needed the Right Layer.</h2>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="service-page__flow">
                                <span className="service-page__flow-step"><Check aria-hidden="true" size={16} />Backend untouched</span>
                                <span className="service-page__flow-step"><Check aria-hidden="true" size={16} />Legacy HTML preserved</span>
                                <span className="service-page__flow-step"><Check aria-hidden="true" size={16} />Zero downtime</span>
                                <span className="service-page__flow-step"><Check aria-hidden="true" size={16} />Fully rebranded UI</span>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {relatedService && (
                    <section className="service-page__section service-page__section--alt">
                        <div className="service-page__wrap">
                            <Reveal>
                                <div className="service-page__outcomes">
                                    <p className="service-page__label">Related service</p>
                                    <p><Link className="service-page__inline-link" href={`/services/${relatedService.slug}`}>{relatedService.title} <ArrowUpRight aria-hidden="true" size={14} /></Link></p>
                                </div>
                            </Reveal>
                        </div>
                    </section>
                )}

                <section className="service-page__cta"><div className="service-page__wrap"><p className="service-page__eyebrow">READY WHEN YOU ARE</p><h2>Working on something similar?</h2><p>Tell us where the work is stuck and what better looks like.</p><Link className="service-page__button" href="/contact">Book a Consultation <ArrowUpRight aria-hidden="true" size={18} /></Link></div></section>
            </main>
            <Footer />
        </div>
    );
}
