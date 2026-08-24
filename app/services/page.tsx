import React from 'react'
import { serviceEnquiryLink, generalEnquiryLink } from '@/lib/whatsapp'
import PageHeader from '@/components/PageHeader'
import CtaBanner from '@/components/CtaBanner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Rustic Glow Kenya',
  description: 'Professional woodstove installation, chimney cleaning and maintenance across Kenya and East Africa.',
}

interface ServiceStep {
  step: string
  title: string
  desc: string
}

interface Service {
  id: string
  icon: React.ReactNode
  image?: string
  title: string
  tagline: string
  waService: string
  description: string
  steps: ServiceStep[]
  note: string
}

/* ── Icons (must be defined before services array) ── */
function WAIcon({ color = 'currentColor' }: { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill={color} width="18" height="18" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function WrenchIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="24" height="24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
}

function BrushIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="24" height="24"><path d="M18 3a3 3 0 0 0-3 3l-7 8a3 3 0 0 0 0 6h.5a3 3 0 0 0 2.12-.88l7-7A3 3 0 0 0 18 3z"/><path d="M7 21a3 3 0 0 1-3-3 1 1 0 0 0-1-1H2"/></svg>
}

function SpannerIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="24" height="24"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>
}

function InfoIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
}

/* ── Services array (icons are now defined) ── */
const services: Service[] = [
  {
    id: 'installation',
    icon: <WrenchIcon />,
    image: '/images/services/installation.png',
    title: 'Installation',
    tagline: 'From bare wall to blazing fire',
    waService: 'Installation',
    description: 'We handle the full installation process — from your first call to lighting the inaugural fire. Every installation is carried out by our trained technicians and signed off with a safety inspection.',
    steps: [
      { step: '01', title: 'Site Assessment',            desc: 'We visit your space to evaluate flue routing, hearth requirements, room dimensions and the best stove position.' },
      { step: '02', title: 'Proposal & Stove Selection', desc: 'We recommend the right stove for your room size and usage, with a written quote covering supply and installation.' },
      { step: '03', title: 'Chimney & Flue Installation',desc: 'We install the twin-wall flue system or connect to an existing masonry chimney, ensuring correct draught and clearances.' },
      { step: '04', title: 'Stove Fitting & Commissioning', desc: 'The stove is positioned, connected to the flue, and test-fired. We walk you through operation, airwash, and ash management.' },
    ],
    note: 'All installations include a 12-month workmanship warranty.',
  },
  {
    id: 'chimney-cleaning',
    icon: <BrushIcon />,
    image: '/images/services/chimney-cleaning.jpeg',
    title: 'Chimney Cleaning',
    tagline: 'Clean flue, safe burn, better draw',
    waService: 'Chimney Cleaning',
    description: "A dirty chimney is the single biggest cause of stove problems — poor draught, smoke spillage, and in serious cases, chimney fires. We recommend a professional sweep at least once a year, or after every two cords of wood burned.",
    steps: [
      { step: '01', title: 'Inspection',      desc: 'We inspect the flue liner, register plate and stove internals for cracks, blockages or bird nests before cleaning begins.' },
      { step: '02', title: 'Sweep & Vacuum',  desc: 'Using rotary brushes and a high-powered HEPA vacuum, we clean the full length of the flue — zero mess inside your room.' },
      { step: '03', title: 'Creosote Report', desc: 'We report on creosote buildup levels (Stage I–III) and advise on fuel quality improvements if needed.' },
      { step: '04', title: 'Draught Test',    desc: 'A smoke pellet test confirms your chimney is drawing correctly before we leave.' },
    ],
    note: 'Every sweep includes a post-service condition report with notes on chimney performance, creosote levels, and any maintenance issues identified during inspection.',
  },
  {
    id: 'maintenance',
    icon: <SpannerIcon />,
    image: '/images/services/maintenance.png',
    title: 'Maintenance & Repairs',
    tagline: 'Keep it burning for decades',
    waService: 'Maintenance & Repairs',
    description: "Cast iron stoves are built to last 30+ years — but they need periodic attention. Rope seals harden, glass cracks, baffle plates warp. We stock genuine spare parts and carry out repairs on-site in most cases.",
    steps: [
      { step: '01', title: 'Annual Service Visit',    desc: 'A thorough inspection covering door seals, glass, baffle plate, grate, ash pan, and all air controls.' },
      { step: '02', title: 'Rope & Seal Replacement', desc: 'Door rope and glass seals are replaced when compression is lost — critical for correct air control and efficiency.' },
      { step: '03', title: 'Glass Replacement',       desc: 'Ceramic glass panels replaced with correct-spec heat-resistant glass. Same-day repair in most cases.' },
      { step: '04', title: 'Flue Liner Inspection',   desc: 'CCTV camera inspection available for older installations. We detect liner deterioration before it becomes a safety issue.' },
    ],
    note: 'We maintain a spare parts inventory for all brands we stock. Emergency call-outs available for Nairobi.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we do"
        title="Our Services"
        subtitle="We're not just a shop — we're a full-service operation. From installing your first stove to keeping it running clean a decade later."
      />

      {/* Sticky section nav */}
      <div style={{
        background: 'var(--parchment)',
        borderBottom: '1px solid var(--birch)',
        position: 'sticky', top: 'var(--nav-h)', zIndex: 50,
      }}>
        <div className="container" style={{ display: 'flex', gap: 0, overflowX: 'auto' }}>
          {services.map(s => (
            <a key={s.id} href={`#${s.id}`} className="services-nav-link">
              {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* Service sections */}
      {services.map((service, i) => (
        <section key={service.id} id={service.id} className="section" style={{
          background: i % 2 === 0 ? 'var(--canvas)' : 'var(--parchment)',
          scrollMarginTop: 'calc(var(--nav-h) + 52px)',
        }}>
          <div className="container">
            {/* Section header */}
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem',
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: '0.75rem' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 8,
                    background: 'rgba(253,119,0,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--brand)', flexShrink: 0,
                  }}>
                    {service.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand)', marginBottom: 3 }}>
                      Service
                    </p>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', color: 'var(--dark-wood)', lineHeight: 1.1 }}>
                      {service.title}
                    </h2>
                  </div>
                </div>
                <p style={{ fontSize: '1rem', color: 'var(--ash)', fontStyle: 'italic' }}>{service.tagline}</p>
              </div>
              <a href={serviceEnquiryLink(service.waService)} target="_blank" rel="noopener noreferrer" className="btn-wa">
                <WAIcon /> Book {service.title}
              </a>
            </div>

            {/* Description + image side by side */}
            <div
              className="service-content-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: service.image ? '1fr 1fr' : '1fr',
                gap: '2.5rem',
                alignItems: 'start',
                marginBottom: '2.5rem',
              }}
            >
              <p style={{ fontSize: '1rem', color: 'var(--walnut)', lineHeight: 1.8 }}>
                {service.description}
              </p>

              {service.image && (
                <div style={{
                  borderRadius: 8,
                  overflow: 'hidden',
                  border: '1px solid var(--birch)',
                }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              )}
            </div>

            {/* Process steps */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
              {service.steps.map(s => (
                <div key={s.step} style={{
                  background: '#fff', border: '1px solid var(--birch)',
                  borderRadius: 6, padding: '1.5rem',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <span style={{
                    position: 'absolute', top: 12, right: 14,
                    fontFamily: 'var(--font-display)', fontSize: '2.5rem',
                    fontWeight: 700, color: 'rgba(253,119,0,0.08)', lineHeight: 1,
                    userSelect: 'none',
                  }}>{s.step}</span>
                  <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--brand)', marginBottom: '0.5rem' }}>
                    Step {s.step}
                  </p>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--dark-wood)', marginBottom: '0.5rem' }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--ash)', lineHeight: 1.65 }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Note */}
            <div style={{
              background: 'var(--warmth)',
              border: '1px solid rgba(253,119,0,0.2)',
              borderLeft: '3px solid var(--brand)',
              borderRadius: '0 4px 4px 0',
              padding: '0.9rem 1.25rem',
              display: 'flex', gap: 10, alignItems: 'flex-start',
              maxWidth: 640,
            }}>
              <span style={{ color: 'var(--brand)', flexShrink: 0, marginTop: 2 }}><InfoIcon /></span>
              <p style={{ fontSize: '0.85rem', color: 'var(--walnut)', lineHeight: 1.65 }}>{service.note}</p>
            </div>
          </div>
        </section>
      ))}

      <CtaBanner
        title="Book a service or ask a question"
        copy="We respond on WhatsApp within the hour during business hours."
      >
        <a href={generalEnquiryLink()} target="_blank" rel="noopener noreferrer" className="btn-invert">
          <WAIcon /> Message us now
        </a>
      </CtaBanner>
    </>
  )
}