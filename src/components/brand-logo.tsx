"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export function BrandLogo() {
  const reduce = useReducedMotion();

  return (
    <Link href="#hero" className="group block">
      <div className="relative flex h-12 w-12 items-center justify-center">
        {/* Subtle background shape */}
        <motion.div
          className="absolute inset-0 rounded-xl border border-primary/20 bg-primary/[0.03] transition-colors group-hover:border-primary/40 group-hover:bg-primary/[0.06]"
          initial={false}
        />

        {/* Initials */}
        <div className="relative z-10 flex items-center gap-[1px]">
          <motion.span
            className="font-display text-[17px] italic tracking-[0.02em] text-primary"
            initial={reduce ? false : { y: 8, opacity: 0 }}
            animate={reduce ? false : { y: 0, opacity: 1 }}
            transition={{ delay: 0, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            R
          </motion.span>
          <motion.span
            className="font-display text-[17px] italic tracking-[0.02em] text-primary"
            initial={reduce ? false : { y: 8, opacity: 0 }}
            animate={reduce ? false : { y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            P
          </motion.span>
        </div>

        {/* Hover glow ring */}
        <motion.div
          className="absolute -inset-1 rounded-xl opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
