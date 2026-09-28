import { about, site } from "@/content/site";
import { Icon } from "@/components/ui/icon";
import { Isotipo, Wordmark } from "@/components/ui/logo";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="nosotros" className="scroll-mt-20 py-24 md:py-32">
      <div className="container grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-accent-400">
            Nosotros
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            {about.title}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            {about.values.map((v) => (
              <div key={v.title} className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
                  <Icon name={v.icon} className="h-5 w-5" />
                </div>
                <div>
                  <dt className="font-semibold text-slate-900 dark:text-white">{v.title}</dt>
                  <dd className="mt-1 text-sm text-slate-600 dark:text-slate-400">{v.description}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-brand-50 via-white to-cyan-50 p-10 dark:border-white/10 dark:from-brand-950 dark:via-space-900 dark:to-space-950 md:p-14">
            <div aria-hidden className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-400/20 blur-3xl" />
            <div className="relative flex flex-col items-center gap-5">
              <Isotipo className="w-40" />
              <Wordmark className="w-full max-w-[16rem]" title={site.name} />
              <p className="text-center text-xs font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                {site.tagline}
              </p>
            </div>
            <div className="relative mt-12">
              <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Tecnologías que usamos
              </p>
              <ul className="flex flex-wrap justify-center gap-2">
                {about.techStack.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
