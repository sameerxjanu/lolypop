"use client";

import React from 'react';
import { motion, MotionStyle } from 'framer-motion';

export interface FloatingShapeProps {
  type: 'circle' | 'triangle' | 'star' | 'donut' | 'square';
  color: string;
  className?: string;
  innerClassName?: string;
  delay?: boolean;
  style?: MotionStyle;
}

// Cast motion.div to any to avoid complex type issues in this environment
// while still retaining the logic.
const FloatingShape: React.FC<FloatingShapeProps> = ({
  type,
  color,
  className = '',
  innerClassName = '',
  delay = false,
  style
}) => {
  // Use 'will-change-transform' to promote to a new layer for better scroll performance
  const animationClass = innerClassName || (delay ? 'animate-float-delayed' : 'animate-float');

  return (
    <motion.div
      className={`absolute pointer-events-none z-10 will-change-transform ${className}`}
      style={style}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: Math.random() * 0.5 }}
      aria-hidden="true"
    >
      <div className={`w-full h-full ${animationClass}`}>
        {type === 'circle' && (
          <div className={`rounded-full ${color}`} style={{ width: '100%', height: '100%' }} />
        )}

        {type === 'donut' && (
          <div className={`rounded-full border-[12px] md:border-[16px] ${color}`} style={{ width: '100%', height: '100%' }} />
        )}

        {type === 'square' && (
          <div className={`rounded-2xl ${color}`} style={{ width: '100%', height: '100%' }} />
        )}

        {type === 'triangle' && (
          <svg viewBox="0 0 100 100" className={`w-full h-full fill-current ${color}`}>
            <polygon points="50,15 90,85 10,85" />
          </svg>
        )}

        {type === 'star' && (
          <svg viewBox="0 0 24 24" className={`w-full h-full fill-current ${color}`}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        )}
      </div>
    </motion.div>
  );
};

export default FloatingShape;