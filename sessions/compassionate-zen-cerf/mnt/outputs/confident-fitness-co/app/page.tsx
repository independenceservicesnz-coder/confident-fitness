import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import Gallery from '@/components/Gallery'
import PainPoints from '@/components/PainPoints'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <Gallery />
      <PainPoints />
      <Pricing />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  )
}
