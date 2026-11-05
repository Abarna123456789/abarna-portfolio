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

  // 10 Scrolling Words
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
      className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 overflow-hidden cosmic-hero-bg stars-overlay"
    >
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[1050px] h-[380px] sm:h-[600px] bg-gradient-to-b from-[#FF5E1E]/35 via-[#FF4500]/15 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Full screen width headline container */}
      <div className="w-full relative z-10">
        
        {/* Hero Title & Portrait Centerpiece */}
        <div className="relative select-none pt-2 sm:pt-48 pb-6 sm:pb-10">
          {/* "Hi, I am" sitting on the top-left directly above the name */}
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 w-full text-left mb-2 sm:mb-3">
            <span className="text-sm sm:text-base md:text-lg font-medium text-zinc-300 tracking-wide font-sans">
              Hi, I am
            </span>
          </div>

          {/* Giant condensed headline with Spring Pop-up effect on enter */}
          <h1
            className={`font-giant text-[24vw] sm:text-[22vw] lg:text-[20vw] xl:text-[18rem] leading-[0.78] tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-400 font-extrabold drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] text-center w-full transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 scale-100 translate-y-0 filter-none'
                : 'opacity-0 scale-[0.78] translate-y-12 blur-sm'
            }`}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)', // Bouncy spring pop effect
            }}
          >
            {profile?.name || 'Abarna E'}
          </h1>

          {/* Central Portrait Visual with layered depth matching screenshot */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className={`relative w-52 h-64 sm:w-76 sm:h-88 md:w-92 md:h-[430px] lg:w-[420px] lg:h-[480px] mt-2 sm:mt-0 transition-all duration-1000 delay-150 ${
                isVisible
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-90 translate-y-8'
              }`}
            >
              {/* Golden rim glow behind silhouette */}
              <div className="absolute inset-x-8 bottom-0 top-10 bg-gradient-to-t from-[#FF5E1E]/40 to-transparent rounded-full blur-2xl" />
              
              {/* Portrait image container */}
              <div className="relative w-full h-full flex items-end justify-center">
                <div className="relative w-full h-full max-h-[460px] rounded-3xl overflow-hidden flex items-end justify-center">
                  <img
                    src="/images/abarna-profile.png"
                    alt={profile?.name || 'Abarna E'}
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-105"
                    style={{
                      maskImage: 'linear-gradient(to bottom, black 72%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 72%, transparent 100%)',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Bottom Hero Details matching Screenshot a0216d6b */}
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-end pt-4 sm:pt-8 w-full">
            
            {/* Left Column: Software Developer + MERN Full Stack Developer / SEO Analyst + Action Buttons */}
            <div className="space-y-4 sm:space-y-5 text-left">
              {/* Category Subtitle */}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-zinc-400 uppercase">
                <span className="text-[#FF5E1E] text-xs">✦</span>
                <span>SOFTWARE DEVELOPER</span>
              </div>
              
              {/* Main Headline */}
              <h2 className="font-giant text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.05] text-white tracking-wide uppercase">
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
                  href="#projects"
                  className="group inline-flex items-center gap-3 bg-[#FF5E1E] hover:bg-[#ff723b] pl-6 sm:pl-7 pr-2.5 py-2.5 sm:py-3 rounded-full shadow-xl shadow-[#FF5E1E]/30 hover:shadow-[#FF5E1E]/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase">
                    VIEW MY WORK
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#FF5E1E] group-hover:translate-x-0.5 transition-transform duration-300 shadow">
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-2.5 sm:py-3 rounded-full border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white font-bold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  LET'S CONNECT
                </a>
              </div>
            </div>

            {/* Right Column: Skills & Tech Stack Card */}
            <div className="flex justify-start md:justify-end">
              <div className="w-full max-w-sm rounded-3xl bg-[#121214]/85 border border-white/10 p-5 sm:p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-[#FF5E1E]/40 transition-all">
                {/* Radiant warm fiery glow underneath */}
                <div className="absolute -bottom-8 inset-x-0 h-16 bg-gradient-to-t from-[#FF5E1E]/35 via-[#FF4500]/15 to-transparent blur-xl pointer-events-none" />

                {/* Header: Tech Stack Title + Project Arrow Link */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-zinc-300">
                    <span className="text-[#FF5E1E]">✦</span>
                    <span className="uppercase tracking-widest text-[11px] text-zinc-400">Tech Stack & Skills</span>
                  </div>

                  <a
                    href="#projects"
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