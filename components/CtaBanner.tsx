import type { ReactNode } from 'react'

interface Props {
  title: string
  copy: string
  children: ReactNode
}

export default function CtaBanner({ title, copy, children }: Props) {
  return (
    <section className="section-sm cta-section">
      <div className="container cta-banner">
        <div>
          <h2 className="cta-banner-title">{title}</h2>
          <p className="cta-banner-copy">{copy}</p>
        </div>
        {children}
      </div>
    </section>
  )
}
