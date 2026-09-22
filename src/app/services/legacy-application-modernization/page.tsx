import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, CircleArrowRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ServiceArt from "@/components/visuals/ServiceArt";
import { servicePages } from "@/components/ServicePage/serviceData";
import { absoluteUrl, buildMetadata, SITE_NAME } from "@/lib/seo";

const service = servicePages["legacy-application-modernization"];

export const metadata: Metadata = buildMetadata({
    title: `${service.title} Services`,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
});

const whatsIncluded: [string, string][] = [
    ["Presentation-layer overhaul, zero functional risk", "We rebuild the UI layer end-to-end without touching your business logic or backend systems, so what works today keeps working."],
    ["Parallel rollout, zero downtime", "A parallel styling system runs your old and new UI side by side, with full backward compatibility and no breaking changes to existing HTML or CSS."],
    ["A complete, modern design system", "A clean, minimal visual language, a softer palette, stronger hierarchy, and consistent components, applied across every screen without disrupting the workflows your teams already know."],
    ["Scalable, maintainable frontend architecture", "A structured styling architecture, global styles, shared utilities, component styles, and page-level layouts, that reduces technical debt and sets your frontend up for the long term."],
    ["Controlled, incremental migration", "A clear naming and component convention separates modernized UI from legacy code, so you can upgrade screen by screen, with isolated testing and controlled rollout, on your timeline."],
];

const whyItWorks: [string, string][] = [
    ["Avoid high-risk redevelopment", "Get a fully modernized UI without the operational and financial risk of rewriting your application."],
    ["Improve productivity and user experience", "Cleaner layouts and stronger visual hierarchy reduce cognitive load and help users complete tasks faster."],
    ["Win leadership buy-in fast", "A working demonstration proves UI modernization can happen independently of functionality, building executive confidence before full rollout."],
    ["A brand-new application, same reliable core", "Users experience what feels like an entirely new product, while the proven system underneath stays exactly as it was."],
    ["A future-ready UI foundation", "Your new presentation layer evolves on its own from here, supporting faster feature delivery, easier maintenance, and long-term scalability."],
];

const related = ["frontend-application-development", "consultancy"]
    .map((slug) => servicePages[slug])
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

