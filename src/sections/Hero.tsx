import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from '../components/icons'

const HERO_IMG =
  'https://images.unsplash.com/photo-1613490493576-7fde63acd311?auto=format&fit=crop&w=2000&q=80'

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Modern luxury villa at dusk with infinity pool and warm interior lighting"
          className="h-full w-full object-cover animate-scale-in"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/35 to-navy/70" />
        <div className="absolute inset-0 bg-navy/20" />
      </div>

      {/* Content */}
      <div className="container-x relative z-10 pt-24 text-center">
        <p className="animate-fade-up text-xs font-semibold uppercase tracking-label text-gold [animation-delay:120ms]">
          Premium Real Estate & Investments
        </p>
        <h1 className="mx-auto mt-5 max-w-4xl animate-fade-up font-display text-4xl font-bold leading-[1.08] tracking-tight text-white text-balance [animation-delay:220ms] sm:text-5xl lg:text-6xl xl:text-7xl">
          Discover Exceptional
          <br />
          Homes &amp; Investments
        </h1>
        <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-base leading-relaxed text-white/80 [animation-delay:360ms] sm:text-lg">
          Premium properties in prime locations. Find your dream home or the
          perfect investment with confidence.
        </p>
        <div className="mt-9 flex animate-fade-up flex-col items-center justify-center gap-4 [animation-delay:500ms] sm:flex-row">
          <Link
            to="/properties"
            className="btn bg-gold px-7 py-3.5 text-navy rounded-full hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30"
          >
            Browse Properties
            <ArrowRight width={18} height={18} />
          </Link>
          <Link
            to="/contact"
            className="btn-outline px-7 py-3.5"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 animate-fade-in [animation-delay:900ms]">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-[11px] uppercase tracking-label">Scroll</span>
          <ChevronDown width={18} height={18} className="animate-bounce" />
        </div>
      </div>
    </section>
  )
}
