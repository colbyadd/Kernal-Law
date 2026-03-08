import { Metadata } from "next";
import { CinematicHero } from "./components/CinematicHero";
import { FaqSection } from "./components/FaqSection";
import { LinkGridSection } from "./components/LinkGridSection";
import { MobileConversionBar } from "./components/MobileConversionBar";
import { QuickPathSection } from "./components/QuickPathSection";
import { TrustProofSection } from "./components/TrustProofSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Oklahoma Criminal Defense Lawyer & Personal Injury Attorney',
  description:
    'Kernal & Associates helps Oklahoma clients with criminal defense and personal injury matters, including DUI, felony charges, car accidents, truck accidents, and wrongful death claims.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Oklahoma Criminal Defense Lawyer & Personal Injury Attorney | Kernal & Associates',
    description:
      'Oklahoma legal representation for serious criminal charges and injury claims, with direct attorney strategy for DUI, warrants, car accidents, truck accidents, and severe losses.',
    url: 'https://kernallaw.com',
  },
}

const processSteps = [
  {
    step: 'Step 1',
    title: 'Stabilize Immediate Risk',
    description:
      'Do not give recorded statements, secure your documents, and avoid public commentary about your legal issue.',
  },
  {
    step: 'Step 2',
    title: 'Preserve Case-Critical Evidence',
    description:
      'Collect citations, hearing notices, medical records, photos, witness details, and timeline notes while facts are fresh.',
  },
  {
    step: 'Step 3',
    title: 'Get Attorney Strategy Fast',
    description:
      'A focused consultation protects your leverage before prosecutor or insurer framing hardens against your interests.',
  },
]

const takeaways = [
  'Early decisions usually matter more than late-stage damage control.',
  'Every major legal matter is a process problem first, not just a paperwork problem.',
  'Criminal and injury exposure both require evidence-first execution.',
  'The right first call can materially change outcome quality.',
]

const relatedLinks = [
  {
    href: '/criminal-defense',
    title: 'Criminal Defense Hub',
    description: 'Charge-specific defense paths for DUI, drug allegations, warrants, and more.',
    ctaName: 'home_related_criminal_hub',
  },
  {
    href: '/personal-injury',
    title: 'Personal Injury Hub',
    description: 'Injury strategy pages for car crashes, truck collisions, catastrophic losses, and wrongful death.',
    ctaName: 'home_related_injury_hub',
  },
  {
    href: '/resources',
    title: 'Legal Resource Guides',
    description: 'Decision-ready guides for immediate actions after arrest or serious accidents.',
    ctaName: 'home_related_resources',
  },
]

const localRealities = [
  {
    title: 'Court and Claim Timelines Move Faster Than Most Clients Expect',
    description:
      'In both criminal and injury matters, delays in the first week can narrow practical options. Bond conditions, hearing settings, recorded statements, and adjuster narratives often form before clients realize leverage is already shifting.',
  },
  {
    title: 'Early Records Decide Later Credibility',
    description:
      'Initial documents, photos, messages, and medical chronology are frequently the backbone of negotiation and trial posture. If those records are incomplete, inconsistent, or late, opposing parties use that gap to discount your position.',
  },
  {
    title: 'Parallel Risk Tracks Must Be Managed Together',
    description:
      'Many events create overlapping exposure, including criminal allegations, license consequences, employment risk, and civil claim pressure. Strategy needs to align these tracks so progress in one process does not damage the other.',
  },
  {
    title: 'Preparation Quality Is a Major Outcome Variable',
    description:
      'Good outcomes are often built through disciplined procedure, not luck. Investigation timing, evidentiary framing, and courtroom readiness usually matter more than broad promises or aggressive marketing language.',
  },
]

const commonMistakes = [
  {
    title: 'Giving Statements Too Early',
    description:
      'Clients often speak to police or insurers before legal strategy is formed. Even accurate details can be reframed later when context is incomplete.',
  },
  {
    title: 'Treating Deadlines as Administrative Only',
    description:
      'Hearing dates, reporting windows, and insurer response clocks are leverage points. Missing one can cause avoidable long-term damage.',
  },
  {
    title: 'Assuming the Facts Will Explain Themselves',
    description:
      'Facts must be documented, organized, and argued. Without structure, strong facts still lose force during negotiation or litigation.',
  },
  {
    title: 'Waiting for Pressure to Increase Before Calling',
    description:
      'The best strategy window is usually before the process hardens. Early counsel keeps more options open and improves decision quality.',
  },
]

