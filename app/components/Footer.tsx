import Link from 'next/link'

export function Footer() {
    return (
        <footer className="py-12 bg-iron-950 border-t border-silver-500/10 text-center md:text-left">
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <h4 className="font-serif text-xl text-white mb-4">KERNAL <span className="text-silver-500 text-base italic">&</span> ASSOCIATES</h4>
                    <p className="text-silver-500 text-sm mb-6">
                        <a href="https://www.google.com/maps/search/?api=1&query=1332+SW+89th+Street+Oklahoma+City+OK+73159" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            1332 SW 89th Street<br />Oklahoma City, OK 73159
                        </a>
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-xs text-silver-600 uppercase tracking-wider justify-center md:justify-start">
                        <Link href="/privacy" className="hover:text-silver-400 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-silver-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
                <div className="md:col-start-4">
                    <h5 className="text-white uppercase tracking-widest text-xs mb-4">Contact</h5>
                    <p className="text-silver-500 text-sm mb-2"><a href="tel:4053640601" className="hover:text-white">405.364.0601</a></p>
                    <p className="text-silver-500 text-sm"><a href="mailto:todd@kernallaw.com" className="hover:text-white">todd@kernallaw.com</a></p>
                </div>
            </div>
        </footer>
    )
}
