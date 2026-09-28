import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { es } from "@/content/es";
import { site } from "@/content/site";
import { ThemeProvider } from "@/components/theme-provider";
import "@/app/globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const baseMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${es.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: es.description,
  applicationName: site.name,
  keywords: [
    "desarrollo de software",
    "desarrollo web",
    "SaaS",
    "CRM a medida",
    "hosting administrado",
    "páginas web",
    "tienda en línea",
    "mantenimiento web",
    "Kosmos Development",
  ],
  authors: [{ name: site.name, url: site.url }],
  alternates: { canonical: "/", languages: { es: "/", en: "/en" } },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${es.tagline}`,
    description: es.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${es.tagline}`,
    description: es.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020b18" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  email: site.email,
  description: es.description,
  logo: `${site.url}/brand/kosmos-isotipo.svg`,
  areaServed: "Latinoamérica",
};

/** <html> y <body> compartidos; cada idioma tiene su propio layout raíz para declarar su lang. */
export function RootShell({ lang, children }: { lang: "es" | "en"; children: ReactNode }) {
  return (
    <html lang={lang} suppressHydrationWarning className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
