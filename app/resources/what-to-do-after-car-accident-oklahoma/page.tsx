import { Metadata } from 'next'
import { ResourceGuidePage } from '../../components/ResourceGuidePage'

export const metadata: Metadata = {
  title: 'What to Do After a Car Accident in Oklahoma',
  description:
    'A practical Oklahoma crash checklist covering medical steps, evidence preservation, insurer communication, and claim protection strategy.',
  alternates: { canonical: '/resources/what-to-do-after-car-accident-oklahoma' },
  openGraph: {
    title: 'What to Do After a Car Accident in Oklahoma | Legal Guide',
    description:
      'Protect your injury claim with immediate post-crash steps and insurer communication best practices.',
    url: 'https://kernallaw.com/resources/what-to-do-after-car-accident-oklahoma',
  },
}

export default function AfterCarAccidentGuidePage() {
  return (
    <ResourceGuidePage
      canonicalPath="/resources/what-to-do-after-car-accident-oklahoma"
      title="What to Do After a Car Accident in Oklahoma"
      subtitle="A staged response checklist for protecting health, evidence, and claim value from day one."
      intro={[
        'Injury claims are often won or weakened in the first days after a crash. Early insurer contact, treatment gaps, and missing evidence can reduce recoverable value before full damages are understood.',
        'This guide gives a practical timeline for the first 24 hours, first week, and first month after an Oklahoma collision. It focuses on decisions that materially affect liability position and compensation leverage.',
        'If your crash involves severe injuries, uninsured drivers, or commercial vehicles, use the related guides linked below for deeper strategy.',
      ]}
      authorName="Kernal Law Editorial Team"
      reviewedBy="Todd Kernal"
      reviewedTitle="Founding Attorney"
      lastUpdated="2026-02-18"
      immediateActionsTitle="Immediate Crash Response Steps"
      immediateActions={[
        {
          label: 'Step 1',
          title: 'Prioritize Medical Evaluation',
          detail:
            'Seek prompt care, even for delayed symptoms. Early medical records often become key causation evidence in claim valuation.',
        },
        {
          label: 'Step 2',
          title: 'Document Scene and Parties',
          detail:
            'Capture photos, vehicle positions, roadway conditions, and all involved contacts while evidence is still available.',
        },
        {
          label: 'Step 3',
          title: 'Preserve Vehicle and Repair Evidence',
          detail:
            'Before major repairs, preserve damage photos, repair estimates, and inspection records for liability and impact analysis.',
        },
        {
          label: 'Step 4',
          title: 'Control Insurance Communications',
          detail:
            'Report the crash, but avoid detailed recorded statements on fault, injury duration, or treatment prognosis before legal strategy review.',
        },
        {
          label: 'Step 5',
          title: 'Build a Damages File Immediately',
          detail:
            'Track treatment costs, wage loss, out-of-pocket expenses, and daily limitations from the start to avoid valuation gaps.',
        },
        {
          label: 'Step 6',
          title: 'Escalate Early for Serious or Disputed Claims',
          detail:
            'High-severity injuries, fault disputes, or low early offers usually require attorney-led evidence and negotiation strategy.',
        },
      ]}
      takeaways={[
        'Early medical records are often central to causation and valuation.',
        'Scene evidence degrades quickly without immediate preservation.',
        'Recorded insurer statements can lock in harmful claim framing.',
        'Treatment gaps are frequently used to reduce settlement value.',
        'Do not settle before future losses are reasonably documented.',
        'Comparative-fault disputes are evidence-driven, not assumption-driven.',
        'Commercial and uninsured-driver crashes require specialized strategy.',
        'A structured first-month plan improves negotiation leverage.',
      ]}
      sections={[
        {
          title: 'First 24 Hours: Evidence and Medical Baseline',
          paragraphs: [
            'The first day should focus on two priorities: health stabilization and evidence capture. Even when symptoms seem manageable, prompt evaluation can identify hidden injuries and create baseline records that support your claim.',
            'Photographs, witness details, and roadway context are strongest immediately after the crash. Delay can make reconstruction and liability analysis harder.',
          ],
          bullets: [
            'Get same-day medical evaluation when possible',
            'Capture vehicle, roadway, and weather-condition photos',
            'Save officer names, report numbers, and witness contacts',
            'Record time/location details before memory drift',
          ],
        },
        {
          title: 'First Week: Treatment Consistency and Claim Framing',
          paragraphs: [
            'Week one is where insurers begin evaluating exposure. Consistent treatment and complete documentation help prevent early under-valuation narratives.',
            'If providers change your treatment plan, maintain written records so progression is clear and causation arguments remain strong.',
          ],
          bullets: [
            'Attend follow-up appointments and prescribed care',
            'Keep work-restriction and wage-loss documents',
            'Store pharmacy, therapy, and transport receipts',
            'Log symptoms and functional limits by date',
          ],
        },
        {
          title: 'How to Handle Insurance Calls Strategically',
          paragraphs: [
            'Adjusters are trained to gather statements that narrow liability and damages. You can cooperate with claim process requirements while limiting speculative or premature detail.',
            'Stick to verified facts, avoid fault admissions, and do not estimate long-term injury impact before clinical progression is known.',
          ],
          bullets: [
            'Keep communications concise and factual',
            'Avoid recorded detail statements without preparation',
            'Do not guess recovery duration or future treatment needs',
            'Archive all written insurer communications',
          ],
        },
        {
          title: 'Damages Model: What Should Be Documented',
          paragraphs: [
            'Comprehensive damages include more than immediate emergency bills. Claims may involve future treatment costs, lost earnings, reduced earning capacity, and quality-of-life impact.',
            'A defensible damages model is built through organized records over time, not assembled at the end of treatment.',
          ],
          bullets: [
            'Past and projected medical expenses',
            'Current and future wage-loss documentation',
            'Out-of-pocket and replacement-service costs',
            'Narrative evidence of daily-life limitations',
          ],
        },
        {
          title: 'Comparative Fault and Liability Disputes',
          paragraphs: [
            'Many Oklahoma claims involve shared-fault arguments. Liability outcomes often turn on objective evidence such as scene geometry, witness consistency, vehicle data, and timing reconstruction.',
            'Do not assume a police report or informal account fully resolves fault. Liability strategy should be built from complete evidence review.',
          ],
          bullets: [
            'Preserve dashcam and nearby surveillance sources',
            'Compare witness statements for consistency and bias',
            'Document roadway signage and intersection controls',
            'Review repair-impact patterns against claimed events',
          ],
        },
        {
          title: 'When to Escalate to Legal Representation',
          paragraphs: [
            'Escalation is usually needed when liability is disputed, injuries are significant, multiple insurers are involved, or settlement pressure begins before damages stabilize.',
            'Early legal strategy can materially improve evidence preservation, demand framing, and negotiation posture before claim narratives harden against you.',
          ],
          bullets: [
            'Serious or long-term injury exposure',
            'Uninsured/underinsured-driver complications',
            'Commercial truck or company-vehicle involvement',
            'Early low offers despite documented losses',
          ],
        },
      ]}
      faqSubtitle="Common questions about protecting an Oklahoma injury claim after a crash."
      faqs={[
        {
          question: 'Should I give a recorded statement right away?',
          answer:
            'You can report the crash, but detailed recorded statements should usually wait until claim strategy is clear.',
        },
        {
          question: 'Do I need medical care if symptoms seem minor?',
          answer:
            'Yes. Prompt evaluation is important for both treatment and claim documentation because some injuries appear later.',
        },
        {
          question: 'What records matter most after a crash?',
          answer:
            'Medical records, wage-loss proof, out-of-pocket expenses, scene evidence, and insurer communications are all high-value records.',
        },
        {
          question: 'Can I settle before treatment is complete?',
          answer:
            'Settling too early can undervalue your claim. Full damages are usually clearer after medical progression is documented.',
        },
        {
          question: 'What if the other driver has little or no insurance?',
          answer:
            'You may still have recovery options through UM/UIM coverage. Strategy should coordinate liability and policy analysis early.',
        },
        {
          question: 'When should I involve an injury lawyer?',
          answer:
            'As early as possible when injuries are serious, fault is disputed, or insurer tactics suggest undervaluation risk.',
        },
      ]}
      relatedTitle="Related Injury and Resource Pages"
      relatedSubtitle="Move from immediate crash response to full claim strategy with these pages."
      relatedLinks={[
        {
          href: '/personal-injury/car-accidents',
          title: 'Car Accident Claims',
          description: 'Case strategy for disputed fault, medical damages, and insurer pressure.',
          ctaName: 'guide_after_accident_related_car_claims',
        },
        {
          href: '/resources/oklahoma-truck-accident-evidence-guide',
          title: 'Truck Accident Evidence Guide',
          description: 'Commercial crash records and preservation deadlines for high-value cases.',
          ctaName: 'guide_after_accident_related_truck_evidence',
        },
        {
          href: '/resources/oklahoma-uninsured-motorist-claim-guide',
          title: 'Uninsured Motorist Claim Guide',
          description: 'Policy and damages strategy where at-fault coverage is insufficient.',
          ctaName: 'guide_after_accident_related_um_guide',
        },
        {
          href: '/personal-injury/truck-accidents',
          title: 'Truck Accident Litigation',
          description: 'Commercial carrier strategy for severe injury and disputed liability.',
          ctaName: 'guide_after_accident_related_truck',
        },
        {
          href: '/personal-injury/uninsured-motorist',
          title: 'Uninsured Motorist Claims',
          description: 'Coverage and recovery planning for UM/UIM disputes in Oklahoma.',
          ctaName: 'guide_after_accident_related_um',
        },
        {
          href: '/contact',
          title: 'Request Injury Case Review',
          description: 'Get immediate guidance on evidence, valuation, and settlement timing decisions.',
          ctaName: 'guide_after_accident_related_contact',
        },
      ]}
      ctaTitle="Protect Claim Value Before You Settle"
      ctaDescription="Early evidence control and communication strategy can materially improve outcome quality."
      ctaLabel="Start Injury Case Review"
      ctaName="guide_after_accident_bottom_cta"
    />
  )
}
