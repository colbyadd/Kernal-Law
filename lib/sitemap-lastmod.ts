const EDITORIAL_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/

/**
 * Convert a human-maintained editorial date to the stable UTC date used by the
 * sitemap. Filesystem mtimes are intentionally ignored because installs and
 * deploys change them without reflecting a meaningful page update.
 */
export function resolveSitemapLastModified(editorialDate: string): Date {
  if (!EDITORIAL_DATE_PATTERN.test(editorialDate)) {
    throw new Error(`Invalid sitemap editorial date: ${editorialDate}`)
  }

  const parsedDate = new Date(`${editorialDate}T00:00:00.000Z`)

  if (Number.isNaN(parsedDate.getTime())) {
    throw new Error(`Invalid sitemap editorial date: ${editorialDate}`)
  }

  return parsedDate
}
