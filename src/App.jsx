import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

import Services from './components/Services'
import WhyUs from './components/WhyUs'
import SEO from './components/SEO'
import Portfolio from './components/Portfolio'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import SplashScreen from './components/SplashScreen'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [splashDone, setSplashDone] = useState(false)
  const pageRef = useRef(null)

  useEffect(() => {
    if (!splashDone) return

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
  }, [splashDone])

  useLayoutEffect(() => {
    if (!splashDone || !pageRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        pageRef.current,
        { opacity: 0, y: 18, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' },
      )
    })

    return () => ctx.revert()
  }, [splashDone])

  return (
    <>
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}

      <div ref={pageRef} className={splashDone ? 'will-change-transform' : 'opacity-0'}>
        {splashDone && <Navbar />}
        <Hero />

        <Services />
        <WhyUs />
        <Portfolio />
        <SEO />
        <CallToAction />
        <Footer />
      </div>
    </>
  )
}

export default App
