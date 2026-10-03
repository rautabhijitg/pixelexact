import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { servicePages } from "@/components/ServicePage/serviceData";
import { DashboardMock, SearchMock, TrackerMock } from "@/components/visuals/PortalMockups";
import { caseStudies } from "@/data/caseStudies";
import { absoluteUrl, buildMetadata, SITE_NAME } from "@/lib/seo";

const entry = caseStudies.find((item) => item.slug === "healthcare-self-service-portal-redesign")!;
const relatedService = servicePages[entry.relatedService];

export const metadata: Metadata = buildMetadata({
    title: entry.seoTitle ?? entry.title,
    description: entry.metaDescription ?? entry.summary,
    path: `/work/${entry.slug}`,
});

const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.title,
    description: entry.metaDescription ?? entry.summary,
    datePublished: entry.publishedAt,
    mainEntityOfPage: absoluteUrl(`/work/${entry.slug}`),
    url: absoluteUrl(`/work/${entry.slug}`),
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
};

const overview: [string, string][] = [
    ["Client", "An enterprise healthcare services provider (name withheld)"],
    ["Role", "Senior / Lead UX Designer, supported by one Junior Designer"],
    ["Scope", "Two connected products: a no-login status tracker and a full authenticated request portal"],
    ["Timeline", "90-day end-to-end build"],
    ["Tools", "Claude Code (HTML prototyping), Figma, AI-assisted ideation"],
    ["Core impact", "25% lower IVR call volume one month after launch; 300 to 500 daily tracker lookups"],
];

const baseline: [string, string][] = [
    ["1,000+", "IVR (phone line) calls per day"],
    ["20%", "of users accessed the legacy portal"],
    ["30%", "of post-pay invoices delinquent"],
];

const launchResults: [string, string][] = [
    ["−25%", "IVR call volume one month after launch"],
    ["300 → 500", "daily lookups on the new no-login tracker"],
    ["New", "online request creation, adopted by users"],
    ["Pending", "delinquency impact, awaiting a full billing cycle of data"],
];

const legacyProblems: [string, string][] = [
    ["No status visibility", "Users could not see request status, expected delivery, or issues, so they called the IVR instead. Rising call volume meant the business kept funding more IVR capacity, an operating cost created directly by the UX gap."],
    ["No aggregate view", "Requests were looked up one at a time by request number. There was no way to see all of “my” or “my team’s” requests together."],
    ["No self-service intake", "New requests could not be created online, which pushed volume into manual and offline channels."],
    ["No payment visibility", "Payment was due after delivery with no way to see pending balances, so the business chased clients with repeated reminders."],
    ["High-friction tracking", "Even logged-in users could only search by request ID, despite holding other identifying details that could have supported a lookup."],
];

const insights: [string, string][] = [
    ["Callers wanted one answer", "Most callers wanted status and an estimated delivery date, not the full complexity of a redesigned portal."],
    ["Enterprise teams needed team-level views", "The client base skews enterprise (payers, hospitals, legal teams). They needed every request and payment across their organization, not just their own."],
    ["Three access tiers", "Needs split cleanly into View-only, Normal (view, cancel, pay), and Admin (full access plus user and payment management), mirroring how enterprise clients structure their own teams."],
    ["One root cause for delinquency", "Payment delinquency traced back to no upfront visibility into pending post-pay balances."],
    ["Jargon was a barrier", "The legacy UI leaned on internal, technical language that non-technical requesters could not use."],
];

const complexity = ["Pre-pay and post-pay models", "Mail, email, FTP, and fax delivery", "Variable SLAs", "Health-data security and authentication", "Multi-patient request forms", "Outreach calls"];

const solutions: [string, string][] = [
    ["Login", "Leads with the trust signals the legacy portal never surfaced: HIPAA-compliant security, real-time tracking, and 24/7 access."],
    ["Dashboard", "A request status summary gives one view across the whole request volume (pending fulfillment, deficient, pending payment, cancelled, finalizing, delivered), plus a balance-due widget on landing."],
    ["Find request", "A full filter set replaces request-ID-only search. Results support bulk pay, download, and cancel."],
    ["Request details", "A clear tracking timeline with estimated completion, shipment tracking, and inline payment on one screen instead of a phone call."],
    ["No-login tracker", "A standalone lookup by request ID, company ID, or patient details, the direct product of the discovery-stage reframe."],
    ["Log a request", "A guided online intake form with a live preview panel, replacing what used to require an offline process entirely."],
    ["Reports and history", "Transaction history, itemized invoice details, status reports, and download records turn invisible backend states into self-service information."],
    ["User management", "Admins manage portal users and authorized users directly, the concrete implementation of the View-only, Normal, and Admin tiers."],
];

