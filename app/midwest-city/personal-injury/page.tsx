import { ServiceDetailPage } from '@/app/components/ServiceDetailPage'
import { getCitySubpillarSpec } from '@/lib/content/city-subpillars'

const spec = getCitySubpillarSpec('midwest-city', 'personal-injury')

export const metadata = spec.metadata

export default function MidwestCityPersonalInjuryPage() {
  return <ServiceDetailPage {...spec.pageProps} />
}
