import { Link } from "react-router-dom";
import useFavorites from "../hooks/useFavorites.js";
import { formatPrice } from "../data/properties.js";

export default function PropertyCard({ property, className = "" }) {
  const { has, toggle } = useFavorites();
  const faved = has(property.slug);

  return (
    <Link
      to={`/properties/${property.slug}`}
      className={`zoom-frame group block rounded-xl bg-navy-950 shadow-[0_20px_45px_-25px_rgba(11,31,58,0.45)] transition-shadow duration-300 hover:shadow-[0_30px_60px_-25px_rgba(11,31,58,0.55)] ${className}`}
      aria-label={`${property.name} — ${property.location} — ${formatPrice(property.price)}`}
    >
      <img
        src={property.image}
        alt={property.name}
        loading="lazy"
        className="aspect-[4/3.4] w-full transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />

      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          toggle(property.slug);
        }}
        aria-label={faved ? `Remove ${property.name} from favorites` : `Save ${property.name} to favorites`}
        aria-pressed={faved}
        className="pointer-events-auto absolute right-3.5 top-3.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white"
      >
        <svg
          viewBox="0 0 24 24"
          className={`h-4.5 w-4.5 transition-colors duration-300 ${faved ? "text-gold" : "text-navy-900/60"}`}
          fill={faved ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </button>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
        <div>
          <h3 className="text-[17px] font-bold text-white">{property.name}</h3>
          <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-white/75">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-3.5 w-3.5 text-gold"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            {property.location}
          </p>
        </div>
        <p className="shrink-0 text-[15px] font-bold text-white">
          {formatPrice(property.price)}
        </p>
      </div>
    </Link>
  );
}
