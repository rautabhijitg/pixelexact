"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";
import Button from "@/components/Button/Button";
import BrowserChrome from "@/components/visuals/BrowserChrome";

const AUTOPLAY_MS = 6000;

type ContentSlide = {
    id: string;
    kind: "content";
    eyebrow: string;
    headline: string;
    body: string;
    cta: { label: string; href: string };
    image: { src: string; alt: string };
    /** Desktop only — mobile always stacks image above copy. */
    imagePosition: "left" | "right";
};

type HomeSlide = {
    id: string;
    kind: "home";
};

type Slide = HomeSlide | ContentSlide;

const slides: Slide[] = [
    { id: "home", kind: "home" },
    {
        id: "legacy-modernization",
        kind: "content",
        eyebrow: "Legacy Application Modernization",
        headline: "A modern experience. The same system underneath.",
        body: "Your application works. The interface doesn’t look like it does. We modernize the presentation layer, not the business logic, the workflows, or the backend you’ve already built operations around — shipped incrementally, with the old and new interface running side by side.",
        cta: { label: "Explore Legacy Modernization", href: "/services/legacy-application-modernization" },
        image: { src: "/images/services/Legacy_Modernisation.webp", alt: "Abstract representation of a legacy interface being modernized screen by screen" },
        imagePosition: "left",
    },
    {
        id: "ux-ui-design-systems",
        kind: "content",
        eyebrow: "UX, UI & Design Systems",
        headline: "Design, validated before it ships.",
        body: "Senior-led research, interface design, and governed design systems — accelerated by AI, never automated away from judgment. Every direction gets tested with real users before it reaches production.",
        cta: { label: "Explore UX & Product Design", href: "/services/ux-product-design" },
        image: { src: "/images/services/ux_services.webp", alt: "Abstract representation of user research and interface design work" },
        imagePosition: "right",
    },
    {
        id: "web-frontend-consultancy",
        kind: "content",
        eyebrow: "Websites, Frontend & Senior Consultancy",
        headline: "From a new website to a second opinion.",
        body: "Full website builds, production frontend engineering, or a focused consulting engagement when you need senior judgment without a multi-month commitment. Pick the scope that matches what you actually need.",
        cta: { label: "Explore Our Services", href: "/services" },
        image: { src: "/images/services/website-design.webp", alt: "Abstract representation of a modern website interface" },
        imagePosition: "left",
    },
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    // Lazy initializer runs on both server and client; matchMedia only
    // exists in the browser, so this only ever reflects the real preference
    // once hydrated, and stays false (the safe default) during SSR.
    const [reducedMotion, setReducedMotion] = useState(() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const liveRegionRef = useRef<HTMLDivElement>(null);

    // Only the current slide and the one coming up next ever render a real
    // <Image>, so slides 2-4 never compete with slide 1 for bandwidth on
    // load — each image is requested just before its slide is needed, not
    // all four up front. A previously-shown slide's image is already in the
    // browser's HTTP cache if the user navigates back to it.
    const shouldRenderImage = (index: number) => index === current || index === (current + 1) % slides.length;

    useEffect(() => {
        const query = window.matchMedia("(prefers-reduced-motion: reduce)");
        const onChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
        query.addEventListener("change", onChange);
        return () => query.removeEventListener("change", onChange);
    }, []);

    const goTo = useCallback((index: number) => {
        setCurrent(((index % slides.length) + slides.length) % slides.length);
    }, []);

    const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
    const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

    // Autoplay: paused on hover/focus, and never runs at all when the user
    // prefers reduced motion — an auto-advancing carousel is exactly the
    // kind of continuous movement that preference exists to suppress.
    useEffect(() => {
        if (paused || reducedMotion) return;
        timerRef.current = setInterval(() => {
            setCurrent((value) => (value + 1) % slides.length);
        }, AUTOPLAY_MS);
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [current, paused, reducedMotion]);

    useEffect(() => {
        if (!liveRegionRef.current) return;
        const slide = slides[current]!;
        const label = slide.kind === "home" ? "Pixel Exact" : slide.eyebrow;
        liveRegionRef.current.textContent = `Slide ${current + 1} of ${slides.length}: ${label}`;
    }, [current]);

    const handleFocus = () => setPaused(true);
    const handleBlur = (event: React.FocusEvent<HTMLElement>) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
    };

    return (
        <section
            className="pe__hero pe__hero-carousel"
            role="region"
            aria-roledescription="carousel"
            aria-label="Featured capabilities"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={handleFocus}
            onBlur={handleBlur}
        >
            <div className="sr-only" aria-live="polite" ref={liveRegionRef} />

            <div className="pe__hero-track">
                {slides.map((slide, index) => {
                    const isActive = index === current;
                    return (
                        <div
                            key={slide.id}
                            className={`pe__hero-slide${isActive ? " pe__hero-slide--active" : ""}`}
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`${index + 1} of ${slides.length}`}
                            aria-hidden={!isActive}
                        >
                            {slide.kind === "home" ? (
                                <div className="pe__wrap pe__hero-grid">
                                    <div>
                                        <p className="section-head__eyebrow">UX Design &amp; FrontEnd Engineering by Senior Specialists</p>
                                        <h1>Pixel-Perfect Design. Production-Ready Code.</h1>
                                        <p className="pe__hero-sub">Pixel Exact designs and builds end-to-end digital products with senior engineering rigor. By integrating AI-accelerated workflows with over 40 years of combined design and frontend expertise, we ship production-grade web interfaces in weeks—not months.</p>
                                        <div className="pe__hero-cta">
                                            <Button href="/contact" className="pe__button" icon={<ArrowUpRight aria-hidden="true" size={18} />} tabIndex={isActive ? 0 : -1}>Book a consultation</Button>
                                            <Button href="#work" variant="ghost" className="pe__button" icon={<ArrowDown aria-hidden="true" size={18} />} tabIndex={isActive ? 0 : -1}>View case studies</Button>
                                        </div>
                                    </div>
                                    <div className="artifact pe__ruler-frame">
                                        <BrowserChrome />
                                        <div className="pe__ruler">
                                            {["Unified Delivery: Research, UX architecture, and UI design led by one dedicated senior team.", "Zero-Fidelity Loss: Frontend engineering built to match design specifications down to the exact pixel. ", "AI-Accelerated Pipeline: AI-enabled efficiency embedded across every stage to compress delivery cycles. ", "Decoupled UI Modernization: Transform legacy frontends and design systems without disrupting your core backend architecture. "].map((label, lineIndex) => (
                                                <div className="pe__ruler-line" key={label}><span className="pe__ruler-number">0{lineIndex + 1}</span><span>{label}</span></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className={`pe__wrap pe__hero-grid pe__hero-grid--content${slide.imagePosition === "right" ? " pe__hero-grid--reverse" : ""}`}>
                                    <div className="pe__hero-visual">
                                        {shouldRenderImage(index) && (
                                            <Image src={slide.image.src} alt={slide.image.alt} fill sizes="(max-width: 900px) 100vw, 45vw" className="pe__hero-visual-image" priority={index === 0} />
                                        )}
                                    </div>
                                    <div className="pe__hero-copy">
                                        <p className="section-head__eyebrow">{slide.eyebrow}</p>
                                        <h2>{slide.headline}</h2>
                                        <p className="pe__hero-sub">{slide.body}</p>
                                        <div className="pe__hero-cta">
                                            <a className="pe__button" href={slide.cta.href} tabIndex={isActive ? 0 : -1}>{slide.cta.label} <ArrowUpRight aria-hidden="true" size={18} /></a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="pe__hero-controls">
                <button type="button" className="pe__hero-arrow" onClick={goPrev} aria-label="Previous slide">
                    <ArrowLeft aria-hidden="true" size={20} />
                </button>

                <div className="pe__hero-dots" role="tablist" aria-label="Slides">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.id}
                            type="button"
                            role="tab"
                            aria-selected={index === current}
                            aria-label={`Go to slide ${index + 1}${slide.kind === "content" ? `: ${slide.eyebrow}` : ""}`}
                            className={`pe__hero-dot${index === current ? " pe__hero-dot--active" : ""}`}
                            onClick={() => goTo(index)}
                        />
                    ))}
                </div>

                <button type="button" className="pe__hero-arrow" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Play slideshow" : "Pause slideshow"} aria-pressed={paused}>
                    {paused ? <Play aria-hidden="true" size={18} /> : <Pause aria-hidden="true" size={18} />}
                </button>

                <button type="button" className="pe__hero-arrow" onClick={goNext} aria-label="Next slide">
                    <ArrowRight aria-hidden="true" size={20} />
                </button>
            </div>
        </section>
    );
}
