'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioPreview({ projects: externalProjects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [trackWidth, setTrackWidth] = useState(0);

  const headerRef = useRef(null);
  const galleryRef = useRef(null);
  const trackRef = useRef(null);

  // 6 Curated Showcase Projects matching exact user portfolio specifications
  const defaultProjects = [
    {
      id: '01',
      code: 'PRJ-01',
      year: '2025',
      category: 'REAL ESTATE & PARALLAX',
      title: 'Elite Real Estate Parallax',
      description:
        'High-performance luxury real estate web experience built with Next.js. Features cinematic scroll-driven parallax effects, interactive property floorplans, architectural showcase galleries, and modern responsive layouts.',
      tags: ['NEXT.JS', 'REACT', 'PARALLAX EFFECTS', 'TAILWIND CSS'],
      image: '/images/real-estate-parallex-website.webp',
      metrics: 'Featured Personal Project',
      telemetry: 'DOMAIN: REAL ESTATE • STACK: NEXT.JS & PARALLAX • STATUS: LIVE',
      link: '#',
      isClientWork: false, // Personal project -> Active Case Study link
    },
    {
      id: '02',
      code: 'PRJ-02',
      year: '2024',
      category: 'PRINTING & PACKAGING SOLUTIONS',
      title: 'PrintCraft Industrial Solutions',
      description:
        'Commercial printing and packaging solutions website developed with PHP. Features automated quote inquiries, paper & finish product catalog showcase, and a streamlined client contact pipeline.',
      tags: ['PHP', 'MYSQL', 'WEB DEVELOPMENT', 'RESPONSIVE UI'],
      image: '/images/printing-solution-website.webp',
      metrics: 'Office Client Work',
      telemetry: 'DOMAIN: PRINTING SOLUTIONS • STACK: PHP & MYSQL • CLIENT DEPLOYED',
      link: null,
      isClientWork: true, // Office client website -> Disabled
    },
    {
      id: '03',
      code: 'PRJ-03',
      year: '2024',
      category: 'REAL ESTATE & PROPERTY PORTAL',
      title: 'PrimeLand Realty Portal',
      description:
        'Conversion-focused real estate portal engineered with PHP. Built with structured property listings, neighborhood property filtering, high-converting lead capture pipelines, and search engine optimization.',
      tags: ['PHP', 'TECHNICAL SEO', 'PROPERTY PORTAL', 'LEAD GEN'],
      image: '/images/real-estate-website.webp',
      metrics: 'Office Client Work',
      telemetry: 'DOMAIN: REAL ESTATE PORTAL • STACK: PHP & SEO • CLIENT DEPLOYED',
      link: null,
      isClientWork: true, // Office client website -> Disabled
    },
    {
      id: '04',
      code: 'PRJ-04',
      year: '2024',
      category: 'HEALTHCARE & DOCTOR PORTFOLIO',
      title: 'Dr. Care Medical Consultant',
      description:
        'Professional healthcare specialist and medical consultant portfolio built with PHP. Includes patient appointment booking forms, clinical treatment breakdowns, verified patient reviews, and mobile-first speed.',
      tags: ['PHP', 'HEALTHCARE UI', 'APPOINTMENTS', 'ON-PAGE SEO'],
      image: '/images/Doctor-portfolio-website.webp',
      metrics: 'Office Client Work',
      telemetry: 'DOMAIN: DOCTOR PORTFOLIO • STACK: PHP & HEALTHCARE • CLIENT DEPLOYED',
      link: null,
      isClientWork: true, // Office client website -> Disabled
    },
    {
      id: '05',
      code: 'PRJ-05',
      year: '2024',
      category: 'BRANDING & CREATIVE STUDIO',
      title: 'AuraBrand Creative Agency',
      description:
        'Visual branding agency web presence crafted with PHP. Highlights corporate brand transformations, visual identity case studies, custom typography presentations, and digital design portfolio showcases.',
      tags: ['PHP', 'BRANDING STUDIO', 'CREATIVE AGENCY', 'UI/UX'],
      image: '/images/Branding-website.webp',
      metrics: 'Office Client Work',
      telemetry: 'DOMAIN: BRANDING AGENCY • STACK: PHP & CREATIVE UI • CLIENT DEPLOYED',
      link: null,
      isClientWork: true, // Office client website -> Disabled
    },
    {
      id: '06',
      code: 'PRJ-06',
      year: '2024',
      category: 'AI POSTER & PRODUCT BRANDING',
      title: 'AI Generative Posters & Brand Collateral',
      description:
        'Creative suite of AI-assisted promotional posters, digital marketing creatives, and product branding graphics. Designed using Claude AI, Google Antigravity, and Canva for high-impact social media and brand awareness.',
      tags: ['GENERATIVE AI', 'CANVA', 'AI POSTER DESIGN', 'PRODUCT BRANDING'],
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1800&q=85',
      metrics: 'Design & Branding Work',
      telemetry: 'DOMAIN: AI POSTERS & BRANDING • TOOLS: GENERATIVE AI & CANVA',
      link: null,
      isClientWork: true, // Client design work -> Disabled
    },
  ];

  const projects = externalProjects && externalProjects.length >= 6 ? externalProjects : defaultProjects;

  // Active project is either hovered by mouse or determined by scroll position
  const activeProjectIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;
  const currentProject = projects[activeProjectIndex] || projects[0];

  // Header entrance animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Measure total horizontal track overflow width dynamically
  useEffect(() => {
    const calculateTrackWidth = () => {
      if (trackRef.current) {
        const total = trackRef.current.scrollWidth;
        const viewport = window.innerWidth;
        // Ample margin so the final card is fully viewable across mobile & desktop
        const endSpacing = window.innerWidth > 768 ? 240 : 80;
        setTrackWidth(Math.max(total - viewport + endSpacing, 0));
      }
    };

    calculateTrackWidth();
    const timer = setTimeout(calculateTrackWidth, 300);

    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined' && trackRef.current) {
      resizeObserver = new ResizeObserver(() => {
        calculateTrackWidth();
      });
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener('resize', calculateTrackWidth);
    window.addEventListener('orientationchange', calculateTrackWidth);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateTrackWidth);
      window.removeEventListener('orientationchange', calculateTrackWidth);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, [projects.length]);

  // Scroll synchronization: vertical page scroll drives horizontal translation after header scrolls past
  useEffect(() => {
    const handleScroll = () => {
      if (!galleryRef.current) return;
      const rect = galleryRef.current.getBoundingClientRect();
      const totalScrollable = galleryRef.current.offsetHeight - window.innerHeight;
      
      if (totalScrollable <= 0) return;

      // Calculate progress strictly while gallery is pinned
      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
      setScrollProgress(progress);

      // Dynamically update active index based on scroll position
      const rawIdx = Math.round(progress * (projects.length - 1));
      const nextActive = Math.min(Math.max(rawIdx, 0), projects.length - 1);
      setActiveIndex(nextActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [projects.length]);

  // Compute smooth horizontal translation
  const translateX = -scrollProgress * trackWidth;

  return (
    <section
      id="portfolio"
      className="relative bg-[#08080a] border-t border-white/5"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 right-0 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-[#FF5E1E]/8 rounded-full blur-[140px] sm:blur-[170px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[300px] sm:w-[550px] h-[300px] sm:h-[550px] bg-[#FF5E1E]/6 rounded-full blur-[130px] sm:blur-[160px] pointer-events-none -z-10" />

      {/* ─── 1. TOP HEADER (Scrolls Naturally with Page Before Gallery Pins) ─── */}
      <div
        ref={headerRef}
        className="pt-14 sm:pt-24 pb-8 sm:pb-16 relative overflow-hidden"
      >
        {/* Slow Scrolling Ghost Watermark Marquee */}
        <div 
          className={`w-full overflow-hidden select-none pointer-events-none absolute inset-x-0 top-8 sm:top-14 md:top-16 lg:top-20 z-0 transition-opacity duration-1000 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ willChange: 'transform' }}
        >
          <div className="flex w-max animate-marquee-slower">
            <div className="flex items-center flex-shrink-0">
              <span className="font-orbitron font-black text-[5rem] sm:text-[9.5rem] md:text-[12rem] lg:text-[14rem] xl:text-[16.5rem] uppercase tracking-widest text-white/[0.08] leading-none whitespace-nowrap pr-8 sm:pr-24">
                FEATURED WORK FEATURED WORK FEATURED WORK
              </span>
            </div>
            <div className="flex items-center flex-shrink-0" aria-hidden="true">
              <span className="font-orbitron font-black text-[5rem] sm:text-[9.5rem] md:text-[12rem] lg:text-[14rem] xl:text-[16.5rem] uppercase tracking-widest text-white/[0.08] leading-none whitespace-nowrap pr-8 sm:pr-24">
                FEATURED WORK FEATURED WORK FEATURED WORK
              </span>
            </div>
          </div>
        </div>

        {/* Header Text Container */}
        <div className="max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-14 xl:px-16 w-full relative z-10 select-none">
          <div 
            className={`inline-block relative transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isInView 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            <h2 className="font-orbitron font-black text-3xl min-[380px]:text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] 2xl:text-[8.5rem] text-white tracking-wider uppercase leading-none drop-shadow-2xl">
              PROJECTS
            </h2>
          </div>

          <p 
            className={`text-xs sm:text-sm md:text-base text-zinc-400 font-normal mt-3 sm:mt-5 max-w-2xl leading-relaxed transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-5'
            }`}
          >
            Featured projects that spotlight my creative frontend work.
          </p>
        </div>
      </div>

      {/* ─── 2. STICKY HORIZONTAL SHOWCASE (Pins at Image Gallery & Scrolls Sideways) ─── */}
      <div
        ref={galleryRef}
        className="relative"
        style={{ height: '350vh' }}
      >
        <div className="sticky top-0 h-[90dvh] min-h-[580px] w-full flex items-center overflow-hidden z-10">
          
          {/* Horizontal Track of Large Cinematic Image Cards */}
          <div
            ref={trackRef}
            className="flex items-center gap-5 sm:gap-8 md:gap-12 pl-4 sm:pl-12 lg:pl-16 pr-10 sm:pr-16 select-none"
            style={{
              transform: `translate3d(${translateX}px, 0, 0)`,
              willChange: 'transform',
            }}
          >
            {projects.map((project, idx) => {
              const isActive = activeProjectIndex === idx;

              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative flex-shrink-0 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive 
                      ? 'scale-100 opacity-100' 
                      : 'scale-[0.94] opacity-40 hover:opacity-85'
                  }`}
                  style={{
                    // Height is proportional across mobile (220px-340px) up to 640px on desktop
                    height: 'clamp(210px, 44vh, 620px)',
                    aspectRatio: '16 / 10',
                  }}
                >
                  {/* Cyberpunk Outer Frame with Chamfered Tech Corners */}
                  <div
                    className={`relative w-full h-full p-2 sm:p-3.5 md:p-4 rounded-2xl sm:rounded-3xl transition-all duration-500 bg-[#0d0e12] border ${
                      isActive
                        ? 'border-[#FF5E1E] shadow-[0_0_40px_rgba(255,94,30,0.35)] ring-1 ring-[#FF5E1E]/60'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                    style={{
                      clipPath:
                        'polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)',
                    }}
                  >
                    {/* Cyber Corner Reticle Notches */}
                    <div className="absolute top-0 left-0 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-l-2 border-[#FF5E1E] pointer-events-none" />
                    <div className="absolute top-0 right-0 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-r-2 border-[#FF5E1E] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-l-2 border-[#FF5E1E] pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-r-2 border-[#FF5E1E] pointer-events-none" />

                    {/* High Resolution Project Screenshot */}
                    <div 
                      className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#131418]"
                      style={{
                        clipPath:
                          'polygon(16px 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 16px), 0 16px)',
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-105"
                        loading="lazy"
                      />

                      {/* Gradient Overlay for Cinematic Depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                      {/* Top Status Badge inside image */}
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 flex items-center gap-2">
                        <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-mono uppercase tracking-wider font-semibold bg-black/75 backdrop-blur-md border border-[#FF5E1E]/50 text-[#FF5E1E]">
                          {project.year} • {project.code}
                        </span>
                      </div>

                      {/* Bottom-Right Image Title Pill (Desktop/Tablet) */}
                      <div className="absolute bottom-4 right-5 sm:bottom-5 sm:right-6 z-10 hidden sm:block">
                        <span className="text-sm sm:text-base font-orbitron font-bold text-white tracking-wide uppercase drop-shadow-lg">
                          {project.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ─── 3. FLOATING BOTTOM-LEFT CYBER HUD DETAILS CARD ─── */}
          <div 
            className="absolute bottom-3 sm:bottom-6 md:bottom-8 left-3 sm:left-8 lg:left-12 z-30 w-[calc(100%-1.5rem)] sm:w-auto sm:max-w-lg md:max-w-xl p-3 sm:p-5 md:p-6 rounded-2xl bg-[#0f1015]/95 backdrop-blur-xl border border-[#FF5E1E]/40 shadow-2xl shadow-[#FF5E1E]/20 select-none transition-all duration-500 max-h-[44vh] sm:max-h-none overflow-y-auto"
            style={{
              clipPath:
                'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)',
            }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-3.5 sm:w-4 h-3.5 sm:h-4 border-t-2 border-l-2 border-[#FF5E1E]" />
            <div className="absolute bottom-0 right-0 w-3.5 sm:w-4 h-3.5 sm:h-4 border-b-2 border-r-2 border-[#FF5E1E]" />

            {/* Top Row: Category + Project Code + Year + Mobile Counter */}
            <div className="flex items-center justify-between gap-2.5 pb-1 sm:pb-1.5 border-b border-white/10 mb-1.5 sm:mb-2 text-[9px] sm:text-[11px] font-mono tracking-wider">
              <span className="text-[#FF5E1E] uppercase font-semibold truncate">
                // {currentProject.category}
              </span>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <span className="text-zinc-400">
                  {currentProject.code} • {currentProject.year}
                </span>
                <span className="sm:hidden font-orbitron font-bold text-[#FF5E1E] ml-1">
                  [{String(activeProjectIndex + 1).padStart(2, '0')}/{String(projects.length).padStart(2, '0')}]
                </span>
              </div>
            </div>

            {/* Project Title */}
            <h3 className="font-orbitron font-bold text-base sm:text-xl md:text-2xl text-white tracking-wide uppercase leading-snug sm:leading-tight">
              {currentProject.title}
            </h3>

            {/* Project Description */}
            <p className="text-[11px] sm:text-xs md:text-sm text-zinc-300 font-normal mt-1 sm:mt-2 leading-relaxed line-clamp-2 sm:line-clamp-3">
              {currentProject.description}
            </p>

            {/* Tech Tags Row + Open Case Study CTA Button */}
            <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 mt-2.5 sm:mt-4 pt-2 sm:pt-2.5 border-t border-white/10">
              
              {/* Tech Pills */}
              <div className="flex flex-wrap gap-1 sm:gap-1.5 max-h-12 overflow-hidden">
                {currentProject.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 sm:px-2.5 py-0.5 rounded bg-white/5 border border-[#FF5E1E]/30 text-[8px] sm:text-[10px] font-mono font-medium text-zinc-300 uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Button: Active for Project 1, Cleanly Disabled for Office Client Projects */}
              {!currentProject.isClientWork ? (
                <a
                  href={currentProject.link || '#'}
                  className="group inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded bg-[#FF5E1E] hover:bg-[#ff723b] text-white text-[9px] sm:text-[11px] font-mono font-bold uppercase tracking-wider shadow-lg shadow-[#FF5E1E]/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex-shrink-0"
                >
                  <span>OPEN CASE STUDY</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
                </a>
              ) : (
                <div
                  className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded bg-white/5 border border-white/10 text-zinc-500 text-[8px] sm:text-[10px] font-mono uppercase tracking-wider cursor-not-allowed select-none flex-shrink-0"
                  title="Office client project"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                  <span>CLIENT WORK (CONFIDENTIAL)</span>
                </div>
              )}
            </div>

            {/* Micro-telemetry Status at bottom (No GPS/Lat/Long) */}
            <div className="pt-1 sm:pt-1.5 mt-1 sm:mt-1.5 border-t border-white/5 text-[8px] sm:text-[9px] font-mono text-zinc-500 tracking-widest uppercase truncate">
              // {currentProject.telemetry}
            </div>
          </div>

          {/* ─── 4. FLOATING BOTTOM-RIGHT COUNTER (01 / 06) + SCROLL HINT (Desktop & Tablet) ─── */}
          <div className="hidden sm:flex absolute bottom-6 sm:bottom-8 right-6 sm:right-10 lg:right-16 z-30 items-center gap-6 select-none">
            
            {/* Subtle Scroll Indicator */}
            <div className="hidden md:flex items-center gap-2 text-zinc-500 font-mono text-[11px] tracking-widest uppercase">
              <span>SCROLL TO VIEW</span>
              <div className="w-10 h-[1px] bg-zinc-700" />
            </div>

            {/* Counter */}
            <div className="font-orbitron font-bold text-2xl sm:text-3xl md:text-4xl tracking-widest text-zinc-500 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-xl border border-white/10">
              <span className="text-[#FF5E1E]">
                {String(activeProjectIndex + 1).padStart(2, '0')}
              </span>
              <span className="mx-2 text-zinc-600">/</span>
              <span>{String(projects.length).padStart(2, '0')}</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}