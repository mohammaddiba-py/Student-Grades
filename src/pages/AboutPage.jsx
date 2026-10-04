import PageHero from "../components/PageHero.jsx";
import About from "../components/About.jsx";
import WhyChoose from "../components/WhyChoose.jsx";
import CTA from "../components/CTA.jsx";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Boutique Firm with a Global Standard"
        description="Founded to bring discretion, craft and intelligence to luxury real estate."
      />

      <About />

      <section className="bg-ivory/60 py-20 sm:py-24">
        <div className="container-x">
          <Reveal className="text-center">
            <p className="eyebrow">Our Values</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-navy-900 sm:text-[2.75rem]">
              What Guides Us
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              {
                title: "Integrity",
                text: "Every number, every disclosure, every promise — made in full and kept in full.",
              },
              {
                title: "Transparency",
                text: "You see what we see: the data, the comparables, and exactly how we work.",
              },
              {
                title: "Client Satisfaction",
                text: "Our measure of success is whether you'd advise your closest friend to call us.",
              },
            ].map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 90}
                className="rounded-xl border border-navy-900/10 bg-white p-7"
              >
                <span className="font-mono text-sm font-semibold text-gold">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-bold text-navy-900">{v.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-body">{v.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140} className="mt-14 text-center">
            <Button to="/team" variant="outline-navy" size="md">
              Meet the Team <span aria-hidden="true">→</span>
            </Button>
          </Reveal>
        </div>
      </section>

      <WhyChoose />
      <CTA />
    </>
  );
}
