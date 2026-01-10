import Link from 'next/link'

export default function NotFound() {
    return (
        <main className="bg-iron-950 min-h-screen flex items-center justify-center text-center px-6">
            <div className="space-y-8">
                <h1 className="font-serif text-9xl text-white opacity-20">404</h1>
                <h2 className="font-serif text-3xl text-white">Page Not Found</h2>
                <p className="text-silver-400 max-w-md mx-auto">
                    The page you are looking for does not exist. If you need legal assistance, do not delay.
                </p>
                <div className="pt-8">
                    <Link href="/" className="inline-block px-8 py-3 bg-white text-iron-950 uppercase tracking-widest font-bold hover:bg-silver-100 transition-colors">
                        Return Home
                    </Link>
                </div>
            </div>
        </main>
    )
}
