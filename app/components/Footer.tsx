import Link from 'next/link'
import { CONTACT_EMAIL } from '@/lib/contact'

export function Footer() {
    return (
        <footer className="py-12 bg-iron-950 border-t border-silver-500/10 text-center md:text-left">
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <h2 className="font-serif text-xl text-white mb-4">KERNAL <span className="text-silver-500 text-base italic">&</span> ASSOCIATES</h2>
                    <p className="text-silver-500 text-sm mb-6">
                        <a href="https://www.google.com/maps/search/?api=1&query=1332+SW+89th+Street+Oklahoma+City+OK+73159" target="_blank" rel="noopener noreferrer" className="text-link hover:text-white transition-colors">
                            1332 SW 89th Street<br />Oklahoma City, OK 73159
                        </a>
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-xs text-silver-600 uppercase tracking-wider justify-center md:justify-start">
                        <Link href="/privacy" prefetch={false} className="text-link hover:text-silver-400 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" prefetch={false} className="text-link hover:text-silver-400 transition-colors">Terms of Service</Link>
                        <Link href="/case-results" prefetch={false} data-cta="footer_case_results" className="text-link hover:text-silver-400 transition-colors">Case Results</Link>
                        <Link href="/client-reviews" prefetch={false} data-cta="footer_client_reviews" className="text-link hover:text-silver-400 transition-colors">Client Reviews</Link>
                        <Link href="/fees" prefetch={false} data-cta="footer_fees" className="text-link hover:text-silver-400 transition-colors">Fees</Link>
                    </div>
                </div>
                <div>
                    <h3 className="text-white uppercase tracking-widest text-xs mb-4">Practice Areas</h3>
                    <p className="text-silver-500 text-sm mb-2"><Link href="/criminal-defense" prefetch={false} data-cta="footer_criminal_defense" className="text-link hover:text-white transition-colors">Criminal Defense</Link></p>
                    <p className="text-silver-500 text-sm mb-2"><Link href="/personal-injury" prefetch={false} data-cta="footer_personal_injury" className="text-link hover:text-white transition-colors">Personal Injury</Link></p>
                    <p className="text-silver-500 text-sm mb-2"><Link href="/resources" prefetch={false} data-cta="footer_resources" className="text-link hover:text-white transition-colors">Legal Resources</Link></p>
                    <p className="text-silver-500 text-sm mb-2"><Link href="/locations" prefetch={false} data-cta="footer_locations" className="text-link hover:text-white transition-colors">Locations</Link></p>
                </div>
                <div className="md:col-start-4">
                    <h3 className="text-white uppercase tracking-widest text-xs mb-4">Contact</h3>
                    <p className="text-silver-500 text-sm mb-2"><a href="tel:4053640601" className="text-link hover:text-white">405.364.0601</a></p>
                    <p className="text-silver-500 text-sm"><a href={`mailto:${CONTACT_EMAIL}`} className="text-link hover:text-white">{CONTACT_EMAIL}</a></p>
                    <div className="text-silver-500 text-sm mt-3 flex flex-col items-center md:items-start">
                        <Link href="/oklahoma-city" prefetch={false} data-cta="footer_oklahoma_city" className="text-link hover:text-white block py-2">Oklahoma City</Link>
                        <Link href="/norman" prefetch={false} data-cta="footer_norman" className="text-link hover:text-white block py-2">Norman</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
