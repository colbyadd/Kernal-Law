'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getOrCreateCtaVariant, type CtaVariant } from '@/lib/cro'

interface PrimaryConsultationCtaProps {
  context: string
  className: string
  controlLabel: string
  challengerLabel: string
  href?: string
  labelClassName?: string
}

export function PrimaryConsultationCta({
  context,
  className,
  controlLabel,
  challengerLabel,
  href = '/contact',
  labelClassName,
}: PrimaryConsultationCtaProps) {
  const [variant, setVariant] = useState<CtaVariant>('control')

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVariant(getOrCreateCtaVariant(searchParams))
  }, [])

  return (
    <Link
      href={href}
      data-cta={`${context}_primary_cta_${variant}`}
      className={className}
    >
      {labelClassName ? (
        <span className={labelClassName}>
          {variant === 'challenger' ? challengerLabel : controlLabel}
        </span>
      ) : (
        variant === 'challenger' ? challengerLabel : controlLabel
      )}
    </Link>
  )
}
