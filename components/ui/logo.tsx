import { isotipo, logoCompleto, wordmark } from "./logo-paths";

type SvgProps = { className?: string; title?: string };

function BrandSvg({ data, className, title }: SvgProps & { data: { viewBox: string; paths: string[] } }) {
  return (
    <svg
      viewBox={data.viewBox}
      fill="currentColor"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {data.paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

/** Isotipo: la "K" con la órbita. */
export function Isotipo(props: SvgProps) {
  return <BrandSvg data={isotipo} {...props} />;
}

/** Tipografía "KOSMOS". */
export function Wordmark(props: SvgProps) {
  return <BrandSvg data={wordmark} {...props} />;
}

/** Logo vertical completo con lema (isotipo + KOSMOS + "Desarrollo de software y soluciones"). */
export function LogoCompleto(props: SvgProps) {
  return <BrandSvg data={logoCompleto} {...props} />;
}

/** Logo horizontal: isotipo y tipografía separados por una línea fina. */
export function LogoHorizontal({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Isotipo className="h-8 w-auto text-brand-700 dark:text-brand-300" />
      <span aria-hidden className="h-6 w-px bg-slate-300 dark:bg-white/20" />
      <Wordmark className="h-[15px] w-auto text-slate-900 dark:text-white" title="Kosmos Development" />
    </span>
  );
}
