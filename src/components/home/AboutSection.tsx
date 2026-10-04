import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { pageImages } from '../../data/properties'

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-32 bg-ivory">
      <div className="container-px mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-2"
          >
            <span className="section-label mb-5 block">About Us</span>
            <h2 className="font-display font-bold text-navy text-4xl lg:text-5xl leading-tight mb-6">
              Who We Are
            </h2>
            <div className="space-y-5 text-navy/70 text-base lg:text-lg leading-relaxed">
              <p>
                At Horizon Properties, we connect people with extraordinary homes and smart investments. Integrity, transparency, and client satisfaction are at the heart of everything we do.
              </p>
              <p>
                Our team brings decades of expertise across the most sought-after luxury markets, offering a curated portfolio of architecturally significant properties and a concierge-level approach to every transaction.
              </p>
            </div>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 mt-8 rounded-full bg-navy px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-navy-700 focus-gold"
            >
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
            </Link>
          </motion.div>

          {/* Right: Image composition */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-3 relative"
          >
            <div className="grid grid-cols-3 gap-4 lg:gap-6">
              {/* Main image */}
              <div className="col-span-2 relative overflow-hidden rounded-2xl aspect-[4/3] group">
                <img
                  src={pageImages.aboutMain}
                  alt="Modern luxury home with pool"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Secondary image */}
              <div className="col-span-1 relative overflow-hidden rounded-2xl aspect-[3/4] group mt-8 lg:mt-12">
                <img
                  src={pageImages.aboutSecondary}
                  alt="Architectural detail of modern residence"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Circular arrow button */}
            <button
              aria-label="View more properties"
              className="group absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-[35%] w-14 h-14 rounded-full bg-navy text-white flex items-center justify-center shadow-xl shadow-navy/20 transition-all duration-300 hover:bg-champagne hover:text-navy hover:scale-110 focus-gold"
            >
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
