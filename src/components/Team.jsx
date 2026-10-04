import Reveal from "./Reveal.jsx";
import { team } from "../data/team.js";

export default function Team() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="eyebrow">Our People</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-navy-900 sm:text-[2.75rem]">
            Meet the Team
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 80} className="group">
              <div className="zoom-frame rounded-2xl bg-mist">
                <img
                  src={member.photo}
                  alt={`Portrait of ${member.name}, ${member.role}`}
                  loading="lazy"
                  className="aspect-[3/3.5] w-full rounded-2xl grayscale-[15%] transition-all duration-700 group-hover:grayscale-0"
                />
              </div>
              <div className="mt-5 text-center">
                <h3 className="text-lg font-bold text-navy-900">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-gold">{member.role}</p>
                <div className="mt-3.5 flex items-center justify-center gap-2 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Email ${member.name}`}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-navy-900/15 text-navy-900/70 transition-colors hover:border-navy-900 hover:text-navy-900"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-3.5 w-3.5" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18v12H3z m0 0 9 7 9-7" />
                    </svg>
                  </a>
                  <a
                    href={`tel:${member.phone.replace(/[^+\d]/g, "")}`}
                    aria-label={`Call ${member.name}`}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-navy-900/15 text-navy-900/70 transition-colors hover:border-navy-900 hover:text-navy-900"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-3.5 w-3.5" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
