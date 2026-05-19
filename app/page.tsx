import Link from 'next/link'
import { getAllProducts } from '@/lib/products'
import { generalEnquiryLink, serviceEnquiryLink } from '@/lib/whatsapp'
import ProductCard from '@/components/ProductCard'

export default function HomePage() {
  const products = getAllProducts().slice(0, 3)

  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'var(--ember)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* Video fire background */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          overflow: 'hidden',
        }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: 0.55,
            }}
          >
            <source src="/videos/hero-video.webm" type="video/webm" />
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>

          {/* Dark overlay so text stays readable */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(26,16,8,0.85) 40%, rgba(26,16,8,0.4) 100%)',
          }} />
        </div>

        {/* Radial glow */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 80%, rgba(253,119,0,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container hero-content" style={{ position: 'relative', zIndex: 2, padding: '120px 1.5rem 80px' }}>
          <div style={{ maxWidth: 640 }}>
            <p className="hero-fade-1" style={{
              fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--brand)',
              marginBottom: '1.25rem',
            }}>
              Premium Woodstoves · Kenya
            </p>

            <h1 className="hero-fade-2" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
              fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '1.5rem',
            }}>
              Warmth that<br />
              <span style={{ color: 'var(--brand)' }}>lingers long</span><br />
              after midnight.
            </h1>

            <p className="hero-fade-3" style={{
              fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)',
              maxWidth: 480, lineHeight: 1.75, marginBottom: '2.5rem',
            }}>
              We import, install and maintain premium woodstoves across East Africa. One call — we handle everything.
            </p>

            <div className="hero-fade-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link href="/catalogue" className="btn-wa" style={{ fontSize: '0.95rem', padding: '0.9rem 1.8rem' }}>
                Browse Catalogue
              </Link>
              <a href={generalEnquiryLink()} target="_blank" rel="noopener noreferrer"
                className="btn-outline"
                style={{ fontSize: '0.95rem', padding: '0.85rem 1.8rem', color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.3)' }}>
                <WAIcon /> Ask on WhatsApp
              </a>
            </div>

            {/* Trust badges */}
            <div className="hero-fade-5 hero-badges" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '3rem' }}>
              {[
                { icon: <EuropeIcon />, text: 'European imports' },
                { icon: <WrenchIcon />, text: 'Professional installation' },
                { icon: <SpannerIcon />, text: 'Annual maintenance' },
                { icon: <PinIcon />, text: 'Nairobi & upcountry' },
              ].map(b => (
                <div key={b.text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: 'var(--brand)', display: 'flex' }}>{b.icon}</span>
                  <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)' }}>{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-fade-6" style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        }}>
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Scroll</span>
          <div className="scroll-line" style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, rgba(253,119,0,0.6), transparent)' }} />
        </div>
      </section>

      {/* ── WHY RUSTIC GLOW ── */}
      <section className="section" style={{ background: 'var(--canvas)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="section-eyebrow">Why choose us</p>
            <h2 className="section-title">The full-service difference</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              We don&apos;t just sell stoves. We assess your space, handle the installation, and come back to keep it running perfectly.
            </p>
          </div>
          <div className="why-us-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {[
              { icon: <BoxIcon />,     title: 'Curated Imports',      desc: 'Every stove is hand-picked from proven manufacturers — Jøtul, Morsø, Hi-Flame Metal, Ningbo Precise Machinery, Invicta. Quality-checked before it reaches you.' },
              { icon: <WrenchIcon />,  title: 'Expert Installation',  desc: 'Our team handles everything from site assessment to chimney fitting. Done right the first time, with a full safety check.' },
              { icon: <SpannerIcon />, title: 'Ongoing Maintenance',  desc: 'Annual chimney sweeps, gasket replacements, glass cleaning — we keep your stove burning clean and safe for years.' },
              { icon: <ChatIcon />,    title: 'Personalized Support',desc: 'Message us directly - get quick answers on availability, sizing advice, and service bookings.' },
            ].map(item => (
              <div key={item.title} style={{
                background: '#fff', border: '1px solid var(--birch)',
                borderRadius: 6, padding: '2rem 1.5rem',
              }}>
                <div style={{ color: 'var(--brand)', marginBottom: '1rem', width: 32, height: 32 }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--dark-wood)' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--ash)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="section" style={{ background: 'var(--parchment)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p className="section-eyebrow">Our stoves</p>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Featured in the catalogue</h2>
            </div>
            <Link href="/catalogue" className="btn-outline">View all stoves →</Link>
          </div>
          <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {products.map(p => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>

      {/* ── SERVICES STRIP ── */}
      <section className="section" style={{ background: 'var(--dark-wood)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-eyebrow">What we do</p>
            <h2 className="section-title" style={{ color: '#fff' }}>More than just a stove</h2>
          </div>
          <div className="services-strip-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'Installation',           desc: 'Site survey, flue routing, hearth prep and full stove commissioning. We leave nothing half-done.',                                    service: 'Installation' },
              { title: 'Chimney Cleaning',        desc: 'Annual sweeps to clear creosote buildup and maintain draught. Essential for safety and efficiency.',                                 service: 'Chimney Cleaning' },
              { title: 'Maintenance & Repairs',   desc: 'Rope seals, glass replacement, baffle plates, flue liner inspections — we stock the parts.',                                        service: 'Maintenance & Repairs' },
            ].map(s => (
              <div key={s.title} style={{ border: '1px solid rgba(253,119,0,0.2)', borderRadius: 6, padding: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--brand)', marginBottom: '0.75rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{s.desc}</p>
                <a href={serviceEnquiryLink(s.service)} target="_blank" rel="noopener noreferrer"
                  className="btn-outline" style={{ fontSize: '0.82rem', color: 'var(--brand)', borderColor: 'rgba(253,119,0,0.4)' }}>
                  <WAIcon /> Enquire
                </a>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/services" style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'underline', textUnderlineOffset: 4 }}>
              View full services page →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="section-sm" style={{ background: 'var(--brand)' }}>
        <div className="container cta-banner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#fff', marginBottom: '0.4rem' }}>
              Ready to bring the warmth home?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem' }}>Message us and we&apos;ll help you pick the right stove for your space.</p>
          </div>
          <a href={generalEnquiryLink()} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#fff', color: 'var(--brand)',
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.95rem',
              padding: '0.85rem 1.8rem', borderRadius: 4,
              whiteSpace: 'nowrap', textDecoration: 'none',
            }}>
            <WAIcon color="var(--brand)" /> Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}

/* ── Icons (unchanged) ── */
function WAIcon({ color = 'currentColor' }: { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill={color} width="18" height="18" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
function EuropeIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
}
function WrenchIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
}
function SpannerIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>
}
function PinIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
}
function BoxIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
}
function ChatIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
}