import { isotipo, wordmark } from "./logo-paths";

type SvgProps = { className?: string; title?: string };

// El azul marino del logo es currentColor: text-[#051527] en claro y blanco en oscuro.
const ink = "text-[#051527] dark:text-white";

function BrandSvg({ data, className = "", title }: SvgProps & { data: { viewBox: string; svg: string } }) {
  return (
    <svg
      viewBox={data.viewBox}
      className={`${ink} ${className}`}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      dangerouslySetInnerHTML={{ __html: data.svg }}
    />
  );
}

/** Isotipo: la "K" con la órbita. */
export function Isotipo(props: SvgProps) {
  return <BrandSvg data={isotipo} {...props} />;
}

/** Tipografía "KOSMOS" con la O en órbita. */
export function Wordmark(props: SvgProps) {
  return <BrandSvg data={wordmark} {...props} />;
}
