"use client";

import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/mobile-nav";
import { SectionWrapper } from "@/components/section-wrapper";
import { useActiveSection } from "@/hooks/use-active-section";
import { portfolioData } from "@/content/portfolio";

export default function HomePage() {
  const activeSection = useActiveSection();

  return (
    <div className="md:grid md:grid-cols-[300px_1fr]">
      <Sidebar activeSection={activeSection} />
      <MobileNav />

      <main id="main-content" className="min-h-screen">
        {/* Hero Section */}
        <SectionWrapper
          id="hero"
          sectionName="hero"
          className="flex min-h-screen items-center px-6 pt-24 md:px-16 md:pt-0"
        >
          <div className="max-w-[680px]">
            <p className="mb-2 font-mono text-sm text-primary">
              {portfolioData.hero.greeting}
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              {portfolioData.hero.name}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              {portfolioData.hero.title}
            </p>
            <p className="mt-6 max-w-[540px] text-muted-foreground">
              {portfolioData.hero.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={portfolioData.hero.cta.primary.href}
                className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
              >
                {portfolioData.hero.cta.primary.label}
              </a>
              <a
                href={portfolioData.hero.cta.secondary.href}
                className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
              >
                {portfolioData.hero.cta.secondary.label}
              </a>
            </div>
          </div>
        </SectionWrapper>

        {/* About Section */}
        <SectionWrapper
          id="sobre-mi"
          sectionName="about"
          className="px-6 py-24 md:px-16"
        >
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">
            {portfolioData.about.heading}
          </h2>
          <div className="space-y-4">
            {portfolioData.about.paragraphs.map((p, i) => (
              <p key={i} className="max-w-[600px] text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          {portfolioData.about.photoPlaceholder && (
            <div className="mt-8 flex items-center gap-4 rounded-lg border border-dashed border-border p-4">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted text-muted-foreground">
                <span className="text-sm">Foto</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Foto próxima a agregar
              </p>
            </div>
          )}
        </SectionWrapper>

        {/* Experience Section */}
        <SectionWrapper
          id="experiencia"
          sectionName="experience"
          className="px-6 py-24 md:px-16"
        >
          <h2 className="mb-12 text-2xl font-bold md:text-3xl">Experiencia</h2>
          <div className="space-y-12">
            {portfolioData.experience.map((item, i) => (
              <div key={i} className="group relative pl-8 before:absolute before:left-[7px] before:top-2 before:h-full before:w-px before:bg-border last:before:hidden">
                <div className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 border-primary bg-background" />
                <div className="space-y-2">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold">{item.role}</h3>
                    <p className="text-primary font-medium">{item.company}</p>
                    <p className="text-sm text-muted-foreground">{item.period}</p>
                  </div>
                  <ul className="space-y-1.5">
                    {item.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-muted-foreground list-disc list-inside">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Projects Section */}
        <SectionWrapper
          id="proyectos"
          sectionName="projects"
          className="px-6 py-24 md:px-16"
        >
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">Proyectos</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {portfolioData.projects.map((project, i) => (
              <div
                key={i}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Demo →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Skills Section */}
        <SectionWrapper
          id="habilidades"
          sectionName="skills"
          className="px-6 py-24 md:px-16"
        >
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">
            {portfolioData.skills.heading}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-sm font-semibold text-primary">
                {portfolioData.skills.technical.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.technical.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-card border border-border px-3 py-1.5 text-sm text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-primary">
                {portfolioData.skills.soft.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.soft.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-card border border-border px-3 py-1.5 text-sm text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="mt-10">
            <h3 className="mb-3 text-sm font-semibold text-primary">Idiomas</h3>
            <div className="flex flex-wrap gap-4">
              {portfolioData.languages.map((lang) => (
                <div
                  key={lang.language}
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2"
                >
                  <span className="font-medium">{lang.language}</span>
                  <span className="text-sm text-muted-foreground">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Contact Section */}
        <SectionWrapper
          id="contacto"
          sectionName="contact"
          className="px-6 py-24 md:px-16"
        >
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            {portfolioData.contact.heading}
          </h2>
          <p className="mb-8 max-w-[500px] text-muted-foreground">
            {portfolioData.contact.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              {portfolioData.contact.email}
            </a>
          </div>

          <div className="mt-8">
            <h3 className="mb-3 text-sm font-semibold text-primary">Redes</h3>
            <div className="flex gap-2">
              {portfolioData.socialLinks.map((link) => (
                <a
                  key={link.kind}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="rounded-lg border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-all hover:border-primary hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </main>
    </div>
  );
}
