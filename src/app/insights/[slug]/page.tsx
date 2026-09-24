import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { servicePages } from "@/components/ServicePage/serviceData";
import { articles } from "@/data/articles";
import { absoluteUrl, buildMetadata, SITE_NAME } from "@/lib/seo";

type ArticlePageProps = {
    params: Promise<{ slug: string }>;
};

// These slugs have their own bespoke pages (their content doesn't fit this
// generic flat-paragraph template) — exclude them here so this route doesn't
// try to statically generate the same path twice.
const BESPOKE_ARTICLE_SLUGS = new Set([
    "design-to-development-handoff-checklist",
    "how-we-deliver-projects-in-weeks-not-months",
]);

export function generateStaticParams() {
    return articles
        .filter((entry) => !BESPOKE_ARTICLE_SLUGS.has(entry.slug))
        .map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
    const { slug } = await params;
    const entry = articles.find((item) => item.slug === slug);

    if (!entry) {
        return buildMetadata({ title: "Insights", description: "Notes on UX, UI, and frontend craft from Pixel Exact.", path: "/insights", noIndex: true });
    }

    return buildMetadata({
        title: entry.seoTitle ?? entry.title,
        description: entry.metaDescription ?? entry.dek,
        path: `/insights/${entry.slug}`,
        // Not published yet — this is a "coming soon" stub, not real content;
        // keep it out of search results until the full article is written.
        noIndex: entry.status !== "published",
    });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params;
    const entry = articles.find((item) => item.slug === slug);

    if (!entry) {
        notFound();
    }

    const relatedService = entry.relatedService ? servicePages[entry.relatedService] : undefined;
    const isPublished = entry.status === "published" && entry.publishedAt && entry.body;

    const articleJsonLd = isPublished ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: entry.title,
        description: entry.dek,
        datePublished: entry.publishedAt,
        url: absoluteUrl(`/insights/${entry.slug}`),
        publisher: { "@type": "Organization", name: SITE_NAME },
    } : null;

    return (
        <div className="insight-page">
            {articleJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />}
            <Header backHref="/insights" backLabel="All insights" />
            <Breadcrumb items={[{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }, { name: entry.title, path: `/insights/${entry.slug}` }]} />

            <main id="main-content">
                <section className="service-page__hero">
                    <div className="service-page__wrap service-page__hero-grid">
                        <div>
                            <p className="service-page__eyebrow">{entry.topic}</p>
                            <h1>{entry.title}</h1>
                        </div>
                        <p className="service-page__summary">{entry.dek}</p>
                    </div>
                </section>

                <section className="service-page__section">
                    <div className="service-page__wrap">
                        <Reveal>
                            {isPublished ? (
                                <div>{entry.body!.map((paragraph) => <p className="service-page__intro" key={paragraph}>{paragraph}</p>)}</div>
                            ) : (
                                <p className="service-page__intro">This article is in progress. The summary above reflects what it will cover; the full write-up isn&apos;t published yet.</p>
                            )}
                        </Reveal>
                    </div>
                </section>

                {relatedService && (
                    <section className="service-page__section service-page__section--alt">
                        <div className="service-page__wrap">
                            <Reveal>
                                <div className="service-page__outcomes">
                                    <p className="service-page__label">Related service</p>
                                    <p><Link className="service-page__inline-link" href={`/services/${relatedService.slug}`}>{relatedService.title} <ArrowUpRight aria-hidden="true" size={14} /></Link></p>
                                </div>
                            </Reveal>
                        </div>
                    </section>
                )}

                <section className="service-page__cta"><div className="service-page__wrap"><p className="service-page__eyebrow">READY WHEN YOU ARE</p><h2>Want to talk this through?</h2><p>Tell us where the work is stuck and what better looks like.</p><Link className="service-page__button" href="/contact">Book a Consultation <ArrowUpRight aria-hidden="true" size={18} /></Link></div></section>
            </main>
            <Footer />
        </div>
    );
}
