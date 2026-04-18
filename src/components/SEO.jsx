import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SlowMo } from "gsap/EasePack";

import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, ScrollToPlugin, TextPlugin, SlowMo);


const SEO = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        gsap.from(textRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            y: 50,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out",
        });
    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="py-24 bg-white overflow-hidden border-t border-gray-100"
        >
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2
                    ref={textRef}
                    className="font-display text-4xl md:text-6xl lg:text-7xl text-gray-900 leading-tight tracking-tight uppercase"
                >
                    We are <span className="text-primary italic">Dedicated</span> and <br />
                    Passionate about our work
                </h2>

                <div className="mt-8 flex justify-center gap-4">
                    <div className="h-1 w-20 bg-primary rounded-full"></div>
                </div>

                {/* Hidden Meta-rich description for SEO improvement */}
                <p className="sr-only">
                    Al Midmar is a leading advertising and printing company in Dubai, specialized in creative branding,
                    premium print solutions, and high-impact visual communications for exhibitions, retail, and corporate identity.
                </p>
            </div>
        </section>
    );
};

export default SEO;

