'use client';

import { useState, useEffect, useRef } from 'react';

export default function DetailStatement() {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);

  // Parallax strictly driven by user scrolling (NO continuous automatic marquee)
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Total vertical distance over which this section is visible
      const totalDistance = windowHeight + rect.height;
      // Progress from 0 (section enters bottom of screen) to 1 (section leaves top of screen)
      const currentProgress = (windowHeight - rect.top) / totalDistance;
      const clampedProgress = Math.min(Math.max(currentProgress, 0), 1);

      // Relative shift centered at 0: range roughly -400px to +400px
      const calculatedOffset = (clampedProgress - 0.5) * 550;
      setOffset(calculatedOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="statement"
      ref={sectionRef}
      className="py-24 sm:py-32 md:py-44 bg-[#08080a] relative overflow-hidden select-none border-t border-white/5"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FF5E1E]/8 rounded-full blur-[170px] pointer-events-none" />

      {/* LINE 1: THE WORK OPENS THE DOOR ─── Moves LEFT on scroll (Crisp White Typography) */}
      <div
        className="flex items-center whitespace-nowrap will-change-transform select-none"
        style={{
          transform: `translate3d(${-offset}px, 0, 0)`,
          transition: 'transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="font-orbitron font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] 2xl:text-[8.5rem] uppercase tracking-wider text-white drop-shadow-2xl leading-none pr-10 sm:pr-16 md:pr-20"
          >
            THE WORK OPENS THE DOOR
          </span>
        ))}
      </div>

      {/* LINE 2: THE DETAILS KEEP YOU THERE ─── Moves RIGHT on scroll (Crisp White Typography) */}
      <div
        className="flex items-center whitespace-nowrap will-change-transform select-none mt-4 sm:mt-6 md:mt-8"
        style={{
          transform: `translate3d(${offset}px, 0, 0)`,
          transition: 'transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="font-orbitron font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] 2xl:text-[8.5rem] uppercase tracking-wider text-white drop-shadow-2xl leading-none pr-10 sm:pr-16 md:pr-20"
          >
            THE DETAILS KEEP YOU THERE
          </span>
        ))}
      </div>
    </section>
  );
}
