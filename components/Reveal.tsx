"use client";

import React from 'react';
import { motion } from 'framer-motion';

export interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in ms
  animation?: 'fade-in-up' | 'pop' | 'slide-in-right' | 'scale-in';
  duration?: number;
  threshold?: number;
}

const Reveal: React.FC<RevealProps> = ({
  children,
  className = "",
  delay = 0,
  animation = 'fade-in-up',
  duration = 0.5,
  threshold = 0.2
}) => {
  const getVariants = () => {
    switch (animation) {
      case 'pop':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 }
        };
      case 'slide-in-right':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 }
        };
      case 'scale-in':
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 }
        };
      case 'fade-in-up':
      default:
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        };
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }} // Fix: animation jank prevents re-triggering
      variants={getVariants()}
      transition={{
        duration: duration,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1] // Custom ease
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;