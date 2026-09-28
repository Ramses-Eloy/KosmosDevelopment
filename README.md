# Kosmos Development · kosmosdev.com

Sitio web de Kosmos Development: landing, servicios con precios, portafolio, nosotros y contacto.

Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · next-themes · Lucide.

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de producción
npm start       # sirve el build
```

## Editar el contenido

Todo el texto vive en **`content/site.ts`**; no hace falta tocar los componentes:

| Qué | Dónde en `content/site.ts` |
| --- | --- |
| Correo, teléfono, WhatsApp, redes sociales | `site` |
| Título, subtítulo y estadísticas del inicio | `hero` |
| Moneda y nota de precios | `pricing` |
| Servicios y precios | `services` |
| Proyectos del portafolio | `projects` |
| Texto de "Nosotros", valores y tecnologías | `about` |

Los valores marcados como `PLACEHOLDER` son de ejemplo.

**Portafolio con capturas:** guarda la imagen en `public/portfolio/` y añade `image: "/portfolio/mi-proyecto.png"` al proyecto. Sin imagen se muestra una portada con degradado e icono.

**Formulario de contacto:** no usa servicios externos. Al enviar abre el correo del visitante con el mensaje ya redactado hacia `site.email`. Para recibirlo directamente en el servidor, cambia `handleSubmit` en `components/sections/contact-form.tsx` para hacer `POST` a un endpoint propio.

## Logos

Los SVG oficiales (`logo-kosmost.svg` y `logo-escrito.svg`) se recortaron y conservan sus degradados azules. El azul marino usa `currentColor`, así que en tema oscuro pasa a blanco:

- `components/ui/logo.tsx`: `<Isotipo />`, `<Wordmark />` y `<LogoHorizontal />` (cabecera).
- `public/brand/`: versiones sueltas con texto azul marino y con texto blanco para usar fuera de la web.
- `app/icon.svg`: favicon que cambia de color según el tema del navegador.

## Estructura

```
app/                 layout (SEO, fuentes, tema), página, sitemap, robots, imagen OG
components/sections  header, hero, services, portfolio, about, contact, footer
components/ui        logo, iconos, animación Reveal, encabezados de sección
content/site.ts      todo el contenido editable
```
