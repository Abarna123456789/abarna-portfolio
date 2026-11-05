'use client';

import { ArrowUpRight } from 'lucide-react';

export default function Footer({ profile }) {
  return (
    <footer className="relative pt-16 sm:pt-24 pb-8 sm:pb-12 overflow-hidden bg-[#08080a] border-t border-white/10">
      {/* Background ambient orange flares matching Screenshot ae926e80 */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-gradient-to-tr from-[#FF5E1E]/20 via-[#FF4500]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-gradient-to-tl from-[#FF5E1E]/20 via-[#FF4500]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Matching unified container and screen gap */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 w-full relative z-10">
        
        {/* Top 3-Column Grid matching Screenshot ae926e80 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start pb-16">
          
          {/* Column 1: "Not just a website, real business results" + Booking CTA */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-giant text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide text-white leading-[0.95]">
              Not just a website,<br />
              real business results
            </h3>

            {/* Spots remaining notice */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-300 pt-1">
              <span>🔔</span>
              <span>3 spots remaining this month</span>
            </div>

            {/* Book a Free Call Button */}
            <div className="pt-2">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3.5 bg-[#FF5E1E] hover:bg-[#ff723b] pl-6 pr-2 py-2 rounded-full shadow-xl shadow-[#FF5E1E]/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span className="text-white font-bold text-xs sm:text-sm tracking-wide">
                  Book a Free Call
                </span>
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#FF5E1E] group-hover:rotate-45 transition-transform duration-300 shadow">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links matching Navbar */}
          <div className="md:col-span-3 lg:col-span-3 space-y-4">
            <h4 className="font-giant text-xl sm:text-2xl text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400 font-medium">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Works
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact System with Circular Icons matching Screenshot */}
          <div className="md:col-span-4 lg:col-span-4 space-y-4">
            <h4 className="font-giant text-xl sm:text-2xl text-white uppercase tracking-wider">
              Contact System
            </h4>
            <div className="space-y-3.5 text-sm">
              {/* WhatsApp / Phone */}
              <a
                href="https://wa.me/916374357194"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group"
              >
                <span className="w-6 h-6 rounded-full bg-white text-zinc-950 flex items-center justify-center text-xs font-bold shadow flex-shrink-0">
                  📞
                </span>
                <span className="font-medium">+91 63743 57194</span>
              </a>

              {/* Email */}
              <a
                href="mailto:abarnaezhumalai2002@gmail.com"
                className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group"
              >
                <span className="w-6 h-6 rounded-full bg-white text-[#FF5E1E] flex items-center justify-center text-xs font-bold shadow flex-shrink-0">
                  @
                </span>
                <span className="font-medium">abarnaezhumalai2002@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* GIANT CONDENSED WATERMARK TYPOGRAPHY: ABARNA E */}
        <div className="pt-10 sm:pt-16 pb-8 sm:pb-12 text-center select-none overflow-hidden relative">
          <h2 className="font-giant text-[16vw] sm:text-[18vw] leading-[0.75] tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-white/40 to-transparent pointer-events-none drop-shadow-[0_15px_35px_rgba(255,94,30,0.25)]">
            ABARNA E
          </h2>
        </div>

        {/* Bottom Bar: Social Icons on Left, Copyright + Back-to-Top on Right */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          {/* Social Icons matching screenshot: in, Bē, Dribbble */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-zinc-300 hover:text-black flex items-center justify-center text-xs font-bold transition-all shadow-sm"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-zinc-300 hover:text-black flex items-center justify-center text-xs font-bold transition-all shadow-sm"
              aria-label="Behance"
            >
              Bē
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-zinc-300 hover:text-black flex items-center justify-center text-xs font-bold transition-all shadow-sm"
              aria-label="Dribbble"
            >
              🏀
            </a>
          </div>

          {/* Copyright */}
          <p className="text-zinc-400 text-xs font-medium">
            &copy; 2026. ABARNA E - All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
