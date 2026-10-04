import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { teamMembers, pageImages } from '../data/properties'
import CTASection from '../components/home/CTASection'

export default function Team() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] overflow-hidden">
        <img
          src={pageImages.team}
          alt="Luxury property"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-navy/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <span className="section-label mb-4 block">Our People</span>
          <h1 className="font-display font-bold text-white text-4xl lg:text-5xl">Meet the Team</h1>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="container-px mx-auto max-w-[1400px]">
          <p className="text-navy/60 text-lg text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            Our advisors bring decades of combined experience and a shared passion for architecture, design, and the art of finding the perfect home.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member, i) => (
              <motion.article
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-5">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Email ${member.name}`}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-champagne hover:text-navy transition-all duration-300 focus-gold"
                    >
                      <Mail className="w-4 h-4" strokeWidth={1.5} />
                    </a>
                    <a
                      href={`tel:${member.phone.replace(/\D/g, '')}`}
                      aria-label={`Call ${member.name}`}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-champagne hover:text-navy transition-all duration-300 focus-gold"
                    >
                      <Phone className="w-4 h-4" strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
                <h3 className="font-display font-bold text-navy text-lg">{member.name}</h3>
                <p className="text-champagne-dark text-sm mt-1">{member.role}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
