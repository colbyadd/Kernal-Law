import { Metadata } from 'next'
import { ServiceDetailPage } from '../../components/ServiceDetailPage'

export const metadata: Metadata = {
  title: 'Oklahoma Domestic Violence Defense Lawyer',
  description:
    'Defense for Oklahoma domestic violence allegations with coordinated strategy for criminal exposure, protective-order overlap, and bond-condition compliance.',
  alternates: { canonical: '/criminal-defense/domestic-violence' },
  openGraph: {
    title: 'Oklahoma Domestic Violence Defense | Kernal & Associates',
    description:
      'Strategic domestic-violence defense with immediate control of no-contact restrictions, court conditions, and trial-risk posture.',
    url: 'https://kernallaw.com/criminal-defense/domestic-violence',
  },
}

const domesticViolenceFaqs = [
  {
    question: 'What should I do right after a domestic violence arrest?',
    answer:
      'Follow release conditions exactly and avoid prohibited contact. Do not discuss allegations with law enforcement or third parties without counsel. Early communication mistakes can trigger additional exposure and complicate defense strategy.',
  },
  {
    question: 'Can the case continue if the complaining witness wants to drop it?',
    answer:
      'Yes. Prosecutors control charging decisions and may continue even when a witness changes position. Defense must focus on reliability, corroboration, admissibility, and legal proof standards.',
  },
  {
    question: 'How do protective orders affect criminal defense?',
    answer:
      'Protective orders can immediately affect residence access, communication, and family contact. Because protective-order and criminal tracks often interact, strategy must be coordinated to avoid unintended legal conflicts.',
  },
  {
    question: 'Will a domestic violence allegation affect firearms rights?',
    answer:
      'Potentially. Depending on case status and disposition, firearm restrictions can apply under state or federal law. Exposure should be evaluated early as part of full collateral-risk planning.',
  },
  {
    question: 'Do I need a trial lawyer for this type of case?',
    answer:
      'Yes. These cases frequently depend on credibility disputes and contested context. Trial readiness improves negotiation leverage and protects your position if the matter proceeds to hearing or jury trial.',
  },
  {
    question: 'Can a domestic violence case be sealed later?',
    answer:
      'Some outcomes may qualify for later expungement depending on charge level and final disposition. Eligibility should be reviewed case-by-case after resolution and any waiting requirements.',
  },
]

