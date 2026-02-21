import { Metadata } from 'next'
import { ResourceGuidePage } from '../../components/ResourceGuidePage'

export const metadata: Metadata = {
  title: 'Oklahoma DUI Process Guide',
  description:
    'Understand Oklahoma DUI criminal court and administrative license timelines, key hearings, and critical defense decision points.',
  alternates: { canonical: '/resources/oklahoma-dui-process' },
  openGraph: {
    title: 'Oklahoma DUI Process Guide | Kernal & Associates',
    description:
      'A step-by-step guide to Oklahoma DUI case stages, license risk windows, and defense planning.',
    url: 'https://kernallaw.com/resources/oklahoma-dui-process',
  },
}

export default function DuiProcessGuidePage() {
  return (
    <ResourceGuidePage
      canonicalPath="/resources/oklahoma-dui-process"
      title="Oklahoma DUI Process Guide"
      subtitle="Understand the legal timeline before early decisions lock in avoidable criminal and license risk."
      intro={[
        'Most Oklahoma DUI cases involve two simultaneous tracks: criminal court exposure and a separate license-risk process. Handling only one track can produce preventable damage in the other.',
        'This guide is built as a timeline decision map. It shows where deadlines, evidence-control decisions, and strategy sequencing usually have the largest impact.',
        'Use this page to understand the process, then move to the related defense pages for charge-specific planning.',
      ]}
      authorName="Kernal Law Editorial Team"
      reviewedBy="Todd Kernal"
      reviewedTitle="Founding Attorney"
      lastUpdated="2026-02-18"
      immediateActionsTitle="Immediate DUI Priorities"
      immediateActions={[
        {
          label: 'Priority 1',
          title: 'Preserve Every Document and Date',
          detail:
            'Keep citations, release paperwork, hearing notices, and custody records in one file. Timeline precision drives many DUI defense decisions.',
        },
        {
          label: 'Priority 2',
          title: 'Control Statements and Communications',
          detail:
            'Do not discuss stop details, test results, or case facts by text, calls, or social media without counsel guidance.',
        },
        {
          label: 'Priority 3',
          title: 'Identify License-Track Deadlines Early',
          detail:
            'Administrative windows can close quickly. Missing them can create avoidable driving disruption independent of court outcomes.',
        },
        {
          label: 'Priority 4',
          title: 'Secure Evidence Quickly',
          detail:
            'Bodycam, dashcam, dispatch logs, and maintenance records can become harder to obtain as time passes.',
        },
        {
          label: 'Priority 5',
          title: 'Map Collateral Consequences',
          detail:
            'Assess employment, CDL, professional license, and travel consequences early so strategy reflects real-world impact.',
        },
        {
          label: 'Priority 6',
          title: 'Build Unified Court + License Strategy',
          detail:
            'Court negotiations and administrative decisions should reinforce each other, not conflict.',
        },
      ]}
      takeaways={[
        'DUI matters are procedural and technical, not only factual.',
        'Criminal and administrative processes often run in parallel.',
        'Missing a short license deadline can create avoidable disruption.',
        'Early evidence preservation improves suppression and negotiation options.',
        'Field and chemical testing procedures are challengeable when flawed.',
        'Trial-readiness often improves negotiated outcomes.',
        'Collateral consequences should be built into strategy from day one.',
        'A unified plan reduces contradictory moves across two legal tracks.',
      ]}
      sections={[
        {
          title: 'DUI Timeline Overview: Two Tracks Running at Once',
          paragraphs: [
            'A DUI arrest can trigger both a criminal prosecution and a separate license-risk process. These tracks have different procedures, standards, and deadlines, but they influence each other in practice.',
            'Effective defense planning starts by building one integrated timeline that covers arraignment dates, discovery milestones, and all license-related response windows.',
          ],
          bullets: [
            'Criminal case calendar and hearing sequence',
            'Administrative license events and response windows',
            'Evidence request timeline for both tracks',
            'Coordination points between court and mobility strategy',
          ],
        },
        {
          title: 'First 10 Days: Deadline and Evidence Control Window',
          paragraphs: [
            'The first 10 days after arrest are often the highest-leverage period for preserving rights and documents. Delay can reduce options for both motion practice and administrative relief requests.',
            'Treat early days as a preservation phase: lock down records, identify witnesses, and begin an evidence map before narratives harden in official reports.',
          ],
          bullets: [
            'Collect and organize all arrest paperwork immediately',
            'Request available recordings and incident documents',
            'Document witness names and contact information',
            'Track every official notice date for procedural compliance',
          ],
        },
        {
          title: 'How DUI Evidence Is Challenged',
          paragraphs: [
            'DUI outcomes are often shaped by evidentiary detail. Common challenge points include stop legality, officer observations, field-test administration, chemical-test process, and chain-of-custody handling.',
            'No single argument wins every case. Strong defense strategy tests each stage for procedural defects and presents challenges in a sequence that maximizes leverage.',
          ],
          bullets: [
            'Initial stop basis and constitutional validity',
            'Field sobriety test instructions and environmental conditions',
            'Breath/blood collection procedure and calibration records',
            'Report consistency against video and dispatch records',
          ],
        },
        {
          title: 'Negotiation vs Trial Posture in DUI Cases',
          paragraphs: [
            'Many DUI cases resolve through negotiated outcomes, but meaningful negotiation strength usually comes from demonstrated readiness to litigate. Early motion analysis and factual development influence that leverage.',
            'A disciplined decision framework compares risk, evidence quality, collateral impact, and long-term record consequences before any resolution choice is made.',
          ],
          bullets: [
            'Charge and sentencing-risk comparison',
            'Suppression probability and litigation upside',
            'Collateral effect analysis (work, licensing, insurance)',
            'Trial-readiness investment vs negotiated certainty',
          ],
        },
        {
          title: 'License-Risk Planning and Daily-Life Continuity',
          paragraphs: [
            'Driving disruption can produce immediate employment and family impact. Strategy should include transportation planning, compliance logistics, and documentation protocols while legal options are pursued.',
            'Even where restrictions apply, proactive planning can reduce chaos and help preserve compliance credibility with courts and agencies.',
          ],
          bullets: [
            'Work-route and backup transportation planning',
            'Compliance calendar for reporting and restrictions',
            'Employer communication strategy where necessary',
            'Contingency planning for extended case timelines',
          ],
        },
        {
          title: 'What to Bring to a DUI Strategy Meeting',
          paragraphs: [
            'Bring every available document and timeline detail. Case quality improves when counsel can quickly compare official records against your chronology and identify pressure points.',
            'A complete early file helps determine whether to prioritize procedural motions, negotiation strategy, license-track action, or parallel collateral-risk management.',
          ],
          bullets: [
            'Citations, release papers, and booking information',
            'Known video sources and witness contacts',
            'Any notices tied to driving privileges',
            'Timeline of events from stop through release',
          ],
        },
      ]}
      faqSubtitle="Answers to common questions about Oklahoma DUI case timelines and early strategy."
      faqs={[
        {
          question: 'Is a DUI case only about criminal court?',
          answer:
            'No. Many DUI matters involve both criminal proceedings and administrative license exposure that should be managed together.',
        },
        {
          question: 'Why are early DUI deadlines so important?',
          answer:
            'Short windows can affect hearing rights and license-risk options. Missing them can create avoidable consequences.',
        },
        {
          question: 'Can DUI evidence really be challenged?',
          answer:
            'Often yes. Defense review may examine stop basis, testing procedures, report inconsistencies, and chain-of-custody issues.',
        },
        {
          question: 'Should I discuss my DUI case with family or coworkers?',
          answer:
            'Keep case facts private until counsel provides direction. Informal statements can be misunderstood and reused later.',
        },
        {
          question: 'Does trial-readiness matter if most cases settle?',
          answer:
            'Yes. Negotiation outcomes are frequently influenced by whether the defense is prepared to litigate effectively.',
        },
        {
          question: 'When should I involve a DUI lawyer?',
          answer:
            'As early as possible. Early coordination across court and license tracks usually improves available options.',
        },
      ]}
      relatedTitle="Related DUI and Criminal Defense Guides"
      relatedSubtitle="Use these pages to move from process knowledge to case-specific defense action."
      relatedLinks={[
        {
          href: '/criminal-defense/dui-dwi',
          title: 'DUI / DWI Defense',
          description: 'Charge-specific defense strategy and hearing/timeline planning.',
          ctaName: 'guide_dui_process_related_dui_page',
        },
        {
          href: '/resources/what-to-do-after-arrest-oklahoma',
          title: 'Post-Arrest Guide',
          description: 'First-48-hours checklist after any Oklahoma arrest event.',
          ctaName: 'guide_dui_process_related_arrest_guide',
        },
        {
          href: '/resources/oklahoma-felony-case-timeline',
          title: 'Felony Case Timeline Guide',
          description: 'Longer-form criminal process map for more serious charge exposure.',
          ctaName: 'guide_dui_process_related_felony_timeline',
        },
        {
          href: '/criminal-defense/drug-charges',
          title: 'Drug Charges Defense',
          description: 'Cross-over strategy where impairment and controlled substances overlap.',
          ctaName: 'guide_dui_process_related_drug',
        },
        {
          href: '/criminal-defense',
          title: 'Criminal Defense Hub',
          description: 'Broader defense services and linked criminal charge pages.',
          ctaName: 'guide_dui_process_related_criminal_hub',
        },
        {
          href: '/contact',
          title: 'Request DUI Case Review',
          description: 'Get direct guidance on deadlines, evidence challenges, and risk control.',
          ctaName: 'guide_dui_process_related_contact',
        },
      ]}
      ctaTitle="Clarify Your DUI Timeline Before It Tightens"
      ctaDescription="A coordinated strategy across court and license tracks can prevent avoidable outcomes."
      ctaLabel="Start DUI Case Review"
      ctaName="guide_dui_process_bottom_cta"
    />
  )
}
