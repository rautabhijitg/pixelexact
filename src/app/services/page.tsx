import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { servicePages } from "@/components/ServicePage/serviceData";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function ServicesPage() {
    return (
        <div className="service-page service-page--index">
            <Header backHref="/" backLabel="Back home" />
            <main id="main-content"><section className="service-page__hero"><div className="service-page__wrap"><p className="service-page__eyebrow">PIXEL EXACT / SERVICES</p><h1>One senior team from first question to final commit.</h1><p className="service-page__index-summary">Choose the kind of clarity your product needs next.</p></div></section>
                <section className="service-page__section"><div className="service-page__wrap"><div className="service-page__service-index">{Object.values(servicePages).map((service, index) => <Link className="service-page__service-card" href={`/services/${service.slug}`} key={service.slug}><span>0{index + 1}</span><h2>{service.title}</h2><p>{service.summary}</p><ArrowUpRight aria-hidden="true" size={22} /></Link>)}</div></div></section>
            </main>
            <Footer />
        </div>
    );
}
