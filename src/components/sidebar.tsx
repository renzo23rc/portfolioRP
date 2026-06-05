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
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[200px] flex-col border-r border-border/50 md:flex">
      {/* Brand Logo */}
      <div className="px-5 pt-6">
        <BrandLogo
          showName={!!(activeSection && activeSection !== "hero")}
        />
      </div>

      {/* Navigation */}
      <nav className="mt-10 flex flex-col gap-0.5 px-5" role="navigation" aria-label="Navegación principal">
        {navItems.map((item) => {
          const isActive = activeSection === item.section;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative flex items-center gap-3 py-2.5 text-sm transition-all",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
              aria-current={isActive ? "page" : undefined}
            >
              {/* Active indicator line */}
                  <span
                    className={cn(
                      "inline-block h-px transition-all duration-300",
                      isActive
                        ? "w-8 bg-primary"
                        : "w-5 bg-muted-foreground/30 group-hover:w-8 group-hover:bg-foreground/50",
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
      <div className="mt-auto flex flex-col items-start gap-2 px-5 pb-6">
        <SocialLinks variant="sidebar" />
        <a
          href="mailto:portelarenzo@gmail.com"
          aria-label="Enviar email"
          className="p-1 text-muted-foreground transition-colors hover:text-primary"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M22 4L12 13 2 4" />
          </svg>
        </a>
      </div>
    </aside>
  );
}
