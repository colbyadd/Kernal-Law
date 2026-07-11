import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma Uninsured Motorist Lawyer',
  description:
    'Representation for Oklahoma uninsured and underinsured motorist claims involving policy coverage, disputed fault, and serious injuries.',
  alternates: { canonical: '/personal-injury/uninsured-motorist' },
  openGraph: {
    title: 'Oklahoma Uninsured Motorist Claims | Kernal & Associates',
    description:
      'Help with uninsured and underinsured motorist coverage disputes and injury claims in Oklahoma.',
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
      'Yes. Your insurer may dispute who caused the crash, whether the injuries were related, the extent of the losses, or whether the policy covers the claim. The policy and supporting records need to be reviewed together.',
  },
  {
    question: 'Do UM/UIM claims require the same evidence as liability claims?',
    answer:
      'Generally yes. You still need evidence showing who caused the crash and what losses followed. The policy language, limits, notices, and any payments from other insurers also matter.',
  },
  {
    question: 'Should I settle with the at-fault insurer first?',
    answer:
      'Possibly, but notify your own insurer and have the policy requirements reviewed before signing a release. Settling in the wrong order may create a coverage dispute.',
  },
  {
    question: 'How quickly should I start a UM/UIM case review?',
    answer:
      'As soon as practical. Early review can identify notice requirements, policy limits, deadlines, and any steps required before settling with another insurer.',
  },
]

export default function UninsuredMotoristPage() {
  return (
    <ServiceDetailPage
      heroTitle="Uninsured Motorist Claims"
      heroSubtitle="Help with uninsured and underinsured motorist coverage after an Oklahoma crash."
      heroVariant="injury"
      introTitle="A claim against your own insurer can still involve fault, injury, and coverage disputes."
      introParagraphs={[
        'Uninsured motorist (UM) and underinsured motorist (UIM) claims are made under your own policy, but the insurer may still require proof of fault, medical causation, and the full amount of the losses.',
        'Kernal & Associates reviews the policy and coverage limits, gives required notices, coordinates any claim against the at-fault driver, documents the injuries and financial losses, and addresses coverage disputes.',
      ]}
      focusTitle="UM/UIM Claim Priorities"
      focusItems={[
        {
          title: 'Coverage and Policy Analysis',
          description:
            'The policy language may control notice, consent to settlement, offsets, available limits, and the order in which claims are resolved.',
          bullets: [
            'Policy language and limit analysis',
            'Notice and compliance timing review',
            'Stacking or offset issue screening',
            'Order of settlements and releases',
          ],
        },
        {
          title: 'Liability and Damages Proof',
          description:
            'A claim under your own policy still requires evidence of the other driver’s fault and the losses caused by the crash.',
          bullets: [
            'Fault record development',
            'Medical causation documentation',
            'Lost income and other financial losses',
            'Future care and lasting limitations',
          ],
        },
        {
          title: 'Coverage and Claim Disputes',
          description:
            'We respond when the insurer disputes coverage, fault, medical causation, or the amount of the losses.',
          bullets: [
            'Demand supported by records',
            'Coverage-dispute review',
            'Bad-faith issue spotting',
            'Filing suit when necessary',
          ],
        },
      ]}
      processTitle="UM/UIM Claim Workflow"
      processSubtitle="The process starts with the policy, required notices, and the relationship between all available insurance claims."
      processSteps={[
        {
          step: '01',
          title: 'Policy and Claim Intake Review',
          description:
            'We review the policy, limits, exclusions, notice requirements, deadlines, and other available insurance.',
        },
        {
          step: '02',
          title: 'Liability and Injury Development',
          description:
            'We gather evidence of fault along with medical, wage, and other records of the losses caused by the crash.',
        },
        {
          step: '03',
          title: 'Demand and Coverage Disputes',
          description:
            'We submit the supporting records and respond to disputes about policy terms, fault, treatment, or losses.',
        },
        {
          step: '04',
          title: 'Litigation as Needed',
          description:
            'A lawsuit may be required when the insurer disputes coverage or will not fairly evaluate documented losses.',
        },
      ]}
      relatedTitle="Related Injury and Coverage Pages"
      relatedSubtitle="Review connected claim types that commonly overlap with UM/UIM matters."
      relatedLinks={[
        {
          href: '/resources/oklahoma-uninsured-motorist-claim-guide',
          title: 'Uninsured Motorist Claim Guide',
          description: 'A step-by-step guide to coverage, notices, evidence, and common claim disputes.',
          ctaName: 'um_related_um_uim_guide',
        },
        {
          href: '/personal-injury',
          title: 'Personal Injury Hub',
          description: 'Review the firm’s other collision and injury services.',
          ctaName: 'um_related_injury_hub',
        },
        {
          href: '/personal-injury/car-accidents',
          title: 'Car Accident Claims',
          description: 'Fault, injury, and insurance issues after a passenger vehicle collision.',
          ctaName: 'um_related_car',
        },
        {
          href: '/resources/what-to-do-after-car-accident-oklahoma',
          title: 'Post-Accident Guide',
          description: 'Immediate steps for preserving crash, medical, and insurance records.',
          ctaName: 'um_related_accident_guide',
        },
        {
          href: '/resources/oklahoma-truck-accident-evidence-guide',
          title: 'Truck Accident Evidence Guide',
          description: 'Records that may matter after a crash involving a commercial truck.',
          ctaName: 'um_related_truck_evidence_guide',
        },
        {
          href: '/contact',
          title: 'Request UM/UIM Review',
          description: 'Ask about policy language, required notices, coverage limits, and deadlines.',
          ctaName: 'um_related_contact',
        },
      ]}
      faqSubtitle="Answers to common uninsured and underinsured motorist questions in Oklahoma."
      faqs={uninsuredMotoristFaqs}
      practiceArea="uninsured-motorist"
      ctaTitle="Review Your Uninsured Motorist Coverage"
      ctaDescription="An early review can identify policy requirements, available limits, settlement order, and deadlines."
      ctaLabel="Start UM/UIM Case Review"
      ctaName="um_bottom_cta"
    />
  )
}
