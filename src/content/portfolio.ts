export interface Hero {
  greeting: string;
  name: string;
  title: string;
  summary: string;
  cta: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
}

export interface About {
  heading: string;
  paragraphs: string[];
  photoPlaceholder: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Skills {
  heading: string;
  technical: { label: string; items: string[] };
  soft: { label: string; items: string[] };
}

export interface Language {
  language: string;
  level: string;
}

export type SocialKind =
  | "github"
  | "linkedin"
  | "instagram"
  | "whatsapp"
  | "email";

export interface SocialLink {
  kind: SocialKind;
  url: string;
  label: string;
}

export interface Contact {
  email: string;
  heading: string;
  description: string;
}

export interface PortfolioData {
  hero: Hero;
  about: About;
  experience: ExperienceItem[];
  projects: Project[];
  skills: Skills;
  languages: Language[];
  contact: Contact;
  socialLinks: SocialLink[];
}

export const portfolioData: PortfolioData = {
  hero: {
    greeting: "Hola, soy",
    name: "Renzo Portela",
    title: "Estudiante de Informática · Deportista · Desarrollador",
    summary:
      "Como estudiante y deportista activo, tengo una mentalidad crítica y una gran capacidad para trabajar en equipo. Estoy comprometido con mis responsabilidades diarias y abierto a nuevas experiencias que enriquezcan mi vida personal y profesional.",
    cta: {
      primary: { label: "Mis Proyectos", href: "#proyectos" },
      secondary: { label: "Contactame", href: "#contacto" },
    },
  },

  about: {
    heading: "Sobre Mí",
    paragraphs: [
      "Como estudiante y deportista activo, tengo una mentalidad crítica y una gran capacidad para trabajar en equipo. Mi independencia y habilidades interpersonales me permiten conectar con diferentes personas.",
      "Estoy comprometido con mis responsabilidades diarias y abierto a nuevas experiencias que enriquezcan mi vida personal y profesional. Actualmente curso el Secundario Técnico en Informática en el Instituto Politécnico Superior y compito en waterpolo en Gimnasia y Esgrima de Rosario.",
    ],
    photoPlaceholder: true,
  },

  experience: [
    {
      company: "Inventu",
      role: "Practicas Profesionalizantes",
      period: "Mar 2026 — Actualidad",
      highlights: [
        "Desarrollo de un sistema con chatbot integrado para optimizar la atención y asistencia a empresas.",
        "Participación en el ciclo completo del proyecto: análisis de requisitos, implementación y pruebas.",
        "Enfoque en soluciones completas y funcionales para resolver necesidades reales del negocio.",
      ],
    },
    {
      company: "Instituto Politécnico Superior",
      role: "Proyectos Académicos y Estudiantiles",
      period: "Mar 2024 — Actualidad",
      highlights: [
        "Integración de bases de datos, redes y seguridad informática.",
        "Programación en C, Python y Haskell.",
        "Enfoque en calidad y eficiencia en la entrega de proyectos informáticos.",
      ],
    },
    {
      company: "Gimnasia y Esgrima de Rosario",
      role: "Deportista - Waterpolo",
      period: "Verano 2019 — Actualidad",
      highlights: [
        "Desarrollo de ética de trabajo, priorizando el entrenamiento y el rendimiento físico sobre el ocio inmediato para alcanzar metas a largo plazo.",
        "Habilidad para equilibrar la alta exigencia deportiva con la excelencia académica.",
        "Fortalecimiento mental para afrontar la presión, superar derrotas y mantener la constancia, transformando la competencia en una herramienta de crecimiento personal.",
      ],
    },
  ],

  projects: [
    {
      title: "WaterpoloGER",
      description:
        "Sistema de estadísticas y análisis de partidos de waterpolo. Gestión de jugadores, partidos y estadísticas en tiempo real con carga de planillas PDF.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "Prisma",
        "Tailwind CSS",
        "shadcn/ui",
      ],
      image: "/projects/waterpolo-ger.png",
      githubUrl: "https://github.com/renzo23rc/waterpolo-ger",
      demoUrl: "https://waterpologer.me",
    },
    {
      title: "Catálogo Distribuidora",
      description:
        "Catálogo de productos para distribuidora mayorista con carrito de compras y pedidos vía WhatsApp. Panel de administración con gestión de stock, pedidos y clientes.",
      technologies: ["Django", "Python", "SQLite", "HTML/CSS", "JavaScript"],
      image: "/projects/catalogo-claudio.png",
      demoUrl: "https://catalogo-claudio.vercel.app",
    },
  ],

  skills: {
    heading: "Habilidades",
    technical: {
      label: "Técnicas",
      items: [
        "Next.js",
        "TypeScript",
        "Python",
        "Django",
        "Tailwind CSS",
        "Supabase",
        "Prisma",
        "PostgreSQL",
        "JavaScript",
        "HTML/CSS",
        "C",
        "Haskell",
        "Redes",
        "Bases de Datos",
        "Seguridad Informática",
        "Inteligencia Artificial",
        "Chatbots",
      ],
    },
    soft: {
      label: "Blandas",
      items: [
        "Liderazgo",
        "Disciplina",
        "Organización",
        "Creatividad",
        "Comunicación",
        "Trabajo en Equipo",
        "Pensamiento Crítico",
      ],
    },
  },

  languages: [{ language: "Inglés", level: "Intermedio" }],

  contact: {
    email: "portelarenzo@gmail.com",
    heading: "Contacto",
    description:
      "Estoy abierto a nuevas oportunidades y colaboraciones. No dudes en escribirme.",
  },

  socialLinks: [
    {
      kind: "github",
      url: "https://github.com/renzo23rc",
      label: "GitHub",
    },
    {
      kind: "linkedin",
      url: "https://www.linkedin.com/in/renzo-portela-7b6a7b306/",
      label: "LinkedIn",
    },
    {
      kind: "instagram",
      url: "https://instagram.com/renzo.portela",
      label: "Instagram",
    },
    {
      kind: "whatsapp",
      url: "https://wa.me/543412266158",
      label: "WhatsApp",
    },
  ],
};
