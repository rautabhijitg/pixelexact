import type { Metadata } from "next";
import Reveal from "@/components/animations/Reveal";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { buildMetadata, CONTACT_EMAIL } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
    title: "Book a Consultation",
    description: "Tell Pixel Exact what you're working on. We'll tell you what it would take to design and build it, precisely, and in weeks.",
    path: "/contact",
});

export default function ContactPage() {
    return (
        <div className="service-page">
            <Header backHref="/" backLabel="Back home" />
            <main id="main-content">
                <section className="service-page__hero">
                    <div className="service-page__wrap service-page__hero-grid">
                        <div>
                            <p className="service-page__eyebrow">PIXEL EXACT / CONTACT</p>
                            <h1>Start a conversation.</h1>
                        </div>
                        <p className="service-page__summary">Tell us what you&apos;re working on and what better looks like. We reply directly, no sales process to sit through first.</p>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap service-page__intro-grid">
                        <Reveal><ContactForm /></Reveal>
                        <Reveal index={1}>
                            <div className="contact-next">
                                <p className="service-page__label">What happens next</p>
                                <p><strong>1. We read it.</strong> A senior person reviews what you send, not a queue.</p>
                                <p><strong>2. We reply directly.</strong> Usually with a question or two, or a straight answer.</p>
                                <p><strong>3. We scope it together.</strong> If it&apos;s a fit, we agree what the first weeks look like.</p>
                                <p className="contact-next__alt">Prefer email? Write to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
                            </div>
                        </Reveal>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
