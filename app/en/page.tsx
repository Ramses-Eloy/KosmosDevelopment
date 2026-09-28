import type { Metadata } from "next";
import { en } from "@/content/en";
import { site } from "@/content/site";
import { Home } from "@/components/home";

export const metadata: Metadata = {
  title: { absolute: `${site.name} | ${en.tagline}` },
  description: en.description,
  alternates: { canonical: "/en", languages: { es: "/", en: "/en" } },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: `${site.url}/en`,
    title: `${site.name} | ${en.tagline}`,
    description: en.description,
  },
};

export default function Page() {
  return <Home t={en} />;
}
