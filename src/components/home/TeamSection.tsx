import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { teamMembers } from '../../data/properties'

export default function TeamSection() {
  return (
    <section className="py-20 lg:py-32 bg-ivory">
      <div className="container-px mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-label mb-4 block"
          >
            Our People
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-navy text-4xl lg:text-5xl"
          >
            Meet the Team
          </motion.h2>
        </div>

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
                {/* Contact links on hover */}
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

        <div className="text-center mt-12">
          <Link
            to="/team"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-champagne-dark transition-colors duration-300 focus-gold"
          >
            View Full Team
          </Link>
        </div>
      </div>
    </section>
  )
}
