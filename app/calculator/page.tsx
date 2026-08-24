import { getAllProducts } from '@/lib/products'
import CalculatorClient from '@/components/CalculatorClient'
import PageHeader from '@/components/PageHeader'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cost Calculator | Rustic Glow Kenya',
  description: 'Estimate your woodstove installation cost. Select a model and enter your site details for an instant quote.',
}

export default function CalculatorPage() {
  const products = getAllProducts()

  return (
    <>
      <PageHeader
        eyebrow="Instant estimate"
        title="Cost Calculator"
        subtitle="Select your stove and enter your site details to get an instant installation estimate. Final quote confirmed on-site."
      />

      {/* Calculator */}
      <section className="section" style={{ background: 'var(--canvas)' }}>
        <div className="container">
          <CalculatorClient products={products} />
        </div>
      </section>
    </>
  )
}
