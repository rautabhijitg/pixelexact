import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage/ServicePage";
import { servicePages } from "@/components/ServicePage/serviceData";
import { buildMetadata } from "@/lib/seo";

const service = servicePages["frontend-application-development"];

export const metadata: Metadata = buildMetadata({
    title: `${service.title} Services`,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
});

export default function FrontendApplicationDevelopmentPage() {
    return <ServicePage slug="frontend-application-development" />;
}
