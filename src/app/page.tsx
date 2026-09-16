import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Button from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import HomeChrome from "@/components/Home/HomeChrome";
import { caseStudies } from "@/data/caseStudies";
import { articles } from "@/data/articles";
import { buildMetadata } from "@/lib/seo";
import "./page.scss";

export const metadata: Metadata = buildMetadata({
    title: "Senior-led UX, UI, and Frontend Development",
    description: "UX design, UI design, and frontend development from one senior, AI-enabled team. Pixel-accurate execution, design and code held together, delivered fast.",
    path: "/",
});

const sequence = [
    ["01", "Research", "Understand real user behavior before any pixel is placed."],
    ["02", "UX", "Structure flows and information around what users actually need."],
    ["03", "UI", "Design the interface with the precision the brand deserves."],
    ["04", "Design System", "Turn decisions into reusable, governed components."],
    ["05", "Frontend", "Build the interface to match the design, exactly."],
    ["06", "Validation", "Test with real users and real devices before launch."],
] as const;

const services = [
    ["UX & Product Design", "Research, UX design, usability testing, accessibility, and validation, senior-led and AI-enabled.", "Explore UX & Product Design", "/services/ux-product-design"],
    ["UI & Design Systems", "UI design, design systems, website design, and digital branding built to scale.", "Explore UI & Design Systems", "/services/ui-design-systems"],
    ["Frontend & Application Development", "Pixel-accurate frontend builds, application development, and presentation-layer modernization.", "Explore Development", "/services/frontend-application-development"],
    ["Consultancy", "Senior UX, UI, accessibility, and frontend advisory without a full project commitment.", "Talk to a UX expert", "/services/consultancy"],
    ["Design Toolkit", "A growing library of 40+ production-ready UI components, built to speed up development.", "Explore Design Toolkit", "/services/design-toolkit"],
] as const;

