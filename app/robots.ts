import { MetadataRoute } from 'next'
import { BASE_URL, CANONICAL_HOST } from '@/lib/constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private', '/private/', '/api/', '/__forms.html'],
    },
    host: CANONICAL_HOST,
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
