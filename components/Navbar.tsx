'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { generalEnquiryLink } from '@/lib/whatsapp'
import Image from 'next/image'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/catalogue', label: 'Catalogue' },
    { href: '/services', label: 'Services' },
  ]

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: 'var(--nav-h)',
        background: scrolled ? 'rgba(26,16,8,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(253,119,0,0.15)' : 'none',
        transition: 'background 0.35s, border-color 0.35s',
        display: 'flex', alignItems: 'center',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {/* Logo */}
          <Link href="/">
            <Image
             src="/images/rusticglow.png"
             alt="Rustic Glow"
             width={160}
            height={50}
            style={{ objectFit: 'contain' }}
           />
          </Link>
          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
            {links.map(l => (
              <Link key={l.href} href={l.href} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: pathname === l.href ? 'var(--brand)' : 'rgba(255,255,255,0.8)',
                transition: 'color 0.2s',
              }}>{l.label}</Link>
            ))}
            <a href={generalEnquiryLink()} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ padding: '0.5rem 1.1rem', fontSize: '0.8rem' }}>
              <WhatsAppIcon /> Contact Us
            </a>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className="mobile-menu-btn" aria-label="Toggle menu" style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 8,
            display: 'none', flexDirection: 'column', gap: 5,
          }}>
            <span style={{ display: 'block', width: 24, height: 2, background: '#fff', transition: 'transform 0.2s', transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ display: 'block', width: 24, height: 2, background: '#fff', opacity: open ? 0 : 1, transition: 'opacity 0.2s' }} />
            <span style={{ display: 'block', width: 24, height: 2, background: '#fff', transition: 'transform 0.2s', transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99,
          background: 'rgba(26,16,8,0.98)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '2rem',
        }} onClick={() => setOpen(false)}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              color: pathname === l.href ? 'var(--brand)' : '#fff',
            }}>{l.label}</Link>
          ))}
          <a href={generalEnquiryLink()} target="_blank" rel="noopener noreferrer" className="btn-wa" style={{ marginTop: '1rem' }}>
            <WhatsAppIcon /> Contact on WhatsApp
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}

function FlameIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 2C14 2 8 8 8 14.5C8 18.09 10.69 21 14 21C17.31 21 20 18.09 20 14.5C20 11 17 8 17 8C17 8 16.5 11 14.5 12C14.5 12 16 10 14 2Z" fill="#fd7700"/>
      <path d="M14 13C14 13 11 15.5 11 17.5C11 19.43 12.34 21 14 21C15.66 21 17 19.43 17 17.5C17 15.5 14 13 14 13Z" fill="#ffc47a"/>
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
