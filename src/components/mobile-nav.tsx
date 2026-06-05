"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { SocialLinks } from "./social-links";

const navItems = [
  { href: "#hero", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#contacto", label: "Contacto" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center border border-white/20 bg-black text-white"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="flex h-full flex-col items-center justify-center gap-8"
              role="navigation"
              aria-label="Navegación móvil"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-light uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-8 flex flex-col items-center gap-4">
                <SocialLinks variant="inline" />
                <a
                  href="mailto:portelarenzo@gmail.com"
                  className="font-mono text-xs uppercase tracking-widest text-white/30 hover:text-white"
                >
                  portelarenzo@gmail.com
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
