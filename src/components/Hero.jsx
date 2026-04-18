import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Grid, Float, Line, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ClientLogos from './ClientLogos';

function GridTunnel() {
  const pointsRight = useMemo(() => [
    new THREE.Vector3(4, 3, -10),
    new THREE.Vector3(4, 1, -5),
    new THREE.Vector3(5, 0, -2),
    new THREE.Vector3(4, -2, 1),
    new THREE.Vector3(6, -3, 3),
  ], []);

  const pointsLeft = useMemo(() => [
    new THREE.Vector3(-5, 2, -8),
    new THREE.Vector3(-4, 0, -6),
    new THREE.Vector3(-6, -1, -3),
    new THREE.Vector3(-4, -2, 0),
  ], []);

  const groupRef = useRef(null);

  useFrame((state) => {
    // Subtle breathing animation for the whole tunnel scene
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      groupRef.current.position.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <color attach="background" args={['#050505']} />
      <ambientLight intensity={0.5} />

      {/* Floor Grid */}
      <Grid
        position={[0, -4, 0]}
        args={[40, 40]}
        cellSize={1}
        cellThickness={1}
        cellColor="#222222"
        sectionSize={3}
        sectionThickness={1.2}
        sectionColor="#333333"
        fadeDistance={30}
        fadeStrength={2}
      />
      {/* Ceiling Grid */}
      <Grid
        position={[0, 4, 0]}
        rotation={[Math.PI, 0, 0]}
        args={[40, 40]}
        cellSize={1}
        cellThickness={1}
        cellColor="#222222"
        sectionSize={3}
        sectionThickness={1.2}
        sectionColor="#333333"
        fadeDistance={30}
        fadeStrength={2}
      />
      {/* Left Wall Grid */}
      <Grid
        position={[-8, 0, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        args={[40, 40]}
        cellSize={1}
        cellThickness={1}
        cellColor="#1a1a1a"
        sectionSize={3}
        sectionThickness={1.2}
        sectionColor="#2a2a2a"
        fadeDistance={30}
        fadeStrength={2}
      />
      {/* Right Wall Grid */}
      <Grid
        position={[8, 0, 0]}
        rotation={[0, 0, Math.PI / 2]}
        args={[40, 40]}
        cellSize={1}
        cellThickness={1}
        cellColor="#1a1a1a"
        sectionSize={3}
        sectionThickness={1.2}
        sectionColor="#2a2a2a"
        fadeDistance={30}
        fadeStrength={2}
      />

      {/* Floating Nodes & Connections - Right */}
      <group>
        <Line points={pointsRight} color="#c4161c" lineWidth={1.5} dashed={false} />
        {pointsRight.map((p, i) => (
          <mesh key={`r-${i}`} position={p}>
            <boxGeometry args={[0.15, 0.15, 0.15]} />
            <meshBasicMaterial color="#444444" />
            <lineSegments>
              <edgesGeometry args={[new THREE.BoxGeometry(0.16, 0.16, 0.16)]} />
              <lineBasicMaterial color="#ffffff" />
            </lineSegments>
          </mesh>
        ))}
      </group>

      {/* Floating Nodes & Connections - Left */}
      <group>
        <Line points={pointsLeft} color="#aaaaaa" lineWidth={1} dashed={false} opacity={0.5} transparent />
        {pointsLeft.map((p, i) => (
          <mesh key={`l-${i}`} position={p}>
            <boxGeometry args={[0.12, 0.12, 0.12]} />
            <meshBasicMaterial color="#333333" />
            <lineSegments>
              <edgesGeometry args={[new THREE.BoxGeometry(0.13, 0.13, 0.13)]} />
              <lineBasicMaterial color="#888888" />
            </lineSegments>
          </mesh>
        ))}
      </group>
    </group>
  );
}

const Hero = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('.hero-pill', {
      y: -20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.2
    })
      .from('.hero-headline span', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power4.out',
      }, '-=0.4')
      .from('.hero-desc', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.4')
      .from('.hero-btns a', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      }, '-=0.4')
      .from('.hero-logos', {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power2.out'
      }, '-=0.2');

  }, { scope: containerRef });

  return (
    <header ref={containerRef} className="relative w-full min-h-screen bg-[#050505] flex flex-col justify-between overflow-hidden">

      {/* 3D Background Canvas */}
      <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
        <Suspense fallback={null}>
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
            <GridTunnel />
          </Canvas>
        </Suspense>
      </div>

      {/* Fade overlay for bottom integration */}
      <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-[#050505] to-transparent z-0 pointer-events-none" />

      {/* Main Content Overlay */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pt-32 pb-16 w-full max-w-5xl mx-auto text-center mt-12 md:mt-0">

        {/* Headline */}
        <h1 className="hero-headline font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-white tracking-tight mb-6 flex flex-col overflow-hidden">
          <span className="block">Creative branding</span>
          <span className="block">intelligence</span>
        </h1>

        {/* Subhead */}
        <p className="hero-desc text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mb-10 font-sans leading-relaxed">
          Unify your visual identity across Print, Digital, and Retail. Let Midmar surface the designs that matter.
          Instantly create evidence-backed brand assets, signage, packaging, and more.
        </p>

        {/* Buttons */}
        <div className="hero-btns flex flex-wrap justify-center gap-4 items-center">
          <a className="inline-flex items-center justify-center px-6 py-3 font-medium text-black bg-white rounded-md hover:bg-gray-100 transition-colors shadow-lg shadow-white/5" href="mailto:info@midmaradv.com">
            Let's Talk Branding
          </a>
          <a className="inline-flex items-center justify-center px-6 py-3 font-medium text-white bg-[#0f0f0f] border border-[#333333] rounded-md hover:bg-[#1a1a1a] hover:border-[#444444] transition-colors" href="#portfolio-section">
            View Our Work
          </a>
        </div>
      </div>

      {/* Integrated Client Logos at Bottom */}
      <div className="hero-logos relative z-10 w-full bg-transparent border-t border-[#1a1a1a] pb-4 pt-2">
        <ClientLogos />
      </div>

    </header>
  );
};

export default Hero;
