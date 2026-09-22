import type { Metadata } from "next";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
export const SITE_NAME = "Pixel Exact";
export const CONTACT_EMAIL = "hello@pixelexact.com";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/pixelexact-logo-color.svg`;

type BuildMetadataOptions = {
    title: string;
    description: string;
    path: string;
    ogImage?: string;
    noIndex?: boolean;
};

export function absoluteUrl(path: string): string {
    return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export function buildMetadata({ title, description, path, ogImage, noIndex }: BuildMetadataOptions): Metadata {
    const url = absoluteUrl(path);
    const image = ogImage ?? DEFAULT_OG_IMAGE;

    return {
        title,
        description,
        alternates: { canonical: url },
        robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
        openGraph: {
            title,
            description,
            url,
            siteName: SITE_NAME,
            type: "website",
            images: [{ url: image }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
    };
}

export function organizationJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: DEFAULT_OG_IMAGE,
        description: "Senior-led, AI-enabled UX, UI, and frontend development studio.",
        email: CONTACT_EMAIL,
    };
}

export function websiteJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
    };
}

export type BreadcrumbItem = {
    name: string;
    path: string;
};

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: absoluteUrl(item.path),
        })),
    };
}
