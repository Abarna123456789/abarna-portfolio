'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import Skills from '../components/home/Skills';
import Experience from '../components/home/Experience';
import PortfolioPreview from '../components/home/PortfolioPreview';
import DetailStatement from '../components/home/DetailStatement';
import ContactSection from '../components/home/ContactSection';
import { portfolioData } from '../lib/api';
import { ArrowUp } from 'lucide-react';

export default function HomePage() {
  const { profile, projects } = portfolioData;

  // Floating Back-to-Top Button State
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 flex flex-col font-sans selection:bg-[#FF5E1E] selection:text-white relative">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with portrait centerpiece & running ticker */}
        <Hero profile={profile} />

        {/* About Me Section & brand logos */}
        <AboutPreview profile={profile} />

        {/* Experience & Education Section */}
        <Experience />

         {/* Technical Expertise & Core Skills Section */}
        <Skills />

        {/* Selected Work / Portfolio Section */}
        <PortfolioPreview projects={projects} quote={profile.about.quote} />

        {/* Opposing Scroll Parallax Statement (Replacing Testimonials) */}
        <DetailStatement />

        {/* Contact / "LET'S WORK TOGETHER" Section (New Dedicated Component) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Floating Scroll To Top Button (Up Arrow) */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#FF5E1E] text-white flex items-center justify-center shadow-2xl shadow-[#FF5E1E]/50 hover:bg-[#ff723b] hover:scale-110 active:scale-95 transition-all duration-300 ${
          showScrollTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 stroke-[2.5]" />
      </button>
    </div>
  );
}
