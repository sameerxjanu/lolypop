"use client";

import React from 'react';
import { motion } from 'framer-motion';

export interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <motion.nav
      className="w-full px-6 py-4 flex justify-between items-center bg-white/60 backdrop-blur-md border-b-2 border-black sticky top-0 z-50 transition-all"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
    >
      <motion.div
        className="text-3xl font-bold font-display tracking-tight flex items-center gap-1 group cursor-pointer origin-left"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="transition-colors duration-300">LOLYPOP</span>
        <span className="text-loly-pink group-hover:animate-bounce">.</span>
      </motion.div>

      <button
        onClick={() => {
          const contactSection = document.querySelector('#contact');
          contactSection?.scrollIntoView({ behavior: 'smooth' });
        }}
        aria-label="Scroll to contact section"
        className="bg-loly-pink text-white font-black py-3 px-6 md:py-2.5 md:px-6 rounded-full border border-black flex items-center gap-2 text-sm uppercase tracking-wide group transition-all duration-200 shadow-neo-lg hover:shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-neo-active active:translate-x-[4px] active:translate-y-[4px] min-h-[48px] touch-manipulation"
      >
        Let's Chat
        <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse transition-colors" />
      </button>
    </motion.nav>
  );
};

export default Navbar;