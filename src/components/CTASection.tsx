import { Link } from 'react-router-dom'
import { KeyIcon, ArrowRight } from './icons'
import Reveal from './Reveal'

export default function CTASection() {
  return (
    <section className="section-pad bg-ivory">
      <div className="container-x">
        <Reveal className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-6 rounded-full bg-white px-6 py-8 shadow-sm ring-1 ring-navy/5 sm:flex-row sm:gap-8 sm:px-10 sm:py-9">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-navy text-gold">
              <KeyIcon width={28} height={28} />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                Ready to Find Your Perfect Property?
              </h2>
              <p className="mt-1.5 text-[15px] text-navy/60">
                Let our experts guide you to the right home or investment.
              </p>
            </div>
            <Link
              to="/contact"
              className="btn-navy shrink-0 whitespace-nowrap"
            >
              Get in Touch
              <ArrowRight width={18} height={18} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
