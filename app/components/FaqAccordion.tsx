'use client'

import { useState } from 'react'
import Link from 'next/link'

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  faqs: FaqItem[]
  practiceArea: string
}

export function FaqAccordion({ faqs, practiceArea }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <div className="max-w-3xl mx-auto divide-y divide-silver-500/10">
        {faqs.map((faq, index) => (
          <div key={faq.question} className="group">
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
                className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-silver-500/30 text-silver-400 transition-all duration-300 ${openIndex === index ? 'bg-accent-gold border-accent-gold text-iron-950 rotate-45' : 'group-hover:border-silver-400'}`}
                aria-hidden="true"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </button>
            <div
              id={`faq-${practiceArea}-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[800px] pb-6' : 'max-h-0'}`}
            >
              <p className="text-silver-400 leading-relaxed pr-16">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-12 text-center">
        <p className="text-silver-500 mb-4">Have more questions? We&apos;re here to help.</p>
        <Link
          href="/contact"
          data-cta={`faq_contact_${practiceArea}`}
          className="inline-flex items-center text-accent-gold hover:text-white transition-colors text-sm uppercase tracking-widest"
        >
          Contact Us for a Free Consultation
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </>
  )
}
