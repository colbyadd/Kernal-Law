import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma Catastrophic Injury Lawyer',
  description:
    'Representation for catastrophic injury claims involving traumatic brain injury, spinal trauma, amputation, and long-term care losses across Oklahoma.',
  alternates: { canonical: '/personal-injury/catastrophic-injury' },
  openGraph: {
    title: 'Oklahoma Catastrophic Injury Attorney | Kernal & Associates',
    description:
      'Representation for Oklahoma injury claims involving permanent limitations, future care, and lost earning ability.',
    url: 'https://kernallaw.com/personal-injury/catastrophic-injury',
  },
}

const catastrophicFaqs = [
  {
    question: 'What counts as a catastrophic injury claim?',
    answer:
      'Catastrophic injuries are severe, life-altering harms such as traumatic brain injury, spinal cord injury, limb loss, and other conditions requiring long-term care and major function-loss assessment.',
  },
  {
    question: 'Why are catastrophic injury cases handled differently?',
    answer:
      'The losses often extend well beyond the first hospital bills. The claim may need to address future treatment, rehabilitation, home or vehicle changes, lost earning ability, and help with daily activities.',
  },
  {
    question: 'Do these claims usually involve experts?',
    answer:
      'Often. Treating providers and qualified medical, rehabilitation, vocational, or economic professionals may be needed to explain future care and the lasting effect on work and daily life.',
  },
  {
    question: 'Can a catastrophic injury case settle without trial?',
    answer:
      'Some do. Others require a lawsuit when fault or future losses are disputed. Whether a case settles or reaches trial depends on the evidence and the parties’ positions.',
  },
  {
    question: 'How long do catastrophic injury claims take?',
    answer:
      'Treatment, the need for expert review, fault disputes, and court scheduling can all affect timing. It may take time before doctors can reliably describe future care and permanent limitations.',
  },
  {
    question: 'What damages are usually at issue?',
    answer:
      'Common categories include medical care, future treatment, adaptive needs, lost earnings, diminished earning capacity, and substantial non-economic damages tied to lasting life impact.',
  },
]

