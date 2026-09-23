import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Check, CircleArrowRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ServiceArt from "@/components/visuals/ServiceArt";
import { servicePages } from "@/components/ServicePage/serviceData";
import { absoluteUrl, buildMetadata, SITE_NAME } from "@/lib/seo";

const service = servicePages["website-design-development"];

export const metadata: Metadata = buildMetadata({
    title: `${service.title} Services`,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
});

const relatedCapabilities = [
    ["UI & Design Systems", "Scale your marketing site's visual identity into a governed, tokenized design system for your core web applications.", "/services/ui-design-systems"],
    ["Frontend & Application Development", "Extend your modern web stack into complex web apps, authenticated user portals, and decoupled dashboards.", "/services/frontend-application-development"],
    ["Strategic Technical Consultancy", "Request a comprehensive senior audit covering your existing website's Core Web Vitals, technical SEO health, and accessibility compliance.", "/services/consultancy"],
] as const;

export default function WebsiteDesignDevelopmentPage() {
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        description: service.metaDescription,
        url: absoluteUrl(`/services/${service.slug}`),
        provider: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl("/") },
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faqs.map(([question, answer]) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
        })),
    };

    return (
        <div className="service-page">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
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
                            <div className="service-page__hero-cta">
                                <Link className="service-page__button" href="/contact">Plan Your Website Build <ArrowUpRight aria-hidden="true" size={18} /></Link>
                                <Link className="service-page__inline-link" href="#deliverables">Explore Technical Capabilities <ArrowDown aria-hidden="true" size={14} /></Link>
                            </div>
                        </div>
                        <p className="service-page__summary">{service.summary}</p>
                    </div>
                    <div className="service-page__wrap">
                        <p className="service-page__index-summary">Most websites fail because they&apos;re built by committee: an external designer hands off a mockup, a developer cuts corners during code conversion, and an SEO consultant is brought in too late to fix technical architecture issues. We replace fragmented agency handoffs with a single, high-performance web delivery engine. By integrating AI-accelerated design and development pipelines, including automated responsive scaffolding, smart content structuring, and real-time Core Web Vitals optimization, we deliver production-ready web platforms 2x to 3x faster than traditional agencies. From information architecture to final commit, our senior team crafts fast, accessible, and search-optimized web platforms in weeks, not months.</p>
                    </div>
                </section>

                {/* <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal><ServiceArt variant="website" /></Reveal>
                    </div>
                </section> */}

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">COMMON TRIGGERS</p><h2>Operational Bottlenecks We Typically Solve</h2></div></Reveal>
                        <div className="service-page__situations">{service.situations.map((situation, index) => <Reveal className="service-page__situation" key={situation} index={index}><span>0{index + 1}</span><p>{situation}</p></Reveal>)}</div>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">VALUE DELIVERED</p><h2>What This Unlocks for Your Growth</h2></div></Reveal>
                        <Reveal>
                            <div className="service-page__outcomes">
                                {service.outcomes.map((outcome) => {
                                    const [label, text] = outcome.split(/:\s*/);
                                    return <p key={outcome}><Check aria-hidden="true" size={18} /><strong>{label}:</strong>&nbsp;{text}</p>;
                                })}
                            </div>
                        </Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt" id="deliverables">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">CORE DELIVERABLES</p><h2>An Integrated Website Delivery Engine from Concept to Live Deploy</h2></div></Reveal>
                        <div className="service-page__deliverables">{service.deliverables.map((deliverable, index) => { const isLast = index === service.deliverables.length - 1 && service.deliverables.length % 2 === 1; return <Reveal className={`service-page__deliverable${isLast ? " service-page__deliverable--wide" : ""}`} key={deliverable} index={index}><span>0{index + 1}</span><h3>{deliverable}</h3></Reveal>; })}</div>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">THE DELIVERY ENGINE</p><h2>High Velocity, Senior Governance: How AI Drives 2x&ndash;3x Faster Delivery</h2><p className="service-page__index-summary">{service.intro}</p></div></Reveal>
                        <div className="service-page__process">{service.process.map(([title, description], index) => <Reveal className="service-page__process-step" key={title} index={index}><span>0{index + 1}</span><h3><CircleArrowRight aria-hidden="true" size={22} />{title}</h3><p>{description}</p></Reveal>)}</div>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">FREQUENTLY ASKED QUESTIONS</p><h2>What clients usually ask first.</h2></div></Reveal>
                        <div className="service-page__faqs">{service.faqs.map(([question, answer], index) => <Reveal key={question} index={index}><details className="service-page__faq"><summary>{question}</summary><p>{answer}</p></details></Reveal>)}</div>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">NEXT STEPS & COMPLEMENTARY CAPABILITIES</p><h2>Often paired with this work.</h2></div></Reveal>
                        <div className="service-page__related">{relatedCapabilities.map(([title, description, href], index) => { const isLast = index === relatedCapabilities.length - 1 && relatedCapabilities.length % 2 === 1; return <Reveal className={isLast ? "service-page__related-card--wide" : undefined} key={title} index={index}><Link className="service-page__related-card" href={href}><h3>{title}</h3><p>{description}</p><ArrowUpRight aria-hidden="true" size={18} /></Link></Reveal>; })}</div>
                    </div>
                </section>

                <section className="service-page__cta"><div className="service-page__wrap"><p className="service-page__eyebrow">READY WHEN YOU ARE</p><h2>Let&apos;s make the next decision clearer.</h2><p>Tell us where the work feels stuck and what better looks like.</p><Link className="service-page__button" href="/contact">Book a Consultation <ArrowUpRight aria-hidden="true" size={18} /></Link></div></section>
            </main>

            <Footer />
        </div>
    );
}