const timingWindows = [
  {
    title: 'First 24 Hours',
    description:
      'Secure records, reduce unnecessary communication, and define immediate legal risk before opposing narratives lock into court or claim files.',
  },
  {
    title: 'Days 2-7',
    description:
      'This is usually where early leverage is either built or lost through deadline management, document quality, and strategic communication discipline.',
  },
  {
    title: 'Weeks 2-4',
    description:
      'As procedural timelines advance, representation quality shifts from intake to execution. Preparation depth becomes more visible to opposing counsel.',
  },
  {
    title: 'Beyond Month One',
    description:
      'Long-term outcomes are often determined by consistency: evidence control, hearing readiness, damages development, and litigation posture maintenance.',
  },
]

const homeFaqs = [
  {
    question: 'How fast should I call a lawyer after an arrest or serious accident?',
    answer:
      'Immediately. Early action can protect rights, preserve evidence, and prevent avoidable damage from statements or missed deadlines.',
  },
  {
    question: 'Can one firm handle both criminal defense and personal injury matters?',
    answer:
      'Yes. Kernal & Associates handles both categories and can coordinate strategy when one incident creates multiple legal tracks.',
  },
  {
    question: 'Do consultations cost anything?',
    answer:
      'Initial consultations are offered so you can understand legal risk, likely timeline, and next strategic decisions before committing.',
  },
  {
    question: 'What should I prepare before contacting the firm?',
    answer:
      'Gather all available documents, timelines, photos, and communications. If you do not have everything yet, contact us anyway and we will map priorities.',
  },
  {
    question: 'Do I need to wait until formal charges are filed before contacting a lawyer?',
    answer:
      'No. Early legal involvement before filing can improve defense posture, protect rights, and prevent avoidable statements that later reduce negotiating leverage.',
  },
  {
    question: 'What if I have both criminal and personal injury risk from the same event?',
    answer:
      'That overlap needs coordinated strategy. Decisions in one track can affect the other, so legal planning should account for both from the start.',
  },
  {
    question: 'How quickly can I get a practical next-step plan?',
    answer:
      'Urgent matters are prioritized. The goal of initial contact is to provide clear immediate actions so you avoid preventable errors while deeper strategy is developed.',
  },
  {
    question: 'Is this site a substitute for legal advice?',
    answer:
      'No. The site is educational and action-focused, but your legal exposure depends on specific facts, venue, evidence, and timing that require direct counsel.',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-iron-950">
      <CinematicHero />
      <MobileConversionBar
        context="home"
        primaryHref="/contact"
        primaryLabel="Get Legal Review"
      />

      <QuickPathSection
        title="Choose Your Fastest Path"
        subtitle="Start with the scenario closest to your situation so you can get immediate, case-specific direction."
        items={[
          {
            badge: "Criminal Defense",
            title: "Arrested or Investigated",
            description: "Protect your rights early and avoid statements that can damage your defense.",
            href: "/criminal-defense",
            ctaName: "home_quick_path_criminal",
          },
          {
            badge: "Personal Injury",
            title: "Injured in a Crash",
            description: "Preserve claim value before adjuster strategy narrows your recovery options.",
            href: "/personal-injury",
            ctaName: "home_quick_path_injury",
          },
          {
            badge: "Immediate Action",
            title: "Need Urgent Guidance",
            description: "Request a confidential consultation and get a clear next-step plan quickly.",
            href: "/contact",
            ctaName: "home_quick_path_contact",
          },
        ]}
      />

      <TrustProofSection
        ctaPrefix="home"
        title="Proof Before You Commit"
        subtitle="Review outcomes, client feedback, and attorney credentials before deciding your next legal step."
      />

      <section id="home-process" className="py-12 md:py-20 border-b border-silver-500/10 scroll-mt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">What to Do First</h2>
            <p className="text-silver-400 mb-8 max-w-3xl">
              Most legal outcomes are shaped by first-move discipline. Follow this sequence to protect leverage.
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

            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                data-cta="home_process_contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-iron-950 font-bold uppercase tracking-widest hover:bg-silver-100 transition-colors"
              >
                Request Consultation
              </Link>
              <a
                href="tel:+14053640601"
                data-cta="home_process_call"
                className="inline-flex items-center justify-center px-8 py-4 border border-silver-500/30 text-white font-bold uppercase tracking-widest hover:border-accent-gold transition-colors"
              >
                Call (405) 364-0601
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section - Stark & Direct */}
      <section className="py-24 md:py-32 border-b border-silver-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-8 border-l-2 border-accent-gold pl-6 md:pl-8 max-w-4xl">
              &quot;If I don&apos;t stand up for my clients and protect their constitutional rights, then everyone loses.&quot;
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-silver-400 leading-relaxed">
              <p>
                Whether you are facing criminal charges or recovering from a serious injury, you deserve an attorney who will fight for you. I believe that every client deserves the full protection of the law and a relentless advocate in their corner.
              </p>
              <p>
                For 25+ years, I have fought in the trenches of the Oklahoma justice system. From complex felonies to catastrophic injury claims, my sole focus is securing the best possible outcome for you and your family.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {localRealities.map((item) => (
                <article
                  key={item.title}
                  className="bg-iron-900/60 border border-silver-500/10 p-5 hover:border-accent-gold/35 transition-colors"
                >
                  <h3 className="font-serif text-xl text-white mb-2">{item.title}</h3>
                  <p className="text-silver-400 text-sm leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
            <div className="mt-12">
              <Link href="/attorney" className="text-white border-b border-white pb-1 hover:text-silver-400 hover:border-silver-400 transition-colors uppercase tracking-widest text-sm">
                Read Full Bio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 border-b border-silver-500/10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">Avoid These Early-Stage Mistakes</h2>
            <p className="text-silver-400 mb-8 max-w-3xl">
              Most avoidable legal damage happens before clients believe they are in a high-risk phase. This checklist is designed to reduce those preventable losses.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {commonMistakes.map((item) => (
                <article
                  key={item.title}
                  className="bg-iron-900 border border-silver-500/15 p-6 hover:border-accent-gold/35 transition-colors"
                >
                  <h3 className="font-serif text-2xl text-white mb-3">{item.title}</h3>
                  <p className="text-silver-400 leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 border-b border-silver-500/10 bg-iron-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">Timing Matters More Than Most People Think</h2>
            <p className="text-silver-400 mb-8 max-w-3xl">
              Legal pressure compounds over time. These windows show where disciplined action usually has the strongest effect on final outcome quality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {timingWindows.map((item) => (
                <article
                  key={item.title}
                  className="bg-iron-900 border border-silver-500/15 p-6 hover:border-accent-gold/35 transition-colors"
                >
                  <h3 className="font-serif text-2xl text-white mb-3">{item.title}</h3>
                  <p className="text-silver-400 leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LinkGridSection
        title="Move to the Right Next Page"
        subtitle="Use this navigation set when you need immediate legal clarity without exploring the full site."
        items={relatedLinks}
        columns="three"
      />

      {/* Practice Areas - Minimalist Grid */}
      <section className="py-24 bg-iron-900">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h3 className="font-serif text-4xl text-white">Practice Areas</h3>
            <Link href="/practice" data-cta="home_view_all_practice_areas" className="hidden md:block text-silver-500 hover:text-white transition-colors text-sm uppercase tracking-widest">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-silver-500/20 border border-silver-500/20">
            {[
              { title: "Personal Injury", desc: "Justice for victims of negligence, accidents, and oil field injuries.", href: "/personal-injury" },
              { title: "DUI & Traffic", desc: "Protecting your license and your record.", href: "/criminal-defense/dui-dwi" },
              { title: "Drug Charges", desc: "Challenging search and seizure violations.", href: "/criminal-defense/drug-charges" },
              { title: "Violent Crimes", desc: "Defense against assault, battery, and manslaughter.", href: "/criminal-defense" },
            ].map((p, i) => (
              <Link key={i} href={p.href} data-cta={`home_practice_${i + 1}`} className="bg-iron-900 p-8 hover:bg-iron-800 transition-colors group block">
                <h4 className="font-serif text-xl text-white mb-4 group-hover:text-silver-100">{p.title}</h4>
                <p className="text-silver-500 text-sm leading-relaxed mb-6">{p.desc}</p>
                <div className="inline-flex items-center text-accent-gold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                  Learn More &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        title="Frequently Asked Questions"
        subtitle="Quick answers before you choose your next legal move."
        faqs={homeFaqs}
        practiceArea="home"
      />

      {/* Testimonials */}
      <TestimonialsSection />
    </main>
  );
}
