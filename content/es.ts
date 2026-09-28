/**
 * Textos en español (idioma por defecto, se sirve en "/").
 * content/en.ts debe tener exactamente la misma forma: si cambias un precio o un proyecto aquí,
 * cámbialo también allí. Los valores marcados con PLACEHOLDER son de ejemplo.
 */
import type { IconName } from "./site";

export type Service = {
  icon: IconName;
  title: string;
  description: string;
  price: string; // número ("29") o texto ("A cotizar")
  from?: boolean; // muestra "Desde" antes del precio
  features: string[];
  featured?: boolean;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  url?: string; // enlace público (opcional)
  image?: string; // ruta en /public, p. ej. "/portfolio/crm.png" (opcional)
  gradient: string; // colores de la portada si no hay imagen
  icon: IconName;
};

export const es = {
  lang: "es",
  tagline: "Desarrollo de software y soluciones",
  description:
    "Creamos, alojamos y mantenemos tu software. Webs, SaaS y sistemas a medida con hosting, dominio, SSL, soporte y mantenimiento incluidos en una sola mensualidad.",
  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Portafolio", href: "#portafolio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ],
  ui: {
    home: "inicio",
    quote: "Cotizar",
    quoteLong: "Cotizar mi proyecto",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    toLight: "Cambiar a tema claro",
    toDark: "Cambiar a tema oscuro",
    switchLang: "View in English",
    skip: "Saltar al contenido",
    whatsapp: "Escríbenos por WhatsApp",
    whatsappText: "Hola, vengo de kosmosdev.com y me gustaría más información.",
  },
  hero: {
    badge: "Tu software, en órbita",
    title: "Lanzamos tu negocio",
    titleHighlight: "al espacio digital",
    subtitle:
      "Diseñamos, desarrollamos y alojamos tu web o SaaS. Tú te enfocas en tu negocio; nosotros nos encargamos del hosting, el dominio, la seguridad y el mantenimiento por una mensualidad fija.",
    primaryCta: "Ver planes",
    secondaryCta: "Hablemos de tu proyecto",
    // PLACEHOLDER: ajusta las cifras a tu realidad
    stats: [
      { value: "20+", label: "Proyectos entregados" },
      { value: "99.9%", label: "Disponibilidad" },
      { value: "24/7", label: "Monitoreo" },
      { value: "100%", label: "Sitios con SSL" },
    ],
  },
  services: {
    eyebrow: "Servicios",
    title: "Planes mensuales, todo incluido",
    description: "Elige lo que necesitas. Nosotros lo construimos, lo alojamos y lo mantenemos funcionando.",
    popular: "Más popular",
    from: "Desde",
    perMonth: "/mes",
    cta: "Contratar",
    note: "Todos los planes incluyen hosting, dominio, certificado SSL, soporte y mantenimiento. Sin costos ocultos.",
    // PLACEHOLDER: servicios y precios de ejemplo
    items: [
      {
        icon: "Globe",
        title: "Web profesional",
        description: "Landing page o sitio corporativo rápido, moderno y optimizado para Google.",
        price: "29",
        features: ["Diseño a medida y responsive", "Dominio .com y SSL", "Hasta 5 secciones", "Formulario de contacto"],
      },
      {
        icon: "LayoutDashboard",
        title: "SaaS a medida",
        description: "Tu aplicación web en tu propio subdominio (app.kosmosdev.com) lista para tus clientes.",
        price: "149",
        from: true,
        features: ["Usuarios y roles", "Panel de administración", "Base de datos y respaldos", "Actualizaciones continuas"],
        featured: true,
      },
      {
        icon: "Users",
        title: "CRM y gestión",
        description: "Sistema para clientes, ventas, inventario o citas adaptado a tu forma de trabajar.",
        price: "99",
        from: true,
        features: ["Clientes y seguimiento", "Reportes y métricas", "Acceso desde cualquier dispositivo", "Exportación de datos"],
      },
      {
        icon: "ShoppingCart",
        title: "Tienda en línea",
        description: "E-commerce con catálogo, carrito y pagos en línea para vender las 24 horas.",
        price: "79",
        from: true,
        features: ["Catálogo de productos", "Pasarela de pago", "Gestión de pedidos", "Cupones y promociones"],
      },
      {
        icon: "Server",
        title: "Hosting administrado",
        description: "Migramos y alojamos tu sitio actual en nuestra infraestructura con todo gestionado.",
        price: "15",
        features: ["Dominio y correo", "SSL automático", "Respaldos diarios", "Monitoreo de disponibilidad"],
      },
      {
        icon: "Wrench",
        title: "Soporte y mantenimiento",
        description: "Cambios, mejoras y soporte técnico para que tu sistema siempre funcione.",
        price: "A cotizar",
        features: ["Horas de desarrollo mensuales", "Corrección de errores", "Actualizaciones de seguridad", "Atención prioritaria"],
      },
    ] as Service[],
  },
  portfolio: {
    eyebrow: "Portafolio",
    title: "Proyectos que ya están en órbita",
    description: "Algunos de los sistemas y sitios que hemos construido y seguimos alojando para nuestros clientes.",
    screenshotOf: "Captura de",
    // PLACEHOLDER: proyectos de ejemplo. Agrega "image" con una captura en /public/portfolio/ cuando la tengas.
    items: [
      {
        title: "CRM Comercial",
        category: "SaaS",
        description: "Gestión de clientes, oportunidades y seguimiento de ventas para un equipo comercial.",
        tags: ["Next.js", "PostgreSQL", "Tailwind"],
        url: "https://crm.kosmosdev.com",
        gradient: "from-indigo-500 to-cyan-400",
        icon: "Users",
      },
      {
        title: "Agenda de Citas",
        category: "SaaS",
        description: "Reservas en línea con recordatorios automáticos para clínicas y consultorios.",
        tags: ["React", "Node.js", "API REST"],
        gradient: "from-violet-500 to-fuchsia-400",
        icon: "LayoutDashboard",
      },
      {
        title: "Tienda Artesanal",
        category: "E-commerce",
        description: "Tienda en línea con catálogo, carrito y pagos para una marca local.",
        tags: ["Next.js", "Stripe", "CMS"],
        gradient: "from-amber-400 to-rose-500",
        icon: "ShoppingCart",
      },
      {
        title: "Portal Inmobiliario",
        category: "Web",
        description: "Catálogo de propiedades con filtros, mapa y formulario de contacto por inmueble.",
        tags: ["Next.js", "Mapas", "SEO"],
        gradient: "from-emerald-400 to-teal-600",
        icon: "Globe",
      },
      {
        title: "Control de Inventario",
        category: "Sistema",
        description: "Entradas, salidas y alertas de stock en tiempo real para varias sucursales.",
        tags: ["TypeScript", "PostgreSQL", "Dashboard"],
        gradient: "from-sky-500 to-indigo-600",
        icon: "Database",
      },
      {
        title: "Landing Corporativa",
        category: "Web",
        description: "Sitio institucional rápido y optimizado para captar clientes potenciales.",
        tags: ["Next.js", "Tailwind", "Analytics"],
        gradient: "from-slate-600 to-slate-900",
        icon: "Rocket",
      },
    ] as Project[],
  },
  about: {
    eyebrow: "Nosotros",
    title: "Tu equipo de tecnología, sin complicaciones",
    paragraphs: [
      "En Kosmos Development construimos software a la medida y nos quedamos contigo después del lanzamiento. Alojamos cada proyecto en nuestra propia infraestructura, así que el dominio, el hosting, la seguridad y las actualizaciones corren por nuestra cuenta.",
      "Tú pagas una mensualidad clara y predecible. Nosotros mantenemos tu sistema rápido, seguro y siempre en línea mientras tu negocio crece.",
    ],
    values: [
      { icon: "Zap" as IconName, title: "Rapidez", description: "Entregas ágiles y sitios que cargan en segundos." },
      { icon: "ShieldCheck" as IconName, title: "Seguridad", description: "SSL, respaldos y actualizaciones en todos los proyectos." },
      { icon: "HeartHandshake" as IconName, title: "Cercanía", description: "Trato directo, sin intermediarios ni tickets eternos." },
      { icon: "Cloud" as IconName, title: "Todo incluido", description: "Hosting, dominio y soporte en una sola mensualidad." },
    ],
    techTitle: "Tecnologías que usamos",
  },
  contact: {
    eyebrow: "Contacto",
    title: "¿Listo para despegar?",
    description: "Cuéntanos tu idea y te enviamos una propuesta sin compromiso.",
    email: "Correo",
    phone: "Teléfono",
    whatsappValue: "Escríbenos por WhatsApp",
    location: "Ubicación",
    locationValue: "Atención remota para toda Latinoamérica",
    hours: "Horario",
    hoursValue: "Lunes a viernes, 9:00 a 18:00",
    form: {
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Correo",
      emailPlaceholder: "tu@correo.com",
      phone: "Teléfono",
      optional: "(opcional)",
      service: "Servicio de interés",
      serviceNone: "Aún no lo sé",
      message: "Mensaje",
      messagePlaceholder: "Cuéntanos sobre tu negocio y qué te gustaría construir",
      responseTime: "Respondemos en menos de 24 horas hábiles.",
      submit: "Enviar mensaje",
      subject: "Nuevo contacto desde",
      serviceLine: "Servicio de interés",
      sentTitle: "¡Listo! Abrimos tu correo",
      sentText: "Solo falta presionar enviar en tu aplicación de correo. Si no se abrió, escríbenos directamente a",
      back: "Volver al formulario",
    },
  },
  footer: {
    navigation: "Navegación",
    services: "Servicios",
    contact: "Contacto",
    rights: "Todos los derechos reservados.",
    madeWith: "Hecho con cariño y alojado en",
  },
};

export type Content = typeof es;
