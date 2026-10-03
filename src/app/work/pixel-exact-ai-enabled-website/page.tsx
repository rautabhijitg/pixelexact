import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { servicePages } from "@/components/ServicePage/serviceData";
import CaseStudyArt from "@/components/visuals/CaseStudyArt";
import { caseStudies } from "@/data/caseStudies";
import { absoluteUrl, buildMetadata, SITE_NAME } from "@/lib/seo";

const entry = caseStudies.find((item) => item.slug === "pixel-exact-ai-enabled-website")!;
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

const faqs: [string, string][] = [
    ["Did AI design or build this site on its own?", "No. Every page, component, and piece of content was directed, reviewed, and approved by a senior practitioner. AI accelerated execution inside that process; it didn't replace the judgment behind it."],
    ["Which AI tools were used, and for what?", "ChatGPT for early strategy and structural thinking, Claude's coding agent for implementation inside the actual codebase, and Gemini for content drafting and refinement. Git tracked every change underneath all three."],
    ["Does this mean Pixel Exact can build any site this fast?", "It means this workflow compresses execution time without cutting review, accessibility, or quality checks. Actual timelines still depend on a project's scope and complexity."],
];

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
    })),
};

const overview: [string, string][] = [
    ["Client", "Pixel Exact — this website"],
    ["Platform", "Next.js marketing website (pixelexact.com)"],
    ["Discipline", "Strategy, UX/UI, frontend development, content, SEO, QA"],
    ["AI tools", "ChatGPT, Claude Code (VS Code agent), Google Gemini"],
    ["Timeline", "2026-09-16 to present — 19 tracked commits across the first 17 days"],
];

const challengePoints = [
    "Communicate seven distinct services clearly, without the site turning into an undifferentiated wall of text.",
    "Deliver senior-grade UX and UI, not a templated layout with the logo swapped in.",
    "Build a fully responsive, accessible frontend that holds up under real scrutiny, not just a demo.",
    "Get technical SEO, structured data, and AI-crawler readiness right from the start, not bolted on later.",
    "Keep the architecture maintainable enough that services, case studies, and insights could keep being added without rework.",
    "Move quickly, because a studio that sells speed has to be able to demonstrate it on its own site.",
];

const workflowStages: [string, string, string, string][] = [
    ["01", "Strategy & Structure", "ChatGPT", "Think through positioning, information architecture, and the technical approach before any code existed."],
    ["02", "Design & Development", "Claude, in VS Code", "Implement pages, components, and functionality directly in the repository — not isolated snippets to paste in by hand."],
    ["03", "Content", "Gemini, ChatGPT", "Draft and refine service, case-study, and insights copy for a senior review pass."],
    ["04", "Review & Refinement", "Senior practitioner", "Check every AI-produced change for accuracy, tone, and technical correctness before it moved forward."],
    ["05", "QA & Optimization", "Claude, in VS Code", "Run accessibility, performance, and SEO passes, and fix what those passes turn up."],
    ["06", "Launch & Iteration", "Git / GitHub", "Ship in reviewed, version-controlled increments, then keep refining against real production behavior."],
];

const toolRoles: [string, string][] = [
    ["ChatGPT", "Used early, as a thinking partner rather than a content machine: exploring how to structure the site, weighing technology and architecture options, and stress-testing ideas before anything got built. It didn't make the final call on any of them."],
    ["Claude (VS Code Agent)", "Worked directly inside this repository — creating pages and components, wiring up navigation and forms, refactoring, fixing bugs, and iterating based on review, rather than producing isolated code snippets that still needed to be integrated by hand."],
    ["Google Gemini", "Supported content production: drafting and refining service descriptions, case-study and insights copy, and supporting page content, with brand voice and accuracy decided by senior review afterward."],
    ["VS Code", "The environment all of this happened in — where AI-produced changes were read, tested, and either accepted, corrected, or rejected before moving on."],
    ["Git & GitHub", "Tracked every change as a discrete, reviewable commit. That discipline mattered more, not less, once AI could propose changes quickly — it's the control layer that makes fast iteration safe to undo."],
];

