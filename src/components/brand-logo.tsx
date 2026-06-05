"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export function BrandLogo() {
  const reduce = useReducedMotion();

  return (
    <Link href="#hero" className="group block">
      <div className="relative flex h-10 w-10 items-center justify-center">
        <motion.span
          className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary"
          initial={reduce ? false : { opacity: 0, x: -6 }}
          animate={reduce ? false : { opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          R
        </motion.span>
        <motion.span
          className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary"
          initial={reduce ? false : { opacity: 0, x: 6 }}
          animate={reduce ? false : { opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          P
        </motion.span>
      </div>
    </Link>
  );
}
