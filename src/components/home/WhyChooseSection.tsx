import { motion } from 'framer-motion'
import { whyChooseReasons } from '../../data/properties'

export default function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-32 bg-navy text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container-px mx-auto max-w-[1400px] relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left: Heading */}
          <div className="lg:col-span-1">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-label mb-4 block"
            >
              Why Horizon
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-bold text-4xl lg:text-5xl leading-tight"
            >
              Why Choose Horizon
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-white/60 text-base lg:text-lg leading-relaxed max-w-md"
            >
              We do more than sell properties. We build relationships founded on trust, expertise, and an unwavering commitment to your goals.
            </motion.p>
          </div>

          {/* Right: Reasons */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            {whyChooseReasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-t border-white/15 pt-6"
              >
                <span className="font-display font-bold text-champagne text-2xl mb-3 block">
                  0{i + 1}
                </span>
                <h3 className="font-display font-semibold text-white text-xl mb-3">{reason.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
