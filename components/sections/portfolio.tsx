import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { projects } from "@/content/site";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function Portfolio() {
  return (
    <section id="portafolio" className="scroll-mt-20 bg-slate-50 py-24 dark:bg-space-900 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Portafolio"
          title="Proyectos que ya están en órbita"
          description="Algunos de los sistemas y sitios que hemos construido y seguimos alojando para nuestros clientes."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const Wrapper = project.url ? "a" : "div";
            return (
              <Reveal key={project.title} delay={(i % 3) * 100}>
                <Wrapper
                  {...(project.url ? { href: project.url, target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-500/10 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`Captura de ${project.title}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <>
                        <div
                          aria-hidden
                          className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]"
                        />
                        <div className="absolute inset-0 grid place-items-center">
                          <div className="grid h-20 w-20 place-items-center rounded-3xl bg-white/15 text-white ring-1 ring-white/30 backdrop-blur transition duration-500 group-hover:scale-110">
                            <Icon name={project.icon} className="h-9 w-9" />
                          </div>
                        </div>
                      </>
                    )}
                    <span className="absolute left-4 top-4 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="flex items-center justify-between gap-2 font-display text-lg font-semibold text-slate-900 dark:text-white">
                      {project.title}
                      {project.url && (
                        <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600 dark:group-hover:text-accent-400" />
                      )}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.description}</p>
                    <ul className="mt-auto flex flex-wrap gap-2 pt-5">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-white/5 dark:text-slate-300"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
