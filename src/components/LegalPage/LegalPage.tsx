import type { ReactNode } from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

type LegalPageProps = {
    eyebrow: string;
    title: string;
    effectiveDate: string;
    intro: ReactNode;
    children: ReactNode;
};

export default function LegalPage({ eyebrow, title, effectiveDate, intro, children }: LegalPageProps) {
    return (
        <div className="service-page">
            <Header backHref="/" backLabel="Back home" />
            <main id="main-content">
                <section className="service-page__hero">
                    <div className="service-page__wrap">
                        <p className="service-page__eyebrow">{eyebrow}</p>
                        <h1>{title}</h1>
                        <p className="legal-meta">Effective date: {effectiveDate}</p>
                        <p className="service-page__index-summary">{intro}</p>
                    </div>
                </section>
                <section className="service-page__section">
                    <div className="service-page__wrap legal-content">{children}</div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
