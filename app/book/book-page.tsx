import { getBookedDates } from '@/lib/bookings'
import BookingForm from '@/components/BookingForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Flue Cleaning | Firefly Kenya',
  description: 'Book a professional chimney and flue cleaning. Pick a date and time and send your request on WhatsApp.',
}

export default function BookPage() {
  const bookedDates = getBookedDates()

  return (
    <>
      {/* Header */}
      <div style={{
        background: 'var(--dark-wood)',
        paddingTop: 'calc(var(--nav-h) + 3rem)',
        paddingBottom: '3rem',
        borderBottom: '1px solid rgba(253,119,0,0.15)',
      }}>
        <div className="container">
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 700,
            letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--brand)',
            marginBottom: '0.75rem',
          }}>
            Chimney &amp; flue cleaning
          </p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            color: '#fff', marginBottom: '0.75rem',
          }}>
            Book a Flue Cleaning
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', maxWidth: 520 }}>
            Choose a date and time that suits you. Your request opens in WhatsApp, and we confirm it there.
          </p>
        </div>
      </div>

      {/* Form */}
      <section className="section" style={{ background: 'var(--canvas)' }}>
        <div className="container">
          <BookingForm bookedDates={bookedDates} />
        </div>
      </section>
    </>
  )
}
