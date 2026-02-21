import { Metadata } from 'next'
import { BreadcrumbTrail } from '../components/BreadcrumbTrail'
import { FaqSection } from '../components/FaqSection'
import { LinkGridSection } from '../components/LinkGridSection'
import { MobileConversionBar } from '../components/MobileConversionBar'
import { PageHero } from '../components/PageHero'
import { QuickPathSection } from '../components/QuickPathSection'
import { TrustProofSection } from '../components/TrustProofSection'

export const metadata: Metadata = {
  title: 'Oklahoma Legal Resources and Action Guides',
  description:
    'Action-focused Oklahoma legal guides for criminal defense and personal injury timelines, evidence decisions, and next-step strategy.',
  alternates: { canonical: '/resources' },
  openGraph: {
    title: 'Oklahoma Legal Resource Hub | Kernal & Associates',
    description:
      'Practical legal guides for arrests, DUI timelines, felony workflow, car crashes, truck evidence, and UM/UIM claim strategy.',
    url: 'https://kernallaw.com/resources',
  },
}

const processSteps = [
  {
    step: 'Step 1',
    title: 'Identify Your Immediate Risk',
    description:
      'Use the guide matching your exact event so early statements, evidence handling, and deadline moves are controlled.',
  },
  {
    step: 'Step 2',
    title: 'Follow a Structured Action Checklist',
    description:
      'Each guide maps timing, records, and procedural decisions that materially affect criminal and injury leverage.',
  },
  {
    step: 'Step 3',
    title: 'Convert Guidance to Attorney Strategy',
    description:
      'Move from information to direct counsel when exposure, valuation, or court pressure is increasing.',
  },
]

const takeaways = [
  'Resource quality depends on actionability, not generic legal background text.',
  'The first 24-72 hours after a legal event are usually outcome-sensitive.',
  'Evidence discipline and timeline discipline are the core recurring themes.',
  'Guides are strongest when paired with case-specific attorney strategy.',
]

const relatedLinks = [
  {
    href: '/criminal-defense',
    title: 'Criminal Defense Service Hub',
    description:
      'Charge-category strategy pages and direct case-intake path for criminal matters.',
    ctaName: 'resources_to_criminal_hub',
  },
  {
    href: '/personal-injury',
    title: 'Personal Injury Service Hub',
    description:
      'Injury claim strategy pages for auto, truck, catastrophic, and wrongful-death cases.',
    ctaName: 'resources_to_injury_hub',
  },
  {
    href: '/contact',
    title: 'Request Case Review',
    description:
      'Talk directly with counsel when you need legal strategy, not just information.',
    ctaName: 'resources_to_contact',
  },
]

const resourceFaqs = [
  {
    question: 'Are these resources legal advice for my exact case?',
    answer:
      'These guides are educational and action-focused but not a substitute for case-specific legal counsel.',
  },
  {
    question: 'Which guide should I read first?',
    answer:
      'Start with the guide that matches your immediate event, such as arrest response, DUI process, or post-crash steps.',
  },
  {
    question: 'Can I use this page to move directly to an attorney consultation?',
    answer:
      'Yes. Every resource path connects to relevant service pages and the direct consultation intake channel.',
  },
  {
    question: 'How current are these guides?',
    answer:
      'Guides are maintained as part of ongoing content governance and should still be paired with current matter-specific legal advice.',
  },
  {
    question: 'Do these guides replace talking with an attorney?',
    answer:
      'No. They are decision aids for urgent moments. Legal rights, exposure, and strategy still depend on your specific facts and should be reviewed directly with counsel.',
  },
  {
    question: 'Why do the guides focus heavily on early steps?',
    answer:
      'Early errors are often the most expensive. The first decisions after an arrest or crash usually shape negotiation posture and long-term outcome risk.',
  },
  {
    question: 'Can I use these resources if my incident happened outside Oklahoma City?',
    answer:
      'Yes. The guides are written for Oklahoma processes and are intended for metro and nearby county markets served by the firm.',
  },
  {
    question: 'What should I do if my matter involves both criminal and injury exposure?',
    answer:
      'Treat it as a coordinated strategy issue. Preserve records, avoid broad statements, and request consultation so one process does not undermine the other.',
  },
  {
    question: 'How should I use guides if my facts are still developing?',
    answer:
      'Use the immediate-action sections first, then update your timeline as facts become clearer. Early structure is still useful even before all records are available.',
  },
  {
    question: 'Can these resources help before I decide to hire counsel?',
    answer:
      'Yes. They are designed to improve short-term decisions so you can evaluate legal options from a stronger and better-documented position.',
  },
]

