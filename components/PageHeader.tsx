import type { ReactNode } from 'react'

interface Props {
  eyebrow?: string
  title?: string
  subtitle?: string
  compact?: boolean
  children?: ReactNode
}

export default function PageHeader({ eyebrow, title, subtitle, compact, children }: Props) {
  return (
    <header className={`page-header${compact ? ' page-header--compact' : ''}`}>
      <div className="container">
        {children}
        {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
        {title && <h1 className="page-header-title">{title}</h1>}
        {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
      </div>
    </header>
  )
}
