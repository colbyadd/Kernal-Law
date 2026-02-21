import { PageHero } from "../components/PageHero"

export const metadata = {
    title: "Privacy Policy",
    description: "Kernal & Associates privacy policy. How we collect, use, and protect your personal information, including SMS and text messaging disclosures.",
    alternates: { canonical: '/privacy' },
    robots: {
        index: false,
        follow: true,
    },
}

export default function PrivacyPage() {
    return (
        <main className="bg-iron-950 min-h-screen">
            <PageHero title="Privacy Policy" subtitle="Protecting your digital rights." />
            <div className="container mx-auto px-6 py-12 text-silver-400 max-w-4xl space-y-8 leading-relaxed">
                <p>Current as of February 2026.</p>

                <h2 className="text-2xl text-white font-serif">1. Information Collection</h2>
                <p>
                    Kernal &amp; Associates (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects
                    information you provide directly through our website contact forms, phone calls, emails, and text
                    messages. This may include your name, phone number, email address, and details about your legal
                    matter. We do not sell your personal information to third parties.
                </p>
                <p>
                    We may also collect limited technical information automatically when you use this site, such as
                    IP address, browser type, device information, pages viewed, and referring URLs.
                </p>

                <h2 className="text-2xl text-white font-serif">2. Use of Information</h2>
                <p>
                    We use the information we collect to respond to your inquiries, evaluate your potential case,
                    communicate with you regarding your legal matters, and improve our services. We may contact you
                    by phone, email, or text message at the number or address you provide to us.
                </p>

                <h2 className="text-2xl text-white font-serif">3. How We Share Information</h2>
                <p>We may share personal information only in limited circumstances, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>With service providers that help us operate the website, intake process, or communications systems</li>
                    <li>When required by law, court order, or legal process</li>
                    <li>To protect rights, safety, and security of clients, visitors, or the public</li>
                    <li>With your direction or consent</li>
                </ul>
                <p>
                    We do not sell personal information. We also do not share SMS opt-in data or consent records with
                    third parties for their own marketing.
                </p>

                <h2 className="text-2xl text-white font-serif">4. Communications &amp; Text Messaging</h2>
                <p>
                    By submitting a contact form on our website or otherwise providing your phone number, you
                    expressly consent to receive communications from Kernal &amp; Associates, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Phone calls, including calls made using automated dialing technology</li>
                    <li>Text messages (SMS and MMS) related to your inquiry or legal matter</li>
                    <li>Emails at the email address you provide</li>
                </ul>
                <p>
                    <strong className="text-white">Message frequency:</strong> Message frequency varies based on
                    the nature of your inquiry and your ongoing communication with our firm. We will not send you
                    unsolicited marketing messages via text.
                </p>
                <p>
                    <strong className="text-white">Message &amp; data rates may apply.</strong> Your carrier&rsquo;s
                    standard messaging and data rates apply to any text messages you send to or receive from us.
                    Kernal &amp; Associates is not responsible for any fees charged by your wireless provider.
                </p>
                <p>
                    <strong className="text-white">Opt-out:</strong> You may opt out of receiving text messages at
                    any time by replying <strong className="text-white">STOP</strong> to any message you receive
                    from us. After opting out, you will receive a final confirmation message and will no longer
                    receive texts from us unless you re-subscribe or initiate a new inquiry.
                </p>
                <p>
                    <strong className="text-white">Help:</strong> For assistance, reply{" "}
                    <strong className="text-white">HELP</strong> to any text message or call us at{" "}
                    <a href="tel:4053640601" className="text-accent-gold hover:underline">405.364.0601</a>.
                </p>
                <p>
                    Consent to receive communications is not a condition of purchasing any goods or services from
                    our firm. You may contact us by other means if you prefer not to be contacted by phone or text.
                </p>
                <p>
                    Carriers are not liable for delayed or undelivered messages. We process opt-out requests
                    within a reasonable time, not to exceed 10 business days, and maintain reasonable consent records
                    for compliance and auditing purposes.
                </p>

                <h2 className="text-2xl text-white font-serif">5. Data Retention</h2>
                <p>
                    We retain personal information for as long as reasonably necessary to provide services, manage
                    client matters, maintain records, resolve disputes, and comply with legal obligations.
                </p>

                <h2 className="text-2xl text-white font-serif">6. Data Security</h2>
                <p>
                    We implement appropriate technical and organizational measures to protect your personal
                    information against unauthorized access, alteration, disclosure, or destruction. Form submissions
                    are transmitted over encrypted connections (HTTPS). However, no method of electronic transmission
                    or storage is 100% secure, and we cannot guarantee absolute security.
                </p>

                <h2 className="text-2xl text-white font-serif">7. Third-Party Services</h2>
                <p>
                    Our website uses third-party services to operate effectively. These include Netlify for website
                    hosting and form processing, and Google services (Analytics, Maps) for site analytics and
                    embedded maps. These providers may collect certain technical data (e.g., IP address, browser type)
                    in accordance with their own privacy policies. We do not sell or share your personal information
                    with third parties for marketing purposes.
                </p>

                <h2 className="text-2xl text-white font-serif">8. Cookies &amp; Tracking</h2>
                <p>
                    Our website may use cookies and similar tracking technologies to analyze usage patterns and
                    improve your browsing experience. You may control cookie preferences through your browser
                    settings. Disabling cookies may affect some website functionality.
                </p>

                <h2 className="text-2xl text-white font-serif">9. Your Rights and Choices</h2>
                <p>
                    You have the right to request access to, correction of, or deletion of the personal information
                    we hold about you. To exercise any of these rights, please contact us using the information
                    provided below.
                </p>
                <p>
                    You may opt out of SMS at any time by replying <strong className="text-white">STOP</strong>, and
                    you may request communications preferences by contacting our office directly.
                </p>

                <h2 className="text-2xl text-white font-serif">10. Children&rsquo;s Privacy</h2>
                <p>
                    Our website and services are not directed to individuals under the age of 13. We do not
                    knowingly collect personal information from children under 13. If we become aware that we have
                    collected such information, we will take steps to delete it promptly.
                </p>

                <h2 className="text-2xl text-white font-serif">11. Changes to This Policy</h2>
                <p>
                    We may update this privacy policy from time to time. Any changes will be reflected on this page,
                    and the &ldquo;current as of&rdquo; date at the top will be updated accordingly. We encourage you
                    to review this page periodically.
                </p>

                <h2 className="text-2xl text-white font-serif">12. Contact Us</h2>
                <p>
                    If you have questions or concerns about this privacy policy or our data practices, please
                    contact us:
                </p>
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