const resourceCoverageMap = [
  {
    title: 'Arrest and Warrant Response',
    description:
      'Guides in this cluster prioritize rights protection, condition compliance, and early defense stabilization before formal case posture hardens.',
  },
  {
    title: 'DUI and License Timeline Control',
    description:
      'This track focuses on parallel court and administrative pressure so key deadlines are not missed and avoidable compounding penalties are reduced.',
  },
  {
    title: 'Crash Evidence and Claim Positioning',
    description:
      'These guides map practical evidence, treatment chronology, and insurer communication steps that preserve claim value in high-pressure windows.',
  },
  {
    title: 'Severe Loss and Commercial Exposure',
    description:
      'Resources in this category emphasize record preservation, technical liability context, and long-horizon damages planning for complex matters.',
  },
]

const editorialStandards = [
  {
    title: 'Legal-Safe Framing',
    description:
      'No guarantee language, no outcome promises, and no simplified rules that could mislead users facing high-stakes legal decisions.',
  },
  {
    title: 'Action-First Organization',
    description:
      'Every guide begins with immediate steps, then process sequencing, then strategy escalation points so users can act under time pressure.',
  },
  {
    title: 'Conversion Adjacency',
    description:
      'Each topic links to its matching service route and consultation channel to prevent information dead ends and improve user progression.',
  },
  {
    title: 'Ongoing QA Governance',
    description:
      'Content is maintained with recurring QA checks for depth, UX consistency, and technical SEO alignment across all priority routes.',
  },
]

const escalationSignals = [
  {
    title: 'Conflicting Accounts or Disputed Fault',
    description:
      'When facts are contested, documentation and communication discipline become critical. This is usually the point where attorney strategy adds immediate value.',
  },
  {
    title: 'High-Penalty or High-Value Exposure',
    description:
      'If liberty risk, major financial loss, or long-term record consequences are involved, process quality should move from self-guided to attorney-led quickly.',
  },
  {
    title: 'Compressed Deadlines',
    description:
      'Short windows for hearings, administrative actions, or insurer demands often require faster legal triage than public guides alone can provide.',
  },
  {
    title: 'Multi-Track Legal Pressure',
    description:
      'When one event creates multiple legal tracks, coordinated representation prevents avoidable contradictions and preserves broader leverage.',
  },
]

const resourceUsePolicy = [
  'Use guides to protect position, not to delay legal consultation.',
  'Document facts in date order so strategy decisions stay grounded.',
  'Escalate quickly when deadlines or penalties are increasing.',
  'Treat guide content as preparation, not as a substitute for legal advice.',
]

