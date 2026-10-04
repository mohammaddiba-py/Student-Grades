import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { whyChooseReasons, pageImages } from '../data/properties'
import CTASection from '../components/home/CTASection'

export default function About() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={pageImages.about}
          alt="Modern luxury architecture"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-navy/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <span className="section-label mb-4 block">About Us</span>
          <h1 className="font-display font-bold text-white text-4xl lg:text-5xl">Who We Are</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="container-px mx-auto max-w-[1000px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="prose-lg"
          >
            <p className="text-navy/70 text-lg lg:text-xl leading-relaxed mb-8">
              At Horizon Properties, we connect people with extraordinary homes and smart investments. Integrity, transparency, and client satisfaction are at the heart of everything we do.
            </p>
            <p className="text-navy/60 text-base lg:text-lg leading-relaxed mb-8">
              For over two decades, our team has curated a portfolio of architecturally significant properties across the country's most coveted markets. We believe a home is more than an address — it is a statement of values, a work of art, and a legacy to be preserved.
            </p>
            <p className="text-navy/60 text-base lg:text-lg leading-relaxed">
              Our approach combines deep market intelligence with a concierge-level service ethos. From the first viewing to the final signature, we guide our clients with discretion, expertise, and an unwavering commitment to their goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-warm-gray">
        <div className="container-px mx-auto max-w-[1400px]">
          <div className="text-center mb-12 lg:mb-16">
            <span className="section-label mb-4 block">Our Values</span>
            <h2 className="font-display font-bold text-navy text-3xl lg:text-4xl">Why Choose Horizon</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
            {whyChooseReasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-t border-arch-gray pt-6"
              >
                <span className="font-display font-bold text-champagne text-2xl mb-3 block">0{i + 1}</span>
                <h3 className="font-display font-semibold text-navy text-xl mb-3">{reason.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
