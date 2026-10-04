import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import Logo from './Logo'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Properties', to: '/properties' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-navy text-white">
      <div className="container-px mx-auto max-w-[1400px] py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-xs">
              Connecting people with extraordinary homes and smart investments. Integrity, transparency, and client satisfaction at the heart of everything we do.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Twitter, label: 'Twitter' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-champagne hover:border-champagne/50 transition-all duration-300 focus-gold"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-champagne mb-5">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-300 focus-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-champagne mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Phone className="w-4 h-4 mt-0.5 text-champagne shrink-0" strokeWidth={1.5} />
                <a href="tel:5552467890" className="hover:text-white transition-colors">(555) 246-7890</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Mail className="w-4 h-4 mt-0.5 text-champagne shrink-0" strokeWidth={1.5} />
                <a href="mailto:info@horizonproperties.com" className="hover:text-white transition-colors">info@horizonproperties.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 text-champagne shrink-0" strokeWidth={1.5} />
                <span>1200 Architectural Blvd, Suite 500<br />Beverly Hills, CA 90210</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-champagne mb-5">Newsletter</h3>
            <p className="text-sm text-white/60 mb-4">Receive new listings and market insights directly in your inbox.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full rounded-full bg-white/10 border border-white/15 px-5 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-champagne/50 transition-colors"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-champagne px-5 py-3 text-sm font-medium text-navy transition-all duration-300 hover:bg-champagne-light focus-gold"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Horizon Properties. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-white/50">
            <a href="#" className="hover:text-white/80 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/80 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
