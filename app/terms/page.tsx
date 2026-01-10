import { PageHero } from "../components/PageHero"

export default function TermsPage() {
    return (
        <main className="bg-iron-950 min-h-screen">
            <PageHero title="Terms of Service" subtitle="Legal disclaimer and terms of use." />
            <div className="container mx-auto px-6 py-12 text-silver-400 max-w-4xl space-y-8 leading-relaxed">
                <p>Current as of January 2026.</p>
                <h2 className="text-2xl text-white font-serif">1. No Attorney-Client Relationship</h2>
                <p>The information on this website is for general purposes only and does not constitute legal advice. Viewing this site or submitting a form does not create an attorney-client relationship.</p>

                <h2 className="text-2xl text-white font-serif">2. Disclaimer</h2>
                <p>Past results do not guarantee future outcomes. Every case is different.</p>
            </div>
        </main>
    )
}
