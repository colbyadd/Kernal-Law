import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma Oil Field Injury Lawyer',
  description:
    'Oklahoma oil field and industrial injury representation involving third-party liability, equipment records, serious injuries, and wrongful death.',
  alternates: { canonical: '/personal-injury/oil-field-injuries' },
  openGraph: {
    title: 'Oklahoma Oil Field Injury Attorney | Kernal & Associates',
    description:
      'Representation after Oklahoma oil field and industrial incidents involving serious injury or wrongful death.',
    url: 'https://kernallaw.com/personal-injury/oil-field-injuries',
  },
}

const oilFieldFaqs = [
  {
    question: 'Are oil field injury claims only workers compensation cases?',
    answer:
      'Not always. A worker may have a workers’ compensation claim and also have a separate claim against a contractor, equipment vendor, site operator, or another third party. The available claims depend on who caused the incident and each company’s role.',
  },
  {
    question: 'What causes are common in oil field injury cases?',
    answer:
      'Possible causes include equipment failure, poor maintenance, unsafe procedures, inadequate supervision, and coordination failures among contractors. More than one company may be responsible for the same incident.',
  },
  {
    question: 'What damages can be recovered in an oil field injury claim?',
    answer:
      'Depending on case structure, damages may include medical costs, lost wages, reduced earning capacity, long-term care needs, and non-economic losses such as pain and suffering.',
  },
  {
    question: 'How soon should evidence be preserved after an industrial accident?',
    answer:
      'As soon as possible. Site conditions can change, equipment can be repaired, and electronic or inspection records may be overwritten or discarded. Prompt preservation requests can help keep that evidence available.',
  },
  {
    question: 'Can catastrophic injury cases require experts?',
    answer:
      'They can. Engineers or other technical professionals may be needed to explain how equipment or operations failed. Medical, vocational, or economic professionals may also be needed to address lasting injuries and future losses.',
  },
  {
    question: 'How long do oil field injury cases take?',
    answer:
      'The timing depends on the injury, the number of companies involved, the available records, and whether fault is disputed. An industrial case may take longer when technical investigation or litigation is required.',
  },
]

export default function OilFieldInjuriesPage() {
  return (
    <ServiceDetailPage
      heroTitle="Oil Field Injury Claims"
      heroSubtitle="Representation after serious incidents at Oklahoma rigs, refineries, and industrial sites."
      heroVariant="injury"
      introTitle="Industrial injury cases require technical investigation from day one."
      introParagraphs={[
        'An oil field or industrial incident may involve an operator, several contractors, equipment suppliers, and maintenance companies. Contracts, site-control records, inspection files, and machine data may be needed to understand who was responsible.',
        'The scene may change quickly after an incident. Equipment can be repaired or moved, and electronic records can be lost, so early photographs, witness information, and preservation requests matter.',
        'Kernal & Associates investigates the companies involved, preserves technical records, reviews possible third-party claims, and documents the medical and financial effects of the injury.',
      ]}
      focusTitle="Core Oil Field Injury Case Priorities"
      focusItems={[
        {
          title: 'Responsibility Across Companies',
          description:
            'We identify who owned the equipment, controlled the site, directed the work, and had responsibility for safety or maintenance.',
          bullets: [
            'Contractor and operator role analysis',
            'Site-control responsibility review',
            'Equipment vendor exposure assessment',
            'Possible third-party claims',
            'Contract allocation review',
            'Supervision and reporting structure',
          ],
        },
        {
          title: 'Technical Evidence Preservation',
          description:
            'Site conditions, equipment, electronic data, and company records should be preserved before they change or disappear.',
          bullets: [
            'Incident scene and system-state capture',
            'Maintenance and inspection record review',
            'Departures from operating procedures',
            'Safety policies and compliance records',
            'Electronic monitoring data collection',
            'Failure-mode investigation support',
          ],
        },
        {
          title: 'Long-Term Injury and Financial Losses',
          description:
            'Serious injuries may require evidence of future medical care, reduced earning ability, and permanent changes in daily life.',
          bullets: [
            'Future care requirement analysis',
            'Vocational and wage-loss analysis',
            'Disability and life-impact evidence',
            'Medical and financial loss records',
            'Lost household services',
            'Permanent impairment and limitations',
          ],
        },
      ]}
      processTitle="Oil Field Injury Claim Process"
      processSubtitle="The work begins with preserving the scene and records, then identifying each company’s role."
      processSteps={[
        {
          step: '01',
          title: 'Initial Review and Evidence Preservation',
          description:
            'We identify the companies involved and request preservation of incident records, equipment, video, and electronic data.',
        },
        {
          step: '02',
          title: 'Technical Investigation and Responsibility Review',
          description:
            'We examine operating records, equipment history, safety procedures, contracts, and each company’s control over the work.',
        },
        {
          step: '03',
          title: 'Damages and Future-Loss Development',
          description:
            'We gather medical, wage, and other records showing the immediate losses and any lasting care or work limitations.',
        },
        {
          step: '04',
          title: 'Negotiation and Litigation',
          description:
            'We negotiate with responsible companies and insurers. If material disputes remain, we can ask a court or jury to decide them.',
        },
      ]}
      relatedTitle="Related Injury Pages"
      relatedSubtitle="Review related severe injury categories and local representation pages."
      relatedLinks={[
        {
          href: '/personal-injury',
          title: 'Personal Injury Hub',
          description: 'Learn about other accident and injury claims handled across Oklahoma.',
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
          description: 'Legal issues when industrial trauma causes permanent limitations or future care needs.',
          ctaName: 'oil_related_catastrophic',
        },
        {
          href: '/oklahoma-city/personal-injury',
          title: 'Oklahoma City Personal Injury',
          description: 'Help with industrial and other injury claims in the Oklahoma City area.',
          ctaName: 'oil_related_okc_injury',
        },
        {
          href: '/norman/personal-injury',
          title: 'Norman Personal Injury',
          description: 'Industrial and other injury representation in Norman and Cleveland County.',
          ctaName: 'oil_related_norman_injury',
        },
        {
          href: '/resources/what-to-do-after-car-accident-oklahoma',
          title: 'Evidence Preservation Guide',
          description: 'A practical checklist for preserving records and communicating with insurers after an injury.',
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
      ctaTitle="Review an Oil Field or Industrial Injury"
      ctaDescription="An early review can identify the companies, equipment records, and deadlines that may matter."
      ctaLabel="Start Oil Field Injury Review"
      ctaName="oil_bottom_cta"
    />
  )
}
