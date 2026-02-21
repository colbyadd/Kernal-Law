import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma Motorcycle Accident Lawyer',
  description:
    'Representation for Oklahoma motorcycle crash claims involving severe injuries, liability disputes, and insurer bias against riders.',
  alternates: { canonical: '/personal-injury/motorcycle-accidents' },
  openGraph: {
    title: 'Oklahoma Motorcycle Accident Attorney | Kernal & Associates',
    description:
      'Strategic motorcycle injury representation focused on liability proof and full-value recovery.',
    url: 'https://kernallaw.com/personal-injury/motorcycle-accidents',
  },
}

const motorcycleFaqs = [
  {
    question: 'Are motorcycle claims harder than standard car crash claims?',
    answer:
      'Often yes. Riders frequently face bias-based fault assumptions. Strong evidence strategy is required to counter unfair narratives and preserve claim value.',
  },
  {
    question: 'What evidence matters most in a motorcycle crash case?',
    answer:
      'Scene photos, vehicle positions, witness statements, helmet and gear evidence, road-condition records, and injury documentation are all important in liability disputes.',
  },
  {
    question: 'Can severe injury increase claim complexity?',
    answer:
      'Yes. High-severity injuries require long-term medical and economic valuation, often including future-care and earning-capacity analysis.',
  },
  {
    question: 'What if the insurer says I was speeding or reckless?',
    answer:
      'Fault assertions should be tested against objective evidence. Defense narratives often overstate rider fault to reduce settlement value.',
  },
  {
    question: 'Do helmet issues end a motorcycle claim?',
    answer:
      'No. Helmet and safety-equipment issues are case-specific and do not automatically eliminate recovery. Liability and damage analysis still depends on full facts.',
  },
  {
    question: 'How soon should I start legal review after a motorcycle wreck?',
    answer:
      'Immediately. Early evidence preservation and communication strategy are critical in high-dispute rider claims.',
  },
]

export default function MotorcycleAccidentsPage() {
  return (
    <ServiceDetailPage
      heroTitle="Motorcycle Accident Claims"
      heroSubtitle="Strategic rider representation for severe-injury and disputed-fault cases."
      heroVariant="injury"
      introTitle="Motorcycle claims require fast evidence control and bias-aware strategy."
      introParagraphs={[
        'Motorcycle crash claims are often undervalued when insurers frame the rider as inherently at fault. Countering that narrative requires objective evidence and disciplined liability analysis.',
        'Kernal & Associates handles motorcycle claims with a focus on severe-injury valuation, fault reconstruction, and trial-ready pressure where settlement positions are unfair.',
      ]}
      focusTitle="How We Build Motorcycle Claims"
      focusItems={[
        {
          title: 'Rider-Fault Narrative Challenge',
          description:
            'Bias-based assumptions are addressed with objective reconstruction and witness evidence.',
          bullets: [
            'Fault narrative deconstruction',
            'Scene and line-of-sight analysis',
            'Witness sequence validation',
            'Comparative-fault defense control',
          ],
        },
        {
          title: 'Severe Injury Documentation',
          description:
            'Motorcycle injuries often involve high-impact medical and long-term wage consequences.',
          bullets: [
            'Trauma and surgical record structuring',
            'Future care projections',
            'Disability and function-loss evidence',
            'Economic damage modeling',
          ],
        },
        {
          title: 'Negotiation and Litigation Pressure',
          description:
            'We escalate quickly when insurer positions rely on unsupported rider-blame assumptions.',
          bullets: [
            'Demand package sequencing',
            'Coverage and policy-limit analysis',
            'Litigation-readiness development',
            'Trial posture leverage',
          ],
        },
      ]}
      processTitle="Motorcycle Claim Workflow"
      processSubtitle="A structured process helps preserve evidence and maximize full-value recovery opportunities."
      processSteps={[
        {
          step: '01',
          title: 'Immediate Case Intake',
          description:
            'We secure crash records, timeline details, and key evidence before deterioration.',
        },
        {
          step: '02',
          title: 'Liability and Injury Development',
          description:
            'Fault reconstruction and medical documentation are developed in parallel.',
        },
        {
          step: '03',
          title: 'Demand and Negotiation',
          description:
            'We present a full-value claim strategy backed by objective liability and damages proof.',
        },
        {
          step: '04',
          title: 'Litigation Escalation',
          description:
            'Where offers are inadequate, we proceed with structured litigation and trial preparation.',
        },
      ]}
      relatedTitle="Related Injury Pages"
      relatedSubtitle="Explore connected crash and severe-injury claim pages."
      relatedLinks={[
        {
          href: '/personal-injury',
          title: 'Personal Injury Hub',
          description: 'Broader injury case categories and process overview.',
          ctaName: 'motorcycle_related_injury_hub',
        },
        {
          href: '/personal-injury/car-accidents',
          title: 'Car Accident Claims',
          description: 'Related strategy for non-commercial vehicle collision claims.',
          ctaName: 'motorcycle_related_car',
        },
        {
          href: '/personal-injury/catastrophic-injury',
          title: 'Catastrophic Injury Claims',
          description: 'Long-horizon damages strategy for life-altering trauma.',
          ctaName: 'motorcycle_related_catastrophic',
        },
        {
          href: '/contact',
          title: 'Request Rider Case Review',
          description: 'Get immediate legal evaluation of liability and injury exposure.',
          ctaName: 'motorcycle_related_contact',
        },
      ]}
      faqSubtitle="Answers to common motorcycle crash claim questions in Oklahoma."
      faqs={motorcycleFaqs}
      practiceArea="motorcycle-accidents"
      ctaTitle="Protect Your Motorcycle Claim from Early Undervaluation"
      ctaDescription="Evidence and communication strategy in the first weeks can define long-term outcomes."
      ctaLabel="Start Motorcycle Case Review"
      ctaName="motorcycle_bottom_cta"
    />
  )
}
