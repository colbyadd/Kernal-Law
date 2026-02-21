import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma Uninsured Motorist Lawyer',
  description:
    'Representation for uninsured and underinsured motorist claims in Oklahoma, including coverage analysis and full-value recovery strategy.',
  alternates: { canonical: '/personal-injury/uninsured-motorist' },
  openGraph: {
    title: 'Oklahoma Uninsured Motorist Claims | Kernal & Associates',
    description:
      'Strategic UM/UIM representation for coverage disputes and serious injury claims in Oklahoma.',
    url: 'https://kernallaw.com/personal-injury/uninsured-motorist',
  },
}

const uninsuredMotoristFaqs = [
  {
    question: 'What is an uninsured motorist (UM) claim?',
    answer:
      'A UM claim generally seeks recovery under your own policy when the at-fault driver has no liability insurance. Coverage terms and claim process depend on policy language and case facts.',
  },
  {
    question: 'What is underinsured motorist (UIM) coverage?',
    answer:
      'UIM may apply when the at-fault driver’s policy limits are insufficient to cover full losses. It can provide additional recovery subject to your policy terms.',
  },
  {
    question: 'Can my own insurer dispute my UM/UIM claim?',
    answer:
      'Yes. Even first-party claims are often contested on fault, damages, and valuation. Strong documentation and negotiation strategy remain essential.',
  },
  {
    question: 'Do UM/UIM claims require the same evidence as liability claims?',
    answer:
      'Generally yes. You still need strong liability and damage proof, plus policy-specific coverage analysis to maximize recovery.',
  },
  {
    question: 'Should I settle with the at-fault insurer first?',
    answer:
      'Possibly, but settlement sequence should be coordinated with UM/UIM strategy to avoid coverage conflicts. Review terms before finalizing.',
  },
  {
    question: 'How quickly should I start a UM/UIM case review?',
    answer:
      'Immediately. Early strategy helps preserve evidence, coordinate policy notices, and avoid procedural missteps.',
  },
]

export default function UninsuredMotoristPage() {
  return (
    <ServiceDetailPage
      heroTitle="Uninsured Motorist Claims"
      heroSubtitle="Coverage-focused strategy for UM/UIM recovery in Oklahoma."
      heroVariant="injury"
      introTitle="UM/UIM claims still require aggressive evidence and valuation work."
      introParagraphs={[
        'Many injured people assume first-party insurance claims are straightforward. In practice, UM/UIM claims are often contested on liability, causation, and damages just like third-party cases.',
        'Kernal & Associates handles UM/UIM claims with integrated policy analysis, liability proof, and full-value damages strategy to protect recovery potential.',
      ]}
      focusTitle="UM/UIM Claim Priorities"
      focusItems={[
        {
          title: 'Coverage and Policy Analysis',
          description:
            'Coverage terms, notice requirements, and sequencing decisions can materially affect outcomes.',
          bullets: [
            'Policy language and limit analysis',
            'Notice and compliance timing review',
            'Stacking or offset issue screening',
            'Settlement sequencing strategy',
          ],
        },
        {
          title: 'Liability and Damages Proof',
          description:
            'First-party status does not remove the need for strong factual and medical support.',
          bullets: [
            'Fault record development',
            'Medical causation documentation',
            'Economic damage modeling',
            'Future-loss valuation planning',
          ],
        },
        {
          title: 'Dispute and Litigation Management',
          description:
            'Where insurers undervalue claims, escalation strategy must be ready early.',
          bullets: [
            'Demand package strategy',
            'Coverage-dispute resolution planning',
            'Bad-faith issue spotting',
            'Trial-readiness leverage',
          ],
        },
      ]}
      processTitle="UM/UIM Claim Workflow"
      processSubtitle="Policy-aware planning and evidence discipline improve first-party recovery outcomes."
      processSteps={[
        {
          step: '01',
          title: 'Policy and Claim Intake Review',
          description:
            'We evaluate coverage structure, deadlines, and immediate notice strategy.',
        },
        {
          step: '02',
          title: 'Liability and Injury Development',
          description:
            'We build complete fault and damages proof to support full claim value.',
        },
        {
          step: '03',
          title: 'Negotiation and Coverage Dispute Strategy',
          description:
            'We negotiate with policy and evidence leverage while preparing for contested issues.',
        },
        {
          step: '04',
          title: 'Litigation as Needed',
          description:
            'Where claim value is not met, we proceed to structured litigation and trial preparation.',
        },
      ]}
      relatedTitle="Related Injury and Coverage Pages"
      relatedSubtitle="Review connected claim types that commonly overlap with UM/UIM matters."
      relatedLinks={[
        {
          href: '/resources/oklahoma-uninsured-motorist-claim-guide',
          title: 'Uninsured Motorist Claim Guide',
          description: 'Step-by-step UM/UIM workflow for coverage, evidence, and valuation strategy.',
          ctaName: 'um_related_um_uim_guide',
        },
        {
          href: '/personal-injury',
          title: 'Personal Injury Hub',
          description: 'Full injury services and claim strategy overview.',
          ctaName: 'um_related_injury_hub',
        },
        {
          href: '/personal-injury/car-accidents',
          title: 'Car Accident Claims',
          description: 'Liability and damages strategy for core auto collision cases.',
          ctaName: 'um_related_car',
        },
        {
          href: '/resources/what-to-do-after-car-accident-oklahoma',
          title: 'Post-Accident Guide',
          description: 'Immediate steps that protect evidence and claim leverage.',
          ctaName: 'um_related_accident_guide',
        },
        {
          href: '/resources/oklahoma-truck-accident-evidence-guide',
          title: 'Truck Accident Evidence Guide',
          description: 'Commercial crash evidence strategy where complex liability overlaps exist.',
          ctaName: 'um_related_truck_evidence_guide',
        },
        {
          href: '/contact',
          title: 'Request UM/UIM Review',
          description: 'Get policy and injury claim strategy from counsel quickly.',
          ctaName: 'um_related_contact',
        },
      ]}
      faqSubtitle="Answers to common uninsured and underinsured motorist questions in Oklahoma."
      faqs={uninsuredMotoristFaqs}
      practiceArea="uninsured-motorist"
      ctaTitle="Do Not Let Coverage Complexity Reduce Recovery"
      ctaDescription="Early policy analysis and claim strategy improve UM/UIM outcome potential."
      ctaLabel="Start UM/UIM Case Review"
      ctaName="um_bottom_cta"
    />
  )
}
