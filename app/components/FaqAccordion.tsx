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
  const contactPage = practiceArea === 'contact'

  return (
    <>
      <div className="max-w-3xl mx-auto divide-y divide-silver-500/10">
        {faqs.map((faq) => (
          <details key={faq.question} name={`faq-${practiceArea}`} className="group">
            <summary
              className="w-full py-6 flex cursor-pointer list-none items-start justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold [&::-webkit-details-marker]:hidden"
            >
              <span className="font-serif text-lg md:text-xl text-white group-hover:text-silver-100 pr-8 transition-colors">
                {faq.question}
              </span>
              <span
                className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-silver-500/30 text-silver-400 transition-all duration-300 group-hover:border-silver-400 group-open:rotate-45 group-open:border-accent-gold group-open:bg-accent-gold group-open:text-iron-950"
                aria-hidden="true"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </summary>
            <div className="pb-6">
              <p className="text-silver-400 leading-relaxed pr-16">
                {faq.answer}
              </p>
            </div>
          </details>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-12 text-center">
        <p className="text-silver-500 mb-4">Have a question about your situation?</p>
        <Link
          href={contactPage ? '#contact-form' : '/contact'}
          data-cta={`faq_contact_${practiceArea}`}
          className="inline-flex items-center text-accent-gold hover:text-white transition-colors text-sm uppercase tracking-widest"
        >
          {contactPage ? 'Back to the Consultation Form' : 'Request a Free Consultation'}
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </>
  )
}
