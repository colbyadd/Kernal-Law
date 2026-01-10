import { PageHero } from "../components/PageHero"

export default function PrivacyPage() {
    return (
        <main className="bg-iron-950 min-h-screen">
            <PageHero title="Privacy Policy" subtitle="Protecting your digital rights." />
            <div className="container mx-auto px-6 py-12 text-silver-400 max-w-4xl space-y-8 leading-relaxed">
                <p>Current as of January 2026.</p>
                <h2 className="text-2xl text-white font-serif">1. Information Collection</h2>
                <p>Kernal & Associates collects information you provide directly to us via our contact forms, including name, phone number, and email address. We do not sell this information to third parties.</p>

                <h2 className="text-2xl text-white font-serif">2. Use of Information</h2>
                <p>We use the information we collect to communicate with you regarding your legal inquiries and to improve our services.</p>

                <h2 className="text-2xl text-white font-serif">3. Data Security</h2>
                <p>We implement appropriate technical and organizational measures to protect your personal information.</p>
            </div>
        </main>
    )
}
