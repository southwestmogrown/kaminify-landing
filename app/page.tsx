import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import UseCases from '@/components/UseCases'
import Pricing from '@/components/Pricing'
import CtaSection from '@/components/CtaSection'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <hr className="divider" />
      <HowItWorks />
      <hr className="divider" />
      <UseCases />
      <hr className="divider" />
      <Pricing />
      <hr className="divider" />
      <CtaSection />
      <Footer />
      <ScrollReveal />
    </>
  )
}
