'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function Hero({ profile }) {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  // Trigger pop-up animation whenever entering the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 10 Scrolling Words for the ticker
  const statsTicker = [
    'LEARN',
    'BUILD',
    'CREATE',
    'INNOVATE',
    'DEVELOP',
    'DESIGN',
    'EXPLORE',
    'OPTIMIZE',
    'GROW',
    'ACHIEVE',
  ];

  return (
    <section
      ref={heroRef}
      className="relative pt-28 sm:pt-36 md:pt-40 lg:pt-44 pb-12 sm:pb-16 overflow-hidden cosmic-hero-bg stars-overlay select-none"
    >
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[1050px] h-[380px] sm:h-[600px] bg-gradient-to-b from-[#FF5E1E]/30 via-[#FF4500]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Full screen width headline container */}
      <div className="w-full relative z-10">
        
        {/* "Hi, I am" sitting on the top-left directly above the name with clean breathing room */}
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 w-full text-left mb-3 sm:mb-4">
          <span className="text-sm sm:text-base md:text-lg font-medium text-zinc-300 tracking-wide font-sans">
            Hi, I am
          </span>
        </div>

        {/* ─── Hero Title & Centered Portrait Centerpiece (Full View Portrait with Layered Depth) ─── */}
        <div className="relative w-full flex items-center justify-center py-4 sm:py-8">
          
          {/* Giant condensed headline with Spring Pop-up effect on enter */}
          <h1
            className={`font-giant text-[19vw] sm:text-[21vw] lg:text-[19vw] xl:text-[17.5rem] 2xl:text-[19.5rem] leading-[0.8] tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-400 font-extrabold drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] text-center w-full transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 scale-100 translate-y-0 filter-none'
                : 'opacity-0 scale-[0.85] translate-y-10 blur-sm'
            }`}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            {profile?.name || 'ABARNA E'}
          </h1>

          {/* Central Portrait Visual: Centered directly over the headline in Full View */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <div
              className={`relative w-64 h-80 sm:w-80 sm:h-96 md:w-[390px] md:h-[480px] lg:w-[460px] lg:h-[550px] xl:w-[500px] xl:h-[600px] max-w-[92vw] transition-all duration-1000 delay-150 flex items-center justify-center ${
                isVisible
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-90 translate-y-8'
              }`}
            >
              {/* Warm fiery orange backlight glow directly behind her head / shoulders */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gradient-to-b from-[#FF5E1E]/50 via-[#FF4500]/25 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

              {/* Portrait cutout image in full view with seamless bottom-edge soft blend */}
              <img
                src="/images/abarna-profile.webp"
                alt={profile?.name || 'Abarna E'}
                className="w-full h-full object-contain object-bottom filter brightness-100 contrast-105 pointer-events-none select-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                }}
              />
            </div>
          </div>

        </div>

        {/* ─── Two-Column Bottom Hero Details (Software Developer & Minimal Tech Stack Card) ─── */}
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-end pt-8 sm:pt-12 w-full">
            
            {/* Left Column: Software Developer + MERN Full Stack Developer / SEO Analyst + Action Buttons */}
            <div className="space-y-4 sm:space-y-5 text-left w-full min-w-0">
              {/* Category Subtitle */}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-zinc-400 uppercase">
                <span className="text-[#FF5E1E] text-xs">✦</span>
                <span>SOFTWARE DEVELOPER</span>
              </div>
              
              {/* Main Headline */}
              <h2 className="font-giant text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.05] text-white tracking-wide uppercase break-words">
                MERN FULL STACK DEVELOPER <span className="text-[#FF5E1E] font-light">✕</span> <br />
                SEO ANALYST
              </h2>

              {/* Bio / Description */}
              <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-lg leading-relaxed">
                I build modern digital experiences that combine development, AI, design and search visibility.
              </p>

              {/* Buttons: VIEW MY WORK -> & LET'S CONNECT */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#portfolio"
                  className="group inline-flex items-center gap-2.5 sm:gap-3 bg-[#FF5E1E] hover:bg-[#ff723b] pl-5 sm:pl-7 pr-2 sm:pr-2.5 py-2.5 sm:py-3 rounded-full shadow-xl shadow-[#FF5E1E]/30 hover:shadow-[#FF5E1E]/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase">
                    VIEW MY WORK
                  </span>
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center text-[#FF5E1E] group-hover:translate-x-0.5 transition-transform duration-300 shadow">
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                  </span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-5 sm:px-7 py-2.5 sm:py-3 rounded-full border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white font-bold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  LET&apos;S CONNECT
                </a>
              </div>
            </div>

            {/* Right Column: Minimal Tech Stack & Skills Card */}
            <div className="flex justify-start md:justify-end w-full min-w-0">
              <div className="w-full max-w-full sm:max-w-sm rounded-3xl bg-[#121214]/85 border border-white/10 p-5 sm:p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-[#FF5E1E]/40 transition-all">
                {/* Radiant warm fiery glow underneath */}
                <div className="absolute -bottom-8 inset-x-0 h-16 bg-gradient-to-t from-[#FF5E1E]/35 via-[#FF4500]/15 to-transparent blur-xl pointer-events-none" />

                {/* Header: Tech Stack Title + Project Arrow Link */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-zinc-300">
                    <span className="text-[#FF5E1E]">✦</span>
                    <span className="uppercase tracking-widest text-[11px] text-zinc-400">Tech Stack & Skills</span>
                  </div>

                  <a
                    href="#portfolio"
                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#FF5E1E] shadow-md hover:scale-105 transition-transform"
                    aria-label="View Projects"
                  >
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </a>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 my-3.5">
                  {['React.js', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'SEO'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-white/5 border border-white/10 text-zinc-300 group-hover:border-[#FF5E1E]/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Developer Focus Statement */}
                <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed mb-4">
                  Focused on building scalable full-stack applications, clean APIs, and high-performance search-optimized experiences.
                </p>

                {/* Strengths Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#2b160e] text-[#FF8A50] border border-[#FF5E1E]/30">
                    Full Stack
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#2b160e] text-[#FF8A50] border border-[#FF5E1E]/30">
                    SEO & Analytics
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#2b160e] text-[#FF8A50] border border-[#FF5E1E]/30">
                    Clean Code
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Infinite Horizontal Running 10-Word Ticker */}
      <div className="mt-16 sm:mt-24 border-y border-white/10 bg-black/90 backdrop-blur-md py-4 sm:py-6 overflow-hidden relative select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...statsTicker, ...statsTicker].map((stat, idx) => (
            <div key={idx} className="flex items-center mx-4 sm:mx-8">
              <span className="text-[#FF5E1E] text-2xl sm:text-4xl lg:text-5xl mr-4 sm:mr-8 drop-shadow-[0_0_15px_rgba(255,94,30,0.85)]">
                ✦
              </span>
              <span className="font-giant text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-wide text-white uppercase leading-none">
                {stat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}