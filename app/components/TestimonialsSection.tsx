import Link from 'next/link'

interface Testimonial {
    quote: string
    author: string
    rating: number
}

const testimonials: Testimonial[] = [
    {
        quote: "Todd is a phenomenal attorney. I put myself in a terrible situation and he was there with me every step of the way with a plethora of information and help. Without him, I would absolutely not be a free woman at this moment.",
        author: "Kelsie B.",
        rating: 5
    },
    {
        quote: "Best lawyer in town! Todd went beyond his means to help me out and stuck with the system at all times. Kept me informed of everything he was doing and was very respectful and supportive. Very professional at his job.",
        author: "Taylor R.",
        rating: 5
    },
    {
        quote: "Todd has been amazing, going the extra mile and getting better results than I had anticipated! He worked with me on my payments and has been invaluable to my case. I recommend him to all my friends and family.",
        author: "Jimmy V.",
        rating: 5
    },
    {
        quote: "Great lawyer who listens and helps people such as myself when wrongfully arrested by law enforcement. He is a lawyer who works for his clients.",
        author: "Shawn H.",
        rating: 5
    }
]

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-1 mb-4" role="img" aria-label={`${rating} out of 5 stars`}>
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-5 h-5 ${i < rating ? 'text-accent-gold' : 'text-silver-500/30'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    )
}

export function TestimonialsSection() {
    return (
        <section className="py-16 md:py-24 bg-iron-950 border-t border-silver-500/10">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
                    <div>
                        <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">
                            What Clients Said About Working With Todd
                        </h2>
                        <p className="text-silver-500">
                            <span className="text-accent-gold font-semibold">4.9</span> rating from{' '}
                            <span className="text-white">16 Google reviews</span>
                        </p>
                    </div>
                    <a
                        href="https://maps.app.goo.gl/2mfQkJVZkpGrdVXP6"
                        data-cta="reviews_view_all"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link text-silver-500 hover:text-accent-gold transition-colors text-sm uppercase tracking-widest"
                    >
                        View All Reviews →
                    </a>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, i) => (
                        <div
                            key={i}
                            className="bg-iron-900 border border-silver-500/10 p-6 flex flex-col"
                        >
                            <StarRating rating={testimonial.rating} />
                            <blockquote className="text-silver-400 text-sm leading-relaxed flex-1 mb-4">
                                &quot;{testimonial.quote}&quot;
                            </blockquote>
                            <p className="text-white font-semibold text-sm">
                                — {testimonial.author}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <Link
                        href="/contact"
                        data-cta="reviews_schedule_consultation"
                        className="inline-block px-8 py-4 bg-white text-iron-950 font-bold uppercase tracking-widest hover:bg-silver-100 transition-colors"
                    >
                        Request a Free Consultation
                    </Link>
                </div>
            </div>
        </section>
    )
}
