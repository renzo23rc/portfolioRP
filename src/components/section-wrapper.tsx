"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  sectionName: string;
  className?: string;
  children: ReactNode;
}

export function SectionWrapper({
  id,
  sectionName,
  className = "",
  children,
}: SectionWrapperProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <section id={id} data-section={sectionName} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      data-section={sectionName}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
