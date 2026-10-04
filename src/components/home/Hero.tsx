import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { pageImages } from '../../data/properties'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src={pageImages.hero}
          alt="Luxury modern villa at dusk with infinity pool"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/30 to-navy/70" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="max-w-4xl"
        >
          <span className="section-label mb-6 block">Horizon Properties</span>
          <h1 className="font-display font-bold text-white text-display leading-[1.1]">
            Discover Exceptional
            <br />
            Homes &amp; Investments
          </h1>
          <p className="mt-6 text-white/80 text-lg lg:text-xl font-body max-w-2xl mx-auto leading-relaxed">
            Premium properties in prime locations. Find your dream home or the perfect investment with confidence.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="w-6 h-6 text-white/60 animate-bounce" strokeWidth={1.5} />
      </motion.div>
    </section>
  )
}
