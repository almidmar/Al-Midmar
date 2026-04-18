import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import Logo from './Logo';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('About');

  const navLinks = [
    { name: 'About', href: '#whyus-section' },
    { name: 'Services', href: '#services-section' },
    { name: 'Projects', href: '#portfolio-section' },
  ];

  useEffect(() => {
    // Initial drop-in animation
    gsap.from('.floating-navbar', {
      y: -50,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <nav className="sticky top-20 lg:top-15 left-0 w-full z-[60] flex justify-center px-4 md:px-8 pt-4 pb-3 bg-transparent">
      <div className="floating-navbar flex items-center justify-between w-full max-w-5xl bg-[#080808]/90 backdrop-blur-md border border-white/10 rounded-full p-2 pl-6 pr-2 shadow-2xl">

        {/* Left Side: Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Logo className="h-6 md:h-7 w-auto" textColor="#ffffff" />
        </div>

        {/* Center: Links */}
        <div className="hidden md:flex items-center bg-white/5 rounded-full p-1 border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveTab(link.name)}
              className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${activeTab === link.name
                  ? 'bg-[#dbe4ff] text-black shadow-lg scale-105'
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side: CTA Button */}
        <button
          onClick={() => window.location.href = 'mailto:info@midmaradv.com'}
          className="bg-[#eafdf3] hover:bg-white text-black font-bold py-2.5 px-6 rounded-full text-xs uppercase tracking-tight transition-all active:scale-95 shadow-md"
        >
          Let's Talk
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

