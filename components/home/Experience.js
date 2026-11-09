'use client';

import { useState, useEffect, useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'work' | 'education'
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const workItems = [
    {
      id: 'mindcarve',
      type: 'work',
      period: 'AUGUST 2025 — PRESENT',
      badge: 'NOW',
      isCurrent: true,
      title: 'Junior Developer & SEO Analyst',
      subtitle: 'MindCarve Communication',
      location: 'Chennai, India',
      description:
        'Building fast, responsive web applications and high-conversion websites for brands across real estate, healthcare and interiors. Turning UI designs into production code with React, Next.js and PHP while managing on-page optimization, technical SEO auditing, Core Web Vitals performance, and keyword ranking analytics.',
      skills: ['Next.js', 'React', 'PHP', 'Technical SEO', 'SEO Analytics', 'Core Web Vitals'],
    },
    {
      id: 'qspiders-work',
      type: 'work',
      period: 'JULY 2024 — JANUARY 2025 (6 MONTHS)',
      badge: 'MERN STACK',
      isCurrent: false,
      title: 'Full Stack Developer',
      subtitle: 'Q-spider',
      location: 'Chennai, India',
      description:
        'Built full stack MERN applications end to end, from REST APIs and database schema design to secure authentication and responsive React interfaces. Collaborated in fast-paced sprints to ship production features under strict deadlines with high quality.',
      skills: ['Express', 'React', 'Node.js', 'MongoDB', 'JavaScript', 'REST APIs'],
    },
  ];

  const educationItems = [
    {
      id: 'degree',
      type: 'education',
      period: 'SEPTEMBER 2022 — MAY 2025',
      badge: 'BACHELOR DEGREE',
      isCurrent: false,
      title: 'B.Tech — Information Technology',
      subtitle: 'Adhiparasakthi Engineering College, Melmaruvathur',
      location: 'Melmaruvathur, Tamil Nadu',
      description:
        'Built a strong technical foundation in software engineering, database management systems (DBMS), web architectures, and data structures. Developed core analytical and problem-solving skills applied directly across modern full-stack development and search engineering.',
      skills: ['Information Technology', 'Data Structures & Algorithms', 'DBMS', 'Web Architecture', 'Software Engineering'],
    },
    {
      id: 'mern-course',
      type: 'education',
      period: 'JULY 2024 — APRIL 2025',
      badge: 'SPECIALIZED COURSE',
      isCurrent: false,
      title: 'MERN Full Stack Course',
      subtitle: 'Q-spider Training Institute',
      location: 'Chennai, India',
      description:
        '10-month professional specialization course covering MongoDB, Express.js, React.js and Node.js, from fundamentals to end-to-end full stack project builds, REST API development, and production deployment.',
      skills: ['React.js', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Full Stack Lifecycle'],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="pt-14 sm:pt-24 lg:pt-28 pb-16 sm:pb-24 lg:pb-32 relative overflow-hidden bg-[#08080a] border-t border-white/5"
    >
      {/* Background ambient cosmic glow */}
      <div className="absolute top-1/4 right-0 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-[#FF5E1E]/10 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[#FF4500]/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* ─── SLOW SCROLLING GHOST WATERMARK ─── */}
      <div 
        className={`w-full overflow-hidden select-none pointer-events-none absolute inset-x-0 top-6 sm:top-14 md:top-16 lg:top-20 z-0 transition-opacity duration-1000 ${
          isInView ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ willChange: 'transform' }}
      >
        <div className="flex w-max animate-marquee-slower">
          <div className="flex items-center flex-shrink-0">
            <span className="font-orbitron font-black text-[5rem] sm:text-[9.5rem] md:text-[12rem] lg:text-[14rem] xl:text-[16.5rem] uppercase tracking-widest text-white/[0.08] leading-none whitespace-nowrap pr-14 sm:pr-24">
              CAREER JOURNEY CAREER JOURNEY CAREER JOURNEY
            </span>
          </div>
          <div className="flex items-center flex-shrink-0" aria-hidden="true">
            <span className="font-orbitron font-black text-[5rem] sm:text-[9.5rem] md:text-[12rem] lg:text-[14rem] xl:text-[16.5rem] uppercase tracking-widest text-white/[0.08] leading-none whitespace-nowrap pr-14 sm:pr-24">
              CAREER JOURNEY CAREER JOURNEY CAREER JOURNEY
            </span>
          </div>
        </div>
      </div>

      {/* Unified container matching Navbar & Hero */}
      <div className="max-w-[1600px] mx-auto px-4 min-[380px]:px-5 sm:px-10 lg:px-14 xl:px-16 w-full relative z-10">
        
        {/* ─── TOP HEADER: TITLE & RIGHT-ALIGNED FILTER BUTTONS ─── */}
        <div className="pb-8 sm:pb-14 border-b border-white/10">
          
          {/* Headline in Orbitron Typography */}
          <div className="text-left select-none max-w-full">
            <div 
              className={`inline-block relative max-w-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isInView 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              <h2 className="font-orbitron font-black text-2xl min-[360px]:text-3xl min-[420px]:text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] text-white tracking-wider uppercase leading-tight sm:leading-none drop-shadow-2xl break-words">
                CAREER JOURNEY ARCHITECTURE
              </h2>
            </div>

            {/* Subtitle with Smooth Entrance Reveal */}
            <p 
              className={`text-xs sm:text-sm md:text-base text-zinc-400 font-normal mt-2.5 sm:mt-5 max-w-2xl leading-relaxed transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-5'
              }`}
            >
              A chronological roadmap of engineering roles, technical milestones, and academic foundation.
            </p>
          </div>

          {/* Filter Switcher: Scrollbar 100% hidden, smooth touch swiping */}
          <div className="flex justify-start sm:justify-end mt-5 sm:mt-8 overflow-x-auto no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-w-full pb-1 sm:pb-0 touch-pan-x">
            <div className="inline-flex items-center gap-1 sm:gap-2 p-1 sm:p-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md flex-shrink-0">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full text-[10px] min-[360px]:text-[11px] sm:text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeTab === 'all'
                    ? 'bg-[#FF5E1E] text-white shadow-xl shadow-[#FF5E1E]/50 ring-2 ring-[#FF5E1E] scale-[1.02]'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                All Journey (4)
              </button>
              <button
                onClick={() => setActiveTab('work')}
                className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full text-[10px] min-[360px]:text-[11px] sm:text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeTab === 'work'
                    ? 'bg-[#FF5E1E] text-white shadow-xl shadow-[#FF5E1E]/50 ring-2 ring-[#FF5E1E] scale-[1.02]'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Work (2)
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full text-[10px] min-[360px]:text-[11px] sm:text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeTab === 'education'
                    ? 'bg-[#FF5E1E] text-white shadow-xl shadow-[#FF5E1E]/50 ring-2 ring-[#FF5E1E] scale-[1.02]'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Education (2)
              </button>
            </div>
          </div>

        </div>

        {/* ─── SECTION 1: WORK EXPERIENCE ("WHERE I'VE WORKED") ─── */}
        {(activeTab === 'all' || activeTab === 'work') && (
          <div className="pt-10 sm:pt-16 lg:pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              
              {/* Left Column: Heading & 1+ Year Experience Metric */}
              <div className="lg:col-span-5 space-y-4 sm:space-y-6 lg:sticky lg:top-28">
                {/* WORK EXPERIENCE Label */}
                <div className="text-lg sm:text-2xl md:text-3xl font-black tracking-widest text-[#FF7A45] uppercase">
                  WORK EXPERIENCE
                </div>

                {/* Big Editorial Headline */}
                <div className="space-y-0.5 sm:space-y-1">
                  <h2 className="font-giant text-3xl min-[380px]:text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[0.9] text-white uppercase">
                    WHERE
                  </h2>
                  <h2 className="text-3xl min-[380px]:text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[0.9] text-white">
                    <span className="font-giant uppercase">I&apos;VE </span>
                    <span className="font-editorial text-[#FF5E1E] font-normal italic tracking-normal">
                      WORKED
                    </span>
                  </h2>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed max-w-md pt-1 sm:pt-2">
                  Hands-on engineering across production web applications, client solutions, and search performance analytics.
                </p>

                {/* 1+ Year of Experience highlight badge */}
                <div className="inline-flex items-baseline gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-[#121214]/90 border border-white/10 backdrop-blur-md shadow-xl mt-2 sm:mt-4">
                  <span className="font-giant text-4xl sm:text-6xl text-[#FF5E1E] font-extrabold leading-none">
                    1+
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm md:text-base font-bold tracking-wider text-white uppercase">
                      Year of Experience
                    </span>
                    <span className="text-[11px] sm:text-xs md:text-sm text-zinc-400 font-medium">
                      Web Engineering & SEO Analytics
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Vertical Timeline */}
              <div className="lg:col-span-7 relative pl-5 sm:pl-8 md:pl-12">
                
                {/* Continuous Vertical Timeline Line */}
                <div className="absolute left-2 sm:left-3 md:left-4 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#FF5E1E] via-white/20 to-white/5" />

                <div className="space-y-8 sm:space-y-14">
                  {workItems.map((item, idx) => (
                    <div key={item.id} className="relative group">
                      
                      {/* Timeline Node on the Vertical Line */}
                      <div className="absolute -left-[19px] sm:-left-[27px] md:-left-[31px] top-1.5 flex items-center justify-center">
                        {item.isCurrent ? (
                          <div className="relative flex items-center justify-center">
                            <span className="absolute w-6 h-6 rounded-full bg-[#FF5E1E]/30 animate-ping" />
                            <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-[#FF5E1E] bg-[#08080a] flex items-center justify-center shadow-[0_0_12px_#FF5E1E]">
                              <span className="w-2 h-2 rounded-full bg-[#FF5E1E]" />
                            </span>
                          </div>
                        ) : (
                          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-zinc-500 bg-[#08080a] group-hover:border-[#FF5E1E] group-hover:shadow-[0_0_10px_#FF5E1E] transition-all flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 group-hover:bg-[#FF5E1E] transition-colors" />
                          </div>
                        )}
                      </div>

                      {/* Content Card */}
                      <div className="rounded-2xl sm:rounded-3xl bg-[#121214]/70 hover:bg-[#121214] border border-white/10 hover:border-[#FF5E1E]/40 p-4 sm:p-7 md:p-8 backdrop-blur-xl transition-all duration-300 shadow-xl">
                        
                        {/* Date Range & Badge */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2 sm:mb-3">
                          <span className="text-[11px] sm:text-xs md:text-sm font-mono tracking-widest text-[#FF8A50] font-semibold uppercase">
                            {item.period}
                          </span>
                          {item.isCurrent ? (
                            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#FF5E1E]/15 border border-[#FF5E1E]/40 text-[#FF8A50] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E1E] animate-pulse" />
                              {item.badge}
                            </span>
                          ) : (
                            <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
                              {item.badge}
                            </span>
                          )}
                        </div>

                        {/* Big Role Headline */}
                        <h3 className="text-xl sm:text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-1.5 sm:mb-2 group-hover:text-[#FF8A50] transition-colors">
                          {item.title}
                        </h3>

                        {/* Company & Location */}
                        <div className="text-sm sm:text-base md:text-lg font-semibold text-zinc-300 mb-3 sm:mb-4 flex flex-wrap items-center gap-1.5 sm:gap-2">
                          <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF5E1E]" />
                          <span>{item.subtitle}</span>
                          <span className="text-zinc-600">•</span>
                          <span className="text-xs sm:text-sm text-zinc-400 font-normal">{item.location}</span>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm md:text-base text-zinc-300/90 leading-relaxed font-normal mb-4 sm:mb-6">
                          {item.description}
                        </p>

                        {/* Skills / Technology Pills */}
                        <div className="pt-3 sm:pt-4 border-t border-white/10 flex flex-wrap gap-1.5 sm:gap-2">
                          {item.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium bg-white/5 border border-white/10 text-zinc-300 group-hover:border-[#FF5E1E]/30 group-hover:text-white transition-all"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Intermediate Decorative Node */}
                      {idx === 0 && (
                        <div className="absolute -left-[19px] sm:-left-[27px] md:-left-[31px] -bottom-6 sm:-bottom-8 flex items-center justify-center">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-white/30 bg-[#08080a] flex items-center justify-center" />
                        </div>
                      )}

                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        )}

        {/* ─── SECTION 2: EDUCATION ("WHERE IT BEGAN") ─── */}
        {(activeTab === 'all' || activeTab === 'education') && (
          <div className={`${activeTab === 'all' ? 'mt-12 sm:mt-24 lg:mt-32 pt-10 sm:pt-16 lg:pt-20 border-t border-white/10' : 'pt-10 sm:pt-16 lg:pt-20'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              
              {/* Left Column: Heading */}
              <div className="lg:col-span-5 space-y-4 sm:space-y-6 lg:sticky lg:top-28">
                {/* EDUCATION Label */}
                <div className="text-lg sm:text-2xl md:text-3xl font-black tracking-widest text-[#FF7A45] uppercase">
                  EDUCATION
                </div>

                {/* Big Editorial Headline */}
                <div className="space-y-0.5 sm:space-y-1">
                  <h2 className="font-giant text-3xl min-[380px]:text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[0.9] text-white uppercase">
                    WHERE
                  </h2>
                  <h2 className="text-3xl min-[380px]:text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[0.9] text-white">
                    <span className="font-giant uppercase">IT </span>
                    <span className="font-editorial text-[#FF5E1E] font-normal italic tracking-normal">
                      BEGAN
                    </span>
                  </h2>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed max-w-md pt-1 sm:pt-2">
                  Academic foundation in Information Technology and specialized full-stack engineering courses that shaped my technical journey.
                </p>

                {/* Degree highlight badge */}
                <div className="inline-flex items-baseline gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-[#121214]/90 border border-white/10 backdrop-blur-md shadow-xl mt-2 sm:mt-4">
                  <span className="font-giant text-4xl sm:text-6xl text-[#FF5E1E] font-extrabold leading-none">
                    B.TECH
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm md:text-base font-bold tracking-wider text-white uppercase">
                      Information Technology
                    </span>
                    <span className="text-[11px] sm:text-xs md:text-sm text-zinc-400 font-medium">
                      Adhiparasakthi Engineering College
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Vertical Timeline */}
              <div className="lg:col-span-7 relative pl-5 sm:pl-8 md:pl-12">
                
                {/* Continuous Vertical Timeline Line */}
                <div className="absolute left-2 sm:left-3 md:left-4 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#FF5E1E] via-white/20 to-white/5" />

                <div className="space-y-8 sm:space-y-14">
                  {educationItems.map((item, idx) => (
                    <div key={item.id} className="relative group">
                      
                      {/* Timeline Node on the Vertical Line */}
                      <div className="absolute -left-[19px] sm:-left-[27px] md:-left-[31px] top-1.5 flex items-center justify-center">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-[#FF5E1E] bg-[#08080a] shadow-[0_0_10px_#FF5E1E] flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E1E]" />
                        </div>
                      </div>

                      {/* Content Card */}
                      <div className="rounded-2xl sm:rounded-3xl bg-[#121214]/70 hover:bg-[#121214] border border-white/10 hover:border-[#FF5E1E]/40 p-4 sm:p-7 md:p-8 backdrop-blur-xl transition-all duration-300 shadow-xl">
                        
                        {/* Date Range & Badge */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2 sm:mb-3">
                          <span className="text-[11px] sm:text-xs md:text-sm font-mono tracking-widest text-[#FF8A50] font-semibold uppercase">
                            {item.period}
                          </span>
                          <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase">
                            {item.badge}
                          </span>
                        </div>

                        {/* Big Degree / Course Headline */}
                        <h3 className="text-xl sm:text-2xl md:text-[2rem] font-bold text-white tracking-tight mb-1.5 sm:mb-2 group-hover:text-[#FF8A50] transition-colors">
                          {item.title}
                        </h3>

                        {/* Institution & Location */}
                        <div className="text-sm sm:text-base md:text-lg font-semibold text-zinc-300 mb-3 sm:mb-4 flex flex-wrap items-center gap-1.5 sm:gap-2">
                          <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF5E1E]" />
                          <span>{item.subtitle}</span>
                          <span className="text-zinc-600">•</span>
                          <span className="text-xs sm:text-sm text-zinc-400 font-normal">{item.location}</span>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm md:text-base text-zinc-300/90 leading-relaxed font-normal mb-4 sm:mb-6">
                          {item.description}
                        </p>

                        {/* Course Topics / Subjects Pills */}
                        <div className="pt-3 sm:pt-4 border-t border-white/10 flex flex-wrap gap-1.5 sm:gap-2">
                          {item.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium bg-white/5 border border-white/10 text-zinc-300 group-hover:border-[#FF5E1E]/30 group-hover:text-white transition-all"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Intermediate Decorative Node */}
                      {idx === 0 && (
                        <div className="absolute -left-[19px] sm:-left-[27px] md:-left-[31px] -bottom-6 sm:-bottom-8 flex items-center justify-center">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-white/30 bg-[#08080a] flex items-center justify-center" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}