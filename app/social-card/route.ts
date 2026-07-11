import { createSocialImage } from '../components/SocialImage'

export const dynamic = 'force-static'

export function GET() {
  return createSocialImage()
}
