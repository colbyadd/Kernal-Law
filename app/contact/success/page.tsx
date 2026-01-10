import Link from 'next/link'

export default function SuccessPage() {
    return (
        <main className="bg-iron-950 min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-iron-900 to-iron-950 z-0" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-iron-800 via-transparent to-transparent opacity-50 z-0" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-2xl mx-auto border border-silver-500/20 bg-iron-900/50 p-12 backdrop-blur-sm">
                    <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">Message Received</h1>
                    <p className="text-silver-400 text-lg mb-8 leading-relaxed">
                        Thank you for contacting Kernal & Associates. Your information has been securely transmitted.
                        We review all inquiries promptly and will be in touch with you shortly.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link href="/" className="px-8 py-3 bg-white text-iron-950 font-bold uppercase tracking-widest hover:bg-silver-100 transition-colors text-sm">
                            Return Home
                        </Link>
                        <a href="tel:4053640601" className="px-8 py-3 border border-silver-500/30 text-silver-100 font-bold uppercase tracking-widest hover:bg-white/5 transition-colors text-sm">
                            Call Immediately
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}
