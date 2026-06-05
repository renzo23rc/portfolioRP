"use client";

import Link from "next/link";
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
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[300px] flex-col border-r border-border/50 md:flex">
      {/* Logo / Monogram */}
      <div className="px-10 pt-10">
        <Link href="#hero" className="group inline-flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all group-hover:bg-primary/20">
            <span className="text-lg font-bold text-primary">RP</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="mt-16 flex flex-col gap-1 px-8" role="navigation" aria-label="Navegación principal">
        {navItems.map((item) => {
          const isActive = activeSection === item.section;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative flex items-center gap-4 py-3 text-sm transition-all",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {/* Active indicator line */}
              <span
                className={cn(
                  "inline-block h-px transition-all duration-300",
                  isActive
                    ? "w-12 bg-primary"
                    : "w-8 bg-muted-foreground/30 group-hover:w-12 group-hover:bg-foreground/50",
                )}
              />
              <span
                className={cn(
                  "font-medium transition-colors",
                  isActive && "text-primary",
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="mt-auto flex flex-col items-center gap-6 pb-10">
        <SocialLinks variant="sidebar" />
        <div className="h-16 w-px bg-border" />
        <a
          href="mailto:portelarenzo@gmail.com"
          className="text-xs font-medium tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          portelarenzo@gmail.com
        </a>
      </div>
    </aside>
  );
}
