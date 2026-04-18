import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Logo from './Logo'

export default function SplashScreen({ onComplete }) {
  const scopeRef = useRef(null)

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      const t = window.setTimeout(() => {
        document.body.style.overflow = prevOverflow
        onComplete?.()
      }, 200)
      return () => {
        window.clearTimeout(t)
        document.body.style.overflow = prevOverflow
      }
    }

    const ctx = gsap.context(() => {
      const logoEls = scopeRef.current?.querySelectorAll?.(
        '.splash-logo path, .splash-logo polygon',
      )

      if (!logoEls || logoEls.length === 0) {
        document.body.style.overflow = prevOverflow
        onComplete?.()
        return
      }

      gsap.set(logoEls, {
        strokeDasharray: 2000,
        strokeDashoffset: 2000,
        fillOpacity: 0,
        strokeWidth: 1,
        stroke: (i, el) => el.getAttribute('fill') || '#111827',
      })

      gsap.set('.splash-content', { opacity: 1, scale: 1 })

      const tl = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
        onComplete: () => {
          document.body.style.overflow = prevOverflow
          onComplete?.()
        },
      })

      tl.to(logoEls, {
        strokeDashoffset: 0,
        duration: 1.6,
        ease: 'power2.inOut',
        stagger: 0.008,
      }).to(logoEls, {
        fillOpacity: 1,
        strokeWidth: 0,
        duration: 0.6,
        ease: 'power1.out',
      })
        .to(
          '.splash-content',
          {
            scale: 1.04,
            duration: 1.4,
            ease: 'power1.inOut',
          },
          '-=0.2',
        )
        .to('.splash-bg', {
          yPercent: -100,
          duration: 0.9,
          ease: 'expo.inOut',
        })
        .to(
          '.splash-content',
          {
            y: -80,
            opacity: 0,
            duration: 0.55,
            ease: 'power2.in',
          },
          '<',
        )
    }, scopeRef)

    return () => {
      ctx.revert()
      document.body.style.overflow = prevOverflow
    }
  }, [onComplete])

  return (
    <div
      ref={scopeRef}
      className="splash-bg fixed inset-0 z-[200] bg-white flex items-center justify-center overflow-hidden"
      aria-label="Loading"
      role="status"
    >
      <div className="splash-content flex flex-col items-center gap-8 px-6">
        <Logo className="splash-logo w-64 sm:w-80 md:w-[520px] h-auto" textColor="#444b4c" />
      </div>
    </div>
  )
}

