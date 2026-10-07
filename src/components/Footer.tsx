import { Link } from 'react-router-dom'
import Logo from './Logo'
import { PhoneIcon, MailIcon, MapPin, ArrowRight } from './icons'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/properties', label: 'Properties' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]

const SOCIAL = [
  {
    label: 'Instagram',
    href: '#',
    path: 'M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.2A6.6 6.6 0 1 0 18.6 12 6.6 6.6 0 0 0 12 5.4zm0 10.9A4.3 4.3 0 1 1 16.3 12 4.3 4.3 0 0 1 12 16.3zm6.8-11.2a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5z',
  },
  {
    label: 'LinkedIn',
    href: '#',
    path: 'M4.98 3.5A2.5 2.5 0 1 1 2.5 6 2.5 2.5 0 0 1 4.98 3.5zM3 8.98h4v12H3zM9 8.98h3.8v1.7h.1a4.2 4.2 0 0 1 3.8-2.1c4 0 4.8 2.6 4.8 6.1v6.3h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9z',
  },
  {
    label: 'Facebook',
    href: '#',
    path: 'M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z',
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/65">
              Horizon Properties connects discerning clients with extraordinary
              homes and smart investments. Integrity, transparency, and
              client satisfaction are at the heart of everything we do.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-gold hover:text-gold"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-label text-gold">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-[15px] text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-label text-gold">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-[15px] text-white/70">
              <li>
                <a href="tel:+15552467890" className="flex items-center gap-3 transition-colors hover:text-white">
                  <PhoneIcon width={16} height={16} className="text-gold" />
                  (555) 246-7890
                </a>
              </li>
              <li>
                <a href="mailto:hello@horizonproperties.com" className="flex items-center gap-3 transition-colors hover:text-white">
                  <MailIcon width={16} height={16} className="text-gold" />
                  hello@horizonproperties.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin width={16} height={16} className="mt-0.5 shrink-0 text-gold" />
                <span>1200 Architectural Way, Suite 400<br />Austin, Texas 78701, USA</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-label text-gold">
              Newsletter
            </h3>
            <p className="mt-5 text-[15px] text-white/65">
              Receive new listings and market insights, monthly.
            </p>
            <form
              className="mt-4 flex items-center gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Email address"
                aria-label="Email address"
                className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold text-navy transition-colors hover:bg-gold-light"
              >
                <ArrowRight width={18} height={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 text-sm text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Horizon Properties. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white/80">Privacy</a>
            <a href="#" className="transition-colors hover:text-white/80">Terms</a>
            <a href="#" className="transition-colors hover:text-white/80">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
