"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

export interface StaggeredTextProps {
  text: string;
  className?: string;
  delay?: number; // delay before starting the staggering
  stagger?: number; // delay between each word/char
  word?: boolean; // true for word split, false for char split
  immediate?: boolean; // If true, animates on mount instead of scroll
}

// Any cast to resolve type conflicts in this environment
const StaggeredText: React.FC<StaggeredTextProps> = ({
  text,
  className = '',
  delay = 0,
  stagger = 0.05,
  word = true,
  immediate = false
}) => {
  const items = word ? text.split(" ") : text.split("");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (_i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay * 0.001 }
    })
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 250, // Increased stiffness for faster snap
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 250,
      },
    },
  };

  return (
    <motion.div
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView={immediate ? undefined : "visible"}
      animate={immediate ? "visible" : undefined}
      viewport={{ once: true }} // Fix: animation jank
    >
      {items.map((item, index) => (
        <motion.span
          variants={child}
          key={index}
          className={`${word ? 'mr-[0.25em]' : ''} last:mr-0 inline-block`}
        >
          {item === " " ? "\u00A0" : item}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default StaggeredText;