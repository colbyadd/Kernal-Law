'use client'

import { usePathname } from 'next/navigation'
import { BASE_URL } from '@/lib/constants'
import { buildServicePageSchema } from '@/lib/schema/builders'

interface ServicePageJsonLdProps {
  description: string
  variant: 'criminal' | 'injury'
}

export function ServicePageJsonLd({ description, variant }: ServicePageJsonLdProps) {
  const pathname = usePathname()
  const serviceSchema = buildServicePageSchema({
    pathname,
    baseUrl: BASE_URL,
    description,
    variant,
  })

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  )
}
