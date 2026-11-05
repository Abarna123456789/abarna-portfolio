'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  // Close drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Works', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Sticky Header Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#08080a]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 w-full">
          <div className="flex items-center justify-between">
            {/* Logo matching Screenshot */}
            <Link
              href="/"
              className="group flex items-center gap-2 text-2xl sm:text-3xl font-giant font-extrabold tracking-wide text-white uppercase select-none"
            >
              <span className="tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-400 group-hover:to-[#FF5E1E] transition-all">
                ABARNAWEB
              </span>
              <span className="h-2 w-2 rounded-full bg-[#FF5E1E] animate-pulse"></span>
            </Link>

            {/* Right Buttons: "Let's Talk ↗" CTA + Sleek "MENU ☰" Button matching Screenshot fbda01e0 */}
            <div className="flex items-center gap-2.5 sm:gap-3.5">
              {/* Direct Quick CTA Button */}
              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#FF5E1E] hover:bg-[#ff723b] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-lg shadow-[#FF5E1E]/30 hover:shadow-[#FF5E1E]/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5] group-hover:rotate-45 transition-transform duration-200" />
              </a>

              {/* Menu Button */}
              <button
                onClick={() => setDrawerOpen(true)}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white transition-all cursor-pointer select-none group"
                aria-label="Open navigation menu"
              >
                <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase group-hover:text-[#FF5E1E] transition-colors">
                  Menu
                </span>
                <div className="w-6 h-6 rounded-full bg-[#FF5E1E] text-white flex items-center justify-center shadow-md shadow-[#FF5E1E]/30 group-hover:scale-110 transition-transform">
                  <Menu className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop overlay */}
      <div
        onClick={() => setDrawerOpen(false)}
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Responsive Slide-in Drawer matching imagecef63f71 */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-[300px] min-[360px]:max-w-[340px] sm:max-w-[420px] bg-[#0c0c0e] border-l border-white/10 p-5 sm:p-8 flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-out shadow-2xl ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Drawer Top Bar: "Discover" + "Close [X]" */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Discover
            </span>

            <button
              onClick={() => setDrawerOpen(false)}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <span className="text-sm font-semibold text-[#FF5E1E] group-hover:text-white transition-colors">
                Close
              </span>
              <div className="w-9 h-9 rounded-full bg-[#FF5E1E] hover:bg-[#ff723b] text-white flex items-center justify-center shadow-lg shadow-[#FF5E1E]/30 group-hover:scale-105 transition-transform">
                <X className="w-5 h-5 stroke-[2.5]" />
              </div>
            </button>
          </div>

          {/* Large Navigation Menu Items with thin dividers */}
          <nav className="divide-y divide-white/10 border-b border-white/10 my-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                className="group flex items-center justify-between py-3 sm:py-3.5"
              >
                <span className="font-giant text-4xl sm:text-5xl uppercase tracking-wider text-white group-hover:text-[#FF5E1E] group-hover:translate-x-2 transition-all duration-200">
                  {link.label}
                </span>
                <span className="text-[#FF5E1E] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  ↗
                </span>
              </a>
            ))}
          </nav>

          {/* Contact Me Section */}
          <div className="pt-3">
            <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
              Contact Me
            </span>
            <a
              href="mailto:abarnaezhumalai2002@gmail.com"
              className="font-giant text-2xl sm:text-3xl text-white hover:text-[#FF5E1E] transition-colors break-all leading-tight block"
            >
              abarnaezhumalai2002@gmail.com
            </a>
          </div>

          {/* Stay Connected Socials */}
          <div className="pt-5">
            <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
              Stay Connected
            </span>
            <div className="flex flex-wrap items-center gap-5 text-sm font-bold text-white">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FF5E1E] transition-colors inline-flex items-center gap-0.5"
              >
                <span>Linkedin</span>
                <span className="text-[#FF5E1E]">↗</span>
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FF5E1E] transition-colors inline-flex items-center gap-0.5"
              >
                <span>Behance</span>
                <span className="text-[#FF5E1E]">↗</span>
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FF5E1E] transition-colors inline-flex items-center gap-0.5"
              >
                <span>Dribbble</span>
                <span className="text-[#FF5E1E]">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Drawer Bottom Actions */}
        <div className="pt-6 mt-6 border-t border-white/10">
          {/* Book Call CTA Button - fits text size with tight gap */}
          <a
            href="#contact"
            onClick={() => setDrawerOpen(false)}
            className="inline-flex items-center gap-3.5 bg-[#FF5E1E] hover:bg-[#ff723b] text-white pl-6 pr-2 py-2 rounded-full shadow-xl shadow-[#FF5E1E]/30 hover:scale-[1.02] active:scale-[0.98] transition-all font-bold text-sm sm:text-base group"
          >
            <span>Book a Free Call</span>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#FF5E1E] flex items-center justify-center shadow group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </div>
          </a>
        </div>
      </aside>
    </>
  );
}
