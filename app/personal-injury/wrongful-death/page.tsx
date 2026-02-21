import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma Wrongful Death Lawyer',
  description:
    'Wrongful death representation in Oklahoma for families pursuing accountability, statutory compliance, and full financial recovery after fatal negligence events.',
  alternates: { canonical: '/personal-injury/wrongful-death' },
  openGraph: {
    title: 'Oklahoma Wrongful Death Attorney | Kernal & Associates',
    description:
      'Compassionate, evidence-driven, and trial-ready representation for fatal-loss negligence claims across Oklahoma.',
    url: 'https://kernallaw.com/personal-injury/wrongful-death',
  },
}

const wrongfulDeathFaqs = [
  {
    question: 'Who can file a wrongful death claim in Oklahoma?',
    answer:
      'Wrongful death claims are generally filed through the personal representative of the decedent’s estate for eligible beneficiaries. Proper filing structure is essential and should be handled carefully at intake.',
  },
  {
    question: 'How long do families have to file a wrongful death claim?',
    answer:
      'In many Oklahoma cases, wrongful-death filing timelines are measured from the date of death, though case-specific factors can affect deadlines. Early legal review helps protect timing and evidence-preservation requirements.',
  },
  {
    question: 'What damages are available in a wrongful death case?',
    answer:
      'Potential damages may include medical and funeral expenses, lost financial support, companionship loss, and other recoverable losses based on case facts and beneficiary relationships.',
  },
  {
    question: 'Can wrongful death claims involve multiple defendants?',
    answer:
      'Yes. Fatal incidents can involve shared responsibility among drivers, companies, contractors, and other entities. Comprehensive liability mapping is a core part of wrongful-death case development.',
  },
  {
    question: 'Do these cases always settle?',
    answer:
      'Not always. Some resolve through negotiation, while others require litigation to pursue fair compensation and accountability. Trial readiness often influences settlement quality.',
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
      heroSubtitle="Accountability-focused representation for families after fatal negligence and preventable loss events."
      heroVariant="injury"
      introTitle="Wrongful death cases require legal precision, disciplined advocacy, and careful family-centered process."
      introParagraphs={[
        'Families facing wrongful death litigation are managing profound loss while navigating complex legal and procedural demands. Liability proof, estate structure, and damages strategy all need to be handled carefully from the start.',
        'Wrongful death matters are rarely simple. They often involve multiple defendants, high-stakes causation disputes, and insurance defense pressure aimed at limiting valuation before complete family-impact evidence is developed.',
        'Kernal & Associates handles wrongful-death claims with a dual focus: honoring the human impact while building a rigorous case for accountability and full financial recovery under Oklahoma law.',
      ]}
      focusTitle="Wrongful Death Case Priorities"
      focusItems={[
        {
          title: 'Liability and Causation Proof',
          description:
            'Establishing fault and legal causation is central to any wrongful-death claim and often requires multi-party analysis.',
          bullets: [
            'Incident causation analysis',
            'Defendant role and duty evaluation',
            'Evidence and witness development',
            'Counter-defense strategy planning',
            'Multi-defendant responsibility mapping',
            'Expert causation alignment',
          ],
        },
        {
          title: 'Estate and Beneficiary Coordination',
          description:
            'Claim structure must align with statutory requirements, estate procedure, and beneficiary rights from the outset.',
          bullets: [
            'Personal representative coordination',
            'Damages allocation framework',
            'Deadline and filing control',
            'Documentation and compliance tracking',
            'Beneficiary communication protocol',
            'Court-process timeline management',
          ],
        },
        {
          title: 'Full-Loss Valuation',
          description:
            'Wrongful-death claims require complete economic and non-economic damages development supported by clear evidentiary structure.',
          bullets: [
            'Financial support loss modeling',
            'Medical and funeral loss documentation',
            'Family-impact evidentiary development',
            'Litigation-ready damages package',
            'Future household-impact analysis',
            'Long-term support-loss planning',
          ],
        },
      ]}
      processTitle="Wrongful Death Claim Process"
      processSubtitle="A careful process protects family interests and strengthens case value."
      processSteps={[
        {
          step: '01',
          title: 'Initial Legal, Estate, and Timing Review',
          description:
            'We identify filing structure, protect deadlines, preserve evidence, and define immediate legal priorities for the family.',
        },
        {
          step: '02',
          title: 'Liability Investigation',
          description:
            'We develop causation and fault evidence across all potentially responsible individuals and entities.',
        },
        {
          step: '03',
          title: 'Damages Development',
          description:
            'Economic and family-impact losses are documented thoroughly for full-value demand posture and trial support.',
        },
        {
          step: '04',
          title: 'Negotiation and Litigation',
          description:
            'We pursue fair resolution where possible and escalate to litigation when accountability and valuation require it.',
        },
      ]}
      relatedTitle="Related Injury Pages"
      relatedSubtitle="Explore related high-severity claim pages and local representation resources."
      relatedLinks={[
        {
          href: '/personal-injury',
          title: 'Personal Injury Hub',
          description: 'Broad injury representation framework and claim categories.',
          ctaName: 'wd_related_injury_hub',
        },
        {
          href: '/personal-injury/oil-field-injuries',
          title: 'Oil Field Injury Claims',
          description: 'Industrial and workplace fatality claim strategy with multi-party liability analysis.',
          ctaName: 'wd_related_oil_field',
        },
        {
          href: '/personal-injury/truck-accidents',
          title: 'Truck Accident Litigation',
          description: 'Commercial collision claims often linked to severe or fatal outcomes.',
          ctaName: 'wd_related_truck_accidents',
        },
        {
          href: '/personal-injury/car-accidents',
          title: 'Car Accident Claims',
          description: 'Collision-liability strategy where fatal-loss claims follow major roadway events.',
          ctaName: 'wd_related_car_accidents',
        },
        {
          href: '/oklahoma-city/personal-injury',
          title: 'Oklahoma City Personal Injury',
          description: 'Metro claim strategy for high-severity negligence and fatal-loss matters.',
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
        'Avoid insurer interviews or settlement conversations before legal strategy review.',
        'Identify estate-representation and filing structure needs early to protect deadlines.',
        'Begin accountability and damages planning promptly to preserve full recovery options.',
      ]}
      ctaTitle="Begin Wrongful Death Case Review"
      ctaDescription="Early legal structure protects evidence, deadlines, and full recovery options for your family."
      ctaLabel="Start Wrongful Death Review"
      ctaName="wd_bottom_cta"
    />
  )
}
