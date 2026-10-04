import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { pageImages } from '../data/properties'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '(555) 246-7890', href: 'tel:5552467890' },
    { icon: Mail, label: 'Email', value: 'info@horizonproperties.com', href: 'mailto:info@horizonproperties.com' },
    { icon: MapPin, label: 'Office', value: '1200 Architectural Blvd, Suite 500, Beverly Hills, CA 90210', href: null },
  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] overflow-hidden">
        <img
          src={pageImages.contact}
          alt="Luxury property"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-navy/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <span className="section-label mb-4 block">Get In Touch</span>
          <h1 className="font-display font-bold text-white text-4xl lg:text-5xl">Contact Us</h1>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="container-px mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="section-label mb-4 block">Contact</span>
              <h2 className="font-display font-bold text-navy text-3xl lg:text-4xl mb-6">
                Let's Start a Conversation
              </h2>
              <p className="text-navy/60 text-base leading-relaxed mb-10">
                Whether you're looking for your dream home, a strategic investment, or expert advice on the luxury market, our team is ready to help. Reach out and we'll respond within 24 hours.
              </p>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-warm-gray flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-champagne" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-navy/50 mb-1">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-navy hover:text-champagne-dark transition-colors">{info.value}</a>
                      ) : (
                        <p className="text-navy">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl bg-warm-gray p-6 lg:p-10"
            >
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="w-16 h-16 rounded-full bg-champagne/15 flex items-center justify-center mb-6">
                    <Send className="w-7 h-7 text-champagne" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-bold text-navy text-xl mb-2">Message Sent</h3>
                  <p className="text-navy/60 text-sm">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium uppercase tracking-wider text-navy/50 mb-2">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-arch-gray bg-white px-4 py-3 text-sm text-navy outline-none focus:border-champagne/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium uppercase tracking-wider text-navy/50 mb-2">Phone</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-arch-gray bg-white px-4 py-3 text-sm text-navy outline-none focus:border-champagne/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-navy/50 mb-2">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-arch-gray bg-white px-4 py-3 text-sm text-navy outline-none focus:border-champagne/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium uppercase tracking-wider text-navy/50 mb-2">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-arch-gray bg-white px-4 py-3 text-sm text-navy outline-none focus:border-champagne/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wider text-navy/50 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-arch-gray bg-white px-4 py-3 text-sm text-navy outline-none focus:border-champagne/50 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-navy px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-navy-700 focus-gold"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
