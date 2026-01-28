import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import HypeSection from "@/components/HypeSection";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Link from "next/link"; // For the skip link to work with Next.js router handling if needed, but a tag is fine for anchor

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-loly-pink selection:text-white">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-loly-pink focus:text-white focus:px-4 focus:py-2 focus:rounded focus:shadow-neo-lg"
      >
        Skip to main content
      </a>

      <Navbar />
      <main id="main-content">
        <Hero />
        <Marquee />
        <HypeSection />
        <Services />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
