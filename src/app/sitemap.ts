import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        "",
        "/about",
        "/blog",
        "/case-studies",
        "/contact",
        "/services",
        "/services/ux-product-design",
        "/services/ui-design-systems",
        "/services/frontend-development",
        "/services/consultancy",
        "/services/design-toolkit",
        "/services/how-we-deliver",
        "/work",
    ];
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

    return routes.map((route) => ({
        url: `${siteUrl}${route}`,
        lastModified: new Date(),
    }));
}
