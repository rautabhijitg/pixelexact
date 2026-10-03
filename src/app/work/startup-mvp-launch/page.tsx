import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { servicePages } from "@/components/ServicePage/serviceData";
import CaseStudyArt from "@/components/visuals/CaseStudyArt";
import { caseStudies } from "@/data/caseStudies";
import { absoluteUrl, buildMetadata, SITE_NAME } from "@/lib/seo";

const entry = caseStudies.find((item) => item.slug === "startup-mvp-launch")!;
const relatedService = servicePages[entry.relatedService];

export const metadata: Metadata = buildMetadata({
    title: entry.seoTitle ?? entry.title,
    description: entry.metaDescription ?? entry.summary,
    path: `/work/${entry.slug}`,
});

const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    headline: entry.title,
    description: entry.metaDescription ?? entry.summary,
    datePublished: entry.publishedAt,
    url: absoluteUrl(`/work/${entry.slug}`),
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
};

const overview: [string, string][] = [
    ["Client", "A leading US fintech provider (name withheld)"],
    ["Role", "Lead UX Architect & Strategy"],
    ["Domain", "B2B Fintech / Merchant Services"],
    ["Market", "United States"],
    ["Scope", "Multi-product platform — 5 core fintech products"],
    ["Core impact", "Onboarding compressed from 20+ business days to under 48 hours, eliminating manual data entry while targeting SOC 2, IRS, and FinCEN compliance"],
];

const products = ["Merchant Payments", "Credit Lines", "Treasury Management", "Payroll", "Expense Management"];

const legacyWorkflow = ["Sales Deal Closed", "RM Emails PDFs", "Client Fills Paper Forms & W-9s", "Client Mails / Scans Documents", "Manual Data Entry", "Manual Audits", "Account Activation"];

const painPoints: [string, string][] = [
    ["Extreme Time-to-Market Delay", "Average onboarding duration exceeded 20 business days per enterprise account."],
    ["Redundant Data Entry", "Because the five products operated in functional silos, clients purchasing more than one were forced to complete separate paper applications, resubmit duplicate W-9s, and re-enter identical corporate details each time."],
    ["Operational Overhead", "Relationship Managers and Data Entry Operators spent over 70% of their bandwidth on manual data transcription, document chasing, and paper verification."],
    ["High Customer Drop-Off", "Up to 40% of prospective clients experienced onboarding fatigue during the post-sales handoff, putting revenue already closed by sales at risk."],
];

const researchParticipants = ["CFOs", "Finance leads", "Compliance officers", "Internal data entry teams"];

const personaOverview: [string, string][] = [
    ["Role", "CFO / Head of Finance & Operations"],
    ["Mindset", "Tech-savvy, efficiency-driven; values transparency and data security"],
    ["Goals", "Activate multi-product payment and credit capabilities rapidly"],
    ["Frustrations", "Printing, physically signing, and scanning thick paper packages, with zero real-time visibility into verification status"],
];

const solutionFlow = ["Magic Link / SSO", "Product Catalog Picker", "Shared Corporate Core Data Layer", "Automated US KYB / W-9 / FinCEN UBO", "Live Status Tracker", "Active Workspace"];

const uxPrinciples: [string, string][] = [
    ["Contextual Pre-Filling", "CRM deal metadata seeds the onboarding workspace directly, so no client ever starts from a blank-slate form screen."],
    ["Progressive Disclosure", "Forms dynamically render only the fields relevant to whichever products a client actually selected from the five-product catalog, instead of one form trying to cover all five."],
    ["Inherited Identity & Tax Layer", "Corporate identity details, bank routing numbers, and W-9 tax data are collected once at the vendor level and inherited across every product subscription that vendor adds."],
    ["Automated Verification", "Integrated checks — IRS TIN matching, Secretary of State registry lookups, Plaid instant bank linking, and FinCEN CTA beneficial-ownership rules — replace manual document review loops."],
];

