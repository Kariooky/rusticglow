import { getAllProducts } from '@/lib/products'
import CalculatorClient from '@/components/CalculatorClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cost Calculator | Rustic Glow Kenya',
  description: 'Estimate your woodstove installation cost. Select a model and enter your site details for an instant quote.',
}

export default function CalculatorPage() {
  const products = getAllProducts()

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
          }}>
            Instant estimate
          </p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            color: '#fff', marginBottom: '0.75rem',
          }}>
            Cost Calculator
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', maxWidth: 520 }}>
            Select your stove and enter your site details to get an instant installation estimate. Final quote confirmed on-site.
          </p>
        </div>
      </div>

      {/* Calculator */}
      <section className="section" style={{ background: 'var(--canvas)' }}>
        <div className="container">
          <CalculatorClient products={products} />
        </div>
      </section>
    </>
  )
}
