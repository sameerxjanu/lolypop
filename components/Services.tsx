"use client";

import React from 'react';
import { Coins, Dice5, Flame, Zap } from 'lucide-react';
import Reveal from './Reveal';
import { motion } from 'framer-motion';
import { ServiceItem } from '../types';

export interface ServicesProps { }



const Services: React.FC<ServicesProps> = () => {
  const services: ServiceItem[] = [
    {
      title: "MEMECOINS",
      description: "From $PEPE to the next 1000x. We make your coin impossible to ignore.",
      icon: <Coins className="w-10 h-10 md:w-12 md:h-12" strokeWidth={2} />,
      color: 'yellow', // Mapped below to bg class
    },
    {
      title: "BETTING & PREDICTION",
      description: "Casinos, prediction markets, and degen games that need that edge.",
      icon: <Dice5 className="w-10 h-10 md:w-12 md:h-12" strokeWidth={2} />,
      color: 'pink', // Mapped below
    },
    // Extended items for display logic
    {
      title: "DEGEN BRANDS",
      description: "If your brand lives on the internet and thrives on chaos, we get you.",
      icon: <Flame className="w-10 h-10 md:w-12 md:h-12" strokeWidth={2} />,
      color: 'yellow',
    },
    {
      title: "CRYPTO PROJECTS",
      description: "DeFi, NFTs, DAOs — the whole Web3 zoo. We speak fluent blockchain.",
      icon: <Zap className="w-10 h-10 md:w-12 md:h-12" strokeWidth={2} />,
      color: 'pink',
    }
  ];

  // Helper for styles based on content (simulating the previous structure but strongly typed)
  const getServiceStyle = (index: number) => {
    const styles = [
      { bg: "bg-loly-yellow", text: "text-black", iconColor: "text-black" },
      { bg: "bg-loly-blue", text: "text-white", iconColor: "text-white" },
      { bg: "bg-loly-orange", text: "text-white", iconColor: "text-white" },
      { bg: "bg-loly-purple", text: "text-white", iconColor: "text-white" }
    ];
    return styles[index] || styles[0];
  };

  return (
    <section id="services" className="py-20 px-4 md:px-6 bg-white relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <Reveal animation="fade-in-up">
            <span className="inline-block bg-gray-100 px-4 py-1 rounded-full text-xs font-bold tracking-widest border border-gray-300 uppercase mb-4 text-gray-600">
              Who It's For
            </span>
          </Reveal>
          <Reveal delay={100} animation="fade-in-up">
            <h2 className="text-3xl md:text-5xl font-black uppercase relative z-10">
              Built for the <span className="relative inline-block pb-2 px-1 text-black cursor-default">
                Unhinged
                <motion.span
                  className="absolute bottom-1 left-0 w-full h-2 bg-loly-pink"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  style={{ originX: 0 }}
                />
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {services.map((item, index) => {
            const style = getServiceStyle(index);
            return (
              <Reveal key={index} delay={index * 100} className="h-full" animation="scale-in">
                <div className="group relative h-full cursor-pointer">
                  {/* Main Card */}
                  <div className={`relative ${style.bg} border-[3px] md:border-4 border-black rounded-[2rem] p-5 md:p-8 h-full flex flex-col justify-start items-start gap-3 transition-all duration-200 shadow-neo-lg group-hover:shadow-neo group-hover:translate-x-[3px] group-hover:translate-y-[3px] group-active:shadow-neo-active group-active:translate-x-[6px] group-active:translate-y-[6px]`}>

                    {/* Icon */}
                    <div className={`${style.iconColor} transform transition-transform duration-300 animate-wiggle-slow group-hover:scale-110 origin-center`}>
                      {item.icon}
                    </div>

                    {/* Content */}
                    <div className="w-full">
                      <h3 className={`text-xl md:text-2xl lg:text-3xl font-black uppercase mb-2 ${style.text} leading-[0.95] tracking-tight`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm md:text-base font-bold leading-relaxed ${style.text} opacity-90`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;