const reviewLoop = ["Human Direction", "AI Execution", "Human Review", "AI Refinement", "Testing", "Human Approval"];

const promptEvolution = ["Define objective", "Provide context", "Define constraints", "Specify expected output", "Review", "Refine prompt", "Iterate"];

const byTheNumbers: [string, string][] = [
    ["25", "page and route handlers make up the site — services, case studies, insights, legal pages, and system routes like the sitemap and llms.txt"],
    ["7", "services and 3 published case studies and insights entries each, all built and documented through the same workflow"],
    ["19", "commits across the first 17 days of development, each one reviewed before merging rather than generated and shipped in one pass"],
    ["13 of 19", "commits carry a Claude Code co-authorship trailer — the clearest first-party record of where AI touched implementation directly"],
    ["9", "named AI crawlers explicitly welcomed in robots.txt, alongside a dedicated llms.txt for AI systems that read it instead of crawling the full site"],
    ["7", "distinct schema.org structured-data types in use across the site: Organization, WebSite, BreadcrumbList, FAQPage, Service, Article, and CreativeWork"],
];

const accessibilityPoints = [
    "A sitewide skip-navigation link and a consistent, visible focus style on every interactive element, not just the ones that happened to get attention.",
    "Motion that respects a visitor's reduced-motion preference by default — scroll-reveal animations and the homepage carousel both check for it before doing anything.",
    "Semantic landmarks and heading structure on every page, with ARIA used where it adds real information (live regions, expanded/collapsed state) rather than sprinkled on by habit.",
];

const performancePoints = [
    "Fonts load through next/font with swap behavior, so text renders immediately instead of staying invisible while a web font downloads.",
    "Images go through next/image across every page that uses one, for automatic sizing and lazy loading.",
    "Case studies, insights, and service pages are statically generated at build time, not rendered fresh on every request.",
];

const lessons = [
    "AI works best inside a structured workflow, not as a one-off tool pulled out for isolated tasks — this project ran against a persistent, versioned rules document covering architecture, accessibility, SEO, and performance standards, and that context measurably shaped output quality.",
    "Better context produces better output. The difference between a prompt and a brief is the difference between a guess and a decision.",
    "Senior review doesn't slow AI-assisted work down so much as it decides what's actually worth shipping.",
    "Version control matters more, not less, once changes can be proposed quickly — it's what makes fast iteration reversible instead of risky.",
    "AI's value compounds when it's part of the whole delivery process — strategy through QA — instead of bolted onto just one stage of it.",
];

