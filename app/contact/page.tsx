import { BreadcrumbTrail } from '../components/BreadcrumbTrail'
import { ContactForm } from '../components/ContactForm'
import { FaqSection } from '../components/FaqSection'
import { MobileConversionBar } from '../components/MobileConversionBar'
import { OfficeMap } from '../components/OfficeMap'
import { PageHero } from '../components/PageHero'
import { CONTACT_EMAIL } from '@/lib/contact'

export const metadata = {
  title: 'Contact an Oklahoma Attorney',
  description:
    'Call, text, or request a free consultation with Kernal & Associates in Oklahoma City.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Kernal & Associates',
    description: 'Reach Todd Kernal about an Oklahoma criminal defense or personal injury matter.',
    url: 'https://kernallaw.com/contact',
  },
}

const contactFaqs = [
  {
    question: 'Do you offer free consultations?',
    answer:
      'Yes. The first conversation is an opportunity to explain the general problem, identify urgent deadlines, and decide whether the firm may be able to help.',
  },
  {
    question: 'What should I include in the online form?',
    answer:
      'Keep it brief. Share the type of matter, the date of the event, any immediate deadline, and the safest way to contact you. Do not send confidential documents or detailed evidence before a conflict check.',
  },
  {
    question: 'What if my matter is urgent?',
    answer:
      'Call the office at (405) 364-0601. A phone call is the fastest option for a recent arrest, active warrant, upcoming court date, or other immediate deadline.',
  },
  {
    question: 'Where is the office?',
    answer:
      'The office is at 1332 SW 89th Street in Oklahoma City, near Interstate 44 and Interstate 240.',
  },
]

const nextSteps = [
  {
    title: 'Initial Review',
    description: 'The firm reviews the general matter, timing, and possible conflicts before discussing confidential details.',
  },
  {
    title: 'Attorney Conversation',
    description: 'If the firm can speak with you, the next conversation focuses on the facts, deadlines, and practical options.',
  },
  {
    title: 'Clear Decision',
    description: 'You will know whether the firm can take the matter and what should happen next. Contact alone does not create an attorney-client relationship.',
  },
]

export default function ContactPage() {
  return (
    <main className="bg-iron-950 min-h-screen">
      <PageHero
        title="Contact Kernal & Associates"
        subtitle="Call for an urgent matter or send a short consultation request."
      />
      <MobileConversionBar
        context="contact_page"
        primaryHref="#contact-form"
        primaryLabel="Open Intake Form"
      />
      <BreadcrumbTrail
        items={[
          { label: 'Home', href: '/' },
          { label: 'Contact' },
        ]}
      />

      <section className="py-12 md:py-20 border-b border-silver-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div id="contact-form" className="scroll-mt-28">
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="tel:4053640601"
                  data-cta="contact_page_call"
                  className="bg-iron-900 border border-silver-500/15 p-5 hover:border-accent-gold"
                >
                  <p className="text-accent-gold text-xs uppercase tracking-widest mb-2">Call</p>
                  <p className="font-serif text-2xl text-white">(405) 364-0601</p>
                  <p className="text-silver-400 text-sm mt-2">Best for urgent matters.</p>
                </a>
                <a
                  href="sms:+14053640601"
                  data-cta="contact_page_text"
                  className="bg-iron-900 border border-silver-500/15 p-5 hover:border-accent-gold"
                >
                  <p className="text-accent-gold text-xs uppercase tracking-widest mb-2">Text</p>
                  <p className="font-serif text-2xl text-white">Text the Office</p>
                  <p className="text-silver-400 text-sm mt-2">Send your name and callback window.</p>
                </a>
              </div>

              <div className="bg-iron-900 border border-silver-500/15 p-5">
                <p className="text-accent-gold text-xs uppercase tracking-widest mb-2">Email</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  data-cta="contact_page_email"
                  className="text-xl text-white underline underline-offset-4 hover:text-accent-gold"
                >
                  {CONTACT_EMAIL}
                </a>
                <p className="text-silver-400 text-sm mt-3">Office hours: Monday-Friday, 8:30 a.m.-5:30 p.m.</p>
              </div>

              <OfficeMap />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 border-b border-silver-500/10 bg-iron-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">What Happens Next</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {nextSteps.map((step, index) => (
                <article key={step.title} className="bg-iron-900 border border-silver-500/15 p-6">
                  <p className="text-accent-gold text-xs uppercase tracking-widest mb-2">Step {index + 1}</p>
                  <h3 className="font-serif text-2xl text-white mb-3">{step.title}</h3>
                  <p className="text-silver-400 leading-relaxed">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        title="Contact Questions"
        subtitle="What to know before reaching out."
        faqs={contactFaqs}
        practiceArea="contact"
      />
    </main>
  )
}
