import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/icons'
import Reveal from '../components/Reveal'

const MAIN_IMG =
  'https://images.unsplash.com/photo-1600585154340-be6161a68a94?auto=format&fit=crop&w=1200&q=80'
const SECONDARY_IMG =
  'https://images.unsplash.com/photo-1600607687939-ce8da625f1c0?auto=format&fit=crop&w=800&q=80'

export default function About() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <Reveal>
            <span className="label-eyebrow">About Us</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Who We Are
            </h2>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-navy/65">
              At Horizon Properties, we connect people with extraordinary homes
              and smart investments. Integrity, transparency, and client
              satisfaction are at the heart of everything we do.
            </p>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-navy/55">
              From architectural estates to income-generating portfolios, our
              advisors bring deep local knowledge and a global network to every
              transaction — guiding you with clarity at every step.
            </p>
            <Link to="/about" className="btn-navy mt-8">
              Learn More
              <ArrowRight width={18} height={18} />
            </Link>
          </Reveal>

          {/* Image composition */}
          <Reveal delay={120}>
            <div className="relative">
              <div className="group overflow-hidden rounded-2xl">
                <img
                  src={MAIN_IMG}
                  alt="Modern two-story home with palm trees and glass balconies"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-8 -left-6 hidden w-44 overflow-hidden rounded-xl shadow-xl ring-4 ring-white sm:block lg:w-52">
                <img
                  src={SECONDARY_IMG}
                  alt="Secondary architectural property view"
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
              {/* circular arrow button */}
              <Link
                to="/properties"
                aria-label="Explore our properties"
                className="group/btn absolute -right-4 -top-4 grid h-16 w-16 place-items-center rounded-full bg-navy text-white shadow-xl transition-all duration-300 hover:bg-gold hover:text-navy lg:-right-6"
              >
                <ArrowRight
                  width={22}
                  height={22}
                  className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
