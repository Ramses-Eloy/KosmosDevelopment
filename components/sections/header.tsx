"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";
import { LogoHorizontal } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        open
          ? "border-b border-slate-200 bg-white dark:border-white/10 dark:bg-space-950"
          : scrolled
          ? "border-b border-slate-200/70 bg-white/80 backdrop-blur-lg dark:border-white/10 dark:bg-space-950/75"
          : "border-b border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        <a href="#inicio" aria-label="Kosmos Development, inicio" onClick={() => setOpen(false)}>
          <LogoHorizontal />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contacto"
            className="hidden rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700 lg:inline-flex"
          >
            Cotizar
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-700 dark:border-white/10 dark:text-slate-300 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Móvil"
          className="container flex h-[calc(100dvh-4rem)] flex-col gap-1 border-t border-slate-200 pt-4 dark:border-white/10 md:hidden"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-lg font-medium text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-brand-600 px-5 py-3 text-center font-semibold text-white"
          >
            Cotizar mi proyecto
          </a>
        </nav>
      )}
    </header>
  );
}
