import { useMemo, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PropertyCard from '../components/PropertyCard'
import Reveal from '../components/Reveal'
import { properties } from '../data/properties'
import type { PropertyType } from '../data/types'
import { SearchIcon, ChevronDown, CloseIcon } from '../components/icons'

const TYPES: (PropertyType | 'All')[] = [
  'All',
  'Villa',
  'Residence',
  'Estate',
  'House',
  'Retreat',
  'Penthouse',
]

const SORTS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'beds', label: 'Most Bedrooms' },
  { value: 'sqft', label: 'Largest' },
] as const

type SortValue = (typeof SORTS)[number]['value']

const BED_OPTIONS = [0, 2, 3, 4, 5, 6]
const BATH_OPTIONS = [0, 2, 3, 4, 5]

export default function Properties() {
  const [query, setQuery] = useState('')
  const [type, setType] = useState<PropertyType | 'All'>('All')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [beds, setBeds] = useState(0)
  const [baths, setBaths] = useState(0)
  const [sort, setSort] = useState<SortValue>('featured')
  const [showFilters, setShowFilters] = useState(false)

  const filtered = useMemo(() => {
    let list = properties.filter((p) => {
      if (type !== 'All' && p.type !== type) return false
      if (query) {
        const q = query.toLowerCase()
        const hay = `${p.name} ${p.location} ${p.city} ${p.state}`.toLowerCase()
        if (!hay.includes(q)) return false
      }
      if (minPrice && p.price < Number(minPrice) * 1_000_000) return false
      if (maxPrice && p.price > Number(maxPrice) * 1_000_000) return false
      if (beds && p.beds < beds) return false
      if (baths && p.baths < baths) return false
      return true
    })

    list = [...list].sort((a, b) => {
      switch (sort) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'beds':
          return b.beds - a.beds
        case 'sqft':
          return b.sqft - a.sqft
        default:
          return Number(b.featured) - Number(a.featured)
      }
    })
    return list
  }, [query, type, minPrice, maxPrice, beds, baths, sort])

  const resetFilters = () => {
    setQuery('')
    setType('All')
    setMinPrice('')
    setMaxPrice('')
    setBeds(0)
    setBaths(0)
    setSort('featured')
  }

  const activeCount =
    (type !== 'All' ? 1 : 0) +
    (minPrice ? 1 : 0) +
    (maxPrice ? 1 : 0) +
    (beds ? 1 : 0) +
    (baths ? 1 : 0)

  return (
    <>
      <Header />
      <main className="bg-ivory pb-24 pt-[72px]">
        {/* Page header */}
        <section className="bg-navy py-16 text-white sm:py-20">
          <div className="container-x">
            <Reveal>
              <span className="label-eyebrow">Browse</span>
              <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Properties
              </h1>
              <p className="mt-3 max-w-xl text-white/65">
                Search our curated collection of premium homes and investment
                properties across the country.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Filter bar */}
        <section className="sticky top-[72px] z-30 border-b border-navy/10 bg-white/90 backdrop-blur-md">
          <div className="container-x py-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              {/* Search */}
              <div className="relative flex-1">
                <SearchIcon
                  width={18}
                  height={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy/40"
                />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name or location…"
                  aria-label="Search properties"
                  className="w-full rounded-full border border-navy/15 bg-ivory py-3 pl-11 pr-4 text-sm text-navy placeholder:text-navy/40 focus:border-gold focus:bg-white focus:outline-none"
                />
              </div>

              {/* Type */}
              <div className="relative">
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value as PropertyType | 'All')}
                  aria-label="Property type"
                  className="w-full appearance-none rounded-full border border-navy/15 bg-ivory py-3 pl-4 pr-10 text-sm font-medium text-navy focus:border-gold focus:bg-white focus:outline-none lg:w-44"
                >
                  {TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t === 'All' ? 'All Types' : t}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  width={16}
                  height={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-navy/40"
                />
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortValue)}
                  aria-label="Sort by"
                  className="w-full appearance-none rounded-full border border-navy/15 bg-ivory py-3 pl-4 pr-10 text-sm font-medium text-navy focus:border-gold focus:bg-white focus:outline-none lg:w-52"
                >
                  {SORTS.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  width={16}
                  height={16}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-navy/40"
                />
              </div>

              <button
                type="button"
                onClick={() => setShowFilters((v) => !v)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 px-5 py-3 text-sm font-medium text-navy transition-colors hover:border-navy/40"
              >
                More Filters
                {activeCount > 0 && (
                  <span className="grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-xs font-bold text-navy">
                    {activeCount}
                  </span>
                )}
              </button>
            </div>

            {/* Expanded filters */}
            {showFilters && (
              <div className="mt-4 grid gap-4 border-t border-navy/10 pt-4 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-navy/50">
                    Min Price (M)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="No min"
                    className="mt-1 w-full rounded-lg border border-navy/15 bg-ivory px-3 py-2.5 text-sm focus:border-gold focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-navy/50">
                    Max Price (M)
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="No max"
                    className="mt-1 w-full rounded-lg border border-navy/15 bg-ivory px-3 py-2.5 text-sm focus:border-gold focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-navy/50">
                    Bedrooms
                  </label>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {BED_OPTIONS.filter((b) => b > 0).map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBeds(beds === b ? 0 : b)}
                        className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                          beds === b
                            ? 'bg-navy text-white'
                            : 'border border-navy/15 text-navy hover:border-navy/40'
                        }`}
                      >
                        {b}+
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-navy/50">
                    Bathrooms
                  </label>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {BATH_OPTIONS.filter((b) => b > 0).map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBaths(baths === b ? 0 : b)}
                        className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                          baths === b
                            ? 'bg-navy text-white'
                            : 'border border-navy/15 text-navy hover:border-navy/40'
                        }`}
                      >
                        {b}+
                      </button>
                    ))}
                  </div>
                </div>
                {activeCount > 0 && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="inline-flex items-center gap-1.5 self-end text-sm font-semibold text-gold-dark hover:text-navy"
                  >
                    <CloseIcon width={15} height={15} />
                    Clear all filters
                  </button>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Results */}
        <section className="container-x mt-10">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-navy/60">
              <span className="font-semibold text-navy">{filtered.length}</span>{' '}
              {filtered.length === 1 ? 'property' : 'properties'} found
            </p>
          </div>

          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <Reveal key={p.id} delay={(i % 3) * 70}>
                  <PropertyCard property={p} className="h-full" />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl bg-white py-20 text-center ring-1 ring-navy/5">
              <p className="font-display text-xl font-bold text-navy">
                No properties match your search
              </p>
              <p className="mt-2 text-navy/60">
                Try adjusting or clearing your filters.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="btn-navy mt-6"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
