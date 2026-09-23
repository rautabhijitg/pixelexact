import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import BrandPattern from "@/components/visuals/BrandPattern";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
    title: "About",
    description: "Pixel Exact is a senior-led, AI-enabled studio doing UX, UI, and frontend development as one connected team, from research through to production.",
    path: "/about",
});

const missionVision = [
    ["Our Mission", "To eliminate the costly friction, design drift, and communication gaps between design and code. We provide growing startups, scaling SaaS teams, and enterprise product leaders with direct access to senior practitioners, delivering institutional-grade UI/UX and production-ready frontend code 2x to 3x faster without compromising architectural integrity."],
    ["Our Vision", "To set the benchmark for the modern, AI-native digital product studio: an agile environment where cross-functional senior talent and intelligent automation work in tandem, empowering businesses to launch, scale, and modernize interfaces with zero wasted cycles."],
] as const;

const coreValues = [
    ["Zero-Fidelity Loss", "A design is only as good as its live implementation. We ensure that interactive behaviors, responsive breakpoints, design tokens, and visual polish match the design specification down to the exact pixel in production."],
    ["Velocity Through Decoupling", "We architect software with the future in mind. By decoupling presentation layers from core backend business logic, we give teams the agility to modernize, rebrand, and adapt interfaces rapidly across any technology stack."],
    ["Radical Accessibility & Performance", "Speed and inclusivity are architectural requirements, not optional polish. Every interface we ship is engineered for sub-second page loads, optimal Core Web Vitals, and strict WCAG 2.1/2.2 AA accessibility standards."],
    ["Uncompromising Senior Accountability", "No agency layers, junior benches, or telephone games. You collaborate directly with senior architects and designers who own the work from the initial strategic question to the final production commit."],
] as const;

const howWeWork = [
    ["Direct Senior Engagement, Zero Middle Layers", "You collaborate directly with the senior architects and designers executing your research, design systems, and frontend builds. Every decision is made by a seasoned expert who has solved these exact problems before."],
    ["Design and Engineering in Complete Lockstep", "Design decisions are made by specialists who understand underlying component architecture, browser rendering constraints, and data contracts, because they are the exact people implementing the code."],
    ["AI-Accelerated Velocity, Senior-Governed Judgment", "Intelligent automation handles the manual heavy lifting, synthesizing user feedback, structuring design tokens, and scaffolding responsive components. Senior human practitioners govern technical architecture, security, accessibility, and brand polish."],
    ["Modular & Flexible by Design", "Deploy our complete multidisciplinary unit for an end-to-end product build, or engage targeted senior support for a specific operational bottleneck, such as a stalled design system, a legacy UI modernization project, or an accessibility audit."],
] as const;

const audiences = [
    ["Early-Stage & High-Growth Founders", "Validate ideas and launch products that look, feel, and function like they were built by a mature enterprise team, without the financial burn and risk of hiring separate research, design, and engineering departments prematurely.", "/services/ux-product-design", "See UX & Product Strategy"],
    ["SaaS & Enterprise Product Leaders", "Expand senior bandwidth to resolve critical roadmap hurdles: halt design system drift, modernize complex legacy interfaces without touching backend services, or accelerate multi-tenant, white-label UI rollouts.", "/services/legacy-application-modernization", "Explore Frontend & UI Modernization"],
    ["Creative & Digital Agencies", "A dependable, discreet white-label partner for specialized UX architecture and production frontend execution when client demands exceed internal capacity.", "/contact", "Inquire About Agency Partnerships"],
] as const;

const operatingModel = [
    ["No Handoff Delays", "Research, visual design, and frontend code are developed within a single iterative feedback loop."],
    ["Automated Scaffolding & Linting", "AI-native workflows handle repetitive code generation and real-time accessibility/code-quality linting, compressing months of baseline engineering into weeks."],
    ["Proven Component Foundations", "Our proprietary 40+ component toolkit provides a pre-tested, accessible starting point for high-speed delivery across any stack (React, Next.js, Angular, Vue, .NET, Java)."],
] as const;

