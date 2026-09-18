import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage/LegalPage";
import { buildMetadata, CONTACT_EMAIL } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
    title: "Privacy Policy",
    description: "How Pixel Exact collects, uses, and protects information submitted through this website.",
    path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
    return (
        <LegalPage
            eyebrow="PIXEL EXACT / PRIVACY POLICY"
            title="Privacy Policy"
            effectiveDate="[EFFECTIVE DATE]"
            intro="This Privacy Policy explains what information Pixel Exact collects through this website, why we collect it, and how it's handled. It covers the entire site, including the contact form, and reflects only the data practices this site actually uses."
        >
            <section>
                <h2>Who we are</h2>
                <p>Pixel Exact (&ldquo;Pixel Exact,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a design and frontend development studio. This policy applies to visitors of this website and to anyone who submits our contact form.</p>
                <ul>
                    <li>Legal entity: [LEGAL BUSINESS NAME]</li>
                    <li>Address: [BUSINESS ADDRESS]</li>
                    <li>Governing jurisdiction: [JURISDICTION]</li>
                </ul>
            </section>

            <section>
                <h2>Information we collect</h2>
                <p>We collect information in one place: the contact form on our <Link href="/contact">Contact page</Link>. The form asks for:</p>
                <ul>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Company (optional)</li>
                    <li>Your message, describing what you&apos;re working on</li>
                </ul>
                <p>The form also includes a hidden field used only to detect automated spam submissions. It isn&apos;t visible to visitors and isn&apos;t used to collect information about people.</p>
                <p>We don&apos;t use cookies, analytics tools, advertising pixels, or any tracking scripts on this website.</p>
            </section>

            <section>
                <h2>Local storage for site preferences</h2>
                <p>This website uses your browser&apos;s local storage, not cookies, to remember two display preferences: your chosen theme (dark or light) and your preferred text size. These preferences are stored only on your own device, are never transmitted to us or anyone else, and can be cleared at any time through your browser settings.</p>
            </section>

            <section>
                <h2>How we use your information</h2>
                <p>We use the information submitted through the contact form only to respond to your enquiry, for example, to reply about a potential project. We don&apos;t use it for marketing or advertising, and we don&apos;t sell, rent, or share it with third parties for their own marketing purposes.</p>
            </section>

            <section>
                <h2>How your information is processed and stored</h2>
                <p>When you submit the contact form, your message is sent as an email using Resend, a third-party transactional email delivery service, to our inbox. We don&apos;t store contact form submissions in a database.</p>
                <p>Resend may retain transactional data, such as delivery logs, for a period defined by its own policies. [PLACEHOLDER — CONFIRM RESEND&apos;S DATA RETENTION PERIOD AND LINK TO ITS PRIVACY POLICY]</p>
                <p>We keep the emails we receive in our own inbox for as long as reasonably necessary to handle your enquiry. [PLACEHOLDER — DATA RETENTION PERIOD]</p>
            </section>

            <section>
                <h2>Hosting</h2>
                <p>This website is hosted by [PLACEHOLDER — HOSTING PROVIDER]. As with most web hosting, the hosting provider may automatically log basic technical information, such as IP address, browser type, and request timestamps, as part of standard server operation. We don&apos;t add any analytics layer on top of this.</p>
            </section>

            <section>
                <h2>Third-party services</h2>
                <p>The only third-party service this website relies on to process personal information is Resend, used solely for email delivery of contact form submissions, as described above. This website doesn&apos;t integrate any analytics, advertising, social media, or customer-relationship-management tools.</p>
            </section>

            <section>
                <h2>Children&apos;s privacy</h2>
                <p>This website isn&apos;t directed at children, and we don&apos;t knowingly collect information from children.</p>
            </section>

            <section>
                <h2>Your rights</h2>
                <p>Depending on where you&apos;re located, you may have rights over the personal information you send us, including the right to request access to, correction of, or deletion of your information. To exercise these rights, contact us using the details below. [PLACEHOLDER — JURISDICTION-SPECIFIC RIGHTS LANGUAGE, E.G. GDPR/CCPA, IF APPLICABLE]</p>
            </section>

            <section>
                <h2>Changes to this policy</h2>
                <p>We may update this Privacy Policy as the website&apos;s functionality changes. The effective date at the top of this page reflects the most recent update.</p>
            </section>

            <section>
                <h2>Contact us</h2>
                <p>Questions about this Privacy Policy or how your information is handled can be sent to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
            </section>
        </LegalPage>
    );
}
