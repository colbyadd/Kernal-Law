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
      'Help with disputed fault, serious injuries, and insurance claims after an Oklahoma motorcycle crash.',
    url: 'https://kernallaw.com/personal-injury/motorcycle-accidents',
  },
}

const motorcycleFaqs = [
  {
    question: 'Are motorcycle claims harder than standard car crash claims?',
    answer:
      'They can be. An insurer may assume the rider was speeding or taking a risk before reviewing the evidence. Photos, witnesses, video, vehicle damage, and road conditions can help test those assumptions.',
  },
  {
    question: 'What evidence matters most in a motorcycle crash case?',
    answer:
      'Scene photos, vehicle positions, witness statements, helmet and gear evidence, road-condition records, and injury documentation are all important in liability disputes.',
  },
  {
    question: 'Can severe injury increase claim complexity?',
    answer:
      'Yes. A serious injury may require evidence of future medical care, permanent limitations, time away from work, and reduced earning ability.',
  },
  {
    question: 'What if the insurer says I was speeding or reckless?',
    answer:
      'The allegation should be compared with the physical evidence, witness accounts, video, roadway conditions, and any available vehicle data. An accusation alone does not decide fault.',
  },
  {
    question: 'Do helmet issues end a motorcycle claim?',
    answer:
      'No. Helmet and safety-equipment issues are case-specific and do not automatically eliminate recovery. Liability and damage analysis still depends on full facts.',
  },
  {
    question: 'How soon should I start legal review after a motorcycle wreck?',
    answer:
      'As soon as practical. Roadway conditions change, video may be erased, and witnesses become harder to locate. Early advice can also help before an insurer requests a statement or release.',
  },
]

export default function MotorcycleAccidentsPage() {
  return (
    <ServiceDetailPage
      heroTitle="Motorcycle Accident Claims"
      heroSubtitle="Representation for Oklahoma riders facing serious injuries and disputed fault."
      heroVariant="injury"
      introTitle="Motorcycle claims should be decided by the evidence, not assumptions about riders."
      introParagraphs={[
        'A driver or insurer may blame the rider before the scene evidence has been reviewed. Photos, witness accounts, video, vehicle damage, and roadway conditions can show whether that version is accurate.',
        'Kernal & Associates investigates how the crash occurred, documents the medical and financial losses, handles insurance communications, and files suit when a claim cannot be resolved fairly.',
      ]}
      focusTitle="How We Build Motorcycle Claims"
      focusItems={[
        {
          title: 'Fault and Crash Evidence',
          description:
            'We compare allegations about the rider with the scene, vehicle, witness, and roadway evidence.',
          bullets: [
            'Driver and rider accounts',
            'Scene and line-of-sight analysis',
            'Witness and video review',
            'Comparative-fault allegations',
          ],
        },
        {
          title: 'Severe Injury Documentation',
          description:
            'Motorcycle injuries may lead to surgery, rehabilitation, missed work, and lasting physical limitations.',
          bullets: [
            'Trauma and surgical records',
            'Future care projections',
            'Disability and functional limitations',
            'Lost income and reduced earning ability',
          ],
        },
        {
          title: 'Insurance Claim and Litigation',
          description:
            'We present the supporting records, respond to unsupported fault allegations, and discuss filing suit when needed.',
          bullets: [
            'Medical and liability demand records',
            'Coverage and policy-limit analysis',
            'Review of settlement offers',
            'Court preparation if suit is filed',
          ],
        },
      ]}
      processTitle="Motorcycle Claim Workflow"
      processSubtitle="The work moves from preserving crash evidence to documenting injuries and addressing insurance disputes."
      processSteps={[
        {
          step: '01',
          title: 'Immediate Case Intake',
          description:
            'We gather crash records, photos, witness information, and available video before those materials disappear.',
        },
        {
          step: '02',
          title: 'Liability and Injury Development',
          description:
            'We investigate fault while collecting medical, wage, and other records of the losses caused by the crash.',
        },
        {
          step: '03',
          title: 'Demand and Negotiation',
          description:
            'We submit the supporting evidence and respond to disputes about fault, treatment, or the extent of the losses.',
        },
        {
          step: '04',
          title: 'Lawsuit When Needed',
          description:
            'When an insurer will not make a reasonable offer, a lawsuit may be needed to obtain records, question witnesses, and present the case in court.',
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
          description: 'Fault, injury, and insurance issues after a passenger vehicle collision.',
          ctaName: 'motorcycle_related_car',
        },
        {
          href: '/personal-injury/catastrophic-injury',
          title: 'Catastrophic Injury Claims',
          description: 'Claims addressing permanent harm and the future cost of care after a severe crash.',
          ctaName: 'motorcycle_related_catastrophic',
        },
        {
          href: '/contact',
          title: 'Request Rider Case Review',
          description: 'Ask about the fault evidence, insurance coverage, and deadlines in your case.',
          ctaName: 'motorcycle_related_contact',
        },
      ]}
      faqSubtitle="Answers to common motorcycle crash claim questions in Oklahoma."
      faqs={motorcycleFaqs}
      practiceArea="motorcycle-accidents"
      ctaTitle="Talk Through Your Motorcycle Accident Claim"
      ctaDescription="A review can help preserve scene evidence and answer questions about insurance and deadlines."
      ctaLabel="Start Motorcycle Case Review"
      ctaName="motorcycle_bottom_cta"
    />
  )
}
