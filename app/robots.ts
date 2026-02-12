import { MetadataRoute } from 'next'
import { BASE_URL } from '@/lib/constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/__forms.html', '/form-setup.html'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
