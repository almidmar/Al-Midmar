import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  const btnRef = useRef();

  useGSAP(() => {
    // Magnetic button effect
    const btn = btnRef.current;
    if(!btn) return;
    
    const mouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: 'power2.out' });
    };
    const mouseLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.3, ease: 'power2.out' });
    };

    btn.addEventListener('mousemove', mouseMove);
    btn.addEventListener('mouseleave', mouseLeave);
    
    return () => {
      btn.removeEventListener('mousemove', mouseMove);
      btn.removeEventListener('mouseleave', mouseLeave);
    };
  }, { scope: btnRef });

  return (
    <nav className="fixed w-full px-4 sm:px-6 py-4 flex justify-between items-center z-50 bg-white/80 backdrop-blur-md text-gray-900 border-b border-gray-200 shadow-sm">
      <div className="flex items-center gap-2 max-w-7xl mx-auto w-full justify-between">
        <div className="flex items-center gap-2">
          <span className="font-display text-2xl sm:text-3xl tracking-tighter text-gray-900">AL MIDMAR</span>
          <span className="text-[10px] sm:text-xs font-bold bg-primary text-white px-2 py-0.5 rounded-full shadow-sm">SINCE 2016</span>
        </div>
        <div className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-wide">
          <a className="hover:text-primary transition-colors text-gray-700" href="#whyus-section">About</a>
          <a className="hover:text-primary transition-colors text-gray-700" href="#services-section">Services</a>
          <a className="hover:text-primary transition-colors text-gray-700" href="#portfolio-section">Projects</a>
          <a className="hover:text-primary transition-colors text-gray-700" href="#cta-section">Contact</a>
        </div>
        <button ref={btnRef} onClick={() => window.location.href='mailto:info@midmaradv.com'} className="bg-gray-900 hover:bg-primary text-white font-bold py-2 px-4 sm:px-6 rounded-full uppercase text-xs sm:text-sm transition-colors flex items-center gap-2 shadow-xl shadow-gray-900/20 whitespace-nowrap">
          Let's Talk
          <span className="material-icons-outlined text-sm hidden sm:block">arrow_outward</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
