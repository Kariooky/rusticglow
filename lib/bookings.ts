import fs from 'fs'
import path from 'path'

// Reads content/booked-dates.json at build time.
// Format: { "booked": ["2026-12-01", "2026-12-05"] }  (YYYY-MM-DD)
export function getBookedDates(): string[] {
  try {
    const file = path.join(process.cwd(), 'content/booked-dates.json')
    const data = JSON.parse(fs.readFileSync(file, 'utf-8')) as { booked?: string[] }
    return Array.isArray(data.booked) ? data.booked : []
  } catch {
    return []
  }
}
