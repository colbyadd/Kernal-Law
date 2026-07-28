import Link from 'next/link'

interface QuickPathItem {
  title: string
  description: string
  href: string
  ctaName: string
  badge?: string
  ctaLabel?: string
}

interface QuickPathSectionProps {
  title: string
  subtitle: string
  items: [QuickPathItem, QuickPathItem, QuickPathItem]
}

export function QuickPathSection({ title, subtitle, items }: QuickPathSectionProps) {
  return (
    <section className="py-10 md:py-14 border-b border-silver-500/10 bg-iron-950/70">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-7 md:mb-9">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">{title}</h2>
            <p className="text-silver-400 max-w-3xl">{subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {items.map((item) => (
              item.href.startsWith('tel:') || item.href.startsWith('sms:') || item.href.startsWith('mailto:') ? (
                <a
                  key={item.title}
                  href={item.href}
                  data-cta={item.ctaName}
                  className="group bg-iron-900 border border-silver-500/15 p-6 hover:border-accent-gold/40 transition-colors"
                >
                  {item.badge ? (
                    <p className="text-[10px] uppercase tracking-[0.2em] text-accent-gold mb-3">{item.badge}</p>
                  ) : null}
                  <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-silver-100 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-silver-400 leading-relaxed mb-4">{item.description}</p>
                  <span className="text-xs uppercase tracking-[0.16em] text-accent-gold">
                    {item.ctaLabel ?? 'View This Page'}
                  </span>
                </a>
              ) : (
                <Link
                  key={item.title}
                  href={item.href}
                  data-cta={item.ctaName}
                  className="group bg-iron-900 border border-silver-500/15 p-6 hover:border-accent-gold/40 transition-colors"
                >
                  {item.badge ? (
                    <p className="text-[10px] uppercase tracking-[0.2em] text-accent-gold mb-3">{item.badge}</p>
                  ) : null}
                  <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-silver-100 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-silver-400 leading-relaxed mb-4">{item.description}</p>
                  <span className="text-xs uppercase tracking-[0.16em] text-accent-gold">
                    {item.ctaLabel ?? 'View This Page'}
                  </span>
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
