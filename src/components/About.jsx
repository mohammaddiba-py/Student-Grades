import Reveal from "./Reveal.jsx";
import Button from "./Button.jsx";
import { ABOUT_MAIN, ABOUT_SECONDARY } from "../data/properties.js";

export default function About() {
  return (
    <section className="container-x grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28">
      <Reveal>
        <p className="eyebrow">About Us</p>
        <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-navy-900 sm:text-[2.75rem]">
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

      <Reveal delay={140} className="relative">
        <div className="grid grid-cols-[1.6fr_1fr] gap-4">
          <div className="zoom-frame rounded-2xl">
            <img
              src={ABOUT_MAIN}
              alt="Modern luxury villa with pool and palm trees"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl"
            />
          </div>
          <div className="zoom-frame rounded-2xl">
            <img
              src={ABOUT_SECONDARY}
              alt="Sunlit interior of a luxury residence"
              loading="lazy"
              className="aspect-auto h-full min-h-56 w-full rounded-2xl"
            />
          </div>
        </div>

        <a
          href="#featured"
          aria-label="See featured properties"
          className="group absolute -bottom-6 left-1/2 inline-flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-white text-navy-900 shadow-[0_16px_36px_-14px_rgba(11,31,58,0.5)] ring-1 ring-navy-900/10 transition-all duration-300 hover:bg-navy-900 hover:text-gold sm:-bottom-7 sm:left-auto sm:right-10 sm:translate-x-0"
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
    </section>
  );
}
