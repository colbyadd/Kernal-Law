import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma Expungement Lawyer',
  description:
    'Oklahoma expungement representation for eligible records, including eligibility review, petition preparation, notice, and court hearings.',
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
      'You can. However, an incorrect eligibility analysis, missing record, or incomplete notice may cause delay or denial. Counsel can review the statute, prepare the filing, and address objections or a hearing if one occurs.',
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
      heroSubtitle="Eligibility review and court filings to seal qualifying Oklahoma records."
      heroVariant="criminal"
      introTitle="An old case can continue to appear on background checks."
      introParagraphs={[
        'Even a dismissed case can affect hiring, housing, or licensing when it remains publicly visible. Oklahoma law allows some records to be sealed, but eligibility depends on the charge, outcome, later history, and any required waiting period.',
        'Kernal & Associates reviews the full record before filing. When a case qualifies, the firm prepares the petition and notices, responds to objections, appears at a required hearing, and follows the order through the next steps.',
      ]}
      focusTitle="What an Expungement Review Covers"
      focusItems={[
        {
          title: 'Eligibility and Risk Screening',
          description:
            'The process begins with an accurate legal map of record history and statutory pathways.',
          bullets: [
            'Case-type and disposition review',
            'Waiting-period analysis',
            'Disqualifier identification',
            'Available statutory path',
          ],
        },
        {
          title: 'Document and Filing Precision',
          description:
            'A complete petition and correct notice help avoid unnecessary delay in the court process.',
          bullets: [
            'Record collection and verification',
            'Petition drafting and support',
            'Agency notice coordination',
            'Final review before filing',
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
            'Guidance on future record questions',
          ],
        },
      ]}
      processTitle="How an Oklahoma Expungement Proceeds"
      processSubtitle="The process starts with eligibility, then moves through filing, notice, any hearing, and the final order."
      processSteps={[
        {
          step: '01',
          title: 'Case Record Review',
          description:
            'We review the charge, outcome, dates, and later history to identify whether the record appears eligible.',
        },
        {
          step: '02',
          title: 'Petition and Filing Preparation',
          description:
            'We prepare the petition, supporting information, and required court filing.',
        },
        {
          step: '03',
          title: 'Notice and Court Processing',
          description:
            'We provide required notice, monitor responses, and prepare for a hearing if the court sets one.',
        },
        {
          step: '04',
          title: 'Order and Follow-Through',
          description:
            'We track entry of the order and explain the practical follow-up after the court grants relief.',
        },
      ]}
      relatedTitle="Related Criminal Defense Pages"
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
          description: 'Ask for a review of the record and the possible statutory path.',
          ctaName: 'expungement_related_contact',
        },
      ]}
      faqSubtitle="Answers to common Oklahoma expungement questions."
      faqs={expungementFaqs}
      practiceArea="expungement"
      ctaTitle="Find Out Whether Your Record May Qualify"
      ctaDescription="Eligibility depends on the full court record, final outcome, dates, and later history."
      ctaLabel="Start Expungement Review"
      ctaName="expungement_bottom_cta"
    />
  )
}
