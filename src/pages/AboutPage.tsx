import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageHeader from '../components/PageHeader'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import { ArrowRight, CheckIcon } from '../components/icons'

const VALUES = [
  'Integrity & transparency in every transaction',
  'Discretion for high-profile and private clients',
  'Data-driven market intelligence',
  'A global network of qualified buyers',
]

const STATS = [
  { number: '20+', label: 'Years in luxury real estate' },
  { number: '$1.4B+', label: 'In property transacted' },
  { number: '500+', label: 'Clients served worldwide' },
  { number: '98%', label: 'Client retention rate' },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="About Us"
          title="Who We Are"
          subtitle="Horizon Properties is a boutique luxury real estate advisory built on architectural taste, market discipline, and an unwavering commitment to the people we represent."
        />

        <section className="section-pad bg-white">
          <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="label-eyebrow">Our Story</span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                A different kind of agency
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-navy/65">
                Founded by a team of architects, investors, and advisors,
                Horizon Properties was built on a simple conviction: that
                buying or selling a home deserves the same care as designing
                one. We approach every property as a singular piece of
                architecture and every client relationship as a long-term
                partnership.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-navy/55">
                From a first conversation to the final signature, our advisors
                bring clarity, candor, and a calm, considered process — so the
                experience feels as refined as the homes themselves.
              </p>
              <Link to="/contact" className="btn-navy mt-8">
                Work With Us
                <ArrowRight width={18} height={18} />
              </Link>
            </Reveal>
            <Reveal delay={120} className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80"
                alt="Modern luxury home"
                loading="lazy"
                className="aspect-[3/4] w-full rounded-2xl object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
                alt="Architectural property"
                loading="lazy"
                className="mt-8 aspect-[3/4] w-full rounded-2xl object-cover"
              />
            </Reveal>
          </div>
        </section>

        {/* Values */}
        <section className="section-pad bg-ivory">
          <div className="container-x">
            <Reveal className="mb-12 max-w-2xl">
              <span className="label-eyebrow">Our Values</span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                What we stand for
              </h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              {VALUES.map((v, i) => (
                <Reveal
                  key={v}
                  delay={(i % 2) * 80}
                  className="flex items-start gap-4 rounded-2xl bg-white p-7 ring-1 ring-navy/5"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy text-gold">
                    <CheckIcon width={20} height={20} />
                  </span>
                  <p className="text-lg font-medium text-navy">{v}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-navy py-16 text-white">
          <div className="container-x grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="text-center">
                <p className="font-display text-4xl font-bold text-gold sm:text-5xl">
                  {s.number}
                </p>
                <p className="mt-2 text-sm text-white/60">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
