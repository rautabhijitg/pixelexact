import Link from "next/link";
import { ArrowUpRight, Check, CircleArrowRight } from "lucide-react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { servicePages } from "./serviceData";

type ServicePageProps = {
    slug: string;
};

export default function ServicePage({ slug }: ServicePageProps) {
    const service = servicePages[slug];

    if (!service) {
        return null;
    }

    return (
        <div className="service-page">
            <Header backHref="/#services" backLabel="All services" />

            <main id="main-content">
                <section className="service-page__hero">
                    <div className="service-page__wrap service-page__hero-grid">
                        <div>
                            <p className="service-page__eyebrow">{service.eyebrow}</p>
                            <h1>{service.title}</h1>
                        </div>
                        <p className="service-page__summary">{service.summary}</p>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap service-page__intro-grid">
                        <p className="service-page__intro">{service.intro}</p>
                        <div className="service-page__outcomes"><p className="service-page__label">What this unlocks</p>{service.outcomes.map((outcome) => <p key={outcome}><Check aria-hidden="true" size={18} />{outcome}</p>)}</div>
                    </div>
                </section>

                <section className="service-page__section service-page__section--alt">
                    <div className="service-page__wrap">
                        <div className="service-page__section-head"><p className="service-page__eyebrow">THE WORK</p><h2>Built for the details that matter.</h2></div>
                        <div className="service-page__deliverables">{service.deliverables.map((deliverable, index) => <div className="service-page__deliverable" key={deliverable}><span>0{index + 1}</span><h3>{deliverable}</h3></div>)}</div>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <div className="service-page__section-head"><p className="service-page__eyebrow">OUR APPROACH</p><h2>Clear at every turn.</h2></div>
                        <div className="service-page__process">{service.process.map(([title, description], index) => <article className="service-page__process-step" key={title}><span>0{index + 1}</span><h3><CircleArrowRight aria-hidden="true" size={22} />{title}</h3><p>{description}</p></article>)}</div>
                    </div>
                </section>

                <section className="service-page__cta"><div className="service-page__wrap"><p className="service-page__eyebrow">READY WHEN YOU ARE</p><h2>Let&apos;s make the next decision clearer.</h2><p>Tell us where the work feels stuck and what better looks like.</p><Link className="service-page__button" href="/contact">Start a conversation <ArrowUpRight aria-hidden="true" size={18} /></Link></div></section>
            </main>

            <Footer />
        </div>
    );
}
