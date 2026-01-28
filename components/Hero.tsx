"use client";

import React, { useRef } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FloatingShape from './FloatingShape';
import StaggeredText from './StaggeredText';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const y3 = useTransform(scrollY, [0, 500], [0, 50]);
  const rotate1 = useTransform(scrollY, [0, 500], [0, 45]);
  const rotate2 = useTransform(scrollY, [0, 500], [0, -45]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[500px] md:min-h-[calc(100vh-80px)] flex flex-col items-center justify-start pt-4 md:pt-8 pb-8 overflow-hidden bg-white grid-bg-light">

      {/* Grid fade overlay - only at edges to preserve shape colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/60 pointer-events-none z-[1]"></div>

      {/* Floating Shapes with Responsive sizing to prevent overflow on mobile */}

      <FloatingShape
        type="circle"
        color="bg-loly-pink"
        className="w-12 h-12 md:w-20 md:h-20 top-[5%] left-[2%]"
        innerClassName="animate-breathing"
        style={{ y: y1, rotate: rotate1 }}
      />
      <FloatingShape
        type="donut"
        color="border-loly-blue"
        className="w-8 h-8 md:w-12 md:h-12 top-[8%] right-[3%]"
        innerClassName="animate-drift-wild"
        style={{ y: y2, rotate: rotate2 }}
      />
      <FloatingShape
        type="triangle"
        color="text-loly-purple"
        className="w-10 h-10 md:w-16 md:h-16 bottom-[35%] left-[2%]"
        innerClassName="animate-float"
        style={{ y: y3 }}
      />
      <FloatingShape
        type="star"
        color="text-loly-yellow"
        className="w-10 h-10 md:w-16 md:h-16 bottom-[40%] right-[4%]"
        innerClassName="animate-spin-reverse-slow"
        style={{ y: y2 }}
      />
      <FloatingShape
        type="square"
        color="bg-loly-green"
        className="w-10 h-10 md:w-16 md:h-16 bottom-[5%] left-[8%]"
        innerClassName="animate-float-random-2"
        style={{ y: y1, rotate: rotate1 }}
      />
      <FloatingShape
        type="donut"
        color="border-loly-orange"
        className="w-14 h-14 md:w-24 md:h-24 bottom-[5%] right-[8%]"
        innerClassName="animate-float-random-3"
        style={{ y: y3, rotate: rotate2 }}
      />

      {/* Top Badges */}
      <motion.div
        className="flex flex-row flex-wrap gap-4 justify-center mb-6 md:mb-8 relative z-20 items-center transform scale-90 md:scale-100"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <button
          className="bg-loly-pink text-white text-base md:text-lg font-medium px-5 py-2 rounded-full border border-black shadow-neo-lg hover:shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-neo-active active:translate-x-[4px] active:translate-y-[4px] transition-all cursor-pointer flex items-center gap-2 group"
        >
          <span className="animate-wiggle-slow inline-block group-hover:scale-125 transition-transform">🚀</span> MEMECOINS
        </button>
        <button
          className="bg-loly-purple text-white text-base md:text-lg font-medium px-5 py-2 rounded-full border border-black shadow-neo-lg hover:shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-neo-active active:translate-x-[4px] active:translate-y-[4px] transition-all cursor-pointer flex items-center gap-2 group"
        >
          <span className="animate-bounce-slow inline-block group-hover:rotate-12 transition-transform">🎰</span> BETTING
        </button>
        <button
          className="bg-loly-green text-white text-base md:text-lg font-medium px-5 py-2 rounded-full border border-black shadow-neo-lg hover:shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-neo-active active:translate-x-[4px] active:translate-y-[4px] transition-all cursor-pointer flex items-center gap-2 group"
        >
          <span className="animate-wiggle inline-block group-hover:scale-125 transition-transform">👾</span> DEGEN BRANDS
        </button>
      </motion.div>

      {/* Main Heading */}
      <div className="text-center max-w-6xl px-4 relative z-20 flex flex-col justify-center items-center flex-1">
        <h1 className="text-black text-5xl md:text-8xl font-black leading-[0.9] tracking-tight mb-4 md:mb-6 uppercase">
          <StaggeredText text="We BUILD For The" className="block mb-2" delay={0} stagger={0.03} immediate />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-loly-pink via-loly-purple via-loly-blue to-loly-green bg-[length:200%_auto] animate-gradient-bg relative inline-block py-1 md:py-2">
            <StaggeredText text="Internet's" delay={0} word={false} stagger={0.02} immediate />
          </span> <br />
          <StaggeredText text="Wild Side" delay={100} stagger={0.03} immediate />
        </h1>

        <motion.p
          className="text-base md:text-xl font-medium text-gray-800 max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          LOLYPOP helps memecoins, betting & prediction markets apps, and degen brands
          <span className="text-black font-semibold px-1 ml-1">
            stand out, grow, and convert.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <button
            onClick={() => {
              const contactSection = document.querySelector('#contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label="Contact us to discuss your project"
            className="bg-white text-black text-base font-medium py-3 px-8 rounded-full border border-black flex items-center gap-2 group relative overflow-hidden transition-all duration-200 shadow-neo-lg hover:shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-neo-active active:translate-x-[4px] active:translate-y-[4px]"
          >
            <span className="relative z-10 flex items-center gap-2">
              LET'S CHAT <MessageCircle size={18} className="animate-wiggle-slow" strokeWidth={2} />
            </span>
          </button>

          <button
            onClick={() => {
              const servicesSection = document.querySelector('#services');
              servicesSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label="Learn more about our services"
            className="bg-white text-black text-base font-medium py-3 px-8 rounded-full border border-black flex items-center gap-2 group transition-all duration-200 shadow-neo-lg hover:shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-neo-active active:translate-x-[4px] active:translate-y-[4px]"
          >
            SEE WHAT WE DO <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;