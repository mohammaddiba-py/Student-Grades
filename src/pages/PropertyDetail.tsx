import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ImageGallery from '../components/ImageGallery'
import PropertyCard from '../components/PropertyCard'
import Reveal from '../components/Reveal'
import { getProperty, getAgent, getSimilarProperties } from '../data/properties'
import {
  BedIcon,
  BathIcon,
  RulerIcon,
  CarIcon,
  MapPin,
  HeartIcon,
  CheckIcon,
  ArrowRight,
  ArrowLeft,
  PhoneIcon,
  MailIcon,
  StarIcon,
} from '../components/icons'
import { useFavorites } from '../lib/useFavorites'

export default function PropertyDetail() {
  const { id } = useParams()
  const property = id ? getProperty(id) : undefined
  const { isFavorite, toggle } = useFavorites()
  const [contactOpen, setContactOpen] = useState(false)

  if (!property) {
    return (
      <>
        <Header />
        <main className="grid min-h-[60vh] place-items-center bg-ivory pt-[72px]">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-navy">
              Property not found
            </h1>
            <p className="mt-3 text-navy/60">
              The property you’re looking for may have been sold or removed.
            </p>
            <Link to="/properties" className="btn-navy mt-6">
              <ArrowLeft width={18} height={18} />
              Back to Properties
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const agent = getAgent(property.agentId)
  const similar = getSimilarProperties(property)
  const fav = isFavorite(property.id)

  const specs = [
    { icon: BedIcon, label: 'Bedrooms', value: property.beds },
    { icon: BathIcon, label: 'Bathrooms', value: property.baths },
    { icon: RulerIcon, label: 'Interior', value: `${property.sqft.toLocaleString()} ft²` },
    { icon: CarIcon, label: 'Garage', value: property.garage ?? '—' },
    { icon: RulerIcon, label: 'Lot', value: property.lotSqft ? `${property.lotSqft.toLocaleString()} ft²` : '—' },
    { icon: StarIcon, label: 'Year Built', value: property.yearBuilt },
  ]

  return (
    <>
      <Header />
      <main className="bg-white pt-[72px]">
        {/* Breadcrumb */}
        <div className="container-x py-5">
          <nav className="flex items-center gap-2 text-sm text-navy/50" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-navy">Home</Link>
            <span>/</span>
            <Link to="/properties" className="hover:text-navy">Properties</Link>
            <span>/</span>
            <span className="text-navy">{property.name}</span>
          </nav>
        </div>

        {/* Gallery */}
        <div className="container-x">
          <ImageGallery images={property.gallery} alt={property.name} />
        </div>

        {/* Header info */}
        <div className="container-x mt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-dark">
                  {property.type}
                </span>
                {property.featured && (
                  <span className="rounded-full bg-navy px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    Featured
                  </span>
                )}
              </div>
              <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                {property.name}
              </h1>
              <p className="mt-2 flex items-center gap-2 text-navy/60">
                <MapPin width={18} height={18} className="text-gold" />
                {property.location}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => toggle(property.id)}
                aria-pressed={fav}
                className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-navy/40"
              >
                <HeartIcon width={18} height={18} filled={fav} className={fav ? 'text-gold' : ''} />
                {fav ? 'Saved' : 'Save'}
              </button>
              <p className="font-display text-2xl font-bold text-navy sm:text-3xl">
                {property.priceLabel}
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="container-x mt-10 grid gap-10 lg:grid-cols-3">
          {/* Left: details */}
          <div className="lg:col-span-2">
            {/* Specs */}
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-navy/10 sm:grid-cols-3">
              {specs.map((s) => (
                <div key={s.label} className="bg-ivory p-5 text-center">
                  <s.icon width={22} height={22} className="mx-auto text-gold" />
                  <p className="mt-2 font-display text-lg font-bold text-navy">
                    {s.value}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-navy/50">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold tracking-tight text-navy">
                About this property
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-navy/70">
                {property.description}
              </p>
            </div>

            {/* Features */}
            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold tracking-tight text-navy">
                Key Features
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {property.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px] text-navy/75">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-dark">
                      <CheckIcon width={13} height={13} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Amenities */}
            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold tracking-tight text-navy">
                Amenities
              </h2>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {property.amenities.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border border-navy/15 px-4 py-2 text-sm font-medium text-navy/70"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: agent card */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl bg-ivory p-6 ring-1 ring-navy/5">
              <h2 className="font-display text-lg font-bold tracking-tight text-navy">
                Listed by
              </h2>
              {agent && (
                <div className="mt-4 flex items-center gap-4">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    loading="lazy"
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-display text-base font-bold text-navy">
                      {agent.name}
                    </p>
                    <p className="text-sm text-gold-dark">{agent.role}</p>
                  </div>
                </div>
              )}

              <div className="mt-6 space-y-3">
                <a
                  href={`tel:${agent?.phone.replace(/[^0-9]/g, '')}`}
                  className="btn-navy w-full"
                >
                  <PhoneIcon width={18} height={18} />
                  Contact Agent
                </a>
                <button
                  type="button"
                  onClick={() => setContactOpen((v) => !v)}
                  className="btn-ghost w-full"
                >
                  Schedule a Viewing
                </button>
                {agent && (
                  <a
                    href={`mailto:${agent.email}`}
                    className="flex items-center justify-center gap-2 text-sm font-medium text-navy/60 hover:text-navy"
                  >
                    <MailIcon width={16} height={16} />
                    {agent.email}
                  </a>
                )}
              </div>

              {contactOpen && (
                <form
                  className="mt-5 space-y-3 border-t border-navy/10 pt-5"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setContactOpen(false)
                  }}
                >
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    aria-label="Your name"
                    className="w-full rounded-lg border border-navy/15 bg-white px-3 py-2.5 text-sm focus:border-gold focus:outline-none"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                    className="w-full rounded-lg border border-navy/15 bg-white px-3 py-2.5 text-sm focus:border-gold focus:outline-none"
                  />
                  <input
                    type="date"
                    aria-label="Preferred date"
                    className="w-full rounded-lg border border-navy/15 bg-white px-3 py-2.5 text-sm focus:border-gold focus:outline-none"
                  />
                  <button type="submit" className="btn-gold w-full">
                    Request Viewing
                  </button>
                </form>
              )}
            </div>
          </aside>
        </div>

        {/* Similar */}
        {similar.length > 0 && (
          <section className="section-pad bg-ivory">
            <div className="container-x">
              <Reveal className="mb-8 flex items-end justify-between">
                <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                  Similar Properties
                </h2>
                <Link
                  to="/properties"
                  className="link-underline inline-flex items-center gap-2 text-[15px] font-semibold text-navy"
                >
                  View All
                  <ArrowRight width={18} height={18} />
                </Link>
              </Reveal>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {similar.map((p, i) => (
                  <Reveal key={p.id} delay={(i % 3) * 80}>
                    <PropertyCard property={p} className="h-full" />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 border-t border-navy/10 bg-white/95 p-4 backdrop-blur-md lg:hidden">
        <div className="flex-1">
          <p className="text-xs text-navy/50">{property.priceLabel}</p>
          <p className="truncate font-display text-sm font-bold text-navy">
            {property.name}
          </p>
        </div>
        <a
          href={`tel:${agent?.phone.replace(/[^0-9]/g, '')}`}
          className="btn-navy px-5 py-3 text-sm"
        >
          <PhoneIcon width={16} height={16} />
          Contact
        </a>
      </div>

      <div className="hidden lg:block">
        <Footer />
      </div>
    </>
  )
}
