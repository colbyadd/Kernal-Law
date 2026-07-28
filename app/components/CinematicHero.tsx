import Image from 'next/image'
import Link from 'next/link'
import {
  getContactHref,
  PRIMARY_PHONE_DOT,
  PRIMARY_PHONE_TEL_HREF,
} from '@/lib/contact'

export function CinematicHero() {
  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative isolate overflow-hidden border-b border-silver-500/10 bg-iron-950"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(194,155,64,0.10),transparent_32%),linear-gradient(135deg,#171717_0%,#0a0a0a_58%)]"
      />

      <div className="absolute inset-y-0 right-0 hidden w-[49%] lg:block">
        <Image
          src="/images/todd-kernal-motorcycle.webp"
          alt="Todd Kernal"
          fill
          sizes="49vw"
          className="object-cover object-[50%_18%]"
          priority
          fetchPriority="high"
          quality={75}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-iron-950 via-iron-950/35 to-transparent"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 pb-12 pt-32 sm:pb-14 sm:pt-36 lg:flex lg:min-h-[700px] lg:items-center lg:py-28">
        <div className="grid w-full items-end gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(280px,0.88fr)] lg:gap-10">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-gold">
              <span aria-hidden="true" className="h-px w-8 bg-accent-gold/70" />
              Oklahoma Criminal Defense
            </p>

            <h1
              id="home-hero-title"
              className="max-w-3xl text-balance font-serif text-4xl leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Arrested or under investigation? Know what to do next.
            </h1>

            <p className="mt-6 max-w-2xl border-l border-accent-gold/70 pl-5 text-base leading-relaxed text-silver-300 sm:text-lg">
              Todd Kernal defends Oklahomans facing DUI, drug charges, sex-offense allegations,
              warrants, and other felony and misdemeanor cases. The firm also accepts selected
              serious-injury matters.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={getContactHref('criminal-defense')}
                data-cta="home_hero_consultation"
                className="inline-flex min-h-12 items-center justify-center bg-accent-gold px-7 py-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-iron-950 transition-colors hover:bg-silver-100"
              >
                Request a Free Consultation
              </Link>
              <a
                href={PRIMARY_PHONE_TEL_HREF}
                data-cta="home_hero_call"
                className="inline-flex min-h-12 items-center justify-center border border-silver-500/35 bg-iron-950/50 px-7 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-white/60 hover:bg-white/5"
              >
                Call {PRIMARY_PHONE_DOT}
              </a>
            </div>

            <div className="mt-8 grid grid-cols-[88px_minmax(0,1fr)] items-center gap-4 border-y border-silver-500/20 py-4 sm:grid-cols-[104px_minmax(0,1fr)] lg:hidden">
              <div className="relative aspect-square overflow-hidden border border-silver-500/20 bg-iron-900">
                <Image
                  src="/images/todd-kernal-motorcycle.webp"
                  alt="Todd Kernal"
                  fill
                  sizes="(max-width: 639px) 88px, 104px"
                  className="object-cover object-top"
                  quality={80}
                />
              </div>
              <div>
                <p className="font-serif text-xl text-white sm:text-2xl">Todd Kernal</p>
                <p className="mt-1 text-sm leading-relaxed text-silver-400">
                  Criminal defense is the firm&apos;s primary work, with selected serious-injury representation.
                </p>
                <Link
                  href="/attorney"
                  data-cta="home_hero_attorney"
                  className="mt-2 inline-flex min-h-10 items-center text-xs font-semibold uppercase tracking-[0.16em] text-accent-gold transition-colors hover:text-white"
                >
                  Meet Todd
                </Link>
              </div>
            </div>

            <nav
              aria-label="Choose a legal service"
              className="mt-8 hidden max-w-2xl gap-3 lg:grid lg:grid-cols-[1.2fr_0.8fr]"
            >
              <Link
                href="/criminal-defense"
                data-cta="home_hero_criminal_path"
                className="group border border-accent-gold/45 bg-iron-900/85 p-4 transition-colors hover:border-accent-gold hover:bg-iron-800/90"
              >
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-gold">
                  Primary Focus
                </span>
                <span className="mt-2 block font-serif text-xl text-white">Criminal Defense</span>
                <span className="mt-1 block text-sm leading-relaxed text-silver-400 group-hover:text-silver-300">
                  DUI, felony, warrant, probation, and other serious charges
                </span>
              </Link>

              <Link
                href="/personal-injury"
                data-cta="home_hero_injury_path"
                className="group border border-silver-500/20 bg-iron-950/65 p-4 transition-colors hover:border-silver-500/50 hover:bg-iron-900/85"
              >
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-silver-500">
                  Selected Matters
                </span>
                <span className="mt-2 block font-serif text-xl text-white">Personal Injury</span>
                <span className="mt-1 block text-sm leading-relaxed text-silver-500 group-hover:text-silver-300">
                  Serious crash and injury claims
                </span>
              </Link>
            </nav>
          </div>

          <div className="hidden justify-end lg:flex">
            <div className="max-w-xs border-l-2 border-accent-gold bg-iron-950/80 p-5 backdrop-blur-sm">
              <p className="font-serif text-2xl text-white">Todd Kernal</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-silver-400">
                Oklahoma Attorney
              </p>
              <p className="mt-4 text-sm leading-relaxed text-silver-300">
                Criminal defense first, with selected serious-injury representation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
