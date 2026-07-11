export type CtaVariant = 'control' | 'challenger'

interface SearchParamsLike {
  get(name: string): string | null
}

const CTA_VARIANT_STORAGE_KEY = 'kernal_cta_variant_v1'

function normalizeVariant(value: string | null | undefined): CtaVariant | null {
  if (!value) {
    return null
  }

  const normalized = value.trim().toLowerCase()
  if (normalized === 'a' || normalized === 'control') {
    return 'control'
  }
  if (normalized === 'b' || normalized === 'challenger') {
    return 'challenger'
  }
  return null
}

function persistVariant(variant: CtaVariant) {
  if (typeof window === 'undefined') {
    return
  }
  try {
    window.sessionStorage.setItem(CTA_VARIANT_STORAGE_KEY, variant)
  } catch {
    // A/B attribution is best-effort when storage is blocked.
  }
}

export function loadCtaVariant(): CtaVariant | null {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    return normalizeVariant(window.sessionStorage.getItem(CTA_VARIANT_STORAGE_KEY))
  } catch {
    return null
  }
}

export function getOrCreateCtaVariant(searchParams: SearchParamsLike): CtaVariant {
  if (typeof window === 'undefined') {
    return 'control'
  }

  const queryVariant = normalizeVariant(searchParams.get('cta_variant'))
  if (queryVariant) {
    persistVariant(queryVariant)
    return queryVariant
  }

  const storedVariant = loadCtaVariant()
  if (storedVariant) {
    return storedVariant
  }

  const assignedVariant: CtaVariant = Math.random() < 0.5 ? 'control' : 'challenger'
  persistVariant(assignedVariant)
  return assignedVariant
}
