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
      'Trial-ready representation for life-altering injury claims requiring long-horizon medical and economic damages strategy.',
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
      'These cases require future-care planning, vocational and economic modeling, and long-term loss proof beyond immediate medical bills. Underdeveloped valuation can significantly understate real damages.',
  },
  {
    question: 'Do these claims usually involve experts?',
    answer:
      'Yes. Medical, rehabilitation, and economic experts are commonly required to document long-term impact and support damages against insurer challenge.',
  },
  {
    question: 'Can a catastrophic injury case settle without trial?',
    answer:
      'Some do, but trial readiness is often essential to obtaining fair offers. High-value catastrophic cases are heavily contested and require strong litigation posture.',
  },
  {
    question: 'How long do catastrophic injury claims take?',
    answer:
      'Complexity, treatment progression, and liability disputes can extend timelines. A disciplined process is necessary to protect full-value long-term recovery.',
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
      heroSubtitle="Long-horizon legal strategy for life-altering injuries, permanent limitations, and future-care needs."
      heroVariant="injury"
      introTitle="Catastrophic injury cases must be valued for a lifetime, not a quarter."
      introParagraphs={[
        'Severe injuries can create decades of medical, vocational, and quality-of-life impact. Claims focused only on immediate bills often miss the largest categories of recoverable loss.',
        'Catastrophic cases are usually defended aggressively because long-term damages are substantial. Without structured expert-supported development, insurers may discount future care, earning loss, and life-impact categories.',
        'Kernal & Associates develops catastrophic injury claims with comprehensive future-loss modeling, expert-supported valuation, and litigation-first readiness.',
      ]}
      focusTitle="High-Stakes Claim Priorities"
      focusItems={[
        {
          title: 'Medical and Functional Impact Development',
          description:
            'The claim record must reflect current condition and projected long-term limitations with precision.',
          bullets: [
            'Diagnosis and prognosis integration',
            'Rehabilitation and function-loss analysis',
            'Future procedure and care planning',
            'Daily-life impact documentation',
            'Adaptive-needs forecasting',
            'Long-term treatment continuity strategy',
          ],
        },
        {
          title: 'Economic and Vocational Valuation',
          description:
            'Catastrophic losses require rigorous earnings and life-care modeling to prevent major undervaluation.',
          bullets: [
            'Earnings trajectory analysis',
            'Capacity-loss projections',
            'Life-care cost frameworks',
            'Household support impact modeling',
            'Benefit-loss and retirement-impact review',
            'Inflation-adjusted future-cost planning',
          ],
        },
        {
          title: 'Litigation and Negotiation Leverage',
          description:
            'High-value claims need credible trial exposure to produce meaningful settlement movement.',
          bullets: [
            'Defendant exposure mapping',
            'Expert-report sequencing',
            'Demand leverage development',
            'Trial calendar readiness',
            'Settlement-offer stress testing',
            'Cross-examination preparation framework',
          ],
        },
      ]}
      processTitle="Catastrophic Injury Case Workflow"
      processSubtitle="Comprehensive evidence development is central to fair long-term recovery."
      processSteps={[
        {
          step: '01',
          title: 'Immediate Intake and Evidence Preservation',
          description:
            'We secure liability evidence and establish documentation structure before early treatment and incident details fragment.',
        },
        {
          step: '02',
          title: 'Future-Loss and Care-Needs Development',
          description:
            'Medical, care, and vocational impacts are structured into long-horizon damages analysis with expert support.',
        },
        {
          step: '03',
          title: 'Demand and Defense-Position Testing',
          description:
            'We present full-value demands and challenge insurer attempts to narrow future-loss and life-impact categories.',
        },
        {
          step: '04',
          title: 'Litigation and Trial Preparation',
          description:
            'Where necessary, we advance to full litigation to protect total long-term claim value.',
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
          description: 'Industrial injury strategy for severe trauma and multi-party liability events.',
          ctaName: 'catastrophic_related_oil_field',
        },
        {
          href: '/oklahoma-city/personal-injury',
          title: 'Oklahoma City Personal Injury',
          description: 'Metro strategy for high-severity negligence and catastrophic-damages claims.',
          ctaName: 'catastrophic_related_okc_injury',
        },
        {
          href: '/norman/personal-injury',
          title: 'Norman Personal Injury',
          description: 'Cleveland County claim strategy for major trauma and long-term loss cases.',
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
        'Avoid insurer statements or settlement decisions before long-term valuation is reviewed.',
        'Start legal strategy early so future-care and economic-loss proof is built correctly.',
      ]}
      ctaTitle="Build a Full-Value Catastrophic Injury Case"
      ctaDescription="These cases demand long-horizon planning and expert-backed valuation from the first legal steps."
      ctaLabel="Start Catastrophic Injury Review"
      ctaName="catastrophic_bottom_cta"
    />
  )
}
