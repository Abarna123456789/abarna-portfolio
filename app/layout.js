import './globals.css';
import SmoothScroll from '../components/layout/SmoothScroll';
import CustomCursor from '../components/ui/CustomCursor';

export const metadata = {
  title: 'Abarna E — Website Designer & UI/UX Designer',
  description: 'Websites that turn visitors into clients. High-converting UI/UX design, Next.js web development, and digital experiences.',
  keywords: ['Portfolio', 'Abarna E', 'Web Designer', 'UI UX Designer', 'Next.js Developer', 'Frontend Engineer'],
  authors: [{ name: 'Abarna E' }],
  openGraph: {
    title: 'Abarna E — Portfolio',
    description: 'Websites that turn visitors into clients. 1+ Years of Experience, 200+ Deliveries.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#08080a] text-zinc-100 antialiased selection:bg-[#FF5E1E] selection:text-white">
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
