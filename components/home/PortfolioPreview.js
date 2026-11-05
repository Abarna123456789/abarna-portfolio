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

  // 6 Curated Showcase Projects matching the UI reference screenshots
  const defaultProjects = [
    {
      id: '01',
      code: 'PRJ-01',
      year: '2024',
      category: 'CONSTRUCTION SERVICES',
      title: 'Build in Dubai',
      description:
        "Dubai Municipality's unified construction platform. It consolidates more than 60 scattered government services into one intuitive portal, from initial design approval to final completion certification.",
      tags: ['VUE 3', 'PWA', 'NEXT.JS', 'FRONTEND ARCHITECTURE'],
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1800&q=85',
      metrics: '60+ Gov Services',
      telemetry: 'LAT: 25.2048° N, LONG: 55.2708° E | STATUS: LIVE',
      link: '#',
    },
    {
      id: '02',
      code: 'PRJ-02',
      year: '2024',
      category: 'TRAVEL & MOBILE SAAS',
      title: 'KeyPharma Trava',
      description:
        'High-energy promotional launch site for a travel discovery platform featuring interactive 3D destination previews, dynamic itinerary planning, and frictionless mobile app conversions.',
      tags: ['REACT', 'NEXT.JS', 'TAILWIND CSS', 'APP UI'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1800&q=85',
      metrics: '50K+ Downloads',
      telemetry: 'SYS ID: TRAVA-SaaS // DEPLOYED: PRODUCTION',
      link: '#',
    },
    {
      id: '03',
      code: 'PRJ-03',
      year: '2024',
      category: 'LEGAL & CONSULTING',
      title: 'Alexander & Partners',
      description:
        'A prestigious, conversion-focused digital presence for high-end corporate legal consultants. Features real-time consultation scheduling, encrypted inquiry pipelines, and technical SEO architecture.',
      tags: ['NEXT.JS 14', 'TECHNICAL SEO', 'SCHEMA.ORG', 'REST API'],
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1800&q=85',
      metrics: '+140% Inquiries',
      telemetry: 'CORE WEB VITALS: 99/100 | INDEXED: GOOGLE',
      link: '#',
    },
    {
      id: '04',
      code: 'PRJ-04',
      year: '2024',
      category: 'COMMERCIAL SERVICES',
      title: 'GreenScape Eco Care',
      description:
        'Nature-inspired commercial and residential landscaping platform equipped with an instant algorithmic pricing calculator, recurring service booking, and automated CRM notifications.',
      tags: ['FULL STACK', 'PHP', 'LARAVEL', 'UI/UX DESIGN'],
      image: 'https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=1800&q=85',
      metrics: '3.2x Bookings',
      telemetry: 'LATENCY: 18ms | DATABASE: MYSQL LIVE',
      link: '#',
    },
    {
      id: '05',
      code: 'PRJ-05',
      year: '2024',
      category: 'FINANCIAL & WEALTH',
      title: 'Vanguard Wealth Advisory',
      description:
        'Trust-centric enterprise portal engineered for institutional wealth managers. Highlights encrypted client reporting dashboards, live market indices integration, and strict security compliance.',
      tags: ['REACT', 'NODE.JS', 'EXPRESS', 'SECURITY TOKENS'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85',
      metrics: '$24M Inbound',
      telemetry: 'ENCRYPTION: AES-256 | REGION: US-EAST',
      link: '#',
    },
    {
      id: '06',
      code: 'PRJ-06',
      year: '2024',
      category: 'ANALYTICS & SEO AUDIT',
      title: 'MindCarve Performance Suite',
      description:
        'Custom web auditing and keyword rank tracking dashboard. Streams real-time Google Analytics 4 sessions, Search Console query rankings, and Core Web Vitals health diagnostics.',
      tags: ['NEXT.JS', 'GA4 API', 'SEARCH CONSOLE', 'MONGODB'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=85',
      metrics: '+185% Visibility',
      telemetry: 'AUDIT ENGINE: V2.4 | REALTIME: CONNECTED',
      link: '#',
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

  // Measure total horizontal track overflow width
  useEffect(() => {
    const calculateTrackWidth = () => {
      if (trackRef.current) {
        const total = trackRef.current.scrollWidth;
        const viewport = window.innerWidth;
        // Keep ample spacing at the end for the final card
        setTrackWidth(Math.max(total - viewport + (window.innerWidth > 768 ? 240 : 80), 0));
      }
    };

    calculateTrackWidth();
    window.addEventListener('resize', calculateTrackWidth);
    return () => window.removeEventListener('resize', calculateTrackWidth);
  }, [projects.length]);

  // Scroll synchronization: vertical page scroll drives horizontal translation after header scrolls past
  useEffect(() => {
    const handleScroll = () => {
      if (!galleryRef.current) return;
      const rect = galleryRef.current.getBoundingClientRect();
      const totalScrollable = galleryRef.current.offsetHeight - window.innerHeight;
      
      if (totalScrollable <= 0) return;

      // Calculate progress between 0 and 1 strictly while gallery is pinned
      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
      setScrollProgress(progress);

      // Dynamically calculate which project is in the active center view
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
      {/* Background ambient lighting matching cosmic theme */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#FF5E1E]/8 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[550px] h-[550px] bg-[#FF5E1E]/6 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* ─── 1. TOP HEADER (Scrolls Naturally with Page Before Gallery Pins) ─── */}
      <div
        ref={headerRef}
        className="pt-16 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden"
      >
        {/* Slow Scrolling Ghost Watermark Marquee */}
        <div 
          className={`w-full overflow-hidden select-none pointer-events-none absolute inset-x-0 top-10 sm:top-14 md:top-16 lg:top-20 z-0 transition-opacity duration-1000 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ willChange: 'transform' }}
        >
          <div className="flex w-max animate-marquee-slower">
            <div className="flex items-center flex-shrink-0">
              <span className="font-orbitron font-black text-[7rem] sm:text-[9.5rem] md:text-[12rem] lg:text-[14rem] xl:text-[16.5rem] uppercase tracking-widest text-white/[0.08] leading-none whitespace-nowrap pr-14 sm:pr-24">
                FEATURED WORK FEATURED WORK FEATURED WORK
              </span>
            </div>
            <div className="flex items-center flex-shrink-0" aria-hidden="true">
              <span className="font-orbitron font-black text-[7rem] sm:text-[9.5rem] md:text-[12rem] lg:text-[14rem] xl:text-[16.5rem] uppercase tracking-widest text-white/[0.08] leading-none whitespace-nowrap pr-14 sm:pr-24">
                FEATURED WORK FEATURED WORK FEATURED WORK
              </span>
            </div>
          </div>
        </div>

        {/* Header Text Container */}
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 w-full relative z-10 select-none">
          <div 
            className={`inline-block relative transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isInView 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            <h2 className="font-orbitron font-black text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] 2xl:text-[8.5rem] text-white tracking-wider uppercase leading-none drop-shadow-2xl">
              PROJECTS
            </h2>
            
            {/* Glowing Orange Underline */}
            
          </div>

          <p 
            className={`text-xs sm:text-sm md:text-base text-zinc-400 font-normal mt-4 sm:mt-5 max-w-2xl leading-relaxed transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
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
        // Tall container: Scrolling through this distance glides the large full-width image cards sideways
        style={{ height: '350vh' }}
      >
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden z-10">
          
          {/* Horizontal Track of Large Cinematic Image Cards */}
          <div
            ref={trackRef}
            className="flex items-center gap-8 sm:gap-12 pl-6 sm:pl-12 lg:pl-16 pr-16 select-none"
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
                    // Full-width & large card height taking advantage of viewport while ensuring bottom HUD card is 100% visible
                    height: 'clamp(280px, 58vh, 640px)',
                    aspectRatio: '16 / 10',
                  }}
                >
                  {/* Cyberpunk Outer Frame with Chamfered Tech Corners */}
                  <div
                    className={`relative w-full h-full p-2.5 sm:p-4 rounded-3xl transition-all duration-500 bg-[#0d0e12] border ${
                      isActive
                        ? 'border-[#FF5E1E] shadow-[0_0_50px_rgba(255,94,30,0.4)] ring-1 ring-[#FF5E1E]/60'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                    style={{
                      clipPath:
                        'polygon(32px 0, calc(100% - 32px) 0, 100% 32px, 100% calc(100% - 32px), calc(100% - 32px) 100%, 32px 100%, 0 calc(100% - 32px), 0 32px)',
                    }}
                  >
                    {/* Cyber Corner Reticle Notches */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#FF5E1E] pointer-events-none" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#FF5E1E] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#FF5E1E] pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#FF5E1E] pointer-events-none" />

                    {/* High Resolution Project Screenshot */}
                    <div 
                      className="relative w-full h-full rounded-2xl overflow-hidden bg-[#131418]"
                      style={{
                        clipPath:
                          'polygon(22px 0, calc(100% - 22px) 0, 100% 22px, 100% calc(100% - 22px), calc(100% - 22px) 100%, 22px 100%, 0 calc(100% - 22px), 0 22px)',
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
                      <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-semibold bg-black/70 backdrop-blur-md border border-[#FF5E1E]/50 text-[#FF5E1E]">
                          {project.year} • {project.code}
                        </span>
                      </div>

                      {/* Bottom-Right Image Title Pill */}
                      <div className="absolute bottom-5 right-6 z-10 hidden sm:block">
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
            className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-8 lg:left-12 z-30 w-[calc(100%-2rem)] sm:w-auto sm:max-w-lg md:max-w-xl p-3.5 sm:p-5 md:p-6 rounded-2xl bg-[#0f1015]/95 backdrop-blur-xl border border-[#FF5E1E]/40 shadow-2xl shadow-[#FF5E1E]/20 select-none transition-all duration-500"
            style={{
              clipPath:
                'polygon(18px 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%, 0 18px)',
            }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#FF5E1E]" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#FF5E1E]" />

            {/* Top Row: Category + Project Code + Year */}
            <div className="flex items-center justify-between gap-4 pb-1.5 border-b border-white/10 mb-2 text-[10px] sm:text-[11px] font-mono tracking-wider">
              <span className="text-[#FF5E1E] uppercase font-semibold">
                // {currentProject.category}
              </span>
              <span className="text-zinc-400">
                {currentProject.code} • {currentProject.year}
              </span>
            </div>

            {/* Project Title */}
            <h3 className="font-orbitron font-bold text-xl sm:text-2xl md:text-3xl text-white tracking-wide uppercase leading-tight">
              {currentProject.title}
            </h3>

            {/* Project Description */}
            <p className="text-xs sm:text-sm text-zinc-300 font-normal mt-2 leading-relaxed line-clamp-2 sm:line-clamp-3">
              {currentProject.description}
            </p>

            {/* Tech Tags Row + Open Case Study CTA Button */}
            <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-2.5 border-t border-white/10">
              
              {/* Tech Pills */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {currentProject.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 rounded bg-white/5 border border-[#FF5E1E]/30 text-[9px] sm:text-[10px] font-mono font-medium text-zinc-300 uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Open Case Study CTA */}
              <a
                href={currentProject.link || '#'}
                className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#FF5E1E] hover:bg-[#ff723b] text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-lg shadow-[#FF5E1E]/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>OPEN CASE STUDY</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
              </a>
            </div>

            {/* Micro-telemetry Status at bottom (Full line cleanly displayed) */}
            <div className="pt-2 mt-2 border-t border-white/5 text-[9px] font-mono text-zinc-500 tracking-widest uppercase">
              // {currentProject.telemetry}
            </div>
          </div>

          {/* ─── 4. FLOATING BOTTOM-RIGHT COUNTER (01 / 06) + SCROLL HINT ─── */}
          <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10 lg:right-16 z-30 flex items-center gap-6 select-none">
            
            {/* Subtle Scroll Indicator */}
            <div className="hidden md:flex items-center gap-2 text-zinc-500 font-mono text-[11px] tracking-widest uppercase">
              <span>SCROLL TO VIEW</span>
              <div className="w-10 h-[1px] bg-zinc-700" />
            </div>

            {/* Counter matching screenshot 9a35e429 */}
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
