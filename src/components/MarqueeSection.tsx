import './MarqueeSection.css'

const investmentLogos  = import.meta.glob('../assets/partners/investment/*.(png|jpg|svg|webp)', { eager: true, import: 'default' })
const lifeLogos        = import.meta.glob('../assets/partners/life/*.(png|jpg|svg|webp)',       { eager: true, import: 'default' })
const medicalLogos     = import.meta.glob('../assets/partners/medical/*.(png|jpg|svg|webp)',    { eager: true, import: 'default' })
const pensionLogos     = import.meta.glob('../assets/partners/pension/*.(png|jpg|svg|webp)',    { eager: true, import: 'default' })
const shortLogos       = import.meta.glob('../assets/partners/short/*.(png|jpg|svg|webp)',      { eager: true, import: 'default' })

function toUrls(glob: Record<string, unknown>): string[] {
  return Object.keys(glob).sort().map((key) => glob[key] as string)
}

function fillStrip(urls: string[], minCount = 12): string[] {
  if (urls.length === 0) return []
  const repeated: string[] = []
  while (repeated.length < minCount) repeated.push(...urls)
  return repeated
}

const marqueeData = [
  { label: 'Investment Houses',         reverse: false, images: toUrls(investmentLogos) },
  { label: 'Medical Aids & GAP Cover',  reverse: true,  images: toUrls(medicalLogos)   },
  { label: 'Pension / Provident Funds', reverse: false, images: toUrls(pensionLogos)   },
  { label: 'Short Term Insurance',      reverse: true,  images: toUrls(shortLogos)     },
  { label: 'Life Insurers',             reverse: false, images: toUrls(lifeLogos)      },
]

function altFromPath(src: string): string {
  const filename = src.split('/').pop() ?? ''
  return filename
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

function scrollToContact() {
  const el = document.getElementById('contact')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function MarqueeSection() {
  return (
    <section className="marquee-section">
      <div className="marquee-section__header container">
        <span className="section__eyebrow">Our Network</span>
        <h2 className="section__title">Trusted Partners &amp; Providers</h2>
        <p className="section__subtitle--dark">
          We work with South Africa's leading financial institutions across every discipline.
        </p>
      </div>

      <div className="marquee-tracks">
        {marqueeData.map(({ label, reverse, images }) => {
          const half = fillStrip(images)
          const strip = [...half, ...half]

          return (
            <div key={label} className="marquee-track-wrapper">
              <div className="marquee-track-label">
                <span>{label}</span>
              </div>

              {/* Clicking anywhere on the track scrolls to #contact */}
              <div
                className="marquee-track"
                onClick={scrollToContact}
                role="link"
                tabIndex={0}
                aria-label={`${label} — click to get in touch`}
                onKeyDown={(e) => e.key === 'Enter' && scrollToContact()}
              >
                {images.length === 0 ? (
                  <p className="marquee-empty">No logos found — add images to the folder.</p>
                ) : (
                  <div className={`marquee-inner${reverse ? ' marquee-inner--reverse' : ''}`}>
                    {strip.map((src, i) => (
                      <span key={i} className="logo-chip">
                        <img src={src} alt={altFromPath(src)} loading="lazy" decoding="async" />
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}