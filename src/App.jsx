import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Process from './components/Process.jsx'
import WhyChoose from './components/WhyChoose.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import TechStrip from './components/TechStrip.jsx'
import FAQ from './components/FAQ.jsx'
import CTABanner from './components/CTABanner.jsx'
import BackToTop from './components/BackToTop.jsx'
import MobileBar from './components/MobileBar.jsx'

// Fade elements with the `reveal` class in as they scroll into view.
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStrip />
        <Services />
        <Process />
        <WhyChoose />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <MobileBar />
    </>
  )
}
