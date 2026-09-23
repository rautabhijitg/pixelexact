import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import { servicePages } from "@/components/ServicePage/serviceData";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { buildMetadata } from "@/lib/seo";
import Button from "@/components/Button/Button";

export const metadata: Metadata = buildMetadata({
    title: "Services",
    description: "UX & product design, UI & design systems, frontend & application development, website design & development, consultancy, Design Toolkit, and legacy application modernization, from one senior, AI-enabled team.",
    path: "/services",
});

const differentiators = [
    ["Single-Team Continuity", "The senior specialists who analyze your users are the exact people designing your design systems and writing your production frontend code. Nothing gets lost in translation."],
    ["Design & Engineering in Direct Lockstep", "Architectural and design decisions are formed by practitioners who know how they will be rendered, because they are the ones writing the code."],
    ["AI-Native Velocity, Senior Human Governance", "Intelligent automation accelerates research analysis, token generation, boilerplate scaffolding, and accessibility audits. Senior judgment ensures architectural integrity, security, and WCAG compliance."],
    ["Modular Engagement Flexibility", "Engage our complete unit for an end-to-end product rollout, or deploy a senior specialist for targeted intervention. The quality bar and accountability remain identical."],
] as const;

const capabilities = [
    ["UX Architecture & Product Strategy", "Uncover behavioral truth before placing pixels.", "Comprehensive user research, interactive wireframing, friction-free journey mapping, and accessibility auditing to build products users understand intuitively.", "/services/ux-product-design"],
    ["High-Fidelity UI & Governed Design Systems", "Scale interface aesthetics without design drift.", "Comprehensive visual design, design token architecture, centralized UI variables, and component governance that unify enterprise brands across multi-platform experiences.", "/services/ui-design-systems"],
    ["Frontend & Web Application Development", "Pixel-accurate interfaces backed by clean, maintainable code.", "Production-grade frontend development utilizing modern frameworks. We specialize in decoupled presentation layers to modernize legacy UI without disrupting core backend logic.", "/services/frontend-application-development"],
    ["End-to-End Website Design & Development", "High-converting, accessible, and fast web platforms.", "Turnkey web solutions uniting bespoke brand design, technical SEO, lightning-fast Core Web Vitals performance, and CMS architecture in a single, cohesive build cycle.", "/services/website-design-development"],
    ["Strategic Advisory & Technical Consulting", "Senior architectural oversight without vendor lock-in.", "On-demand access to 40+ years of collective expertise for UX teardowns, WCAG accessibility reviews, frontend code audits, and technical stack roadmapping.", "/services/consultancy"],
    ["Proprietary Design Toolkit", "40+ production-ready UI components built for extreme velocity.", "An actively maintained, themeable, and accessible component library featuring RTL/LTR support, dark mode toggles, and decoupled layout flexibility.", "/services/design-toolkit"],
    ["Legacy Application Modernization", "A modern experience for your legacy application, without redevelopment.", "We offer a non-disruptive modernization service focused exclusively on the presentation layer, the part of your application your users actually see and feel.", "/services/legacy-application-modernization"],
] as const;

const pillars = [
    ["Direct Access to Senior Practitioners", "No junior bench, no account manager middlemen, and no game of telephone. You communicate directly with the senior architects and designers doing the actual work."],
    ["AI-Enabled Efficiency, Zero Fluff", "We utilize AI tooling to automate repetitive scaffolding, synthesize qualitative user data, and catch syntax inconsistencies, freeing our team to focus entirely on product strategy, UX nuance, and code performance."],
    ["Single-Pipeline Execution (Speed Without the Asterisk)", "Traditional timelines balloon because teams wait on cross-department handoffs and revisions. Our research, design, and code exist in one unbroken, iterative feedback loop."],
] as const;

