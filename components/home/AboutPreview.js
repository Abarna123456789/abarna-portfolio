'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function AboutPreview({ profile }) {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0.2);

  const name = profile?.name || 'Abarna E';

  // Minimal, high-impact About statement for Abarna E
  const fullText =
    `Hey there, I'm ${name} — a Full Stack Developer & SEO Analyst. I build digital experiences that combine full stack engineering and search visibility. With 1+ years of experience, I develop responsive web applications and optimize websites for better search performance. My focus is on clean code, seamless user experiences, and SEO strategies that help businesses grow online.`;

  const words = fullText.split(' ');

  // 5 Traits
  const traits = [
    { num: '01', title: 'QUICK LEARNER' },
    { num: '02', title: 'TEAM COLLABORATOR' },
    { num: '03', title: 'AI-FRIENDLY DEVELOPER' },
    { num: '04', title: 'SEO-MINDED' },
    { num: '05', title: 'CONTINUOUS LEARNER' },
  ];

  // 4 Metrics
  const metrics = [
    { value: '1', symbol: '+', label: 'YEAR OF EXPERIENCE' },
    { value: '12', symbol: '+', label: 'PROJECTS BUILT' },
    { value: '17', symbol: '+', label: 'TOOLS & TECHNOLOGIES' },
    { value: '∞', symbol: '', label: 'CURIOSITY' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start highlighting when section enters bottom 85% of screen
      // Complete highlight when section reaches top 20% of screen
      const startPoint = windowHeight * 0.85;
      const endPoint = windowHeight * 0.20;

      const current = startPoint - rect.top;
      const total = startPoint - endPoint;
      const progress = Math.min(Math.max(current / total, 0), 1);

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="pt-10 pb-6 sm:pt-20 sm:pb-12 lg:pt-28 lg:pb-16 relative overflow-hidden bg-[#08080a]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-[#FF5E1E]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Matching unified container with tight mobile padding */}
      <div className="max-w-[1600px] mx-auto px-4 min-[380px]:px-5 sm:px-10 lg:px-14 xl:px-16 w-full relative z-10">
        
        {/* Asymmetric Layout: Compact label + Expanded text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-6 lg:gap-12 items-start">
          
          {/* Left Column: ✦ ABOUT ME ──────→ */}
          <div className="lg:col-span-2 pt-0 lg:pt-3">
            <div className="flex items-center gap-2 sm:gap-3 select-none">
              {/* Fiery Star Icon */}
              <span className="text-[#FF5E1E] text-sm sm:text-base leading-none drop-shadow-[0_0_8px_rgba(255,94,30,0.7)] flex-shrink-0">
                ✦
              </span>

              {/* Bold Uppercase ABOUT ME Label */}
              <span className="text-xs sm:text-sm font-bold tracking-widest text-white uppercase whitespace-nowrap">
                ABOUT ME
              </span>

              {/* Vector Arrow Line */}
              <div className="flex items-center w-12 min-[380px]:w-16 sm:w-24 lg:w-32 flex-shrink min-w-0">
                <svg
                  className="w-full h-2.5 sm:h-3 overflow-visible text-zinc-500/80"
                  viewBox="0 0 120 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0"
                    y1="4"
                    x2="114"
                    y2="4"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <path
                    d="M110 1.2L115 4L110 6.8"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Widened Text Container */}
          <div className="lg:col-span-10 space-y-4 sm:space-y-6 lg:space-y-8 w-full min-w-0">
            {/* Scroll-illuminated text with exact Oswald typography */}
            <h2 className="font-oswald text-xl min-[360px]:text-2xl min-[420px]:text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[44px] font-medium leading-[1.22] sm:leading-[1.15] tracking-tight select-none transition-all w-full break-words">
              {words.map((word, idx) => {
                const wordThreshold = idx / words.length;
                const wordProgress = Math.min(
                  Math.max((scrollProgress - wordThreshold) / (1 / words.length), 0),
                  1
                );
                const isIlluminated = wordProgress > 0.35;

                return (
                  <span
                    key={idx}
                    className="inline-block mr-[0.24em] transition-all duration-300 ease-out"
                    style={{
                      opacity: 0.20 + 0.80 * wordProgress,
                      color: isIlluminated ? '#ffffff' : '#3f3f46',
                      textShadow: isIlluminated
                        ? '0 0 14px rgba(255, 255, 255, 0.25)'
                        : 'none',
                    }}
                  >
                    {word}
                  </span>
                );
              })}
            </h2>

            {/* Start a Project Button */}
            <div className="pt-1 sm:pt-2">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 sm:gap-4 bg-[#FF5E1E] hover:bg-[#ff723b] pl-5 sm:pl-7 pr-2 sm:pr-2.5 py-2 sm:py-2.5 rounded-full shadow-xl shadow-[#FF5E1E]/30 hover:shadow-[#FF5E1E]/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span className="text-white font-bold text-xs sm:text-sm md:text-base tracking-wide">
                  Start a Project
                </span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-white flex items-center justify-center text-[#FF5E1E] group-hover:rotate-45 transition-transform duration-300 shadow-md flex-shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* ─── Bottom Section: 5 Trait Pills + 4-Column Metrics Grid ─── */}
        <div className="mt-8 sm:mt-12 lg:mt-16 space-y-6 sm:space-y-10 lg:space-y-14">
          
          {/* Row of 5 Characteristic Badges */}
          <div className="flex flex-wrap items-center justify-start sm:justify-center lg:justify-end gap-2 sm:gap-2.5">
            {traits.map((trait, idx) => (
              <div
                key={idx}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/15 bg-white/[0.02] hover:border-[#FF5E1E]/40 hover:bg-[#FF5E1E]/5 transition-all text-[11px] sm:text-xs font-semibold tracking-wider text-zinc-300 flex items-center gap-1.5 sm:gap-2 select-none group shadow-sm"
              >
                <span className="text-[10px] font-mono text-[#FF5E1E] opacity-90">
                  {trait.num}
                </span>
                <span className="group-hover:text-white transition-colors">
                  {trait.title}
                </span>
              </div>
            ))}
          </div>

          {/* 4-Column Stat Blocks with Vertical Dividers */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 sm:gap-y-8 lg:gap-y-0 border-y border-white/10 py-5 sm:py-8 lg:py-12">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className={`flex flex-col justify-between px-2.5 min-[380px]:px-4 sm:px-6 lg:px-10 min-w-0 ${
                  idx < 3 ? 'lg:border-r border-white/10' : ''
                } ${idx % 2 === 0 ? 'border-r lg:border-r border-white/10' : ''}`}
              >
                {/* Big Number & Symbol Side-by-Side */}
                <div className="flex items-baseline gap-1 select-none">
                  <span className="font-giant text-4xl min-[360px]:text-5xl sm:text-7xl lg:text-8xl text-white font-extrabold leading-none tracking-tight">
                    {metric.value}
                  </span>
                  {metric.symbol && (
                    <span className="text-[#FF5E1E] text-lg min-[360px]:text-xl sm:text-3xl lg:text-4xl font-bold leading-none">
                      {metric.symbol}
                    </span>
                  )}
                </div>

                {/* Subtitle Label */}
                <span className="text-[9px] min-[360px]:text-[10px] sm:text-xs font-bold tracking-widest text-zinc-400 uppercase mt-2.5 sm:mt-5 select-none break-words">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}