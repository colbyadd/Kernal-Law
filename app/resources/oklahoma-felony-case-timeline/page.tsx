import { Metadata } from 'next'
import { ResourceGuidePage } from '../../components/ResourceGuidePage'

export const metadata: Metadata = {
  title: 'Oklahoma Felony Case Timeline Guide',
  description:
    'A stage-by-stage Oklahoma felony timeline covering filing, arraignment, preliminary hearing, discovery, motions, trial, and sentencing.',
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
      subtitle="A practical stage-by-stage map of an Oklahoma felony case."
      intro={[
        'The exact sequence varies by court and case, but Oklahoma felony matters generally move from arrest or filing through initial appearances, preliminary proceedings, district-court arraignment, discovery, motions, and either a negotiated resolution or trial.',
        'Use this overview to understand the usual stages. Your court notices and docket control your actual deadlines.',
      ]}
      authorName="Kernal Law Editorial Team"
      reviewedBy="Todd Kernal"
      reviewedTitle="Founding Attorney"
      datePublished="2026-02-18"
      lastUpdated="2026-07-11"
      officialSources={[
        {
          label: 'Oklahoma Statutes, Title 22: Criminal Procedure',
          href: 'https://www.oscn.net/applications/oscn/Index.asp?ftdb=STOKST22&level=1',
          description: 'The official Oklahoma Statutes index for criminal procedure, including filing, bail, preliminary proceedings, trial, and appeal.',
        },
        {
          label: 'Oklahoma Statutes: Preliminary Examinations',
          href: 'https://www.oscn.net/applications/OCISWeb/DeliverDocument.asp?CiteID=437009',
          description: 'The Oklahoma State Courts Network collection of statutes governing preliminary examinations.',
        },
      ]}
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
            'Follow every release condition exactly. An alleged violation can create a separate problem before the original charge is resolved.',
        },
        {
          label: 'Priority 4',
          title: 'Preserve Time-Sensitive Evidence',
          detail:
            'Witness memory, surveillance footage, and digital records can disappear quickly. Preserve what is available without altering or deleting it.',
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
            'A dated timeline of events, contacts, and records helps counsel compare your account with the evidence.',
        },
      ]}
      takeaways={[
        'Felony outcomes are often determined by early procedural decisions.',
        'Bond-condition errors can create new legal exposure independent of the primary charge.',
        'Discovery and motion practice often determine what evidence can be used.',
        'Trial readiness often improves pretrial resolution quality.',
        'Employment, licensing, immigration, and family consequences may require separate attention.',
        'Evidence preservation is strongest in the first days and weeks.',
        'Not every strong defense starts with a courtroom speech; many start with documentation discipline.',
        'Knowing the next stage makes it easier to prepare and meet deadlines.',
      ]}
      sections={[
        {
          title: 'Phase 1: Arrest, Filing, and Initial Case Framing',
          paragraphs: [
            'The opening phase includes arrest events, booking records, probable-cause narratives, and early charging decisions. The prosecution narrative starts forming here, often before the defense has full discovery access.',
            'Early legal work focuses on protecting rights, understanding release terms, and preserving evidence before it is lost.',
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
            'If a release term is unworkable, counsel can determine whether to ask the court to modify it. Do not ignore the condition while a request is pending.',
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
            'Motions may address unlawful stops, searches, statements, identification procedures, or problems with how evidence was collected and handled.',
          ],
          bullets: [
            'Bodycam, dashcam, and dispatch record analysis',
            'Search, warrant, and interview legality review',
            'Forensic chain-of-custody testing',
            'Suppression and exclusion motion sequencing',
          ],
        },
        {
          title: 'Phase 4: Negotiation and Resolution Decisions',
          paragraphs: [
            'Discussions about resolution often become more informed after discovery and important motions. At that point both sides have a better view of the admissible evidence and trial risks.',
            'Before accepting an agreement, compare the sentence, collateral consequences, long-term record effect, and risks of trial.',
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
            'Preparing witnesses, exhibits, objections, and the defense theory early avoids rushed decisions as the trial date approaches.',
          ],
          bullets: [
            'Defense theme and fact-theory development',
            'Witness preparation and cross-examination planning',
            'Exhibit management and objection framework',
            'Jury-risk and appellate-risk awareness',
          ],
        },
        {
          title: 'Phase 6: Sentencing, Compliance, and Record Issues',
          paragraphs: [
            'If a case ends by plea or verdict, the sentence and all reporting, payment, treatment, and supervision obligations must be tracked carefully.',
            'Later record relief may be available in some matters. Eligibility depends on the disposition, time passed, criminal history, and current Oklahoma law.',
          ],
          bullets: [
            'Sentencing mitigation and compliance planning',
            'Probation and reporting structure management',
            'Collateral-consequence stabilization steps',
            'Future eligibility review for record relief',
          ],
        },
      ]}
      faqSubtitle="Common questions about the timeline of an Oklahoma felony case."
      faqs={[
        {
          question: 'How fast does a felony case move in Oklahoma?',
          answer:
            'Timelines vary by charge and court docket, but early phases often move quickly. Immediate legal planning helps avoid missed deadlines and lost evidence.',
        },
        {
          question: 'Can felony charges be reduced before trial?',
          answer:
            'Sometimes. The evidence, motion rulings, criminal history, charging decisions, and prosecutor all affect the available options.',
        },
        {
          question: 'Is bond compliance really that important?',
          answer:
            'Yes. A violation can lead to revocation, a new arrest, or stricter conditions before the original charge is resolved.',
        },
        {
          question: 'What phase usually has the most strategic impact?',
          answer:
            'Discovery and motion practice are often important because they determine what evidence exists and what may be admitted.',
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
      relatedSubtitle="Use these links for charge-specific information and immediate next steps."
      relatedLinks={[
        {
          href: '/criminal-defense',
          title: 'Criminal Defense Hub',
          description: 'Criminal defense services and direct consultation access.',
          ctaName: 'guide_felony_timeline_related_criminal_hub',
        },
        {
          href: '/criminal-defense/drug-charges',
          title: 'Drug Charges Defense',
          description: 'Felony possession, trafficking, and cases involving searches or warrants.',
          ctaName: 'guide_felony_timeline_related_drug',
        },
        {
          href: '/criminal-defense/assault-battery',
          title: 'Assault and Battery Defense',
          description: 'Defense information for serious charges involving witnesses and disputed accounts.',
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
          description: 'Have the charge, court dates, and immediate deadlines reviewed.',
          ctaName: 'guide_felony_timeline_related_contact',
        },
      ]}
      ctaTitle="Need a Felony Defense Timeline Built for Your Case?"
      ctaDescription="Bring your paperwork and court dates so the next stage can be reviewed."
      ctaLabel="Start Felony Case Review"
      ctaName="guide_felony_timeline_bottom_cta"
    />
  )
}
