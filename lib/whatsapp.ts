const WA_NUMBER = '254115265517'
const SITE_URL = 'https://rusticglow.business'

export function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}

export function productEnquiryLink(productName: string, slug: string, price?: string): string {
  const productUrl = `${SITE_URL}/catalogue/${slug}`
  const msg = `Hi Rustic Glow! I'm interested in the ${productName}${price ? ` (${price})` : ''}.\n\nProduct link: ${productUrl}\n\nCould you share more details and availability?`
  return waLink(msg)
}

export function serviceEnquiryLink(service: string): string {
  return waLink(`Hi Rustic Glow! I'd like to enquire about your ${service} service. Please share details and pricing.`)
}

export function generalEnquiryLink(): string {
  return waLink("Hi Rustic Glow! I'd like to learn more about your woodstoves and services.")
}
