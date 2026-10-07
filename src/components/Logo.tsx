import { Link } from 'react-router-dom'

interface LogoProps {
  className?: string
  variant?: 'light' | 'dark'
}

export default function Logo({ className = '', variant = 'light' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-navy'
  return (
    <Link
      to="/"
      aria-label="Horizon Properties — Home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="grid h-9 w-9 place-items-center rounded-lg border border-gold/60 transition-colors duration-300 group-hover:border-gold">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="text-gold"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 12 12 5l8 7" />
          <path d="M6 11v8h12v-8" />
          <path d="M10 19v-4h4v4" />
        </svg>
      </span>
      <span className={`font-display text-[15px] font-bold leading-none tracking-tight ${textColor}`}>
        HORIZON
        <span className="block text-[11px] font-medium tracking-[0.34em] text-gold">
          PROPERTIES
        </span>
      </span>
    </Link>
  )
}
