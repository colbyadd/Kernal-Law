import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma Car Accident Lawyer',
  description:
    'Car accident representation in Oklahoma focused on liability proof, complete damages development, and insurer-pressure response in high-stakes injury claims.',
  alternates: { canonical: '/personal-injury/car-accidents' },
  openGraph: {
    title: 'Oklahoma Car Accident Attorney | Kernal & Associates',
    description:
      'Evidence-driven Oklahoma car-accident representation for disputed fault, severe injuries, and undervalued insurance offers.',
    url: 'https://kernallaw.com/personal-injury/car-accidents',
  },
}

const carAccidentFaqs = [
  {
    question: 'What should I do immediately after a car accident in Oklahoma?',
    answer:
      'Get medical evaluation first, report the crash, preserve photos and witness details, and avoid recorded insurer statements before legal review. Early evidence preservation directly affects liability strength and claim value.',
  },
  {
    question: 'How much is my car accident claim worth?',
    answer:
      'Claim value depends on liability strength, injury severity, treatment progression, wage loss, future impairment, and available coverage. Strong valuation requires complete medical and economic documentation over time.',
  },
  {
    question: 'Should I accept the first insurance offer?',
    answer:
      'Usually not without legal review. Early offers are often discounted before treatment and long-term impact are clear. Settling too early can waive future recovery even if symptoms worsen.',
  },
  {
    question: 'What if the other driver says I caused the crash?',
    answer:
      'Fault disputes are common and often insurer-driven. Liability should be built with objective evidence including scene data, witness statements, damage patterns, and timeline reconstruction.',
  },
  {
    question: 'Can I recover compensation if I was partially at fault?',
    answer:
      'Possibly. Oklahoma comparative-fault rules may still allow recovery depending on fault allocation. Percentage disputes are often central to negotiation and, when necessary, litigation strategy.',
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
      heroSubtitle="Evidence-driven representation for serious collisions and insurer dispute across Oklahoma."
      heroVariant="injury"
      introTitle="Car accident claims are won with disciplined proof, timing, and pressure."
      introParagraphs={[
        'Insurance carriers begin claim strategy immediately, often before complete medical information exists. Without structured legal development, valid claims can be undercut through early fault-shifting, partial-record valuation, and fast-closeout pressure.',
        'A high-value car-accident case requires parallel development: proving fault while documenting full damages over time. If one side is underdeveloped, the insurer can use that gap to discount recovery.',
        'Kernal & Associates builds car-accident files for full-value outcomes. We establish liability from objective evidence, develop damages with medical and economic rigor, and prepare litigation leverage when settlement proposals are not reasonable.',
      ]}
      focusTitle="How We Build a Strong Car Accident Claim"
      focusItems={[
        {
          title: 'Liability and Fault Analysis',
          description:
            'Objective fault evidence is the engine of settlement value and trial posture in disputed collision claims.',
          bullets: [
            'Police report and scene reconstruction',
            'Witness credibility and sequence review',
            'Vehicle damage pattern analysis',
            'Comparative fault defense strategy',
            'Intersection and right-of-way mapping',
            'Digital timeline consolidation',
          ],
        },
        {
          title: 'Medical and Economic Damage Proof',
          description:
            'Claim value improves when treatment progression and long-term impact are documented with precision and consistency.',
          bullets: [
            'Treatment timeline and prognosis',
            'Future care and impairment analysis',
            'Lost wages and earning-capacity losses',
            'Pain and life-impact evidence package',
            'Medical-gap explanation strategy',
            'Out-of-pocket loss documentation',
          ],
        },
        {
          title: 'Insurer Negotiation and Escalation',
          description:
            'We negotiate from complete demand packages and escalate quickly when delay, undervaluation, or bad-faith behavior continues.',
          bullets: [
            'Coverage and policy-limit mapping',
            'Demand strategy sequencing',
            'Bad-faith pressure points',
            'Litigation readiness if needed',
            'Recorded-statement risk control',
            'Settlement-offer benchmarking',
          ],
        },
      ]}
      processTitle="Car Accident Claim Process"
      processSubtitle="A structured claim process protects both immediate recovery and long-term damages."
      processSteps={[
        {
          step: '01',
          title: 'Immediate Intake and Evidence Preservation',
          description:
            'We secure crash documentation, witness details, and insurer communications before memory and evidence quality degrade.',
        },
        {
          step: '02',
          title: 'Medical and Liability Development',
          description:
            'Treatment records and liability proof are developed in parallel so valuation is evidence-backed instead of assumption-driven.',
        },
        {
          step: '03',
          title: 'Demand Package and Negotiation',
          description:
            'We present full-value demand supported by liability proof and complete damages records, then challenge discount tactics directly.',
        },
        {
          step: '04',
          title: 'Litigation if Necessary',
          description:
            'If insurers refuse reasonable terms, we escalate through filing, discovery, and trial-prepared litigation.',
        },
      ]}
      relatedTitle="Related Injury and Location Pages"
      relatedSubtitle="Use these pages to evaluate next steps for related crash and severe injury claims."
      relatedLinks={[
        {
          href: '/personal-injury',
          title: 'Personal Injury Hub',
          description: 'Overview of injury representation strategy and claim categories.',
          ctaName: 'car_related_injury_hub',
        },
        {
          href: '/personal-injury/truck-accidents',
          title: 'Truck Accident Claims',
          description: 'Commercial collision strategy with carrier and regulatory evidence requirements.',
          ctaName: 'car_related_truck_accidents',
        },
        {
          href: '/personal-injury/uninsured-motorist',
          title: 'Uninsured Motorist Claims',
          description: 'Coverage-aware strategy where at-fault drivers lack adequate insurance.',
          ctaName: 'car_related_uninsured',
        },
        {
          href: '/personal-injury/catastrophic-injury',
          title: 'Catastrophic Injury Claims',
          description: 'Long-horizon damages strategy for life-altering trauma cases.',
          ctaName: 'car_related_catastrophic',
        },
        {
          href: '/oklahoma-city/personal-injury',
          title: 'Oklahoma City Personal Injury',
          description: 'Metro injury strategy for high-volume corridor collisions and major damages.',
          ctaName: 'car_related_oklahoma_city_injury',
        },
        {
          href: '/norman/personal-injury',
          title: 'Norman Personal Injury',
          description: 'Cleveland County claim strategy for south-metro crash and negligence losses.',
          ctaName: 'car_related_norman_injury',
        },
      ]}
      faqSubtitle="Answers to common questions after Oklahoma vehicle collisions."
      faqs={carAccidentFaqs}
      practiceArea="car-accidents"
      actionChecklist={[
        'Get medical evaluation and keep a complete treatment timeline from day one.',
        'Preserve scene photos, witness contacts, and all insurer communications.',
        'Avoid recorded insurance statements before legal strategy review.',
        'Start claim planning early to prevent fault-shifting and undervaluation pressure.',
      ]}
      ctaTitle="Protect the Value of Your Car Accident Claim"
      ctaDescription="Early strategy prevents low-value settlement pressure and protects long-term claim leverage."
      ctaLabel="Start Car Accident Case Review"
      ctaName="car_bottom_cta"
    />
  )
}
