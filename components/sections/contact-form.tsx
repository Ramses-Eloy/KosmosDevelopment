"use client";

import { CheckCircle2, Send } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import type { Content } from "@/content/es";
import { site } from "@/content/site";

const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-accent-400 dark:focus:ring-accent-400/15";

/**
 * Formulario de contacto sin servicios externos: al enviar, abre el correo del visitante
 * con el mensaje ya redactado hacia site.email. Si más adelante quieres recibirlo
 * sin que el visitante use su correo, cambia handleSubmit para hacer POST a tu propio endpoint.
 */
export function ContactForm({ f, services }: { f: Content["contact"]["form"]; services: string[] }) {
  const [servicio, setServicio] = useState("");
  const [sent, setSent] = useState(false);

  // Los botones "Contratar" de la sección de servicios preseleccionan el servicio aquí.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest<HTMLElement>("[data-servicio]");
      if (link?.dataset.servicio) setServicio(link.dataset.servicio);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nombre = String(data.get("nombre") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const telefono = String(data.get("telefono") ?? "").trim();
    const mensaje = String(data.get("mensaje") ?? "").trim();

    const subject = `${f.subject} ${site.domain}${servicio ? `: ${servicio}` : ""}`;
    const lines = [`${f.name}: ${nombre}`, `${f.email}: ${email}`];
    if (telefono) lines.push(`${f.phone}: ${telefono}`);
    if (servicio) lines.push(`${f.serviceLine}: ${servicio}`);
    const body = [...lines, "", mensaje].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-10 text-center dark:border-white/10 dark:bg-white/[0.03]">
        <CheckCircle2 className="h-12 w-12 text-emerald-500" />
        <h3 className="mt-4 font-display text-xl font-semibold text-slate-900 dark:text-white">{f.sentTitle}</h3>
        <p className="mt-2 max-w-sm text-slate-600 dark:text-slate-400">
          {f.sentText}{" "}
          <a href={`mailto:${site.email}`} className="font-medium text-brand-600 underline dark:text-accent-400">
            {site.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-medium text-slate-500 underline hover:text-slate-800 dark:hover:text-white"
        >
          {f.back}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none sm:grid-cols-2 md:p-8"
    >
      <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
        {f.name}
        <input name="nombre" required autoComplete="name" placeholder={f.namePlaceholder} className={inputClass} />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
        {f.email}
        <input name="email" type="email" required autoComplete="email" placeholder={f.emailPlaceholder} className={inputClass} />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
        <span>
          {f.phone} <span className="text-xs font-normal text-slate-400">{f.optional}</span>
        </span>
        <input name="telefono" type="tel" autoComplete="tel" placeholder="+00 000 000 0000" className={inputClass} />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
        {f.service}
        <select name="servicio" value={servicio} onChange={(e) => setServicio(e.target.value)} className={inputClass}>
          <option value="">{f.serviceNone}</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 sm:col-span-2">
        {f.message}
        <textarea
          name="mensaje"
          required
          rows={5}
          placeholder={f.messagePlaceholder}
          className={`${inputClass} resize-y`}
        />
      </label>
      <div className="flex flex-col items-start gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500 dark:text-slate-400">{f.responseTime}</p>
        <button
          type="submit"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700 sm:w-auto"
        >
          {f.submit}
          <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </button>
      </div>
    </form>
  );
}
