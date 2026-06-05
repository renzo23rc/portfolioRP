"use client";

import Link from "next/link";
import { SocialLinks } from "./social-links";
import { BrandLogo } from "./brand-logo";
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
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[200px] flex-col border-r border-white/10 bg-black md:flex">
      {/* Brand Logo */}
      <div className="px-5 pt-8">
        <BrandLogo
          showName={!!(activeSection && activeSection !== "hero")}
        />
      </div>

      {/* Navigation */}
      <nav
        className="mt-12 flex flex-col gap-1 px-5"
        role="navigation"
        aria-label="Navegación principal"
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.section;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 py-2.5 text-sm font-light uppercase tracking-[0.12em] transition-all",
                isActive
                  ? "text-white"
                  : "text-white/30 hover:text-white/70",
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <span
                className={cn(
                  "inline-block h-px transition-all duration-300",
                  isActive
                    ? "w-8 bg-white"
                    : "w-5 bg-white/20 group-hover:w-8 group-hover:bg-white/40",
                )}
              />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="mt-auto flex flex-col items-start gap-3 px-5 pb-8">
        <SocialLinks variant="sidebar" />
        <a
          href="mailto:portelarenzo@gmail.com"
          aria-label="Enviar email"
          className="p-1 text-white/30 transition-colors hover:text-white"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 4L12 13 2 4" />
          </svg>
        </a>
      </div>
    </aside>
  );
}
