import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'Rustic Glow | Woodstoves Kenya',
  description: 'Premium woodstoves imported, installed and maintained across Kenya. Turn your home into a warm, rustic haven.',
  keywords: 'woodstoves kenya, cast iron stove nairobi, fireplace installation kenya, chimney cleaning nairobi',
  openGraph: {
    title: 'Rustic Glow | Woodstoves Kenya',
    description: 'Premium woodstoves imported, installed and maintained across Kenya.',
    url: 'https://rusticglow.business',
    siteName: 'Rustic Glow',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}