export default function Home() {
    return (
        <HomeChrome>
            <main id="main-content">
                <section className="pe__hero"><div className="pe__wrap pe__hero-grid"><div><p className="pe__kicker">UX design and frontend development, from one senior team.</p><h1>Pixel-perfect design. Pixel-perfect code.</h1><p className="pe__hero-sub">Pixel Exact designs and builds your product end-to-end, AI-enabled, delivered in weeks not months, with 40+ years of combined team experience behind every decision.</p><div className="pe__hero-cta"><Button href="/contact" className="pe__button" icon={<ArrowUpRight aria-hidden="true" size={18} />}>Book a consultation</Button><Button href="#work" variant="ghost" className="pe__button" icon={<ArrowDown aria-hidden="true" size={18} />}>View case studies</Button></div></div><div className="pe__ruler">{["Research, UX, and UI, handled by one team", "Frontend built to match the design, exactly", "AI-enabled at every stage of the work", "Legacy UI modernized without touching your backend"].map((label, index) => <div className="pe__ruler-line" key={label}><span className="pe__ruler-number">0{index + 1}</span><span>{label}</span></div>)}</div></div></section>

                <section className="pe__credibility"><div className="pe__wrap pe__credibility-grid"><div className="pe__credibility-item"><strong>40+ yrs</strong><span>Combined team experience across UX, UI, and frontend engineering.</span></div><div className="pe__credibility-item"><strong>AI-enabled</strong><span>Every service is accelerated with AI.</span></div><div className="pe__credibility-item"><strong>Weeks, not months</strong><span>Compressed timelines without cutting corners.</span></div></div></section>

                <section className="pe__section" id="about"><div className="pe__wrap"><div className="pe__section-head"><h2>One team, from research to production.</h2><p>Most studios hand off a Figma file and hope. We take a product through every stage ourselves, so nothing gets lost between design and code.</p></div><div className="pe__sequence">{sequence.map(([number, title, description]) => <div className="pe__sequence-step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></div>)}</div><p className="pe__section-note">Every stage above is <b>AI-enabled</b>, which is a core reason we deliver in <b>weeks, not months</b>. <a className="pe__inline-link" href="/services/how-we-deliver">See how we deliver <ArrowUpRight aria-hidden="true" size={14} /></a></p></div></section>

                <section className="pe__section pe__section--alt" id="work"><div className="pe__wrap"><div className="pe__section-head"><h2>Selected work.</h2><p>A sample of the projects we take from research through to a shipped, pixel-accurate product.</p></div><div className="pe__work-grid">{caseStudies.map(({ slug, tag, title, summary }, index) => <article className="pe__case" key={slug}><div className={`pe__case-thumb pe__case-thumb--${index + 1}`}>Case study visual</div><div className="pe__case-body"><span>{tag}</span><h3>{title}</h3><p>{summary}</p><a className="pe__inline-link" href={`/work/${slug}`}>Read the case study <ArrowUpRight aria-hidden="true" size={16} /></a></div></article>)}</div><p className="pe__section-note">These entries describe the kind of engagement, not a finished case study. Final client names, screenshots, and outcome data are pending.</p></div></section>

                <section className="pe__section" id="services"><div className="pe__wrap"><div className="pe__section-head"><h2>What we do.</h2><p>Five ways to work with us, as a full design-to-code partner or for a specific need.</p></div><div className="pe__services">{services.map(([title, description, link, href]) => <article className="pe__service" key={title}><h3>{title}</h3><p>{description}</p><a className="pe__inline-link" href={href}>{link} <ArrowUpRight aria-hidden="true" size={16} /></a></article>)}</div></div></section>

                <section className="pe__section pe__section--alt" id="toolkit"><div className="pe__wrap pe__toolkit"><div><p className="pe__kicker">Our product</p><h2>Design Toolkit, 40+ components and growing.</h2><p className="pe__toolkit-copy">Our maintained, production-ready component library proves we build the way a product team would, not just a vendor.</p><div className="pe__hero-cta"><a className="pe__button" href="https://uimagic-497ae.web.app/" target="_blank" rel="noreferrer">Explore the demo <ArrowUpRight aria-hidden="true" size={18} /></a><a className="pe__button pe__button--ghost" href="/contact">Ask how it fits your stack <ArrowDown aria-hidden="true" size={18} /></a></div></div><div className="pe__swatches">{["Button", "Input", "Card", "Modal", "Nav", "Table", "Tabs", "Toast", "Chart", "Form", "Menu", "+30 more"].map((item) => <div className="pe__swatch" key={item}>{item}</div>)}</div></div></section>

                <section className="pe__section"><div className="pe__wrap"><div className="pe__section-head"><h2>Trusted by teams who can&apos;t afford drift.</h2><p>Client logos and testimonials will appear here once confirmed.</p></div><div className="pe__trust-row">{[1, 2, 3, 4].map((item) => <div className="pe__logo-slot" key={item}>Logo, pending</div>)}</div><div className="pe__quote-slot">Client testimonial, pending confirmed quote from Pixel Exact.</div></div></section>

                <section className="pe__section pe__section--alt"><div className="pe__wrap"><div className="pe__section-head"><h2>Built for how you work.</h2><p>Startups, SaaS teams, and agencies come to us for different reasons.</p></div><div className="pe__audience-grid">{[["Startups", "Launch with a product that looks and functions like it came from a senior team."], ["SaaS & product teams", "Fix design-to-dev drift, modernize legacy UI, and scale with a real design system."], ["Agencies", "A reliable, discreet UX and frontend partner for client work you would rather not staff yourself."]].map(([title, text]) => <article className="pe__audience" key={title}><h3>{title}</h3><p>{text}</p><a className="pe__inline-link" href="/contact">Book a consultation</a></article>)}</div></div></section>

                <section className="pe__section" id="insights"><div className="pe__wrap"><div className="pe__section-head"><h2>Insights.</h2><p>Notes on design, frontend, and delivery, written for the teams we work with.</p></div><div className="pe__insights">{articles.map(({ slug, topic, title }) => <a className="pe__article" href={`/insights/${slug}`} key={slug}><span>{topic}</span><h3>{title}</h3></a>)}</div></div></section>

                <section className="pe__final" id="contact"><div className="pe__wrap"><div className="pe__wordmark pe__wordmark--light"><Image className="pe__logo" src="/images/pixelexact-logo-white.png" alt="Pixel Exact" width={699} height={119} /></div><h2>Let&apos;s build it exactly right.</h2><p>Tell us what you&apos;re working on. We&apos;ll tell you what it would take to design and build it, precisely, and in weeks.</p><a className="pe__button pe__button--accent" href="/contact">Book a consultation</a></div></section>
            </main>
            <Footer />
        </HomeChrome>
    );
}
