import Link from 'next/link'

export interface LinkGridItem {
  href: string
  title: string
  description: string
  ctaLabel?: string
  ctaName?: string
}

interface LinkGridSectionProps {
  title: string
  subtitle?: string
  items: LinkGridItem[]
  columns?: 'two' | 'three' | 'four'
}

function toCtaName(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
}

export function LinkGridSection({
  title,
  subtitle,
  items,
  columns = 'two',
}: LinkGridSectionProps) {
  const columnClass = columns === 'four'
    ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4'
    : columns === 'three'
      ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      : 'grid-cols-1 md:grid-cols-2'

  return (
    <section className="py-16 md:py-24 border-y border-silver-500/10 bg-iron-900/40">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">{title}</h2>
          {subtitle ? <p className="text-silver-400 text-lg">{subtitle}</p> : null}
        </div>

        <div className={`grid ${columnClass} gap-6`}>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-cta={item.ctaName ?? `internal_link_${toCtaName(item.title)}`}
              className="group border border-silver-500/10 bg-iron-900 p-7 hover:border-accent-gold/50 transition-colors"
            >
              <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-accent-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-silver-400 text-sm leading-relaxed mb-5">{item.description}</p>
              <span className="text-accent-gold text-xs uppercase tracking-widest">
                {item.ctaLabel ?? 'View This Page'}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
