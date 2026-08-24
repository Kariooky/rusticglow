import { getAllProducts } from '@/lib/products'
import CatalogueClient from '@/components/CatalogueClient'
import PageHeader from '@/components/PageHeader'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stove Catalogue | Rustic Glow Kenya',
  description: 'Browse our curated selection of premium woodstoves available in Kenya.',
}

export default function CataloguePage() {
  const products = getAllProducts()

  return (
    <>
      <PageHeader
        eyebrow="Our collection"
        title="Stove Catalogue"
        subtitle="Every stove is imported, installed by our team, and backed by our maintenance service."
      />

      <CatalogueClient products={products} />
    </>
  )
}