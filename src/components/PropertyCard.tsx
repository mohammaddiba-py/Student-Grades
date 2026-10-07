import { Link } from 'react-router-dom'
import type { Property } from '../data/types'
import { BedIcon, BathIcon, RulerIcon, MapPin, HeartIcon } from './icons'
import { useFavorites } from '../lib/useFavorites'

interface PropertyCardProps {
  property: Property
  className?: string
  size?: 'lg' | 'md'
}

export default function PropertyCard({
  property,
  className = '',
  size = 'md',
}: PropertyCardProps) {
  const { isFavorite, toggle } = useFavorites()
  const fav = isFavorite(property.id)

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl bg-navy text-white shadow-sm ring-1 ring-navy/5 transition-all duration-500 hover:shadow-2xl hover:shadow-navy/20 ${className}`}
    >
      <Link to={`/properties/${property.id}`} className="block focus-visible:outline-none" aria-label={`${property.name}, ${property.location}, ${property.priceLabel}`}>
        <div className={`relative overflow-hidden ${size === 'lg' ? 'aspect-[4/3]' : 'aspect-[5/4]'}`}>
          <img
            src={property.image}
            alt={`${property.name} — ${property.location}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
          />
          <div className="card-overlay" />

          {/* Top row */}
          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
            <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
              {property.type}
            </span>
            {property.featured && (
              <span className="rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy">
                Featured
              </span>
            )}
          </div>

          {/* Bottom content */}
          <div className="absolute inset-x-0 bottom-0 p-5">
            <div className="mb-1.5 flex items-center gap-1.5 text-[13px] text-white/75">
              <MapPin width={14} height={14} className="text-gold" />
              <span className="truncate">{property.location}</span>
            </div>
            <h3 className="font-display text-xl font-bold leading-tight tracking-tight">
              {property.name}
            </h3>
            <div className="mt-3 flex items-center justify-between border-t border-white/15 pt-3">
              <div className="flex items-center gap-4 text-[13px] text-white/85">
                <span className="inline-flex items-center gap-1.5">
                  <BedIcon width={16} height={16} className="text-gold" />
                  {property.beds}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <BathIcon width={16} height={16} className="text-gold" />
                  {property.baths}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <RulerIcon width={16} height={16} className="text-gold" />
                  {property.sqft.toLocaleString()}
                </span>
              </div>
              <span className="font-display text-base font-bold text-white">
                {property.priceLabel}
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* Favorite */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          toggle(property.id)
        }}
        aria-pressed={fav}
        aria-label={fav ? `Remove ${property.name} from favorites` : `Save ${property.name} to favorites`}
        className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/25"
      >
        <HeartIcon width={17} height={17} filled={fav} className={fav ? 'text-gold' : 'text-white'} />
      </button>
    </article>
  )
}
