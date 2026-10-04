import { useRef, useCallback, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { properties } from '../../data/properties'
import PropertyCard from '../PropertyCard'

export default function FeaturedProperties() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const featured = properties.filter((p) => p.featured)
  const display = featured.length >= 4 ? featured : properties.slice(0, 6)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', checkScroll, { passive: true })
    checkScroll()
    return () => el.removeEventListener('scroll', checkScroll)
  }, [checkScroll])

  const scrollBy = (dir: number) => {
    const el = scrollRef.current
    if (!el) return
    const amount = Math.min(el.clientWidth * 0.8, 420)
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section className="py-20 lg:py-32 bg-ivory">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="container-px flex flex-col items-center text-center mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-label mb-4 block"
          >
            Featured
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-navy text-4xl lg:text-5xl"
          >
            Featured Properties
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="no-scrollbar flex gap-5 lg:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-5 sm:px-8 lg:px-12 xl:px-16"
            style={{ scrollbarWidth: 'none' }}
          >
            {display.map((property, i) => (
              <div
                key={property.id}
                className="snap-start shrink-0 w-[300px] sm:w-[340px] lg:w-[380px]"
              >
                <PropertyCard property={property} className="h-full" />
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="container-px flex items-center justify-end gap-3 mt-8">
            <button
              onClick={() => scrollBy(-1)}
              disabled={!canScrollLeft}
              aria-label="Previous properties"
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 focus-gold ${
                canScrollLeft
                  ? 'border-navy/20 text-navy hover:bg-navy hover:text-white'
                  : 'border-arch-gray text-arch-gray cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              disabled={!canScrollRight}
              aria-label="Next properties"
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 focus-gold ${
                canScrollRight
                  ? 'border-navy/20 text-navy hover:bg-navy hover:text-white'
                  : 'border-arch-gray text-arch-gray cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