export default function ResourcesPage() {
  return (
    <main className="bg-iron-950 min-h-screen">
      <PageHero
        title="Legal Resources"
        subtitle="Decision-ready guides for urgent Oklahoma criminal defense and injury claim events."
      />
      <MobileConversionBar
        context="resources_hub"
        primaryHref="/contact"
        primaryLabel="Request Review"
      />
      <BreadcrumbTrail
        items={[
          { label: 'Home', href: '/' },
          { label: 'Resources' },
        ]}
      />

      <QuickPathSection
        title="Start With the Situation You Are In Right Now"
        subtitle="These paths are built for high-pressure moments where the next decision can materially change legal outcomes."
        items={[
          {
            badge: 'Urgent Criminal',
            title: 'Arrest or Warrant Pressure',
            description: 'Protect rights, avoid avoidable statements, and stabilize your defense posture early.',
            href: '/resources/what-to-do-after-arrest-oklahoma',
            ctaName: 'resources_quick_path_after_arrest',
          },
          {
            badge: 'DUI Timeline',
            title: 'DUI Court and License Risk',
            description: 'Understand the two-track process before short administrative windows tighten.',
            href: '/resources/oklahoma-dui-process',
            ctaName: 'resources_quick_path_dui_process',
          },
          {
            badge: 'Urgent Injury',
            title: 'Crash and Claim Protection',
            description: 'Preserve evidence, protect treatment records, and avoid early insurer leverage traps.',
            href: '/resources/what-to-do-after-car-accident-oklahoma',
            ctaName: 'resources_quick_path_after_crash',
          },
        ]}
      />

      <section className="py-12 md:py-16 border-b border-silver-500/10 scroll-mt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">How to Use This Resource Hub</h2>
            <p className="text-silver-400 mb-8 max-w-3xl">
              Use this sequence to move from uncertainty to a concrete legal action plan.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {processSteps.map((item) => (
                <article
                  key={item.title}
                  className="bg-iron-900 border border-silver-500/15 p-6 hover:border-accent-gold/35 transition-colors"
                >
                  <p className="text-accent-gold text-[11px] uppercase tracking-[0.2em] mb-2">{item.step}</p>
                  <h3 className="font-serif text-2xl text-white mb-3">{item.title}</h3>
                  <p className="text-silver-400 leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {takeaways.map((item) => (
                <div
                  key={item}
                  className="bg-iron-900/70 border border-silver-500/10 p-4 text-silver-300 text-sm leading-relaxed"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="pt-8">
              <a
                href="tel:+14053640601"
                data-cta="resources_call_now"
                className="inline-flex items-center justify-center px-8 py-4 border border-silver-500/30 text-white font-bold uppercase tracking-widest hover:border-accent-gold transition-colors"
              >
                Call (405) 364-0601
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 border-b border-silver-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">How This Hub Is Structured</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <article className="bg-iron-900 border border-silver-500/15 p-6">
                <p className="text-accent-gold text-[10px] uppercase tracking-[0.22em] mb-3">Phase 1</p>
                <h3 className="font-serif text-2xl text-white mb-3">Immediate Risk Control</h3>
                <p className="text-silver-400 leading-relaxed">
                  First-48-hours guides help you avoid decisions that can reduce defense leverage or claim value.
                </p>
              </article>
              <article className="bg-iron-900 border border-silver-500/15 p-6">
                <p className="text-accent-gold text-[10px] uppercase tracking-[0.22em] mb-3">Phase 2</p>
                <h3 className="font-serif text-2xl text-white mb-3">Case-Build Strategy</h3>
                <p className="text-silver-400 leading-relaxed">
                  Process and evidence guides show where timing, documentation, and legal sequencing shift outcomes.
                </p>
              </article>
              <article className="bg-iron-900 border border-silver-500/15 p-6">
                <p className="text-accent-gold text-[10px] uppercase tracking-[0.22em] mb-3">Phase 3</p>
                <h3 className="font-serif text-2xl text-white mb-3">Conversion to Counsel</h3>
                <p className="text-silver-400 leading-relaxed">
                  Every guide links directly to the matching service pages and intake path for immediate attorney action.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <LinkGridSection
        title="Criminal Defense Guides"
        subtitle="Practical resources for arrests, felony workflow, bond conditions, and DUI timeline control."
        columns="three"
        items={[
          {
            href: '/resources/what-to-do-after-arrest-oklahoma',
            title: 'What to Do After an Arrest in Oklahoma',
            description:
              'First-48-hours checklist for silence rights, release strategy, and document preservation.',
            ctaName: 'resources_link_after_arrest',
          },
          {
            href: '/resources/oklahoma-dui-process',
            title: 'Oklahoma DUI Process Guide',
            description:
              'Understand the criminal-court and license tracks with actionable deadline control.',
            ctaName: 'resources_link_dui_process',
          },
          {
            href: '/resources/oklahoma-felony-case-timeline',
            title: 'Oklahoma Felony Case Timeline',
            description:
              'A staged breakdown from arrest through trial posture, negotiation windows, and sentencing risk.',
            ctaName: 'resources_link_felony_timeline',
          },
          {
            href: '/resources/oklahoma-bond-and-release-conditions',
            title: 'Oklahoma Bond and Release Conditions Guide',
            description:
              'How to avoid condition violations and protect case posture after release from custody.',
            ctaName: 'resources_link_bond_release',
          },
        ]}
      />

      <LinkGridSection
        title="Personal Injury Guides"
        subtitle="Claim-protection resources for crashes, commercial transport collisions, and uninsured-driver exposure."
        columns="three"
        items={[
          {
            href: '/resources/what-to-do-after-car-accident-oklahoma',
            title: 'What to Do After a Car Accident in Oklahoma',
            description:
              'Immediate evidence, treatment, and insurer communication workflow after a crash.',
            ctaName: 'resources_link_after_accident',
          },
          {
            href: '/resources/oklahoma-uninsured-motorist-claim-guide',
            title: 'Oklahoma Uninsured Motorist Claim Guide',
            description:
              'Policy-aware strategy for UM/UIM claims when the at-fault driver lacks enough coverage.',
            ctaName: 'resources_link_um_uim_guide',
          },
          {
            href: '/resources/oklahoma-truck-accident-evidence-guide',
            title: 'Oklahoma Truck Accident Evidence Guide',
            description:
              'Critical records and timing windows for commercial crash liability and damages proof.',
            ctaName: 'resources_link_truck_evidence_guide',
          },
        ]}
      />

      <section className="py-12 md:py-16 border-y border-silver-500/10 bg-iron-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">How Resource Depth Is Built</h2>
            <p className="text-silver-400 mb-8 max-w-3xl">
              This hub is structured for urgent usability, legal safety, and conversion continuity across criminal defense and personal injury pathways.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              {resourceCoverageMap.map((item) => (
                <article
                  key={item.title}
                  className="bg-iron-900 border border-silver-500/15 p-6 hover:border-accent-gold/35 transition-colors"
                >
                  <h3 className="font-serif text-2xl text-white mb-3">{item.title}</h3>
                  <p className="text-silver-400 leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {editorialStandards.map((item) => (
                <article
                  key={item.title}
                  className="bg-iron-900/70 border border-silver-500/10 p-6"
                >
                  <h3 className="font-serif text-xl text-white mb-2">{item.title}</h3>
                  <p className="text-silver-400 text-sm leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 border-b border-silver-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">When to Escalate from Guide to Counsel</h2>
            <p className="text-silver-400 mb-8 max-w-3xl">
              These escalation triggers are intended to help users recognize when self-guided decision-making should transition into direct legal strategy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              {escalationSignals.map((item) => (
                <article
                  key={item.title}
                  className="bg-iron-900 border border-silver-500/15 p-6 hover:border-accent-gold/35 transition-colors"
                >
                  <h3 className="font-serif text-2xl text-white mb-3">{item.title}</h3>
                  <p className="text-silver-400 leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resourceUsePolicy.map((item) => (
                <li
                  key={item}
                  className="bg-iron-900/70 border border-silver-500/10 p-4 text-silver-300 text-sm leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <TrustProofSection
        ctaPrefix="resources"
        title="Use Resources with Proof and Attorney Context"
        subtitle="Pair guide knowledge with outcomes, reviews, and direct legal strategy before acting."
      />

      <LinkGridSection
        title="Move From Information to Legal Action"
        subtitle="These next clicks map resource learning directly into representation pathways."
        columns="three"
        items={relatedLinks}
      />

      <FaqSection
        title="Resource Hub FAQs"
        subtitle="Important context before relying on any legal guide."
        faqs={resourceFaqs}
        practiceArea="resources"
      />
    </main>
  )
}
