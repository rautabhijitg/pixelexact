import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage/LegalPage";
import { buildMetadata, CONTACT_EMAIL } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
    title: "Disclaimer",
    description: "The terms on which the content of the Pixel Exact website is provided.",
    path: "/disclaimer",
});

export default function DisclaimerPage() {
    return (
        <LegalPage
            eyebrow="PIXEL EXACT / DISCLAIMER"
            title="Disclaimer"
            effectiveDate="[EFFECTIVE DATE]"
            intro="This page explains the terms on which the content of this website is provided. It applies to everyone who visits or uses this site."
        >
            <section>
                <h2>General information</h2>
                <p>The content on this website, including service descriptions, case studies, and articles, is provided for general informational purposes about Pixel Exact and the work we do. It isn&apos;t exhaustive and may not reflect the most current details of our services at all times.</p>
            </section>

            <section>
                <h2>No professional advice</h2>
                <p>Nothing on this website constitutes legal, financial, technical, or other professional advice. Descriptions of our design and development process, methods, and outcomes are provided to help you understand how we work, not as a substitute for a scoped conversation about your specific project. Decisions about your product or business should be made in direct consultation with us or another qualified advisor.</p>
            </section>

            <section>
                <h2>Accuracy and completeness</h2>
                <p>We take reasonable care to keep the information on this website accurate and up to date, but we make no representations or warranties, express or implied, about its completeness, accuracy, reliability, or availability. Case studies and project summaries describe our understanding of past work and may be simplified for presentation.</p>
            </section>

            <section>
                <h2>External links</h2>
                <p>This website may link to third-party websites or resources. These links are provided for convenience only. We don&apos;t control, endorse, or take responsibility for the content, accuracy, or practices of any linked third-party site.</p>
            </section>

            <section>
                <h2>Third-party and client-related content</h2>
                <p>Where this website references client work, case studies, or outcomes, that content reflects our own account of the engagement at the time it was published and may be anonymized or generalized. It shouldn&apos;t be read as a guarantee of similar results for any other project.</p>
            </section>

            <section>
                <h2>Website availability</h2>
                <p>We aim to keep this website available and functioning correctly, but we don&apos;t guarantee that it will be uninterrupted, error-free, or free of technical issues, and we may update, suspend, or remove content or functionality at any time without notice.</p>
            </section>

            <section>
                <h2>Intellectual property</h2>
                <p>Unless otherwise stated, the content, design, and code of this website belong to Pixel Exact. You may view and share pages of this website for personal, non-commercial reference, but you may not reproduce, redistribute, or reuse the underlying design, code, or written content without our permission.</p>
            </section>

            <section>
                <h2>Changes to this disclaimer</h2>
                <p>We may update this Disclaimer from time to time as the website changes. The effective date at the top of this page reflects the most recent update.</p>
            </section>

            <section>
                <h2>Limitation of reliance and liability</h2>
                <p>Any reliance you place on the information on this website is at your own risk. To the fullest extent permitted by applicable law, Pixel Exact isn&apos;t liable for any loss or damage arising from your use of, or reliance on, this website&apos;s content. If you&apos;re making a decision based on something you&apos;ve read here, we&apos;d rather you ask us directly first, contact details are below.</p>
            </section>

            <section>
                <h2>Contact us</h2>
                <p>Questions about this Disclaimer can be sent to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
            </section>
        </LegalPage>
    );
}
