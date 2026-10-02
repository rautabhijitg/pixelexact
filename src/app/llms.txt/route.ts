import { NextResponse } from "next/server";
import { serviceOrder, servicePages } from "@/components/ServicePage/serviceData";
import { articles } from "@/data/articles";
import { caseStudies } from "@/data/caseStudies";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

// Follows the llms.txt convention (https://llmstxt.org): a short, markdown
// summary of the site plus links to its key pages, aimed at AI systems that
// read this instead of (or alongside) crawling the full HTML.
export const dynamic = "force-static";

export function GET() {
    const services = serviceOrder
        .map((slug) => `- [${servicePages[slug].title}](${SITE_URL}/services/${slug})`)
        .join("\n");

    const work = caseStudies
        .map((entry) => `- [${entry.title}](${SITE_URL}/work/${entry.slug}): ${entry.summary}`)
        .join("\n");

    const insights = articles
        .filter((entry) => entry.status === "published")
        .map((entry) => `- [${entry.title}](${SITE_URL}/insights/${entry.slug}): ${entry.dek}`)
        .join("\n");

    const body = `# ${SITE_NAME}

> Senior-led, AI-enabled UX, UI, and frontend development studio. Pixel-accurate execution, design and code held together, delivered fast.

## Services
${services}

## Work
${work}

## Insights
${insights}

## Other pages
- [About](${SITE_URL}/about)
- [Contact](${SITE_URL}/contact)
`;

    return new NextResponse(body, {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
}
