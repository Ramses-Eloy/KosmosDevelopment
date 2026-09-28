/**
 * Datos del sitio que no dependen del idioma: contacto, redes y dominio.
 * Los textos están en content/es.ts (español) y content/en.ts (inglés).
 */

export type IconName =
  | "Globe"
  | "LayoutDashboard"
  | "Users"
  | "ShoppingCart"
  | "Server"
  | "Wrench"
  | "Rocket"
  | "ShieldCheck"
  | "HeartHandshake"
  | "Zap"
  | "Database"
  | "Cloud";

export const site = {
  name: "Kosmos Development",
  domain: "kosmosdev.com",
  url: "https://kosmosdev.com",
  email: "contacto@kosmosdev.com", // PLACEHOLDER
  phone: "+507 6959-6275",
  whatsapp: "50769596275", // solo dígitos, con código de país. Vacío = no se muestra el botón.
  currency: "USD", // PLACEHOLDER: moneda de los precios
  social: {
    // Deja vacío ("") lo que no uses y no aparecerá
    github: "https://github.com/Ramses-Eloy",
    linkedin: "",
    instagram: "https://www.instagram.com/kosmos_development/",
    facebook: "",
  },
  techStack: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "MySQL", "Docker", "Linux", "Nginx", "Git", "Stripe"],
};
