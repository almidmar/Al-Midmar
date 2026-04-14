import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);

  useGSAP(() => {
    // 1. Entrance Animations
    gsap.from('.hero-title-line', {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power4.out',
      delay: 0.1
    });
    
    gsap.from(badgeRef.current, {
      scale: 0,
      rotation: -180,
      opacity: 0,
      duration: 1.5,
      ease: 'elastic.out(1, 0.5)',
      delay: 0.7
    });

    gsap.from('.hero-image-card', {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      delay: 0.4
    });

    // 2. Interactive Mouse Parallax Effect
    const handleMouseMove = (e) => {
      if (!containerRef.current || !imageRef.current || !badgeRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate cursor position as a ratio from -0.5 to 0.5
      const xRatio = (clientX / innerWidth - 0.5) * 2;
      const yRatio = (clientY / innerHeight - 0.5) * 2;

      // Parallax text & small elements slightly
      gsap.to('.parallax-layer-1', {
        x: xRatio * -20,
        y: yRatio * -20,
        duration: 1,
        ease: 'power2.out'
      });

      // Parallax the main image card
      gsap.to(imageRef.current, {
        rotationY: xRatio * 10,
        rotationX: yRatio * -10,
        x: xRatio * 30,
        y: yRatio * 30,
        ease: 'power2.out',
        duration: 1
      });

      // Parallax the badge inversely
      gsap.to(badgeRef.current, {
        x: xRatio * -40,
        y: yRatio * -40,
        ease: 'power2.out',
        duration: 1.2
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, { scope: containerRef });

  return (
    <header ref={containerRef} className="relative px-4 sm:px-6 pt-32 pb-12 md:pb-24 max-w-7xl mx-auto overflow-hidden perspective-1000" style={{ perspective: "1000px" }}>
      {/* Decorative Background Element */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="lg:col-span-7 relative z-10">
          <div className="relative overflow-hidden mb-6">
            <h1 className="font-display text-6xl sm:text-[6rem] leading-[0.9] md:text-[8rem] uppercase text-gray-900 tracking-tight flex flex-col parallax-layer-1">
              <span className="hero-title-line block">Creative</span>
              <span className="hero-title-line block text-primary">Branding</span>
              <span className="hero-title-line block">Experts</span>
            </h1>
            <div className="absolute -top-10 right-4 sm:right-10 md:right-20 animate-spin-slow hidden sm:block parallax-layer-1">
              <svg className="text-gray-200 fill-current w-16 h-16 md:w-20 md:h-20" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L61.2257 38.7743L100 50L61.2257 61.2257L50 100L38.7743 61.2257L0 50L38.7743 38.7743L50 0Z"></path>
              </svg>
            </div>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-md mb-10 font-medium leading-relaxed opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards] parallax-layer-1">
            Al Midmar is a premium creative agency specializing in tailored visual solutions, immersive branding, and high-impact designs that elevate your presence.
          </p>
          
          <div className="flex flex-wrap gap-6 items-center opacity-0 animate-[fadeIn_1s_ease-out_1.2s_forwards] parallax-layer-1">
            {/* CTA Button */}
            <a className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold tracking-wide text-white bg-gray-900 rounded-full group cursor-pointer transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-gray-900/20" href="mailto:info@midmaradv.com">
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
              <span className="relative z-10 flex items-center gap-2">
                LET'S TALK
                <span className="material-icons-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </span>
            </a>
            
            {/* Social Proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <img alt="Client" className="w-10 h-10 border-2 border-white rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbMvoc-GH4bX-6X52QOyqETxrpFXL6lqNKD-A3lN9bYfZFIs_4XmU78vx2W6AM089phYoqAs8e4jMxXP7g1PLk66ollMo_JpON_JS4PF_tK1NdO1DGtp_nuXegyPXKGh15b4NOSgt1TDMan8lqqPFMuRXvB_rytpGAmy2B7Bss7KjiQGDPEG3Y6EvgJr-B8vwHnI9tBf5ogG11a7ZPWO5AVuMfRSNXdua8xJCQZ6V0fl9edYXgFz1_7s9R_VOx8N1bS1vkrLo46cE"/>
                <img alt="Client" className="w-10 h-10 border-2 border-white rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdMwIco-72plOelHsKbdfiZsrC_1o1wQiqruSZTTKOpknjxTXI6EQm-81GiIlX2U_OE-4zH3jj8RAdi-XPnSJkWHHo2Q3_0Mx02AXlyRnc6CmQ1hK03d1jI3OmOk6_XuuFaMC0Q01j5wPssbPiK99EtXy7sIPK8-BZvydfgkYSN_22TE3fKWqpsuSuLjsx8kgMsLD5ROWNh4D88hVwND_K2TwZHnh8M5nTY6rTHMbQge-h_KXzACn449MU0QjazYxZsrDOPas-MEE"/>
                <div className="flex items-center justify-center w-10 h-10 text-xs font-bold text-white bg-primary border-2 border-white rounded-full shadow-sm">
                  +5k
                </div>
              </div>
              <div className="text-sm font-semibold text-gray-500">
                Happy<br/>Clients
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Interactive Image */}
        <div className="lg:col-span-5 relative mt-16 lg:mt-0 flex justify-center">
          <div 
            ref={imageRef} 
            className="hero-image-card relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 border-4 border-white bg-white w-full max-w-[400px] lg:max-w-full z-10"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none mix-blend-multiply" />
            <img 
              alt="Creative Branding Example" 
              className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover hover:scale-105 transition-transform duration-700 ease-out" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJLRggiT6anq-0YgOaZoDPTadaV5xiSUj1GNpK9i79fdR8sxKRPiRcWWCkz4KtINthww0LfAPleNB8smDXFiwFzePaHouG2zX-AermoXAOQRsmFIKtksRZABlbIqZhquAM3p0yzJwNuf-bonvU1H1qz2lqHVL7p_-7OTVxVOM-ElwvZtQ72mKMGb1ZTQ3CEGc8NTTEQ1gZL7f3ZXgry1EtaE3EdIAvC5MUtY42Z8U00p9TKQezcnTbRHjOoK2spqTtvFATEccZVV0"
            />
            {/* Inner Floating Card */}
            <div 
              className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-lg p-5 rounded-2xl shadow-xl border border-white/50 z-20"
              style={{ transform: "translateZ(30px)" }}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-gray-900 mb-1">Premium Quality</p>
                  <p className="text-xs text-gray-500 font-medium">Award winning design</p>
                </div>
                <div className="flex text-primary">
                  <span className="material-icons-outlined text-sm">star</span>
                  <span className="material-icons-outlined text-sm">star</span>
                  <span className="material-icons-outlined text-sm">star</span>
                  <span className="material-icons-outlined text-sm">star</span>
                  <span className="material-icons-outlined text-sm">star</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Badge */}
          <div 
            ref={badgeRef}
            className="hero-badge absolute -top-8 -right-4 sm:-top-10 sm:-right-10 bg-primary text-white p-6 rounded-full w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center shadow-xl shadow-primary/30 z-30 pointer-events-none"
          >
            <p className="text-center font-display uppercase leading-none text-base sm:text-xl tracking-wide">
              Top<br/>Agency<br/>2026
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
