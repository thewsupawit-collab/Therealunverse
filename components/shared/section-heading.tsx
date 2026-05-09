"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 max-w-3xl",
        align === "center" ? "items-center text-center mx-auto" : "items-start",
        className,
      )}
    >
      {(index || eyebrow) && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4"
        >
          {index && (
            <span className="font-display italic text-gold text-lg leading-none">
              {index}
            </span>
          )}
          {index && eyebrow && (
            <span className="h-px w-8 bg-gold/40" aria-hidden />
          )}
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-display-lg font-display font-light text-balance"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-2xl text-pretty"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
