'use client';

import { useState, useRef, useEffect } from 'react';
import {
  ChevronDown,
  Check,
  Copy,
  CheckCheck,
  Send,
  Mail,
  Clock,
  Sparkles,
  Phone,
} from 'lucide-react';
import { submitContactForm } from '../../lib/api';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Job Opportunity',
    message: '',
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [copiedSample, setCopiedSample] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const dropdownRef = useRef(null);

  // Close custom dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Dropdown options strictly matching screenshot b7ca6c03
  const subjectOptions = [
    'Job Opportunity',
    'Freelance Project',
    'Website Development',
    'SEO Services',
    'Collaboration',
    'Other',
  ];

  // Professional pre-written sample enquiry template
  const sampleEnquiry = `Hi Abarna,

I came across your portfolio and was impressed by your frontend architecture, Next.js development, and technical SEO expertise. We have an upcoming project / opportunity and would love to discuss collaborating.

Project: Web Development & UI/UX Design
Timeline: 4 - 6 weeks
Budget: Flexible / Open to proposal

Looking forward to connecting with you!`;

  const handleCopySample = async () => {
    try {
      await navigator.clipboard.writeText(sampleEnquiry);
      setFormData((prev) => ({
        ...prev,
        message: sampleEnquiry,
      }));
      setCopiedSample(true);
      setTimeout(() => setCopiedSample(false), 3000);
    } catch (err) {
      setFormData((prev) => ({
        ...prev,
        message: sampleEnquiry,
      }));
      setCopiedSample(true);
      setTimeout(() => setCopiedSample(false), 3000);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    setFormStatus(null);

    try {
      const res = await submitContactForm(formData);
      setFormStatus({ type: 'success', message: res.message });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Job Opportunity',
        message: '',
      });
    } catch (err) {
      setFormStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or reach out directly via email.',
      });
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#08080a] relative overflow-hidden select-none border-t border-white/5">
      {/* Ambient Cosmic Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-gradient-to-t from-[#FF5E1E]/20 via-[#FF4500]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-[#FF5E1E]/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 w-full relative z-10">
        
        {/* Split Layout: Text on Left Side, Form on Right Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ─── LEFT SIDE: HEADING & DETAILS ─── */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#FF7A45] tracking-widest uppercase shadow-lg shadow-[#FF5E1E]/10">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5E1E]" />
              <span>Start Your Project</span>
            </div>

            {/* Giant Heading */}
            <div>
              <h2 className="font-giant text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] text-white uppercase tracking-wide leading-[0.95]">
                Have an Idea? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                  Let&apos;s Build It Together
                </span>
              </h2>

              <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed mt-5 max-w-md">
                Whether you need a cutting-edge web application, technical SEO audit, high-converting redesign, or complete full-stack development — let&apos;s turn your vision into digital reality.
              </p>
            </div>

            {/* Direct Value Perks */}
            <div className="space-y-3.5 pt-2 border-t border-white/10">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                <span className="text-[#FF5E1E] font-bold text-base flex-shrink-0">✓</span>
                <span>Direct collaboration with zero middleman friction</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                <span className="text-[#FF5E1E] font-bold text-base flex-shrink-0">✓</span>
                <span>Production-ready code optimized for speed & Google rankings</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-300">
                <span className="text-[#FF5E1E] font-bold text-base flex-shrink-0">✓</span>
                <span>Guaranteed on-time milestone delivery</span>
              </div>
            </div>

            {/* Direct Contact Perks */}
            <div className="pt-2 space-y-3">
              <a
                href="mailto:abarnaezhumalai2002@gmail.com"
                className="flex items-center gap-3.5 text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors group break-all"
              >
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-[#FF5E1E] flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span>abarnaezhumalai2002@gmail.com</span>
              </a>

              <div className="flex items-center gap-2.5 text-xs text-zinc-400 font-mono pt-1">
                <Clock className="w-4 h-4 text-[#FF5E1E] flex-shrink-0" />
                <span>Average response time: &lt; 24 hours</span>
              </div>
            </div>

          </div>

          {/* ─── RIGHT SIDE: CONTACT FORM (With Requested Fields) ─── */}
          <div className="lg:col-span-7 w-full min-w-0">
            <div className="p-4 min-[400px]:p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-[#0d0e12] border border-white/10 shadow-2xl relative">
              {/* Subtle top inner orange rim glow */}
              <div className="absolute top-0 inset-x-10 h-[1px] bg-gradient-to-r from-transparent via-[#FF5E1E]/60 to-transparent" />

              {/* Form Card Header */}
              <div className="mb-7">
                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-white tracking-tight">
                  Let&apos;s Work Together
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 leading-relaxed">
                  Have a project in mind or an opportunity to discuss? Feel free to get in touch.
                </p>
              </div>

              {/* Status Alert */}
              {formStatus && (
                <div
                  className={`mb-6 p-4 rounded-2xl text-sm font-medium flex items-center gap-2.5 ${
                    formStatus.type === 'success'
                      ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                      : 'bg-red-500/10 border border-red-500/30 text-red-400'
                  }`}
                >
                  {formStatus.type === 'success' ? (
                    <CheckCheck className="w-5 h-5 flex-shrink-0" />
                  ) : null}
                  <span>{formStatus.message}</span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-5">
                
                {/* 1. Full Name * */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-zinc-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full bg-[#050507] border border-zinc-800 rounded-full px-5 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF5E1E] focus:ring-1 focus:ring-[#FF5E1E] transition-all"
                  />
                </div>

                {/* 2. Email Address * & Phone (Side-by-side on sm+) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-zinc-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email address"
                      className="w-full bg-[#050507] border border-zinc-800 rounded-full px-5 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF5E1E] focus:ring-1 focus:ring-[#FF5E1E] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-zinc-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter your phone number (optional)"
                      className="w-full bg-[#050507] border border-zinc-800 rounded-full px-5 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF5E1E] focus:ring-1 focus:ring-[#FF5E1E] transition-all"
                    />
                  </div>
                </div>

                {/* 3. Subject * (Interactive Dropdown matching screenshot b7ca6c03) */}
                <div className="relative" ref={dropdownRef}>
                  <label className="block text-xs sm:text-sm font-medium text-zinc-300 mb-2">
                    Subject *
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-[#050507] border border-zinc-800 rounded-full px-5 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF5E1E] focus:ring-1 focus:ring-[#FF5E1E] flex items-center justify-between transition-all cursor-pointer"
                  >
                    <span>{formData.subject}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180 text-[#FF5E1E]' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu Popover matching screenshot b7ca6c03 */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-[#141417] border border-zinc-800 rounded-2xl p-2 shadow-2xl backdrop-blur-xl animate-in fade-in-0 zoom-in-95 duration-150 max-h-60 overflow-y-auto">
                      {subjectOptions.map((option) => {
                        const isSelected = formData.subject === option;

                        return (
                          <div
                            key={option}
                            onClick={() => {
                              setFormData({ ...formData, subject: option });
                              setIsDropdownOpen(false);
                            }}
                            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm cursor-pointer transition-colors ${
                              isSelected
                                ? 'bg-zinc-800/90 text-white font-medium'
                                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                            }`}
                          >
                            <span className="w-4 flex items-center justify-center">
                              {isSelected ? (
                                <Check className="w-4 h-4 text-[#FF5E1E] stroke-[2.5]" />
                              ) : null}
                            </span>
                            <span>{option}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 4. Your Message * */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-zinc-300 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-[#050507] border border-zinc-800 rounded-2xl p-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF5E1E] focus:ring-1 focus:ring-[#FF5E1E] transition-all resize-none"
                  />
                </div>

                {/* Quick Copy Sample Enquiry Action Button */}
                <div className="flex items-center justify-center pt-1">
                  <button
                    type="button"
                    onClick={handleCopySample}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium text-zinc-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 transition-all active:scale-95"
                  >
                    {copiedSample ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">
                          Sample enquiry inserted & copied!
                        </span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#FF5E1E]" />
                        <span>Copy sample enquiry</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full py-4 rounded-full bg-[#FF5E1E] hover:bg-[#ff723b] text-white font-bold text-sm tracking-wide uppercase shadow-xl shadow-[#FF5E1E]/30 hover:shadow-[#FF5E1E]/50 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  {formSubmitting ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Disclaimer Notice */}
                <p className="text-center text-[11px] font-mono text-zinc-500 tracking-wide pt-1">
                  Portfolio enquiries only. Spam / automated marketing pitches will not be entertained.
                </p>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
