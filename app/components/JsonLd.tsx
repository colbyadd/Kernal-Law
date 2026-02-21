'use client'

import { usePathname } from 'next/navigation'
import { BASE_URL } from '@/lib/constants'
import { buildBreadcrumbSchema, buildWebPageSchema } from '@/lib/schema/builders'

export function JsonLd() {
  const pathname = usePathname()
  const baseUrl = BASE_URL
  const webPageSchema = buildWebPageSchema(pathname, baseUrl)
  const breadcrumbSchema = buildBreadcrumbSchema(pathname, baseUrl)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
    </>
  )
}
