import { Metadata } from 'next'
import { ResourceGuidePage } from '../../components/ResourceGuidePage'

export const metadata: Metadata = {
  title: 'Oklahoma Felony Case Timeline Guide',
  description:
    'A stage-by-stage Oklahoma felony timeline covering filing, arraignment, discovery, negotiation, trial posture, and sentencing risk decisions.',
  alternates: { canonical: '/resources/oklahoma-felony-case-timeline' },
  openGraph: {
    title: 'Oklahoma Felony Case Timeline Guide | Kernal & Associates',
    description:
      'Understand felony case stages, strategic decision windows, and risk-control priorities from arrest through resolution.',
    url: 'https://kernallaw.com/resources/oklahoma-felony-case-timeline',
  },
}

export default function FelonyCaseTimelineGuidePage() {
  return (
    <ResourceGuidePage
      canonicalPath="/resources/oklahoma-felony-case-timeline"
      title="Oklahoma Felony Case Timeline Guide"
      subtitle="A practical stage-by-stage map from arrest through resolution for serious criminal exposure."
      intro={[
        'Felony cases move through predictable structural phases, but outcomes are shaped by decisions made inside each phase. Timing, evidence control, and procedural strategy usually matter as much as the allegations themselves.',
        'This guide breaks down the felony process into actionable decision windows so you can understand what happens next and where early legal work creates leverage.',
        'Use this page as a timeline framework, then move to the linked service pages for charge-specific defense strategy.',
      ]}
      authorName="Kernal Law Editorial Team"
      reviewedBy="Todd Kernal"
      reviewedTitle="Founding Attorney"
      lastUpdated="2026-02-18"
      immediateActionsTitle="Immediate Felony-Case Priorities"
      immediateActions={[
        {
          label: 'Priority 1',
          title: 'Preserve Your Silence Rights',
          detail:
            'Do not discuss allegations with investigators, contacts, or online audiences. Additional statements frequently create avoidable prosecution evidence.',
        },
        {
          label: 'Priority 2',
          title: 'Centralize All Case Documents',
          detail:
            'Keep citations, warrants, release papers, and court notices in one organized file for timeline and hearing control.',
        },
        {
          label: 'Priority 3',
          title: 'Protect Bond Compliance',
          detail:
            'Follow every release condition exactly. New violations can expand exposure and weaken negotiation posture.',
        },
        {
          label: 'Priority 4',
          title: 'Preserve Time-Sensitive Evidence',
          detail:
            'Witness memory, surveillance footage, and digital records degrade quickly. Early preservation supports suppression and trial strategy.',
        },
        {
          label: 'Priority 5',
          title: 'Assess Collateral Risks Early',
          detail:
            'Felony allegations can affect employment, licensing, and family-court matters before final case resolution.',
        },
        {
          label: 'Priority 6',
          title: 'Build a Written Defense Timeline',
          detail:
            'A structured timeline of events, contacts, and records helps counsel identify pressure points faster.',
        },
      ]}
      takeaways={[
        'Felony outcomes are often determined by early procedural decisions.',
        'Bond-condition errors can create new legal exposure independent of the primary charge.',
        'Discovery and motion practice drive leverage in negotiation and trial posture.',
        'Trial readiness often improves pretrial resolution quality.',
        'Collateral consequences should be planned with the same urgency as courtroom strategy.',
        'Evidence preservation is strongest in the first days and weeks.',
        'Not every strong defense starts with a courtroom speech; many start with documentation discipline.',
        'A phased strategy reduces panic and improves decision quality across the case lifecycle.',
      ]}
      sections={[
        {
          title: 'Phase 1: Arrest, Filing, and Initial Case Framing',
          paragraphs: [
            'The opening phase includes arrest events, booking records, probable-cause narratives, and early charging decisions. The prosecution narrative starts forming here, often before the defense has full discovery access.',
            'Early legal intervention focuses on rights preservation, bond strategy, and evidence-control actions that prevent procedural disadvantages later.',
          ],
          bullets: [
            'Arrest and booking chronology mapping',
            'Probable-cause language and affidavit review',
            'Initial witness and scene evidence preservation',
            'Early collateral-risk screening',
          ],
        },
        {
          title: 'Phase 2: Arraignment and Bond Conditions',
          paragraphs: [
            'At arraignment, charges are formally addressed and release terms are set or confirmed. Bond conditions can affect employment, travel, communications, and daily life.',
            'A workable bond strategy protects compliance while positioning the case for effective motion and negotiation work in later stages.',
          ],
          bullets: [
            'Condition-by-condition compliance planning',
            'Conflict documentation for modification requests',
            'No-contact risk and communication protocols',
            'Court-date and reporting deadline controls',
          ],
        },
        {
          title: 'Phase 3: Discovery and Motion Development',
          paragraphs: [
            'Discovery phase is where case strength is tested. Reports, recordings, forensic materials, and witness statements are reviewed for legal and factual vulnerabilities.',
            'Motion practice may target unlawful stops, searches, statements, identification procedures, and evidence handling defects. This phase heavily influences leverage.',
          ],
          bullets: [
            'Bodycam, dashcam, and dispatch record analysis',
            'Search, warrant, and interview legality review',
            'Forensic chain-of-custody testing',
            'Suppression and exclusion motion sequencing',
          ],
        },
        {
          title: 'Phase 4: Negotiation Windows and Strategic Resolution',
          paragraphs: [
            'Negotiations often intensify after discovery and key motions, when both sides have clearer risk visibility. Strong defense posture can materially influence charge adjustments and sentencing outcomes.',
            'Resolution decisions should compare certainty, collateral consequences, long-term record impact, and trial-risk profile rather than short-term pressure alone.',
          ],
          bullets: [
            'Evidence-strength and sentencing-risk matrix',
            'Collateral-consequence comparison by option',
            'Diversion or alternative-path eligibility screening',
            'Documented decision framework before agreement',
          ],
        },
        {
          title: 'Phase 5: Trial Preparation and Courtroom Readiness',
          paragraphs: [
            'Even when trial is not guaranteed, preparing for trial strengthens negotiation credibility. Trial-readiness includes witness preparation, evidentiary objections, and coherent theme development.',
            'A disciplined trial posture prevents last-minute strategy shifts and increases pressure for fairer resolution proposals.',
          ],
          bullets: [
            'Defense theme and fact-theory development',
            'Witness preparation and cross-examination planning',
            'Exhibit management and objection framework',
            'Jury-risk and appellate-risk awareness',
          ],
        },
        {
          title: 'Phase 6: Sentencing, Compliance, and Post-Case Strategy',
          paragraphs: [
            'If a case resolves by plea or verdict, post-resolution strategy still matters. Sentencing outcomes, compliance obligations, and future record options should be managed proactively.',
            'Long-term planning can include probation-control strategy, violation-risk prevention, and eventual record-relief evaluation where legally available.',
          ],
          bullets: [
            'Sentencing mitigation and compliance planning',
            'Probation and reporting structure management',
            'Collateral-consequence stabilization steps',
            'Future eligibility review for record relief',
          ],
        },
      ]}
      faqSubtitle="Common questions about the timeline and strategy in Oklahoma felony cases."
      faqs={[
        {
          question: 'How fast does a felony case move in Oklahoma?',
          answer:
            'Timelines vary by charge and court docket, but early phases often move quickly. Immediate legal planning helps avoid missed deadlines and lost evidence.',
        },
        {
          question: 'Can felony charges be reduced before trial?',
          answer:
            'Sometimes. Discovery findings, motion outcomes, and trial posture can influence whether reduction or alternate resolution is available.',
        },
        {
          question: 'Is bond compliance really that important?',
          answer:
            'Yes. Bond violations can create new exposure and reduce defense leverage, even before the core felony allegations are resolved.',
        },
        {
          question: 'What phase usually has the most strategic impact?',
          answer:
            'Discovery and motion development are often decisive because they shape evidence admissibility and negotiation leverage.',
        },
        {
          question: 'Do all felony cases go to trial?',
          answer:
            'No. Many resolve pretrial, but trial readiness still influences the quality of available resolution options.',
        },
        {
          question: 'When should I request a felony case review?',
          answer:
            'As early as possible. Early intervention often improves outcomes by protecting rights and controlling procedural risk from the start.',
        },
      ]}
      relatedTitle="Related Felony and Criminal Defense Pages"
      relatedSubtitle="Use these links to move from timeline knowledge to charge-specific legal strategy."
      relatedLinks={[
        {
          href: '/criminal-defense',
          title: 'Criminal Defense Hub',
          description: 'Core defense services, process strategy, and rapid consultation access.',
          ctaName: 'guide_felony_timeline_related_criminal_hub',
        },
        {
          href: '/criminal-defense/drug-charges',
          title: 'Drug Charges Defense',
          description: 'Felony-level possession, trafficking, and search-based defense strategy.',
          ctaName: 'guide_felony_timeline_related_drug',
        },
        {
          href: '/criminal-defense/assault-battery',
          title: 'Assault and Battery Defense',
          description: 'Violent-charge strategy for allegation-heavy and witness-driven cases.',
          ctaName: 'guide_felony_timeline_related_assault',
        },
        {
          href: '/resources/oklahoma-bond-and-release-conditions',
          title: 'Bond and Release Conditions Guide',
          description: 'Detailed planning for compliance and bond modification decisions.',
          ctaName: 'guide_felony_timeline_related_bond_guide',
        },
        {
          href: '/resources/what-to-do-after-arrest-oklahoma',
          title: 'Post-Arrest Guide',
          description: 'First-48-hours rights and risk-control checklist after arrest.',
          ctaName: 'guide_felony_timeline_related_arrest_guide',
        },
        {
          href: '/contact',
          title: 'Request Felony Case Review',
          description: 'Get immediate strategy guidance before the case timeline hardens.',
          ctaName: 'guide_felony_timeline_related_contact',
        },
      ]}
      ctaTitle="Need a Felony Defense Timeline Built for Your Case?"
      ctaDescription="Early strategy, evidence control, and timeline discipline can materially improve felony outcomes."
      ctaLabel="Start Felony Case Review"
      ctaName="guide_felony_timeline_bottom_cta"
    />
  )
}
