import { getAllProductSlugs, getProductBySlug } from '@/lib/products'
import { productEnquiryLink } from '@/lib/whatsapp'
import InstallationEstimator from '@/components/InstallationEstimator'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllProductSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  return {
    title: `${product.name} | Rustic Glow Kenya`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const waLink = productEnquiryLink(product.name, product.slug, product.price)

  return (
    <>
      {/* Breadcrumb */}
      <div style={{
        background: 'var(--dark-wood)',
        paddingTop: 'calc(var(--nav-h) + 1.25rem)',
        paddingBottom: '1.25rem',
        borderBottom: '1px solid rgba(253,119,0,0.12)',
      }}>
        <div className="container">
          <nav style={{ display: 'flex', gap: 8, fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.4)' }}>Home</Link>
            <span>/</span>
            <Link href="/catalogue" style={{ color: 'rgba(255,255,255,0.4)' }}>Catalogue</Link>
            <span>/</span>
            <span style={{ color: 'var(--brand)' }}>{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main product section */}
      <section className="section" style={{ background: 'var(--canvas)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}>
            {/* Left — image */}
            <div>
              {/* Replaced image container: no cropping, full image shows */}
              <div style={{
                borderRadius: 8,
                border: '1px solid var(--birch)',
                overflow: 'hidden',
                background: 'var(--parchment)',
              }}>
                <img
                  src={product.images[0]}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </div>
            </div>

            {/* Right — details */}
            <div>
              <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--brand)', marginBottom: '0.5rem' }}>
                {product.material} · {product.type}
              </p>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                color: 'var(--dark-wood)', marginBottom: '0.4rem', lineHeight: 1.15,
              }}>
                {product.name}
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--ash)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                {product.tagline}
              </p>

              {/* Specs grid */}
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1px', background: 'var(--birch)',
                border: '1px solid var(--birch)', borderRadius: 6,
                overflow: 'hidden', marginBottom: '1.75rem',
              }}>
                {[
                  { label: 'Weight',    value: product.weight },
                  { label: 'Dimensions', value: product.dimensions },
                  { label: 'Efficiency',value: product.efficiency },
                  { label: 'Room size', value: product.roomSize },
                  { label: 'Fuel',      value: product.fuelType },
                  { label: 'Type',      value: product.type },
                  { label: 'Material',  value: product.material },
                ].map(spec => (
                  <div key={spec.label} style={{ background: '#fff', padding: '0.85rem 1rem', textAlign: 'center' }}>
                    <p style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ash)', fontWeight: 700, marginBottom: 3 }}>
                      {spec.label}
                    </p>
                    <p style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dark-wood)' }}>
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--walnut)', lineHeight: 1.8, marginBottom: '1.75rem' }}>
                {product.description}
              </p>

              {/* Features */}
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ash)', marginBottom: '0.75rem' }}>
                  Key features
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {product.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.9rem', color: 'var(--walnut)' }}>
                      <span style={{ color: 'var(--brand)', marginTop: 2, flexShrink: 0 }}>◆</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Installation Estimator */}
              <InstallationEstimator
                productName={product.name}
                productPrice={product.price}
                productSlug={product.slug}
              />

              {/* Price + CTA */}
              <div style={{
                background: 'var(--parchment)', border: '1px solid var(--birch)',
                borderRadius: 6, padding: '1.25rem 1.5rem',
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
              }}>
                <div>
                  <p style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ash)', fontWeight: 700, marginBottom: 4 }}>
                    Price (installed)
                  </p>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 600, color: 'var(--dark-wood)', lineHeight: 1 }}>
                    {product.price}
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--ash)', marginTop: 4 }}>
                    Installation included · VAT applicable
                  </p>
                </div>
                <a href={waLink} target="_blank" rel="noopener noreferrer"
                  className="btn-wa" style={{ fontSize: '1rem', padding: '0.9rem 1.8rem' }}>
                  <WhatsAppIcon /> Enquire on WhatsApp
                </a>
              </div>

              <p style={{ fontSize: '0.78rem', color: 'var(--ash)', marginTop: '0.75rem', lineHeight: 1.6 }}>
                💬 Message us to confirm availability, arrange a site visit, or ask about financing options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to catalogue */}
      <div style={{ background: 'var(--parchment)', padding: '2rem 0', borderTop: '1px solid var(--birch)' }}>
        <div className="container">
          <Link href="/catalogue" className="btn-outline" style={{ fontSize: '0.85rem' }}>
            ← Back to catalogue
          </Link>
        </div>
      </div>
    </>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}