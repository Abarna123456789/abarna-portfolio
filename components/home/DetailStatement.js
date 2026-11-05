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

          // Center offset is 0 when section is in the middle of the viewport (progress = 0.5)
          // Range approximately -450px to +450px
          const calculatedShift = (clampedProgress - 0.5) * 900;
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
      className="min-h-screen flex flex-col justify-center py-20 sm:py-28 md:py-36 bg-[#08080a] relative overflow-hidden select-none border-t border-white/5"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#FF5E1E]/10 rounded-full blur-[180px] pointer-events-none" />

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
            <span className="font-orbitron font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] 2xl:text-[8.5rem] uppercase tracking-wider text-white drop-shadow-2xl leading-none pr-6 sm:pr-12 md:pr-16">
              THE WORK OPENS THE DOOR
            </span>
            <span className="text-[#FF5E1E] text-2xl sm:text-4xl lg:text-5xl mr-6 sm:mr-12 md:mr-16 drop-shadow-[0_0_15px_rgba(255,94,30,0.85)] flex-shrink-0">
              ✦
            </span>
          </div>
        ))}
      </div>

      {/* LINE 2: THE DETAILS KEEP YOU THERE ─── Moves to the LEFT on scroll */}
      <div
        className="flex items-center whitespace-nowrap will-change-transform select-none mt-6 sm:mt-8 md:mt-12"
        style={{
          transform: `translate3d(calc(-30% - ${offset}px), 0, 0)`,
          transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex items-center flex-shrink-0">
            <span className="font-orbitron font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] 2xl:text-[8.5rem] uppercase tracking-wider text-white drop-shadow-2xl leading-none pr-6 sm:pr-12 md:pr-16">
              THE DETAILS KEEP YOU THERE
            </span>
            <span className="text-[#FF5E1E] text-2xl sm:text-4xl lg:text-5xl mr-6 sm:mr-12 md:mr-16 drop-shadow-[0_0_15px_rgba(255,94,30,0.85)] flex-shrink-0">
              ✦
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
