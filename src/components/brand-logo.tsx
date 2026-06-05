"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

interface BrandLogoProps {
  showName?: boolean;
}

export function BrandLogo({ showName = false }: BrandLogoProps) {
  const reduce = useReducedMotion();

  return (
    <Link href="#hero" className="group block">
      <div className="relative flex h-9 items-center">
        {/* Initials */}
        <motion.div
          className="absolute left-0 flex items-center gap-[1px]"
          animate={
            reduce
              ? undefined
              : { opacity: showName ? 0 : 1, y: showName ? -8 : 0 }
          }
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-display text-lg italic tracking-tight text-white transition-colors group-hover:text-white/60">
            R
          </span>
          <span className="font-display text-lg italic tracking-tight text-white transition-colors group-hover:text-white/60">
            P
          </span>
        </motion.div>

        {/* Full name */}
        <motion.div
          className="flex items-center"
          animate={
            reduce
              ? undefined
              : { opacity: showName ? 1 : 0, y: showName ? 0 : 8 }
          }
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-display text-base italic tracking-[0.02em] text-white transition-colors group-hover:text-white/60">
            Renzo Portela
          </span>
        </motion.div>
      </div>
    </Link>
  );
}
