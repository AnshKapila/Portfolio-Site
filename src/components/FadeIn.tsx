"use client";
import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface FadeInProps {
  children: ReactNode;
  delayMs?: number;
  durationMs?: number;
  className?: string;
}

export function FadeIn({ children, delayMs = 0, durationMs = 1000, className }: FadeInProps) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delayMs / 1000, duration: durationMs / 1000 }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

