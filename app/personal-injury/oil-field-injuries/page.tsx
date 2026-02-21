import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma Oil Field Injury Lawyer',
  description:
    'Representation for Oklahoma oil field and industrial injury claims with focus on third-party liability, technical evidence preservation, and catastrophic-loss recovery strategy.',
  alternates: { canonical: '/personal-injury/oil-field-injuries' },
  openGraph: {
    title: 'Oklahoma Oil Field Injury Attorney | Kernal & Associates',
    description:
      'Strategic representation for rig, refinery, and industrial injury cases with multi-party liability analysis across Oklahoma.',
    url: 'https://kernallaw.com/personal-injury/oil-field-injuries',
  },
}

const oilFieldFaqs = [
  {
    question: 'Are oil field injury claims only workers compensation cases?',
    answer:
      'Not always. Some incidents involve third-party liability beyond workers compensation, including contractors, equipment vendors, and site operators. Full liability review is essential before narrowing claim scope.',
  },
  {
    question: 'What causes are common in oil field injury cases?',
    answer:
      'Common factors include equipment failure, inadequate maintenance, unsafe procedure execution, supervision breakdowns, and contractor coordination failures. Multiple entities may share fault in one event.',
  },
  {
    question: 'What damages can be recovered in an oil field injury claim?',
    answer:
      'Depending on case structure, damages may include medical costs, lost wages, reduced earning capacity, long-term care needs, and non-economic losses such as pain and suffering.',
  },
  {
    question: 'How soon should evidence be preserved after an industrial accident?',
    answer:
      'Immediately. Site conditions, inspection records, and machine-state data can change quickly. Early legal action materially improves access to high-value evidence.',
  },
  {
    question: 'Can catastrophic injury cases require experts?',
    answer:
      'Yes. Technical, medical, and economic experts are often necessary to establish liability mechanisms and full future-loss valuation in severe industrial injury matters.',
  },
  {
    question: 'How long do oil field injury cases take?',
    answer:
      'Case duration depends on liability complexity, injury severity, and number of defendants. Complex industrial matters often require extended development before full-value resolution.',
  },
]

