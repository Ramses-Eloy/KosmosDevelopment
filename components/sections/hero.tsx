import { ArrowRight, Sparkles } from "lucide-react";
import { hero } from "@/content/site";
import { Isotipo } from "@/components/ui/logo";

// Estrellas con posiciones fijas (deterministas para evitar diferencias entre servidor y cliente)
const stars = Array.from({ length: 40 }, (_, i) => ({
  top: (i * 37) % 100,
  left: (i * 61 + 13) % 100,
  size: i % 5 === 0 ? 3 : i % 2 === 0 ? 2 : 1,
  delay: (i % 8) * 0.5,
}));

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      {/* Fondo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white dark:from-space-950 dark:via-space-950 dark:to-space-900" />
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-400/20 blur-3xl dark:bg-brand-600/25" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl dark:bg-accent-500/15" />
        <div className="absolute inset-0 hidden dark:block">
          {stars.map((s, i) => (
            <span
              key={i}
              className="absolute animate-twinkle rounded-full bg-white"
              style={{ top: `${s.top}%`, left: `${s.left}%`, width: s.size, height: s.size, animationDelay: `${s.delay}s` }}
            />
          ))}
        </div>
      </div>

      <div className="container grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="text-center lg:text-left">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-brand-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-brand-200">
            <Sparkles className="h-4 w-4" />
            {hero.badge}
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            {hero.title}{" "}
            <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent dark:from-brand-300 dark:to-accent-400">
              {hero.titleHighlight}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 lg:mx-0">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={hero.primaryCta.href}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-semibold text-white shadow-xl shadow-brand-600/25 transition hover:bg-brand-700 sm:w-auto"
            >
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 px-7 py-3.5 font-semibold text-slate-800 transition hover:border-brand-400 hover:text-brand-700 dark:border-white/15 dark:text-white dark:hover:border-accent-400 dark:hover:text-accent-400 sm:w-auto"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        {/* Isotipo con órbitas animadas */}
        <div aria-hidden className="relative mx-auto aspect-square w-full max-w-[22rem] md:max-w-md">
          <div className="absolute inset-0 animate-orbit rounded-full border border-dashed border-brand-300/60 dark:border-brand-400/30">
            <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-400 shadow-[0_0_16px_4px] shadow-accent-400/60" />
          </div>
          <div className="absolute inset-10 animate-orbit-slow rounded-full border border-brand-200/80 dark:border-white/10">
            <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-brand-500 dark:bg-brand-300" />
          </div>
          <div className="absolute inset-20 rounded-full bg-gradient-to-br from-white to-brand-50 shadow-2xl shadow-brand-500/20 dark:from-white/10 dark:to-white/[0.02] dark:shadow-brand-500/10" />
          <div className="absolute inset-0 grid place-items-center">
            <Isotipo className="w-3/5 animate-float drop-shadow-xl" />
          </div>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="container mt-20">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 dark:border-white/10 dark:bg-white/10 md:grid-cols-4">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse bg-white/90 px-6 py-7 text-center backdrop-blur dark:bg-space-900/90">
              <dt className="mt-1 text-sm text-slate-500 dark:text-slate-400">{stat.label}</dt>
              <dd className="font-display text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
