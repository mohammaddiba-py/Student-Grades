import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, BedDouble, Bath, Maximize, Calendar, Ruler, Heart, ArrowRight, Check } from 'lucide-react'
import { properties } from '../data/properties'
import PropertyGallery from '../components/PropertyGallery'
import PropertyCard from '../components/PropertyCard'

export default function PropertyDetail() {
  const { id } = useParams()
  const property = properties.find((p) => p.id === id)
  const [saved, setSaved] = useState(false)
  const [showSchedule, setShowSchedule] = useState(false)

  if (!property) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-display font-bold text-3xl text-navy mb-4">Property Not Found</h1>
        <Link to="/properties" className="text-champagne-dark hover:text-champagne transition-colors">
          ← Back to Properties
        </Link>
      </div>
    )
  }

  const similar = properties.filter((p) => p.id !== property.id && p.city === property.city).slice(0, 3)
  const fallbackSimilar = properties.filter((p) => p.id !== property.id).slice(0, 3)
  const similarProps = similar.length >= 2 ? similar : fallbackSimilar

  const specs = [
    { icon: BedDouble, label: 'Bedrooms', value: property.bedrooms },
    { icon: Bath, label: 'Bathrooms', value: property.bathrooms },
    { icon: Maximize, label: 'Interior', value: `${property.sqft.toLocaleString()} ft²` },
    { icon: Ruler, label: 'Lot Size', value: property.lotSize },
    { icon: Calendar, label: 'Year Built', value: property.yearBuilt },
  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="container-px mx-auto max-w-[1400px] py-6">
        <nav className="flex items-center gap-2 text-sm text-navy/50">
          <Link to="/" className="hover:text-navy transition-colors">Home</Link>
          <span>/</span>
          <Link to="/properties" className="hover:text-navy transition-colors">Properties</Link>
          <span>/</span>
          <span className="text-navy">{property.name}</span>
        </nav>
      </div>

      {/* Gallery */}
      <section className="container-px mx-auto max-w-[1400px]">
        <PropertyGallery images={property.images} alt={property.name} />
      </section>

      {/* Main content */}
      <section className="container-px mx-auto max-w-[1400px] py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Details */}
          <div className="lg:col-span-2">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="section-label mb-2 block">{property.type}</span>
                <h1 className="font-display font-bold text-navy text-3xl lg:text-4xl leading-tight">
                  {property.name}
                </h1>
                <div className="flex items-center gap-1.5 text-navy/60 text-sm mt-3">
                  <MapPin className="w-4 h-4 text-champagne" strokeWidth={1.5} />
                  {property.location}
                </div>
              </div>
              <button
                onClick={() => setSaved(!saved)}
                aria-label={saved ? 'Remove from favorites' : 'Save property'}
                className="shrink-0 w-12 h-12 rounded-full border border-arch-gray flex items-center justify-center hover:border-champagne transition-all duration-300 focus-gold"
              >
                <Heart
                  className={`w-5 h-5 transition-all ${saved ? 'fill-champagne text-champagne' : 'text-navy/60'}`}
                  strokeWidth={1.5}
                />
              </button>
            </div>

            <div className="flex items-baseline gap-3 mb-8">
              <span className="font-display font-bold text-champagne text-3xl">{property.priceLabel}</span>
            </div>

            {/* Specs grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 py-6 border-y border-arch-gray mb-8">
              {specs.map((spec) => (
                <div key={spec.label} className="flex flex-col items-center text-center gap-2">
                  <spec.icon className="w-5 h-5 text-champagne" strokeWidth={1.5} />
                  <span className="text-xs text-navy/50 uppercase tracking-wider">{spec.label}</span>
                  <span className="font-display font-semibold text-navy text-sm">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <h2 className="font-display font-bold text-navy text-2xl mb-4">About This Property</h2>
            <p className="text-navy/70 text-base leading-relaxed mb-10">{property.description}</p>

            {/* Features */}
            <h2 className="font-display font-bold text-navy text-2xl mb-4">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {property.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-champagne/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-champagne-dark" strokeWidth={2} />
                  </div>
                  <span className="text-navy/70 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Amenities */}
            <h2 className="font-display font-bold text-navy text-2xl mb-4">Amenities</h2>
            <div className="flex flex-wrap gap-2">
              {property.amenities.map((amenity) => (
                <span
                  key={amenity}
                  className="rounded-full bg-warm-gray border border-arch-gray px-4 py-2 text-sm text-navy/70"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Agent card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl bg-warm-gray p-6 lg:p-8">
              <h3 className="font-display font-bold text-navy text-lg mb-6">Contact Agent</h3>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={property.agent.avatar}
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-display font-semibold text-navy">{property.agent.name}</p>
                  <p className="text-sm text-navy/50">{property.agent.role}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6 text-sm">
                <a href={`tel:${property.agent.phone.replace(/\D/g, '')}`} className="flex items-center gap-3 text-navy/70 hover:text-navy transition-colors">
                  <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                    <span className="text-champagne">☎</span>
                  </span>
                  {property.agent.phone}
                </a>
                <a href={`mailto:${property.agent.email}`} className="flex items-center gap-3 text-navy/70 hover:text-navy transition-colors break-all">
                  <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
                    <span className="text-champagne">✉</span>
                  </span>
                  {property.agent.email}
                </a>
              </div>

              <button
                onClick={() => setShowSchedule(true)}
                className="w-full rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-navy-700 mb-3 focus-gold"
              >
                Schedule a Viewing
              </button>
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-navy/20 px-6 py-3.5 text-sm font-medium text-navy transition-all duration-300 hover:bg-navy hover:text-white focus-gold"
              >
                Send Inquiry
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Similar properties */}
      <section className="py-16 lg:py-20 bg-warm-gray">
        <div className="container-px mx-auto max-w-[1400px]">
          <h2 className="font-display font-bold text-navy text-3xl lg:text-4xl mb-10 text-center">
            Similar Properties
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {similarProps.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <PropertyCard property={p} className="h-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-arch-gray px-5 py-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs text-navy/50">{property.priceLabel}</p>
          <p className="font-display font-semibold text-navy text-sm">{property.name}</p>
        </div>
        <button
          onClick={() => setShowSchedule(true)}
          className="rounded-full bg-navy px-6 py-3 text-sm font-medium text-white shrink-0"
        >
          Schedule
        </button>
      </div>

      {/* Schedule modal */}
      {showSchedule && (
        <div
          className="fixed inset-0 z-[100] bg-navy/60 backdrop-blur-sm flex items-center justify-center p-5"
          onClick={() => setShowSchedule(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-display font-bold text-navy text-xl mb-2">Schedule a Viewing</h3>
            <p className="text-navy/60 text-sm mb-6">For {property.name}, {property.location}</p>
            <form onSubmit={(e) => { e.preventDefault(); setShowSchedule(false) }} className="space-y-4">
              <input type="text" placeholder="Your name" required className="w-full rounded-lg border border-arch-gray px-4 py-3 text-sm outline-none focus:border-champagne/50" />
              <input type="email" placeholder="Your email" required className="w-full rounded-lg border border-arch-gray px-4 py-3 text-sm outline-none focus:border-champagne/50" />
              <input type="date" required className="w-full rounded-lg border border-arch-gray px-4 py-3 text-sm outline-none focus:border-champagne/50" />
              <textarea placeholder="Message (optional)" rows={3} className="w-full rounded-lg border border-arch-gray px-4 py-3 text-sm outline-none focus:border-champagne/50 resize-none" />
              <button type="submit" className="w-full rounded-full bg-navy px-6 py-3.5 text-sm font-medium text-white hover:bg-navy-700 transition-colors">
                Confirm Request
              </button>
            </form>
          </motion.div>
        </div>
      )}
      <div className="h-20 lg:hidden" />
    </div>
  )
}
