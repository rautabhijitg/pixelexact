import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, CircleArrowRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ArticleMeta from "@/components/Insights/ArticleMeta";
import { servicePages } from "@/components/ServicePage/serviceData";
import { articles } from "@/data/articles";
import { absoluteUrl, buildMetadata, SITE_NAME } from "@/lib/seo";

const entry = articles.find((item) => item.slug === "modernizing-legacy-ui-without-touching-business-logic")!;
const relatedService = entry.relatedService ? servicePages[entry.relatedService] : undefined;

export const metadata: Metadata = buildMetadata({
    title: entry.seoTitle ?? entry.title,
    description: entry.metaDescription ?? entry.dek,
    path: `/insights/${entry.slug}`,
});

const redevelopmentComparison: [string, string, string][] = [
    ["What's in scope", "Functionality, workflows, integrations, and the interface", "The user-facing interface"],
    ["What gets re-tested", "The entire application, end to end", "The interface and its immediate touchpoints"],
    ["Where risk concentrates", "Everywhere, simultaneously", "One component at a time"],
    ["How change ships", "Typically a single cutover", "Incrementally, component by component"],
];

const migrationLoop: [string, string][] = [
    ["Identify", "Pick one piece of the interface to modernize next."],
    ["Modernize", "Rebuild it against the new design system."],
    ["Test", "Verify it on its own, without touching anything else."],
    ["Deploy", "Ship it, with the old and new interface running side by side."],
    ["Repeat", "Move to the next component and start again."],
];

const fitCriteria = [
    "The application is stable enough that the risk is concentrated in the interface, not the system beneath it.",
    "The interface has become visually fragmented or inconsistent across screens.",
    "Usability or accessibility gaps are the main source of user friction.",
    "The brand the product presents no longer matches the one the company is building toward.",
    "A full rebuild would carry cost, timeline, or operational risk the business isn't prepared to absorb right now.",
    "The existing workflows are worth preserving, not replacing.",
];

const faqs: [string, string][] = [
    ["Can a legacy application be modernized without rewriting the backend?", "Yes, when the business logic underneath is still sound. Presentation-layer modernization rebuilds the user-facing interface — visual design, components, interaction patterns — while leaving backend systems, business rules, and existing workflows untouched. It's not universal: if the backend itself is the actual bottleneck, modernizing the interface alone won't solve that."],
    ["What is presentation-layer modernization?", "The practice of substantially improving an application's user-facing interface while preserving the business logic and operational systems underneath it. Visual design, information hierarchy, components, and accessibility are open for change; backend logic, data, and existing workflows generally are not."],
    ["Does “without touching business logic” mean no engineering work is required?", "No. It means the engineering work is scoped to the presentation layer rather than the systems beneath it. Integration points still get checked, components still get tested, and edge cases still get handled — what changes is what's deliberately left out of scope, not how much work is involved."],
    ["Can existing workflows stay exactly the same?", "Often, yes — and that's usually the point. Users who already know how to complete a task don't benefit from relearning it on top of a visual refresh. Workflows are typically kept familiar where that familiarity is valuable, and restructured only where the existing layout was genuinely getting in the way."],
    ["When does a full redevelopment make more sense instead?", "When the actual bottleneck isn't the interface — when the business logic itself can't support what the product needs to do next, or the backend's technical debt is putting stability at risk. In those situations, modernizing the presentation layer alone treats a symptom rather than the underlying problem."],
];

