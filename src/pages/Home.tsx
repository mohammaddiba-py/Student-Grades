import Hero from '../components/home/Hero'
import AboutSection from '../components/home/AboutSection'
import FeaturedProperties from '../components/home/FeaturedProperties'
import ServicesSection from '../components/home/ServicesSection'
import WhyChooseSection from '../components/home/WhyChooseSection'
import TeamSection from '../components/home/TeamSection'
import CTASection from '../components/home/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedProperties />
      <ServicesSection />
      <WhyChooseSection />
      <TeamSection />
      <CTASection />
    </>
  )
}
