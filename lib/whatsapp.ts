const WA_NUMBER = '254748692118'

export function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}

export function productEnquiryLink(productName: string, price?: string): string {
  const msg = `Hi Rustic Glow! I'm interested in the ${productName}${price ? ` (${price})` : ''}. Could you share more details and availability?`
  return waLink(msg)
}

export function serviceEnquiryLink(service: string): string {
  const msg = `Hi Rustic Glow! I'd like to enquire about your ${service} service. Please share details and pricing.`
  return waLink(msg)
}

export function generalEnquiryLink(): string {
  return waLink("Hi Rustic Glow! I'd like to learn more about your woodstoves and services.")
}
