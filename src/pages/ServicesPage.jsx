import PageHero from "../components/PageHero.jsx";
import Services from "../components/Services.jsx";
import CTA from "../components/CTA.jsx";
import Reveal from "../components/Reveal.jsx";
import { services } from "../data/services.js";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Our Services"
        description="Full-service representation across every stage of buying, selling and growing a real estate portfolio."
      />

      <Services compact />

      <section className="bg-ivory/60 py-20 sm:py-24">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 60}
              className="rounded-xl border border-navy-900/10 bg-white p-7 sm:p-9"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-sm font-semibold text-gold">0{i + 1}</span>
                <div>
                  <h2 className="text-xl font-bold text-navy-900">{s.title}</h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-body">{s.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
