import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 1,
    title: 'ONE Ocean',
    category: 'Exhibition',
    imgSrc: 'https://i.ibb.co/HfTJ7vJY/IMG-20251127-172153-jpg.jpg'
  },
  {
    id: 2,
    title: 'Bel',
    category: 'Interior',
    imgSrc: 'https://i.ibb.co/YB30qwX0/20250624-153529.jpg'
  },
  {
    id: 3,
    title: 'Thrifty Car Rentals',
    category: 'Retail',
    imgSrc: 'https://i.ibb.co/JF3XCBZ4/20241121-221200.jpg'
  },
  {
    id: 4,
    title: 'Arcera',
    category: 'Signage',
    imgSrc: 'https://i.ibb.co/HLzdzySB/Whats-App-Image-2026-02-22-at-11-54-46-PM.jpg'
  },
  {
    id: 5,
    title: 'Commercial Bank of Dubai',
    category: 'Fabrication',
    imgSrc: 'https://i.ibb.co/3y9MtRtX/20240420-180440.jpg'
  },
  {
    id: 6,
    title: "Filli's",
    category: 'Outdoor',
    imgSrc: 'https://i.ibb.co/35XNpV1x/20250525-222802.jpg'
  }
];

const Portfolio = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.portfolio-item', {
      scrollTrigger: {
        trigger: '.portfolio-grid',
        start: 'top 90%',
        once: true
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out'
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="portfolio-section" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-24">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="bg-primary/10 border border-primary/30 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Portfolio</span>
        <h2 className="font-display text-5xl md:text-6xl text-gray-900">Our Crafts</h2>
      </div>
      <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div key={project.id} className="portfolio-item group cursor-pointer">
            <div className="overflow-hidden rounded-2xl mb-4 relative shadow-lg shadow-gray-200">
              <img
                alt={project.title}
                className="w-full h-64 sm:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                src={project.imgSrc}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold text-sm uppercase tracking-wider group-hover:text-primary transition-colors">View Project →</span>
              </div>
            </div>
            <h3 className="font-display text-2xl mb-1 text-gray-900">{project.title}</h3>
            <p className="text-sm text-primary uppercase font-bold tracking-wide">{project.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
