import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../sections/Hero'
import About from '../sections/About'
import FeaturedProperties from '../sections/FeaturedProperties'
import Services from '../sections/Services'
import WhyChoose from '../sections/WhyChoose'
import Team from '../sections/Team'
import CTASection from '../components/CTASection'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedProperties />
        <Services />
        <WhyChoose />
        <Team />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
