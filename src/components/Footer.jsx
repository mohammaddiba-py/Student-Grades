import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";
import { NAV_LINKS, CONTACT } from "../data/site.js";

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M12 7.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5Zm0 7a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5ZM16.9 7.05a.99.99 0 1 1-1.98 0 .99.99 0 0 1 1.98 0ZM20.5 8.1c-.04-1.15-.3-2.17-1.1-2.97-.8-.8-1.82-1.06-2.97-1.1C15.3 3.97 13.86 4 12 4s-3.3-.03-4.43.03c-1.15.04-2.17.3-2.97 1.1-.8.8-1.06 1.82-1.1 2.97C3.44 9.23 3.47 10.67 3.47 12s-.03 2.77.03 3.9c.04 1.15.3 2.17 1.1 2.97.8.8 1.82 1.06 2.97 1.1 1.13.06 2.57.03 4.43.03s3.3.03 4.43-.03c1.15-.04 2.17-.3 2.97-1.1.8-.8 1.06-1.82 1.1-2.97.06-1.13.03-2.57.03-3.9s.03-2.77-.03-3.9Zm-1.6 7.75c-.26.65-.76 1.15-1.4 1.4-.96.38-3.24.3-5.5.3s-4.54.08-5.5-.3a2.5 2.5 0 0 1-1.4-1.4c-.38-.96-.3-3.24-.3-5.5s-.08-4.54.3-5.5c.26-.65.76-1.15 1.4-1.4.96-.38 3.24-.3 5.5-.3s4.54-.08 5.5.3c.65.26 1.15.76 1.4 1.4.38.96.3 3.24.3 5.5s.08 4.54-.3 5.5Z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    path: "M6.94 8.5a1.94 1.94 0 1 0 0-3.88 1.94 1.94 0 0 0 0 3.88ZM5.5 20h2.88v-9.75H5.5V20Zm5.63-9.75h2.75v1.33h.04c.38-.72 1.32-1.48 2.72-1.48 2.9 0 3.44 1.9 3.44 4.38V20h-2.87v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.91 1.3-1.91 2.63V20h-2.88v-9.75Z",
  },
  {
    label: "X",
    href: "https://x.com",
    path: "M17.53 4h3.02l-6.6 7.55L21.75 20h-6.06l-4.75-6.2L5.47 20H2.45l7.06-8.08L2 4h6.21l4.29 5.68L17.53 4Zm-1.06 14.2h1.67L7.63 5.7H5.83l10.64 12.5Z",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:py-20">
        <div>
          <Logo tone="light" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            Horizon Properties is a boutique real estate firm specialising in luxury homes,
            investment properties and premium developments. Integrity and discretion, from first
            viewing to final signature.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:border-gold hover:text-gold"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <h3 className="eyebrow">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="eyebrow">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={CONTACT.phoneHref} className="transition-colors hover:text-gold">
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-gold">
                {CONTACT.email}
              </a>
            </li>
            <li className="leading-relaxed">{CONTACT.address}</li>
            <li>{CONTACT.hours}</li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Newsletter</h3>
          <p className="mt-5 text-sm leading-relaxed">
            Monthly market insights and off-market listings. No spam, ever.
          </p>
          {subscribed ? (
            <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-gold">
              <span aria-hidden="true">✓</span> You're on the list — welcome aboard.
            </p>
          ) : (
            <form onSubmit={submit} className="mt-4 flex gap-2">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full min-w-0 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-gold"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-soft"
              >
                Join
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Horizon Properties. All rights reserved.</p>
          <p>
            <Link to="/properties" className="transition-colors hover:text-gold">
              Featured Listings
            </Link>
            <span className="mx-3" aria-hidden="true">
              ·
            </span>
            <Link to="/contact" className="transition-colors hover:text-gold">
              Book a Consultation
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
