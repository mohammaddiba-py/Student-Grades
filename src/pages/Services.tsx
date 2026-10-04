import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services, pageImages } from '../data/properties'
import CTASection from '../components/home/CTASection'

export default function Services() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] overflow-hidden">
        <img
          src={pageImages.services}
          alt="Luxury property architecture"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-navy/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <span className="section-label mb-4 block">What We Do</span>
          <h1 className="font-display font-bold text-white text-4xl lg:text-5xl">Our Services</h1>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="container-px mx-auto max-w-[1400px] space-y-16 lg:space-y-24">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <span className="font-display font-bold text-champagne text-3xl mb-4 block">
                  0{i + 1}
                </span>
                <h2 className="font-display font-bold text-navy text-2xl lg:text-3xl mb-4">{service.title}</h2>
                <p className="text-navy/60 text-base leading-relaxed mb-6">{service.description}</p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-champagne-dark transition-colors focus-gold"
                >
                  Enquire about this service
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  )
}
