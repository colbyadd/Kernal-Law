import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma Expungement Lawyer',
  description:
    'Oklahoma expungement representation for eligible records, including case eligibility review, filing strategy, and court process guidance.',
  alternates: { canonical: '/criminal-defense/expungement' },
  openGraph: {
    title: 'Oklahoma Expungement Services | Kernal & Associates',
    description:
      'Record-sealing guidance and court representation for eligible Oklahoma expungement matters.',
    url: 'https://kernallaw.com/criminal-defense/expungement',
  },
}

const expungementFaqs = [
  {
    question: 'What does expungement do in Oklahoma?',
    answer:
      'Expungement generally seals eligible records from public visibility, which can improve employment, housing, and licensing prospects. Eligibility and legal effect vary by case type and outcome.',
  },
  {
    question: 'Are all criminal records eligible for expungement?',
    answer:
      'No. Eligibility depends on offense category, disposition, waiting periods, and statutory requirements. A detailed record review is required before filing.',
  },
  {
    question: 'How long does the expungement process take?',
    answer:
      'Timing varies by jurisdiction, record complexity, and agency responses. Complete filing packages and accurate eligibility analysis often reduce avoidable delay.',
  },
  {
    question: 'Can I file expungement myself?',
    answer:
      'You can, but filing errors and incomplete documentation can cause delay or denial. Counsel helps ensure statutory alignment and stronger hearing posture.',
  },
  {
    question: 'Will expungement remove everything from every database?',
    answer:
      'Expungement has legal effect under Oklahoma law, but practical record visibility can vary across data systems over time. Follow-through and verification are important.',
  },
  {
    question: 'Can prior dismissals or acquittals be expunged?',
    answer:
      'Often yes, subject to statutory conditions. These categories are commonly reviewed for eligibility during expungement screening.',
  },
]

export default function ExpungementPage() {
  return (
    <ServiceDetailPage
      heroTitle="Expungement Services"
      heroSubtitle="Record-sealing strategy for eligible Oklahoma cases."
      heroVariant="criminal"
      introTitle="A clean record can unlock major opportunities."
      introParagraphs={[
        'Even old cases can continue to affect hiring, housing, and licensing decisions. Expungement can reduce that burden when legal eligibility exists.',
        'Kernal & Associates handles expungement matters through careful eligibility screening, complete filing preparation, and courtroom representation where required.',
      ]}
      focusTitle="How We Approach Expungement"
      focusItems={[
        {
          title: 'Eligibility and Risk Screening',
          description:
            'The process begins with an accurate legal map of record history and statutory pathways.',
          bullets: [
            'Case-type and disposition review',
            'Waiting-period analysis',
            'Disqualifier identification',
            'Best-path filing strategy',
          ],
        },
        {
          title: 'Document and Filing Precision',
          description:
            'Complete, accurate filings reduce delay and improve hearing posture.',
          bullets: [
            'Record collection and verification',
            'Petition drafting and support',
            'Agency notice coordination',
            'Court submission quality control',
          ],
        },
        {
          title: 'Hearing and Post-Order Follow-Through',
          description:
            'Effective process management continues after court orders are entered.',
          bullets: [
            'Court hearing representation',
            'Order-entry tracking',
            'Post-order verification planning',
            'Future record-strategy guidance',
          ],
        },
      ]}
      processTitle="Expungement Process"
      processSubtitle="Structured filing and court strategy improve speed and reliability."
      processSteps={[
        {
          step: '01',
          title: 'Case Record Review',
          description:
            'We evaluate complete history to identify eligible pathways and likely issues.',
        },
        {
          step: '02',
          title: 'Petition and Filing Preparation',
          description:
            'We prepare statutory-compliant filings and supporting documentation.',
        },
        {
          step: '03',
          title: 'Notice and Court Processing',
          description:
            'Agency notice, hearing preparation, and court scheduling are managed end-to-end.',
        },
        {
          step: '04',
          title: 'Order and Follow-Through',
          description:
            'We track order completion and provide guidance on post-expungement best practices.',
        },
      ]}
      relatedTitle="Related Defense and Record Strategy Pages"
      relatedSubtitle="Review connected pages for ongoing criminal defense and compliance needs."
      relatedLinks={[
        {
          href: '/criminal-defense',
          title: 'Criminal Defense Hub',
          description: 'Ongoing defense services for pending or newly filed charges.',
          ctaName: 'expungement_related_criminal_hub',
        },
        {
          href: '/criminal-defense/probation-violation',
          title: 'Probation Violation Defense',
          description: 'Representation where compliance issues threaten future record outcomes.',
          ctaName: 'expungement_related_probation',
        },
        {
          href: '/criminal-defense/warrants',
          title: 'Warrants Defense',
          description: 'Resolve pending warrant exposure before record-sealing planning.',
          ctaName: 'expungement_related_warrants',
        },
        {
          href: '/contact',
          title: 'Request Eligibility Review',
          description: 'Get a case-specific expungement screening and filing strategy.',
          ctaName: 'expungement_related_contact',
        },
      ]}
      faqSubtitle="Answers to common Oklahoma expungement questions."
      faqs={expungementFaqs}
      practiceArea="expungement"
      ctaTitle="Find Out if Your Record Is Eligible"
      ctaDescription="A structured eligibility review is the fastest way to identify realistic expungement options."
      ctaLabel="Start Expungement Review"
      ctaName="expungement_bottom_cta"
    />
  )
}
