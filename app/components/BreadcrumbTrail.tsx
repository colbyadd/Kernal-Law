import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbTrailProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbTrail({ items }: BreadcrumbTrailProps) {
  if (items.length <= 1) {
    return null
  }

  return (
    <section className="py-4 border-b border-silver-500/10 bg-iron-900/35">
      <div className="container mx-auto px-6">
        <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto">
          <ol className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-silver-400">
            {items.map((item, index) => {
              const isLast = index === items.length - 1
              return (
                <li key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
                  {item.href && !isLast ? (
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className={isLast ? 'text-white font-medium' : ''}>{item.label}</span>
                  )}
                  {!isLast ? <span className="text-silver-600">/</span> : null}
                </li>
              )
            })}
          </ol>
        </nav>
      </div>
    </section>
  )
}
