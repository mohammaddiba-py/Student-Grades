import { motion } from 'framer-motion'
import { ArrowRight, KeyRound } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-ivory">
      <div className="container-px mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-warm-gray px-8 py-12 lg:px-16 lg:py-16"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left: Icon + text */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="shrink-0 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
                <KeyRound className="w-7 h-7 text-champagne" strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="font-display font-bold text-navy text-2xl lg:text-3xl leading-tight">
                  Ready to Find Your Perfect Property?
                </h2>
                <p className="text-navy/60 text-sm lg:text-base mt-2 max-w-lg">
                  Let our experts guide you to the right home or investment.
                </p>
              </div>
            </div>

            {/* Right: Button */}
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-navy-700 shrink-0 focus-gold"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
