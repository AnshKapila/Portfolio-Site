"use client";
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  initialDelayMs?: number;
}

export function AnimatedHeading({
  text,
  className,
  initialDelayMs = 200,
}: AnimatedHeadingProps) {
  const lines = text.split('\n');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: initialDelayMs / 1000,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h1
      className={cn(className)}
      style={{ letterSpacing: '-0.04em' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="whitespace-nowrap overflow-visible flex items-end min-h-[1.2em]">
          {line.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={child}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>
      ))}
    </motion.h1>
  );
}
