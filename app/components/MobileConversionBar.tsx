import Link from 'next/link'

interface MobileConversionBarProps {
  context: string
  primaryHref?: string
  primaryLabel?: string
  phoneNumber?: string
}

export function MobileConversionBar({
  context,
  primaryHref = '/contact',
  primaryLabel = 'Request Review',
  phoneNumber = '4053640601',
}: MobileConversionBarProps) {
  return (
    <section className="md:hidden py-3 border-b border-silver-500/10 bg-iron-900/80">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={`tel:${phoneNumber}`}
            data-cta={`${context}_mobile_call`}
            className="h-11 rounded-full bg-accent-gold text-iron-950 text-[11px] uppercase tracking-[0.18em] font-bold flex items-center justify-center"
          >
            Call Now
          </a>
          <Link
            href={primaryHref}
            data-cta={`${context}_mobile_primary`}
            className="h-11 rounded-full border border-silver-500/35 text-silver-100 text-[11px] uppercase tracking-[0.18em] font-semibold flex items-center justify-center"
          >
            {primaryLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
