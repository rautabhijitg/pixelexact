import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage/ServicePage";
import { servicePages } from "@/components/ServicePage/serviceData";
import { buildMetadata } from "@/lib/seo";

const service = servicePages["how-we-deliver"];

export const metadata: Metadata = buildMetadata({
    title: service.title,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
});

export default function HowWeDeliverPage() {
    return <ServicePage slug="how-we-deliver" />;
}
