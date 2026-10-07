import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageHeader from '../components/PageHeader'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import { services } from '../data/properties'
import { ArrowRight } from '../components/icons'

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Services"
          title="What We Do"
          subtitle="A full spectrum of premium real estate services — from luxury sales and investment advisory to marketing, valuation, and relocation."
        />

        <section className="section-pad bg-white">
          <div className="container-x space-y-6">
            {services.map((service, i) => (
              <Reveal
                key={service.id}
                delay={(i % 2) * 80}
                className="group grid items-center gap-6 overflow-hidden rounded-2xl bg-ivory p-6 ring-1 ring-navy/5 lg:grid-cols-12 lg:gap-10 lg:p-8"
              >
                <div className="relative h-56 overflow-hidden rounded-xl lg:col-span-5 lg:h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 font-display text-2xl font-bold text-white/80">
                    {service.number}
                  </span>
                </div>
                <div className="lg:col-span-7">
                  <h2 className="font-display text-2xl font-bold tracking-tight text-navy">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-[16px] leading-relaxed text-navy/65">
                    {service.description}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark transition-colors hover:text-navy"
                  >
                    Enquire about this service
                    <ArrowRight width={16} height={16} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
