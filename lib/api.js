// lib/api.js
// Mock API / Data layer for the portfolio website

export const portfolioData = {
  profile: {
    name: "Abarna E",
    title: "MERN Full Stack Developer & SEO Analyst",
    heroHeadline: "Modern digital experiences with code, AI & SEO",
    subHeadline: "Hi, I am",
    rating: "4.9/5",
    ratingCount: "from 100+ clients",
    callToActionText: "Book a Call",
    contactEmail: "abarnaezhumalai2002@gmail.com",
    phone: "+91 63743 57194",
    location: "Remote / Worldwide",
    about: {
      tagline: "About Me",
      description: "Hey there, I'm Abarna E — a web developer and UI/UX designer. I bridge the gap between aesthetic brilliance and technical precision. I don't just build sites that look expensive; I build systems designed to scale your business and dominate your niche.",
      quote: "I strive to pay attention to the smallest details",
    },
    stats: [
      { label: "YEARS OF EXPERIENCE", value: "1+" },
      { label: "DELIVERIES", value: "200+" },
      { label: "POSITIVE REVIEWS", value: "99%" },
      { label: "ACTIVE CLIENTS", value: "50+" },
    ],
    brands: [
      { name: "Bllingee", category: "FinTech" },
      { name: "Pipedrive", category: "CRM" },
      { name: "Nextcard", category: "Banking" },
      { name: "SAP", category: "Enterprise" },
      { name: "Traval", category: "Travel App" },
      { name: "Nexic", category: "SaaS" },
    ],
  },

  projects: [
    {
      id: "01",
      code: "PRJ-01",
      year: "2025",
      category: "REAL ESTATE & PARALLAX",
      title: "Elite Real Estate Parallax",
      description: "High-performance luxury real estate web experience built with Next.js. Features cinematic scroll-driven parallax effects, interactive property floorplans, architectural showcase galleries, and modern responsive layouts.",
      tags: ["NEXT.JS", "REACT", "PARALLAX EFFECTS", "TAILWIND CSS"],
      image: "/images/real-estate-parallex-website.webp",
      metrics: "Featured Personal Project",
      telemetry: "DOMAIN: REAL ESTATE • STACK: NEXT.JS & PARALLAX • STATUS: LIVE",
      link: "#",
      isClientWork: false,
    },
    {
      id: "02",
      code: "PRJ-02",
      year: "2024",
      category: "PRINTING & PACKAGING SOLUTIONS",
      title: "PrintCraft Industrial Solutions",
      description: "Commercial printing and packaging solutions website developed with PHP. Features automated quote inquiries, paper & finish product catalog showcase, and a streamlined client contact pipeline.",
      tags: ["PHP", "MYSQL", "WEB DEVELOPMENT", "RESPONSIVE UI"],
      image: "/images/printing-solution-website.webp",
      metrics: "Office Client Work",
      telemetry: "DOMAIN: PRINTING SOLUTIONS • STACK: PHP & MYSQL • CLIENT DEPLOYED",
      link: null,
      isClientWork: true,
    },
    {
      id: "03",
      code: "PRJ-03",
      year: "2024",
      category: "REAL ESTATE & PROPERTY PORTAL",
      title: "PrimeLand Realty Portal",
      description: "Conversion-focused real estate portal engineered with PHP. Built with structured property listings, neighborhood property filtering, high-converting lead capture pipelines, and search engine optimization.",
      tags: ["PHP", "TECHNICAL SEO", "PROPERTY PORTAL", "LEAD GEN"],
      image: "/images/real-estate-website.webp",
      metrics: "Office Client Work",
      telemetry: "DOMAIN: REAL ESTATE PORTAL • STACK: PHP & SEO • CLIENT DEPLOYED",
      link: null,
      isClientWork: true,
    },
    {
      id: "04",
      code: "PRJ-04",
      year: "2024",
      category: "HEALTHCARE & DOCTOR PORTFOLIO",
      title: "Dr. Care Medical Consultant",
      description: "Professional healthcare specialist and medical consultant portfolio built with PHP. Includes patient appointment booking forms, clinical treatment breakdowns, verified patient reviews, and mobile-first speed.",
      tags: ["PHP", "HEALTHCARE UI", "APPOINTMENTS", "ON-PAGE SEO"],
      image: "/images/Doctor-portfolio-website.webp",
      metrics: "Office Client Work",
      telemetry: "DOMAIN: DOCTOR PORTFOLIO • STACK: PHP & HEALTHCARE • CLIENT DEPLOYED",
      link: null,
      isClientWork: true,
    },
    {
      id: "05",
      code: "PRJ-05",
      year: "2024",
      category: "BRANDING & CREATIVE STUDIO",
      title: "AuraBrand Creative Agency",
      description: "Visual branding agency web presence crafted with PHP. Highlights corporate brand transformations, visual identity case studies, custom typography presentations, and digital design portfolio showcases.",
      tags: ["PHP", "BRANDING STUDIO", "CREATIVE AGENCY", "UI/UX"],
      image: "/images/Branding-website.webp",
      metrics: "Office Client Work",
      telemetry: "DOMAIN: BRANDING AGENCY • STACK: PHP & CREATIVE UI • CLIENT DEPLOYED",
      link: null,
      isClientWork: true,
    },
    {
      id: "06",
      code: "PRJ-06",
      year: "2024",
      category: "AI POSTER & PRODUCT BRANDING",
      title: "AI Generative Posters & Brand Collateral",
      description: "Creative suite of AI-assisted promotional posters, digital marketing creatives, and product branding graphics. Designed using Claude AI, Google Antigravity, and Canva for high-impact social media and brand awareness.",
      tags: ["GENERATIVE AI", "CANVA", "AI POSTER DESIGN", "PRODUCT BRANDING"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1800&q=85",
      metrics: "Design & Branding Work",
      telemetry: "DOMAIN: AI POSTERS & BRANDING • TOOLS: GENERATIVE AI & CANVA",
      link: null,
      isClientWork: true,
    },
  ],

  services: [
    {
      id: "01",
      title: "Web Design",
      subtitle: "Psychology-driven layouts that capture attention and guide the user's journey",
      tags: ["Discovery", "Wireframing", "UI design", "Prototyping"],
      previewTitle: "By Figma",
      previewBadge: "Figma UI",
      previewImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
      accent: "#FF5E1E",
    },
    {
      id: "02",
      title: "Web Development",
      subtitle: "Clean, scalable code optimized for lightning-fast speeds and search engine dominance.",
      tags: ["Plan", "Build", "Test", "Launch", "Support"],
      previewTitle: "Next.js / React",
      previewBadge: "Fast Code",
      previewImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
      accent: "#38BDF8",
    },
    {
      id: "03",
      title: "Landing Page",
      subtitle: "High-stakes conversion funnels built to maximize your ad spend and lead generation",
      tags: ["Conversion focus", "Strong CTA", "Mobile optimized"],
      previewTitle: "High Conversion",
      previewBadge: "+140% ROI",
      previewImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      accent: "#22C55E",
    },
    {
      id: "04",
      title: "Ecommerce Store",
      subtitle: "High-converting WooCommerce stores engineered for secure transactions and seamless business scaling",
      tags: ["Optimized Checkout", "Secure Payments", "Fast UX"],
      previewTitle: "WooCommerce & Stripe",
      previewBadge: "Instant Pay",
      previewImage: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=600&q=80",
      accent: "#F59E0B",
    },
  ],

  testimonials: [
    {
      id: 1,
      name: "Dafseo",
      country: "Egypt",
      flag: "🇪🇬",
      role: "Digital Director",
      rating: 5.0,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      content: "Great work! .. She is really talented. You can give her any design you want, and she'll make it happen.",
    },
    {
      id: 2,
      name: "Hichammossa",
      country: "Italy",
      flag: "🇮🇹",
      role: "Creative Lead",
      rating: 5.0,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      content: "I often work with Abarna and always recommend. Fast, accurate, and can turn any complex concept into reality.",
    },
    {
      id: 3,
      name: "Alexander",
      country: "UK",
      flag: "🇬🇧",
      role: "Managing Partner",
      rating: 5.0,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      content: "Good work. Quick response. Fast delivery. This is all about Abarna. Best wishes for future collaborations.",
    },
    {
      id: 4,
      name: "Guy Hawkins",
      country: "USA",
      flag: "🇺🇸",
      role: "CEO at Nexic SaaS",
      rating: 5.0,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      content: "Abarna transformed our SaaS landing page into a conversion machine. The visual aesthetic is second to none.",
    },
    {
      id: 5,
      name: "Sophia Martinez",
      country: "Germany",
      flag: "🇩🇪",
      role: "Founder at Aura Studio",
      rating: 5.0,
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
      content: "Extremely professional, sleek modern aesthetic, and top-tier communication throughout the entire project.",
    },
  ],
};

// Simulated API helper functions
export async function getProfileData() {
  return portfolioData.profile;
}

export async function getPortfolioProjects() {
  return portfolioData.projects;
}

export async function getServices() {
  return portfolioData.services;
}

export async function getTestimonials() {
  return portfolioData.testimonials;
}

export async function submitContactForm(formData) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  return {
    success: true,
    message: "Thank you! Your project inquiry has been received. I'll get back to you within 24 hours.",
    data: formData,
  };
}
