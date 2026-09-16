import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
    title: "About",
    description: "Pixel Exact is a senior-led, AI-enabled studio doing UX, UI, and frontend development as one connected team, from research through to production.",
    path: "/about",
});

const principles = [
    ["Senior people, not layers", "You work directly with the people doing the research, design, and build, not an account manager relaying it to a bench of juniors."],
    ["Design and code, one team", "The people who make design decisions understand exactly how those decisions get implemented, because they implement them."],
    ["AI accelerates, judgment decides", "AI speeds up research, exploration, production, and iteration. Every decision is still made and owned by an experienced practitioner."],
    ["Flexible by design", "Engage us for a full product build, or for the one part, research, a design system, a frontend rebuild, a second opinion, that's currently stuck."],
] as const;

export default function AboutPage() {
    return (
        <div className="service-page">
            <Header backHref="/" backLabel="Back home" />
            <main id="main-content">
                <section className="service-page__hero">
                    <div className="service-page__wrap service-page__hero-grid">
                        <div>
                            <p className="service-page__eyebrow">PIXEL EXACT / ABOUT</p>
                            <h1>A senior partner for precise digital products.</h1>
                        </div>
                        <p className="service-page__summary">We do UX, UI, and frontend development as one connected team, with 40+ years of combined experience behind every decision.</p>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <div className="service-page__section-head"><p className="service-page__eyebrow">HOW WE WORK</p><h2>One team, from research to production.</h2><p className="service-page__index-summary">Most studios hand off a Figma file between separate research, design, and engineering teams and hope nothing gets lost. We take a product through every stage ourselves.</p></div>
                        <div className="service-page__text-grid">{principles.map(([title, text]) => <div className="service-page__text-grid-item" key={title}><h3>{title}</h3><p>{text}</p></div>)}</div>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <div className="service-page__section-head"><p className="service-page__eyebrow">WHO WE WORK WITH</p><h2>Startup founders and product &amp; engineering leaders.</h2><p className="service-page__index-summary">Founders come to us for senior product and design expertise without staffing a full team before validating anything. Product and engineering leaders bring us in for a specific gap: a design system that&apos;s drifted, a legacy interface that needs modernizing, or additional senior capacity for a stretch of work.</p></div>
                        <p className="service-page__index-summary"><Link className="service-page__inline-link" href="/services">See how we can work together <ArrowUpRight aria-hidden="true" size={14} /></Link></p>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <div className="service-page__section-head"><p className="service-page__eyebrow">THE MODEL</p><h2>Why this moves faster without moving worse.</h2><p className="service-page__index-summary">The full explanation of how senior involvement and AI-enabled workflows combine to compress timelines lives on its own page.</p></div>
                        <p className="service-page__index-summary"><Link className="service-page__inline-link" href="/services/how-we-deliver">Read how we deliver <ArrowUpRight aria-hidden="true" size={14} /></Link></p>
                    </div>
                </section>

                <section className="service-page__cta">
                    <div className="service-page__wrap">
                        <p className="service-page__eyebrow">READY WHEN YOU ARE</p>
                        <h2>Tell us what you&apos;re working on.</h2>
                        <p>We&apos;ll tell you what it would take to design and build it, precisely, and in weeks.</p>
                        <Link className="service-page__button" href="/contact">Book a Consultation <ArrowUpRight aria-hidden="true" size={18} /></Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
