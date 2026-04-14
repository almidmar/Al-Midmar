import React, { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ClientLogos from './components/ClientLogos'
import Services from './components/Services'
import ColorCode from './components/ColorCode'
import WhyUs from './components/WhyUs'
import Portfolio from './components/Portfolio'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    // Sync ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update)

    const update = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    // Ensure ScrollTrigger refreshes after initial load
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 500)

    return () => {
      lenis.destroy();
      gsap.ticker.remove(update);
      clearTimeout(timer);
    }
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <ClientLogos />
      <Services />
      <ColorCode />
      <WhyUs />
      <Portfolio />
      <CallToAction />
      <Footer />
    </>
  )
}

export default App
