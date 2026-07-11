'use client'

import { useState } from 'react'

const DIRECTIONS_URL = 'https://www.google.com/maps/search/?api=1&query=1332+SW+89th+Street+Oklahoma+City+OK+73159'
const EMBED_URL = 'https://www.google.com/maps?q=1332+SW+89th+Street+Oklahoma+City+OK+73159&output=embed'

export function OfficeMap() {
  const [loaded, setLoaded] = useState(false)

  if (loaded) {
    return (
      <div className="h-64 w-full border border-silver-500/20 overflow-hidden">
        <iframe
          src={EMBED_URL}
          title="Map showing Kernal & Associates at 1332 SW 89th Street in Oklahoma City"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
    )
  }

  return (
    <div className="min-h-64 border border-silver-500/20 bg-iron-900 p-6 flex flex-col justify-center">
      <p className="text-accent-gold text-xs uppercase tracking-widest mb-3">Oklahoma City Office</p>
      <p className="font-serif text-2xl text-white">1332 SW 89th Street</p>
      <p className="text-silver-400 mt-1">Oklahoma City, OK 73159</p>
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="px-5 py-3 bg-white text-iron-950 text-xs font-bold uppercase tracking-widest hover:bg-silver-100"
        >
          Load Interactive Map
        </button>
        <a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="contact_map_directions"
          className="px-5 py-3 border border-silver-500/30 text-white text-xs font-bold uppercase tracking-widest text-center hover:border-accent-gold"
        >
          Get Directions
        </a>
      </div>
    </div>
  )
}
