import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, CircleArrowRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ServiceArt from "@/components/visuals/ServiceArt";
import ToolkitGalleryArt, { type ToolkitGalleryVariant } from "@/components/visuals/ToolkitGalleryArt";
import { servicePages } from "@/components/ServicePage/serviceData";
import { absoluteUrl, buildMetadata, SITE_NAME } from "@/lib/seo";

const service = servicePages["design-toolkit"];

export const metadata: Metadata = buildMetadata({
    title: service.title,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
});

const gallery: [ToolkitGalleryVariant, string, string][] = [
    ["overview", "Component library overview", "Header, sidebar, breadcrumb, mega menu, and tab navigation, all from the same token set."],
    ["forms", "Form elements", "Text, dropdown, date picker, checkbox, radio, and file upload, with default, focused, and error states built in."],
    ["data-grid", "Data grid", "Sortable, filterable tables with search, export, and pagination out of the box."],
    ["dialogs", "Dialogs & feedback", "Modals, confirmations, alerts, and notification panels for every user-facing decision point."],
    ["utilities", "Utility patterns", "Timelines, calendars, progress bars, steppers, and loading states."],
    ["dashboard", "Dashboard, assembled", "A real product screen built entirely from the library, KPI cards, charts, and activity feed."],
    ["responsive-nav", "Responsive navigation", "The same navigation collapses cleanly from full sidebar to icon rail to mobile drawer."],
    ["sign-in", "Sign-in flow", "Authentication screens with social sign-on, validation, and error handling included."],
];

const stack: [string, string][] = [
    ["Frameworks", "React and Next.js, Angular, Vue.js, and Java (Spring/JSP) are all supported, no re-platforming required to adopt the library."],
    ["Styling", "Scalable, BEM-driven SCSS that layers over your existing CSS framework, Bootstrap, Material UI, or Ant Design, without conflict."],
    ["Design handoff", "Figma-ready tokens for pixel-accurate mapping from design to code."],
];

export default function DesignToolkitPage() {
    const related = service.relatedServices
        .map((slug) => servicePages[slug])
        .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

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
                        </div>
                        <p className="service-page__summary">{service.summary}</p>
                    </div>
                </section>

                {service.art && (
                    <section className="service-page__section">
                        <div className="service-page__wrap">
                            <Reveal><ServiceArt variant={service.art} /></Reveal>
                        </div>
                    </section>
                )}

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">IS THIS YOU?</p><h2>Situations we typically step into.</h2></div></Reveal>
                        <div className="service-page__situations">{service.situations.map((situation, index) => <Reveal className="service-page__situation" key={situation} index={index}><span>0{index + 1}</span><p>{situation}</p></Reveal>)}</div>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap service-page__intro-grid">
                        <Reveal><p className="service-page__intro">{service.intro}</p></Reveal>
                        <Reveal index={1}><div className="service-page__outcomes"><p className="service-page__label">What this unlocks</p>{service.outcomes.map((outcome) => <p key={outcome}><Check aria-hidden="true" size={18} />{outcome}</p>)}</div></Reveal>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">THE WORK</p><h2>Built for the details that matter.</h2></div></Reveal>
                        <div className="service-page__deliverables">{service.deliverables.map((deliverable, index) => <Reveal className="service-page__deliverable" key={deliverable} index={index}><span>0{index + 1}</span><h3>{deliverable}</h3></Reveal>)}</div>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">SEE IT IN ACTION</p><h2>A proof gallery, not a slide deck.</h2><p className="service-page__index-summary">Conceptual previews of what the library covers. Not real product screenshots, there&apos;s no separate demo product to capture, but the same interface language used across every deliverable.</p></div></Reveal>
                        <div className="service-page__gallery">{gallery.map(([variant, title, description], index) => <Reveal className="service-page__gallery-item" key={variant} index={index}><ToolkitGalleryArt variant={variant} /><h3>{title}</h3><p>{description}</p></Reveal>)}</div>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">BUILT FOR YOUR STACK</p><h2>Production-ready, not just a slogan.</h2></div></Reveal>
                        <div className="service-page__text-grid">{stack.map(([title, text], index) => { const isLast = index === stack.length - 1 && stack.length % 2 === 1; return <Reveal className={`service-page__text-grid-item${isLast ? " service-page__text-grid-item--wide" : ""}`} key={title} index={index}><h3>{title}</h3><p>{text}</p></Reveal>; })}</div>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">OUR APPROACH</p><h2>Clear at every turn.</h2></div></Reveal>
                        <div className="service-page__process">{service.process.map(([title, description], index) => <Reveal className="service-page__process-step" key={title} index={index}><span>0{index + 1}</span><h3><CircleArrowRight aria-hidden="true" size={22} />{title}</h3><p>{description}</p></Reveal>)}</div>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">COMMON QUESTIONS</p><h2>What clients usually ask first.</h2></div></Reveal>
                        <div className="service-page__faqs">{service.faqs.map(([question, answer], index) => <Reveal key={question} index={index}><details className="service-page__faq"><summary>{question}</summary><p>{answer}</p></details></Reveal>)}</div>
                    </div>
                </section>

                {related.length > 0 && (
                    <section className="service-page__section">
                        <div className="service-page__wrap">
                            <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">RELATED SERVICES</p><h2>Often paired with this work.</h2></div></Reveal>
                            <div className="service-page__related">{related.map((entry, index) => { const isLast = index === related.length - 1 && related.length % 2 === 1; return <Reveal className={isLast ? "service-page__related-card--wide" : undefined} key={entry.slug} index={index}><Link className="service-page__related-card" href={`/services/${entry.slug}`}><h3>{entry.title}</h3><p>{entry.summary}</p><ArrowUpRight aria-hidden="true" size={18} /></Link></Reveal>; })}</div>
                        </div>
                    </section>
                )}

                <section className="service-page__cta"><div className="service-page__wrap"><p className="service-page__eyebrow">READY WHEN YOU ARE</p><h2>Let&apos;s make the next decision clearer.</h2><p>Tell us where the work feels stuck and what better looks like.</p><Link className="service-page__button" href="/contact">Book a Consultation <ArrowUpRight aria-hidden="true" size={18} /></Link></div></section>
            </main>

            <Footer />
        </div>
    );
}
