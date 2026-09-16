import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { servicePages } from "@/components/ServicePage/serviceData";
import { caseStudies } from "@/data/caseStudies";
import { buildMetadata } from "@/lib/seo";

type CaseStudyPageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return caseStudies.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
    const { slug } = await params;
    const entry = caseStudies.find((item) => item.slug === slug);

    if (!entry) {
        return buildMetadata({ title: "Work", description: "Selected work from Pixel Exact.", path: "/work", noIndex: true });
    }

    return buildMetadata({
        title: entry.title,
        description: entry.summary,
        path: `/work/${entry.slug}`,
    });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
    const { slug } = await params;
    const entry = caseStudies.find((item) => item.slug === slug);

    if (!entry) {
        notFound();
    }

    const relatedService = servicePages[entry.relatedService];

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

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <div className="service-page__section-head"><p className="service-page__eyebrow">THE APPROACH</p><h2>What this kind of engagement typically includes.</h2></div>
                        <div className="service-page__outcomes">{entry.focus.map((item) => <p key={item}><Check aria-hidden="true" size={18} />{item}</p>)}</div>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap service-page__intro-grid">
                        <p className="service-page__intro">This entry describes the kind of engagement, not a finished case study. Full write-up, screenshots, and outcome data for this project are pending and will replace this notice once confirmed.</p>
                        {relatedService && (
                            <div className="service-page__outcomes">
                                <p className="service-page__label">Related service</p>
                                <p><Link className="service-page__inline-link" href={`/services/${relatedService.slug}`}>{relatedService.title} <ArrowUpRight aria-hidden="true" size={14} /></Link></p>
                            </div>
                        )}
                    </div>
                </section>

                <section className="service-page__cta"><div className="service-page__wrap"><p className="service-page__eyebrow">READY WHEN YOU ARE</p><h2>Working on something similar?</h2><p>Tell us where the work is stuck and what better looks like.</p><Link className="service-page__button" href="/contact">Book a Consultation <ArrowUpRight aria-hidden="true" size={18} /></Link></div></section>
            </main>
            <Footer />
        </div>
    );
}