export default function AiEnabledWebsiteCaseStudyPage() {
    return (
        <div className="service-page">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
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
                            <p className="service-page__label service-page__art-caption">Conceptual illustration of the workflow — not a screenshot of any AI tool or interface</p>
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
                                <h2>More Than &ldquo;We Needed a Website.&rdquo;</h2>
                                <p className="service-page__index-summary">This site had to be a practical test of Pixel Exact&apos;s own delivery methodology, not just a brochure. That meant it had to:</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <ul className="service-page__list">
                                {challengePoints.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal>
                            <blockquote className="service-page__pull-quote">
                                <p>What if AI could compress the execution cycle without compromising senior-level design and engineering judgment?</p>
                            </blockquote>
                        </Reveal>
                        <Reveal index={1}><p className="service-page__index-summary service-page__index-summary--spaced">That question shaped every stage of this build. AI wasn&apos;t treated as a single tool reached for occasionally — it was integrated across strategy, design, development, content, and QA. Human expertise stayed the control layer throughout: deciding what to build, directing how, reviewing what came back, and approving what actually shipped.</p></Reveal>
                    </div>
                </section>

                <section className="service-page__section" id="workflow">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">THE WORKFLOW</p>
                                <h2>Six Stages, One Connected Process</h2>
                                <p className="service-page__index-summary">Each stage had a clear owner for direction, and a clear point where a senior practitioner reviewed the result before it moved forward.</p>
                            </div>
                        </Reveal>
                        <div className="service-page__process">
                            {workflowStages.map(([step, title, tool, description], index) => (
                                <Reveal className="service-page__process-step" key={step} index={index}>
                                    <span>{step}</span>
                                    <h3>{title}</h3>
                                    <p className="service-page__label">{tool}</p>
                                    <p>{description}</p>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt" id="tools">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">TOOL ROLES</p>
                                <h2>Each Tool Had One Job, Not Every Job</h2>
                                <p className="service-page__index-summary">No single tool ran the whole build. Each one was used for what it was actually good at, under the same review process.</p>
                            </div>
                        </Reveal>
                        <div className="service-page__text-grid">
                            {toolRoles.map(([title, description], index) => {
                                const isLast = index === toolRoles.length - 1 && toolRoles.length % 2 === 1;
                                return (
                                    <Reveal className={`service-page__text-grid-item${isLast ? " service-page__text-grid-item--wide" : ""}`} key={title} index={index}>
                                        <h3>{title}</h3>
                                        <p>{description}</p>
                                    </Reveal>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="service-page__section" id="review-loop">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">AI + HUMAN REVIEW LOOP</p>
                                <h2>AI Output Was a Draft, Not a Decision</h2>
                                <p className="service-page__index-summary">Nothing AI produced went live because AI produced it. It went live after this loop ran, as many times as it needed to:</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="service-page__flow">
                                {reviewLoop.map((step, index) => (
                                    <Fragment key={step}>
                                        <span className="service-page__flow-step">{step}</span>
                                        {index < reviewLoop.length - 1 && <ArrowUpRight aria-hidden="true" size={18} className="service-page__flow-arrow" />}
                                    </Fragment>
                                ))}
                            </div>
                        </Reveal>
                        <Reveal index={1}><p className="service-page__index-summary service-page__index-summary--spaced">A concrete example: when a production build started failing on the hosting platform partway through this project, the failure was diagnosed from build logs, tested against two different hypotheses, and resolved by changing the build strategy — each step tracked as its own commit and verified before the next deploy went out. That&apos;s the loop in practice, not in theory.</p></Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt" id="prompting">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">PROMPTING AS PART OF THE PROCESS</p>
                                <h2>From &ldquo;Ask AI&rdquo; to a Repeatable Method</h2>
                                <p className="service-page__index-summary">Prompting evolved from an ad hoc question into a structured step in production, governed by a persistent, versioned rules document covering architecture, accessibility, SEO, and performance standards that every AI-assisted change had to satisfy.</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="service-page__code-panel">
                                <p className="service-page__label">Before</p>
                                <pre>Ask AI → Get answer</pre>
                            </div>
                        </Reveal>
                        <Reveal index={1}>
                            <div className="service-page__flow">
                                {promptEvolution.map((step, index) => (
                                    <Fragment key={step}>
                                        <span className="service-page__flow-step">{step}</span>
                                        {index < promptEvolution.length - 1 && <ArrowUpRight aria-hidden="true" size={18} className="service-page__flow-arrow" />}
                                    </Fragment>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section" id="by-the-numbers">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">BY THE NUMBERS</p>
                                <h2>What&apos;s Actually Verifiable</h2>
                                <p className="service-page__index-summary">Every figure here comes directly from this site&apos;s own codebase and commit history — nothing projected or estimated.</p>
                            </div>
                        </Reveal>
                        <div className="service-page__deliverables">
                            {byTheNumbers.map(([stat, description], index) => (
                                <Reveal className="service-page__deliverable" key={stat} index={index}>
                                    <span>{stat}</span>
                                    <h3>{description}</h3>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">WHY FRONTEND EXPERTISE STILL MATTERS</p>
                                <h2>AI Can Write Code Fast. It Can&apos;t Decide If That Code Is Right.</h2>
                                <p className="service-page__index-summary">Accessibility and performance work don&apos;t happen automatically just because AI is involved — they happen because someone with frontend judgment checks for them. On this build, that meant:</p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <ul className="service-page__list">
                                {[...accessibilityPoints, ...performancePoints].map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section" id="seo">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">SEO, AEO &amp; AI DISCOVERABILITY</p>
                                <h2>Built to Be Read by Search Engines and AI Systems Alike</h2>
                                <p className="service-page__index-summary">Discoverability work ran alongside development rather than after it: structured data (Organization, WebSite, BreadcrumbList, FAQPage, Service, Article, and CreativeWork schema across different page types), a sitemap, a robots.txt that names major AI crawlers explicitly, and a dedicated llms.txt describing the site for AI systems that read it directly. None of this guarantees rankings or visibility — it removes the structural reasons a page would be hard to find or hard to parse.</p>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">WHAT WE LEARNED</p>
                                <h2>What This Means for Client Work</h2>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="service-page__outcomes">
                                {lessons.map((item) => <p key={item}><Check aria-hidden="true" size={18} />{item}</p>)}
                            </div>
                        </Reveal>
                        <Reveal index={1}><p className="service-page__index-summary service-page__index-summary--spaced">The point isn&apos;t that AI means anything can be built instantly. It&apos;s that the same workflow — AI acceleration, senior direction, structured review, version-controlled iteration — applies directly to client engagements where speed matters but quality, accessibility, and maintainability can&apos;t be the trade-off. That&apos;s the process behind <Link className="service-page__inline-link" href="/services/how-we-deliver">How We Deliver <ArrowUpRight aria-hidden="true" size={14} /></Link>, not a separate case made just for this site.</p></Reveal>
                    </div>
                </section>

                <section className="service-page__section" id="faqs">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">QUESTIONS WE GET</p>
                                <h2>Straight Answers</h2>
                            </div>
                        </Reveal>
                        <Reveal>
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

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal>
                            <div className="service-page__section-head">
                                <p className="service-page__eyebrow">WHERE THIS CONNECTS</p>
                                <h2>Built Using the Same Thinking We Apply to Client Work</h2>
                            </div>
                        </Reveal>
                        <Reveal>
                            <p className="service-page__index-summary">This build drew directly on <Link className="service-page__inline-link" href="/services/ui-design-systems">UI &amp; design systems <ArrowUpRight aria-hidden="true" size={14} /></Link> thinking for its component structure, <Link className="service-page__inline-link" href="/services/frontend-application-development">frontend &amp; application development <ArrowUpRight aria-hidden="true" size={14} /></Link> practice for its architecture, and the same reusable-component instincts behind our <Link className="service-page__inline-link" href="/services/design-toolkit">Design Toolkit <ArrowUpRight aria-hidden="true" size={14} /></Link>. For more on how AI fits into delivery without replacing review, see <Link className="service-page__inline-link" href="/insights/how-we-deliver-projects-in-weeks-not-months">How We Compress Enterprise Delivery Timelines into Weeks, Not Months <ArrowUpRight aria-hidden="true" size={14} /></Link>.</p>
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

                <section className="service-page__cta">
                    <div className="service-page__wrap">
                        <p className="service-page__eyebrow">READY WHEN YOU ARE</p>
                        <h2>Build Faster With an AI-Enabled Delivery Workflow</h2>
                        <p>We combine senior UX, UI, and frontend expertise with AI-assisted delivery to help teams move from idea to production faster, without cutting the review that keeps it shippable.</p>
                        <Link className="service-page__button" href="/contact">Talk to Us About Your Next Digital Product <ArrowUpRight aria-hidden="true" size={18} /></Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
