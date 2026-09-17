import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import CaseStudyArt from "@/components/visuals/CaseStudyArt";
import { caseStudies } from "@/data/caseStudies";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
    title: "Work",
    description: "Selected product, platform, and interface work from Pixel Exact: UX redesigns, MVP launches, and legacy frontend modernization.",
    path: "/work",
});

export default function WorkPage() {
    return (
        <div className="service-page service-page--index">
            <Header backHref="/" backLabel="Back home" />
            <main id="main-content">
                <section className="service-page__hero">
                    <div className="service-page__wrap service-page__hero-grid">
                        <div>
                            <p className="service-page__eyebrow">PIXEL EXACT / WORK</p>
                            <h1>Selected work.</h1>
                        </div>
                        <p className="service-page__summary">Digital products and systems built with care, from research through to a shipped, pixel-accurate interface.</p>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <div className="service-page__service-index">{caseStudies.map((entry, index) => { const isLast = index === caseStudies.length - 1 && caseStudies.length % 2 === 1; return <Reveal className={isLast ? "service-page__service-card--wide" : undefined} key={entry.slug} index={index}><Link className="work-card" href={`/work/${entry.slug}`}><CaseStudyArt variant={entry.art} /><div className="work-card__body"><span>{entry.tag}</span><h2>{entry.title}</h2><p>{entry.summary}</p><ArrowUpRight className="work-card__arrow" aria-hidden="true" size={22} /></div></Link></Reveal>; })}</div>
                        <p className="service-page__index-summary">These entries describe the kind of engagement, not a finished case study. Final client names, screenshots, and outcome data are pending.</p>
                    </div>
                </section>

                <section className="service-page__cta">
                    <div className="service-page__wrap">
                        <p className="service-page__eyebrow">READY WHEN YOU ARE</p>
                        <h2>Tell us what you&apos;re building.</h2>
                        <p>We&apos;ll tell you what it would take to design and build it, precisely, and in weeks.</p>
                        <Link className="service-page__button" href="/contact">Book a Consultation <ArrowUpRight aria-hidden="true" size={18} /></Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
