import { Link } from 'react-router-dom'
import { MapPin, BedDouble, Bath, Maximize, Heart } from 'lucide-react'
import type { Property } from '../data/properties'
import { useState } from 'react'

interface PropertyCardProps {
  property: Property
  className?: string
  style?: React.CSSProperties
}

export default function PropertyCard({ property, className = '', style }: PropertyCardProps) {
  const [saved, setSaved] = useState(false)

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setSaved(!saved)
  }

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl bg-navy cursor-pointer ${className}`}
      style={style}
    >
      <Link to={`/properties/${property.id}`} className="block h-full">
        {/* Image */}
        <div className="relative h-full min-h-[320px] overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent opacity-90" />

          {/* Save button */}
          <button
            onClick={handleSave}
            aria-label={saved ? 'Remove from favorites' : 'Save property'}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 focus-gold z-10"
          >
            <Heart
              className={`w-4.5 h-4.5 transition-all ${saved ? 'fill-champagne text-champagne' : 'text-white'}`}
              strokeWidth={1.5}
            />
          </button>

          {/* Featured badge */}
          {property.featured && (
            <span className="absolute top-4 left-4 rounded-full bg-champagne/90 backdrop-blur-sm px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-wider text-navy">
              Featured
            </span>
          )}

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
            <h3 className="font-display font-bold text-white text-lg lg:text-xl leading-tight mb-2">
              {property.name}
            </h3>
            <div className="flex items-center gap-1.5 text-white/70 text-sm mb-3">
              <MapPin className="w-3.5 h-3.5 text-champagne shrink-0" strokeWidth={1.5} />
              <span>{property.location}</span>
            </div>

            {/* Specs */}
            <div className="flex items-center gap-4 text-white/60 text-xs mb-4">
              <span className="flex items-center gap-1.5">
                <BedDouble className="w-3.5 h-3.5" strokeWidth={1.5} />
                {property.bedrooms}
              </span>
              <span className="flex items-center gap-1.5">
                <Bath className="w-3.5 h-3.5" strokeWidth={1.5} />
                {property.bathrooms}
              </span>
              <span className="flex items-center gap-1.5">
                <Maximize className="w-3.5 h-3.5" strokeWidth={1.5} />
                {property.sqft.toLocaleString()} ft²
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between pt-3 border-t border-white/15">
              <span className="font-display font-bold text-champagne text-lg">{property.priceLabel}</span>
              <span className="text-white/50 text-xs uppercase tracking-wider">{property.type}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
