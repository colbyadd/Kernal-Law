import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma Probation Violation Defense Lawyer',
  description:
    'Defense for Oklahoma probation violation allegations, including compliance disputes, hearing strategy, and revocation risk control.',
  alternates: { canonical: '/criminal-defense/probation-violation' },
  openGraph: {
    title: 'Oklahoma Probation Violation Defense | Kernal & Associates',
    description:
      'Strategic defense to protect against probation revocation and additional criminal exposure.',
    url: 'https://kernallaw.com/criminal-defense/probation-violation',
  },
}

const probationFaqs = [
  {
    question: 'What happens after a probation violation allegation?',
    answer:
      'The court can schedule a violation hearing and may impose additional conditions, sanctions, or revocation risk depending on facts and prior history. Early legal response is critical.',
  },
  {
    question: 'Can technical violations still lead to jail?',
    answer:
      'Potentially, yes. Even non-new-crime allegations can carry serious consequences depending on case posture. Defense strategy should address both legal and compliance evidence.',
  },
  {
    question: 'Do I have to admit the violation to resolve it?',
    answer:
      'Not necessarily. Admission decisions should only be made after full legal review of evidence, alternatives, and likely court outcomes.',
  },
  {
    question: 'How should I handle missed reporting or program issues?',
    answer:
      'Document facts immediately and avoid unstructured explanations without counsel. Timelines, proof of effort, and mitigating context can be significant in hearing strategy.',
  },
  {
    question: 'Can probation be modified instead of revoked?',
    answer:
      'Sometimes. Depending on circumstances and court posture, legal strategy may pursue modifications or alternative sanctions in place of full revocation.',
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
      heroSubtitle="Protecting against revocation, sanctions, and avoidable escalation."
      heroVariant="criminal"
      introTitle="Probation allegations need immediate strategy, not delay."
      introParagraphs={[
        'Probation violation proceedings can move quickly and create significant custody risk if not addressed with a clear defense plan.',
        'Kernal & Associates handles probation matters with evidence-based hearing strategy, mitigation development, and court-focused compliance positioning.',
      ]}
      focusTitle="Core Probation Defense Priorities"
      focusItems={[
        {
          title: 'Allegation and Evidence Testing',
          description:
            'Violation claims should be reviewed for factual accuracy and procedural weakness.',
          bullets: [
            'Violation notice accuracy review',
            'Timeline and reporting evidence audit',
            'Program-compliance documentation',
            'Disputed allegation challenge strategy',
          ],
        },
        {
          title: 'Revocation Risk Management',
          description:
            'The defense goal is to reduce custody exposure and preserve legal options.',
          bullets: [
            'Revocation exposure forecasting',
            'Mitigation package preparation',
            'Alternative sanction positioning',
            'Custody-risk argument development',
          ],
        },
        {
          title: 'Courtroom Hearing Strategy',
          description:
            'A structured hearing plan improves outcomes and strengthens negotiation posture.',
          bullets: [
            'Witness and document sequencing',
            'Compliance narrative construction',
            'Judicial concern targeting',
            'Post-hearing condition planning',
          ],
        },
      ]}
      processTitle="Probation Violation Workflow"
      processSubtitle="Early preparation significantly improves hearing posture and outcome flexibility."
      processSteps={[
        {
          step: '01',
          title: 'Immediate Case Intake',
          description:
            'We review allegations, deadlines, and immediate custody or reporting risk factors.',
        },
        {
          step: '02',
          title: 'Compliance Evidence Build',
          description:
            'We gather documents and context supporting defense and mitigation arguments.',
        },
        {
          step: '03',
          title: 'Hearing and Resolution Strategy',
          description:
            'We prepare contested-hearing posture and alternative sanction options where appropriate.',
        },
        {
          step: '04',
          title: 'Court Representation and Follow-Through',
          description:
            'We advocate at hearing and manage post-order compliance strategy moving forward.',
        },
      ]}
      relatedTitle="Related Criminal Defense Pages"
      relatedSubtitle="Use these pages for connected post-charge and record-protection strategy."
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
          description: 'Record strategy planning after eligible case outcomes.',
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
      ctaTitle="Act Before Revocation Risk Increases"
      ctaDescription="Early probation defense preparation can reduce sanctions and protect long-term outcomes."
      ctaLabel="Start Probation Defense"
      ctaName="probation_bottom_cta"
    />
  )
}
