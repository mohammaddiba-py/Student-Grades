import Reveal from "./Reveal.jsx";
import Button from "./Button.jsx";
import { team } from "../data/team.js";

/** Dark editorial band, like the reference: portrait strip left, serif heading right. */
export default function Team() {
  return (
    <section className="bg-navy-950 py-20 text-white sm:py-24 lg:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal className="order-2 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:order-1">
          {team.map((member) => (
            <div key={member.name} className="group relative overflow-hidden rounded-xl">
              <img
                src={member.photo}
                alt={`Portrait of ${member.name}, ${member.role}`}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-3.5">
                <p className="text-[13px] font-semibold leading-tight">{member.name}</p>
                <p className="mt-1 text-[11px] text-white/65">{member.role}</p>
              </div>
              <a
                href={`mailto:${member.email}`}
                aria-label={`Email ${member.name}`}
                className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-navy-950/40 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:border-gold hover:text-gold focus-visible:opacity-100 group-hover:opacity-100"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-3.5 w-3.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18v12H3z m0 0 9 7 9-7" />
                </svg>
              </a>
            </div>
          ))}
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <p className="eyebrow">Our People</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
            Meet Our Expert Team
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70">
            A team of passionate professionals committed to helping you find the perfect home or
            investment — with discretion, precision and genuine care.
          </p>
          <Button to="/team" variant="outline-light" size="md" className="mt-8">
            View All
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