export default function OilFieldInjuriesPage() {
  return (
    <ServiceDetailPage
      heroTitle="Oil Field Injury Claims"
      heroSubtitle="High-stakes industrial injury representation for Oklahoma rig, refinery, and field operations."
      heroVariant="injury"
      introTitle="Industrial injury cases require technical investigation from day one."
      introParagraphs={[
        'Oil field and industrial injury claims often involve layered liability among operators, contractors, and equipment-related entities, along with specialized safety and maintenance standards. Without early case control, critical evidence can be lost or narrowed by defense framing.',
        'Industrial defendants frequently move quickly to shape causation narratives. A plaintiff-side strategy must move just as fast on evidence preservation, technical analysis, and liability mapping to protect full recovery options.',
        'Kernal & Associates develops oil field injury claims with immediate preservation strategy, multi-party liability analysis, and long-term damages modeling designed for negotiation leverage and litigation strength.',
      ]}
      focusTitle="Core Oil Field Injury Case Priorities"
      focusItems={[
        {
          title: 'Liability Mapping Across Entities',
          description:
            'Industrial events frequently involve multiple responsible parties with overlapping operational roles.',
          bullets: [
            'Contractor and operator role analysis',
            'Site-control responsibility review',
            'Equipment vendor exposure assessment',
            'Third-party claim pathway planning',
            'Contract allocation review',
            'Supervision-chain accountability analysis',
          ],
        },
        {
          title: 'Technical Evidence Preservation',
          description:
            'Industrial evidence must be secured quickly and interpreted accurately before records or site conditions change.',
          bullets: [
            'Incident scene and system-state capture',
            'Maintenance and inspection record review',
            'Operational protocol deviation analysis',
            'Safety compliance document audit',
            'Electronic monitoring data collection',
            'Failure-mode investigation support',
          ],
        },
        {
          title: 'Catastrophic Loss Valuation',
          description:
            'Severe industrial injuries require full long-horizon damages modeling supported by medical and economic analysis.',
          bullets: [
            'Future care requirement analysis',
            'Vocational and wage-loss modeling',
            'Disability and life-impact evidence',
            'Trial-ready damages framework',
            'Household-support loss analysis',
            'Permanent-impairment valuation planning',
          ],
        },
      ]}
      processTitle="Oil Field Injury Claim Process"
      processSubtitle="Early preservation and technical case development are critical to outcome quality."
      processSteps={[
        {
          step: '01',
          title: 'Immediate Intake and Preservation Control',
          description:
            'We secure incident records, identify responsible entities, and initiate evidence-hold strategy immediately.',
        },
        {
          step: '02',
          title: 'Technical Investigation and Liability Mapping',
          description:
            'Operational records, equipment history, and safety protocol compliance are analyzed in detail across involved entities.',
        },
        {
          step: '03',
          title: 'Damages and Future-Loss Development',
          description:
            'Medical and economic projections are structured for full-value negotiation and litigation support.',
        },
        {
          step: '04',
          title: 'Negotiation and Litigation',
          description:
            'We pursue full accountability and escalate to litigation when settlement posture is inadequate.',
        },
      ]}
      relatedTitle="Related Injury Pages"
      relatedSubtitle="Review related severe injury categories and local representation pages."
      relatedLinks={[
        {
          href: '/personal-injury',
          title: 'Personal Injury Hub',
          description: 'Overview of high-value injury claim strategy and service categories.',
          ctaName: 'oil_related_injury_hub',
        },
        {
          href: '/personal-injury/wrongful-death',
          title: 'Wrongful Death Claims',
          description: 'Representation for fatal-loss claims involving negligence or unsafe operations.',
          ctaName: 'oil_related_wrongful_death',
        },
        {
          href: '/personal-injury/truck-accidents',
          title: 'Truck Accident Litigation',
          description: 'High-severity collision representation with layered liability analysis.',
          ctaName: 'oil_related_truck_accidents',
        },
        {
          href: '/personal-injury/catastrophic-injury',
          title: 'Catastrophic Injury Claims',
          description: 'Long-horizon damages strategy for permanent trauma and major life-impact losses.',
          ctaName: 'oil_related_catastrophic',
        },
        {
          href: '/oklahoma-city/personal-injury',
          title: 'Oklahoma City Personal Injury',
          description: 'Metro injury strategy for industrial and severe negligence losses.',
          ctaName: 'oil_related_okc_injury',
        },
        {
          href: '/norman/personal-injury',
          title: 'Norman Personal Injury',
          description: 'Cleveland County strategy for south-metro industrial and severe-trauma claims.',
          ctaName: 'oil_related_norman_injury',
        },
        {
          href: '/resources/what-to-do-after-car-accident-oklahoma',
          title: 'Evidence Preservation Guide',
          description: 'Practical checklist for documentation and insurer-risk control after serious incidents.',
          ctaName: 'oil_related_evidence_guide',
        },
      ]}
      faqSubtitle="Answers to common questions after oil field and industrial injury incidents."
      faqs={oilFieldFaqs}
      practiceArea="oil-field-injuries"
      actionChecklist={[
        'Get immediate medical care and preserve all records from the first treatment encounter.',
        'Document incident facts, site details, and involved entities while information is fresh.',
        'Preserve all communications and avoid recorded insurer statements before legal review.',
        'Start legal investigation early so technical and operational evidence can be protected.',
      ]}
      ctaTitle="Protect Your Industrial Injury Claim Early"
      ctaDescription="Technical evidence and liability pathways should be evaluated before insurers define the case narrative."
      ctaLabel="Start Oil Field Injury Review"
      ctaName="oil_bottom_cta"
    />
  )
}