const searchFields = ["Patient name", "Date of birth", "Reference ID", "Tracking code", "Request ID", "Status", "Date range"];

const feedbackThemes = [
    "Direct positive feedback on pending-payment visibility and transaction history, confirming that the payment-transparency decisions solved a real, felt problem.",
    "Users reported they could sort and find the right requests far more easily, a direct outcome of the multi-field Find Request redesign.",
    "End users specifically called out and appreciated the new color palette after launch.",
];

const resultsTable: [string, string, string][] = [
    ["IVR call volume", "1,000+ / day", "−25%"],
    ["Daily tracker usage", "Didn’t exist", "300 → 500 / day"],
    ["Online request creation", "Not available", "Adopted by users"],
    ["Post-pay delinquency", "30%", "Pending a full billing cycle"],
];

const openItems: [string, string][] = [
    ["Pending", "Delinquency data, awaiting a full billing cycle. This open loop will inform whether billing options need adjusting."],
    ["Open", "Mobile support is currently down to 768px, with a goal of 400px."],
    ["Planned", "Real-time notifications for followed requests."],
    ["Watch", "Navigation growth (4 to 6 items) should be revisited before it creeps further."],
];

export default function HealthcarePortalCaseStudyPage() {
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
                            <div className="service-page__deliverables">
                                {launchResults.map(([stat, description]) => (
                                    <div className="service-page__deliverable" key={stat}>
                                        <span>{stat}</span>
                                        <h3>{description}</h3>
                                    </div>
                                ))}
                            </div>
                            <p className="service-page__label service-page__art-caption">One month after launch</p>
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

                <section className="service-page__section" id="context">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">CONTEXT &amp; BUSINESS PROBLEM</p>
                                <h2>A Visibility Gap Pushed Users Off Self-Service and Onto the Phone</h2>
                                <p className="service-page__index-summary">The legacy portal had fallen critically short, not through one broken feature but through a systemic lack of visibility. Users who could not see where their request stood called instead.</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="service-page__deliverables">
                                {baseline.map(([stat, description]) => (
                                    <div className="service-page__deliverable" key={stat}>
                                        <span>{stat}</span>
                                        <h3>{description}</h3>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt" id="legacy">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">THE LEGACY EXPERIENCE</p>
                                <h2>Five Problems, One Outcome: Users Left the Portal</h2>
                            </div>
                        </Reveal>
                        <div className="service-page__text-grid">
                            {legacyProblems.map(([title, description], index) => (
                                <Reveal className="service-page__text-grid-item" key={title} index={index}>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </Reveal>
                            ))}
                        </div>
                        <Reveal index={1}><p className="service-page__index-summary service-page__index-summary--spaced">Cumulatively, this drove users away from the portal and back to phone support, the opposite of what a self-service platform should do and a direct cost driver for the business.</p></Reveal>
                    </div>
                </section>

                <section className="service-page__section" id="role">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">ROLE &amp; SCOPE</p>
                                <h2>Senior-Level Ownership, Directly Accountable to Stakeholders</h2>
                                <p className="service-page__index-summary">The Senior / Lead UX Designer owned UX strategy and design direction across both products, with a Junior Designer supporting screen production. Design decisions were presented directly to business stakeholders and Product Owners, with no intermediary layer between them and the people funding the work. A core part of the scope was introducing AI-assisted workflows into the design process itself.</p>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt" id="research">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">DISCOVERY &amp; RESEARCH</p>
                                <h2>The Support Team Was the Voice of the User</h2>
                                <p className="service-page__index-summary">Research combined support ticket analysis, IVR call-log analysis, and interviews with the IVR support team, using the people fielding the pain daily as a proxy for the end-user voice.</p>
                            </div>
                        </Reveal>
                        <div className="service-page__text-grid">
                            {insights.map(([title, description], index) => (
                                <Reveal className="service-page__text-grid-item" key={title} index={index}>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="service-page__section" id="strategy">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">UX STRATEGY: THE REFRAME</p>
                                <h2>Split One Portal Into Two Focused Products</h2>
                            </div>
                        </Reveal>
                        <Reveal>
                            <blockquote className="service-page__pull-quote">
                                <p>Most callers just wanted a fast status check, so the fastest path should not require a login at all.</p>
                            </blockquote>
                        </Reveal>
                        <Reveal index={1}><p className="service-page__index-summary service-page__index-summary--spaced">The original ask was one redesigned portal. Instead, the design lead proposed a lightweight, no-login tracker for quick lookups and a full authenticated portal for account holders managing requests, teams, and payments. Stakeholders were not initially convinced a separate site was worth building. It took three to four rounds of meetings, backed by IVR and ticket data plus a working prototype demoed live, to move from &ldquo;not ready&rdquo; to full buy-in.</p></Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt" id="status-tracker">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">THE NO-LOGIN STATUS TRACKER</p>
                                <h2>Answering the Most Common Call Without a Call</h2>
                                <p className="service-page__index-summary">A standalone tracker lets anyone look up a request by request ID, company ID, or patient details, with no account. A request moves through the same Submitted, In Progress, Complete timeline as the full portal, with estimated completion and balance due visible. After launch the tracker reached 300 to 500 lookups per day.</p>
                            </div>
                        </Reveal>
                        <Reveal><div className="portal-mock-grid"><TrackerMock /></div></Reveal>
                    </div>
                </section>

                <section className="service-page__section" id="request-portal">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">THE AUTHENTICATED REQUEST PORTAL</p>
                                <h2>One Place to Create, Manage, and Pay for Requests</h2>
                                <p className="service-page__index-summary">For account holders, the redesigned portal centralizes request management: an aggregate dashboard, search, status, online request creation, payment information, and transaction history.</p>
                            </div>
                        </Reveal>
                        <Reveal><div className="portal-mock-grid"><DashboardMock /></div></Reveal>
                        <div className="service-page__text-grid service-page__index-summary--spaced">
                            {solutions.map(([title, description], index) => (
                                <Reveal className="service-page__text-grid-item" key={title} index={index}>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt" id="find-request">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">FIND REQUEST</p>
                                <h2>From Request-ID-Only Search to Multi-Field Filtering</h2>
                                <p className="service-page__index-summary">Discovery showed users held other identifying details but had no way to use them. The redesign supports lookup by any of the following, and results support bulk pay, download, and cancel for team-level work.</p>
                            </div>
                        </Reveal>
                        <Reveal><ul className="service-page__list">{searchFields.map((item) => <li key={item}>{item}</li>)}</ul></Reveal>
                        <Reveal index={1}><div className="portal-mock-grid"><SearchMock /></div></Reveal>
                    </div>
                </section>

                <section className="service-page__section" id="payments">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">PAYMENT TRANSPARENCY</p>
                                <h2>Show the Balance Before It Becomes a Collections Problem</h2>
                                <p className="service-page__index-summary">Post-pay delinquency traced to a single root cause: no upfront visibility into pending balances. The design surfaces a balance-due widget on landing, pending-payment status across requests, inline payment on request details, itemized invoices, and a transaction history. Users gave direct positive feedback on pending-payment visibility and transaction history. Whether delinquency itself improved is still open: that result awaits a full billing cycle of data.</p>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt" id="process">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">DESIGN PROCESS &amp; KEY DECISIONS</p>
                                <h2>Hiding Complexity Behind a Simple Interface</h2>
                                <p className="service-page__index-summary">Each request carried layers of business logic that had to be reconciled into one simple interface:</p>
                            </div>
                        </Reveal>
                        <Reveal><ul className="service-page__list">{complexity.map((item) => <li key={item}>{item}</li>)}</ul></Reveal>
                        <div className="service-page__process service-page__index-summary--spaced">
                            <Reveal className="service-page__process-step">
                                <span>NAVIGATION</span>
                                <h3>8 items to 4 pages</h3>
                                <p>Navigation was consolidated from 8 legacy items to four major pages at launch: Home, Find Request, Download Records, and Action Required. Reports, Transaction History, and a dedicated Payment view were added after launch, based on real usage rather than upfront guesses. The IA was built to scale, not to lock in.</p>
                            </Reveal>
                            <Reveal className="service-page__process-step" index={1}>
                                <span>BRAND</span>
                                <h3>A deliberate departure</h3>
                                <p>The team used a different color theme from the organization&apos;s existing product guidelines. It was a deliberate risk that paid off: end users called out the new palette after launch.</p>
                            </Reveal>
                            <Reveal className="service-page__process-step" index={2}>
                                <span>VALIDATION</span>
                                <h3>Prototype before Figma</h3>
                                <p>Before committing to Figma, a working HTML prototype of the tracker was demoed live to stakeholders, turning an abstract pitch into something tangible and de-risking the decision to split the products.</p>
                            </Reveal>
                        </div>
                    </div>
                </section>

                <section className="service-page__section" id="ai-workflow">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">AI-ASSISTED WORKFLOW</p>
                                <h2>Feedback Cycles Cut From 8&ndash;12 Days to 2&ndash;3</h2>
                                <p className="service-page__index-summary">The 90-day build ran as part of a broader AI-readiness initiative. Wireframes were built directly in HTML with Claude Code instead of static mockups, and AI tools generated multiple design variations quickly. Combined with tight feedback sessions with stakeholders, Product Owners, and customer support, stakeholder feedback turnaround dropped from 8&ndash;12 days to 2&ndash;3 days per cycle. The gain came from a deliberate process change, not from AI alone: senior judgment still decided what to keep, and what to scrap.</p>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt" id="results">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">OUTCOMES &amp; IMPACT</p>
                                <h2>One Month After Launch, the Hypothesis Held</h2>
                                <p className="service-page__index-summary">Results measured against the baseline metrics from the context section.</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="service-page__table-wrap">
                                <table className="service-page__table">
                                    <caption className="sr-only">Before and after metrics</caption>
                                    <thead><tr><th scope="col">Metric</th><th scope="col">Before</th><th scope="col">After</th></tr></thead>
                                    <tbody>
                                        {resultsTable.map(([metric, before, after]) => <tr key={metric}><th scope="row">{metric}</th><td>{before}</td><td>{after}</td></tr>)}
                                    </tbody>
                                </table>
                            </div>
                        </Reveal>
                        <Reveal index={1}>
                            <div className="service-page__outcomes service-page__index-summary--spaced">
                                <p className="service-page__label">Documented user feedback</p>
                                {feedbackThemes.map((item) => <p key={item}><Check aria-hidden="true" size={18} />{item}</p>)}
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section" id="reflection">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">REFLECTION</p>
                                <h2>Faster Decisions, Stronger Evidence</h2>
                                <p className="service-page__index-summary">This project ran at a noticeably faster pace than prior work. It meant prototyping in Claude Code, connecting Figma to AI agents via MCP, running rapid feedback sessions that forced faster decisions, and getting comfortable scrapping ideas early instead of over-investing. It also reinforced a leadership habit: making the case for a scope change with data rather than opinion, and holding that position through multiple stakeholder rounds until the evidence carried the argument.</p>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt" id="open-items">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">STILL OPEN</p>
                                <h2>What Isn&apos;t Finished Yet</h2>
                            </div>
                        </Reveal>
                        <div className="service-page__text-grid">
                            {openItems.map(([status, description], index) => (
                                <Reveal className="service-page__text-grid-item" key={description} index={index}>
                                    <h3>{status}</h3>
                                    <p>{description}</p>
                                </Reveal>
                            ))}
                        </div>
                        <Reveal index={1}><p className="service-page__index-summary service-page__index-summary--spaced">Screens on this page are illustrative reconstructions with fictional sample data. This is the same discipline behind our <Link className="service-page__inline-link" href="/services/ux-product-design">UX &amp; Product Design <ArrowUpRight aria-hidden="true" size={14} /></Link>, <Link className="service-page__inline-link" href="/services/consultancy">Consultancy <ArrowUpRight aria-hidden="true" size={14} /></Link>, and <Link className="service-page__inline-link" href="/services/legacy-application-modernization">Legacy Application Modernization <ArrowUpRight aria-hidden="true" size={14} /></Link> work.</p></Reveal>
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