export default function LegacyApplicationModernizationPage() {
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        description: service.metaDescription,
        url: absoluteUrl(`/services/${service.slug}`),
        provider: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl("/") },
    };

    return (
        <div className="service-page">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <Header backHref="/services" backLabel="All services" />

            <Breadcrumb items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: service.title, path: `/services/${service.slug}` }]} />

            <main id="main-content">
                <section className={`service-page__hero${service.heroImage ? " service-page__hero--photo" : ""}`}>
                    {service.heroImage && (
                        <div className="service-page__hero-media" aria-hidden="true">
                            <Image src={service.heroImage} alt="" fill priority sizes="100vw" className="service-page__hero-image" />
                            <div className="service-page__hero-scrim" />
                        </div>
                    )}
                    <div className="service-page__wrap service-page__hero-grid">
                        <div>
                            <p className="service-page__eyebrow">{service.eyebrow}</p>
                            <h1>{service.title}</h1>
                            <Link className="service-page__button" href="/contact">Talk to Us About Your Legacy Application <ArrowUpRight aria-hidden="true" size={18} /></Link>
                        </div>
                        <p className="service-page__summary">A modern experience for your legacy application, without redevelopment.</p>
                    </div>
                    <div className="service-page__wrap">
                        <p className="service-page__index-summary">We help enterprises transform outdated, hard-to-love applications into modern, on-brand experiences, without rewriting a single line of backend logic.</p>
                    </div>
                </section>

                {/* <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal><ServiceArt variant="modernization" /></Reveal>
                    </div>
                </section> */}

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">THE PROBLEM</p><h2>The problem with &ldquo;modernization.&rdquo;</h2><p className="service-page__index-summary">Most enterprise teams face the same dilemma: the application still works, but it looks and feels dated, inconsistent styling, cluttered layouts, and a UI that no longer matches where the brand is headed. The instinctive answer is a full rebuild. For most organizations, the risk-reward equation doesn&apos;t add up, which is exactly why the application never gets modernized, even when everyone agrees it should.</p></div></Reveal>
                        <div className="service-page__situations">
                            <Reveal className="service-page__situation" index={0}><span>01</span><p>High risk in rewriting deeply integrated, business-critical systems.</p></Reveal>
                            <Reveal className="service-page__situation" index={1}><span>02</span><p>Significant time and cost to rebuild the application from the ground up.</p></Reveal>
                            <Reveal className="service-page__situation service-page__situation--wide" index={2}><span>03</span><p>Real disruption to the workflows, dependencies, and operations your business runs on.</p></Reveal>
                        </div>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap service-page__intro-grid">
                        <Reveal><div className="service-page__section-head">
                            <p className="service-page__eyebrow">OUR SOLUTION</p>
                            <h2>Presentation-layer modernization.</h2>
                            <p className="service-page__index-summary">{service.intro}</p>
                            <p className="service-page__intro">The result: a new look and feel, delivered at a fraction of the cost, time, and risk of full redevelopment.</p>
                        </div></Reveal>
                        <Reveal index={1}>
                            <div>
                                <ServiceArt variant="modernization" />
                            </div></Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">WHAT&apos;S INCLUDED</p><h2>Five ways we modernize the interface.</h2></div></Reveal>
                        <div className="service-page__text-grid">{whatsIncluded.map(([title, text], index) => { const isLast = index === whatsIncluded.length - 1 && whatsIncluded.length % 2 === 1; return <Reveal className={`service-page__text-grid-item${isLast ? " service-page__text-grid-item--wide" : ""}`} key={title} index={index}><h3>{title}</h3><p>{text}</p></Reveal>; })}</div>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">HOW WE WORK</p><h2>A four-step path from audit to hand-off.</h2></div></Reveal>
                        <div className="service-page__process service-page__process--four">{service.process.map(([title, description], index) => <Reveal className="service-page__process-step" key={title} index={index}><span>0{index + 1}</span><h3><CircleArrowRight aria-hidden="true" size={22} />{title}</h3><p>{description}</p></Reveal>)}</div>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap service-page__intro-grid">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">TECHNOLOGIES WE USE</p><h2>A presentation-layer-only approach.</h2></div></Reveal>
                        <Reveal index={1}>
                            <div className="service-page__outcomes">
                                <p className="service-page__label">What this involves</p>
                                <p><Check aria-hidden="true" size={18} />Presentation-layer styling architecture, SCSS-based</p>
                                <p><Check aria-hidden="true" size={18} />Modular design systems: global, shared, and component-scoped styles</p>
                                <p><Check aria-hidden="true" size={18} />Legacy-compatible HTML and CSS enhancement strategies</p>
                                <p><Check aria-hidden="true" size={18} />No backend or framework migration required</p>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">WHY IT WORKS</p><h2>Built to de-risk modernization.</h2></div></Reveal>
                        <div className="service-page__text-grid">{whyItWorks.map(([title, text], index) => { const isLast = index === whyItWorks.length - 1 && whyItWorks.length % 2 === 1; return <Reveal className={`service-page__text-grid-item${isLast ? " service-page__text-grid-item--wide" : ""}`} key={title} index={index}><h3>{title}</h3><p>{text}</p></Reveal>; })}</div>
                    </div>
                </section>

                {related.length > 0 && (
                    <section className="service-page__section service-page__section--alt">
                        <div className="service-page__wrap">
                            <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">RELATED SERVICES</p><h2>Often paired with this work.</h2></div></Reveal>
                            <div className="service-page__related">{related.map((entry, index) => <Reveal key={entry.slug} index={index}><Link className="service-page__related-card" href={`/services/${entry.slug}`}><h3>{entry.title}</h3><p>{entry.summary}</p><ArrowUpRight aria-hidden="true" size={18} /></Link></Reveal>)}</div>
                        </div>
                    </section>
                )}

                <section className="service-page__cta">
                    <div className="service-page__wrap">
                        <p className="service-page__eyebrow">READY WHEN YOU ARE</p>
                        <h2>Ready to modernize without the risk?</h2>
                        <p>If your application works but no longer looks or feels the part, we can show you what&apos;s possible, without asking you to rebuild anything.</p>
                        <Link className="service-page__button" href="/contact">Talk to Us About Your Legacy Application <ArrowUpRight aria-hidden="true" size={18} /></Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
