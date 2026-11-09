'use client';

import { useState, useEffect, useRef } from 'react';

export default function DetailStatement() {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);

  // Parallax strictly driven by user scroll (NO automatic continuous scrolling)
  // When user scrolls down:
  // Line 1 moves to the RIGHT
  // Line 2 moves to the LEFT
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = sectionRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Progress from 0 (section bottom enters screen) to 1 (section top leaves screen)
          const totalDistance = windowHeight + rect.height;
          const currentProgress = (windowHeight - rect.top) / totalDistance;
          const clampedProgress = Math.min(Math.max(currentProgress, 0), 1);

          // Scaled shift: smooth and natural on mobile, dynamic glide on desktop
          const multiplier = window.innerWidth > 768 ? 700 : 360;
          const calculatedShift = (clampedProgress - 0.5) * multiplier;
          setOffset(calculatedShift);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="statement"
      ref={sectionRef}
      className="py-10 sm:py-16 md:py-20 lg:py-24 bg-[#08080a] relative overflow-hidden select-none border-t border-white/5 flex flex-col justify-center"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] md:w-[850px] h-[200px] sm:h-[350px] md:h-[450px] bg-[#FF5E1E]/8 rounded-full blur-[140px] sm:blur-[180px] pointer-events-none" />

      {/* LINE 1: THE WORK OPENS THE DOOR ─── Moves to the RIGHT on scroll */}
      <div
        className="flex items-center whitespace-nowrap will-change-transform select-none"
        style={{
          transform: `translate3d(calc(-30% + ${offset}px), 0, 0)`,
          transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex items-center flex-shrink-0">
            <span className="font-orbitron font-black text-3xl min-[360px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[8.5rem] uppercase tracking-wider text-white drop-shadow-2xl leading-none pr-4 sm:pr-8 md:pr-12 lg:pr-16">
              THE WORK OPENS THE DOOR
            </span>
            <span className="text-[#FF5E1E] text-xl sm:text-3xl lg:text-4xl mr-4 sm:mr-8 md:mr-12 lg:mr-16 drop-shadow-[0_0_15px_rgba(255,94,30,0.85)] flex-shrink-0">
              ✦
            </span>
          </div>
        ))}
      </div>

      {/* LINE 2: THE DETAILS KEEP YOU THERE ─── Moves to the LEFT on scroll */}
      <div
        className="flex items-center whitespace-nowrap will-change-transform select-none mt-3.5 sm:mt-6 md:mt-8"
        style={{
          transform: `translate3d(calc(-30% - ${offset}px), 0, 0)`,
          transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex items-center flex-shrink-0">
            <span className="font-orbitron font-black text-3xl min-[360px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[8.5rem] uppercase tracking-wider text-white drop-shadow-2xl leading-none pr-4 sm:pr-8 md:pr-12 lg:pr-16">
              THE DETAILS KEEP YOU THERE
            </span>
            <span className="text-[#FF5E1E] text-xl sm:text-3xl lg:text-4xl mr-4 sm:mr-8 md:mr-12 lg:mr-16 drop-shadow-[0_0_15px_rgba(255,94,30,0.85)] flex-shrink-0">
              ✦
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}