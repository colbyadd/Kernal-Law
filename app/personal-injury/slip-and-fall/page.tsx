import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma Slip and Fall Lawyer',
  description:
    'Slip and fall representation in Oklahoma for premises liability claims involving unsafe property conditions and injury damages.',
  alternates: { canonical: '/personal-injury/slip-and-fall' },
  openGraph: {
    title: 'Oklahoma Slip and Fall Attorney | Kernal & Associates',
    description:
      'Premises liability representation for unsafe property conditions and serious injury claims.',
    url: 'https://kernallaw.com/personal-injury/slip-and-fall',
  },
}

const slipFallFaqs = [
  {
    question: 'What makes a slip and fall case legally valid?',
    answer:
      'A premises claim generally requires proof of an unsafe condition, a legal duty owed by the property owner or occupier, actual or constructive notice of the condition, and an injury caused by it. The facts and available evidence determine whether those requirements can be met.',
  },
  {
    question: 'How important are photos and incident reports?',
    answer:
      'Very important. Conditions may be corrected quickly after an incident. Early documentation preserves proof of hazard, layout, visibility, and warning-sign adequacy.',
  },
  {
    question: 'Can businesses deny responsibility automatically?',
    answer:
      'A business can dispute responsibility, but its denial does not decide the claim. Liability depends on the condition, how long it existed, what the business knew or should have known, and whether reasonable warnings or repairs were provided.',
  },
  {
    question: 'What if I was partially distracted at the time?',
    answer:
      'Comparative fault may be argued, but that does not automatically eliminate a claim. Liability analysis should be evidence-driven and case-specific.',
  },
  {
    question: 'Do slip and fall injuries need immediate treatment records?',
    answer:
      'Prompt treatment can document the timing, symptoms, and diagnosis. Delayed care does not automatically defeat a claim, but the reason for the delay may become an issue.',
  },
  {
    question: 'How soon should a premises claim be reviewed by counsel?',
    answer:
      'As soon as practical. A spill may be cleaned, a defect repaired, or surveillance video erased. Photos, witness information, and a written incident report may be difficult to replace later.',
  },
]

export default function SlipAndFallPage() {
  return (
    <ServiceDetailPage
      heroTitle="Slip and Fall Claims"
      heroSubtitle="Premises liability representation for hazardous property conditions."
      heroVariant="injury"
      introTitle="The condition that caused a fall may be gone within minutes."
      introParagraphs={[
        'A spill may be cleaned, a broken surface repaired, or surveillance video overwritten soon after an incident. Photos, witness names, an incident report, and a request to preserve video can help show what the property looked like at the time.',
        'Kernal & Associates examines the unsafe condition, whether the owner knew or should have known about it, what warnings were provided, and how the fall caused the injury and financial losses.',
      ]}
      focusTitle="Slip and Fall Case Priorities"
      focusItems={[
        {
          title: 'Hazard and Notice Proof',
          description:
            'The evidence should show what the condition was, how long it may have existed, and what the owner did about it.',
          bullets: [
            'Condition documentation and timing',
            'Warning-sign adequacy analysis',
            'Owner notice and response review',
            'Maintenance policy comparison',
          ],
        },
        {
          title: 'Causation and Injury Development',
          description:
            'Medical records and the incident history should explain how the fall caused or worsened the claimed injuries.',
          bullets: [
            'Incident and treatment timeline',
            'Medical causation documentation',
            'Daily and work limitations',
            'Expected future treatment',
          ],
        },
        {
          title: 'Fault Disputes',
          description:
            'The property owner may dispute notice, argue that the condition was open and obvious, or blame the injured person.',
          bullets: [
            'Comparative-fault allegations',
            'Scene visibility and layout analysis',
            'Witness and camera evidence review',
            'Filing suit when necessary',
          ],
        },
      ]}
      processTitle="Slip and Fall Claim Workflow"
      processSubtitle="The first task is preserving proof of the condition before it is repaired, cleaned, or erased."
      processSteps={[
        {
          step: '01',
          title: 'Immediate Intake and Evidence Capture',
          description:
            'We gather the incident report, photographs, witness information, video, and other records of the condition.',
        },
        {
          step: '02',
          title: 'Liability and Notice Analysis',
          description:
            'We examine inspection and maintenance practices, prior notice, warning signs, and the owner’s response.',
        },
        {
          step: '03',
          title: 'Damages Documentation',
          description:
            'We collect medical, wage, and expense records and document any lasting limits on work or daily activities.',
        },
        {
          step: '04',
          title: 'Negotiation or Litigation',
          description:
            'We address disputes about the hazard, notice, and injury with insurers and, when necessary, in court.',
        },
      ]}
      relatedTitle="Related Injury Pages"
      relatedSubtitle="Review connected premises and severe-injury claim pages."
      relatedLinks={[
        {
          href: '/personal-injury',
          title: 'Personal Injury Hub',
          description: 'See other Oklahoma injury claims handled by the firm.',
          ctaName: 'slip_related_injury_hub',
        },
        {
          href: '/personal-injury/catastrophic-injury',
          title: 'Catastrophic Injury Claims',
          description: 'Legal issues when a fall causes permanent limitations or ongoing care needs.',
          ctaName: 'slip_related_catastrophic',
        },
        {
          href: '/resources/what-to-do-after-car-accident-oklahoma',
          title: 'Post-Accident Guide',
          description: 'Evidence and communication guide for injury claims generally.',
          ctaName: 'slip_related_accident_guide',
        },
        {
          href: '/contact',
          title: 'Request Premises Case Review',
          description: 'Ask about the condition, notice evidence, injuries, and deadlines in your case.',
          ctaName: 'slip_related_contact',
        },
      ]}
      faqSubtitle="Answers to common Oklahoma slip and fall claim questions."
      faqs={slipFallFaqs}
      practiceArea="slip-and-fall"
      ctaTitle="Preserve Premises Evidence Before It Changes"
      ctaDescription="An early review can identify photographs, video, witnesses, maintenance records, and deadlines that may matter."
      ctaLabel="Start Slip and Fall Review"
      ctaName="slip_bottom_cta"
    />
  )
}
