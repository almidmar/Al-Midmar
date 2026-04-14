import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: 1,
    title: 'Printing',
    description: 'High-resolution printing for billboards, hoardings, and massive displays that demand attention.',
    icon: 'print',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcIvsqifx7SRhNvcHFsze5ku8D9kjuKHEwaQiXDuwGuNczrAetPxiLOgi_RRCdZDXi34hkdltCTuwqEvMCN23NnYkXcA9akYX5z82SGR2uNKAGDG-zLt0aDgD287jlsT5HFr1FBmYz--2PjUdVz9tLw7WT9UauEhzM0SgB08k-WuUXGuMrFJuJt_R6cXf2C_T7veiaT4YleuuxyhNYHe81ks8I8qrzOGcrxhqZlslrJuiMjO79z8os08Ej7LnL4i1fpwe723nJEoI',
    bgColorClass: 'bg-[#0d3f44]',
    rotateClass: 'rotate-[-10deg]',
    translateClass: 'translate-x-10 translate-y-10'
  },
  {
    id: 2,
    title: '3D Signage',
    description: 'Illuminated, neon, and dimensional lettering that brings your brand logo to life day and night.',
    icon: 'lightbulb',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXClGBynh0II2MnVDCUoYp4bvmz6SgHWP-LHivcu9HCzpBigt93xZvT1Tc3HpH11jNO1DVWZ24zl7aYoXqeGjZtw-nQbP2q5KtKr1YVFbgg6svKDL-a_jm06_MlJkSHyK0z5aRtd7ImTw7ty6w9z5K-XtYi3a1bkyivh19eYNrVifWU_8wdmTarOgqcjnnkYS8UWNzrElQSjojYA6Pn2Jib3o6S8_TZfAEZfmoWSOCfCsmaaOX_4TKQpleu2-xl4zhsV_wbenCow0',
    bgColorClass: 'bg-[#1a3a5f]',
    rotateClass: 'rotate-[-5deg]',
    translateClass: 'translate-x-4 translate-y-4',
    imgClasses: 'grayscale group-hover:grayscale-0'
  },
  {
    id: 3,
    title: 'Exhibition & Stands',
    description: 'Custom built exhibition stands and point of sale displays designed to engage customers.',
    icon: 'view_in_ar',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfESMwOXFljcLlHfF4b1j9_6M9sChUF_HYmxA6PFN_v2p_HRtgZ5VFTUdQwRi3hoadTnb1S1S0zingJl4dxjJqGm0NDCPFeKFcJF70adTJtwP5zTjNryKuR6e-PSHagRw6Xj_kpTZCAeedqJOlkB_gTBYN8akXd_IRH428tCQI_NluLXLfUV-Fl8AGxAcbcSwaCs3cI--86t6tCoesDxJwUxNIQywOCvR8_tpC8q2gvzVW7UiKQGBETYrmyuPdEMg3OgKesJuAWfw',
    bgColorClass: 'bg-[#1a2e20]',
    rotateClass: 'rotate-[5deg]',
    translateClass: 'translate-x-4 translate-y-4'
  },
  {
    id: 4,
    title: 'Fabrication',
    description: 'Custom acrylic displays and laser-cut architectural elements designed with precision.',
    icon: 'construction',
    imgSrc: 'https://i.ibb.co/jvhhwp60/Gemini-Generated-Image-vm3rzhvm3rzhvm3r.png',
    bgColorClass: 'bg-[#0f1f33]',
    rotateClass: 'rotate-[-10deg]',
    translateClass: 'translate-x-10 translate-y-10'
  },
  {
    id: 5,
    title: 'Interiors',
    description: 'Glass manifestation, wallpapers, and immersive wall branding to elevate any space.',
    icon: 'format_paint',
    imgSrc: 'https://i.ibb.co/bTBZ3xF/Gemini-Generated-Image-j9a8r9j9a8r9j9a8.png',
    bgColorClass: 'bg-[#2d1a3a]',
    rotateClass: 'rotate-[-5deg]',
    translateClass: 'translate-x-4 translate-y-4',
    imgClasses: 'grayscale group-hover:grayscale-0'
  },
  {
    id: 6,
    title: 'Safety',
    description: 'Standardized safety signage and wayfinding systems prioritizing clarity and compliance.',
    icon: 'health_and_safety',
    imgSrc: 'https://i.ibb.co/1thx1CSR/Gemini-Generated-Image-yego9zyego9zyego.png',
    bgColorClass: 'bg-[#3a1a0e]',
    rotateClass: 'rotate-[5deg]',
    translateClass: 'translate-x-4 translate-y-4'
  }
];

const Services = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Basic entrance without hiding while debugging
    gsap.from('.service-card', {
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 90%',
        once: true
      },
      y: 40,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out'
    });

    gsap.from('.services-header', {
      scrollTrigger: {
        trigger: '.services-header',
        start: 'top 90%',
        once: true
      },
      y: 20,
      duration: 0.8,
      ease: 'power2.out'
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="services-section" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-24">
      <div className="flex justify-between items-end mb-12">
        <div className="services-header">
          <span className="uppercase tracking-widest text-xs font-bold text-primary mb-2 block">Our Expertise</span>
          <h2 className="font-display text-5xl md:text-6xl text-gray-900">What We Craft</h2>
        </div>
      </div>
      <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service) => (
          <div key={service.id} className={`service-card group relative ${service.bgColorClass} rounded-3xl p-8 h-[400px] flex flex-col justify-between overflow-hidden hover:shadow-xl transition-all border border-white/10 hover:border-primary/50 transition-all shadow-md`}>
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-sm text-white w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-sm border border-white/20">
                <span className="material-icons-outlined">{service.icon}</span>
              </div>
              <h3 className="font-display text-3xl uppercase mb-2 text-white">{service.title}</h3>
              <p className="text-sm font-medium text-gray-200 leading-relaxed">{service.description}</p>
            </div>
            <div className={`absolute bottom-0 right-0 w-48 h-48 ${service.translateClass}`}>
              <img alt={service.title} className={`w-full h-full object-cover rounded-tl-3xl ${service.rotateClass} group-hover:rotate-0 transition-transform duration-500 ${service.imgClasses || ''}`} src={service.imgSrc}/>
            </div>
            <a className="relative z-10 self-start mt-4 bg-primary text-white px-5 py-2 rounded-full text-xs font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0" href="#">Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
