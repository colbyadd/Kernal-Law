import Link from 'next/link'
import { CinematicHero } from '../components/CinematicHero'

export const metadata = {
    title: "Message Received | Kernal & Associates",
    description: "Thank you for contacting Kernal & Associates. We will review your message and contact you shortly.",
}

export default function SuccessPage() {
    return (
        <main className="bg-iron-950 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">

            {/* Ambient Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-iron-950 via-iron-950/90 to-iron-900/50" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="mb-8">
                    <span className="inline-block px-4 py-1 border border-accent-gold/30 text-accent-gold text-xs uppercase tracking-[0.2em] bg-iron-950/50 backdrop-blur-sm mb-6">
                        Submission Confirmed
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">
                        Message <span className="text-silver-500">Received.</span>
                    </h1>
                    <p className="text-silver-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                        Thank you for contacting Kernal & Associates. We review every inquiry personally.
                        If your matter is urgent, please call our office immediately.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-iron-950 text-sm uppercase tracking-widest font-bold hover:bg-silver-100 transition-colors"
                    >
                        Return Home
                    </Link>
                    <a
                        href="tel:4053640601"
                        className="inline-flex items-center justify-center px-8 py-4 border border-silver-500/30 text-silver-100 text-sm uppercase tracking-widest hover:bg-white/5 transition-colors"
                    >
                        Call 405.364.0601
                    </a>
                </div>
            </div>
        </main>
    )
}
