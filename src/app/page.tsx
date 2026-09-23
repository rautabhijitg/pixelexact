import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Button from "@/components/Button/Button";
import Reveal from "@/components/animations/Reveal";
import Footer from "@/components/Footer/Footer";
import HomeChrome from "@/components/Home/HomeChrome";
import BrowserChrome from "@/components/visuals/BrowserChrome";
import CaseStudyArt from "@/components/visuals/CaseStudyArt";
import ComponentSwatch, { toolkitItems } from "@/components/visuals/ComponentSwatch";
import TopicIcon from "@/components/visuals/TopicIcon";
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
    ["01", "User Research", "Uncover behavioral insights and validate user needs before placing a single pixel."],
    ["02", "UX Architecture", "Structure intuitive user journeys, wireframes, and information flows designed for frictionless task completion."],
    ["03", "High-Fidelity UI", "Design clean, responsive interfaces crafted with the aesthetic precision and detail your brand deserves."],
    ["04", "Design Systems", "Turn visual decisions into scalable, documented, and governed component libraries built to scale."],
    ["05", "Frontend Engineering", "Translate designs into clean, performant, and accessible code that matches the interface exactly."],
    ["06", "Multi-Device Validation", "TPressure-test usability, cross-platform performance, and responsiveness across real devices and users before launch."],
] as const;

const clientLogos = [
    ["Polytest Laboratories", "https://www.polytestlaboratories.com/"],
    ["Loopdigitech", "https://loopdigitech.com/index.html"],
    ["Alada", "https://alada.us/"],
    ["Veras Retail", "https://www.verasretail.com/"],
] as const;

const services = [
    ["UX & Product Design", "User research, interaction design, WCAG accessibility, and multi-device usability testing. \n We structure complex workflows into frictionless, intuitive digital products—led directly by senior architects and accelerated by AI-assisted research tools.", "Explore UX & Product Design", "/services/ux-product-design"],
    ["UI & Design Systems", "Scalable design systems, cohesive brand identity, and high-impact web design. \n We establish systematic, reusable design tokens and governed components that unify your brand experience and eliminate design drift as your product scales.", "Explore UI & Design Systems", "/services/ui-design-systems"],
    ["Frontend & Application Development", "Production-grade UI code, web application development, and presentation-layer modernization. \n We translate Figma specifications into clean, performant, and accessible frontend code, decoupling your frontend architecture to modernize legacy interfaces without risking backend operations.", "Explore Frontend Development", "/services/frontend-application-development"],
    ["End-to-End Website Delivery", "Turnkey website delivery combining UX, UI design, modern frontend, Core Web Vitals, and technical SEO. \n A unified development cycle that takes marketing and corporate web platforms from concept to launch in one build, engineered for high conversion, lightning-fast load times, and search visibility.", "Explore Website Design & Development", "/services/website-design-development"],
    ["Strategic Advisory & Technical Consulting", "Senior guidance across UX architecture, accessibility audits, design systems, and frontend strategy. \n Tap into 40+ years of collective technical expertise on demand to audit code, resolve UX bottlenecks, or validate architectural decisions without committing to a full-cycle engagement.", "Talk to a UX expert", "/services/consultancy"],
    ["Production-Ready Design Toolkit", "A curated library of 40+ modular, pre-tested UI components engineered for rapid delivery. \n Accelerate sprint velocity and maintain strict accessibility standards by deploying battle-tested components designed for instant integration and seamless styling.", "Explore the Component Library", "/services/design-toolkit"],
    ["Legacy Application Modernization", "A modern, on-brand interface for your legacy application, without rewriting the backend underneath it.", "Explore Legacy Application Modernization", "/services/legacy-application-modernization"],
] as const;

