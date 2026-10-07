import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { PhoneIcon, MailIcon, MapPin, ArrowRight, CheckIcon } from '../components/icons'

const INFO = [
  {
    icon: PhoneIcon,
    label: 'Phone',
    value: '(555) 246-7890',
    href: 'tel:+15552467890',
  },
  {
    icon: MailIcon,
    label: 'Email',
    value: 'hello@horizonproperties.com',
    href: 'mailto:hello@horizonproperties.com',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: '1200 Architectural Way, Suite 400, Austin, Texas 78701, USA',
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Contact"
          title="Get in Touch"
          subtitle="Tell us about the home you’re looking for or the property you’d like to sell. Our advisors will respond within one business day."
        />

        <section className="section-pad bg-white">
          <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Info */}
            <Reveal className="lg:col-span-5">
              <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                Let’s start a conversation
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-navy/60">
                Whether you’re buying, selling, or simply exploring, we’d love
                to hear from you. Reach out through any channel below.
              </p>
              <div className="mt-8 space-y-5">
                {INFO.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ivory text-gold-dark ring-1 ring-navy/5">
                      <item.icon width={20} height={20} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy/50">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block text-[16px] font-medium text-navy transition-colors hover:text-gold-dark"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-[16px] font-medium text-navy">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={120} className="lg:col-span-7">
              <div className="rounded-2xl bg-ivory p-6 ring-1 ring-navy/5 sm:p-8">
                {submitted ? (
                  <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-gold/15 text-gold-dark">
                      <CheckIcon width={32} height={32} />
                    </span>
                    <h3 className="mt-5 font-display text-2xl font-bold text-navy">
                      Thank you!
                    </h3>
                    <p className="mt-2 max-w-sm text-navy/60">
                      Your message has been received. A Horizon advisor will be
                      in touch within one business day.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn-ghost mt-6"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    className="space-y-5"
                    onSubmit={(e) => {
                      e.preventDefault()
                      setSubmitted(true)
                    }}
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="First name" name="firstName" required />
                      <Field label="Last name" name="lastName" required />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Email" name="email" type="email" required />
                      <Field label="Phone" name="phone" type="tel" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-navy/50">
                        I’m interested in
                      </label>
                      <select
                        name="interest"
                        className="mt-2 w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-sm text-navy focus:border-gold focus:outline-none"
                      >
                        <option>Buying a property</option>
                        <option>Selling a property</option>
                        <option>Investment advisory</option>
                        <option>Property valuation</option>
                        <option>Relocation services</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-navy/50">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        placeholder="Tell us a little about what you’re looking for…"
                        className="mt-2 w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:border-gold focus:outline-none"
                      />
                    </div>
                    <button type="submit" className="btn-navy w-full sm:w-auto">
                      Send Message
                      <ArrowRight width={18} height={18} />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-navy/50">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:border-gold focus:outline-none"
      />
    </div>
  )
}
