import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import PropertyGallery from "../components/PropertyGallery.jsx";
import PropertyCard from "../components/PropertyCard.jsx";
import Button from "../components/Button.jsx";
import Reveal from "../components/Reveal.jsx";
import useFavorites from "../hooks/useFavorites.js";
import { getProperty, properties, formatPrice, agents } from "../data/properties.js";
import NotFound from "./NotFound.jsx";

export default function PropertyDetail() {
  const { slug } = useParams();
  const property = getProperty(slug);
  const { has, toggle } = useFavorites();
  const [viewing, setViewing] = useState({ name: "", email: "", date: "", message: "" });
  const [sent, setSent] = useState(false);

  if (!property) return <NotFound />;

  const agent = agents[0];
  const faved = has(property.slug);
  const similar = properties
    .filter((p) => p.slug !== property.slug && (p.type === property.type || p.city === property.city))
    .slice(0, 3);

  const spec = (label, value) => (
    <div className="rounded-xl border border-navy-900/10 bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-body">{label}</p>
      <p className="mt-1.5 text-xl font-extrabold text-navy-900">{value}</p>
    </div>
  );

  return (
    <>
      <PageHero eyebrow={property.type} title={property.name} description={property.location} />

      <section className="container-x grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.65fr_1fr] lg:py-20">
        <div>
          <Reveal>
            <PropertyGallery images={property.gallery} name={property.name} />
          </Reveal>

          <Reveal className="mt-10 flex flex-wrap items-center justify-between gap-5">
            <div>
              <p className="text-sm font-medium text-slate-body">Asking price</p>
              <p className="text-4xl font-extrabold tracking-tight text-navy-900">
                {formatPrice(property.price)}
              </p>
            </div>
            <Button
              variant={faved ? "gold" : "outline-navy"}
              size="md"
              onClick={() => toggle(property.slug)}
              aria-pressed={faved}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4.5 w-4.5"
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
              {faved ? "Saved to favorites" : "Save to favorites"}
            </Button>
          </Reveal>

          <Reveal className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {spec("Bedrooms", property.beds)}
            {spec("Bathrooms", property.baths)}
            {spec("Square feet", property.sqft.toLocaleString())}
            {spec("Year built", property.year)}
          </Reveal>

          <Reveal className="mt-12">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-900">About this property</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-body">{property.description}</p>
            <div className="mt-6 grid gap-2.5 text-sm text-slate-body sm:grid-cols-2">
              <p><span className="font-semibold text-navy-900">Location:</span> {property.location}</p>
              <p><span className="font-semibold text-navy-900">Type:</span> {property.type}</p>
              <p><span className="font-semibold text-navy-900">Lot size:</span> {property.lot}</p>
              <p><span className="font-semibold text-navy-900">Parking:</span> {property.garage}</p>
            </div>
          </Reveal>

          <Reveal className="mt-12">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-900">Key features</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {property.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-slate-body">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-3 w-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-12">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy-900">Amenities</h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {property.amenities.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-navy-900/12 bg-ivory px-4 py-1.5 text-sm font-medium text-navy-900"
                >
                  {a}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Agent + schedule a viewing */}
        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <Reveal className="rounded-2xl border border-navy-900/10 bg-white p-7 shadow-[0_24px_50px_-30px_rgba(11,31,58,0.35)]">
            <div className="flex items-center gap-4">
              <img
                src={agent.photo}
                alt={`Portrait of ${agent.name}`}
                loading="lazy"
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-navy-900">{agent.name}</p>
                <p className="text-sm text-gold">{agent.role}</p>
                <p className="mt-1 text-xs text-slate-body">Listed agent · DRE #00000000</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <a
                href={`tel:${agent.phone.replace(/[^+\d]/g, "")}`}
                className="rounded-lg border border-navy-900/15 px-4 py-2.5 text-center font-semibold text-navy-900 transition-colors hover:border-navy-900"
              >
                Call agent
              </a>
              <a
                href={`mailto:${agent.email}`}
                className="rounded-lg border border-navy-900/15 px-4 py-2.5 text-center font-semibold text-navy-900 transition-colors hover:border-navy-900"
              >
                Email agent
              </a>
            </div>

            <hr className="my-6 border-navy-900/10" />

            <h3 className="text-lg font-bold text-navy-900">Schedule a viewing</h3>
            {sent ? (
              <div className="mt-4 rounded-xl bg-mist p-5 text-center">
                <p className="text-2xl font-extrabold text-gold" aria-hidden="true">✓</p>
                <p className="mt-2 text-sm font-semibold text-navy-900">Request received</p>
                <p className="mt-1 text-sm text-slate-body">
                  {agent.name} will confirm your tour shortly.
                </p>
              </div>
            ) : (
              <form
                className="mt-4 space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div>
                  <label htmlFor="v-name" className="sr-only">Your name</label>
                  <input
                    id="v-name"
                    required
                    value={viewing.name}
                    onChange={(e) => setViewing({ ...viewing, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-navy-900/15 px-3.5 py-2.5 text-sm focus:border-navy-900"
                  />
                </div>
                <div>
                  <label htmlFor="v-email" className="sr-only">Email</label>
                  <input
                    id="v-email"
                    type="email"
                    required
                    value={viewing.email}
                    onChange={(e) => setViewing({ ...viewing, email: e.target.value })}
                    placeholder="Email address"
                    className="w-full rounded-lg border border-navy-900/15 px-3.5 py-2.5 text-sm focus:border-navy-900"
                  />
                </div>
                <div>
                  <label htmlFor="v-date" className="sr-only">Preferred date</label>
                  <input
                    id="v-date"
                    type="date"
                    required
                    value={viewing.date}
                    onChange={(e) => setViewing({ ...viewing, date: e.target.value })}
                    className="w-full rounded-lg border border-navy-900/15 px-3.5 py-2.5 text-sm text-slate-body focus:border-navy-900"
                  />
                </div>
                <div>
                  <label htmlFor="v-msg" className="sr-only">Message</label>
                  <textarea
                    id="v-msg"
                    rows={3}
                    value={viewing.message}
                    onChange={(e) => setViewing({ ...viewing, message: e.target.value })}
                    placeholder="Anything we should know? (optional)"
                    className="w-full resize-none rounded-lg border border-navy-900/15 px-3.5 py-2.5 text-sm focus:border-navy-900"
                  />
                </div>
                <Button variant="primary" size="md" className="w-full">
                  Request Viewing <span aria-hidden="true">→</span>
                </Button>
              </form>
            )}
          </Reveal>

          <Reveal delay={100} className="rounded-2xl bg-navy-950 p-7 text-white">
            <p className="eyebrow">Confidential</p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Prefer a private tour outside market hours? Our advisors arrange discreet viewings
              seven days a week.
            </p>
            <Button to="/contact" variant="gold" size="sm" className="mt-4">
              Contact the team
            </Button>
          </Reveal>
        </aside>
      </section>

      {similar.length > 0 && (
        <section className="container-x pb-20 sm:pb-24">
          <Reveal className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Keep exploring</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900">
                Similar Properties
              </h2>
            </div>
            <Link
              to="/properties"
              className="hidden text-sm font-semibold text-navy-900 underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gold sm:block"
            >
              View all properties
            </Link>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {similar.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <PropertyCard property={p} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* sticky mobile CTA */}
      <div className="sticky bottom-0 z-40 border-t border-navy-900/10 bg-white/95 px-5 py-3 backdrop-blur-md lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-medium text-slate-body">Asking price</p>
            <p className="text-base font-extrabold text-navy-900">{formatPrice(property.price)}</p>
          </div>
          <a
            href={`tel:${agent.phone.replace(/[^+\d]/g, "")}`}
            className="rounded-lg bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white"
          >
            Contact Agent
          </a>
        </div>
      </div>
    </>
  );
}
