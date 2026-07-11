import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma Probation Violation Lawyer',
  description:
    'Defense for Oklahoma probation violation allegations involving missed reporting, treatment, payments, new charges, or other disputed conditions.',
  alternates: { canonical: '/criminal-defense/probation-violation' },
  openGraph: {
    title: 'Oklahoma Probation Violation Defense | Kernal & Associates',
    description:
      'Representation for Oklahoma probation violation hearings, disputed compliance, and possible revocation.',
    url: 'https://kernallaw.com/criminal-defense/probation-violation',
  },
}

const probationFaqs = [
  {
    question: 'What happens after a probation violation allegation?',
    answer:
      'The court may schedule a violation hearing. Depending on the facts, prior history, and terms of supervision, the court may continue probation, change the conditions, impose another sanction, or revoke some or all of the suspended sentence.',
  },
  {
    question: 'Can technical violations still lead to jail?',
    answer:
      'Yes. An allegation involving reporting, payments, testing, or a program can still lead to custody in some cases. The notice, supervision records, and evidence of compliance or mitigation should be reviewed before the hearing.',
  },
  {
    question: 'Do I have to admit the violation to resolve it?',
    answer:
      'Not necessarily. Admission decisions should only be made after full legal review of evidence, alternatives, and likely court outcomes.',
  },
  {
    question: 'How should I handle missed reporting or program issues?',
    answer:
      'Save messages, receipts, appointment records, and documents showing what happened. Avoid making an unplanned statement about the alleged violation before counsel reviews the notice and supporting records.',
  },
  {
    question: 'Can probation be modified instead of revoked?',
    answer:
      'Sometimes. Depending on the violation, history, and available programs, the court may consider a change in conditions or another sanction instead of full revocation. No particular result can be promised.',
  },
  {
    question: 'Should I wait until the hearing date to hire counsel?',
    answer:
      'No. Early intervention improves preparation, evidence gathering, and outcome options before positions become fixed.',
  },
]

export default function ProbationViolationPage() {
  return (
    <ServiceDetailPage
      heroTitle="Probation Violation Defense"
      heroSubtitle="Representation for alleged violations, revocation hearings, and possible sanctions."
      heroVariant="criminal"
      introTitle="A probation violation notice can put a suspended sentence at risk."
      introParagraphs={[
        'A violation may be based on a new charge, missed reporting, a failed test, unpaid costs, an incomplete program, or another condition of supervision. Some allegations are disputed; others require a clear explanation supported by records.',
        'Kernal & Associates reviews the violation notice, probation records, prior orders, and evidence of compliance or mitigation. Todd Kernal prepares for the hearing and discusses whether to contest the allegation or seek an alternative to revocation.',
      ]}
      focusTitle="What We Review Before a Violation Hearing"
      focusItems={[
        {
          title: 'Allegation and Evidence Testing',
          description:
            'The notice and supporting records should be checked against the actual supervision terms and what occurred.',
          bullets: [
            'Violation notice accuracy review',
            'Timeline and reporting records',
            'Program-compliance documentation',
            'Evidence bearing on a disputed allegation',
          ],
        },
        {
          title: 'Revocation Risk Management',
          description:
            'The hearing may involve the truth of the allegation and what sanction, if any, the court should impose.',
          bullets: [
            'Possible revocation consequences',
            'Documents supporting mitigation',
            'Available alternative sanctions',
            'Facts bearing on custody',
          ],
        },
        {
          title: 'Probation Hearing Preparation',
          description:
            'Preparation includes the relevant witnesses, documents, disputed facts, and any proposed alternative to revocation.',
          bullets: [
            'Witness and document sequencing',
            'Clear account of compliance history',
            'Response to the alleged violation',
            'Post-hearing condition planning',
          ],
        },
      ]}
      processTitle="Preparing for a Probation Violation Hearing"
      processSubtitle="The work begins with the violation notice, supervision records, and the next hearing date."
      processSteps={[
        {
          step: '01',
          title: 'Violation Notice Review',
          description:
            'We review the allegation, hearing date, current supervision terms, and any immediate custody or reporting concern.',
        },
        {
          step: '02',
          title: 'Compliance Records and Witnesses',
          description:
            'We gather records and witness information that bear on whether a violation occurred and what response is appropriate.',
        },
        {
          step: '03',
          title: 'Hearing Preparation',
          description:
            'We prepare to contest disputed facts and present an alternative to revocation when the circumstances support one.',
        },
        {
          step: '04',
          title: 'Court Representation and Follow-Through',
          description:
            'We appear at the hearing and explain any new or changed conditions in the court’s order afterward.',
        },
      ]}
      relatedTitle="Related Criminal Defense Pages"
      relatedSubtitle="Read about related warrants, pending charges, and possible record sealing after an eligible outcome."
      relatedLinks={[
        {
          href: '/criminal-defense',
          title: 'Criminal Defense Hub',
          description: 'Service overview for active criminal case defense.',
          ctaName: 'probation_related_criminal_hub',
        },
        {
          href: '/criminal-defense/warrants',
          title: 'Warrants Defense',
          description: 'Address warrant issues linked to missed compliance events.',
          ctaName: 'probation_related_warrants',
        },
        {
          href: '/criminal-defense/expungement',
          title: 'Expungement Services',
          description: 'Information about sealing records after an eligible case outcome.',
          ctaName: 'probation_related_expungement',
        },
        {
          href: '/contact',
          title: 'Request Immediate Hearing Review',
          description: 'Get counsel before your probation hearing timeline closes.',
          ctaName: 'probation_related_contact',
        },
      ]}
      faqSubtitle="Answers to common probation violation questions in Oklahoma."
      faqs={probationFaqs}
      practiceArea="probation-violation"
      ctaTitle="Prepare Before the Probation Hearing"
      ctaDescription="Bring the violation notice, supervision papers, and proof of compliance to a confidential review."
      ctaLabel="Start Probation Defense"
      ctaName="probation_bottom_cta"
    />
  )
}
