import { BASE_URL } from '@/lib/constants'
import { buildOrganizationSchema, buildWebsiteSchema } from '@/lib/schema/builders'

export function BaseJsonLd() {
  const organizationSchema = buildOrganizationSchema(BASE_URL)
  const websiteSchema = buildWebsiteSchema(BASE_URL)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
