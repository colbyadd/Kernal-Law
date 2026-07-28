import { ImageResponse } from 'next/og'

export const SOCIAL_IMAGE_ALT =
  'Kernal & Associates — Oklahoma criminal defense and selected personal injury matters'

export const SOCIAL_IMAGE_SIZE = {
  width: 1200,
  height: 630,
}

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'stretch',
          background: '#0a0a0a',
          color: '#f5f5f5',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          padding: '72px 80px',
          width: '100%',
        }}
      >
        <div
          style={{
            background: '#c29b40',
            display: 'flex',
            height: '8px',
            width: '140px',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <div
            style={{
              display: 'flex',
              fontSize: '68px',
              fontWeight: 700,
              letterSpacing: '-2px',
              lineHeight: 1.05,
            }}
          >
            KERNAL &amp; ASSOCIATES
          </div>
          <div
            style={{
              color: '#cfcfcf',
              display: 'flex',
              fontSize: '32px',
              lineHeight: 1.3,
            }}
          >
            Oklahoma Criminal Defense · Selected Personal Injury Matters
          </div>
        </div>

        <div
          style={{
            alignItems: 'center',
            borderTop: '1px solid #454545',
            color: '#a3a3a3',
            display: 'flex',
            fontSize: '24px',
            justifyContent: 'space-between',
            paddingTop: '28px',
          }}
        >
          <div style={{ display: 'flex' }}>Todd Kernal, Attorney at Law</div>
          <div style={{ display: 'flex' }}>kernallaw.com</div>
        </div>
      </div>
    ),
    SOCIAL_IMAGE_SIZE,
  )
}
