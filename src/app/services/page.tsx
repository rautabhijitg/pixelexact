import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import { serviceOrder, servicePages } from "@/components/ServicePage/serviceData";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
    title: "Services",
    description: "UX & product design, UI & design systems, frontend & application development, consultancy, and Design Toolkit, from one senior, AI-enabled team.",
    path: "/services",
});

const differentiators = [
    ["One senior team", "The people who research your users are the people who decide the interface, and the people who build it."],
    ["Design and code, connected", "Decisions get made by people who know exactly how they'll be implemented, because they're the ones implementing them."],
    ["AI-enabled, senior-judged", "AI accelerates research, iteration, and production. Every decision is still made and owned by an experienced practitioner."],
    ["Engage for the whole thing, or just the gap", "A full product build, or a few weeks of one specialist's time. Same team, same standard."],
] as const;

const audiences = [
    ["Startup founders", "You need product decisions made well the first time, without staffing a research team, a design team, and an engineering team before you've validated anything. One senior team gives you that range without the overhead.", "/services/ux-product-design", "See UX & Product Design"],
    ["Product & engineering leaders", "You already have a team. What you need is additional senior capacity, a design system that stops the drift, a legacy interface modernized without touching the backend, or a specialist opinion you can trust.", "/services/consultancy", "See Consultancy"],
] as const;

const howWeDeliver = servicePages["how-we-deliver"];

export default function ServicesPage() {
    return (
        <div className="service-page service-page--index">
            <Header backHref="/" backLabel="Back home" />
            <main id="main-content">
                <section className="service-page__hero">
                    <div className="service-page__wrap service-page__hero-grid">
                        <div>
                            <p className="service-page__eyebrow">PIXEL EXACT / SERVICES</p>
                            <h1>One senior team from first question to final commit.</h1>
                        </div>
                        <p className="service-page__summary">Research, design, and frontend development, held together by the same people from day one. Engage us for the whole product or the one part that&apos;s stuck.</p>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">THE MODEL</p><h2>Not a hand-off. A team.</h2></div></Reveal>
                        <div className="service-page__text-grid">{differentiators.map(([title, text], index) => <Reveal className="service-page__text-grid-item" key={title} index={index}><h3>{title}</h3><p>{text}</p></Reveal>)}</div>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">WHAT WE DO</p><h2>Five ways to work with us.</h2><p className="service-page__index-summary">Choose the kind of clarity your product needs next.</p></div></Reveal>
                        <div className="service-page__service-index">{serviceOrder.map((slug, index) => { const service = servicePages[slug]; const isLast = index === serviceOrder.length - 1; return <Reveal className={isLast ? "service-page__service-card--wide" : undefined} key={service.slug} index={index}><Link className="service-page__service-card" href={`/services/${service.slug}`}><span>0{index + 1}</span><h2>{service.title}</h2><p>{service.summary}</p><ArrowUpRight aria-hidden="true" size={22} /></Link></Reveal>; })}</div>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">THE ENGINE BEHIND ALL FIVE</p><h2>Why this moves faster without moving worse.</h2><p className="service-page__index-summary">Every service above runs on the same operating model.</p></div></Reveal>
                        <div className="service-page__process">
                            <Reveal index={0}><article className="service-page__process-step"><span>01</span><h3>Senior involvement</h3><p>You work directly with the people doing the work, not an account manager relaying it to a bench of juniors. Every decision is owned by someone who has done this before.</p></article></Reveal>
                            <Reveal index={1}><article className="service-page__process-step"><span>02</span><h3>AI-enabled execution</h3><p>AI accelerates research, exploration, production, and iteration throughout the process. It doesn&apos;t replace judgment, it removes the busywork around it.</p></article></Reveal>
                            <Reveal index={2}><article className="service-page__process-step"><span>03</span><h3>Speed, without the asterisk</h3><p>Work that would normally hand off between separate research, design, and development teams happens inside one connected process. That&apos;s the source of the speed, not fewer reviews.</p></article></Reveal>
                        </div>
                        <p className="service-page__index-summary">{howWeDeliver.intro} <Link className="service-page__inline-link" href={`/services/${howWeDeliver.slug}`}>More on how we deliver <ArrowUpRight aria-hidden="true" size={14} /></Link></p>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">WHO THIS IS FOR</p><h2>Built for two kinds of teams.</h2></div></Reveal>
                        <div className="service-page__text-grid">{audiences.map(([title, text, href, linkLabel], index) => <Reveal className="service-page__text-grid-item" key={title} index={index}><h3>{title}</h3><p>{text}</p><Link href={href}>{linkLabel} <ArrowUpRight aria-hidden="true" size={14} /></Link></Reveal>)}</div>
                    </div>
                </section>

                <section className="service-page__cta">
                    <div className="service-page__wrap">
                        <p className="service-page__eyebrow">READY WHEN YOU ARE</p>
                        <h2>Tell us where the work is stuck.</h2>
                        <p>We&apos;ll tell you what it would take to fix it, clearly, and without a sales process to sit through first.</p>
                        <Link className="service-page__button" href="/contact">Book a Consultation <ArrowUpRight aria-hidden="true" size={18} /></Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
