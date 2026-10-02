import type { Metadata } from "next";
import Link from "next/link";
import CookieSettingsButton from "@/components/CookieConsent/CookieSettingsButton";
import LegalPage from "@/components/LegalPage/LegalPage";
import { buildMetadata, CONTACT_EMAIL } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
    title: "Cookie Policy",
    description: "How Pixel Exact uses cookies and similar technologies on this website, and how to manage your preferences.",
    path: "/cookie-policy",
    noIndex: true,
});

export default function CookiePolicyPage() {
    return (
        <LegalPage
            eyebrow="PIXEL EXACT / COOKIE POLICY"
            title="Cookie Policy"
            effectiveDate="[10/01/2026]"
            intro="This Cookie Policy explains what cookies and similar technologies are, which ones this website actually uses, and how you can control them. It should be read alongside our Privacy Policy, which covers how we handle personal information more broadly."
        >
            <section>
                <h2>What cookies are</h2>
                <p>Cookies are small text files a website can store on your device to remember information between visits or requests. &ldquo;Similar technologies&rdquo; is a broader term that also covers things like browser local storage, which some of the tools described below use instead of a traditional cookie.</p>
            </section>

            <section>
                <h2>How this website uses cookies</h2>
                <p>This website uses a small number of these technologies, grouped into the categories below. Where you have a real choice, you can make it through the cookie banner, or anytime afterward via <CookieSettingsButton className="legal-content__inline-button" />, also available in the site footer.</p>
            </section>

            <section>
                <h2>Cookie categories</h2>

                <h3>Necessary</h3>
                <p>Required for the site to function: basic technical operation, security, and remembering the consent choice you make here. This also covers a small amount of browser local storage used to remember on-site display preferences you set directly, such as dark/light theme and text size. These aren&apos;t used for tracking and can&apos;t be switched off, because the features they support wouldn&apos;t work correctly without them.</p>

                <h3>Analytics</h3>
                <p>Used to understand how visitors use the website, so we can improve content, usability, and performance. This website currently uses <strong>Google Analytics</strong> for this purpose — see the dedicated section below.</p>

                <h3>Performance</h3>
                <p>Used for performance monitoring and technical diagnostics. No performance-monitoring technology is currently active on this website. This category exists so the consent system is ready if one is added in the future.</p>

                <h3>Functional</h3>
                <p>Used for optional convenience features beyond the core functionality covered under &ldquo;Necessary&rdquo; above. No optional functional technology is currently active on this website. This category exists so the consent system is ready if one is added in the future.</p>

                <h3>Marketing &amp; Advertising</h3>
                <p>Used for advertising and marketing measurement. No marketing or advertising technology is currently active on this website. This category exists so the consent system is ready if one is added in the future.</p>
            </section>

            <section>
                <h2>Google Analytics</h2>
                <p>This website uses Google Analytics (GA4) to measure site traffic and usage, such as which pages are visited and roughly how visitors arrived here. Google Analytics is provided by Google and operates according to Google&apos;s own privacy and data practices.</p>
                <p>This website uses Google&apos;s Consent Mode: Google Analytics loads on every visit, but whether it&apos;s allowed to use analytics storage (such as cookies) on your device is controlled by the Analytics choice you make in the cookie banner or preference center. Rejecting or not granting Analytics consent means Google Analytics will not use analytics storage for your visit.</p>
                <ul>
                    <li><strong>Provider:</strong> Google Analytics (Google LLC)</li>
                    <li><strong>Purpose:</strong> website traffic and usage measurement</li>
                    <li><strong>Data retention period:</strong> User-level and event-level data associated with cookies, user identifiers, and advertising identifiers are automatically retained for 14 months before deletion.</li>
                    <li><strong>Google's own privacy practices:</strong> You can review how Google processes your data by reading the official <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a> and find details regarding legal usage compliance via the <a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank" rel="noopener noreferrer">Google Analytics Terms of Service</a>.</li>
                </ul>
            </section>

            <section>
                <h2>Future tracking technologies</h2>
                <p>We may introduce additional analytics, performance, optimization, or similar technologies in the future. Where applicable, these will be categorized according to their purpose above and managed through the same consent controls described in this policy, rather than added silently.</p>
            </section>

            <section>
                <h2>Managing your preferences</h2>
                <p>You can change your choice at any time using <CookieSettingsButton className="legal-content__inline-button" /> (also in the site footer), which reopens the preference center shown on your first visit. You can also control or delete cookies and local storage through your browser&apos;s own settings; doing so may affect the preferences this site remembers for you.</p>
            </section>

            <section>
                <h2>How this relates to our Privacy Policy</h2>
                <p>This Cookie Policy focuses specifically on cookies, local storage, and similar technologies. For information about how we handle personal information submitted through our contact form, data retention, your rights, and other privacy practices, see our <Link href="/privacy-policy">Privacy Policy</Link>.</p>
            </section>

            <section>
                <h2>Changes to this policy</h2>
                <p>We may update this Cookie Policy as the website&apos;s use of cookies and similar technologies changes. The effective date at the top of this page reflects the most recent update. Where a change materially affects the choices available to you, we may ask you to make a new consent decision.</p>
            </section>

            <section>
                <h2>Contact us</h2>
                <p>Questions about this Cookie Policy can be sent to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
            </section>
        </LegalPage>
    );
}