const audiences = [
    ["Early-Stage & Scaling Founders", "Go to market with an institutional-grade product from day one.", "Build clean UX and enterprise-grade frontend code without the financial drag and risk of hiring separate research, design, and development teams before validating your product-market fit.", "/services/ux-product-design", "See UX & Product Strategy"],
    ["Product & Engineering Leaders", "Expand senior capacity, eliminate technical debt, and enforce design consistency.", "Get high-impact senior execution when you need to modernize legacy frontends without touching monolithic backend services, unify fragmented systems, or audit accessibility.", "/services/consultancy", "Explore Technical Advisory & Engineering"],
    ["Digital & Creative Agencies", "A discreet, reliable white-label UI and frontend execution partner.", "Expand billable bandwidth and deliver complex digital applications on time without the operational burden of recruiting full-time engineering or specialized UX staff.", "/contact", "Learn About White-Label Partnerships"],
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
                            <h1>One Senior Team from First Discovery to Final Commit</h1>
                            <div className="service-page__hero-cta">
                                <Link className="service-page__button" href="/contact">Book an Architecture Discovery Call <ArrowUpRight aria-hidden="true" size={18} /></Link>
                                <Button href="#what-we-do" variant="ghost" className="pe__button" icon={<ArrowDown aria-hidden="true" size={18} />}>Explore Flexible Engagement Models</Button>

                            </div>
                        </div>
                        <p className="service-page__summary">End-to-end user research, UX/UI architecture, and production frontend engineering—delivered by the same senior specialists from day one. Partner with us for a complete product lifecycle or target the exact operational bottleneck slowing you down.</p>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">THE ARCHITECTURE OF COLLABORATION</p><h2>Not a Handoff. A Unified Delivery Engine.</h2><p className="service-page__index-summary">Traditional agency handoffs create miscommunication, design drift, and technical debt. We replace fractured departmental handoffs with a cohesive, cross-functional delivery model.</p></div></Reveal>
                        <div className="service-page__text-grid">{differentiators.map(([title, text], index) => <Reveal className="service-page__text-grid-item" key={title} index={index}><h3>{title}</h3><p>{text}</p></Reveal>)}</div>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt" id="what-we-do">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">CORE CAPABILITIES</p><h2>Seven Ways to Partner With Pixel Exact</h2><p className="service-page__index-summary">Deploy our senior team across your entire development lifecycle or engage us to solve a focused technical hurdle.</p></div></Reveal>
                        <div className="service-page__service-index">{capabilities.map(([title, tagline, description, href], index) => { const isLast = index === capabilities.length - 1 && capabilities.length % 2 === 1; return <Reveal className={isLast ? "service-page__service-card--wide" : undefined} key={title} index={index}><Link className="service-page__service-card" href={href}><span>0{index + 1}</span><h2>{title}</h2><p className="service-page__service-card-tagline">{tagline}</p><p>{description}</p><ArrowUpRight aria-hidden="true" size={22} /></Link></Reveal>; })}</div>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">OUR OPERATING SYSTEM</p><h2>How We Move Faster Without Sacrificing Quality</h2><p className="service-page__index-summary">Every engagement runs on three fundamental operational pillars that keep delivery measured in weeks, not months.</p></div></Reveal>
                        <div className="service-page__process">
                            {pillars.map(([title, text], index) => <Reveal className="service-page__process-step" key={title} index={index}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></Reveal>)}
                        </div>
                        <p className="service-page__index-summary"><strong>Our Commitment to Delivery Integrity:</strong> We use AI to accelerate research synthesis, UI iteration, documentation, and component builds, while keeping human senior practitioners accountable for every technical architecture decision, security review, and WCAG standard across every deliverable. <Link className="service-page__inline-link" href={`/services/${howWeDeliver.slug}`}>Explore Our Delivery Framework <ArrowUpRight aria-hidden="true" size={14} /></Link></p>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">AUDIENCE ALIGNMENT</p><h2>Tailored for High-Velocity Product Teams</h2></div></Reveal>
                        <div className="service-page__text-grid">{audiences.map(([title, tagline, description, href, linkLabel], index) => { const isLast = index === audiences.length - 1 && audiences.length % 2 === 1; return <Reveal className={`service-page__text-grid-item${isLast ? " service-page__text-grid-item--wide" : ""}`} key={title} index={index}><h3>{title}</h3><p className="service-page__service-card-tagline">{tagline}</p><p>{description}</p><Link href={href}>{linkLabel} <ArrowUpRight aria-hidden="true" size={14} /></Link></Reveal>; })}</div>
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
