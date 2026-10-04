import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo.jsx";
import { NAV_LINKS, CONTACT } from "../data/site.js";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const light = !scrolled && !open; // white text while over the dark hero

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-[0_1px_0_rgba(11,31,58,0.08),0_12px_32px_-18px_rgba(11,31,58,0.25)] backdrop-blur-md"
          : "bg-gradient-to-b from-navy-950/60 to-transparent"
      }`}
    >
      <div className="container-x flex h-[68px] items-center justify-between gap-4 lg:h-[76px]">
        <Logo tone={light ? "light" : "dark"} />

        <nav aria-label="Primary" className="hidden items-center gap-7 xl:gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative text-[13.5px] font-medium tracking-wide transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300 ${
                  isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                } ${light ? "text-white/85 hover:text-white" : "text-navy-900/75 hover:text-navy-900"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={CONTACT.phoneHref}
            className={`inline-flex items-center gap-2.5 rounded-lg border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              light
                ? "border-white/60 text-white hover:bg-white hover:text-navy-900"
                : "border-gold text-navy-900 hover:bg-gold"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            {CONTACT.phone}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className={`relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-lg border transition-colors lg:hidden ${
            light ? "border-white/50 text-white" : "border-navy-900/20 text-navy-900"
          }`}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-full bg-current transition-all duration-300 ${
                open ? "top-1/2 -translate-y-1/2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-full bg-current transition-all duration-300 ${
                open ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="animate-menu-in fixed inset-0 top-0 -z-10 flex flex-col bg-navy-950/98 pt-24 backdrop-blur-sm lg:hidden">
          <nav aria-label="Mobile" className="container-x flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <NavLink
                key={link.to}
                to={link.to}
                style={{ animationDelay: `${60 + i * 45}ms` }}
                className={({ isActive }) =>
                  `animate-hero-rise flex items-center justify-between border-b border-white/10 py-4 text-lg font-semibold transition-colors ${
                    isActive ? "text-gold" : "text-white hover:text-gold"
                  }`
                }
              >
                {link.label}
                <span aria-hidden="true" className="text-white/30">→</span>
              </NavLink>
            ))}
          </nav>
          <div className="container-x mt-8">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2.5 rounded-lg border border-gold px-5 py-3 text-sm font-semibold text-gold"
            >
              ☎ {CONTACT.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
