import { site } from "@/content/site";
import { WhatsappIcon } from "@/components/ui/social-icons";

/** Botón flotante de WhatsApp, abajo a la derecha. No aparece si site.whatsapp está vacío. */
export function WhatsappButton({ label, message }: { label: string; message: string }) {
  if (!site.whatsapp) return null;
  const text = encodeURIComponent(message);
  return (
    <a
      href={`https://wa.me/${site.whatsapp}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition hover:scale-105 hover:bg-[#1ebe5b] md:bottom-8 md:right-8 md:h-16 md:w-16"
    >
      <WhatsappIcon className="h-8 w-8 md:h-9 md:w-9" />
    </a>
  );
}
