import { notFound } from "next/navigation";

// Envía cualquier ruta desconocida al 404 con el diseño del sitio (ver ../not-found.tsx).
export default function CatchAll() {
  notFound();
}
