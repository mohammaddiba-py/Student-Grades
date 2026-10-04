import Reveal from "./Reveal.jsx";
import { services } from "../data/services.js";

export default function Services({ compact = false }) {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="eyebrow">What We Do</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-navy-900 sm:text-[2.75rem]">
            Our Services
          </h2>
          {!compact && (
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-body">
              Full-service representation across every stage of buying, selling and growing a
              real estate portfolio.
            </p>
          )}
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 70}
              className="group relative overflow-hidden rounded-xl border border-navy-900/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_24px_48px_-24px_rgba(11,31,58,0.35)]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100"
              />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mist text-navy-900 transition-colors duration-300 group-hover:bg-navy-900 group-hover:text-gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy-900">{s.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-body">{s.summary}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
