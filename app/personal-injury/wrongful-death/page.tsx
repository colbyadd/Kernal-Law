import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma Wrongful Death Lawyer',
  description:
    'Oklahoma wrongful death representation for families facing estate questions, filing deadlines, financial losses, and fatal negligence claims.',
  alternates: { canonical: '/personal-injury/wrongful-death' },
  openGraph: {
    title: 'Oklahoma Wrongful Death Attorney | Kernal & Associates',
    description:
      'Legal help for Oklahoma families after a death caused by negligence.',
    url: 'https://kernallaw.com/personal-injury/wrongful-death',
  },
}

const wrongfulDeathFaqs = [
  {
    question: 'Who can file a wrongful death claim in Oklahoma?',
    answer:
      'A wrongful death claim is generally brought by the personal representative of the deceased person’s estate for the benefit of those entitled under Oklahoma law. The correct estate and filing procedure depends on the circumstances.',
  },
  {
    question: 'How long do families have to file a wrongful death claim?',
    answer:
      'Oklahoma law imposes filing deadlines, and the date of death is often important. Other facts can affect the deadline, so families should obtain case-specific advice promptly rather than rely on a general time estimate.',
  },
  {
    question: 'What damages are available in a wrongful death case?',
    answer:
      'Potential damages may include medical and funeral expenses, lost financial support, companionship loss, and other recoverable losses based on case facts and beneficiary relationships.',
  },
  {
    question: 'Can wrongful death claims involve multiple defendants?',
    answer:
      'Yes. Drivers, employers, contractors, property owners, manufacturers, or other parties may share responsibility depending on what happened and who controlled the conduct or equipment involved.',
  },
  {
    question: 'Do these cases always settle?',
    answer:
      'No. Some claims are resolved through negotiation, while others require a lawsuit and may proceed to trial. The course of a case depends on the evidence and the parties’ positions.',
  },
  {
    question: 'What should families preserve after a fatal accident?',
    answer:
      'Preserve incident records, communications, expense documents, and financial-loss information. Early evidence preservation is especially important in high-dispute liability matters.',
  },
]

export default function WrongfulDeathPage() {
  return (
    <ServiceDetailPage
      heroTitle="Wrongful Death Claims"
      heroSubtitle="Legal guidance for Oklahoma families after a death caused by negligence."
      heroVariant="injury"
      introTitle="Families should not have to sort out estate procedure, deadlines, and insurers on their own."
      introParagraphs={[
        'A wrongful death claim raises practical questions at an already difficult time: who may bring the claim, whether an estate must be opened, what deadlines apply, and which people or companies may be responsible.',
        'The evidence can include incident records, witness accounts, company documents, medical and funeral expenses, income history, and information about the loss to the family. When several parties are involved, each role must be examined separately.',
        'Kernal & Associates handles the legal and procedural work, keeps the family informed, and builds the claim from the available evidence. No result can undo the loss, but the process can seek the compensation Oklahoma law allows.',
      ]}
      focusTitle="Wrongful Death Case Priorities"
      focusItems={[
        {
          title: 'Liability and Causation Proof',
          description:
            'The evidence must show what happened, who was responsible, and how the wrongful conduct caused the death.',
          bullets: [
            'Incident causation analysis',
            'Defendant role and duty evaluation',
            'Evidence and witness development',
            'Review of disputed defenses',
            'Responsibility among multiple defendants',
            'Expert review when needed',
          ],
        },
        {
          title: 'Estate and Beneficiary Coordination',
          description:
            'The claim must follow Oklahoma estate procedure and account for the people entitled to recover under the law.',
          bullets: [
            'Personal representative coordination',
            'Beneficiary and loss information',
            'Filing deadlines and court requirements',
            'Required documents and records',
            'Family communications',
            'Estate and court timelines',
          ],
        },
        {
          title: 'Family and Financial Losses',
          description:
            'The claim should document the economic losses and the personal harm recognized by Oklahoma law.',
          bullets: [
            'Lost financial support',
            'Medical and funeral loss documentation',
            'Evidence of the loss to the family',
            'Medical, financial, and family records',
            'Changes in household services',
            'Future financial support',
          ],
        },
      ]}
      processTitle="Wrongful Death Claim Process"
      processSubtitle="The first steps address the estate, filing deadline, and preservation of evidence."
      processSteps={[
        {
          step: '01',
          title: 'Initial Legal, Estate, and Timing Review',
          description:
            'We determine who can bring the claim, identify the likely deadline, and address immediate estate or evidence needs.',
        },
        {
          step: '02',
          title: 'Liability Investigation',
          description:
            'We gather incident records and examine the conduct of each person or company that may be responsible.',
        },
        {
          step: '03',
          title: 'Damages Development',
          description:
            'We document medical and funeral expenses, financial support, and other losses available under Oklahoma law.',
        },
        {
          step: '04',
          title: 'Negotiation and Litigation',
          description:
            'We seek a resolution that reflects the evidence and Oklahoma law. If the parties cannot agree, we can continue the claim in court.',
        },
      ]}
      relatedTitle="Related Injury Pages"
      relatedSubtitle="Explore related high-severity claim pages and local representation resources."
      relatedLinks={[
        {
          href: '/personal-injury',
          title: 'Personal Injury Hub',
          description: 'Review the firm’s broader work for people harmed by negligence.',
          ctaName: 'wd_related_injury_hub',
        },
        {
          href: '/personal-injury/oil-field-injuries',
          title: 'Oil Field Injury Claims',
          description: 'Industrial incidents involving contractors, equipment, and more than one responsible company.',
          ctaName: 'wd_related_oil_field',
        },
        {
          href: '/personal-injury/truck-accidents',
          title: 'Truck Accident Litigation',
          description: 'Commercial collision claims involving serious injuries or death.',
          ctaName: 'wd_related_truck_accidents',
        },
        {
          href: '/personal-injury/car-accidents',
          title: 'Car Accident Claims',
          description: 'Fault and insurance issues after a serious passenger vehicle collision.',
          ctaName: 'wd_related_car_accidents',
        },
        {
          href: '/oklahoma-city/personal-injury',
          title: 'Oklahoma City Personal Injury',
          description: 'Wrongful death and injury representation for Oklahoma City-area families.',
          ctaName: 'wd_related_okc_injury',
        },
        {
          href: '/norman/personal-injury',
          title: 'Norman Personal Injury',
          description: 'Cleveland County injury and fatal-loss representation for south-metro families.',
          ctaName: 'wd_related_norman_injury',
        },
        {
          href: '/resources/what-to-do-after-car-accident-oklahoma',
          title: 'Post-Accident Evidence Guide',
          description: 'Immediate preservation checklist relevant to fatal and catastrophic collision matters.',
          ctaName: 'wd_related_post_accident_guide',
        },
      ]}
      faqSubtitle="Answers to common questions families ask after fatal negligence incidents."
      faqs={wrongfulDeathFaqs}
      practiceArea="wrongful-death"
      actionChecklist={[
        'Preserve all incident records, correspondence, and financial documents in one secure file.',
        'Ask for legal advice before an insurer interview or settlement discussion.',
        'Identify the personal representative and any estate filing needs early.',
        'Have the filing deadline and possible responsible parties reviewed promptly.',
      ]}
      ctaTitle="Begin Wrongful Death Case Review"
      ctaDescription="A private consultation can address the estate, filing deadline, evidence, and insurance questions."
      ctaLabel="Start Wrongful Death Review"
      ctaName="wd_bottom_cta"
    />
  )
}
