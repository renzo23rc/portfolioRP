"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/mobile-nav";
import { SectionWrapper } from "@/components/section-wrapper";
import { useActiveSection } from "@/hooks/use-active-section";
import { portfolioData, type SocialKind } from "@/content/portfolio";

function BlinkingCursor() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`inline-block h-[0.9em] w-[3px] translate-y-[2px] bg-primary transition-opacity ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}

function SocialIcon({ kind, className }: { kind: SocialKind; className?: string }) {
  const cls = className || "h-5 w-5";
  switch (kind) {
    case "github":
      return <svg viewBox="0 0 24 24" fill="currentColor" className={cls}><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.615.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.21.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>;
    case "linkedin":
      return <svg viewBox="0 0 24 24" fill="currentColor" className={cls}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
    case "instagram":
      return <svg viewBox="0 0 24 24" fill="currentColor" className={cls}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>;
    case "whatsapp":
      return <svg viewBox="0 0 24 24" fill="currentColor" className={cls}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
    default:
      return null;
  }
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
        {children}
      </h2>
      <div className="mt-3 h-px w-12 bg-primary/50" />
    </div>
  );
}

export default function HomePage() {
  const activeSection = useActiveSection();

  return (
    <div>
      <Sidebar activeSection={activeSection} />
      <MobileNav />

      <main id="main-content" className="min-h-screen md:ml-[200px]">
        {/* ===== HERO ===== */}
        <SectionWrapper
          id="hero"
          sectionName="hero"
          className="flex min-h-[100dvh] items-center px-8 pt-28 md:px-20 md:pt-0"
        >
          <div className="max-w-[700px]">
            <p className="mb-3 font-mono text-base text-primary">
              {portfolioData.hero.greeting}
              <BlinkingCursor />
            </p>
            <h1 className="font-display text-5xl italic tracking-[0.06em] md:text-7xl lg:text-8xl">
              {portfolioData.hero.name}
            </h1>
            <p className="mt-2 text-xl text-muted-foreground md:text-2xl">
              {portfolioData.hero.title}
            </p>
            <p className="mt-6 max-w-[540px] leading-relaxed text-muted-foreground">
              {portfolioData.hero.summary}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={portfolioData.hero.cta.primary.href}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg border border-primary bg-primary/10 px-7 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <span className="relative z-10">
                  {portfolioData.hero.cta.primary.label}
                </span>
              </a>
              <a
                href={portfolioData.hero.cta.secondary.href}
                className="group inline-flex items-center gap-2 rounded-lg border border-border px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
              >
                {portfolioData.hero.cta.secondary.label}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </SectionWrapper>

        {/* ===== ABOUT ===== */}
        <SectionWrapper
          id="sobre-mi"
          sectionName="about"
          className="px-8 py-28 md:px-20"
        >
          <SectionHeading>Sobre Mí</SectionHeading>

          <div className="grid gap-10 md:grid-cols-[3fr_2fr]">
            <div className="space-y-4">
              {portfolioData.about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-muted-foreground md:text-lg"
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Photo placeholder */}
            {portfolioData.about.photoPlaceholder && (
              <div className="relative">
                <div className="relative aspect-[3/4] w-full max-w-[280px] rounded-xl border-2 border-primary/30 bg-card transition-all hover:border-primary">
                  <div className="absolute -bottom-3 -right-3 h-full w-full rounded-xl border-2 border-primary/10" />
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto mb-2 h-16 w-16 rounded-full bg-muted" />
                      <p className="text-sm text-muted-foreground">
                        Tu foto aquí
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </SectionWrapper>

        {/* ===== EXPERIENCE ===== */}
        <SectionWrapper
          id="experiencia"
          sectionName="experience"
          className="px-8 py-28 md:px-20"
        >
          <SectionHeading>Experiencia</SectionHeading>

          <div className="space-y-12">
            {portfolioData.experience.map((item, i) => (
              <div
                key={i}
                className="group grid gap-4 md:grid-cols-[120px_1fr]"
              >
                {/* Left: Period */}
                <div>
                  <p className="pt-1 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {item.period}
                  </p>
                </div>

                {/* Right: Details */}
                <div className="relative">
                  {/* Vertical timeline line */}
                  <div className="absolute left-0 top-0 h-full w-px bg-border/50 group-last:bg-transparent max-md:hidden" />
                  <div className="pb-8 pl-6 max-md:pl-0">
                    <div className="absolute left-[-4px] top-[6px] h-2 w-2 rounded-full border-2 border-primary bg-background max-md:hidden" />
                    <h3 className="font-display text-xl font-semibold">{item.role}</h3>
                    <p className="text-primary">{item.company}</p>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground md:hidden">
                      {item.period}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {item.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-[7px] h-[3px] w-[3px] shrink-0 rounded-full bg-muted-foreground" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* ===== PROJECTS ===== */}
        <SectionWrapper
          id="proyectos"
          sectionName="projects"
          className="px-8 py-28 md:px-20"
        >
          <SectionHeading>Proyectos</SectionHeading>

          <div className="space-y-24">
            {portfolioData.projects.map((project, i) => (
              <div
                key={i}
                className="group grid gap-8 md:grid-cols-2 md:items-center"
              >
                {/* Image side (alternating) */}
                <div
                  className={`relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 group/img ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`Captura de ${project.title}`}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center p-8">
                      <div className="text-center">
                        <div className="mb-3 text-4xl font-bold text-foreground/10">
                          {project.title.charAt(0)}
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity group-hover/img:opacity-100" />
                </div>

                {/* Text side */}
                <div className={i % 2 === 1 ? "md:order-1 md:text-right" : ""}>
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">
                    Proyecto Destacado
                  </p>
                  <h3 className="font-display mt-2 text-2xl font-bold md:text-3xl">
                    {project.title}
                  </h3>
                  <div
                    className={`mt-4 rounded-xl border border-border/50 bg-card p-6 ${
                      i % 2 === 1 ? "md:ml-auto" : ""
                    }`}
                  >
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <div
                    className={`mt-4 flex flex-wrap gap-2 ${
                      i % 2 === 1 ? "md:justify-end" : ""
                    }`}
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div
                    className={`mt-4 flex gap-4 ${
                      i % 2 === 1 ? "md:justify-end" : ""
                    }`}
                  >
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-foreground transition-colors hover:text-primary"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.615.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.21.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-foreground transition-colors hover:text-primary"
                      >
                        Demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* ===== SKILLS ===== */}
        <SectionWrapper
          id="habilidades"
          sectionName="skills"
          className="px-8 py-28 md:px-20"
        >
          <SectionHeading>Habilidades</SectionHeading>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-6 font-mono text-sm uppercase tracking-widest text-primary">
                {portfolioData.skills.technical.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.technical.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-card px-4 py-2 text-sm text-foreground transition-all hover:border-primary/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-6 font-mono text-sm uppercase tracking-widest text-primary">
                {portfolioData.skills.soft.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.soft.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-card px-4 py-2 text-sm text-foreground transition-all hover:border-primary/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="mb-6 font-mono text-sm uppercase tracking-widest text-primary">
              Idiomas
            </h3>
            <div className="flex flex-wrap gap-4">
              {portfolioData.languages.map((lang) => (
                <div
                  key={lang.language}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card px-5 py-3"
                >
                  <span className="font-semibold">{lang.language}</span>
                  <span className="h-4 w-px bg-border" />
                  <span className="text-sm text-muted-foreground">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* ===== CONTACT ===== */}
        <SectionWrapper
          id="contacto"
          sectionName="contact"
          className="px-8 py-28 md:px-20"
        >
          <SectionHeading>Contacto</SectionHeading>

          <div className="max-w-[600px]">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {portfolioData.contact.description}
            </p>

            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="mt-8 inline-flex items-center gap-3 rounded-lg border border-primary/50 bg-primary/5 px-8 py-4 text-lg font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              {portfolioData.contact.email}
              <span className="text-sm">→</span>
            </a>

            <div className="mt-12">
              <h3 className="mb-4 font-mono text-sm uppercase tracking-widest text-muted-foreground">
                Encontrame en
              </h3>
              <div className="flex flex-wrap gap-3">
                {portfolioData.socialLinks.map((link) => (
                  <a
                    key={link.kind}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="rounded-lg border border-border bg-card p-3 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:bg-primary/5"
                  >
                    <SocialIcon kind={link.kind} className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Footer */}
        <footer className="border-t border-border px-8 py-6 md:px-20">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Tech stack marquee */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-mono text-primary">$</span>
              <span className="font-mono">built with</span>
              <span className="flex items-center gap-1.5">
                {["Next.js", "React", "Tailwind", "Motion", "Inter"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-card px-2 py-0.5 font-mono text-[10px] text-muted-foreground ring-1 ring-border transition-colors hover:text-primary hover:ring-primary/50"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </span>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] text-muted-foreground">
                © {new Date().getFullYear()} Renzo Portela
              </span>
              <a
                href="#hero"
                className="group flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-primary"
                aria-label="Volver al inicio"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5"
                >
                  <path d="M18 15l-6-6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
