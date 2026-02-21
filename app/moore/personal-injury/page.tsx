import { ServiceDetailPage } from '@/app/components/ServiceDetailPage'
import { getCitySubpillarSpec } from '@/lib/content/city-subpillars'

const spec = getCitySubpillarSpec('moore', 'personal-injury')

export const metadata = spec.metadata

export default function MoorePersonalInjuryPage() {
  return <ServiceDetailPage {...spec.pageProps} />
}
