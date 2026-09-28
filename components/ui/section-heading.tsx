import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-accent-400">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{description}</p>}
    </Reveal>
  );
}
