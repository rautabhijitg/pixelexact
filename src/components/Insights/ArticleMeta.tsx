import { SITE_NAME } from "@/lib/seo";

type ArticleMetaProps = {
    publishedAt: string;
};

/**
 * Visible byline for Insights articles: publish date + author. Every
 * published article uses this (set via `publishedAt` in src/data/articles.ts
 * or inline in a bespoke page) so the structure stays identical as new
 * articles are added, whether they go through the generic [slug] template or
 * get a bespoke page.
 */
export default function ArticleMeta({ publishedAt }: ArticleMetaProps) {
    const formatted = new Date(`${publishedAt}T00:00:00Z`).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    });

    return (
        <p className="insight-page__meta">
            Published <time dateTime={publishedAt}>{formatted}</time> · Author: {SITE_NAME}
        </p>
    );
}
