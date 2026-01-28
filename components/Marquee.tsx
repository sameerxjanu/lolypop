"use client";

import React from 'react';

export interface MarqueeProps {}

const Marquee: React.FC<MarqueeProps> = () => {
  const items = [
    "MEMECOINS", "BETTING APPS", "PREDICTION MARKETS", "DEGEN BRANDS", "HIGH RISK", "HIGH REWARD", "NO CORPORATE BS"
  ];

  return (
    <div className="bg-loly-yellow border-y-2 border-black overflow-hidden py-3 md:py-4 relative z-20">
      <div className="flex w-fit">
        {/* First copy */}
        <div className="flex animate-marquee whitespace-nowrap flex-nowrap items-center shrink-0 justify-start gap-0">
            {items.map((item, i) => (
                <React.Fragment key={i}>
                    <span className="text-2xl md:text-4xl font-black uppercase font-display tracking-tight px-6">
                        {item}
                    </span>
                    <span className="text-2xl md:text-4xl font-black px-6 text-black/30">//</span>
                </React.Fragment>
            ))}
        </div>
        {/* Second copy for loop */}
        <div className="flex animate-marquee whitespace-nowrap flex-nowrap items-center shrink-0 justify-start gap-0" aria-hidden="true">
            {items.map((item, i) => (
                <React.Fragment key={i}>
                    <span className="text-2xl md:text-4xl font-black uppercase font-display tracking-tight px-6">
                        {item}
                    </span>
                    <span className="text-2xl md:text-4xl font-black px-6 text-black/30">//</span>
                </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;