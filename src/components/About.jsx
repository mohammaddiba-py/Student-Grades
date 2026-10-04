import Reveal from "./Reveal.jsx";
import Button from "./Button.jsx";
import { ABOUT_MAIN } from "../data/properties.js";

const highlights = [
  {
    title: "Expert Guidance",
    text: "Our seasoned advisors provide professional service and discreet representation on every transaction.",
  },
  {
    title: "Wide Property Selection",
    text: "From landmark estates to design-led city apartments, our portfolio spans the entire market.",
  },
];

export default function About() {
  return (
    <section className="container-x grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-[0.95fr_1.1fr_0.85fr] lg:gap-14 lg:py-28">
      <Reveal>
        <p className="eyebrow">About Us</p>
        <h2 className="mt-4 font-display text-4xl tracking-tight text-navy-900 sm:text-[2.75rem]">
          Who We Are
        </h2>
        <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-slate-body">
          At Horizon Properties, we connect people with extraordinary homes and smart
          investments. Integrity, transparency, and client satisfaction are at the heart of
          everything we do.
        </p>
        <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-body">
          From first consultation to closing day, our advisors bring market intelligence and a
          personal, discreet approach to every transaction.
        </p>
        <Button to="/about" variant="primary" size="md" className="mt-8">
          Learn More <span aria-hidden="true">→</span>
        </Button>
      </Reveal>

      <Reveal delay={120} className="relative">
        <div className="zoom-frame rounded-2xl">
          <img
            src={ABOUT_MAIN}
            alt="Modern luxury villa with pool and palm trees"
            loading="lazy"
            className="aspect-[3/3.2] w-full rounded-2xl"
          />
        </div>

        <a
          href="#featured"
          aria-label="See featured properties"
          className="group absolute -bottom-6 left-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-navy-900 shadow-[0_16px_36px_-14px_rgba(11,31,58,0.5)] ring-1 ring-navy-900/10 transition-all duration-300 hover:bg-navy-900 hover:text-gold"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </Reveal>

      <Reveal delay={220}>
        <ul className="space-y-8">
          {highlights.map((h) => (
            <li key={h.title} className="border-t border-navy-900/10 pt-6">
              <h3 className="text-base font-bold text-navy-900">{h.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-body">{h.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-9 flex items-center gap-4 rounded-2xl border border-navy-900/10 bg-white p-4 shadow-[0_18px_40px_-28px_rgba(11,31,58,0.4)]">
          <div className="flex -space-x-2.5" aria-hidden="true">
            {["JM", "AR", "SK"].map((initials, i) => (
              <span
                key={initials}
                className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-[10px] font-bold ring-2 ring-white ${
                  i === 0 ? "bg-navy-900 text-gold" : i === 1 ? "bg-gold text-navy-900" : "bg-mist text-navy-900"
                }`}
              >
                {initials}
              </span>
            ))}
          </div>
          <div>
            <p className="font-display text-lg leading-none text-navy-900">
              4.9 <span className="text-xs text-slate-body">/ 5</span>
            </p>
            <p className="mt-1.5 text-xs text-slate-body">Client rating · 850+ verified reviews</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
