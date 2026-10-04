import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../../data/properties'

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-warm-gray">
      <div className="container-px mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-label mb-4 block"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-navy text-4xl lg:text-5xl"
          >
            Our Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Link
                to="/services"
                className="group block overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 focus-gold"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <span className="absolute top-4 left-4 text-xs font-medium text-white/80 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="p-6 lg:p-7">
                  <h3 className="font-display font-bold text-navy text-xl mb-3 group-hover:text-champagne-dark transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-navy/60 text-sm leading-relaxed mb-4">{service.description}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-navy group-hover:text-champagne-dark transition-colors duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
