import type { MetadataRoute } from "next";
import { serviceOrder } from "@/components/ServicePage/serviceData";
import { articles } from "@/data/articles";
import { caseStudies } from "@/data/caseStudies";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = [
        "",
        "/about",
        "/services",
        ...serviceOrder.map((slug) => `/services/${slug}`),
        "/services/how-we-deliver",
        "/work",
        "/insights",
        "/contact",
        "/privacy-policy",
        "/disclaimer",
    ];

    const workRoutes = caseStudies.map((entry) => ({
        url: `${SITE_URL}/work/${entry.slug}`,
        lastModified: entry.publishedAt,
    }));

    // Exclude articles that aren't published yet — they're marked noindex
    // (thin "coming soon" placeholder content) so they shouldn't appear here either.
    const insightsRoutes = articles
        .filter((entry) => entry.status === "published")
        .map((entry) => ({
            url: `${SITE_URL}/insights/${entry.slug}`,
            lastModified: entry.publishedAt,
        }));

    return [
        ...staticRoutes.map((route) => ({ url: `${SITE_URL}${route}` })),
        ...workRoutes,
        ...insightsRoutes,
    ];
}
