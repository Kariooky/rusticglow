'use client'
import Link from 'next/link'
import { productEnquiryLink } from '@/lib/whatsapp'
import type { Product } from '@/lib/products'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid var(--birch)',
      borderRadius: 6,
      overflow: 'hidden',
      transition: 'transform 0.2s, box-shadow 0.2s',
      display: 'flex',
      flexDirection: 'column',
    }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = 'translateY(-4px)'
        el.style.boxShadow = '0 12px 40px rgba(26,16,8,0.12)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = 'none'
        el.style.boxShadow = 'none'
      }}
    >
      {/* Image with absolute category/origin badges */}
      <Link href={`/catalogue/${product.slug}`}>
        <div style={{
          height: 220,
          overflow: 'hidden',
          position: 'relative',
          background: 'var(--parchment)',
        }}>
          <img
            src={product.images[0]}
            alt={product.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
          <div style={{
            position: 'absolute', top: 12, left: 12,
            background: 'var(--warmth)',
            color: 'var(--charcoal)',
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '4px 10px',
            borderRadius: 3,
          }}>
            {product.material}
          </div>
          <div style={{
            position: 'absolute', top: 12, right: 12,
            background: 'var(--brand)', color: '#fff',
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 700,
            padding: '4px 10px',
            borderRadius: 3,
          }}>
            {product.type}
          </div>
        </div>
      </Link>

      {/* Content */}
      <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Link href={`/catalogue/${product.slug}`}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--dark-wood)', lineHeight: 1.3 }}>
            {product.name}
          </h3>
        </Link>
        <p style={{ fontSize: '0.85rem', color: 'var(--ash)', fontStyle: 'italic' }}>{product.tagline}</p>

        {/* Specs row */}
        <div style={{ display: 'flex', gap: 16, margin: '4px 0' }}>
          {[
            { label: 'Weight', value: product.weight },
            { label: 'Efficiency', value: product.efficiency },
            { label: 'Room', value: product.roomSize },
          ].map(spec => (
            <div key={spec.label}>
              <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ash)', fontWeight: 700 }}>{spec.label}</p>
              <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--walnut)' }}>{spec.value}</p>
            </div>
          ))}
        </div>

        <div style={{ height: 1, background: 'var(--birch)', margin: '4px 0' }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--dark-wood)' }}>
            {product.price}
          </span>
          <a
            href={productEnquiryLink(product.name, product.price)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
            style={{ fontSize: '0.8rem', padding: '0.55rem 1rem', gap: 7 }}
          >
            <WhatsAppIcon />
            Enquire
          </a>
        </div>
      </div>
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}