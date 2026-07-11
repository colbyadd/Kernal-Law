import { Metadata } from 'next'
import { ResourceGuidePage } from '../../components/ResourceGuidePage'

export const metadata: Metadata = {
  title: 'Oklahoma Uninsured Motorist Guide',
  description:
    'A practical guide to Oklahoma uninsured and underinsured motorist claims, including policies, notice, proof of loss, and settlement releases.',
  alternates: { canonical: '/resources/oklahoma-uninsured-motorist-claim-guide' },
  openGraph: {
    title: 'Oklahoma Uninsured Motorist Claim Guide | Kernal & Associates',
    description:
      'Learn how policy language, notice, liability evidence, medical records, and releases may affect an Oklahoma UM/UIM claim.',
    url: 'https://kernallaw.com/resources/oklahoma-uninsured-motorist-claim-guide',
  },
}

export default function UninsuredMotoristClaimGuidePage() {
  return (
    <ResourceGuidePage
      canonicalPath="/resources/oklahoma-uninsured-motorist-claim-guide"
      title="Oklahoma Uninsured Motorist Claim Guide"
      subtitle="How to protect UM/UIM recovery when the at-fault driver lacks enough insurance."
      intro={[
        'Uninsured motorist and underinsured motorist claims are made under an insurance policy, but the claimant still may need to prove fault, causation, and damages.',
        'Begin with the declarations page, complete policy, claim notices, and all available information about the other driver\'s insurance. Policy language and facts control the available coverage.',
      ]}
      authorName="Kernal Law Editorial Team"
      reviewedBy="Todd Kernal"
      reviewedTitle="Founding Attorney"
      datePublished="2026-02-18"
      lastUpdated="2026-07-11"
      officialSources={[
        {
          label: 'Oklahoma Statutes, Title 36, Section 3636',
          href: 'https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=87144',
          description: 'The current Oklahoma statute governing uninsured motorist coverage.',
        },
        {
          label: 'Oklahoma Insurance Department: Uninsured Motorist Coverage',
          href: 'https://www.oid.ok.gov/uninsured-motorist/',
          description: 'State consumer information explaining uninsured and underinsured motorist coverage in Oklahoma.',
        },
      ]}
      immediateActionsTitle="Immediate UM/UIM Claim Actions"
      immediateActions={[
        {
          label: 'Step 1',
          title: 'Preserve Crash and Medical Evidence',
          detail:
            'Document scene facts, treatment records, and witness details the same way you would for any third-party injury claim.',
        },
        {
          label: 'Step 2',
          title: 'Identify All Applicable Policies',
          detail:
            'Collect declarations pages, endorsements, and policy terms for every vehicle or household policy that may affect UM/UIM recovery.',
        },
        {
          label: 'Step 3',
          title: 'Control Notice and Communication Timing',
          detail:
            'Give required notice promptly, keep a copy, and do not guess about fault, recovery time, or future medical care.',
        },
        {
          label: 'Step 4',
          title: 'Track Damages in a Single File',
          detail:
            'Maintain medical, wage, and out-of-pocket documentation from day one to avoid valuation gaps.',
        },
        {
          label: 'Step 5',
          title: 'Coordinate Third-Party and UM/UIM Sequencing',
          detail:
            'Settlement sequencing can affect coverage access. Decisions should be made with policy terms in mind.',
        },
        {
          label: 'Step 6',
          title: 'Escalate Early on Coverage Disputes',
          detail:
            'Seek legal review if the insurer disputes coverage, applies an offset you do not understand, or requests a release.',
        },
      ]}
      takeaways={[
        'UM/UIM claims still require full liability and damages proof.',
        'Policy language and claim sequencing can materially affect recovery.',
        'Early notice and communication discipline prevents avoidable disputes.',
        'An insurer may still dispute fault, coverage, causation, or the amount of the claimed loss.',
        'Do not assume policy limits equal expected recovery without analysis.',
        'Medical, wage, and out-of-pocket records are central to evaluating the claim.',
        'Serious injuries often require future-loss valuation planning.',
        'Early legal review is valuable when coverage issues appear.',
      ]}
      sections={[
        {
          title: 'UM vs UIM: Understanding the Difference',
          paragraphs: [
            'UM generally applies when the at-fault driver has no insurance. UIM generally applies when the at-fault policy exists but is insufficient for full losses. Both depend on specific policy wording and factual context.',
            'Start by identifying each potentially applicable policy and then determine what proof the policy and Oklahoma law require.',
          ],
          bullets: [
            'Confirm uninsured versus underinsured status',
            'Review policy definitions and exclusion clauses',
            'Screen for household or multi-policy stacking issues',
            'Map available limits against projected losses',
          ],
        },
        {
          title: 'Notice Requirements and Early Communication Risks',
          paragraphs: [
            'Many disputes begin with notice or communication problems. Give timely notice, save proof of delivery, and keep communications accurate.',
            'Keep communications factual and documented. Do not estimate long-term injury impact before treatment progression is clear.',
          ],
          bullets: [
            'Provide timely notice under policy requirements',
            'Retain copies of all claim correspondence',
            'Avoid recorded speculative statements',
            'Coordinate communications across all insurers',
          ],
        },
        {
          title: 'Building Liability and Causation in First-Party Claims',
          paragraphs: [
            'Because UM/UIM claims still require proof, insurers often examine crash mechanics, comparative fault, and medical causation with the same scrutiny used in third-party litigation.',
            'Your claim should include objective liability records and coherent medical progression evidence tied directly to the collision event.',
          ],
          bullets: [
            'Crash report and witness consistency analysis',
            'Scene and vehicle evidence preservation',
            'Provider documentation of injury progression',
            'Independent support for causation arguments',
          ],
        },
        {
          title: 'Damages Valuation Beyond Immediate Bills',
          paragraphs: [
            'Valuation should account for current and future medical care, wage impacts, functional limitations, and long-term quality-of-life effects where supported by records.',
            'A complete claim package is built over time with consistent documentation, not assembled at the final demand stage only.',
          ],
          bullets: [
            'Past medical and projected care costs',
            'Current and future earning-impact records',
            'Functional limitation and daily-impact documentation',
            'Organized timeline linking treatment to crash effects',
          ],
        },
        {
          title: 'Third-Party Settlement Sequencing and UM/UIM Access',
          paragraphs: [
            'When both third-party and UM/UIM claims exist, sequencing decisions can affect available recovery paths. Settlement choices should align with policy terms and procedural requirements.',
            'Before releasing claims, ensure that coverage implications are reviewed so you do not unintentionally compromise UM/UIM options.',
          ],
          bullets: [
            'Review release language before signing',
            'Analyze offsets and credit positions',
            'Coordinate demand timing with policy requirements',
            'Document rationale for settlement decisions',
          ],
        },
        {
          title: 'When a Coverage or Value Dispute Continues',
          paragraphs: [
            'If coverage is denied or the parties cannot agree on the value of a documented loss, litigation may be one available option. The policy, denial letter, evidence, and applicable deadlines should be reviewed first.',
            'Continue preserving correspondence, claim submissions, medical records, and the insurer\'s stated reasons for its position.',
          ],
          bullets: [
            'Coverage language and the stated basis for denial',
            'Evidence package readiness for formal proceedings',
            'Settlement position supported by documented losses',
            'Escalation timeline that preserves claim options',
          ],
        },
      ]}
      faqSubtitle="Common questions about Oklahoma uninsured and underinsured motorist claims."
      faqs={[
        {
          question: 'Is a UM/UIM claim easier because it is with my own insurer?',
          answer:
            'Not always. Many first-party claims are contested on fault, causation, and valuation, so evidence discipline still matters.',
        },
        {
          question: 'What is the difference between UM and UIM?',
          answer:
            'UM generally involves an uninsured at-fault driver; UIM generally involves insufficient at-fault limits. Coverage depends on policy terms.',
        },
        {
          question: 'Can I still recover if liability is disputed?',
          answer:
            'Potentially, yes. Recovery usually depends on how liability and comparative-fault evidence is developed and presented.',
        },
        {
          question: 'Do I need to keep treatment records and wage proof for UM/UIM claims?',
          answer:
            'Yes. Full damages documentation is central to valuation in UM/UIM negotiations and disputes.',
        },
        {
          question: 'Should I settle with the at-fault insurer first?',
          answer:
            'Possibly, but the release and notice provisions may affect a later claim under your own policy. Have the policy implications reviewed before signing.',
        },
        {
          question: 'When should I request legal review for a UM/UIM claim?',
          answer:
            'Early, especially when injuries are significant, coverage is disputed, or insurer valuations remain unreasonably low.',
        },
      ]}
      relatedTitle="Related Uninsured Motorist and Accident Pages"
      relatedSubtitle="Use these pages for coverage, evidence, and injury-claim information."
      relatedLinks={[
        {
          href: '/personal-injury/uninsured-motorist',
          title: 'Uninsured Motorist Claims Service Page',
          description: 'Coverage-focused representation for UM/UIM disputes in Oklahoma.',
          ctaName: 'guide_um_related_service_page',
        },
        {
          href: '/resources/what-to-do-after-car-accident-oklahoma',
          title: 'Post-Accident Guide',
          description: 'First-48-hours evidence and medical checklist after a crash.',
          ctaName: 'guide_um_related_post_accident',
        },
        {
          href: '/personal-injury/car-accidents',
          title: 'Car Accident Claims',
          description: 'Information about disputed fault, medical losses, and insurance claims.',
          ctaName: 'guide_um_related_car_claims',
        },
        {
          href: '/resources/oklahoma-truck-accident-evidence-guide',
          title: 'Truck Accident Evidence Guide',
          description: 'Commercial crash evidence workflow for higher-risk claims.',
          ctaName: 'guide_um_related_truck_evidence',
        },
        {
          href: '/personal-injury',
          title: 'Personal Injury Hub',
          description: 'Personal injury services and related claim information.',
          ctaName: 'guide_um_related_injury_hub',
        },
        {
          href: '/contact',
          title: 'Request UM/UIM Claim Review',
          description: 'Have the policy, notices, and loss records reviewed when coverage is disputed.',
          ctaName: 'guide_um_related_contact',
        },
      ]}
      ctaTitle="Need Help With a UM/UIM Claim?"
      ctaDescription="Early coordination of coverage, liability, and damages evidence can protect recovery potential."
      ctaLabel="Start UM/UIM Case Review"
      ctaName="guide_um_bottom_cta"
    />
  )
}
