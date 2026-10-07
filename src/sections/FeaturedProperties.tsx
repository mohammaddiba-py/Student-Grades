import { Link } from 'react-router-dom'
import { properties } from '../data/properties'
import PropertyCarousel from '../components/PropertyCarousel'
import { ArrowRight } from '../components/icons'
import Reveal from '../components/Reveal'

export default function FeaturedProperties() {
  const featured = properties.filter((p) => p.featured)
  return (
    <section className="section-pad bg-ivory">
      <div className="container-x">
        <Reveal className="mb-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="label-eyebrow">Featured</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
              Featured Properties
            </h2>
          </div>
          <Link
            to="/properties"
            className="link-underline inline-flex items-center gap-2 text-[15px] font-semibold text-navy"
          >
            View All Properties
            <ArrowRight width={18} height={18} />
          </Link>
        </Reveal>
      </div>
      <div className="container-x">
        <PropertyCarousel properties={featured} />
      </div>
    </section>
  )
}
