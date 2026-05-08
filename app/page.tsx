import Link from 'next/link'
import { getAllProducts } from '@/lib/products'
import { generalEnquiryLink, serviceEnquiryLink } from '@/lib/whatsapp'
import ProductCard from '@/components/ProductCard'

export default function HomePage() {
  const products = getAllProducts()

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
        {/* Animated flame */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
          pointerEvents: 'none',
        }}>
          <svg viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', maxHeight: 600, display: 'block' }}
            preserveAspectRatio="xMidYMax meet">
            <path className="flame-back-1"
              d="M580 600 C580 600 520 480 540 400 C560 320 500 280 520 200 C540 120 580 80 580 80 C580 80 560 180 590 230 C620 280 600 320 620 380 C640 440 640 600 640 600 Z"
              fill="#7a3400"/>
            <path className="flame-back-2"
              d="M780 600 C780 600 820 460 800 370 C780 280 840 240 820 150 C800 60 770 30 770 30 C770 30 800 140 770 200 C740 260 760 310 740 390 C720 470 740 600 740 600 Z"
              fill="#7a3400"/>
            <path className="flame-mid-1"
              d="M620 600 C620 600 570 500 590 430 C610 360 560 320 580 260 C600 200 640 160 640 160 C640 160 620 240 650 290 C680 340 660 390 680 450 C700 510 700 600 700 600 Z"
              fill="#c45900"/>
            <path className="flame-mid-2"
              d="M740 600 C740 600 780 490 760 410 C740 330 790 300 775 230 C760 160 730 120 730 120 C730 120 755 200 730 255 C705 310 720 360 705 430 C690 500 700 600 700 600 Z"
              fill="#c45900"/>
            <path className="flame-main-1"
              d="M660 600 C660 600 610 510 630 445 C650 380 600 340 620 275 C640 210 680 170 680 170 C680 170 660 250 695 300 C730 350 710 400 720 460 C730 520 720 600 720 600 Z"
              fill="#fd7700"/>
            <path className="flame-main-2"
              d="M700 600 C700 600 750 500 730 420 C710 340 760 310 745 240 C730 170 700 130 700 130 C700 130 725 210 700 265 C675 320 688 370 678 440 C668 510 680 600 680 600 Z"
              fill="#fd7700"/>
            <path className="flame-tip"
              d="M675 420 C675 420 655 370 665 340 C675 310 660 290 670 260 C680 230 695 210 695 210 C695 210 685 250 700 275 C715 300 705 325 710 355 C715 385 710 420 710 420 Z"
              fill="#ff9a3c"/>
            <ellipse className="flame-glow" cx="700" cy="598" rx="280" ry="18" fill="rgba(253,119,0,0.25)"/>
            <ellipse cx="700" cy="598" rx="160" ry="10" fill="rgba(253,119,0,0.35)"/>
          </svg>
        </div>

        {/* Radial glow */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 80%, rgba(253,119,0,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '120px 1.5rem 80px' }}>
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
              We import, install and maintain premium European woodstoves across Kenya. One call — we handle everything.
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
            <div className="hero-fade-5" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '3rem' }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {[
              { icon: <BoxIcon />,     title: 'Curated Imports',      desc: 'Every stove is hand-picked from proven European manufacturers — Jøtul, Morsø, Invicta. Quality-checked before it reaches you.' },
              { icon: <WrenchIcon />,  title: 'Expert Installation',  desc: 'Our team handles everything from site assessment to chimney fitting. Done right the first time, with a full safety check.' },
              { icon: <SpannerIcon />, title: 'Ongoing Maintenance',  desc: 'Annual chimney sweeps, gasket replacements, glass cleaning — we keep your stove burning clean and safe for years.' },
              { icon: <ChatIcon />,    title: 'WhatsApp-First Support',desc: 'No call centres. Message us directly — get real answers on availability, sizing advice, and service bookings.' },
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
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
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
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

/* ── Icons ── */
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
