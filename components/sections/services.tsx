import { Check } from "lucide-react";
import { pricing, services } from "@/content/site";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Servicios"
          title="Planes mensuales, todo incluido"
          description="Elige lo que necesitas. Nosotros lo construimos, lo alojamos y lo mantenemos funcionando."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const isNumber = /\d/.test(service.price);
            return (
              <Reveal key={service.title} delay={(i % 3) * 100}>
                <article
                  className={`relative flex h-full flex-col rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 ${
                    service.featured
                      ? "border-brand-500 bg-gradient-to-b from-brand-600 to-brand-800 text-white shadow-2xl shadow-brand-600/30 dark:border-brand-400"
                      : "border-slate-200 bg-white hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-brand-400/50"
                  }`}
                >
                  {service.featured && (
                    <span className="absolute -top-3 right-6 rounded-full bg-accent-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-space-950">
                      Más popular
                    </span>
                  )}
                  <div
                    className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl ${
                      service.featured ? "bg-white/15 text-white" : "bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300"
                    }`}
                  >
                    <Icon name={service.icon} className="h-6 w-6" />
                  </div>
                  <h3 className={`font-display text-xl font-semibold ${service.featured ? "" : "text-slate-900 dark:text-white"}`}>
                    {service.title}
                  </h3>
                  <p className={`mt-2 text-sm leading-relaxed ${service.featured ? "text-brand-100" : "text-slate-600 dark:text-slate-400"}`}>
                    {service.description}
                  </p>

                  <p className="mt-6 flex items-baseline gap-1">
                    {/^Desde/.test(service.price) && (
                      <span className={`mr-1 text-sm ${service.featured ? "text-brand-100" : "text-slate-500 dark:text-slate-400"}`}>Desde</span>
                    )}
                    <span className={`font-display text-3xl font-bold ${service.featured ? "" : "text-slate-900 dark:text-white"}`}>
                      {isNumber ? `$${service.price.replace(/^Desde\s+/, "")}` : service.price}
                    </span>
                    {isNumber && (
                      <span className={`text-sm ${service.featured ? "text-brand-100" : "text-slate-500 dark:text-slate-400"}`}>
                        {pricing.currency}
                        {service.period}
                      </span>
                    )}
                  </p>

                  <ul className="mb-8 mt-6 space-y-3 text-sm">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${service.featured ? "text-accent-400" : "text-brand-600 dark:text-accent-400"}`} />
                        <span className={service.featured ? "text-white/90" : "text-slate-700 dark:text-slate-300"}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contacto"
                    data-servicio={service.title}
                    className={`mt-auto inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                      service.featured
                        ? "bg-white text-brand-700 hover:bg-brand-50"
                        : "border border-slate-300 text-slate-800 hover:border-brand-500 hover:bg-brand-600 hover:text-white dark:border-white/15 dark:text-white dark:hover:border-brand-500"
                    }`}
                  >
                    Contratar
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate-500 dark:text-slate-400">{pricing.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
