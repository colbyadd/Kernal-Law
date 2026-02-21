import { buildFaqSchema } from '@/lib/schema/builders'
import { FaqAccordion } from './FaqAccordion'

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
  title = 'Frequently Asked Questions',
  subtitle,
  faqs,
  practiceArea,
}: FaqSectionProps) {
  const faqSchema = buildFaqSchema(faqs)

  return (
    <section className="py-16 md:py-24 border-t border-silver-500/10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">{title}</h2>
          {subtitle ? <p className="text-silver-400 text-lg">{subtitle}</p> : null}
        </div>

        <FaqAccordion faqs={faqs} practiceArea={practiceArea} />
      </div>
    </section>
  )
}