export default function ModernizingLegacyUiArticlePage() {
    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: entry.title,
        description: entry.metaDescription ?? entry.dek,
        datePublished: entry.publishedAt,
        url: absoluteUrl(`/insights/${entry.slug}`),
        author: { "@type": "Organization", name: SITE_NAME },
        publisher: { "@type": "Organization", name: SITE_NAME },
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(([question, answer]) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
        })),
    };

    return (
        <div className="insight-page">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <Header backHref="/insights" backLabel="All insights" />
            <Breadcrumb items={[{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }, { name: entry.title, path: `/insights/${entry.slug}` }]} />

            <main id="main-content">
                <section className="service-page__hero">
                    <div className="service-page__wrap service-page__hero-grid">
                        <div>
                            <p className="service-page__eyebrow">{entry.topic}</p>
                            <h1>{entry.title}</h1>
                            {entry.publishedAt && <ArticleMeta publishedAt={entry.publishedAt} />}
                            <div className="service-page__hero-cta">
                                <Link className="service-page__inline-link" href="#in-practice">Jump to the Case Study <ArrowDown aria-hidden="true" size={14} /></Link>
                            </div>
                        </div>
                        <p className="service-page__summary">{entry.dek}</p>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div>
                                <p className="insight-page__intro">The application still works. It processes the transactions, runs the workflows, and holds the data integrations the rest of the business has quietly come to depend on. Nobody disputes that it&apos;s stable. What everyone agrees on, usually in the same breath, is that it looks like it&apos;s from a decade ago.</p>
                                <p className="insight-page__intro">That&apos;s the moment a project usually goes sideways. The interface problem gets reframed as an application problem, and the conversation shifts from &ldquo;the UI needs work&rdquo; to &ldquo;we need to rebuild the system.&rdquo; A full rewrite will fix the UI — along with the budget, the timeline, and the risk tolerance of everyone who approved it.</p>
                                <p className="insight-page__intro">There&apos;s a narrower path that gets skipped too often: modernize the layer the user actually experiences, and leave the system underneath it alone.</p>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">THE FALSE ASSUMPTION</p>
                                <h2>A Legacy Application Isn&apos;t Legacy in Every Layer</h2>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div>
                                <p className="insight-page__intro">Enterprise software rarely ages uniformly. Business logic — the rules that calculate a price, route an approval, reconcile an account — tends to be the most durable part of a system, because it encodes years of edge cases nobody wants to re-litigate. Workflows survive because people have been trained on them and built habits around them. The data and the integrations connecting it to other systems are often the most expensive and riskiest things to touch.</p>
                                <p className="insight-page__intro">The interface is a different story. It&apos;s the layer most exposed to design trends, to outdated frameworks, to UI patterns people stopped using years ago. It&apos;s also, not coincidentally, the layer people actually look at. When someone opens an application and winces, they rarely stop to ask which specific layer is responsible. They assume the whole thing needs to go.</p>
                                <p className="insight-page__intro">That assumption is often wrong. A legacy application is not necessarily legacy in every layer. The business logic can be sound, the workflows can be efficient, and the interface can still be the thing holding the product back. Separating those judgments is the first real decision in a modernization project — and it&apos;s the one that determines whether the next year is spent rewriting things that didn&apos;t need to change.</p>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">THE CONCEPT</p>
                                <h2>What Presentation-Layer Modernization Actually Means</h2>
                                <p className="service-page__index-summary">Presentation-layer modernization is the process of substantially improving the user-facing interface of an existing application while preserving the business logic and operational systems underneath it.</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <p className="insight-page__intro">In practice, that means the things a user interacts with directly are open for change: visual design, information hierarchy, the components themselves, interaction patterns, accessibility, responsive behavior, the design system as a whole. What generally stays untouched is the business logic enforcing the rules, the workflows people already know, the operational dependencies the application was built against, and — where it genuinely isn&apos;t worth disturbing — the underlying legacy HTML a screen was built on.</p>
                        </Reveal>
                        <Reveal index={1}>
                            <div className="service-page__boundary">
                                <p className="service-page__eyebrow">MODERNIZED</p>
                                <div className="service-page__boundary-tier service-page__boundary-tier--modern">
                                    <h3>Presentation Layer</h3>
                                    <ul><li>Visual design &amp; design system</li><li>UI components &amp; interaction patterns</li><li>Accessibility &amp; responsive behavior</li></ul>
                                </div>
                                <ArrowDown aria-hidden="true" size={20} className="service-page__boundary-arrow" />
                                <div className="service-page__boundary-tier">
                                    <h3>Everything Underneath</h3>
                                    <ul><li>Business logic &amp; core rules</li><li>Existing workflows</li><li>Backend systems &amp; integrations</li></ul>
                                </div>
                                <p className="service-page__eyebrow">PRESERVED</p>
                            </div>
                        </Reveal>
                        <Reveal index={2}><p className="service-page__index-summary service-page__index-summary--spaced">That&apos;s not a universal guarantee. Some interface changes do surface gaps in how the backend exposes data, and those get addressed on their own terms. The point isn&apos;t that the backend is permanently off-limits — it&apos;s that it doesn&apos;t get rewritten as a side effect of fixing what was actually a UI problem.</p></Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">RISK, NOT RISK-FREE</p>
                                <h2>Why This Narrows Risk Instead of Removing It</h2>
                                <p className="service-page__index-summary">A full redevelopment puts almost everything back on the table at once: functionality rebuilt, workflows revalidated, integrations reconnected, business logic re-tested end to end — usually against a live system the business can&apos;t afford to pause. The work isn&apos;t impossible; enterprises do it successfully. But the blast radius is the entire application, and every layer of risk compounds at the same time.</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="service-page__table-wrap">
                                <table className="service-page__table">
                                    <thead><tr><th>Dimension</th><th>Full Redevelopment</th><th>Presentation-Layer Modernization</th></tr></thead>
                                    <tbody>
                                        {redevelopmentComparison.map(([dimension, full, layer]) => <tr key={dimension}><td>{dimension}</td><td>{full}</td><td>{layer}</td></tr>)}
                                    </tbody>
                                </table>
                            </div>
                        </Reveal>
                        <Reveal index={1}><p className="service-page__index-summary service-page__index-summary--spaced">None of this makes modernization risk-free. Testing still happens. Integration points still get checked. Changing how a form looks and behaves can still expose something the backend didn&apos;t expect. What changes is the scope of what&apos;s actually being gambled on at any one point — a meaningfully different risk profile, not an absence of one.</p></Reveal>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">HOW IT SHIPS</p>
                                <h2>Modernizing in Increments, Not in One Leap</h2>
                                <p className="service-page__index-summary">The instinct in a lot of modernization projects is to treat the interface as one big cutover: design the whole thing, build the whole thing, ship it on a single release date. That&apos;s also where most of the risk in these projects actually lives — not in any individual component, but in the size of the leap.</p>
                            </div>
                        </Reveal>
                        <div className="service-page__process">
                            {migrationLoop.map(([title, description], index) => (
                                <Reveal className="service-page__process-step" key={title} index={index}>
                                    <h3><CircleArrowRight aria-hidden="true" size={22} />{title}</h3>
                                    <p>{description}</p>
                                </Reveal>
                            ))}
                        </div>
                        <Reveal index={1}><p className="service-page__index-summary service-page__index-summary--spaced">This isn&apos;t a technical nicety — it&apos;s a risk-management decision. Each component that moves through the loop is a contained unit of change, tested and shipped on its own, with the old and new interface able to run side by side until the migration is complete. If something&apos;s wrong, the blast radius is one component, not the whole release.</p></Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">BEYOND A COAT OF PAINT</p>
                                <h2>A Design System Is the Foundation, Not the Finish</h2>
                                <p className="service-page__index-summary">Modernizing an interface is sometimes treated as a styling exercise: new colors, a cleaner font, flatter buttons. That&apos;s not what separates a modernized product from one that&apos;s merely had a facelift.</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <p className="insight-page__intro">The durable version of this work starts with a design system: tokens for color, type, and spacing; components built once and reused everywhere; a single source of truth every screen draws from instead of reinventing. Without that foundation, every new screen is a fresh design decision, and the inconsistency that made the interface feel fragmented in the first place just gets rebuilt in a nicer font.</p>
                        </Reveal>
                        <Reveal index={1}>
                            <div className="service-page__flow">
                                <span className="service-page__flow-step">Design Tokens</span>
                                <ArrowUpRight aria-hidden="true" size={18} className="service-page__flow-arrow" />
                                <span className="service-page__flow-step">Reusable Components</span>
                                <ArrowUpRight aria-hidden="true" size={18} className="service-page__flow-arrow" />
                                <span className="service-page__flow-step">Consistent UI</span>
                                <ArrowUpRight aria-hidden="true" size={18} className="service-page__flow-arrow" />
                                <span className="service-page__flow-step">Modernized Screens</span>
                            </div>
                        </Reveal>
                        <Reveal index={2}><p className="service-page__index-summary service-page__index-summary--spaced">The other half of this is restraint. A modernized interface is not automatically a reorganized one. Users who already know where things are, and how a task gets done, don&apos;t benefit from relearning the product on top of getting a redesign. The strongest modernization work keeps layouts and workflows recognizable where that familiarity is actually valuable, and reserves structural change for the places where the old hierarchy was genuinely getting in the way — clarity and lower cognitive load, not novelty for its own sake.</p></Reveal>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">THE IMPORTANT CAVEAT</p>
                                <h2>What &ldquo;Without Touching Business Logic&rdquo; Actually Means</h2>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div>
                                <p className="insight-page__intro">&ldquo;Without touching business logic&rdquo; is sometimes heard as &ldquo;without doing any real engineering,&rdquo; which isn&apos;t what it means. Modernizing the presentation layer still involves engineering decisions, integration points, and testing — it&apos;s scoped engineering work, not the absence of it.</p>
                                <p className="insight-page__intro">What the phrase actually describes is a boundary decision: the application&apos;s core business rules, backend systems, and the logic governing how the product behaves are not being rewritten because the interface needed attention. The modernization is deliberately contained to the layer where the problem actually lives. That&apos;s a scoping discipline, not a shortcut — and it&apos;s the discipline that keeps a UI project from quietly turning into a platform rewrite.</p>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">THE JUDGMENT CALL</p>
                                <h2>When This Approach Fits — and When It Doesn&apos;t</h2>
                                <p className="service-page__index-summary">Presentation-layer modernization is worth evaluating when the business logic underneath is still sound, the workflows are still operationally valuable, and the actual complaint is about the experience, not the functionality. It tends to apply cleanly when:</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <ul className="service-page__list">
                                {fitCriteria.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </Reveal>
                        <Reveal index={1}><p className="service-page__index-summary service-page__index-summary--spaced">It&apos;s a worse fit when the problems aren&apos;t actually about the interface at all — when the business logic itself is the bottleneck, the architecture can&apos;t support where the product needs to go next, or the backend has accumulated enough technical debt that stability is the thing actually at risk. In those cases, a narrower presentation-layer effort doesn&apos;t remove the underlying problem — it delays the point at which it has to be addressed. Knowing which situation you&apos;re actually in matters more than the modernization technique itself.</p></Reveal>
                    </div>
                </section>

                <section className="service-page__section" id="in-practice">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">IN PRACTICE</p>
                                <h2>How This Played Out for One Enterprise Team</h2>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div>
                                <p className="insight-page__intro">This isn&apos;t a theoretical framework. We applied it for a large enterprise client running a mission-critical legacy platform: functionally stable, but visually dated, inconsistent across screens, and built from fragmented UI components accumulated over years. Leadership wanted the product to feel modern and competitive — but a full redevelopment was explicitly off the table, given the risk, cost, and disruption it would have introduced to a system the business depended on daily.</p>
                                <p className="insight-page__intro">The approach modernized the presentation layer only. Backend logic, existing workflows, and the legacy HTML underneath stayed exactly as they were. A new design system replaced the fragmented styling, the modernized visual direction was validated in Figma before any production code was touched, and the new interface rolled out incrementally, component by component, running alongside the legacy UI rather than replacing it in one release.</p>
                                <p className="insight-page__intro">The result was a genuinely new-feeling product for its users, built without rewriting the application it ran on — and a presentation layer now structured to keep evolving on its own. See the full <Link className="service-page__inline-link" href="/work/legacy-presentation-layer-modernization">legacy modernization case study <ArrowUpRight aria-hidden="true" size={14} /></Link> for how the architecture, migration strategy, and design system came together.</p>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">A FEW DIRECT ANSWERS</p>
                                <h2>Questions Worth Answering Before You Commit to a Rebuild</h2>
                            </div>
                        </Reveal>
                        <Reveal index={1}>
                            <div className="service-page__faqs">
                                {faqs.map(([question, answer]) => (
                                    <details className="service-page__faq" key={question}>
                                        <summary>{question}</summary>
                                        <p>{answer}</p>
                                    </details>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </section>

                {relatedService && (
                    <section className="service-page__section">
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

                <section className="service-page__cta"><div className="service-page__wrap"><p className="service-page__eyebrow">READY WHEN YOU ARE</p><h2>Want to talk this through?</h2><p>Tell us where the work is stuck and what better looks like.</p><Link className="service-page__button" href="/contact">Book a Consultation <ArrowUpRight aria-hidden="true" size={18} /></Link></div></section>
            </main>
            <Footer />
        </div>
    );
}
