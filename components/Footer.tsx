'use client'
import Link from 'next/link'
import { generalEnquiryLink, serviceEnquiryLink } from '@/lib/whatsapp'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--ember)',
      color: 'rgba(255,255,255,0.7)',
      padding: '4rem 0 2rem',
      borderTop: '1px solid rgba(253,119,0,0.2)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#fff', marginBottom: '1rem' }}>
              Rustic<span style={{ color: 'var(--brand)' }}>Glow</span>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, maxWidth: 260, marginBottom: '1.25rem' }}>
              East Africa&apos;s trusted source for premium woodstoves. We import, install and maintain. You just enjoy the warmth.
            </p>
            <a href={generalEnquiryLink()} target="_blank" rel="noopener noreferrer"
              className="btn-wa" style={{ fontSize: '0.85rem', padding: '0.6rem 1.2rem' }}>
              <WAIcon /> Chat with us
            </a>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              <a href="https://www.instagram.com/rusticglow_ke?igsh=NjU4cHB1MjYwY3hq"
                target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 38, height: 38, borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'rgba(255,255,255,0.6)',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--brand)'
                  e.currentTarget.style.color = 'var(--brand)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                }}>
                <InstagramIcon />
              </a>
              <a href="https://www.tiktok.com/@rusticglow_ke"
                target="_blank" rel="noopener noreferrer"
                aria-label="TikTok"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: 38, height: 38, borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'rgba(255,255,255,0.6)',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--brand)'
                  e.currentTarget.style.color = 'var(--brand)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                }}>
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.75rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--brand)', marginBottom: '1rem',
            }}>Quick links</p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { href: '/', label: 'Home' },
                { href: '/catalogue', label: 'Stove Catalogue' },
                { href: '/services', label: 'Our Services' },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  style={{ fontSize: '0.9rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--brand)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.75rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--brand)', marginBottom: '1rem',
            }}>Services</p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['Installation', 'Chimney Cleaning', 'Maintenance & Repairs'].map(s => (
                <a key={s} href={serviceEnquiryLink(s)} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: '0.9rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--brand)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}>
                  {s}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.75rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--brand)', marginBottom: '1rem',
            }}>Contact</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ color: 'var(--brand)', flexShrink: 0 }}><PinIcon /></span>
                <span>Nairobi, Kenya</span>
              </div>
              {/* Phone call link (first) */}
              <a href="tel:+254734070707" target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--brand)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}>
                <span style={{ color: 'var(--brand)', flexShrink: 0 }}><PhoneIcon /></span>
                +254 734 070707
              </a>
              {/* WhatsApp link (second) */}
              <a href="https://wa.me/254115265517" target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--brand)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}>
                <span style={{ color: 'var(--brand)', flexShrink: 0 }}><WAIcon /></span>
                +254 115 265 517
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ color: 'var(--brand)', flexShrink: 0 }}><ClockIcon /></span>
                <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }}>Mon–Sat, 8am–6pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          fontSize: '0.8rem',
          color: 'rgba(255,255,255,0.35)',
        }}>
          <span>© {new Date().getFullYear()} @The_Simoom. All rights reserved.</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href="https://www.instagram.com/rusticglow_ke?igsh=NjU4cHB1MjYwY3hq"
              target="_blank" rel="noopener noreferrer"
              style={{ color: 'rgba(255,255,255,0.35)', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--brand)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}>
              @rusticglow_ke
            </a>
            <span>rusticglow.business</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ── Icons ── */
function WAIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}