const journeyPhases: [string, string, string][] = [
    ["Hour 00:00–00:15", "Frictionless Access & Digital Handoff", "A personalized invitation link, triggered automatically from CRM deal closure, lands the client directly in a pre-populated company workspace via one-click magic link or corporate SSO."],
    ["Hour 00:15–01:00", "Product Catalog & Shared Data Entry", "The client selects the products they need and completes one unified corporate form, with instant W-9 generation, address lookup, and real-time IRS EIN/TIN matching on blur."],
    ["Hour 01:00–02:00", "US KYB, UBO & Smart Document Upload", "Beneficial owners are declared per Corporate Transparency Act requirements, with drag-and-drop document upload, OCR extraction, and native e-signature."],
    ["Hour 02:00–24:00", "Automated Verification & Background Processing", "A real-time status tracker shows live OFAC, PEP, and state-registry checks running in the background; anything flagged routes to an exception queue for the compliance team."],
    ["Hour 24:00–48:00", "Automated Provisioning & Go-Live", "On approval, the client generates production API keys and lands in their active product dashboards, guided by an interactive onboarding walkthrough."],
];

const wireframeSections: [string, [string, string][]][] = [
    ["Legal Business Identification", [["Legal Business Name", "Required"], ["Trade Name / DBA", "Optional"]]],
    ["IRS Tax Identification", [["Taxpayer ID Type", "EIN or SSN/ITIN"], ["Employer Identification Number", "Validated live against the IRS on submission"]]],
    ["Principal Place of Business", [["Street Address", "No P.O. boxes; auto-address lookup"]]],
    ["Primary Bank Account", [["Connect via Plaid", "Instant linking"], ["Manual entry", "Fallback if Plaid isn't available"]]],
];

const resultStats: [string, string][] = [
    ["90%", "reduction in time-to-value — from a 20+ business day legacy process to a sub-48-hour target state"],
    ["0%", "data re-entry in the target state, down from 100% duplicate paper packets — a single source of truth replaces repeated submissions"],
    ["+32%", "improvement in completion/conversion rate, attributed to the redesigned flow"],
    ["Exceptions only", "manual data processing in the target state, down from 100% manual transcription in the legacy process"],
];

const resultsTable: [string, string, string, string][] = [
    ["End-to-End SLA", "20+ Business Days", "Under 48 Hours", "90% reduction in time-to-value"],
    ["Data Re-Entry Rate", "100% (duplicate paper packets)", "0% (single source of truth)", "Complete elimination of redundant data entry"],
    ["Completion Rate", "Legacy baseline", "Redesigned flow", "+32% improvement in conversion rate"],
    ["Manual Data Processing", "100% manual transcription", "Exceptions only", "Direct operational cost reduction"],
];

const lessons = [
    "Design for compliance early: embedding complex US regulatory requirements — FinCEN UBO declarations, W-9 collection — directly into the UX fabric prevented last-minute compliance redesigns.",
    "Progressive disclosure reduces drop-off: splitting multi-product onboarding into a modular, conditional step architecture increased completion by preventing cognitive overload.",
    "Automate verification at the source: shifting from manual document inspection to instant API validation unlocked the compression of a multi-week workflow into a sub-48-hour SLA.",
];

