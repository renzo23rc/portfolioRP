"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export function BrandLogo() {
  const reduce = useReducedMotion();

  return (
    <Link href="#hero" className="group block">
      <div className="relative flex h-12 w-12 items-center justify-center">
        {/* Outer ring */}
        <motion.svg
          viewBox="0 0 48 48"
          className="absolute inset-0 h-12 w-12"
          aria-hidden="true"
        >
          {/* Hexagon outline */}
          <motion.polygon
            points="24 2 44 13 44 35 24 46 4 35 4 13"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-primary/40 transition-colors group-hover:text-primary"
            initial={reduce ? false : { pathLength: 0, opacity: 0 }}
            animate={reduce ? false : { pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.svg>

        {/* Inner decorative dot */}
        <motion.div
          className="absolute h-1 w-1 rounded-full bg-primary"
          animate={
            reduce
              ? undefined
              : {
                  scale: [1, 1.4, 1],
                  opacity: [0.6, 1, 0.6],
                }
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Letters R + P combined */}
        <motion.span
          className="relative z-10 text-[15px] font-bold text-primary mix-blend-difference"
          animate={
            reduce
              ? undefined
              : {
                  y: [0, -1, 0],
                }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          RP
        </motion.span>

        {/* Hover glow */}
        <motion.div
          className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 blur-xl transition-opacity group-hover:opacity-100"
          initial={false}
        />
      </div>
    </Link>
  );
}
