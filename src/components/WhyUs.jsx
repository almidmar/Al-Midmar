import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from('.whyus-img', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2
    });

    gsap.from('.whyus-content', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      x: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.1
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="whyus-section" className="py-12 bg-card-bg-dark rounded-t-[3rem] rounded-b-[3rem] my-8 scroll-mt-24 shadow-sm border border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img alt="Workshop Team" className="whyus-img rounded-2xl object-cover h-64 w-full shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOzajFKkPnUII5EDGMH2Kg7XzbSwZuzNwOjEsqVIx6Vbkue4daYYt7sux7EA2_qaHWIJtm8c62fUwezRyAD2v6keTDE9yJn2gEYKe4hL5i3gVS90gZfFAmq2aVH3IH99bpE5jkLd84DMJAT1SaAlwUOjQQ8i55gN05Fb0FUSK996Ix8UwgxQASVVvkPMSkqgM69R14hRyPqtqCXgiDr1fV8nq_6l8k_8iWY5NGpCD9QWHDCi0TnHup_CkSRfrl1Kzt5qJvtf28fr8"/>
            <div className="whyus-img bg-primary rounded-2xl flex flex-col justify-center items-center p-6 text-white text-center h-64 shadow-md">
              <span className="font-display text-6xl">13+</span>
              <span className="font-bold uppercase tracking-wider text-sm mt-2">Years of Experience</span>
            </div>
            <div className="whyus-img bg-white border border-gray-200 rounded-2xl flex flex-col justify-center items-center p-6 text-gray-900 text-center h-64 col-span-2 md:col-span-1 shadow-md">
              <span className="material-icons-outlined text-5xl mb-2 text-primary">verified</span>
              <span className="font-bold uppercase tracking-wider text-sm">Certified Quality</span>
            </div>
            <img alt="Printing Machine" className="whyus-img rounded-2xl object-cover h-64 w-full hidden md:block shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZy4N3CRUoVIETzsDSY4qsbw-PyUbATLXXLhdDTY90nH05fD-g-YblfxSzqTmLFzg04Zdg1su9c9mGuvpBw2fOeV7lMMkopNW7I20TmoORO4RG1Ld0QjakNTrqLgTNYzb3PoKzAwv-j43YFyWTN-SZhtTRX2P6tsk6mPXPyRLt0eSNtSoEptMM-lfx-VQAdg43SmrIyzx_5aRGbkTUZ8i83yqaH6OHI32R7-CG_AzHwVIk2-oHuhW4W-rfKhnMY9djE0cIOFNeQ7c"/>
          </div>
        </div>
        <div className="whyus-header">
          <h2 className="whyus-content font-display text-4xl md:text-5xl mb-6 uppercase leading-none text-gray-900">
            Your Trusted Partner <br/>
            in <span className="text-primary">Brand Visibility.</span>
          </h2>
          <p className="whyus-content text-lg text-gray-600 mb-8 leading-relaxed">
            We don't just print; we create experiences. From the initial concept to the final installation, our team of experts ensures your brand stands out in the crowded UAE marketplace.
          </p>
          <div className="space-y-4">
            <div className="whyus-content flex items-start gap-4">
              <div className="bg-primary/10 border border-primary/20 p-2 rounded-lg text-primary">
                <span className="material-icons-outlined">speed</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">Fast Turnaround</h4>
                <p className="text-sm text-gray-600">We understand deadlines. Our 24/7 production facility ensures timely delivery.</p>
              </div>
            </div>
            <div className="whyus-content flex items-start gap-4">
              <div className="bg-primary/10 border border-primary/20 p-2 rounded-lg text-primary">
                <span className="material-icons-outlined">design_services</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">In-House Design</h4>
                <p className="text-sm text-gray-600">Our creative team can help visualize your ideas before production begins.</p>
              </div>
            </div>
            <div className="whyus-content flex items-start gap-4">
              <div className="bg-primary/10 border border-primary/20 p-2 rounded-lg text-primary">
                <span className="material-icons-outlined">eco</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-900">Eco-Friendly Options</h4>
                <p className="text-sm text-gray-600">Sustainable printing materials and inks available for conscious brands.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
