import { PageHero } from "../components/PageHero"
import Link from "next/link"

export const metadata = {
    title: "Terms of Service",
    description: "Terms of use for Kernal & Associates, including website access, legal disclaimers, and texting terms.",
    alternates: { canonical: '/terms' },
    robots: {
        index: false,
        follow: true,
    },
}

export default function TermsPage() {
    return (
        <main className="bg-iron-950 min-h-screen">
            <PageHero title="Terms of Service" subtitle="Legal disclaimer and terms of use." />
            <div className="container mx-auto px-6 py-12 text-silver-400 max-w-4xl space-y-8 leading-relaxed">
                <p>Current as of February 2026.</p>

                <h2 className="text-2xl text-white font-serif">1. Acceptance of These Terms</h2>
                <p>
                    By accessing or using this website, you agree to these Terms of Service and our{" "}
                    <Link href="/privacy" className="text-accent-gold hover:underline">Privacy Policy</Link>. If you
                    do not agree, do not use this website.
                </p>

                <h2 className="text-2xl text-white font-serif">2. Informational Content Only</h2>
                <p>
                    Website content is provided for general informational purposes only and is not legal advice.
                    You should not act or refrain from acting based solely on website content. For legal advice,
                    contact an attorney directly.
                </p>

                <h2 className="text-2xl text-white font-serif">3. No Attorney-Client Relationship</h2>
                <p>
                    Viewing this website, sending a message, completing a form, calling, or texting us does not
                    by itself create an attorney-client relationship. An attorney-client relationship is formed only
                    after conflict review and a signed engagement agreement.
                </p>
                <p>
                    Do not send sensitive or privileged information until we confirm representation in writing.
                </p>

                <h2 className="text-2xl text-white font-serif">4. Text Messaging Terms</h2>
                <p>
                    If you provide a mobile number and opt in to text communications, you agree to these SMS/MMS
                    terms:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Texts may include intake follow-up, appointment reminders, case-related updates, and service communications.</li>
                    <li>Message frequency varies based on your inquiry and relationship with the firm.</li>
                    <li>Message and data rates may apply under your wireless plan.</li>
                    <li>Reply <strong className="text-white">STOP</strong> to opt out. Reply <strong className="text-white">HELP</strong> for assistance.</li>
                    <li>Opt-out requests are processed within a reasonable time, not to exceed 10 business days, and may be followed by one final confirmation text.</li>
                    <li>Consent to text messaging is not required to obtain legal services.</li>
                    <li>Carriers are not liable for delayed or undelivered messages.</li>
                </ul>
                <p>
                    You represent that you are the account holder or an authorized user for the number provided.
                    You may also revoke texting consent by calling{" "}
                    <a href="tel:4053640601" className="text-accent-gold hover:underline">405.364.0601</a> or
                    emailing{" "}
                    <a href="mailto:todd@kernallaw.com" className="text-accent-gold hover:underline">todd@kernallaw.com</a>.
                </p>

                <h2 className="text-2xl text-white font-serif">5. Permitted Use</h2>
                <p>
                    You agree not to misuse this website, attempt unauthorized access, disrupt site operations, or
                    use the website for unlawful activity.
                </p>

                <h2 className="text-2xl text-white font-serif">6. Intellectual Property</h2>
                <p>
                    Unless otherwise stated, website content, branding, text, and design are owned by Kernal &amp;
                    Associates and protected by applicable intellectual property laws.
                </p>

                <h2 className="text-2xl text-white font-serif">7. Third-Party Links and Services</h2>
                <p>
                    This website may link to third-party sites or tools. We are not responsible for the content,
                    security, or policies of third-party websites.
                </p>

                <h2 className="text-2xl text-white font-serif">8. Disclaimer and Limitation of Liability</h2>
                <p>
                    This website is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties
                    of any kind. To the fullest extent permitted by law, Kernal &amp; Associates disclaims all
                    liability arising from use of this website, including reliance on website content.
                </p>
                <p>Past results do not guarantee future outcomes. Every case is different.</p>

                <h2 className="text-2xl text-white font-serif">9. Governing Law and Venue</h2>
                <p>
                    These Terms are governed by Oklahoma law, without regard to conflict-of-law principles. Venue
                    for disputes relating to these Terms will be in courts located in Oklahoma County, Oklahoma,
                    unless applicable law requires otherwise.
                </p>

                <h2 className="text-2xl text-white font-serif">10. Changes to These Terms</h2>
                <p>
                    We may update these Terms at any time. Updates become effective when posted on this page. Your
                    continued use of the website after changes are posted means you accept the updated Terms.
                </p>

                <h2 className="text-2xl text-white font-serif">11. Contact</h2>
                <address className="not-italic space-y-1">
                    <p className="text-white">Kernal &amp; Associates</p>
                    <p>1332 SW 89th Street, Oklahoma City, OK 73159</p>
                    <p>
                        Phone:{" "}
                        <a href="tel:4053640601" className="text-accent-gold hover:underline">405.364.0601</a>
                    </p>
                    <p>
                        Email:{" "}
                        <a href="mailto:todd@kernallaw.com" className="text-accent-gold hover:underline">todd@kernallaw.com</a>
                    </p>
                </address>
            </div>
        </main>
    )
}
