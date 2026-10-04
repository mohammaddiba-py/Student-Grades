import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { properties } from '../data/properties'
import PropertyCard from '../components/PropertyCard'

const propertyTypes = ['All', 'Villa', 'House', 'Penthouse', 'Estate', 'Retreat']
const locations = ['All', 'Austin', 'Malibu', 'Scottsdale', 'Miami', 'Los Angeles', 'Beverly Hills', 'Lake Tahoe']
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'bedrooms', label: 'Most Bedrooms' },
  { value: 'sqft', label: 'Largest Area' },
]

export default function PropertiesPage() {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('All')
  const [location, setLocation] = useState('All')
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(10000000)
  const [bedrooms, setBedrooms] = useState(0)
  const [bathrooms, setBathrooms] = useState(0)
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)

  const filtered = useMemo(() => {
    let result = properties.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase())
      const matchesType = type === 'All' || p.type === type
      const matchesLocation = location === 'All' || p.city === location
      const matchesPrice = p.price >= minPrice && p.price <= maxPrice
      const matchesBedrooms = p.bedrooms >= bedrooms
      const matchesBathrooms = p.bathrooms >= bathrooms
      return matchesSearch && matchesType && matchesLocation && matchesPrice && matchesBedrooms && matchesBathrooms
    })

    switch (sortBy) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case 'bedrooms':
        result = [...result].sort((a, b) => b.bedrooms - a.bedrooms)
        break
      case 'sqft':
        result = [...result].sort((a, b) => b.sqft - a.sqft)
        break
      default:
        result = [...result].sort((a, b) => Number(b.featured) - Number(a.featured))
    }
    return result
  }, [search, type, location, minPrice, maxPrice, bedrooms, bathrooms, sortBy])

  const resetFilters = () => {
    setSearch('')
    setType('All')
    setLocation('All')
    setMinPrice(0)
    setMaxPrice(10000000)
    setBedrooms(0)
    setBathrooms(0)
    setSortBy('featured')
  }

  return (
    <div className="pt-16 md:pt-20">
      {/* Page header */}
      <section className="bg-navy text-white py-20 lg:py-28">
        <div className="container-px mx-auto max-w-[1400px] text-center">
          <span className="section-label mb-4 block">Browse Portfolio</span>
          <h1 className="font-display font-bold text-4xl lg:text-5xl mb-4">Properties</h1>
          <p className="text-white/60 max-w-xl mx-auto">
            Explore our curated collection of exceptional homes and investment properties.
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="sticky top-16 md:top-20 z-30 bg-ivory/95 backdrop-blur-md border-b border-arch-gray">
        <div className="container-px mx-auto max-w-[1400px] py-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/40" strokeWidth={1.5} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name or location..."
                className="w-full rounded-full border border-arch-gray bg-white pl-11 pr-4 py-3 text-sm text-navy placeholder-navy/40 outline-none focus:border-champagne/50 transition-colors"
              />
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-full border border-arch-gray bg-white px-5 py-3 text-sm text-navy outline-none focus:border-champagne/50 transition-colors cursor-pointer"
              aria-label="Sort by"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>

            {/* Filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-arch-gray bg-white px-5 py-3 text-sm font-medium text-navy hover:border-champagne/50 transition-colors focus-gold"
            >
              <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
              Filters
            </button>
          </div>

          {/* Expanded filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 overflow-hidden"
            >
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 pt-3 border-t border-arch-gray">
                {/* Type */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-navy/50 mb-2">Type</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full rounded-lg border border-arch-gray bg-white px-3 py-2.5 text-sm text-navy outline-none focus:border-champagne/50 cursor-pointer"
                  >
                    {propertyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                {/* Location */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-navy/50 mb-2">Location</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full rounded-lg border border-arch-gray bg-white px-3 py-2.5 text-sm text-navy outline-none focus:border-champagne/50 cursor-pointer"
                  >
                    {locations.map((l) => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>
                {/* Bedrooms */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-navy/50 mb-2">Bedrooms</label>
                  <select
                    value={bedrooms}
                    onChange={(e) => setBedrooms(Number(e.target.value))}
                    className="w-full rounded-lg border border-arch-gray bg-white px-3 py-2.5 text-sm text-navy outline-none focus:border-champagne/50 cursor-pointer"
                  >
                    {[0, 3, 4, 5, 6, 7].map((n) => (
                      <option key={n} value={n}>{n === 0 ? 'Any' : `${n}+`}</option>
                    ))}
                  </select>
                </div>
                {/* Bathrooms */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-navy/50 mb-2">Bathrooms</label>
                  <select
                    value={bathrooms}
                    onChange={(e) => setBathrooms(Number(e.target.value))}
                    className="w-full rounded-lg border border-arch-gray bg-white px-3 py-2.5 text-sm text-navy outline-none focus:border-champagne/50 cursor-pointer"
                  >
                    {[0, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>{n === 0 ? 'Any' : `${n}+`}</option>
                    ))}
                  </select>
                </div>
                {/* Price range */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-navy/50 mb-2">
                    Max: ${(maxPrice / 1000000).toFixed(1)}M
                  </label>
                  <input
                    type="range"
                    min={1000000}
                    max={7000000}
                    step={250000}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-champagne cursor-pointer"
                    aria-label="Maximum price"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-3">
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1.5 text-sm text-navy/60 hover:text-navy transition-colors"
                >
                  <X className="w-4 h-4" strokeWidth={1.5} />
                  Reset filters
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Results */}
      <section className="py-12 lg:py-16 bg-ivory">
        <div className="container-px mx-auto max-w-[1400px]">
          <p className="text-sm text-navy/50 mb-6">
            {filtered.length} {filtered.length === 1 ? 'property' : 'properties'} found
          </p>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filtered.map((property, i) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <PropertyCard property={property} className="h-full" />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-navy/50 text-lg">No properties match your criteria.</p>
              <button
                onClick={resetFilters}
                className="mt-4 text-champagne-dark font-medium hover:text-champagne transition-colors"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
