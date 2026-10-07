import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface PageHeaderProps {
  eyebrow: string
  title: string
  subtitle?: string
  children?: ReactNode
}

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
}: PageHeaderProps) {
  return (
    <section className="bg-navy pt-[72px] text-white">
      <div className="container-x py-16 sm:py-20 lg:py-24">
        <Reveal>
          <span className="label-eyebrow">{eyebrow}</span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/65">
              {subtitle}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  )
}
