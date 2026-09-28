import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { Content } from "@/content/es";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "./contact-form";

export function Contact({ t }: { t: Content }) {
  const c = t.contact;
  const items = [
    { icon: Mail, label: c.email, value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: c.phone, value: site.phone, href: `tel:${site.phone.replace(/[^\d+]/g, "")}` },
    site.whatsapp && {
      icon: MessageCircle,
      label: "WhatsApp",
      value: c.whatsappValue,
      href: `https://wa.me/${site.whatsapp}`,
    },
    { icon: MapPin, label: c.location, value: c.locationValue },
    { icon: Clock, label: c.hours, value: c.hoursValue },
  ].filter(Boolean) as { icon: typeof Mail; label: string; value: string; href?: string }[];

  return (
    <section id="contacto" className="relative scroll-mt-20 overflow-hidden bg-slate-50 py-24 dark:bg-space-900 md:py-32">
      <div aria-hidden className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-brand-400/10 blur-3xl" />
      <div className="container relative">
        <SectionHeading
          eyebrow={c.eyebrow}
          title={c.title}
          description={c.description}
        />

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <ul className="space-y-4">
              {items.map(({ icon: ItemIcon, label, value, href }) => {
                const content = (
                  <>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white">
                      <ItemIcon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm text-slate-500 dark:text-slate-400">{label}</span>
                      <span className="block font-semibold text-slate-900 dark:text-white">{value}</span>
                    </span>
                  </>
                );
                const cls =
                  "flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition dark:border-white/10 dark:bg-white/[0.03]";
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className={`${cls} hover:border-brand-400 dark:hover:border-accent-400/60`}
                      >
                        {content}
                      </a>
                    ) : (
                      <div className={cls}>{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>
          <Reveal delay={150}>
            <ContactForm f={c.form} services={t.services.items.map((s) => s.title)} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