export default function B2BFintechOnboardingCaseStudyPage() {
    return (
        <div className="service-page">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }} />
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
                            <p className="service-page__label service-page__art-caption">Conceptual illustration of the onboarding flow — not the client&apos;s actual product interface</p>
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

                <section className="service-page__section" id="challenge">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">THE CHALLENGE</p>
                                <h2>Sales Closed Deals Efficiently. Activation Didn&apos;t Keep Up.</h2>
                                <p className="service-page__index-summary">The fintech provider offered five distinct enterprise products:</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <ul className="service-page__list">
                                {products.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </Reveal>
                        <Reveal index={1}><p className="service-page__index-summary service-page__index-summary--spaced">While sales closed deals efficiently, the transition from a signed agreement to an active, provisioned account suffered from severe friction. The legacy process took over 20 business days:</p></Reveal>
                        <Reveal index={2}>
                            <div className="service-page__flow">
                                {legacyWorkflow.map((step, index) => (
                                    <Fragment key={step}>
                                        <span className="service-page__flow-step">{step}</span>
                                        {index < legacyWorkflow.length - 1 && <ArrowUpRight aria-hidden="true" size={18} className="service-page__flow-arrow" />}
                                    </Fragment>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt" id="pain-points">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">KEY PAIN POINTS</p>
                                <h2>Where the Friction Actually Lived</h2>
                            </div>
                        </Reveal>
                        <div className="service-page__text-grid">
                            {painPoints.map(([title, description], index) => (
                                <Reveal className="service-page__text-grid-item" key={title} index={index}>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal>
                            <blockquote className="service-page__pull-quote">
                                <p>How might we eliminate operational friction, duplicate data entry, and manual processing in the B2B onboarding lifecycle, so enterprise vendors can configure, verify, and activate multiple fintech products through a unified, self-service digital experience within 48 hours?</p>
                            </blockquote>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt" id="research">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">USER RESEARCH</p>
                                <h2>Listening to Both Sides of the Handoff</h2>
                                <p className="service-page__index-summary">Research combined interviews across the people experiencing the friction directly and the teams absorbing its operational cost:</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <ul className="service-page__list">
                                {researchParticipants.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </Reveal>
                        <Reveal index={1}><p className="service-page__index-summary service-page__index-summary--spaced">That research established the primary target profile and surfaced both the external customer friction and the internal operational burden driving it.</p></Reveal>
                    </div>
                </section>

                <section className="service-page__section" id="persona">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">PERSONA</p>
                                <h2>Rajesh Sharma — CFO, Enterprise B2B Merchant</h2>
                                <p className="service-page__index-summary">A documented research persona, not a real individual, used to anchor design decisions throughout the project.</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="service-page__table-wrap">
                                <table className="service-page__table">
                                    <tbody>
                                        {personaOverview.map(([field, detail]) => <tr key={field}><th scope="row">{field}</th><td>{detail}</td></tr>)}
                                    </tbody>
                                </table>
                            </div>
                        </Reveal>
                        <Reveal index={1}>
                            <div className="service-page__boundary">
                                <p className="service-page__eyebrow">LEGACY PAIN PERSONAS (AS-IS)</p>
                                <div className="service-page__boundary-tier">
                                    <h3>CFO / Head of Finance &amp; Data Entry Operator</h3>
                                    <ul>
                                        <li>Printing and signing paper piles</li>
                                        <li>Duplicating information across five products</li>
                                        <li>Zero status visibility, leading to high drop-off</li>
                                        <li>Repetitive manual entry and error-prone audits</li>
                                    </ul>
                                </div>
                                <ArrowDown aria-hidden="true" size={20} className="service-page__boundary-arrow" />
                                <div className="service-page__boundary-tier service-page__boundary-tier--modern">
                                    <h3>B2B Client Admin &amp; Compliance / Risk Analyst</h3>
                                    <ul>
                                        <li>One portal for all products</li>
                                        <li>Instant EIN/W-9 matching</li>
                                        <li>Real-time progress tracker and e-signature convenience</li>
                                        <li>Exception-based review with automated KYB/sanctions checks</li>
                                    </ul>
                                </div>
                                <p className="service-page__eyebrow">TARGET UX PERSONAS (TO-BE)</p>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt" id="architecture">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">STRATEGIC SOLUTION ARCHITECTURE</p>
                                <h2>A Unified, Self-Service Onboarding Portal</h2>
                                <p className="service-page__index-summary">The solution was a single web-based portal anchored on Single Sign-On and a decoupled &ldquo;fill-once&rdquo; data engine, so corporate and tax data entered once flows through every product a client adds.</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="service-page__flow">
                                {solutionFlow.map((step, index) => (
                                    <Fragment key={step}>
                                        <span className="service-page__flow-step">{step}</span>
                                        {index < solutionFlow.length - 1 && <ArrowUpRight aria-hidden="true" size={18} className="service-page__flow-arrow" />}
                                    </Fragment>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section" id="ux-principles">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">CORE UX PRINCIPLES</p>
                                <h2>Four Decisions That Made the Compression Possible</h2>
                            </div>
                        </Reveal>
                        {uxPrinciples.map(([title, description], index) => (
                            <Reveal className="service-page__checklist-block" key={title} index={index}>
                                <h3>0{index + 1} — {title}</h3>
                                <p className="service-page__index-summary">{description}</p>
                            </Reveal>
                        ))}
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt" id="journey">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">TARGET-STATE USER JOURNEY</p>
                                <h2>Five Phases, One Sub-48-Hour SLA</h2>
                            </div>
                        </Reveal>
                        <div className="service-page__process">
                            {journeyPhases.map(([hour, title, description], index) => (
                                <Reveal className="service-page__process-step" key={title} index={index}>
                                    <span>{hour}</span>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="service-page__section" id="wireframe">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">DETAILED WIREFRAME</p>
                                <h2>Designing the Unified Corporate &amp; Tax Experience</h2>
                                <p className="service-page__index-summary">One representative screen from the onboarding flow — the unified corporate and tax profile step. Field values shown are illustrative sample data, not real client information.</p>
                            </div>
                        </Reveal>
                        {wireframeSections.map(([section, fields], index) => (
                            <Reveal className="service-page__checklist-block" key={section} index={index}>
                                <h3>{section}</h3>
                                <div className="service-page__table-wrap">
                                    <table className="service-page__table">
                                        <thead><tr><th>Field</th><th>Notes</th></tr></thead>
                                        <tbody>
                                            {fields.map(([field, note]) => <tr key={field}><td>{field}</td><td>{note}</td></tr>)}
                                        </tbody>
                                    </table>
                                </div>
                            </Reveal>
                        ))}
                        <Reveal index={4}><p className="service-page__index-summary service-page__index-summary--spaced">Navigation stayed simple by design: back to product selection, or save and continue to KYB/UBO — never more than one decision at a time.</p></Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt" id="results">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">BUSINESS IMPACT</p>
                                <h2>What the Redesign Measurably Changed</h2>
                            </div>
                        </Reveal>
                        <div className="service-page__deliverables">
                            {resultStats.map(([stat, description]) => (
                                <Reveal className="service-page__deliverable" key={stat}>
                                    <span>{stat}</span>
                                    <h3>{description}</h3>
                                </Reveal>
                            ))}
                        </div>
                        <Reveal index={1}>
                            <div className="service-page__table-wrap">
                                <table className="service-page__table">
                                    <thead><tr><th>Key metric</th><th>Legacy state</th><th>Target state</th><th>Measured outcome</th></tr></thead>
                                    <tbody>
                                        {resultsTable.map(([metric, legacy, target, outcome]) => (
                                            <tr key={metric}><td>{metric}</td><td>{legacy}</td><td>{target}</td><td>{outcome}</td></tr>
                                        ))}
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
                                <p className="service-page__eyebrow">KEY TAKEAWAYS</p>
                                <h2>What This Confirmed About Enterprise Onboarding</h2>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="service-page__outcomes">
                                {lessons.map((item) => <p key={item}><Check aria-hidden="true" size={18} />{item}</p>)}
                            </div>
                        </Reveal>
                        <Reveal index={1}><p className="service-page__index-summary service-page__index-summary--spaced">This is the same discipline behind our <Link className="service-page__inline-link" href="/services/ux-product-design">UX &amp; Product Design <ArrowUpRight aria-hidden="true" size={14} /></Link> and <Link className="service-page__inline-link" href="/services/ui-design-systems">UI &amp; Design Systems <ArrowUpRight aria-hidden="true" size={14} /></Link> work more broadly: research-led decisions, a shared data architecture, and compliance designed in from the start rather than retrofitted. For more on how we compress timelines without cutting review, see <Link className="service-page__inline-link" href="/insights/how-we-deliver-projects-in-weeks-not-months">How We Compress Enterprise Delivery Timelines into Weeks, Not Months <ArrowUpRight aria-hidden="true" size={14} /></Link>.</p></Reveal>
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

                <section className="service-page__cta">
                    <div className="service-page__wrap">
                        <p className="service-page__eyebrow">READY WHEN YOU ARE</p>
                        <h2>Working on something similar?</h2>
                        <p>Tell us where the work is stuck and what better looks like.</p>
                        <Link className="service-page__button" href="/contact">Book a Consultation <ArrowUpRight aria-hidden="true" size={18} /></Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
