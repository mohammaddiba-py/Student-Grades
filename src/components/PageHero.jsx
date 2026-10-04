import Reveal from "./Reveal.jsx";

/** Compact navy band at the top of interior pages (keeps the transparent header legible). */
export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-14 pt-32 text-center sm:pb-16 sm:pt-36 lg:pb-20 lg:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-navy-700/40 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-[120px]"
      />
      <Reveal className="container-x relative">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
            {description}
          </p>
        )}
      </Reveal>
    </section>
  );
}
