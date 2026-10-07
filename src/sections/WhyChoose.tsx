import Reveal from '../components/Reveal'

const REASONS = [
  {
    number: '20+',
    label: 'Years of Experience',
    text: 'Two decades of curated luxury transactions and trusted advisory.',
  },
  {
    number: '$1.4B+',
    label: 'Property Sold',
    text: 'Over a billion dollars in premium real estate placed with the right owners.',
  },
  {
    number: '500+',
    label: 'Happy Clients',
    text: 'A network of discerning buyers, sellers, and investors worldwide.',
  },
  {
    number: '98%',
    label: 'Client Retention',
    text: 'Clients return to Horizon for every chapter of their property journey.',
  },
]

export default function WhyChoose() {
  return (
    <section className="section-pad bg-navy text-white">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <span className="label-eyebrow">Why Horizon</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Why Choose Horizon
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-white/65">
              We pair an architect’s eye for property with an investor’s
              discipline — so every decision you make is informed, confident,
              and considered.
            </p>
            <div className="mt-8 h-px w-24 bg-gold" />
          </Reveal>

          <div className="grid gap-px sm:grid-cols-2 lg:col-span-7">
            {REASONS.map((r, i) => (
              <Reveal
                key={r.label}
                delay={(i % 2) * 100}
                className="bg-navy-800 p-7"
              >
                <p className="font-display text-4xl font-bold text-gold">
                  {r.number}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {r.label}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/55">
                  {r.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
