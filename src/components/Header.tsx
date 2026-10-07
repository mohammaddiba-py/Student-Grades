import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { PhoneIcon, MenuIcon, CloseIcon, ArrowRight } from './icons'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/properties', label: 'Properties' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Transparent over hero only on the home page top
  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        transparent
          ? 'bg-transparent'
          : 'bg-white/90 shadow-sm shadow-navy/5 backdrop-blur-md'
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <Logo variant={transparent ? 'light' : 'dark'} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `relative text-[15px] font-medium transition-colors duration-300 ${
                  transparent
                    ? 'text-white/85 hover:text-white'
                    : 'text-navy/70 hover:text-navy'
                } ${isActive ? (transparent ? 'text-white' : 'text-navy') : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="tel:+15552467890"
          className={`hidden items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 lg:inline-flex ${
            transparent
              ? 'border-white/40 text-white hover:bg-white/10'
              : 'border-navy/20 text-navy hover:border-navy/50'
          }`}
        >
          <PhoneIcon width={16} height={16} className="text-gold" />
          (555) 246-7890
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className={`grid h-10 w-10 place-items-center rounded-lg transition-colors lg:hidden ${
            transparent ? 'text-white' : 'text-navy'
          }`}
        >
          {open ? <CloseIcon width={24} height={24} /> : <MenuIcon width={24} height={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 top-[72px] z-40 animate-menu-in bg-navy lg:hidden">
          <nav className="container-x flex flex-col gap-1 py-8" aria-label="Mobile">
            {NAV.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                style={{ animationDelay: `${i * 50}ms` }}
                className={`animate-fade-up border-b border-white/10 py-4 text-2xl font-medium transition-colors ${
                  location.pathname === item.to
                    ? 'text-gold'
                    : 'text-white/85 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+15552467890"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-base font-semibold text-navy"
            >
              <PhoneIcon width={18} height={18} />
              (555) 246-7890
            </a>
            <Link
              to="/contact"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-4 text-base font-semibold text-white"
            >
              Get in Touch
              <ArrowRight width={18} height={18} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
