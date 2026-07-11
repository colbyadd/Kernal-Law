import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma Truck Accident Lawyer',
  description:
    'Oklahoma truck accident representation involving carrier liability, electronic and maintenance records, serious injuries, and wrongful death.',
  alternates: { canonical: '/personal-injury/truck-accidents' },
  openGraph: {
    title: 'Oklahoma Truck Accident Attorney | Kernal & Associates',
    description:
      'Help after an Oklahoma commercial truck crash involving serious injury or wrongful death.',
    url: 'https://kernallaw.com/personal-injury/truck-accidents',
  },
}

const truckAccidentFaqs = [
  {
    question: 'Why are truck accident claims different from regular car crashes?',
    answer:
      'Truck cases can involve a commercial carrier, several insurance policies, federal safety rules, and records such as electronic logs, maintenance files, and dispatch data. Those additional parties and records make the investigation different from a typical car crash.',
  },
  {
    question: 'Who can be liable in a trucking collision?',
    answer:
      'Potential defendants can include the driver, carrier, broker, maintenance vendors, loading entities, and in some cases manufacturers. Liability depends on crash cause, contractual roles, and operational control.',
  },
  {
    question: 'What evidence matters most after a truck wreck?',
    answer:
      'Key records include driver logs, telematics, inspection reports, maintenance history, dispatch communications, and cargo documentation. Early legal action is often required to preserve this evidence before retention windows close.',
  },
  {
    question: 'How quickly should I hire a lawyer after a truck crash?',
    answer:
      'As soon as practical. Some electronic and company records are kept for limited periods, so an early preservation request may prevent useful evidence from being lost.',
  },
  {
    question: 'Can truck accident claims go to trial?',
    answer:
      'Yes. A lawsuit may be necessary when fault is disputed or the parties cannot agree on the losses. Whether a case settles or reaches trial depends on its facts and the positions taken by the parties.',
  },
  {
    question: 'What damages are recoverable in a truck collision case?',
    answer:
      'Recoverable damages may include medical costs, future care, lost income, diminished earning capacity, pain and suffering, and in fatal-loss matters, wrongful-death damages under Oklahoma law.',
  },
]

