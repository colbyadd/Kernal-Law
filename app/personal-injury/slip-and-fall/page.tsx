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
      'A valid premises claim generally requires proof of unsafe condition, property-owner duty, notice or knowledge, and causation of injury. Case value depends heavily on evidence quality.',
  },
  {
    question: 'How important are photos and incident reports?',
    answer:
      'Very important. Conditions may be corrected quickly after an incident. Early documentation preserves proof of hazard, layout, visibility, and warning-sign adequacy.',
  },
  {
    question: 'Can businesses deny responsibility automatically?',
    answer:
      'They often contest responsibility aggressively. Liability depends on whether conditions were foreseeable, known, and unreasonably dangerous under the circumstances.',
  },
  {
    question: 'What if I was partially distracted at the time?',
    answer:
      'Comparative fault may be argued, but that does not automatically eliminate a claim. Liability analysis should be evidence-driven and case-specific.',
  },
  {
    question: 'Do slip and fall injuries need immediate treatment records?',
    answer:
      'Yes. Prompt treatment and clear symptom documentation significantly strengthen causation and damages presentation.',
  },
  {
    question: 'How soon should a premises claim be reviewed by counsel?',
    answer:
      'As soon as possible. Early evidence control is often the difference between a strong and weak premises liability case.',
  },
]

export default function SlipAndFallPage() {
  return (
    <ServiceDetailPage
      heroTitle="Slip and Fall Claims"
      heroSubtitle="Premises liability representation for hazardous property conditions."
      heroVariant="injury"
      introTitle="Premises cases are won on documentation speed and hazard proof."
      introParagraphs={[
        'Property hazard evidence can disappear quickly after an incident. Fast documentation and condition analysis are essential to proving liability.',
        'Kernal & Associates handles slip and fall claims with focused hazard reconstruction, notice analysis, and full damages development for negotiation and trial positioning.',
      ]}
      focusTitle="Slip and Fall Case Priorities"
      focusItems={[
        {
          title: 'Hazard and Notice Proof',
          description:
            'Premises claims require clear evidence that unsafe conditions existed and should have been addressed.',
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
            'Injury proof must connect incident mechanism to medical consequences with consistency.',
          bullets: [
            'Incident-to-treatment timeline control',
            'Medical causation documentation',
            'Functional-impact evidence',
            'Future treatment projection analysis',
          ],
        },
        {
          title: 'Liability Dispute Management',
          description:
            'Defense teams often push comparative-fault narratives that require early rebuttal.',
          bullets: [
            'Comparative fault challenge strategy',
            'Scene visibility and layout analysis',
            'Witness and camera evidence review',
            'Litigation escalation planning',
          ],
        },
      ]}
      processTitle="Slip and Fall Claim Workflow"
      processSubtitle="Fast evidence preservation and structured liability proof are central to strong premises claims."
      processSteps={[
        {
          step: '01',
          title: 'Immediate Intake and Evidence Capture',
          description:
            'We gather incident records, photos, witness data, and condition evidence quickly.',
        },
        {
          step: '02',
          title: 'Liability and Notice Analysis',
          description:
            'We assess unsafe condition history and owner-response obligations.',
        },
        {
          step: '03',
          title: 'Damages Documentation',
          description:
            'Medical and economic damages are organized for full-value claim posture.',
        },
        {
          step: '04',
          title: 'Negotiation or Litigation',
          description:
            'We negotiate from evidence strength and escalate where liability is denied unfairly.',
        },
      ]}
      relatedTitle="Related Injury Pages"
      relatedSubtitle="Review connected premises and severe-injury claim pages."
      relatedLinks={[
        {
          href: '/personal-injury',
          title: 'Personal Injury Hub',
          description: 'Overview of broader injury case categories and strategy.',
          ctaName: 'slip_related_injury_hub',
        },
        {
          href: '/personal-injury/catastrophic-injury',
          title: 'Catastrophic Injury Claims',
          description: 'Long-horizon valuation strategy for severe injury outcomes.',
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
          description: 'Get immediate assessment of liability and evidence strength.',
          ctaName: 'slip_related_contact',
        },
      ]}
      faqSubtitle="Answers to common Oklahoma slip and fall claim questions."
      faqs={slipFallFaqs}
      practiceArea="slip-and-fall"
      ctaTitle="Preserve Premises Evidence Before It Changes"
      ctaDescription="Early action can materially improve liability proof and settlement leverage."
      ctaLabel="Start Slip and Fall Review"
      ctaName="slip_bottom_cta"
    />
  )
}
