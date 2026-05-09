import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'

export const metadata: Metadata = {
  title: 'Gallery | Rustic Glow Kenya',
  description: 'Photos of our woodstove installations, chimney work and maintenance across Kenya.',
}

function getGalleryImages(): string[] {
  const galleryDir = path.join(process.cwd(), 'public/images/gallery')
  if (!fs.existsSync(galleryDir)) return []
  const allowed = ['.jpg', '.jpeg', '.png', '.webp']
  return fs
    .readdirSync(galleryDir)
    .filter(f => allowed.includes(path.extname(f).toLowerCase()))
    .map(f => `/images/gallery/${f}`)
}

export default function GalleryPage() {
  const images = getGalleryImages()

  return (
    <>
      {/* Header */}
      <div style={{
        background: 'var(--dark-wood)',
        paddingTop: 'calc(var(--nav-h) + 3rem)',
        paddingBottom: '3rem',
        borderBottom: '1px solid rgba(253,119,0,0.15)',
      }}>
        <div className="container">
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700,
            letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--brand)',
            marginBottom: '0.75rem',
          }}>Our work</p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            color: '#fff', marginBottom: '0.75rem',
          }}>Gallery</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', maxWidth: 480 }}>
            Installations, chimney work and stoves in their natural habitat — Kenyan homes.
          </p>
        </div>
      </div>

      {/* Gallery grid */}
      <section className="section" style={{ background: 'var(--canvas)' }}>
        <div className="container">
          {images.length === 0 ? (
            <div style={{
              textAlign: 'center', padding: '5rem 0',
              color: 'var(--ash)',
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.3 }}>
                <GalleryIcon />
              </div>
              <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--walnut)' }}>
                No photos yet
              </p>
              <p style={{ fontSize: '0.9rem' }}>
                Drop images into <code style={{ background: 'var(--parchment)', padding: '2px 8px', borderRadius: 3 }}>/public/images/gallery/</code> to populate this page.
              </p>
            </div>
          ) : (
            <div style={{
              columns: '3 280px',
              columnGap: '1rem',
            }}>
              {images.map((src, i) => (
                <div key={src} style={{
                  breakInside: 'avoid',
                  marginBottom: '1rem',
                  borderRadius: 6,
                  overflow: 'hidden',
                  background: 'var(--parchment)',
                }}>
                  <img
                    src={src}
                    alt={`Rustic Glow installation ${i + 1}`}
                    loading="lazy"
                    className="gallery-img"
                    style={{ width: '100%', display: 'block' }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

function GalleryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="48" height="48" style={{ margin: '0 auto', display: 'block' }}>
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21 15 16 10 5 21"/>
    </svg>
  )
}