export default function TruckAccidentsPage() {
  return (
    <ServiceDetailPage
      heroTitle="Truck Accident Litigation"
      heroSubtitle="Representation after Oklahoma commercial truck crashes involving serious injury or wrongful death."
      heroVariant="injury"
      introTitle="Truck crashes involve company records that may not remain available for long."
      introParagraphs={[
        'Driver logs, onboard data, dispatch messages, inspection reports, and maintenance files can help explain why a commercial truck crashed. Prompt preservation requests are often needed because companies do not keep every record indefinitely.',
        'Responsibility may extend beyond the driver. The carrier, a maintenance company, a loading company, a broker, or a manufacturer may be involved depending on the cause of the collision and who controlled the work.',
        'Kernal & Associates identifies the responsible parties, requests the relevant records, reviews safety and maintenance issues, and documents the medical, financial, and family losses caused by the crash.',
      ]}
      focusTitle="Critical Truck Accident Case Components"
      focusItems={[
        {
          title: 'Carrier and Driver Compliance Review',
          description:
            'Driver and company records may show whether fatigue, training, supervision, or operating practices contributed to the crash.',
          bullets: [
            'Hours-of-service and logbook review',
            'Driver qualification file analysis',
            'Dispatch messages and route records',
            'Federal Motor Carrier Safety Administration records',
            'Training and supervision review',
            'Policy-violation pattern analysis',
          ],
        },
        {
          title: 'Mechanical and Operational Evidence',
          description:
            'Inspection, repair, loading, and vehicle data can reveal problems that are not apparent from the crash report alone.',
          bullets: [
            'Inspection and maintenance history',
            'Brake/tire system failure analysis',
            'Electronic module and telematics data',
            'Cargo securement and loading records',
            'Vehicle defect and recall review',
            'Post-crash inspection cross-check',
          ],
        },
        {
          title: 'Medical and Financial Losses',
          description:
            'Serious injuries may require evidence of future care, reduced earning ability, and changes in daily life.',
          bullets: [
            'Future care and life-care planning',
            'Vocational and earnings-loss evidence',
            'Permanent disability and daily limitations',
            'Wrongful death loss documentation',
            'Lost household services',
            'Long-term effects on quality of life',
          ],
        },
      ]}
      processTitle="Truck Collision Case Process"
      processSubtitle="The investigation begins with preserving carrier records and identifying every party that may be responsible."
      processSteps={[
        {
          step: '01',
          title: 'Initial Review and Record Preservation',
          description:
            'We request that vehicle data, driver logs, dispatch records, and other relevant materials be preserved.',
        },
        {
          step: '02',
          title: 'Liability and Compliance Investigation',
          description:
            'We examine the driver’s conduct, the carrier’s practices, maintenance history, and the roles of other companies involved.',
        },
        {
          step: '03',
          title: 'Damages Development and Expert Integration',
          description:
            'We collect medical and wage records and, when needed, work with qualified professionals on future care or earning losses.',
        },
        {
          step: '04',
          title: 'Negotiation or Litigation',
          description:
            'We negotiate with the carriers and other responsible parties. If they will not resolve the claim fairly, we can take the case to court.',
        },
      ]}
      relatedTitle="Related Injury Pages"
      relatedSubtitle="Review connected claim types and local representation pages for your next step."
      relatedLinks={[
        {
          href: '/resources/oklahoma-truck-accident-evidence-guide',
          title: 'Truck Accident Evidence Guide',
          description: 'Record-preservation priorities and commercial-liability evidence map.',
          ctaName: 'truck_related_truck_evidence_guide',
        },
        {
          href: '/personal-injury',
          title: 'Personal Injury Hub',
          description: 'See other negligence and injury matters handled by the firm.',
          ctaName: 'truck_related_injury_hub',
        },
        {
          href: '/personal-injury/car-accidents',
          title: 'Car Accident Claims',
          description: 'Passenger vehicle claims involving disputed fault and serious injuries.',
          ctaName: 'truck_related_car_accidents',
        },
        {
          href: '/personal-injury/wrongful-death',
          title: 'Wrongful Death Claims',
          description: 'Legal and estate issues that arise when negligence causes a death.',
          ctaName: 'truck_related_wrongful_death',
        },
        {
          href: '/personal-injury/catastrophic-injury',
          title: 'Catastrophic Injury Claims',
          description: 'Long-horizon recovery planning for permanent and severe trauma.',
          ctaName: 'truck_related_catastrophic',
        },
        {
          href: '/resources/what-to-do-after-car-accident-oklahoma',
          title: 'Post-Accident Guide',
          description: 'Immediate response checklist for preserving crash and medical evidence.',
          ctaName: 'truck_related_post_accident_guide',
        },
        {
          href: '/oklahoma-city/personal-injury',
          title: 'Oklahoma City Personal Injury',
          description: 'Help with commercial truck and other injury claims in the Oklahoma City area.',
          ctaName: 'truck_related_okc_injury',
        },
        {
          href: '/norman/personal-injury',
          title: 'Norman Personal Injury',
          description: 'Commercial crash and other injury representation in Norman and Cleveland County.',
          ctaName: 'truck_related_norman_injury',
        },
      ]}
      faqSubtitle="Answers to common questions after commercial truck collisions in Oklahoma."
      faqs={truckAccidentFaqs}
      practiceArea="truck-accidents"
      actionChecklist={[
        'Get medical care and preserve every treatment and billing record from day one.',
        'Save crash photos, witness contacts, and all communications from insurers or carriers.',
        'Ask for legal advice before giving a recorded statement or signing a release.',
        'Start immediate legal review so key commercial records can be preserved early.',
      ]}
      ctaTitle="Secure Truck Crash Evidence Before It Is Lost"
      ctaDescription="An early review can help preserve carrier records and identify every available source of insurance."
      ctaLabel="Start Truck Accident Review"
      ctaName="truck_bottom_cta"
    />
  )
}
