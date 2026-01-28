"use client";

import React from 'react';
import { Zap, Eye, Brain, Volume2 } from 'lucide-react';
import Reveal from './Reveal';
import { motion } from 'framer-motion';
import { FeatureItem } from '../types';

export interface FeaturesProps { }

const Features: React.FC<FeaturesProps> = () => {
  const features: FeatureItem[] = [
    {
      icon: <Brain size={32} />,
      title: 'Internet-First Thinking',
      description: "We don't adapt old-school marketing. We're natives. We speak the language."
    },
    {
      icon: <Eye size={32} />,
      title: 'Culture Awareness',
      description: "We know what's trending before it trends. Always plugged in to the matrix."
    },
    {
      icon: <Zap size={32} />,
      title: 'Built For Speed',
      description: "Crypto moves fast. We move faster. Ship in days, not months."
    },
    {
      icon: <Volume2 size={32} />,
      title: 'Cut Through Noise',
      description: "In a sea of rugs and copycats, we make you the main character."
    }
  ];

  return (
    <section className="bg-[#0a0a0a] text-white py-24 px-6 relative grid-bg border-t-2 border-black">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <Reveal>
            <span className="inline-block bg-loly-green text-black px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,199,83,0.5)] animate-pulse">
              Why Lolypop?
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-6xl font-bold uppercase mt-2">
              What Makes Us <span className="relative inline-block pb-2">
                Different
                <motion.span
                  className="absolute bottom-1 left-0 w-full h-2 bg-loly-pink"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  style={{ originX: 0 }}
                />
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 150} animation="pop">
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="w-20 h-20 bg-white text-black rounded-3xl border-4 border-white flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <div className="group-hover:animate-wiggle-hover">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold uppercase mb-3 font-display tracking-wide group-hover:text-loly-pink transition-colors">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[200px] group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Overlay gradient to fade grid at edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]/80 pointer-events-none"></div>
    </section>
  );
};

export default Features;