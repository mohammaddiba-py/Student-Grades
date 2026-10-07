import { Link } from 'react-router-dom'
import { services } from '../data/properties'
import { ArrowRight } from '../components/icons'
import Reveal from '../components/Reveal'

export default function Services() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <span className="label-eyebrow">What We Do</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
            Our Services
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-navy/60">
            A full spectrum of premium real estate services, delivered with
            precision and discretion.
          </p>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-2xl bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.id}
              delay={(i % 3) * 80}
              className="group relative bg-white"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-navy/10" />
                <span className="absolute left-5 top-4 font-display text-sm font-semibold text-white/80">
                  {service.number}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold tracking-tight text-navy">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-navy/60">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark transition-colors hover:text-navy"
                >
                  Learn More
                  <ArrowRight width={16} height={16} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
