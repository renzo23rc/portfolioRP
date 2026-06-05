import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const displayFont = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Renzo Portela | Portfolio",
  description:
    "Portfolio personal de Renzo Portela — Estudiante de Informática, Desarrollador y Deportista.",
  openGraph: {
    title: "Renzo Portela | Portfolio",
    description:
      "Portfolio personal de Renzo Portela — Estudiante de Informática, Desarrollador y Deportista.",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Renzo Portela | Portfolio",
    description:
      "Portfolio personal de Renzo Portela — Estudiante de Informática, Desarrollador y Deportista.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${displayFont.variable} antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
