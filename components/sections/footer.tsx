import { nav, services, site } from "@/content/site";
import { Isotipo, Wordmark } from "@/components/ui/logo";
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/social-icons";

const socials = [
  { key: "github", label: "GitHub", Icon: GithubIcon },
  { key: "linkedin", label: "LinkedIn", Icon: LinkedinIcon },
  { key: "instagram", label: "Instagram", Icon: InstagramIcon },
  { key: "facebook", label: "Facebook", Icon: FacebookIcon },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  const activeSocials = socials.filter((s) => site.social[s.key]);

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-space-950">
      <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <a href="#inicio" className="inline-flex flex-col items-start gap-3" aria-label="Kosmos Development, inicio">
            <Isotipo className="h-12 w-auto text-brand-700 dark:text-brand-300" />
            <Wordmark className="h-5 w-auto text-slate-900 dark:text-white" />
          </a>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">{site.tagline}</p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-600 dark:text-slate-400">{site.description}</p>
          {activeSocials.length > 0 && (
            <ul className="mt-6 flex gap-3">
              {activeSocials.map(({ key, label, Icon }) => (
                <li key={key}>
                  <a
                    href={site.social[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:border-brand-500 hover:text-brand-600 dark:border-white/10 dark:text-slate-400 dark:hover:border-accent-400 dark:hover:text-accent-400"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <FooterColumn title="Navegación" links={nav} />
        <FooterColumn title="Servicios" links={services.map((s) => ({ label: s.title, href: "#servicios" }))} />
        <FooterColumn
          title="Contacto"
          links={[
            { label: site.email, href: `mailto:${site.email}` },
            { label: site.phone, href: `tel:${site.phone.replace(/[^\d+]/g, "")}` },
            { label: site.domain, href: site.url },
          ]}
        />
      </div>

      <div className="border-t border-slate-200 dark:border-white/10">
        <div className="container flex flex-col items-center justify-between gap-2 py-6 text-sm text-slate-500 dark:text-slate-400 sm:flex-row">
          <p>
            © {year} {site.name}. Todos los derechos reservados.
          </p>
          <p>Hecho con cariño y alojado en {site.domain}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-slate-600 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-accent-400"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