export default function CatastrophicInjuryPage() {
  return (
    <ServiceDetailPage
      heroTitle="Catastrophic Injury Claims"
      heroSubtitle="Representation for life-altering injuries, permanent limitations, and future-care needs."
      heroVariant="injury"
      introTitle="A life-altering injury claim must account for what comes next, not only the first bills."
      introParagraphs={[
        'A brain injury, spinal injury, amputation, or other permanent harm can change medical needs, work, housing, transportation, and family responsibilities for years. Those changes may not be clear during the first months of treatment.',
        'The record should explain the current injury and the likely future needs. Treating providers and other qualified professionals may be necessary when an insurer disputes care costs, earning loss, or daily limitations.',
        'Kernal & Associates gathers the liability evidence, medical records, and financial information needed to present those long-term losses and files suit when the claim cannot be resolved fairly.',
      ]}
      focusTitle="What a Catastrophic Injury Claim May Need"
      focusItems={[
        {
          title: 'Medical and Functional Impact Development',
          description:
            'Medical records should explain the diagnosis, current limitations, expected treatment, and future care needs.',
          bullets: [
            'Diagnosis and prognosis integration',
            'Rehabilitation and function-loss analysis',
            'Future procedure and care planning',
            'Daily-life impact documentation',
            'Home, vehicle, and equipment needs',
            'Long-term treatment plan',
          ],
        },
        {
          title: 'Economic and Vocational Losses',
          description:
            'The claim may need to account for missed work, reduced earning ability, care expenses, and lost household services.',
          bullets: [
            'Employment and earnings history',
            'Reduced earning capacity',
            'Future care costs',
            'Lost household services',
            'Lost benefits and retirement contributions',
            'Changes in future costs',
          ],
        },
        {
          title: 'Disputed Fault and Future Losses',
          description:
            'We address disputes about who was responsible, what care will be needed, and how the injury affects work and daily life.',
          bullets: [
            'Identification of responsible parties',
            'Medical and professional reports',
            'Demand supported by records',
            'Discovery and court deadlines',
            'Review of settlement offers',
            'Witness and trial preparation',
          ],
        },
      ]}
      processTitle="Catastrophic Injury Case Workflow"
      processSubtitle="The work begins with preserving liability evidence and continues as future medical and work needs become clearer."
      processSteps={[
        {
          step: '01',
          title: 'Immediate Intake and Evidence Preservation',
          description:
            'We preserve incident evidence and organize early treatment records, expenses, and information about the parties involved.',
        },
        {
          step: '02',
          title: 'Future-Loss and Care-Needs Development',
          description:
            'We gather evidence about future treatment, rehabilitation, equipment, home assistance, work limits, and lost income.',
        },
        {
          step: '03',
          title: 'Demand and Response to Disputes',
          description:
            'We present the supporting records and respond when an insurer disputes future care, earning loss, or daily limitations.',
        },
        {
          step: '04',
          title: 'Litigation and Trial Preparation',
          description:
            'When fault or long-term losses remain disputed, a lawsuit allows the parties to exchange evidence and prepare for trial.',
        },
      ]}
      relatedTitle="Related Severe Injury Pages"
      relatedSubtitle="Review connected high-impact claim categories and strategies."
      relatedLinks={[
        {
          href: '/personal-injury',
          title: 'Personal Injury Hub',
          description: 'Overview of major injury service categories and process.',
          ctaName: 'catastrophic_related_injury_hub',
        },
        {
          href: '/personal-injury/truck-accidents',
          title: 'Truck Accident Litigation',
          description: 'Common source of high-severity injury and wrongful death claims.',
          ctaName: 'catastrophic_related_truck',
        },
        {
          href: '/personal-injury/wrongful-death',
          title: 'Wrongful Death Claims',
          description: 'Family-focused representation for fatal negligence matters.',
          ctaName: 'catastrophic_related_wrongful_death',
        },
        {
          href: '/personal-injury/oil-field-injuries',
          title: 'Oil Field Injury Claims',
          description: 'Industrial incidents involving contractors, equipment, and more than one responsible company.',
          ctaName: 'catastrophic_related_oil_field',
        },
        {
          href: '/oklahoma-city/personal-injury',
          title: 'Oklahoma City Personal Injury',
          description: 'Representation for serious injury claims in Oklahoma City and nearby communities.',
          ctaName: 'catastrophic_related_okc_injury',
        },
        {
          href: '/norman/personal-injury',
          title: 'Norman Personal Injury',
          description: 'Representation for serious injury claims in Norman and Cleveland County.',
          ctaName: 'catastrophic_related_norman_injury',
        },
        {
          href: '/resources/what-to-do-after-car-accident-oklahoma',
          title: 'Post-Accident Evidence Guide',
          description: 'Immediate evidence and documentation checklist useful in severe trauma claims.',
          ctaName: 'catastrophic_related_post_accident_guide',
        },
      ]}
      faqSubtitle="Answers to common catastrophic injury claim questions in Oklahoma."
      faqs={catastrophicFaqs}
      practiceArea="catastrophic-injury"
      actionChecklist={[
        'Preserve all treatment records, referrals, and expense documentation from the first visit.',
        'Track how injuries affect work capacity, daily function, and household needs over time.',
        'Avoid insurer statements or settlement decisions before long-term losses are reviewed.',
        'Seek legal advice early so time-sensitive evidence and deadlines can be addressed.',
      ]}
      ctaTitle="Talk Through a Catastrophic Injury Claim"
      ctaDescription="A review can focus on liability proof, future-care records, available insurance, and filing deadlines."
      ctaLabel="Start Catastrophic Injury Review"
      ctaName="catastrophic_bottom_cta"
    />
  )
}
