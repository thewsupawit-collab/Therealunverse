"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  amount?: number;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  y = 18,
  className,
  amount = 0.4,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, ease: [0.16, 1, 0.3, 1], delay }}
      className={cn(className)}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
