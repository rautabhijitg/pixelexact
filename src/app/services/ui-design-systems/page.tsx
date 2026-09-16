import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage/ServicePage";
import { servicePages } from "@/components/ServicePage/serviceData";
import { buildMetadata } from "@/lib/seo";

const service = servicePages["ui-design-systems"];

export const metadata: Metadata = buildMetadata({
    title: `${service.title} Services`,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
});

export default function UiDesignSystemsPage() {
    return <ServicePage slug="ui-design-systems" />;
}
