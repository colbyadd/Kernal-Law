import Link from 'next/link'

export default function NotFound() {
    return (
        <main className="bg-iron-950 min-h-screen flex items-center justify-center text-center px-6">
            <div className="space-y-8">
                <p className="font-serif text-9xl text-white opacity-20" aria-hidden="true">404</p>
                <h1 className="font-serif text-3xl text-white">Page Not Found</h1>
                <p className="text-silver-400 max-w-md mx-auto">
                    The page you requested could not be found. Return to the homepage to continue browsing.
                </p>
                <div className="pt-8">
                    <Link href="/" prefetch={false} className="inline-block px-8 py-3 bg-white text-iron-950 uppercase tracking-widest font-bold hover:bg-silver-100 transition-colors">
                        Return Home
                    </Link>
                </div>
            </div>
        </main>
    )
}
