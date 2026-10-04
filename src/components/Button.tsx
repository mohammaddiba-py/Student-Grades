import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { type ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'light'
type Size = 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  to?: string
  href?: string
  onClick?: () => void
  variant?: Variant
  size?: Size
  className?: string
  type?: 'button' | 'submit'
  ariaLabel?: string
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-navy text-white hover:bg-navy-700',
  outline: 'border border-white/40 text-white hover:bg-white/10 hover:border-white/70',
  light: 'bg-white text-navy hover:bg-arch-gray',
}

const sizeClasses: Record<Size, string> = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const classes = `inline-flex items-center gap-2 rounded-full font-medium transition-all duration-300 focus-gold ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  const content = (
    <>
      {children}
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
    </>
  )

  if (to) {
    return (
      <Link to={to} className={`group ${classes}`} aria-label={ariaLabel}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={`group ${classes}`} aria-label={ariaLabel}>
        {content}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={`group ${classes}`} aria-label={ariaLabel}>
      {content}
    </button>
  )
}
