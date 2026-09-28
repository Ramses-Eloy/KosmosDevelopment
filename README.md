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

La web está en español en `/` y en inglés en `/en`; el botón ES/EN de la cabecera cambia entre ambas.

| Qué | Dónde |
| --- | --- |
| Correo, teléfono, WhatsApp, redes, moneda | `content/site.ts` |
| Todos los textos en español (servicios, precios, portafolio, nosotros…) | `content/es.ts` |
| Los mismos textos en inglés | `content/en.ts` |

`content/en.ts` debe tener la misma forma que `content/es.ts`: si cambias un precio o un proyecto en uno, cámbialo en el otro (TypeScript avisa si falta algún campo). Los valores marcados como `PLACEHOLDER` son de ejemplo.

**Portafolio con capturas:** guarda la imagen en `public/portfolio/` y añade `image: "/portfolio/mi-proyecto.png"` al proyecto. Sin imagen se muestra una portada con degradado e icono.

**Formulario de contacto:** no usa servicios externos. Al enviar abre el correo del visitante con el mensaje ya redactado hacia `site.email`. Para recibirlo directamente en el servidor, cambia `handleSubmit` en `components/sections/contact-form.tsx` para hacer `POST` a un endpoint propio.

## Logos

Los SVG oficiales (`logo-kosmost.svg` y `logo-escrito.svg`) se recortaron y conservan sus degradados azules. El azul marino usa `currentColor`, así que en tema oscuro pasa a blanco:

- `components/ui/logo.tsx`: `<Isotipo />` (hero) y `<Wordmark />` (cabecera, pie y Nosotros).
- `public/brand/`: versiones sueltas con texto azul marino y con texto blanco para usar fuera de la web.
- `app/icon.svg`: favicon que cambia de color según el tema del navegador.

## Estructura

```
app/                 layout (SEO, fuentes, tema), página, sitemap, robots, imagen OG
components/sections  header, hero, services, portfolio, about, contact, footer
components/ui        logo, iconos, animación Reveal, encabezados de sección
content/             site.ts (datos), es.ts y en.ts (textos)
```
