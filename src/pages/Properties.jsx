import { useMemo, useState } from "react";
import Reveal from "../components/Reveal.jsx";
import PageHero from "../components/PageHero.jsx";
import PropertyCard from "../components/PropertyCard.jsx";
import CTA from "../components/CTA.jsx";
import { properties, propertyTypes, locations, formatPrice } from "../data/properties.js";

const select =
  "w-full rounded-lg border border-navy-900/15 bg-white px-3.5 py-2.5 text-sm text-navy-900 focus:border-navy-900";
const label = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-body";

const sorts = {
  featured: "Featured",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
  "beds-desc": "Most Bedrooms",
  "sqft-desc": "Largest First",
};

const priceUnder = (p, max) => !max || p.price <= max;

export default function Properties() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [sort, setSort] = useState("featured");

  const results = useMemo(() => {
    let list = properties.filter((p) => {
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q);
      return (
        matchesQuery &&
        (!location || p.city === location) &&
        (!type || p.type === type) &&
        priceUnder(p, maxPrice && Number(maxPrice)) &&
        (!beds || p.beds >= Number(beds)) &&
        (!baths || p.baths >= Number(baths))
      );
    });

    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "beds-desc":
        list = [...list].sort((a, b) => b.beds - a.beds);
        break;
      case "sqft-desc":
        list = [...list].sort((a, b) => b.sqft - a.sqft);
        break;
      default:
        list = [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
    }
    return list;
  }, [query, location, type, maxPrice, beds, baths, sort]);

  const reset = () => {
    setQuery("");
    setLocation("");
    setType("");
    setMaxPrice("");
    setBeds("");
    setBaths("");
    setSort("featured");
  };

  const active = query || location || type || maxPrice || beds || baths;

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Our Properties"
        description="Browse our current portfolio of luxury homes, estates and investment opportunities."
      />

      <section className="container-x py-14 sm:py-16">
        <Reveal className="rounded-2xl border border-navy-900/10 bg-ivory/70 p-5 sm:p-7">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6"
            role="search"
            aria-label="Property search"
          >
            <div className="sm:col-span-2">
              <label htmlFor="q" className={label}>
                Search
              </label>
              <input
                id="q"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Name, location, type…"
                className={select}
              />
            </div>
            <div>
              <label htmlFor="loc" className={label}>
                Location
              </label>
              <select id="loc" value={location} onChange={(e) => setLocation(e.target.value)} className={select}>
                <option value="">All locations</option>
                {locations.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="type" className={label}>
                Type
              </label>
              <select id="type" value={type} onChange={(e) => setType(e.target.value)} className={select}>
                <option value="">All types</option>
                {propertyTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="maxp" className={label}>
                Price up to
              </label>
              <select id="maxp" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className={select}>
                <option value="">Any price</option>
                <option value="2000000">$2 Million</option>
                <option value="3000000">$3 Million</option>
                <option value="4000000">$4 Million</option>
                <option value="5000000">$5 Million</option>
              </select>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label htmlFor="beds" className={label}>
                  Beds
                </label>
                <select id="beds" value={beds} onChange={(e) => setBeds(e.target.value)} className={select}>
                  <option value="">Any</option>
                  {[3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n}+
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="baths" className={label}>
                  Baths
                </label>
                <select id="baths" value={baths} onChange={(e) => setBaths(e.target.value)} className={select}>
                  <option value="">Any</option>
                  {[2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n}+
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="sort" className={label}>
                  Sort
                </label>
                <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)} className={select}>
                  {Object.entries(sorts).map(([v, l]) => (
                    <option key={v} value={v}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </form>
        </Reveal>

        <div className="mt-10 flex items-center justify-between gap-4">
          <p className="text-sm text-slate-body" role="status">
            <span className="font-bold text-navy-900">{results.length}</span>{" "}
            {results.length === 1 ? "property" : "properties"}
            {active && " match your search"}
          </p>
          {active && (
            <button
              type="button"
              onClick={reset}
              className="text-sm font-semibold text-navy-900 underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gold"
            >
              Clear filters
            </button>
          )}
        </div>

        {results.length ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {results.map((p, i) => (
              <Reveal key={p.slug} delay={Math.min(i, 5) * 60}>
                <PropertyCard property={p} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-navy-900/20 py-20 text-center">
            <p className="text-lg font-bold text-navy-900">No properties match those filters</p>
            <p className="mt-2 text-sm text-slate-body">
              Try widening your price range or clearing a filter.
            </p>
          </div>
        )}
      </section>

      <CTA />
    </>
  );
}
