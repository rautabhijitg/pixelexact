import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import TopicIcon from "@/components/visuals/TopicIcon";
import { articles } from "@/data/articles";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
    title: "Insights",
    description: "Practical notes on UX, UI, design systems, and frontend craft from the Pixel Exact team.",
    path: "/insights",
});

export default function InsightsPage() {
    return (
        <div className="service-page service-page--index">
            <Header backHref="/" backLabel="Back home" />
            <main id="main-content">
                <section className="service-page__hero">
                    <div className="service-page__wrap service-page__hero-grid">
                        <div>
                            <p className="service-page__eyebrow">PIXEL EXACT / INSIGHTS</p>
                            <h1>Insights.</h1>
                        </div>
                        <p className="service-page__summary">Practical thinking on UX, UI, design systems, and frontend craft, written for the teams we work with.</p>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <div className="service-page__service-index">{articles.map((entry, index) => { const isLast = index === articles.length - 1 && articles.length % 2 === 1; return <Reveal className={isLast ? "service-page__service-card--wide" : undefined} key={entry.slug} index={index}><Link className="service-page__service-card" href={`/insights/${entry.slug}`}><span className="service-page__service-card-topic"><TopicIcon topic={entry.topic} />{entry.topic}</span><h2>{entry.title}</h2><p>{entry.dek}</p><ArrowUpRight aria-hidden="true" size={22} /></Link></Reveal>; })}</div>
                        {articles.some((entry) => entry.status !== "published") && (
                            <p className="service-page__index-summary">Some pieces below are still in progress. Their entry outlines what&apos;s coming rather than a finished write-up.</p>
                        )}
                    </div>
                </section>

                <section className="service-page__cta">
                    <div className="service-page__wrap">
                        <p className="service-page__eyebrow">READY WHEN YOU ARE</p>
                        <h2>Have a question these don&apos;t answer yet?</h2>
                        <p>Ask us directly, we&apos;ll give you a straight answer.</p>
                        <Link className="service-page__button" href="/contact">Book a Consultation <ArrowUpRight aria-hidden="true" size={18} /></Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
