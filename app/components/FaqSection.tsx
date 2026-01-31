'use client'

import { useState } from 'react'

interface FaqItem {
    question: string
    answer: string
}

interface FaqSectionProps {
    title?: string
    subtitle?: string
    faqs: FaqItem[]
    /** Used for generating unique IDs and schema */
    practiceArea: string
}

export function FaqSection({
    title = "Frequently Asked Questions",
    subtitle,
    faqs,
    practiceArea
}: FaqSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    const baseUrl = 'https://kernallaw.com'

    // Generate FAQPage schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    }

    return (
        <section className="py-16 md:py-24 border-t border-silver-500/10">
            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-silver-400 text-lg">
                            {subtitle}
                        </p>
                    )}
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto divide-y divide-silver-500/10">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="group"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full py-6 flex items-start justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-${practiceArea}-${index}`}
                            >
                                <span className="font-serif text-lg md:text-xl text-white group-hover:text-silver-100 pr-8 transition-colors">
                                    {faq.question}
                                </span>
                                <span
                                    className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-silver-500/30 text-silver-400 transition-all duration-300 ${openIndex === index
                                        ? 'bg-accent-gold border-accent-gold text-iron-950 rotate-45'
                                        : 'group-hover:border-silver-400'
                                        }`}
                                    aria-hidden="true"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                </span>
                            </button>
                            <div
                                id={`faq-${practiceArea}-${index}`}
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                                    }`}
                            >
                                <p className="text-silver-400 leading-relaxed pr-16">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="max-w-3xl mx-auto mt-12 text-center">
                    <p className="text-silver-500 mb-4">
                        Have more questions? We're here to help.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center text-accent-gold hover:text-white transition-colors text-sm uppercase tracking-widest"
                    >
                        Contact Us for a Free Consultation
                        <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}
