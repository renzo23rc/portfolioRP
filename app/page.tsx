"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/mobile-nav";
import { SectionWrapper } from "@/components/section-wrapper";
import { useActiveSection } from "@/hooks/use-active-section";
import { portfolioData } from "@/content/portfolio";

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

function NumberedHeading({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative mb-10">
      {/* Decorative background number */}
      <span
        aria-hidden="true"
        className="absolute -left-4 -top-12 select-none text-[120px] font-bold leading-none text-foreground/5 md:-left-8 md:text-[160px]"
      >
        {number.padStart(2, "0")}
      </span>
      <h2 className="font-display relative flex items-center gap-4 text-2xl font-bold md:text-3xl">
        <span className="font-mono text-sm text-primary md:text-base">
          {number}.
        </span>
        {children}
        <span className="h-px flex-1 bg-border" />
      </h2>
    </div>
  );
}

export default function HomePage() {
  const activeSection = useActiveSection();

  return (
    <div>
      <Sidebar activeSection={activeSection} />
      <MobileNav />

      <main id="main-content" className="min-h-screen md:ml-[300px]">
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
            <h1 className="font-display text-5xl font-bold tracking-tighter md:text-7xl lg:text-8xl">
              {portfolioData.hero.name}
              <span className="text-primary">.</span>
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
          <NumberedHeading number="01">Sobre Mí</NumberedHeading>

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
          <NumberedHeading number="02">Experiencia</NumberedHeading>

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
          <NumberedHeading number="03">Proyectos</NumberedHeading>

          <div className="space-y-24">
            {portfolioData.projects.map((project, i) => (
              <div
                key={i}
                className="group grid gap-8 md:grid-cols-2 md:items-center"
              >
                {/* Image side (alternating) */}
                <div
                  className={`relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  {/* Placeholder with tech badges */}
                  <div className="flex h-full items-center justify-center p-8">
                    <div className="text-center">
                      <div className="mb-3 text-4xl font-bold text-foreground/10">
                        {project.title.charAt(0)}
                      </div>
                      <div className="flex flex-wrap justify-center gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
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
          <NumberedHeading number="04">Habilidades</NumberedHeading>

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
          <NumberedHeading number="05">Contacto</NumberedHeading>

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
                    className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-all hover:border-primary hover:text-primary"
                  >
                    {link.label}
                    <span className="opacity-0 transition-opacity group-hover:opacity-100">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Footer */}
        <footer className="border-t border-border px-8 py-8 text-center text-sm text-muted-foreground md:px-20">
          <p>
            Diseñado con{" "}
            <span className="text-primary">Inspiración en Brittany Chiang</span>
            . Construido con Next.js por Renzo Portela.
          </p>
        </footer>
      </main>
    </div>
  );
}