export default function Home() {
    return (
        <HomeChrome>
            <main id="main-content">
                <section className="pe__hero"><div className="pe__wrap pe__hero-grid"><div><p className="section-head__eyebrow">UX Design & FrontEnd Engineering by Senior Specialists</p><h1>Pixel-Perfect Design. Production-Ready Code.</h1><p className="pe__hero-sub">Pixel Exact designs and builds end-to-end digital products with senior engineering rigor. By integrating AI-accelerated workflows with over 40 years of combined design and frontend expertise, we ship production-grade web interfaces in weeks—not months. </p><div className="pe__hero-cta"><Button href="/contact" className="pe__button" icon={<ArrowUpRight aria-hidden="true" size={18} />}>Book a consultation</Button><Button href="#work" variant="ghost" className="pe__button" icon={<ArrowDown aria-hidden="true" size={18} />}>View case studies</Button></div></div><div className="artifact pe__ruler-frame"><BrowserChrome /><div className="pe__ruler">{["Unified Delivery: Research, UX architecture, and UI design led by one dedicated senior team.", "Zero-Fidelity Loss: Frontend engineering built to match design specifications down to the exact pixel. ", "AI-Accelerated Pipeline: AI-enabled efficiency embedded across every stage to compress delivery cycles. ", "Decoupled UI Modernization: Transform legacy frontends and design systems without disrupting your core backend architecture. "].map((label, index) => <div className="pe__ruler-line" key={label}><span className="pe__ruler-number">0{index + 1}</span><span>{label}</span></div>)}</div></div></div></section>

                <section className="pe__credibility"><div className="pe__wrap pe__credibility-grid">{[["40+ Years Combined Experience", "Senior expertise spanning UX research, design systems, and modern frontend frameworks."], ["AI-Native Velocity", "Every stage of design and development is accelerated using intelligent, automated tooling."], ["Weeks, not months", "Rapid time-to-market and high deployment velocity without compromising code quality or accessibility."]].map(([stat, text], index) => <Reveal className="pe__credibility-item" key={stat} index={index}><strong>{stat}</strong><span>{text}</span></Reveal>)}</div></section>

                <section className="pe__section" id="about"><div className="pe__wrap"><Reveal><div className="pe__section-head"><h2>One unified team, from initial discovery to live production.</h2><p>Most design agencies hand off a Figma file and hope for the best. We engineer digital products from end to end under one roof—ensuring zero loss of fidelity, intent, or quality between design and production code.</p></div></Reveal><div className="pe__sequence">{sequence.map(([number, title, description], index) => <Reveal className="pe__sequence-step" key={number} index={index}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></Reveal>)}</div><p className="pe__section-note">Every phase of our delivery pipeline is augmented by AI-native workflows—allowing us to compress delivery timelines and launch production-grade products in <b>weeks, not months.</b> <a className="pe__inline-link" href="/services/how-we-deliver">Explore our delivery framework <ArrowUpRight aria-hidden="true" size={14} /></a></p></div></section>

                <section className="pe__section pe__section--alt" id="work"><div className="pe__wrap"><Reveal><div className="pe__section-head"><h2>Selected work.</h2><p>A sample of the projects we take from research through to a shipped, pixel-accurate product.</p></div></Reveal><div className="pe__work-grid">{caseStudies.map(({ slug, tag, title, summary, art }, index) => <Reveal key={slug} index={index}><article className="pe__case"><CaseStudyArt variant={art} /><div className="pe__case-body"><span>{tag}</span><h3>{title}</h3><p>{summary}</p><a className="pe__inline-link" href={`/work/${slug}`}>Read the case study <ArrowUpRight aria-hidden="true" size={16} /></a></div></article></Reveal>)}</div>
                    {/* <p className="pe__section-note">These entries describe the kind of engagement, not a finished case study. Final client names, screenshots, and outcome data are pending.</p> */}
                </div></section>

                <section className="pe__section" id="services"><div className="pe__wrap"><Reveal><div className="pe__section-head"><p className="section-head__eyebrow">Our Capabilities & Services</p><h2>What we do.</h2><p>Seven flexible ways to partner with us—from full design-to-code execution to targeted technical consulting.</p></div></Reveal><div className="pe__services">{services.map(([title, description, link, href], index) => <Reveal key={title} index={index}><article className="pe__service"><h3>{title}</h3><p>{description}</p><a className="pe__inline-link" href={href}>{link} <ArrowUpRight aria-hidden="true" size={16} /></a></article></Reveal>)}</div></div></section>

                <section className="pe__section pe__section--alt" id="toolkit"><div className="pe__wrap pe__toolkit"><Reveal><div className="pe__section-head"><p className="section-head__eyebrow">PROPRIETARY UI ACCELERATOR</p><h2>Design Toolkit: 40+ Production-Ready Components Built for Scale</h2><p className="pe__toolkit-copy">Engineered like an internal product platform—not agency boilerplate.</p>
                    <p>Most design agencies deliver static mockups and leave your developers to figure out component architecture. Our Design Toolkit is an actively maintained, enterprise-grade component platform that proves we build with product-team engineering standards.
                        Built on a decoupled frontend architecture, it allows your teams to write UI code once and render across diverse layouts without rewriting base logic—compressing release cycles from day one.
                    </p><div className="pe__hero-cta"><a className="pe__button" href="https://uimagic-497ae.web.app/" target="_blank" rel="noreferrer">Explore the demo <ArrowUpRight aria-hidden="true" size={18} /></a><a className="pe__button pe__button--ghost" href="/contact">Ask how it fits your stack <ArrowDown aria-hidden="true" size={18} /></a></div></div></Reveal><Reveal index={1}><div className="pe__swatches">{toolkitItems.map((item) => <ComponentSwatch key={item.kind} kind={item.kind} label={item.label} />)}<div className="pe__swatch pe__swatch--more">+30 more</div></div></Reveal></div></section>

                <section className="pe__section"><div className="pe__wrap"><Reveal><div className="pe__section-head"><h2>Trusted by teams who can&apos;t afford drift.</h2><p>A cross-section of the industries and company sizes we work with.</p></div></Reveal><div className="pe__trust-row">{clientLogos.map(([name, href], index) => <Reveal key={name} index={index}><a className="pe__logo-slot" href={href} target="_blank" rel="noreferrer">{name}</a></Reveal>)}</div></div></section>

                <section className="pe__section pe__section--alt"><div className="pe__wrap"><Reveal><div className="pe__section-head"><p className="section-head__eyebrow">TAILORED ENGAGEMENT MODELS</p><h2>Built for How You Work.</h2><p>Whether you are launching an MVP, modernizing an enterprise platform, or scaling agency bandwidth—we integrate seamlessly into your workflow</p></div></Reveal><div className="pe__audience-grid">{[["Early-Stage & High-Growth Startups", "Go to market with an institutional-grade product—without hiring a full in-house team."], ["SaaS & product teams", "Fix design-to-dev drift, modernize legacy UI, and scale with a real design system."], ["Agencies", "A reliable, discreet UX and frontend partner for client work you would rather not staff yourself."]].map(([title, text], index) => <Reveal key={title} index={index}><article className="pe__audience"><h3>{title}</h3><p>{text}</p><a className="pe__inline-link" href="/contact">Book a consultation</a></article></Reveal>)}</div></div></section>

                <section className="pe__section" id="insights"><div className="pe__wrap"><Reveal><div className="pe__section-head"><p className="section-head__eyebrow">THOUGHT LEADERSHIP & FIELD NOTES</p><h2>Insights.</h2><p>Proven frameworks on UI architecture, frontend velocity, and cross-functional delivery—written for product teams, engineering leaders, and founders.</p></div></Reveal><div className="pe__insights">{articles.map(({ slug, topic, title }, index) => <Reveal key={slug} index={index}><a className="pe__article" href={`/insights/${slug}`}><span className="pe__article-topic"><TopicIcon topic={topic} />{topic}</span><h3>{title}</h3></a></Reveal>)}</div></div></section>

                <section className="pe__final" id="contact"><div className="pe__wrap"><div className="pe__wordmark pe__wordmark--light"><Image className="pe__logo" src="/images/pixelexact-logo-white.svg" alt="Pixel Exact" width={699} height={119} /></div><h2>Looking for a specific architectural breakdown or technical audit?</h2><p>Explore our complete library of design-system guides, frontend teardowns, and engineering frameworks.</p><a className="pe__button pe__button--accent" href="/contact">Book a consultation</a></div></section>
            </main>
            <Footer />
        </HomeChrome>
    );
}