export default function DomesticViolencePage() {
  return (
    <ServiceDetailPage
      heroTitle="Domestic Violence Defense"
      heroSubtitle="Immediate, disciplined defense for high-risk allegations, court restrictions, and collateral exposure."
      heroVariant="criminal"
      introTitle="Domestic violence allegations require immediate legal control across multiple court pressures."
      introParagraphs={[
        'Domestic violence allegations can trigger overlapping criminal exposure, emergency no-contact restrictions, protective-order proceedings, and immediate disruption to housing and family routines. These files move quickly, and early decisions can materially change long-term case posture.',
        'A common mistake is treating these as a single-track criminal matter. In reality, communications, order compliance, and collateral consequences must be managed in parallel. One misstep can create additional allegations or weaken defense credibility.',
        'Kernal & Associates builds coordinated strategy from day one: stabilizing immediate risk, structuring legally safe communication protocols, and preparing a defense that can withstand pretrial pressure and trial-level scrutiny if needed.',
      ]}
      focusTitle="Primary Defense Priorities"
      focusItems={[
        {
          title: 'Condition Compliance and Risk Control',
          description:
            'The first objective is preventing technical violations that create new charges, bond complications, or strategic damage before evidence litigation begins.',
          bullets: [
            'No-contact order interpretation',
            'Bond and release condition planning',
            'Communication-risk protocols',
            'Court-compliance documentation',
            'Residence and access planning',
            'Violation-risk response protocol',
          ],
        },
        {
          title: 'Evidence and Credibility Analysis',
          description:
            'These cases often turn on statement reliability, timeline context, and corroboration quality rather than one isolated narrative.',
          bullets: [
            'Timeline inconsistency review',
            'Witness motive and bias analysis',
            'Digital evidence reconstruction',
            'Physical evidence cross-checking',
            'Prior statement comparison',
            'Context and escalation analysis',
          ],
        },
        {
          title: 'Parallel Proceeding Coordination',
          description:
            'Protective-order and criminal tracks influence each other and must be managed as one integrated strategy to reduce contradiction risk.',
          bullets: [
            'Protective order defense alignment',
            'Collateral family-impact planning',
            'Plea and record consequence modeling',
            'Trial preparation positioning',
            'Hearing-sequence strategy',
            'Long-term collateral risk planning',
          ],
        },
      ]}
      processTitle="Domestic Violence Case Workflow"
      processSubtitle="A coordinated process protects both immediate stability and long-term legal outcome."
      processSteps={[
        {
          step: '01',
          title: 'Emergency Intake and Condition Stabilization',
          description:
            'We review release terms, no-contact restrictions, and immediate compliance risk points before the first hearing cycle.',
        },
        {
          step: '02',
          title: 'Evidence Preservation and Narrative Stress-Testing',
          description:
            'Statements, messages, and timeline evidence are audited for consistency, corroboration, and legal vulnerability.',
        },
        {
          step: '03',
          title: 'Pretrial Strategy and Motion Practice',
          description:
            'We challenge weak evidence, address overbroad allegations, and build a trial-ready posture with controlled hearing strategy.',
        },
        {
          step: '04',
          title: 'Resolution or Trial',
          description:
            'We negotiate from strength when justified and proceed to trial when evidence quality or legal standards do not support conviction.',
        },
      ]}
      relatedTitle="Related Criminal Defense Pages"
      relatedSubtitle="Review connected defense categories and local pages relevant to your case."
      relatedLinks={[
        {
          href: '/criminal-defense',
          title: 'Criminal Defense Hub',
          description: 'Overview of charge categories, process, and defense approach.',
          ctaName: 'dv_related_criminal_hub',
        },
        {
          href: '/criminal-defense/assault-battery',
          title: 'Assault and Battery Defense',
          description: 'Defense strategy for alleged violence and bodily injury claims.',
          ctaName: 'dv_related_assault_battery',
        },
        {
          href: '/criminal-defense/warrants',
          title: 'Warrants Defense',
          description: 'Related strategy when no-contact or hearing issues create warrant exposure.',
          ctaName: 'dv_related_warrants',
        },
        {
          href: '/criminal-defense/probation-violation',
          title: 'Probation Violation Defense',
          description: 'Overlap strategy for clients with existing supervision obligations.',
          ctaName: 'dv_related_probation',
        },
        {
          href: '/oklahoma-city/criminal-defense',
          title: 'Oklahoma City Criminal Defense',
          description: 'Metro venue context for Oklahoma County domestic-violence filings.',
          ctaName: 'dv_related_oklahoma_city_criminal',
        },
        {
          href: '/norman/criminal-defense',
          title: 'Norman Criminal Defense',
          description: 'Cleveland County defense strategy for south-metro domestic allegations.',
          ctaName: 'dv_related_norman_criminal',
        },
      ]}
      faqSubtitle="Answers to common questions after a domestic violence arrest in Oklahoma."
      faqs={domesticViolenceFaqs}
      practiceArea="domestic-violence"
      actionChecklist={[
        'Follow no-contact and release conditions exactly to avoid new allegations.',
        'Save all court papers, order documents, and communication records immediately.',
        'Do not discuss case facts with police, investigators, or third parties without counsel.',
        'Start coordinated criminal and protective-order strategy before first key hearings.',
      ]}
      ctaTitle="Stabilize the Case Early"
      ctaDescription="Early legal control can reduce escalation risk, protect compliance posture, and improve long-term defense outcomes."
      ctaLabel="Start Domestic Violence Defense"
      ctaName="dv_bottom_cta"
    />
  )
}
