import Button from "./Button.jsx";
import { HERO_IMAGE } from "../data/properties.js";

const stats = [
  { value: "$1.2B+", text: "In premium property sold across our prime markets" },
  { value: "850+", text: "Exceptional homes matched with delighted clients" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center overflow-hidden bg-navy-950 pt-32 text-center">
      <div className="animate-hero-settle absolute inset-0" aria-hidden="true">
        <img
          src={HERO_IMAGE}
          alt=""
          fetchpriority="high"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/30 to-navy-950/45" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6">
        <h1
          className="animate-hero-rise text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[4.2rem]"
          style={{ animationDelay: "100ms" }}
        >
          Discover Exceptional
          <br />
          Homes &amp; Investments
        </h1>
        <p
          className="animate-hero-rise mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          style={{ animationDelay: "260ms" }}
        >
          Premium properties in prime locations. Find your dream home or the perfect investment
          with confidence.
        </p>
        <div
          className="animate-hero-rise mt-9 flex flex-wrap items-center justify-center gap-3.5"
          style={{ animationDelay: "420ms" }}
        >
          <Button to="/properties" variant="gold" size="lg">
            Browse Properties
          </Button>
          <Button to="/contact" variant="outline-light" size="lg">
            Talk to an Advisor
          </Button>
        </div>
      </div>

      {/* floating stat chips, like the reference */}
      <div className="absolute right-10 top-[40%] z-10 hidden w-60 flex-col gap-4 text-left xl:flex">
        {stats.map((s, i) => (
          <div
            key={s.value}
            className="animate-hero-rise rounded-2xl border border-white/20 bg-navy-950/35 p-5 backdrop-blur-md"
            style={{ animationDelay: `${560 + i * 140}ms` }}
          >
            <p className="font-display text-3xl text-white">{s.value}</p>
            <p className="mt-2 text-xs leading-relaxed text-white/70">{s.text}</p>
          </div>
        ))}
      </div>

      {/* leaves generous room for the architecture below the copy, like the reference */}
      <div className="relative z-10 flex-1" aria-hidden="true" />
      <div
        className="relative z-10 h-0 w-full"
        aria-hidden="true"
        style={{ marginBottom: "min(30vh, 320px)" }}
      />

      {/* signature display wordmark across the hero, echoing the reference */}
      <p
        aria-hidden="true"
        className="animate-hero-rise pointer-events-none absolute inset-x-0 bottom-[13vh] z-[5] select-none whitespace-nowrap text-center font-display text-[clamp(4.5rem,17.5vw,15rem)] leading-none text-white/85"
        style={{ animationDelay: "500ms" }}
      >
        Horizon
      </p>
      <div
        className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-navy-950/70 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
