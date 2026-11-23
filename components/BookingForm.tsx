'use client'
import { useEffect, useState } from 'react'
import { bookingLink } from '@/lib/whatsapp'

/* ── Easy-to-edit settings ── */
const TIME_SLOTS = ['8:00 AM', '10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM']
const CLOSED_WEEKDAYS = [0]   // 0 = Sunday, 1 = Monday ... 6 = Saturday
const MIN_DAYS_AHEAD = 1      // 1 = earliest bookable day is tomorrow
const MAX_DAYS_AHEAD = 90     // how far ahead customers can book

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]
const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const pad = (n: number) => String(n).padStart(2, '0')

// Month is 0-indexed. Built from local parts on purpose: toISOString() converts
// to UTC and would shift dates back a day for users in Kenya (UTC+3).
const toKey = (y: number, m: number, d: number) => `${y}-${pad(m + 1)}-${pad(d)}`

const addDays = (date: Date, days: number) => {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  d.setDate(d.getDate() + days)
  return d
}

type DayStatus = 'open' | 'booked' | 'closed' | 'out'

export default function BookingForm({ bookedDates }: { bookedDates: string[] }) {
  const [today, setToday] = useState<Date | null>(null)
  const [view, setView] = useState<{ y: number; m: number } | null>(null)
  const [selected, setSelected] = useState('')
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [notes, setNotes] = useState('')

  // "Today" is read on the client after mount so server and browser never disagree.
  useEffect(() => {
    const now = new Date()
    const t = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    setToday(t)
    setView({ y: t.getFullYear(), m: t.getMonth() })
  }, [])

  if (!today || !view) {
    return <div style={{ minHeight: 480 }} aria-busy="true" />
  }

  const booked = new Set(bookedDates)
  const earliest = addDays(today, MIN_DAYS_AHEAD)
  const latest = addDays(today, MAX_DAYS_AHEAD)

  const dayStatus = (date: Date): DayStatus => {
    if (date < earliest || date > latest) return 'out'
    if (CLOSED_WEEKDAYS.includes(date.getDay())) return 'closed'
    if (booked.has(toKey(date.getFullYear(), date.getMonth(), date.getDate()))) return 'booked'
    return 'open'
  }

  // Calendar grid (Monday-first)
  const first = new Date(view.y, view.m, 1)
  const daysInMonth = new Date(view.y, view.m + 1, 0).getDate()
  const offset = (first.getDay() + 6) % 7
  const cells: (number | null)[] = [
    ...Array<null>(offset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]

  const canGoPrev = !(view.y === today.getFullYear() && view.m === today.getMonth())
  const canGoNext = new Date(view.y, view.m + 1, 1) <= latest

  const shift = (delta: number) => {
    const d = new Date(view.y, view.m + delta, 1)
    setView({ y: d.getFullYear(), m: d.getMonth() })
  }

  const pickDate = (key: string) => {
    setSelected(key)
    setTime('')
  }

  const dateLabel = selected
    ? new Date(+selected.slice(0, 4), +selected.slice(5, 7) - 1, +selected.slice(8, 10))
        .toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
    : ''

  const canSubmit = Boolean(name.trim() && location.trim() && selected && time)

  const submit = () => {
    if (!canSubmit) return
    const url = bookingLink({
      name: name.trim(),
      location: location.trim(),
      dateLabel,
      time,
      notes,
    })
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: '0.72rem', fontWeight: 700,
    letterSpacing: '0.1em', textTransform: 'uppercase',
    color: 'var(--ash)', marginBottom: 6,
  }
  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '0.7rem 0.9rem',
    border: '1px solid var(--birch)', borderRadius: 4,
    fontFamily: 'var(--font-body)', fontSize: '0.95rem',
    color: 'var(--dark-wood)', background: '#fff', outline: 'none',
  }

  return (
    <form
      onSubmit={e => { e.preventDefault(); submit() }}
      style={{ maxWidth: 560, margin: '0 auto' }}
    >
      {/* Details */}
      <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
        <div>
          <label style={labelStyle} htmlFor="bk-name">Your name</label>
          <input id="bk-name" type="text" value={name} onChange={e => setName(e.target.value)}
            placeholder="e.g. Jane Wanjiru" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="bk-loc">Location</label>
          <input id="bk-loc" type="text" value={location} onChange={e => setLocation(e.target.value)}
            placeholder="Estate / area, e.g. Karen, Nairobi" style={inputStyle} />
        </div>
      </div>

      {/* Calendar */}
      <label style={labelStyle}>Pick a date</label>
      <div style={{
        background: '#fff', border: '1px solid var(--birch)',
        borderRadius: 6, padding: '1rem', marginBottom: '0.75rem',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', marginBottom: '0.75rem',
        }}>
          <button type="button" className="cal-nav" onClick={() => shift(-1)}
            disabled={!canGoPrev} aria-label="Previous month">‹</button>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--dark-wood)' }}>
            {MONTHS[view.m]} {view.y}
          </span>
          <button type="button" className="cal-nav" onClick={() => shift(1)}
            disabled={!canGoNext} aria-label="Next month">›</button>
        </div>

        <div className="cal-grid">
          {WEEKDAYS.map(w => <div key={w} className="cal-head">{w}</div>)}
          {cells.map((day, i) => {
            if (day === null) return <span key={`e${i}`} />
            const date = new Date(view.y, view.m, day)
            const key = toKey(view.y, view.m, day)
            const status = dayStatus(date)
            const isSelected = selected === key
            const cls = isSelected ? 'selected' : status === 'open' ? 'open' : status === 'booked' ? 'booked' : 'off'
            return (
              <button
                key={key}
                type="button"
                className={`cal-day ${cls}`}
                disabled={status !== 'open'}
                onClick={() => pickDate(key)}
                title={status === 'booked' ? 'Already booked' : status === 'closed' ? 'Closed' : undefined}
                aria-label={`${date.toDateString()}${status === 'booked' ? ', booked' : ''}`}
                aria-pressed={isSelected}
              >
                {day}
              </button>
            )
          })}
        </div>
      </div>

      <p style={{ fontSize: '0.78rem', color: 'var(--ash)', lineHeight: 1.6, marginBottom: '2rem' }}>
        We take one job per day, so struck-through dates are already booked. Closed on Sundays.
        Your request is confirmed once we reply on WhatsApp.
      </p>

      {/* Time slots */}
      <label style={labelStyle}>Preferred arrival time</label>
      {selected ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '2rem' }}>
          {TIME_SLOTS.map(t => (
            <button
              key={t}
              type="button"
              className={`slot${time === t ? ' active' : ''}`}
              onClick={() => setTime(t)}
              aria-pressed={time === t}
            >
              {t}
            </button>
          ))}
        </div>
      ) : (
        <p style={{ fontSize: '0.85rem', color: 'var(--ash)', marginBottom: '2rem' }}>
          Pick a date first to see times.
        </p>
      )}

      {/* Notes */}
      <div style={{ marginBottom: '1.75rem' }}>
        <label style={labelStyle} htmlFor="bk-notes">Anything we should know? (optional)</label>
        <textarea id="bk-notes" rows={3} value={notes} onChange={e => setNotes(e.target.value)}
          placeholder="Stove type, chimney height, last sweep, access to the roof..."
          style={{ ...inputStyle, resize: 'vertical' }} />
      </div>

      {/* Summary */}
      {selected && time && (
        <div style={{
          background: 'var(--warmth)', border: '1px solid rgba(253,119,0,0.2)',
          borderLeft: '3px solid var(--brand)', borderRadius: '0 4px 4px 0',
          padding: '0.8rem 1rem', marginBottom: '1.25rem',
          fontSize: '0.9rem', color: 'var(--walnut)',
        }}>
          <strong style={{ color: 'var(--dark-wood)' }}>{dateLabel}</strong> at <strong style={{ color: 'var(--dark-wood)' }}>{time}</strong>
        </div>
      )}

      <button
        type="submit"
        className="btn-wa"
        disabled={!canSubmit}
        style={{ width: '100%', justifyContent: 'center', fontSize: '0.95rem', padding: '0.9rem' }}
      >
        <WAIcon /> Send booking request on WhatsApp
      </button>
      {!canSubmit && (
        <p style={{ fontSize: '0.8rem', color: 'var(--ash)', textAlign: 'center', marginTop: 8 }}>
          Add your name, location, a date and a time to continue.
        </p>
      )}

      <style>{`
        .cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; }
        .cal-head {
          text-align: center; font-size: 0.7rem; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--ash); padding: 0.25rem 0;
        }
        .cal-day {
          aspect-ratio: 1; border-radius: 6px; border: 1px solid transparent;
          background: transparent; font-family: var(--font-body);
          font-size: 0.9rem; font-weight: 700; color: var(--dark-wood);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: border-color 0.15s, color 0.15s;
        }
        .cal-day.open { background: #fff; border-color: var(--birch); }
        .cal-day.open:hover { border-color: var(--brand); color: var(--brand); }
        .cal-day.selected { background: var(--brand); border-color: var(--brand); color: #fff; }
        .cal-day.booked {
          background: var(--parchment); color: var(--ash);
          text-decoration: line-through; cursor: not-allowed;
        }
        .cal-day.off { color: var(--birch); cursor: not-allowed; }
        .cal-nav {
          width: 34px; height: 34px; border-radius: 50%;
          border: 1px solid var(--birch); background: #fff;
          font-size: 1.2rem; line-height: 1; color: var(--dark-wood); cursor: pointer;
        }
        .cal-nav:disabled { opacity: 0.35; cursor: not-allowed; }
        .slot {
          padding: 0.55rem 1rem; border-radius: 4px;
          border: 1px solid var(--birch); background: #fff;
          font-family: var(--font-body); font-size: 0.85rem; font-weight: 700;
          color: var(--walnut); cursor: pointer;
          transition: border-color 0.15s, background 0.15s, color 0.15s;
        }
        .slot:hover { border-color: var(--brand); }
        .slot.active { background: var(--brand); border-color: var(--brand); color: #fff; }
        .btn-wa:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
      `}</style>
    </form>
  )
}

function WAIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
