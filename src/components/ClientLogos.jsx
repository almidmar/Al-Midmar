import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const clients = [
  { name: 'Arcera', file: 'Arcera.svg' },
  { name: 'BNY', file: 'BNY_logo_2024.svg' },
  { name: 'Ocean Network Express', file: 'Ocean_Network_Express_logo.svg' },
  { name: 'Standard Chartered', file: 'Standard_Chartered_(2021).svg' },
  { name: 'Armour', file: 'armour logo -01.svg' },
  { name: 'Geidea', file: 'Geidea-01.svg' },
  { name: 'PitStop', file: 'PitStop-01.svg' },
  { name: 'Precedence', file: 'precedence -01.svg' },
  { name: 'Dollar Car Rental', file: 'dollar-car-rental-seeklogo-01.svg' },
  { name: 'Swift Way', file: 'swift way -01.svg' },
  { name: 'Filli', file: 'Filli-cafe-logo.svg' }
]

const ClientLogos = () => {
  const sectionRef = useRef(null)

  const renderMaskedLogo = (file) => {
    const url = `/images/Clients/${encodeURI(file)}`
    return {
      backgroundColor: '#D3D3D3',
      WebkitMaskImage: `url("${url}")`,
      maskImage: `url("${url}")`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
    }
  }

  useGSAP(
    () => {
      gsap.to('.logos-track', {
        xPercent: -50,
        ease: 'none',
        duration: 35,
        repeat: -1,
      })
    },
    { scope: sectionRef },
  )

  const renderLogos = () => (
    <div className="flex items-center gap-10 sm:gap-12 md:gap-16 pr-10 sm:pr-12 md:pr-16">
      {clients.map((c) => (
        <div
          key={c.file}
          className="brand-logo w-28 sm:w-32 md:w-40 h-10 md:h-12 flex items-center justify-center opacity-70 transition-all duration-300 hover:opacity-100 hover:scale-110"
        >
          <span
            aria-label={c.name}
            role="img"
            className="w-full h-full select-none pointer-events-none"
            style={renderMaskedLogo(c.file)}
          />
        </div>
      ))}
    </div>
  )

  return (
    <section
      ref={sectionRef}
      id="clients-section"
      className="bg-transparent py-8 md:py-10 overflow-hidden relative scroll-mt-24 pointer-events-none"
    >
      <div
        className="w-full relative z-10 flex overflow-hidden pointer-events-auto"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div className="logos-track flex items-center w-max">
          {renderLogos()}
          {renderLogos()}
        </div>
      </div>
    </section>
  )
}

export default ClientLogos

