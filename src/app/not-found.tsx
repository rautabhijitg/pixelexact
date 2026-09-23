import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist or may have moved.",
    path: "/404",
    noIndex: true,
});

export default function NotFound() {
    return (
        <div className="service-page">
            <Header backHref="/" backLabel="Back home" />
            <main id="main-content">
                <section className="service-page__hero">
                    <div className="service-page__wrap service-page__hero-grid">
                        <div>
                            <p className="service-page__eyebrow">404</p>
                            <h1>This page doesn&apos;t exist.</h1>
                        </div>
                        <p className="service-page__summary">The link may be outdated, or the page may have moved. Here are a few places to pick up from.</p>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <div className="service-page__text-grid">
                            <div className="service-page__text-grid-item"><h3>Services</h3><p>See everything Pixel Exact does, from UX research to production frontend code.</p><Link href="/services">Explore services <ArrowUpRight aria-hidden="true" size={14} /></Link></div>
                            <div className="service-page__text-grid-item"><h3>Work</h3><p>A sample of the kind of engagements we take from research through to a shipped product.</p><Link href="/work">See our work <ArrowUpRight aria-hidden="true" size={14} /></Link></div>
                            <div className="service-page__text-grid-item"><h3>About</h3><p>Who we are, how we work, and why senior involvement changes the outcome.</p><Link href="/about">About Pixel Exact <ArrowUpRight aria-hidden="true" size={14} /></Link></div>
                            <div className="service-page__text-grid-item"><h3>Contact</h3><p>Tell us what you&apos;re working on and we&apos;ll tell you what it would take.</p><Link href="/contact">Book a consultation <ArrowUpRight aria-hidden="true" size={14} /></Link></div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
