import Reveal from "./Reveal.jsx";
import Carousel from "./Carousel.jsx";
import PropertyCard from "./PropertyCard.jsx";
import { properties } from "../data/properties.js";

export default function FeaturedProperties() {
  const featured = properties.filter((p) => p.featured);

  return (
    <section id="featured" className="bg-ivory/60 py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="eyebrow">Featured</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-navy-900 sm:text-[2.75rem]">
            Featured Properties
          </h2>
        </Reveal>

        <Reveal delay={140} className="mt-12">
          <Carousel ariaLabel="Featured properties carousel" className="px-1 md:px-6">
            {featured.map((p) => (
              <PropertyCard
                key={p.slug}
                property={p}
                className="w-[80vw] shrink-0 snap-start sm:w-[46vw] lg:w-[31vw] xl:w-[390px]"
              />
            ))}
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
