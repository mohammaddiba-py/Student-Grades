import Reveal from "./Reveal.jsx";

const VIDEO_SRC =
  "https://media.base44.com/videos/public/6ac2a85c77614d425ddf6001/5828eca0f_.mp4";

/**
 * Full-width cinematic film strip. The video element is always mounted but
 * `preload="metadata"` keeps the network cost minimal until autoplay kicks in.
 */
export default function VideoSection() {
  return (
    <section className="bg-navy-950 py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">The Horizon Film</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-white sm:text-[2.75rem]">
            Step Inside Our Homes
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-white/70">
            One continuous journey from the terrace at sunset, through the glass, and into the
            spaces our clients call home.
          </p>
        </Reveal>

        <Reveal delay={140} className="mt-12">
          <div className="relative overflow-hidden rounded-2xl shadow-[0_40px_90px_-40px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
            <video
              className="aspect-video w-full object-cover"
              src={VIDEO_SRC}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Cinematic tour — continuous camera move from the exterior terrace through the glass entrance into the living room"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"
            />
          </div>
          <p className="mt-5 text-center text-xs font-medium uppercase tracking-[0.25em] text-white/45">
            Lakeside Modern Villa — Architectural Film
          </p>
        </Reveal>
      </div>
    </section>
  );
}
