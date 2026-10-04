import Reveal from "./Reveal.jsx";
import Button from "./Button.jsx";

export default function CTA() {
  return (
    <section className="container-x pb-20 sm:pb-24 lg:pb-28">
      <Reveal className="relative overflow-hidden rounded-2xl bg-mist px-7 py-10 sm:px-12 sm:py-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
        />
        <div className="relative flex flex-col items-start gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-navy-900 text-gold shadow-[0_14px_30px_-12px_rgba(11,31,58,0.6)] sm:h-[72px] sm:w-[72px]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-8 w-8"
                aria-hidden="true"
              >
                <circle cx="8" cy="14" r="4.2" />
                <path strokeLinecap="round" d="M11.3 10.7 19 3m-2.5 0H19v2.5M16 6.5l2 2" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy-900 sm:text-[1.7rem]">
                Ready to Find Your Perfect Property?
              </h2>
              <p className="mt-2 text-sm text-slate-body sm:text-[15px]">
                Let our experts guide you to the right home or investment.
              </p>
            </div>
          </div>
          <Button to="/contact" variant="primary" size="lg" className="shrink-0">
            Get in Touch <span aria-hidden="true">→</span>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
