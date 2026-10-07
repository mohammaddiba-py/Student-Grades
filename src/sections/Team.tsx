import { Link } from 'react-router-dom'
import { team } from '../data/properties'
import { MailIcon, PhoneIcon, ArrowRight } from '../components/icons'
import Reveal from '../components/Reveal'

export default function Team() {
  return (
    <section className="section-pad bg-ivory">
      <div className="container-x">
        <Reveal className="mb-12 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="label-eyebrow">Our People</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
              Meet the Team
            </h2>
          </div>
          <Link
            to="/team"
            className="link-underline inline-flex items-center gap-2 text-[15px] font-semibold text-navy"
          >
            View Full Team
            <ArrowRight width={18} height={18} />
          </Link>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.id} delay={(i % 4) * 80}>
              <article className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy/5 transition-all duration-500 hover:shadow-xl hover:shadow-navy/10">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/0 to-navy/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 flex translate-y-3 gap-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Email ${member.name}`}
                      className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-gold hover:text-navy"
                    >
                      <MailIcon width={16} height={16} />
                    </a>
                    <a
                      href={`tel:${member.phone.replace(/[^0-9]/g, '')}`}
                      aria-label={`Call ${member.name}`}
                      className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-gold hover:text-navy"
                    >
                      <PhoneIcon width={16} height={16} />
                    </a>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-lg font-bold tracking-tight text-navy">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gold-dark">
                    {member.role}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
