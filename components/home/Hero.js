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
      className="relative pt-24 sm:pt-36 md:pt-40 lg:pt-44 pb-12 sm:pb-16 overflow-hidden cosmic-hero-bg stars-overlay select-none"
    >
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[1050px] h-[380px] sm:h-[600px] bg-gradient-to-b from-[#FF5E1E]/30 via-[#FF4500]/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Full screen width headline container */}
      <div className="w-full relative z-10">
        
        {/* "Hi, I am" sitting on the top-left directly above the name with clean breathing room */}
        <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-14 xl:px-16 w-full text-left mb-2 sm:mb-4">
          <span className="text-xs sm:text-base md:text-lg font-medium text-zinc-300 tracking-wide font-sans">
            Hi, I am
          </span>
        </div>

        {/* ─── Hero Title & Centered Portrait Centerpiece (Contained & Responsive) ─── */}
        <div className="relative w-full flex flex-col items-center justify-center min-h-[260px] min-[380px]:min-h-[300px] sm:min-h-[380px] md:min-h-[460px] lg:min-h-[540px] xl:min-h-[580px] py-2 sm:py-6 my-1 sm:my-3">
          
          {/* Giant condensed headline with Spring Pop-up effect on enter */}
          <h1
            className={`font-giant text-[18vw] min-[360px]:text-[20vw] min-[400px]:text-[22vw] sm:text-[21vw] lg:text-[19vw] xl:text-[17.5rem] 2xl:text-[19.5rem] leading-[0.85] sm:leading-[0.8] tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-400 font-extrabold drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] text-center w-full select-none z-0 transition-all duration-1000 ${
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

          {/* Central Portrait Visual: Positioned with items-end so it frames the name without covering it */}
          <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-10">
            <div
              className={`relative w-44 h-60 min-[380px]:w-52 min-[380px]:h-72 sm:w-72 sm:h-96 md:w-[390px] md:h-[480px] lg:w-[460px] lg:h-[550px] xl:w-[500px] xl:h-[600px] max-w-[90vw] transition-all duration-1000 delay-150 flex items-end justify-center ${
                isVisible
                  ? 'opacity-100 scale-100 translate-y-0'
                  : 'opacity-0 scale-90 translate-y-8'
              }`}
            >
              {/* Warm fiery orange backlight glow directly behind her head / shoulders */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 min-[380px]:w-48 min-[380px]:h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gradient-to-b from-[#FF5E1E]/50 via-[#FF4500]/25 to-transparent rounded-full blur-2xl sm:blur-3xl -z-10 pointer-events-none" />

              {/* Portrait cutout image with smooth bottom blend */}
              <img
                src="/images/abarna-profile.webp"
                alt={profile?.name || 'Abarna E'}
                className="w-full h-full object-contain object-bottom filter brightness-100 contrast-105 pointer-events-none select-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                }}
              />
            </div>
          </div>

        </div>

        {/* ─── Two-Column Bottom Hero Details ─── */}
        <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-14 xl:px-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-end pt-6 sm:pt-10 w-full">
            
            {/* Left Column: Software Developer + MERN Full Stack / SEO + One-Row Buttons */}
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

              {/* Action Buttons: Neatly arranged in ONE ROW on mobile */}
              <div className="pt-2 sm:pt-3 flex flex-row items-center gap-2.5 sm:gap-4 w-full">
                <a
                  href="#portfolio"
                  className="group flex-1 sm:flex-initial inline-flex items-center justify-between sm:justify-start gap-2 sm:gap-3 bg-[#FF5E1E] hover:bg-[#ff723b] pl-3.5 sm:pl-7 pr-1.5 sm:pr-2.5 py-2.5 sm:py-3 rounded-full shadow-xl shadow-[#FF5E1E]/30 hover:shadow-[#FF5E1E]/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span className="text-white font-bold text-[11px] min-[360px]:text-xs sm:text-sm tracking-wider uppercase whitespace-nowrap">
                    VIEW MY WORK
                  </span>
                  <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center text-[#FF5E1E] group-hover:translate-x-0.5 transition-transform duration-300 shadow flex-shrink-0">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 stroke-[2.5]" />
                  </span>
                </a>

                <a
                  href="#contact"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center px-3.5 sm:px-7 py-2.5 sm:py-3 rounded-full border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white font-bold text-[11px] min-[360px]:text-xs sm:text-sm tracking-wider uppercase backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap"
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
      <div className="mt-12 sm:mt-20 md:mt-24 border-y border-white/10 bg-black/90 backdrop-blur-md py-3.5 sm:py-6 overflow-hidden relative select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...statsTicker, ...statsTicker].map((stat, idx) => (
            <div key={idx} className="flex items-center mx-3 sm:mx-8">
              <span className="text-[#FF5E1E] text-xl sm:text-4xl lg:text-5xl mr-3 sm:mr-8 drop-shadow-[0_0_15px_rgba(255,94,30,0.85)]">
                ✦
              </span>
              <span className="font-giant text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-wide text-white uppercase leading-none">
                {stat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}