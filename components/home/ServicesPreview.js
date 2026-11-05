'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ServicesPreview({ services }) {
  // Start with null so all arrows rest on the right (matching unhovered UI screenshot)
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section id="services" className="pt-16 sm:pt-24 pb-8 sm:pb-12 bg-[#08080a] relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[550px] h-[550px] bg-[#FF5E1E]/8 rounded-full blur-[160px] pointer-events-none" />

      {/* Matching unified container and screen gap */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 w-full relative z-10">
        
        {/* Top Header matching Screenshot 941565d0 */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-12 sm:pb-16 border-b border-white/10 gap-6">
          {/* Left: ✦ My Services + How I Help You Grow */}
          <div className="text-left">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF7A45] mb-2.5">
              <span className="text-[#FF5E1E] text-sm animate-pulse">✦</span>
              <span>My Services</span>
            </div>
            <h2 className="font-giant text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] text-white uppercase tracking-wide leading-[0.95]">
              How I Help You Grow
            </h2>
          </div>

          {/* Right: Subtitle + Start a Project CTA Button */}
          <div className="flex flex-col sm:items-end gap-3 text-left sm:text-right">
            <p className="text-xs sm:text-sm text-zinc-400 font-normal max-w-[260px] leading-relaxed">
              Everything you need to build a high-performing website.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3.5 bg-[#FF5E1E] hover:bg-[#ff723b] pl-6 pr-2 py-2 rounded-full shadow-xl shadow-[#FF5E1E]/30 hover:shadow-[#FF5E1E]/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span className="text-white font-bold text-xs sm:text-sm tracking-wide">
                Start a Project
              </span>
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center text-[#FF5E1E] group-hover:rotate-45 transition-transform duration-300 shadow">
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              </span>
            </a>
          </div>
        </div>

        {/* 4 Interactive Services Rows */}
        <div 
          onMouseLeave={() => setHoveredService(null)}
          className="divide-y divide-white/10"
        >
          {services?.map((service) => {
            const isHovered = hoveredService === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                className="group py-12 sm:py-16 transition-colors duration-300 relative select-none"
              >
                {/* Row container with VERTICAL CENTERING (items-center) */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-14 xl:gap-16">
                  
                  {/* Left Column: Number + Line (01 ──────────→) & Enriched Large Preview Image */}
                  <div className="w-full lg:w-[350px] xl:w-[390px] flex-shrink-0">
                    {/* Number + Arrow line */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-giant text-xl sm:text-2xl text-white tracking-wider">
                        {service.id}
                      </span>
                      <div className="flex items-center w-28 sm:w-36">
                        <div className="w-full h-[1px] bg-zinc-700/80"></div>
                        <span className="text-zinc-500 text-xs -ml-1">→</span>
                      </div>
                    </div>

                    {/* High-Fidelity Expanded Preview Card (Fixed Aspect Ratio to Prevent Layout Jump) */}
                    <div className="relative w-full max-w-[340px] xl:max-w-[380px] aspect-[16/10] hidden lg:block">
                      <div
                        className={`w-full h-full rounded-3xl overflow-hidden border bg-[#121214] relative transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isHovered
                            ? 'opacity-100 scale-100 translate-y-0 delay-100 border-white/20 shadow-2xl shadow-[#FF5E1E]/20'
                            : 'opacity-0 scale-[0.96] translate-y-2 pointer-events-none border-transparent delay-0'
                        }`}
                      >
                        {/* Cosmic background with warm fiery rim lighting */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#FF5E1E]/25 via-black/80 to-[#121214] pointer-events-none" />
                        <div className="absolute inset-0 stars-overlay opacity-60 pointer-events-none" />

                        {/* Top: Centered Title matching "By Figma" in screenshot */}
                        <div className="relative z-10 pt-3 pb-1 text-center">
                          <span className="text-xs sm:text-sm font-semibold tracking-wider text-zinc-200">
                            {service.previewTitle}
                          </span>
                        </div>

                        {/* Custom Mockup Frame per service */}
                        {service.id === '01' && (
                          <>
                            {/* Browser Window Mockup Frame */}
                            <div className="relative z-10 mx-3 sm:mx-4 mt-1 bg-[#1a1a1e]/90 rounded-xl border border-white/10 p-3 shadow-2xl backdrop-blur-md">
                              <div className="flex items-center gap-1.5 pb-2 border-b border-white/10 mb-2.5">
                                <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                                <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                                <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                                <div className="ml-3 h-2 w-20 rounded-full bg-white/10" />
                              </div>

                              <div className="flex items-center justify-between gap-2">
                                <div className="space-y-1.5">
                                  <span className="text-[10px] font-bold text-zinc-400 block tracking-wider">ABC</span>
                                  <div className="w-24 h-1.5 rounded-full bg-white/20" />
                                  <div className="w-16 h-1.5 rounded-full bg-white/10" />
                                </div>
                                
                                <div className="bg-[#24242a] p-2 rounded-lg border border-white/10 space-y-1">
                                  <div className="w-10 h-1.5 rounded-full bg-[#FF5E1E]" />
                                  <div className="w-6 h-1 rounded-full bg-white/30" />
                                </div>
                              </div>
                            </div>

                            {/* 3D Floating Figma sphere badge in top right */}
                            <div className="absolute top-8 right-4 z-20 w-9 h-9 rounded-full bg-gradient-to-tr from-[#1E1E1E] to-[#2C2C2C] border border-white/20 shadow-2xl flex items-center justify-center pointer-events-none">
                              <div className="grid grid-cols-2 gap-0.5 scale-90">
                                <div className="w-2 h-2 rounded-full bg-[#F24E1E]" />
                                <div className="w-2 h-2 rounded-full bg-[#FF7262]" />
                                <div className="w-2 h-2 rounded-full bg-[#A259FF]" />
                                <div className="w-2 h-2 rounded-full bg-[#1ABCFE]" />
                              </div>
                            </div>
                          </>
                        )}

                        {service.id === '02' && (
                          <>
                            {/* Code Editor Mockup Frame */}
                            <div className="relative z-10 mx-3 sm:mx-4 mt-1 bg-[#15171c]/95 rounded-xl border border-white/10 p-3 shadow-2xl font-mono text-[10px] text-zinc-300">
                              <div className="flex items-center gap-1.5 pb-2 border-b border-white/10 mb-2">
                                <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                                <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                                <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                                <span className="ml-3 text-[9px] text-zinc-500">App.tsx</span>
                              </div>
                              <div className="space-y-1 leading-snug">
                                <p><span className="text-purple-400">const</span> <span className="text-blue-300">site</span> = <span className="text-yellow-300">createApp</span>();</p>
                                <p><span className="text-purple-400">return</span> &lt;<span className="text-cyan-400">NextEngine</span> /&gt;;</p>
                              </div>
                            </div>

                            {/* React Cyan Badge */}
                            <div className="absolute top-8 right-4 z-20 w-9 h-9 rounded-full bg-[#1e293b] border border-cyan-500/30 shadow-2xl flex items-center justify-center text-cyan-400 text-xs font-bold pointer-events-none">
                              ⚛
                            </div>
                          </>
                        )}

                        {service.id === '03' && (
                          <>
                            {/* Analytics Graph Frame */}
                            <div className="relative z-10 mx-3 sm:mx-4 mt-1 bg-[#161a1d]/95 rounded-xl border border-white/10 p-3 shadow-2xl">
                              <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                                <span className="text-[10px] text-zinc-400 font-semibold">Growth Analytics</span>
                                <span className="text-[10px] text-emerald-400 font-bold">+140% Bookings</span>
                              </div>
                              <div className="flex items-end gap-1.5 h-10 pt-2">
                                <div className="flex-1 bg-emerald-500/30 h-[40%] rounded-t" />
                                <div className="flex-1 bg-emerald-500/50 h-[65%] rounded-t" />
                                <div className="flex-1 bg-emerald-500/70 h-[85%] rounded-t" />
                                <div className="flex-1 bg-[#22C55E] h-[100%] rounded-t shadow-lg shadow-emerald-500/50" />
                              </div>
                            </div>

                            {/* Target Icon Badge */}
                            <div className="absolute top-8 right-4 z-20 w-9 h-9 rounded-full bg-[#064e3b] border border-emerald-400/40 shadow-2xl flex items-center justify-center text-emerald-300 text-xs font-bold pointer-events-none">
                              🎯
                            </div>
                          </>
                        )}

                        {service.id === '04' && (
                          <>
                            {/* Checkout Preview Frame */}
                            <div className="relative z-10 mx-3 sm:mx-4 mt-1 bg-[#1a1715]/95 rounded-xl border border-white/10 p-3 shadow-2xl">
                              <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
                                <span className="text-[10px] text-zinc-400">WooCommerce</span>
                                <span className="text-[10px] text-amber-400 font-bold">1-Click Pay</span>
                              </div>
                              <div className="flex items-center justify-between bg-white/5 p-1.5 rounded-lg">
                                <div className="flex items-center gap-2">
                                  <div className="w-5 h-5 rounded bg-amber-500/20 flex items-center justify-center text-[10px]">🛍️</div>
                                  <span className="text-[10px] text-zinc-200">Order #8491</span>
                                </div>
                                <span className="text-[10px] text-[#FF5E1E] font-bold">$249.00</span>
                              </div>
                            </div>

                            {/* Cart Icon Badge */}
                            <div className="absolute top-8 right-4 z-20 w-9 h-9 rounded-full bg-[#451a03] border border-amber-400/40 shadow-2xl flex items-center justify-center text-amber-300 text-xs font-bold pointer-events-none">
                              ⚡
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Middle Column: Giant Title, Subtitle, and Tags VERTICALLY CENTERED */}
                  <div className="flex-1 text-left flex flex-col justify-center">
                    <h3 className="font-giant text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.5rem] uppercase tracking-wide text-white leading-[0.9] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm sm:text-base text-zinc-300 font-normal mt-3 max-w-2xl leading-relaxed">
                      {service.subtitle}
                    </p>

                    {/* Category Tags Pills matching screenshot */}
                    <div className="flex flex-wrap gap-2.5 mt-5">
                      {service.tags?.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300 font-medium hover:border-[#FF5E1E]/40 hover:text-white transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop to balance grid */}
                  <div className="hidden lg:block w-14 flex-shrink-0" />

                </div>

                {/* DESKTOP GLIDING ARROW: Single persistent arrow that smoothly travels across the row */}
                <a
                  href="#contact"
                  className={`hidden lg:flex items-center justify-center w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-[#FF5E1E] text-white absolute z-20 pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isHovered
                      ? 'lg:left-[312px] xl:left-[352px] top-[calc(50%+20px)] -translate-y-1/2 scale-105 shadow-2xl shadow-[#FF5E1E]/70 ring-4 ring-[#FF5E1E]/20'
                      : 'lg:left-[calc(100%-3.5rem)] top-1/2 -translate-y-1/2 scale-100 shadow-lg shadow-[#FF5E1E]/30 ring-0'
                  }`}
                  aria-label={`Inquire about ${service.title}`}
                >
                  <ArrowUpRight className="w-6 h-6 xl:w-7 xl:h-7 stroke-[2.5]" />
                </a>

                {/* MOBILE ARROW: Cleanly positioned at top right for screens < lg */}
                <a
                  href="#contact"
                  className="flex lg:hidden items-center justify-center w-11 h-11 rounded-full bg-[#FF5E1E] text-white shadow-lg shadow-[#FF5E1E]/30 absolute top-8 right-2 pointer-events-auto"
                  aria-label={`Inquire about ${service.title}`}
                >
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </a>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
