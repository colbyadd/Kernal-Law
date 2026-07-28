import Link from 'next/link'

interface PrimaryConsultationCtaProps {
  context: string
  className: string
  label: string
  href?: string
  labelClassName?: string
}

export function PrimaryConsultationCta({
  context,
  className,
  label,
  href = '/contact',
  labelClassName,
}: PrimaryConsultationCtaProps) {
  return (
    <Link
      href={href}
      data-cta={`${context}_primary_cta`}
      className={className}
    >
      {labelClassName ? (
        <span className={labelClassName}>{label}</span>
      ) : (
        label
      )}
    </Link>
  )
}
