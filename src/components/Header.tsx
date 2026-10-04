import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Properties', to: '/properties' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const dark = scrolled || !isHome || mobileOpen

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          dark
            ? 'bg-navy/95 backdrop-blur-md shadow-lg shadow-navy/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container-px mx-auto max-w-[1400px]">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" aria-label="Horizon Properties home" className="shrink-0">
              <Logo />
            </Link>

            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition-colors duration-300 py-1 ${
                      isActive ? 'text-champagne' : 'text-white/80 hover:text-white'
                    } after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-champagne after:transition-all after:duration-300 ${
                      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:flex items-center">
              <a
                href="tel:5552467890"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white/10 hover:border-white/70 focus-gold"
              >
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                (555) 246-7890
              </a>
            </div>

            <button
              className="lg:hidden text-white p-2 focus-gold rounded-md"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-navy" />
        <nav className="relative flex flex-col items-center justify-center h-full gap-2 px-8" aria-label="Mobile navigation">
          {navLinks.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-2xl font-display font-semibold py-3 transition-all duration-500 ${
                  isActive ? 'text-champagne' : 'text-white'
                }`
              }
              style={{
                transitionDelay: mobileOpen ? `${i * 60 + 100}ms` : '0ms',
                transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: mobileOpen ? 1 : 0,
              }}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="tel:5552467890"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white"
          >
            <Phone className="w-4 h-4" strokeWidth={1.5} />
            (555) 246-7890
          </a>
        </nav>
      </div>
    </>
  )
}
