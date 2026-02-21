import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma Warrants Defense Lawyer',
  description:
    'Defense strategy for active Oklahoma warrants with controlled surrender planning, bond preparation, and transition into full criminal-case defense.',
  alternates: { canonical: '/criminal-defense/warrants' },
  openGraph: {
    title: 'Oklahoma Warrants Defense | Kernal & Associates',
    description:
      'Resolve active Oklahoma warrants using planned court-entry strategy, risk control, and trial-aware criminal defense planning.',
    url: 'https://kernallaw.com/criminal-defense/warrants',
  },
}

const warrantsFaqs = [
  {
    question: 'What should I do if I think I have an active warrant?',
    answer:
      'Do not ignore it or rely on assumptions. Confirm status through counsel and build a controlled response plan. Unplanned law-enforcement contact can increase custody exposure and reduce strategic options.',
  },
  {
    question: 'Can I be arrested at work or home for an active warrant?',
    answer:
      'Potentially yes. Active warrants can be enforced during traffic stops, at home, at work, or in routine contact. Early planning improves timing control and reduces avoidable disruption.',
  },
  {
    question: 'Is safe surrender better than waiting?',
    answer:
      'Often, yes. Planned surrender can improve bond presentation, reduce unnecessary custody time, and create a more controlled legal entry than an unexpected arrest event.',
  },
  {
    question: 'Can warrants be cleared without jail?',
    answer:
      'Sometimes. Outcomes depend on warrant type, underlying charges, prior history, and court posture. Counsel can evaluate realistic pathways before appearance so expectations and risk are clear.',
  },
  {
    question: 'What if the warrant came from a missed court date?',
    answer:
      'Failure-to-appear warrants are common and often manageable with structured response. Prompt action improves flexibility for bond conditions, scheduling, and overall case posture.',
  },
  {
    question: 'Should I call the court myself?',
    answer:
      'In most cases, counsel should coordinate communication so appearance strategy, risk messaging, and procedural steps are controlled and legally informed.',
  },
]

export default function WarrantsPage() {
  return (
    <ServiceDetailPage
      heroTitle="Warrants Defense"
      heroSubtitle="Controlled legal strategy for active warrants, missed appearance risk, and urgent court-entry planning."
      heroVariant="criminal"
      introTitle="Active warrants should be handled with a controlled legal plan, not guesswork."
      introParagraphs={[
        'Warrant situations are often where avoidable damage happens. People wait too long, rely on incomplete information, or make unplanned contact with law enforcement that creates unnecessary custody and operational disruption.',
        'A strong warrant strategy starts with accurate status verification, then moves into planned court entry, bond preparation, and next-stage defense planning. Clearing the warrant is critical, but it is usually only the first move in a larger criminal case.',
        'Kernal & Associates develops warrant-response strategy designed to reduce uncertainty, control timing where possible, and position the underlying case for effective defense from the first court appearance.',
      ]}
      focusTitle="Warrant Resolution Priorities"
      focusItems={[
        {
          title: 'Status Verification and Exposure Mapping',
          description:
            'A precise read of warrant type, source case, and current docket posture is the first requirement for informed decision-making.',
          bullets: [
            'Warrant source and type verification',
            'Linked charge and docket review',
            'Custody and bond risk analysis',
            'Timeline and jurisdiction planning',
            'Failure-to-appear context review',
            'Collateral exposure mapping',
          ],
        },
        {
          title: 'Safe Surrender Strategy',
          description:
            'Planned court entry can improve predictability and lower avoidable disruption compared with reactive arrest scenarios.',
          bullets: [
            'Appearance logistics planning',
            'Bond readiness package',
            'Documentation and support preparation',
            'Court presentation sequencing',
            'Custody-time minimization strategy',
            'Family and work disruption planning',
          ],
        },
        {
          title: 'Post-Resolution Defense Planning',
          description:
            'Clearing the warrant usually opens the next stage of charge defense, where early missteps can still affect long-term outcome.',
          bullets: [
            'Next-hearing preparation',
            'Charge-defense transition plan',
            'Compliance and date-tracking controls',
            'Long-term record-risk management',
            'Evidence request sequencing',
            'Negotiation versus litigation planning',
          ],
        },
      ]}
      processTitle="Warrants Defense Workflow"
      processSubtitle="A structured workflow improves court control, timing visibility, and downstream defense posture."
      processSteps={[
        {
          step: '01',
          title: 'Warrant Confirmation and Strategic Intake',
          description:
            'We confirm active status, source case, and immediate risk factors, then set legal communication boundaries for controlled next steps.',
        },
        {
          step: '02',
          title: 'Surrender and Bond Planning',
          description:
            'We design the safest practical court-entry approach with bond-position preparation and documentation aligned to your case posture.',
        },
        {
          step: '03',
          title: 'Court Appearance and Warrant Resolution',
          description:
            'During initial proceedings, we advocate for the strongest available bond and condition outcomes while protecting downstream defense options.',
        },
        {
          step: '04',
          title: 'Forward Defense Strategy',
          description:
            'After the warrant is addressed, we transition directly into full charge-defense strategy, including evidence planning and hearing preparation.',
        },
      ]}
      relatedTitle="Related Criminal Defense Pages"
      relatedSubtitle="Use these pages for connected post-warrant legal strategy and charge defense."
      relatedLinks={[
        {
          href: '/criminal-defense',
          title: 'Criminal Defense Hub',
          description: 'Broader defense service map for pending charges.',
          ctaName: 'warrants_related_criminal_hub',
        },
        {
          href: '/criminal-defense/probation-violation',
          title: 'Probation Violation Defense',
          description: 'Common overlap where warrants arise from missed compliance obligations.',
          ctaName: 'warrants_related_probation',
        },
        {
          href: '/criminal-defense/dui-dwi',
          title: 'DUI / DWI Defense',
          description: 'Related strategy when warrant exposure overlaps with impaired-driving allegations.',
          ctaName: 'warrants_related_dui',
        },
        {
          href: '/criminal-defense/drug-charges',
          title: 'Drug Charges Defense',
          description: 'Linked defense pathway for possession or trafficking allegations after warrant resolution.',
          ctaName: 'warrants_related_drug',
        },
        {
          href: '/oklahoma-city/criminal-defense',
          title: 'Oklahoma City Criminal Defense',
          description: 'Metro venue-specific strategy for high-volume Oklahoma County warrant matters.',
          ctaName: 'warrants_related_okc_criminal',
        },
        {
          href: '/norman/criminal-defense',
          title: 'Norman Criminal Defense',
          description: 'Cleveland County defense strategy for south-metro warrant and missed-hearing risk.',
          ctaName: 'warrants_related_norman_criminal',
        },
        {
          href: '/resources/what-to-do-after-arrest-oklahoma',
          title: 'Post-Arrest Guide',
          description: 'Immediate rights-protection checklist after arrest events.',
          ctaName: 'warrants_related_arrest_guide',
        },
      ]}
      faqSubtitle="Answers to common active warrant questions in Oklahoma."
      faqs={warrantsFaqs}
      practiceArea="warrants"
      actionChecklist={[
        'Confirm warrant status through counsel before taking any independent action.',
        'Gather case paperwork, court notices, and prior appearance records in one file.',
        'Do not discuss case facts with police or investigators without legal representation.',
        'Start controlled surrender and bond planning before unplanned contact occurs.',
      ]}
      ctaTitle="Resolve Warrant Risk with a Controlled Plan"
      ctaDescription="Strategic early action can reduce disruption, improve bond posture, and protect the underlying case."
      ctaLabel="Start Warrant Defense"
      ctaName="warrants_bottom_cta"
    />
  )
}
