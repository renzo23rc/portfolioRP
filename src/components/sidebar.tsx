"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SocialLinks } from "./social-links";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#sobre-mi", label: "Sobre Mí", section: "about" },
  { href: "#experiencia", label: "Experiencia", section: "experience" },
  { href: "#proyectos", label: "Proyectos", section: "projects" },
  { href: "#habilidades", label: "Habilidades", section: "skills" },
  { href: "#contacto", label: "Contacto", section: "contact" },
];

interface SidebarProps {
  activeSection: string;
}

export function Sidebar({ activeSection }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[300px] flex-col border-r border-border md:flex">
      {/* Monogram */}
      <div className="flex items-center gap-3 px-8 pt-10">
        <Link href="#hero" className="group">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/30 transition-all group-hover:ring-primary/60">
            <span className="text-2xl font-bold text-primary">RP</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="mt-16 flex flex-col gap-1 px-6" role="navigation" aria-label="Navegación principal">
        {navItems.map((item) => {
          const isActive = activeSection === item.section;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <span
                className={cn(
                  "h-px w-6 bg-muted-foreground/40 transition-all group-hover:w-10",
                  isActive && "w-10 bg-primary",
                )}
              />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Social + Email */}
      <div className="mt-auto flex flex-col items-center gap-6 pb-8">
        <SocialLinks variant="sidebar" />

        {/* Vertical email */}
        <div className="h-20 w-px bg-border" />
        <a
          href="mailto:portelarenzo@gmail.com"
          className="vertical-email text-xs font-medium tracking-widest text-muted-foreground transition-colors hover:text-primary"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          portelarenzo@gmail.com
        </a>
      </div>
    </aside>
  );
}
