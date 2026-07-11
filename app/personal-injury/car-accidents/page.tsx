import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma Car Accident Lawyer',
  description:
    'Oklahoma car accident representation for disputed fault, serious injuries, medical costs, lost income, and insurance claims.',
  alternates: { canonical: '/personal-injury/car-accidents' },
  openGraph: {
    title: 'Oklahoma Car Accident Attorney | Kernal & Associates',
    description:
      'Help with disputed fault, serious injuries, and insurance claims after an Oklahoma car accident.',
    url: 'https://kernallaw.com/personal-injury/car-accidents',
  },
}

const carAccidentFaqs = [
  {
    question: 'What should I do immediately after a car accident in Oklahoma?',
    answer:
      'Get medical care, report the crash, save photos and witness information, and be cautious about giving a recorded statement to an insurer. Early records can make it easier to show what happened and how you were hurt.',
  },
  {
    question: 'How much is my car accident claim worth?',
    answer:
      'It depends on fault, the available insurance, the nature of the injuries, medical expenses, lost income, and any lasting limitations. A lawyer needs the records and policy information before giving a useful assessment.',
  },
  {
    question: 'Should I accept the first insurance offer?',
    answer:
      'Have the offer reviewed before accepting it. An early offer may arrive before the extent of the injury or future care is known, and a signed release usually ends the claim.',
  },
  {
    question: 'What if the other driver says I caused the crash?',
    answer:
      'The other driver’s account is only one piece of the case. Photos, witness statements, the crash report, vehicle damage, video, and other records may help establish what happened.',
  },
  {
    question: 'Can I recover compensation if I was partially at fault?',
    answer:
      'Possibly. Oklahoma’s comparative-fault rules can permit recovery in some cases involving shared fault. The exact result depends on the facts and the percentage of fault assigned to each party.',
  },
  {
    question: 'How long does a car accident case take?',
    answer:
      'Straightforward claims may resolve in months, while severe or disputed files can take longer due to medical progression, expert analysis, and court scheduling.',
  },
]

export default function CarAccidentsPage() {
  return (
    <ServiceDetailPage
      heroTitle="Car Accident Claims"
      heroSubtitle="Help with fault disputes, serious injuries, and insurance claims after an Oklahoma crash."
      heroVariant="injury"
      introTitle="A car accident claim starts with clear records of the crash and the harm it caused."
      introParagraphs={[
        'An insurer may ask for a recorded statement or make an offer before treatment is complete. Before signing anything, it helps to understand the available coverage and whether the medical record reflects the full extent of the injury.',
        'A sound claim addresses two separate questions: who caused the crash, and what losses followed. Photos, witness accounts, medical records, wage information, and policy documents can all matter.',
        'Kernal & Associates investigates the collision, organizes the medical and financial records, handles insurer communications, and files suit when a claim cannot be resolved on reasonable terms.',
      ]}
      focusTitle="How We Build a Strong Car Accident Claim"
      focusItems={[
        {
          title: 'Liability and Fault Analysis',
          description:
            'We compare the drivers’ accounts with the physical and documentary evidence from the crash.',
          bullets: [
            'Police report and scene reconstruction',
            'Witness credibility and sequence review',
            'Vehicle damage pattern analysis',
            'Comparative-fault allegations',
            'Intersection and right-of-way review',
            'Digital timeline consolidation',
          ],
        },
        {
          title: 'Medical and Economic Damage Proof',
          description:
            'Medical and financial records should show both the immediate losses and any lasting effects.',
          bullets: [
            'Treatment timeline and prognosis',
            'Future care and impairment analysis',
            'Lost wages and earning-capacity losses',
            'Pain and daily-life limitations',
            'Gaps or changes in treatment',
            'Out-of-pocket loss documentation',
          ],
        },
        {
          title: 'Insurance Negotiation and Next Steps',
          description:
            'We submit the supporting records, respond to fault or damage disputes, and discuss the choices if the insurer will not make a reasonable offer.',
          bullets: [
            'Coverage and policy-limit review',
            'Timing of the demand',
            'Claim-handling concerns',
            'Filing suit when necessary',
            'Recorded-statement questions',
            'Review of settlement offers',
          ],
        },
      ]}
      processTitle="Car Accident Claim Process"
      processSubtitle="The work moves from preserving crash evidence to documenting losses and resolving disputed issues."
      processSteps={[
        {
          step: '01',
          title: 'Immediate Intake and Evidence Preservation',
          description:
            'We gather crash reports, photos, witness information, and insurer correspondence while those records are available.',
        },
        {
          step: '02',
          title: 'Medical and Liability Development',
          description:
            'We review the fault evidence while collecting records of treatment, expenses, lost work, and any continuing limitations.',
        },
        {
          step: '03',
          title: 'Demand Package and Negotiation',
          description:
            'Once the necessary information is available, we send the insurer a demand supported by the liability and loss records.',
        },
        {
          step: '04',
          title: 'Litigation if Necessary',
          description:
            'If negotiation does not resolve the claim, we can file suit, use discovery to obtain evidence, and prepare for court.',
        },
      ]}
      relatedTitle="Related Injury and Location Pages"
      relatedSubtitle="Use these pages to evaluate next steps for related crash and severe injury claims."
      relatedLinks={[
        {
          href: '/personal-injury',
          title: 'Personal Injury Hub',
          description: 'See the firm’s other injury services and general information about making a claim.',
          ctaName: 'car_related_injury_hub',
        },
        {
          href: '/personal-injury/truck-accidents',
          title: 'Truck Accident Claims',
          description: 'Commercial crash claims involving carriers, driver records, and maintenance evidence.',
          ctaName: 'car_related_truck_accidents',
        },
        {
          href: '/personal-injury/uninsured-motorist',
          title: 'Uninsured Motorist Claims',
          description: 'Coverage questions when the at-fault driver has too little insurance or none at all.',
          ctaName: 'car_related_uninsured',
        },
        {
          href: '/personal-injury/catastrophic-injury',
          title: 'Catastrophic Injury Claims',
          description: 'Permanent-injury claims that require evidence of future medical and work limitations.',
          ctaName: 'car_related_catastrophic',
        },
        {
          href: '/oklahoma-city/personal-injury',
          title: 'Oklahoma City Personal Injury',
          description: 'Car-crash and other injury representation in the Oklahoma City area.',
          ctaName: 'car_related_oklahoma_city_injury',
        },
        {
          href: '/norman/personal-injury',
          title: 'Norman Personal Injury',
          description: 'Car-crash and other injury representation for Norman and Cleveland County.',
          ctaName: 'car_related_norman_injury',
        },
      ]}
      faqSubtitle="Answers to common questions after Oklahoma vehicle collisions."
      faqs={carAccidentFaqs}
      practiceArea="car-accidents"
      actionChecklist={[
        'Get medical evaluation and keep a complete treatment timeline from day one.',
        'Preserve scene photos, witness contacts, and all insurer communications.',
        'Ask for legal advice before giving a recorded insurance statement or signing a release.',
        'Have the available insurance policies and deadlines reviewed early.',
      ]}
      ctaTitle="Talk Through Your Car Accident Claim"
      ctaDescription="A review can identify the crash records, available policies, and filing deadlines that may matter."
      ctaLabel="Start Car Accident Case Review"
      ctaName="car_bottom_cta"
    />
  )
}
