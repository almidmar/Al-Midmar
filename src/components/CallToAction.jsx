import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.cta-content', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.5)'
    });
  }, { scope: containerRef });

  return (
    <section id="cta-section" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
      <div ref={containerRef} className="bg-card-bg-dark border border-gray-200 rounded-3xl p-8 sm:p-10 md:p-16 relative overflow-hidden shadow-lg shadow-gray-100 text-center md:text-left">
        {/* Subtle red glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-primary opacity-[0.04] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-48 h-48 bg-primary opacity-[0.04] rounded-full blur-3xl pointer-events-none"></div>

        <div className="cta-content relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="uppercase tracking-widest text-xs font-bold text-primary mb-4 block">Get In Touch</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-gray-900 mb-6 uppercase leading-tight">
              Ready to make <br/> an impact?
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-md mx-auto md:mx-0">
              Let's create something extraordinary together. From design to installation, we handle it all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => window.location.href='mailto:info@midmaradv.com'}
                className="bg-primary hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-full uppercase transition-all hover:-translate-y-1 shadow-lg shadow-primary/20 whitespace-nowrap text-sm sm:text-base"
              >
                Get a Quote
              </button>
              <button
                onClick={() => window.open('https://wa.me/971557412771', '_blank')}
                className="bg-transparent border border-gray-300 text-gray-900 hover:border-green-500 hover:text-green-600 font-bold py-3 px-8 rounded-full uppercase transition-all hover:-translate-y-1 flex items-center justify-center gap-2 whitespace-nowrap text-sm sm:text-base"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Chat Now</span>
              </button>
            </div>
          </div>
          <div className="hidden md:flex justify-end relative">
            <img
              alt="Team Discussion"
              className="rounded-xl shadow-2xl rotate-3 border border-gray-200 w-64 lg:w-80 grayscale hover:grayscale-0 transition-all duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7j4M4xVdjN-mL9MDBXwF9lGjXIgDpahY0UL03Oir6RqUgmTKRTCK1zQJsBdALb9MNcR_0Mr9xCETo1EraHA4jN-XkqX2b_qaT77rub6JbMuLAOCYcZ5KjiYLxHpe_y4B2WWlYmCUk0UhV5-cfRLGUbq50GhHKlTjt-cxLdkwAqqTK0HBGCATAk7pybq6y_lNpqVaeUH6MvLUOIx1-RIY3nVTzRt7T4dxjZKt5-ydU1WFZsKkZRT0_oisLB_9gf5hsKzioY8VkrQY"
            />
            <div className="absolute -bottom-6 -left-6 bg-white border border-gray-200 text-gray-900 p-4 rounded-xl shadow-lg rotate-[-6deg] w-48">
              <p className="font-bold text-sm">"We make a Change, We create an Impact"</p>
              <p className="text-xs mt-2 text-primary">- Prajil Sanker, CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