export default function AboutPage() {
    return (
        <div className="service-page">
            <Header backHref="/" backLabel="Back home" />
            <main id="main-content">
                <section className="service-page__hero service-page__hero--photo">
                    <div className="service-page__hero-media" aria-hidden="true">
                        <Image src="/images/services/AboutUs.webp" alt="" fill priority sizes="100vw" className="service-page__hero-image" />
                        <div className="service-page__hero-scrim" />
                    </div>
                    <div className="service-page__wrap service-page__hero-grid">
                        <div>
                            <p className="service-page__eyebrow">PIXEL EXACT / ABOUT US</p>
                            <h1>A Senior Partner for High-Velocity, High-Precision Digital Products</h1>
                            <div className="service-page__hero-cta">
                                <Link className="service-page__button" href="/contact">Book an Architecture Discovery Call <ArrowUpRight aria-hidden="true" size={18} /></Link>
                                <Link className="service-page__inline-link" href="#operating-model">Explore Our Operational Model <ArrowDown aria-hidden="true" size={14} /></Link>
                            </div>
                        </div>
                        <p className="service-page__summary">We unite user research, UX/UI architecture, and production frontend engineering into a single, high-performance team.</p>
                    </div>
                    <div className="service-page__wrap">
                        <p className="service-page__index-summary">Backed by 40+ years of collective experience and AI-accelerated delivery workflows, we help organizations build scalable digital products in weeks, not months.</p>
                    </div>
                </section>

                {/* <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal><BrandPattern /></Reveal>
                    </div>
                </section> */}

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">PURPOSE & DIRECTION</p><h2>Redefining How Modern Digital Products Are Built</h2></div></Reveal>
                        <div className="service-page__text-grid">{missionVision.map(([title, text], index) => <Reveal className="service-page__text-grid-item" key={title} index={index}><h3>{title}</h3><p>{text}</p></Reveal>)}</div>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">HOW WE DEFINE QUALITY</p><h2>The Principles Guiding Every Commit</h2></div></Reveal>
                        <div className="service-page__text-grid">{coreValues.map(([title, text], index) => <Reveal className="service-page__text-grid-item" key={title} index={index}><h3>{title}</h3><p>{text}</p></Reveal>)}</div>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">THE ARCHITECTURE OF COLLABORATION</p><h2>One Seamless Team from Discovery to Deployment</h2><p className="service-page__index-summary">Traditional studios pass Figma files between disconnected research agencies, visual designers, and offshore development vendors, hoping nothing breaks in transit. We eliminate handoff failure points by keeping your product under one senior roof.</p></div></Reveal>
                        <div className="service-page__text-grid">{howWeWork.map(([title, text], index) => <Reveal className="service-page__text-grid-item" key={title} index={index}><h3>{title}</h3><p>{text}</p></Reveal>)}</div>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">CLIENT PARTNERSHIPS</p><h2>Built for Leaders Who Value Speed and Engineering Rigor</h2></div></Reveal>
                        <div className="service-page__text-grid">{audiences.map(([title, text, href, linkLabel], index) => { const isLast = index === audiences.length - 1 && audiences.length % 2 === 1; return <Reveal className={`service-page__text-grid-item${isLast ? " service-page__text-grid-item--wide" : ""}`} key={title} index={index}><h3>{title}</h3><p>{text}</p><Link href={href}>{linkLabel} <ArrowUpRight aria-hidden="true" size={14} /></Link></Reveal>; })}</div>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt" id="operating-model">
                    <div className="service-page__wrap">
                        <Reveal><div className="service-page__section-head"><p className="service-page__eyebrow">SPEED WITHOUT THE ASTERISK</p><h2>Why We Deliver 2x&ndash;3x Faster Without Cutting Corners</h2><p className="service-page__index-summary">Traditional agencies move slowly because of departmental silos, endless approval chains, and fragmented handoffs between design and engineering. We achieve compressed delivery cycles by unifying the entire pipeline.</p></div></Reveal>
                        <Reveal>
                            <div className="service-page__outcomes">
                                {operatingModel.map(([label, text]) => <p key={label}><Check aria-hidden="true" size={18} /><strong>{label}:</strong>&nbsp;{text}</p>)}
                            </div>
                        </Reveal>
                        <Reveal index={1}><p className="service-page__index-summary"><Link className="service-page__inline-link" href="/services/how-we-deliver">Explore the Complete Delivery Framework <ArrowUpRight aria-hidden="true" size={14} /></Link></p></Reveal>
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
