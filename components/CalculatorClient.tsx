'use client'
import { useState } from 'react'
import type { Product } from '@/lib/products'

const MARKUP = 1.3
const RATES = {
  blackpipe: 2700,
  rolling:    500,
  seaming:    400,
  painting:   840,
  elbow:      600,
  rainCap:    300,
  labour:   10000,
}

function parsePrice(price?: string): number | null {
  if (!price) return null
  const num = parseInt(price.replace(/[^0-9]/g, ''), 10)
  return isNaN(num) ? null : num
}

function fmt(n: number): string {
  return `KES ${n.toLocaleString('en-KE')}`
}

export default function CalculatorClient({ products }: { products: Product[] }) {
  const [selectedSlug, setSelectedSlug] = useState<string>('')
  const [flueLength, setFlueLength]     = useState<string>('5')
  const [elbows, setElbows]             = useState<string>('2')
  const [rainCaps, setRainCaps]         = useState<string>('1')

  const selected = products.find(p => p.slug === selectedSlug) || null
  const stovePrice = selected ? parsePrice(selected.price) : null

  const len  = Math.max(0, parseFloat(flueLength) || 0)
  const elb  = Math.max(0, parseInt(elbows)        || 0)
  const caps = Math.max(0, parseInt(rainCaps)       || 0)

  const pipeTotal    = Math.round((RATES.blackpipe + RATES.rolling + RATES.seaming + RATES.painting) * MARKUP * len)
  const elbowTotal   = Math.round(RATES.elbow   * MARKUP * elb)
  const capTotal     = Math.round(RATES.rainCap * MARKUP * caps)
  const labourTotal  = Math.round(RATES.labour  * MARKUP)
  const installTotal = pipeTotal + elbowTotal + capTotal + labourTotal
  const grandTotal   = stovePrice ? stovePrice + installTotal : null

  const siteUrl = 'https://rusticglow.business'
  const waMessage = selected ? [
    `Hi Rustic Glow! I used the cost calculator on your website.`,
    ``,
    `My estimate:`,
    `• Stove: ${selected.name}`,
    `• Flue length: ${len}m`,
    `• Elbows: ${elb}`,
    `• Rain caps: ${caps}`,
    stovePrice    ? `• Stove price: ${fmt(stovePrice)}`        : '',
    `• Installation estimate: ${fmt(installTotal)}`,
    grandTotal    ? `• Approximate total: ${fmt(grandTotal)}`  : '',
    ``,
    `Product link: ${siteUrl}/catalogue/${selected.slug}`,
    ``,
    `Could you confirm availability and provide a formal quote?`,
  ].filter(Boolean).join('\n') : ''

  const waLink = `https://wa.me/254115265517?text=${encodeURIComponent(waMessage)}`

  const lineItems = [
    { label: `Blackpipe, rolling, seaming & painting (${len}m)`, amount: pipeTotal,   show: len > 0 },
    { label: `Elbows / bends (×${elb})`,                          amount: elbowTotal,  show: elb > 0 },
    { label: `Rain caps (×${caps})`,                              amount: capTotal,    show: caps > 0 },
    { label: 'Labour (flat)',                                      amount: labourTotal, show: true     },
  ]

  return (
    <div style={{ maxWidth: 640, margin: '0 auto' }}>

      {/* Model selector */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{
          display: 'block', fontSize: '0.72rem', fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'var(--ash)', marginBottom: 8,
        }}>
          Select stove model
        </label>
        <select
          value={selectedSlug}
          onChange={e => setSelectedSlug(e.target.value)}
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            border: '1px solid var(--birch)',
            borderRadius: 4,
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: selectedSlug ? 'var(--dark-wood)' : 'var(--ash)',
            background: '#fff',
            cursor: 'pointer',
            appearance: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23a08060' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 1rem center',
            paddingRight: '2.5rem',
          }}
        >
          <option value="">— Choose a stove —</option>
          {products.map(p => (
            <option key={p.slug} value={p.slug}>
              {p.name}{p.price ? ` — ${p.price}` : ''}
            </option>
          ))}
        </select>

        {/* Selected stove quick info */}
        {selected && (
          <div style={{
            marginTop: 10,
            padding: '0.75rem 1rem',
            background: 'var(--warmth)',
            border: '1px solid rgba(253,119,0,0.2)',
            borderRadius: 4,
            display: 'flex', gap: 16, flexWrap: 'wrap',
          }}>
            {[
              { label: 'Type',     value: selected.type },
              { label: 'Material', value: selected.material },
              { label: 'Room',     value: selected.roomSize },
            ].filter(s => s.value).map(s => (
              <div key={s.label}>
                <p style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ash)', fontWeight: 700, marginBottom: 2 }}>{s.label}</p>
                <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--dark-wood)' }}>{s.value}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Site inputs */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
        gap: '1rem',
        marginBottom: '1.5rem',
      }}>
        {[
          { label: 'Flue length (metres)', value: flueLength, set: setFlueLength, step: '0.5', min: 0 },
          { label: 'Elbows / bends',       value: elbows,     set: setElbows,     step: '1',   min: 0 },
          { label: 'Rain caps',             value: rainCaps,   set: setRainCaps,   step: '1',   min: 0 },
        ].map(f => (
          <div key={f.label}>
            <label style={{
              display: 'block', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--ash)', marginBottom: 6,
            }}>
              {f.label}
            </label>
            <input
              type="number"
              min={f.min}
              step={f.step}
              value={f.value}
              onChange={e => f.set(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.75rem',
                border: '1px solid var(--birch)',
                borderRadius: 4,
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                color: 'var(--dark-wood)',
                background: '#fff',
                outline: 'none',
              }}
            />
          </div>
        ))}
      </div>

      {/* Breakdown */}
      <div style={{
        border: '1px solid var(--birch)',
        borderRadius: 6,
        overflow: 'hidden',
        marginBottom: '1rem',
      }}>
        {/* Installation lines */}
        {lineItems.filter(i => i.show).map(item => (
          <div key={item.label} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '0.65rem 1rem',
            borderBottom: '1px solid var(--birch)',
            fontSize: '0.85rem',
            background: '#fff',
          }}>
            <span style={{ color: 'var(--walnut)' }}>{item.label}</span>
            <span style={{ fontWeight: 600, color: 'var(--dark-wood)', whiteSpace: 'nowrap', marginLeft: 12 }}>
              {fmt(item.amount)}
            </span>
          </div>
        ))}

        {/* Installation subtotal */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          padding: '0.75rem 1rem',
          background: 'var(--parchment)',
          borderBottom: '1px solid var(--birch)',
        }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--walnut)' }}>
            Installation subtotal
          </span>
          <span style={{ fontWeight: 700, color: 'var(--dark-wood)' }}>
            {fmt(installTotal)}
          </span>
        </div>

        {/* Stove price */}
        {stovePrice && (
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            padding: '0.75rem 1rem',
            background: '#fff',
            borderBottom: '1px solid var(--birch)',
          }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--walnut)' }}>
              Stove — {selected?.name}
            </span>
            <span style={{ fontWeight: 600, color: 'var(--dark-wood)' }}>
              {fmt(stovePrice)}
            </span>
          </div>
        )}

        {/* Grand total */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '1rem 1.25rem',
          background: 'var(--dark-wood)',
        }}>
          <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff' }}>
            {grandTotal ? 'Approximate total' : 'Installation estimate'}
          </span>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.3rem', fontWeight: 700,
            color: 'var(--brand)',
          }}>
            {fmt(grandTotal ?? installTotal)}
          </span>
        </div>
      </div>

      {/* Disclaimer */}
      <p style={{ fontSize: '0.75rem', color: 'var(--ash)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
        * Includes 30% markup on materials and fabrication. Labour is a flat rate.
        Actual cost may vary based on site conditions, flue routing complexity, and location.
        VAT inclusive. Stove price is separate from installation.
      </p>

      {/* WhatsApp CTA */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-wa"
        style={{
          width: '100%',
          justifyContent: 'center',
          fontSize: '0.95rem',
          padding: '0.9rem',
          opacity: selected ? 1 : 0.5,
          pointerEvents: selected ? 'auto' : 'none',
        }}
      >
        <WAIcon /> Get a formal quote on WhatsApp
      </a>

      {!selected && (
        <p style={{ fontSize: '0.8rem', color: 'var(--ash)', textAlign: 'center', marginTop: 8 }}>
          Select a stove model above to enable the quote button
        </p>
      )}
    </div>
  )
}

function WAIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
