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

const service = servicePages["ui-design-systems"];

export const metadata: Metadata = buildMetadata({
    title: `${service.title} Services`,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
});

const relatedCapabilities = [
    ["UX & Product Design", "Uncover user friction, structure intuitive workflows, and validate product direction before standardizing interface components.", "/services/ux-product-design"],
    ["Frontend & Application Development", "Transform your design tokens and Figma components into production-grade, accessible code through decoupled frontend architecture.", "/services/frontend-application-development"],
    ["Website Design & Development", "Deploy high-converting, blazing-fast marketing platforms powered by the exact same design system tokens as your product.", "/services/website-design-development"],
    ["Design Toolkit (40+ Components)", "Accelerate time-to-market immediately by adopting our battle-tested, pre-built component suite built for immediate styling and deployment.", "/services/design-toolkit"],
] as const;

export default function UiDesignSystemsPage() {
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
                                <Link className="service-page__button" href="/contact">Book a Design System Consultation <ArrowUpRight aria-hidden="true" size={18} /></Link>
                                <Link className="service-page__inline-link" href="#deliverables">Explore System Deliverables <ArrowDown aria-hidden="true" size={14} /></Link>
                            </div>
                        </div>
                        <p className="service-page__summary">{service.summary}</p>
                    </div>
                    <div className="service-page__wrap">
                        <p className="service-page__index-summary">As digital products grow, interfaces often fracture into inconsistent patterns, duplicated components, and mounting technical debt. We design elegant, high-performance user interfaces and engineer the governed systems behind them, ensuring every new screen is production-ready, brand-aligned, and consistent from day one. By pairing AI-accelerated tokenization, automated accessibility linting, and systematic component architecture with 40+ years of collective design and frontend experience, we help teams ship unified digital products in weeks instead of quarters.</p>
                    </div>
                </section>

                {/* <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal><ServiceArt variant="ui" /></Reveal>
                    </div>
                </section> */}

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">COMMON TRIGGERS</p><h2>Operational Bottlenecks We Typically Step In to Solve</h2></div></Reveal>
                        <div className="service-page__situations">{service.situations.map((situation, index) => <Reveal className="service-page__situation" key={situation} index={index}><span>0{index + 1}</span><p>{situation}</p></Reveal>)}</div>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">VALUE DELIVERED</p><h2>What This Unlocks for Your Organization</h2></div></Reveal>
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
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">DELIVERABLES & SCOPE</p><h2>Enterprise-Grade System Deliverables Built for Real-World Code</h2></div></Reveal>
                        <div className="service-page__deliverables">{service.deliverables.map((deliverable, index) => { const isLast = index === service.deliverables.length - 1 && service.deliverables.length % 2 === 1; return <Reveal className={`service-page__deliverable${isLast ? " service-page__deliverable--wide" : ""}`} key={deliverable} index={index}><span>0{index + 1}</span><h3>{deliverable}</h3></Reveal>; })}</div>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">THE DELIVERY ENGINE</p><h2>High Velocity, Senior Governance: How AI Accelerates Our Systems Delivery</h2><p className="service-page__index-summary">{service.intro}</p></div></Reveal>
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
                        <div className="service-page__related">{relatedCapabilities.map(([title, description, href], index) => <Reveal key={title} index={index}><Link className="service-page__related-card" href={href}><h3>{title}</h3><p>{description}</p><ArrowUpRight aria-hidden="true" size={18} /></Link></Reveal>)}</div>
                    </div>
                </section>

                <section className="service-page__cta"><div className="service-page__wrap"><p className="service-page__eyebrow">READY WHEN YOU ARE</p><h2>Let&apos;s make the next decision clearer.</h2><p>Tell us where the work feels stuck and what better looks like.</p><Link className="service-page__button" href="/contact">Book a Consultation <ArrowUpRight aria-hidden="true" size={18} /></Link></div></section>
            </main>

            <Footer />
        </div>
    );
}
