'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // Smooth scroll-reveal / popup effect when section enters viewport
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

  const skillsList = [
    {
      id: '01',
      title: 'Frontend Development',
      subtitle:
        'Building responsive, accessible, and high-performance user interfaces with modern React, Next.js, and clean Tailwind architectures.',
      tags: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'React.js',
        'Next.js',
        'Bootstrap',
        'Responsive Web Design',
        'Tailwind CSS',
      ],
      previewTitle: 'React & Next.js Architecture',
      previewBadge: 'Modern Frontend',
      accent: '#FF5E1E',
    },
    {
      id: '02',
      title: 'Backend Development',
      subtitle:
        'Architecting robust server-side systems, secure RESTful APIs, and transactional logic with PHP, Laravel, Node.js, and Express.',
      tags: [
        'PHP',
        'Laravel',
        'Node.js',
        'Express.js',
        'REST API Integration',
        'Backend Development',
        'Form Handling & Email Integration',
      ],
      previewTitle: 'PHP, Laravel & Node.js',
      previewBadge: 'REST Endpoints',
      accent: '#22C55E',
    },
    {
      id: '03',
      title: 'CMS & Website Development',
      subtitle:
        'Developing and optimizing custom WordPress themes, Elementor layouts, and high-converting WooCommerce storefronts with zero bloat.',
      tags: [
        'WordPress',
        'Elementor',
        'WooCommerce',
        'Contact Form 7',
        'ElementsKit',
        'Custom WordPress Development',
        'Website Maintenance',
      ],
      previewTitle: 'WordPress & WooCommerce',
      previewBadge: 'E-Commerce & CMS',
      accent: '#38BDF8',
    },
    {
      id: '04',
      title: 'Database Management',
      subtitle:
        'Designing normalized relational database schemas, running complex queries, and ensuring high data integrity with MySQL and SQLite.',
      tags: [
        'MySQL',
        'SQLite',
        'phpMyAdmin',
        'Database Design',
        'Database Management',
      ],
      previewTitle: 'MySQL & SQLite Schemas',
      previewBadge: 'Structured Data',
      accent: '#F59E0B',
    },
    {
      id: '05',
      title: 'API & Software Integration',
      subtitle:
        'Seamlessly connecting web applications with payment gateways, CRMs, authentication layers, and third-party SaaS REST APIs.',
      tags: [
        'REST API',
        'API Integration',
        'Third-Party API Integration',
        'Software Product Development',
        'Website & Application Integration',
      ],
      previewTitle: 'Webhooks & REST APIs',
      previewBadge: 'Seamless Integration',
      accent: '#8B5CF6',
    },
    {
      id: '06',
      title: 'AI Tools & AI-Assisted Development',
      subtitle:
        'Accelerating software delivery, intelligent prompt engineering, creative poster generation, and AI-assisted workflows using Claude and Antigravity.',
      tags: [
        'Claude AI',
        'Google Antigravity',
        'AI-Assisted Coding',
        'AI Poster Generation',
        'AI Content Generation',
        'AI-Based Design',
        'AI Workflow Assistance',
      ],
      previewTitle: 'Claude AI & Antigravity',
      previewBadge: 'AI Acceleration',
      accent: '#EC4899',
    },
    {
      id: '07',
      title: 'Graphic Design & Creative Tools',
      subtitle:
        'Designing compelling visual brand identities, social media creatives, promotional posters, and digital marketing banners with Canva and generative AI.',
      tags: [
        'Canva',
        'AI Image Generation',
        'Poster Design',
        'Social Media Creatives',
        'Branding & Visual Design',
        'Digital Marketing Creatives',
      ],
      previewTitle: 'Canva & Visual Design',
      previewBadge: 'Creative Branding',
      accent: '#06B6D4',
    },
    {
      id: '08',
      title: 'Search Engine Optimization (SEO)',
      subtitle:
        'Dominating organic search results through comprehensive technical audits, Core Web Vitals optimization, schema markup, and keyword strategy.',
      tags: [
        'Technical SEO',
        'On-Page SEO',
        'Off-Page SEO',
        'Local SEO',
        'Keyword Research',
        'Competitor Analysis',
        'Backlink Building',
        'Schema Markup',
        'Sitemap.xml',
        'Robots.txt',
        'Website SEO Auditing',
        'SEO Content Optimization',
      ],
      previewTitle: 'Technical & On-Page SEO',
      previewBadge: 'Top 3 Ranking',
      accent: '#10B981',
    },
    {
      id: '09',
      title: 'Analytics & Webmaster Tools',
      subtitle:
        'Tracking user journeys, measuring conversions, and diagnosing indexing health with Google Analytics 4, Tag Manager, and Search Console.',
      tags: [
        'Google Analytics 4 (GA4)',
        'Google Search Console',
        'Google Tag Manager (GTM)',
        'Microsoft Clarity',
        'Google Business Profile',
        'Google Ads',
        'Pingdom',
      ],
      previewTitle: 'GA4, GSC & Clarity',
      previewBadge: 'Conversion Insights',
      accent: '#F97316',
    },
    {
      id: '10',
      title: 'Development Tools & Technologies',
      subtitle:
        'Leveraging industry-standard DevOps, version control, API testing, VPS hosting, and PM2 process management for zero-downtime deployments.',
      tags: [
        'Visual Studio Code',
        'Git',
        'GitHub',
        'XAMPP',
        'Postman',
        'npm',
        'PM2',
        'VPS Deployment',
        'Website Hosting & Deployment',
      ],
      previewTitle: 'Git, PM2 & VPS Deploy',
      previewBadge: 'DevOps & Tooling',
      accent: '#6366F1',
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="pt-12 sm:pt-20 lg:pt-24 pb-12 sm:pb-20 bg-[#08080a] relative overflow-hidden border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#FF5E1E]/8 rounded-full blur-[170px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

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
              EXPERTISE TECHNICAL EXPERTISE TECHNICAL EXPERTISE TECHNICAL
            </span>
          </div>
          <div className="flex items-center flex-shrink-0" aria-hidden="true">
            <span className="font-orbitron font-black text-[5rem] sm:text-[9.5rem] md:text-[12rem] lg:text-[14rem] xl:text-[16.5rem] uppercase tracking-widest text-white/[0.08] leading-none whitespace-nowrap pr-14 sm:pr-24">
              EXPERTISE TECHNICAL EXPERTISE TECHNICAL EXPERTISE TECHNICAL
            </span>
          </div>
        </div>
      </div>

      {/* Unified container matching Navbar, Hero & Experience */}
      <div className="max-w-[1600px] mx-auto px-4 min-[380px]:px-5 sm:px-10 lg:px-14 xl:px-16 w-full relative z-10">
        
        {/* ─── TOP HEADER ─── */}
        <div className="pb-8 sm:pb-14 border-b border-white/10">
          <div className="text-left select-none">
            
            {/* Enlarged Headline with Smooth Entrance Popup Reveal */}
            <div 
              className={`inline-block relative transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isInView 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              <h2 className="font-orbitron font-black text-4xl min-[360px]:text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] 2xl:text-[8.5rem] text-white tracking-wider uppercase leading-none drop-shadow-2xl">
                SKILLS
              </h2>
            </div>

            {/* Subtitle with Smooth Reveal */}
            <p 
              className={`text-xs sm:text-sm md:text-base text-zinc-400 font-normal mt-3 sm:mt-5 max-w-2xl leading-relaxed transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-5'
              }`}
            >
              Ten core technical disciplines, foundation to deployment. Nobody ever finishes a language, these are the domains I keep sharpening.
            </p>
          </div>
        </div>

        {/* ─── 10 INTERACTIVE SKILLS ROWS ─── */}
        <div 
          onMouseLeave={() => setHoveredSkill(null)}
          className="divide-y divide-white/10"
        >
          {skillsList.map((skill) => {
            const isHovered = hoveredSkill === skill.id;

            return (
              <div
                key={skill.id}
                onMouseEnter={() => setHoveredSkill(skill.id)}
                className="group py-7 sm:py-12 lg:py-16 transition-colors duration-300 relative select-none"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-8 lg:gap-14 xl:gap-16">
                  
                  {/* Left Column: Number + Arrow Indicator & Desktop Hover Preview Card */}
                  <div className="w-full lg:w-[350px] xl:w-[390px] flex-shrink-0">
                    
                    {/* Top Row: Number indicator + Mobile Quick Action Arrow (Prevents title overlap) */}
                    <div className="flex items-center justify-between gap-4 mb-2 sm:mb-4">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <span className="font-giant text-lg sm:text-2xl text-white tracking-wider">
                          {skill.id}
                        </span>
                        <div className="flex items-center w-20 min-[380px]:w-28 sm:w-36">
                          <div className="w-full h-[1px] bg-zinc-700/80"></div>
                          <span className="text-zinc-500 text-xs -ml-1">→</span>
                        </div>
                      </div>

                      {/* Mobile Arrow Button (Cleanly aligned in top row) */}
                      <a
                        href="#portfolio"
                        className="flex lg:hidden items-center justify-center w-8 h-8 min-[380px]:w-9 min-[380px]:h-9 rounded-full bg-[#FF5E1E] text-white shadow-md shadow-[#FF5E1E]/30 flex-shrink-0 group-hover:rotate-45 transition-transform duration-200"
                        aria-label={`View projects built with ${skill.title}`}
                      >
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                      </a>
                    </div>

                    {/* High-Fidelity Expanded Preview Card on Desktop Hover */}
                    <div className="relative w-full max-w-[340px] xl:max-w-[380px] aspect-[16/10] hidden lg:block">
                      <div
                        className={`w-full h-full rounded-3xl overflow-hidden border bg-[#121214] relative transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isHovered
                            ? 'opacity-100 scale-100 translate-y-0 delay-100 border-white/20 shadow-2xl shadow-[#FF5E1E]/20'
                            : 'opacity-0 scale-[0.96] translate-y-2 pointer-events-none border-transparent delay-0'
                        }`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-[#FF5E1E]/25 via-black/80 to-[#121214] pointer-events-none" />
                        <div className="absolute inset-0 stars-overlay opacity-60 pointer-events-none" />

                        <div className="relative z-10 pt-3 pb-1 text-center">
                          <span className="text-xs sm:text-sm font-semibold tracking-wider text-zinc-200">
                            {skill.previewTitle}
                          </span>
                        </div>

                        {/* 01: Frontend Development */}
                        {skill.id === '01' && (
                          <div className="relative z-10 mx-3 sm:mx-4 mt-1 bg-[#15171c]/95 rounded-xl border border-white/10 p-3 shadow-2xl font-mono text-[10px] text-zinc-300">
                            <div className="flex items-center gap-1.5 pb-2 border-b border-white/10 mb-2">
                              <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                              <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                              <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                              <span className="ml-3 text-[9px] text-zinc-500">App.tsx (Next.js 14)</span>
                            </div>
                            <div className="space-y-1 leading-snug">
                              <p><span className="text-purple-400">const</span> <span className="text-blue-300">page</span> = <span className="text-yellow-300">NextEngine</span>();</p>
                              <p><span className="text-purple-400">return</span> &lt;<span className="text-cyan-400">TailwindReact</span> /&gt;;</p>
                            </div>
                          </div>
                        )}

                        {/* 02: Backend Development */}
                        {skill.id === '02' && (
                          <div className="relative z-10 mx-3 sm:mx-4 mt-1 bg-[#151a17]/95 rounded-xl border border-white/10 p-3 shadow-2xl font-mono text-[10px]">
                            <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                              <span className="text-[9px] text-emerald-400 font-bold">POST /api/v1/auth</span>
                              <span className="text-[9px] text-zinc-400">200 OK</span>
                            </div>
                            <p className="text-zinc-400">{`Route::post('/login', [AuthController::class]);`}</p>
                            <p className="text-emerald-400/80 text-[9px] mt-1">Laravel & Node.js Express</p>
                          </div>
                        )}

                        {/* 03: CMS & Website Development */}
                        {skill.id === '03' && (
                          <div className="relative z-10 mx-3 sm:mx-4 mt-1 bg-[#131b20]/95 rounded-xl border border-white/10 p-3 shadow-2xl">
                            <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                              <span className="text-[10px] text-sky-400 font-semibold">WordPress / WooCommerce</span>
                              <span className="text-[9px] text-emerald-400 font-bold">Active Store</span>
                            </div>
                            <div className="flex items-center gap-2 text-[10px] text-zinc-300">
                              <div className="w-7 h-7 rounded bg-sky-500/20 border border-sky-400/40 flex items-center justify-center font-bold text-sky-300">W</div>
                              <div className="flex-1">
                                <p className="font-medium">Elementor Pro + CF7</p>
                                <p className="text-[9px] text-zinc-500">Custom PHP Theme Active</p>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* 04: Database Management */}
                        {skill.id === '04' && (
                          <div className="relative z-10 mx-3 sm:mx-4 mt-1 bg-[#1c1914]/95 rounded-xl border border-white/10 p-3 shadow-2xl font-mono text-[10px]">
                            <div className="flex items-center justify-between pb-1.5 border-b border-white/10 mb-1.5">
                              <span className="text-[9px] text-amber-400 font-bold">MySQL & SQLite</span>
                              <span className="text-[9px] text-zinc-400">phpMyAdmin</span>
                            </div>
                            <div className="text-[9px] space-y-0.5 text-zinc-300">
                              <p className="text-amber-300/90">{`SELECT * FROM users_db;`}</p>
                              <p className="text-zinc-500">{`3 rows affected (0.001 sec)`}</p>
                            </div>
                          </div>
                        )}

                        {/* 05: API & Software Integration */}
                        {skill.id === '05' && (
                          <div className="relative z-10 mx-3 sm:mx-4 mt-1 bg-[#191522]/95 rounded-xl border border-white/10 p-3 shadow-2xl font-mono text-[10px]">
                            <div className="flex items-center justify-between pb-1.5 border-b border-white/10 mb-1.5">
                              <span className="text-[9px] text-purple-300 font-semibold">REST Webhooks</span>
                              <span className="text-[9px] text-emerald-400 font-bold">24ms Latency</span>
                            </div>
                            <p className="text-purple-300/80">{`fetch('/api/v1/webhook')`}</p>
                            <p className="text-zinc-400 text-[9px]">{`{ status: 200, sync: true }`}</p>
                          </div>
                        )}

                        {/* 06: AI Tools & AI-Assisted Development */}
                        {skill.id === '06' && (
                          <div className="relative z-10 mx-3 sm:mx-4 mt-1 bg-[#20141d]/95 rounded-xl border border-white/10 p-3 shadow-2xl font-mono text-[10px]">
                            <div className="flex items-center justify-between pb-1.5 border-b border-white/10 mb-1.5">
                              <span className="text-[9px] text-pink-300 font-semibold">Claude AI + Antigravity</span>
                              <span className="text-[9px] text-pink-400">✦ AI Copilot</span>
                            </div>
                            <p className="text-pink-300/90 text-[9px]">{`> generateCleanCode()`}</p>
                            <p className="text-zinc-400 text-[9px]">{`✦ 100% production ready`}</p>
                          </div>
                        )}

                        {/* 07: Graphic Design & Creative Tools */}
                        {skill.id === '07' && (
                          <div className="relative z-10 mx-3 sm:mx-4 mt-1 bg-[#121c1f]/95 rounded-xl border border-white/10 p-3 shadow-2xl">
                            <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                              <span className="text-[10px] text-cyan-300 font-semibold">Canva & Visual Brand</span>
                              <span className="text-[9px] text-cyan-400">Posters</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded bg-cyan-500/30 border border-cyan-400/50" />
                              <div className="w-6 h-6 rounded bg-[#FF5E1E]/40 border border-[#FF5E1E]/60" />
                              <div className="flex-1 h-2 rounded bg-white/10" />
                            </div>
                          </div>
                        )}

                        {/* 08: Search Engine Optimization (SEO) */}
                        {skill.id === '08' && (
                          <div className="relative z-10 mx-3 sm:mx-4 mt-1 bg-[#141d18]/95 rounded-xl border border-white/10 p-3 shadow-2xl">
                            <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                              <span className="text-[10px] text-emerald-400 font-semibold">Technical & On-Page</span>
                              <span className="text-[9px] text-emerald-300 font-bold">PageSpeed 98+</span>
                            </div>
                            <div className="flex items-end gap-1.5 h-9 pt-1">
                              <div className="flex-1 bg-emerald-500/30 h-[45%] rounded-t" />
                              <div className="flex-1 bg-emerald-500/50 h-[70%] rounded-t" />
                              <div className="flex-1 bg-emerald-500/70 h-[88%] rounded-t" />
                              <div className="flex-1 bg-emerald-400 h-[100%] rounded-t shadow-lg shadow-emerald-500/50" />
                            </div>
                          </div>
                        )}

                        {/* 09: Analytics & Webmaster Tools */}
                        {skill.id === '09' && (
                          <div className="relative z-10 mx-3 sm:mx-4 mt-1 bg-[#201813]/95 rounded-xl border border-white/10 p-3 shadow-2xl">
                            <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                              <span className="text-[10px] text-orange-400 font-semibold">GA4 & Search Console</span>
                              <span className="text-[9px] text-orange-300 font-bold">+185% Impressions</span>
                            </div>
                            <div className="flex items-center justify-between text-[10px] text-zinc-300 pt-1">
                              <span>Clarity Heatmaps</span>
                              <span className="text-emerald-400 font-bold">Verified</span>
                            </div>
                          </div>
                        )}

                        {/* 10: Development Tools & Technologies */}
                        {skill.id === '10' && (
                          <div className="relative z-10 mx-3 sm:mx-4 mt-1 bg-[#161724]/95 rounded-xl border border-white/10 p-3 shadow-2xl font-mono text-[10px]">
                            <div className="flex items-center justify-between pb-1.5 border-b border-white/10 mb-1.5">
                              <span className="text-[9px] text-indigo-300 font-semibold">Git, PM2 & VPS</span>
                              <span className="text-[9px] text-emerald-400 font-bold">Online</span>
                            </div>
                            <p className="text-indigo-300/80 text-[9px]">{`$ git push origin main`}</p>
                            <p className="text-zinc-400 text-[9px]">{`[PM2] App restarted (VPS live)`}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Middle Column: Full Width Title, Subtitle & Tech Tag Pills */}
                  <div className="flex-1 text-left flex flex-col justify-center min-w-0">
                    <h3 className="font-giant text-2xl min-[360px]:text-3xl min-[420px]:text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.5rem] uppercase tracking-wide text-white leading-[0.95] sm:leading-[0.9] transition-colors break-words group-hover:text-[#FF8A50]">
                      {skill.title}
                    </h3>

                    <p className="text-xs sm:text-sm md:text-base text-zinc-300/90 font-normal mt-2 sm:mt-3 max-w-2xl leading-relaxed">
                      {skill.subtitle}
                    </p>

                    {/* Category Tags Pills */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2.5 mt-3 sm:mt-5">
                      {skill.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs text-zinc-300 font-medium hover:border-[#FF5E1E]/40 hover:text-white transition-colors select-none"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden lg:block w-14 flex-shrink-0" />

                </div>

                {/* DESKTOP GLIDING ARROW */}
                <a
                  href="#portfolio"
                  className={`hidden lg:flex items-center justify-center w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-[#FF5E1E] text-white absolute z-20 pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isHovered
                      ? 'lg:left-[312px] xl:left-[352px] top-[calc(50%+20px)] -translate-y-1/2 scale-105 shadow-2xl shadow-[#FF5E1E]/70 ring-4 ring-[#FF5E1E]/20'
                      : 'lg:left-[calc(100%-3.5rem)] top-1/2 -translate-y-1/2 scale-100 shadow-lg shadow-[#FF5E1E]/30 ring-0'
                  }`}
                  aria-label={`View projects built with ${skill.title}`}
                >
                  <ArrowUpRight className="w-6 h-6 xl:w-7 xl:h-7 stroke-[2.5]" />
                </a>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}