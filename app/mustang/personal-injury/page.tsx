import { ServiceDetailPage } from '@/app/components/ServiceDetailPage'
import { getCitySubpillarSpec } from '@/lib/content/city-subpillars'

const spec = getCitySubpillarSpec('mustang', 'personal-injury')

export const metadata = spec.metadata

export default function MustangPersonalInjuryPage() {
  return <ServiceDetailPage {...spec.pageProps} />
}
