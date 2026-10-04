import { useState } from "react";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";
import { CONTACT } from "../data/site.js";

const inputCls =
  "w-full rounded-lg border border-navy-900/15 bg-white px-3.5 py-3 text-sm focus:border-navy-900";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "Buying", message: "" });
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's Start the Conversation"
        description="Tell us what you're looking for — a first home, a trophy asset or somewhere in between."
      />

      <section className="container-x grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
        <Reveal>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy-900">Contact Details</h2>
          <ul className="mt-6 space-y-6 text-sm">
            <li className="flex gap-4">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mist text-navy-900" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4.5 w-4.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </span>
              <div>
                <p className="font-bold text-navy-900">Phone</p>
                <a href={CONTACT.phoneHref} className="mt-1 block text-slate-body transition-colors hover:text-navy-900">
                  {CONTACT.phone}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mist text-navy-900" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4.5 w-4.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18v12H3zm0 0 9 7 9-7" />
                </svg>
              </span>
              <div>
                <p className="font-bold text-navy-900">Email</p>
                <a href={`mailto:${CONTACT.email}`} className="mt-1 block text-slate-body transition-colors hover:text-navy-900">
                  {CONTACT.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mist text-navy-900" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4.5 w-4.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 0c0 7.142-3 11.25-3 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Zm-6 8.25c3.6-4.5 4.5-7.5 4.5-11.25" />
                </svg>
              </span>
              <div>
                <p className="font-bold text-navy-900">Office</p>
                <p className="mt-1 text-slate-body">{CONTACT.address}</p>
                <p className="mt-1 text-slate-body">{CONTACT.hours}</p>
              </div>
            </li>
          </ul>
          <p className="mt-8 rounded-xl bg-ivory p-5 text-sm leading-relaxed text-slate-body">
            Prefer to meet in person? Our Austin office welcomes walk-in consultations every
            weekday morning — no appointment required.
          </p>
        </Reveal>

        <Reveal delay={120}>
          {sent ? (
            <div className="flex h-full min-h-80 flex-col items-center justify-center rounded-2xl border border-navy-900/10 bg-ivory/70 p-10 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-2xl text-gold" aria-hidden="true">✓</span>
              <h2 className="mt-5 text-2xl font-extrabold text-navy-900">Message sent</h2>
              <p className="mt-2 max-w-sm text-sm text-slate-body">
                Thank you, {form.name.split(" ")[0] || "friend"} — an advisor will reply within one
                business day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-2xl border border-navy-900/10 bg-white p-7 shadow-[0_30px_60px_-40px_rgba(11,31,58,0.4)] sm:p-9"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-body">
                    Full name
                  </label>
                  <input id="c-name" required value={form.name} onChange={set("name")} className={inputCls} placeholder="Jane Cooper" />
                </div>
                <div>
                  <label htmlFor="c-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-body">
                    Email
                  </label>
                  <input id="c-email" type="email" required value={form.email} onChange={set("email")} className={inputCls} placeholder="jane@example.com" />
                </div>
                <div>
                  <label htmlFor="c-phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-body">
                    Phone <span className="font-normal normal-case text-slate-body/60">(optional)</span>
                  </label>
                  <input id="c-phone" type="tel" value={form.phone} onChange={set("phone")} className={inputCls} placeholder="(555) 000-0000" />
                </div>
                <div>
                  <label htmlFor="c-interest" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-body">
                    I'm interested in
                  </label>
                  <select id="c-interest" value={form.interest} onChange={set("interest")} className={inputCls}>
                    <option>Buying</option>
                    <option>Selling</option>
                    <option>Investing</option>
                    <option>Advisory</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="c-msg" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-body">
                    Message
                  </label>
                  <textarea
                    id="c-msg"
                    rows={5}
                    required
                    value={form.message}
                    onChange={set("message")}
                    className={`${inputCls} resize-none`}
                    placeholder="Tell us about the property or portfolio you have in mind…"
                  />
                </div>
              </div>
              <Button variant="primary" size="lg" className="mt-6 w-full sm:w-auto">
                Send Message <span aria-hidden="true">→</span>
              </Button>
            </form>
          )}
        </Reveal>
      </section>
    </>
  );
}
