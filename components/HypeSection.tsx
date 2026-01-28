"use client";

import React from 'react';
import Reveal from './Reveal';
import StaggeredText from './StaggeredText';
import { motion } from 'framer-motion';

export interface HypeSectionProps { }

const HypeSection: React.FC<HypeSectionProps> = () => {
  return (
    <section className="bg-white py-24 px-6 border-t-2 border-b-2 border-black relative overflow-hidden">

      {/* Background Layer - Medium Opacity Corner Blobs - Liquid Motion */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Top Left - Pink Liquid Blob */}
        {/* fixed: used explicit hex codes to ensure opacity modifiers work correctly */}
        <motion.div
          className="absolute -top-[120px] -left-[120px] md:-top-[180px] md:-left-[180px] w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-gradient-to-br from-[#ff4281]/40 via-[#ff4281]/10 to-transparent blur-[60px]"
          animate={{
            x: [0, 80, -60, 75, -70, 30, 0],
            y: [0, -70, 80, -50, 70, -30, 0],
            scale: [1, 1.25, 0.75, 1.3, 0.7, 1.1, 1],
            rotate: [0, 35, -30, 45, -35, 15, 0],
            borderRadius: [
              "60% 40% 15% 70% / 60% 30% 35% 40%",
              "40% 60% 25% 50% / 40% 60% 25% 50%",
              "30% 70% 35% 30% / 30% 30% 35% 70%",
              "50% 50% 10% 80% / 25% 80% 10% 75%",
              "70% 30% 25% 50% / 50% 40% 30% 50%",
              "30% 70% 20% 60% / 60% 40% 35% 30%",
              "60% 40% 15% 70% / 60% 30% 35% 40%"
            ]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
        />

        {/* Bottom Right - Purple Liquid Blob */}
        {/* fixed: used explicit hex codes to ensure opacity modifiers work correctly */}
        <motion.div
          className="absolute -bottom-[120px] -right-[120px] md:-bottom-[180px] md:-right-[180px] w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-gradient-to-tl from-[#8e4dff]/40 via-[#8e4dff]/10 to-transparent blur-[60px]"
          animate={{
            x: [0, -75, 55, -90, 50, -35, 0],
            y: [0, 80, -60, 70, -80, 35, 0],
            scale: [1, 0.7, 1.3, 0.75, 1.25, 1.1, 1],
            rotate: [0, -40, 30, -50, 35, -15, 0],
            borderRadius: [
              "20% 60% 70% 30% / 25% 60% 30% 60%",
              "30% 40% 30% 70% / 30% 30% 70% 40%",
              "35% 30% 30% 70% / 35% 60% 40% 30%",
              "15% 70% 50% 50% / 15% 30% 70% 70%",
              "25% 50% 20% 80% / 12% 80% 20% 75%",
              "40% 20% 40% 60% / 25% 50% 60% 40%",
              "20% 60% 70% 30% / 25% 60% 30% 60%"
            ]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Top Tag */}
        <Reveal animation="scale-in">
          <span className="inline-block bg-gray-100 px-4 py-1 rounded-full text-xs font-bold tracking-widest border border-gray-300 uppercase mb-8 text-gray-600 cursor-default">
            What is Lolypop?
          </span>
        </Reveal>

        {/* Main Headline */}
        <div className="mb-10 relative">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.9] tracking-tight uppercase flex flex-col items-center gap-2">
            <StaggeredText text="YOUR PROJECT'S" />
            <span className="relative inline-block pb-2 group text-black">
              <StaggeredText text="HYPE ENGINE" delay={200} />
              {/* Underline Animation */}
              <motion.span
                className="absolute bottom-1 left-0 w-full h-2 bg-loly-pink"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
                style={{ originX: 0 }}
              />
            </span>
          </h2>
        </div>

        {/* Content Container */}
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Sub-headline */}
          <Reveal delay={200} animation="fade-in-up">
            <p className="text-2xl md:text-4xl text-black leading-tight font-bold tracking-tight">
              LOLYPOP is built for the <span className="italic text-black">wild side</span> of the internet.
            </p>
          </Reveal>

          {/* Body Text */}
          <Reveal delay={300} animation="fade-in-up">
            {/* Max width set to keep text in ~2 lines */}
            <p className="text-lg md:text-2xl text-gray-600 font-medium leading-relaxed max-w-4xl mx-auto">
              We create AI content, AI GEO & ADS, AI influencers, and clipping systems for companies that want attention and conversions without playing it safe.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default HypeSection;