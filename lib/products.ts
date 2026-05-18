import fs from 'fs'
import path from 'path'

export interface Product {
  name: string
  slug: string
  tagline: string
  price: string
  material: string
  weight: string
  dimensions: string
  efficiency: string
  roomSize: string
  fuelType: string
  type: string
  description: string
  features: string[]
  images: string[]
}

const productsDir = path.join(process.cwd(), 'content/products')

export function getAllProducts(): Product[] {
  const files = fs.readdirSync(productsDir).filter(f => f.endsWith('.json'))
  return files.map(file => {
    const raw = fs.readFileSync(path.join(productsDir, file), 'utf-8')
    return JSON.parse(raw) as Product
  })
}

export function getProductBySlug(slug: string): Product | null {
  const filePath = path.join(productsDir, `${slug}.json`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(raw) as Product
}

export function getAllProductSlugs(): string[] {
  return fs
    .readdirSync(productsDir)
    .filter(f => f.endsWith('.json'))
    .map(f => f.replace('.json', ''))
}
