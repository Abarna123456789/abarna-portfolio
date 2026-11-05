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
      id: "lawyer-landing-page",
      title: "Lawyer Alexander's Landing Page",
      subtitle: "Designed to turn visitors into consultation bookings.",
      watermark: "LAWYER",
      badge: "VIEW PROJECT",
      badgeHighlight: false,
      category: "Web Design",
      client: "Alexander & Partners Law Firm",
      description: "A prestigious and conversion-focused web presence for high-end legal consultants, featuring dynamic appointment scheduling and case outcome showcases.",
      tags: ["Web Design", "UI/UX", "Next.js"],
      featured: true,
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
      accent: "#FF5E1E",
      metrics: "+140% Inquiries",
      link: "#",
    },
    {
      id: "traval-saas-app",
      title: "KeyPharma Company's Trava Product Website",
      subtitle: "Built to guide customers from discovery to purchase.",
      watermark: "Trava",
      badge: "VIEW PROJECT",
      badgeHighlight: true,
      category: "Web Design",
      client: "KeyPharma & Trava Global",
      description: "High-energy promotional launch site for a travel discovery mobile platform with 3D product previews, interactive feature flows, and App Store conversions.",
      tags: ["Web Design", "App UI", "Tailwind CSS"],
      featured: true,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
      accent: "#38BDF8",
      metrics: "50K+ Downloads",
      link: "#",
    },
    {
      id: "creative-lawn-care",
      title: "Creative Lawn Care Service Website",
      subtitle: "Eco-friendly booking engine & instant pricing calculator.",
      watermark: "ECO CARE",
      badge: "VIEW PROJECT",
      badgeHighlight: false,
      category: "Web Design",
      client: "GreenScape Eco Care",
      description: "Vibrant, nature-inspired modern booking portal for eco-friendly commercial and residential landscaping services with an instant pricing calculator.",
      tags: ["Web Design", "Branding", "Full Stack"],
      featured: true,
      image: "https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=1200&q=80",
      accent: "#22C55E",
      metrics: "3.2x Bookings",
      link: "#",
    },
    {
      id: "financial-legal-portal",
      title: "Financial & Legal Landing Page",
      subtitle: "High-conversion corporate presence for wealth advisors.",
      watermark: "FINANCE",
      badge: "VIEW PROJECT",
      badgeHighlight: false,
      category: "Web Design",
      client: "Vanguard Trust Advisory",
      description: "Trust-centric corporate architecture conveying authority, data transparency, and client privacy for wealth managers and corporate counsel.",
      tags: ["Web Design", "Corporate", "React"],
      featured: true,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      accent: "#F59E0B",
      metrics: "$24M Inbound",
      link: "#",
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
