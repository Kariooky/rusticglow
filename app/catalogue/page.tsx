import { getAllProducts } from '@/lib/products'
import ProductCard from '@/components/ProductCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stove Catalogue | Rustic Glow Kenya',
  description: 'Browse our curated selection of premium European woodstoves available in Kenya. Cast iron stoves from Jøtul, Morsø, Invicta and more.',
}

export default function CataloguePage() {
  const products = getAllProducts()
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))]

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
          }}>Our collection</p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            color: '#fff',
            marginBottom: '0.75rem',
          }}>Stove Catalogue</h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', maxWidth: 500 }}>
            Every stove is imported from Europe, installed by our team, and backed by our maintenance service.
          </p>
        </div>
      </div>

      {/* Catalogue body */}
      <section className="section" style={{ background: 'var(--canvas)' }}>
        <div className="container">
          {/* Category filter strip */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {categories.map(cat => (
              <span key={cat} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '6px 16px',
                borderRadius: 3,
                border: '1px solid var(--birch)',
                color: cat === 'All' ? '#fff' : 'var(--ash)',
                background: cat === 'All' ? 'var(--brand)' : 'transparent',
                cursor: 'pointer',
              }}>
                {cat}
              </span>
            ))}
          </div>

          {products.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--ash)' }}>
              <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>No products in the catalogue yet.</p>
              <p style={{ fontSize: '0.9rem' }}>Add JSON files to <code>/content/products/</code> to get started.</p>
            </div>
          ) : (
            <>
              <p style={{ fontSize: '0.85rem', color: 'var(--ash)', marginBottom: '1.5rem' }}>
                Showing {products.length} stove{products.length !== 1 ? 's' : ''}
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem',
              }}>
                {products.map(p => <ProductCard key={p.slug} product={p} />)}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: 'var(--parchment)', padding: '3rem 0', borderTop: '1px solid var(--birch)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--dark-wood)', marginBottom: '0.5rem' }}>
            Not sure which stove fits your space?
          </p>
          <p style={{ color: 'var(--ash)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            Send us a message and we&apos;ll help you size and select the right one.
          </p>
          <a href={`https://wa.me/254748692118?text=${encodeURIComponent("Hi Rustic Glow! I need help choosing the right woodstove for my space. Can you help?")}`}
            target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ fontSize: '0.95rem' }}>
            <WhatsAppIcon /> Get sizing advice
          </a>
        </div>
      </section>
    </>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
