import { getAllProducts } from '@/lib/products'
import CatalogueClient from '@/components/CatalogueClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stove Catalogue | Rustic Glow Kenya',
  description: 'Browse our curated selection of premium woodstoves available in Kenya.',
}

export default function CataloguePage() {
  const products = getAllProducts()

  return (
    <>
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
          }}>
            Our collection
          </p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            color: '#fff', marginBottom: '0.75rem',
          }}>
            Stove Catalogue
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', maxWidth: 500 }}>
            Every stove is imported, installed by our team, and backed by our maintenance service.
          </p>
        </div>
      </div>

      <CatalogueClient products={products} />
    </>
  )
}