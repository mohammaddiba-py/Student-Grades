import Reveal from "./Reveal.jsx";
import { properties } from "../data/properties.js";

const pillars = [
  {
    icon: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 5v7m0-10v1",
    title: "Market Intelligence",
    text: "Pricing and negotiation backed by live, hyper-local data — never guesswork.",
  },
  {
    icon: "M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10Z",
    title: "Client First, Always",
    text: "Advice with no agenda. We measure success in decades of relationships.",
  },
  {
    icon: "M5 12l4 4L19 6",
    title: "Discreet & Precise",
    text: "Strict confidentiality and rigorous process, from appraisal to closing.",
  },
  {
    icon: "M21 12a9 9 0 1 1-9-9m9 9h-9V3",
    title: "Global Reach",
    text: "An international network of buyers, developers and partner advisors.",
  },
];

const stats = [
  { value: "$1.2B+", label: "In property sold" },
  { value: "850+", label: "Families placed" },
  { value: "18", label: "Years of experience" },
  { value: "98%", label: "Client satisfaction" },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-navy-700/40 blur-[140px]"
      />
      <div className="container-x relative">
        <Reveal className="text-center">
          <p className="eyebrow">Why Horizon</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-[2.75rem]">
            Why Choose Horizon Properties
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 80}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-7 transition-colors duration-300 hover:border-gold/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{p.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <dl className="mt-14 grid grid-cols-2 gap-y-10 border-t border-white/10 pt-12 text-center lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block text-3xl font-extrabold tracking-tight text-gold sm:text-4xl">
                    {s.value}
                  </span>
                  <span className="mt-2 block text-sm text-white/60">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
