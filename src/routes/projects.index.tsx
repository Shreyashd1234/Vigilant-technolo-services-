import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Primitives";
import { PROJECTS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects/")({
  head: () => ({ meta: [
    { title: "Projects — Vigilant Technologies" },
    { name: "description", content: "Selected installations across hospitality, healthcare, education, retail and industry." },
    { property: "og:title", content: "Projects — Vigilant Technologies" },
  ]}),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <Section>
        <SectionHeading eyebrow="Projects" title={<>Quietly protecting <span className="text-muted-foreground">India's landmark sites.</span></>} lead="A small selection of recent deployments. Confidentiality requires we share only what our clients have approved." />
      </Section>
      <Section className="!pt-0">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Link key={p.slug} to="/projects/$slug" params={{ slug: p.slug }} className={cn("group flex flex-col gap-6 animate-fade-up", `delay-${(i % 3) * 100}`, i % 3 === 1 && "lg:mt-16", i % 3 === 2 && "lg:mt-32")}>
              <div className="aspect-[4/5] relative overflow-hidden rounded-3xl bg-surface">
                <img src={p.image} alt={p.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm font-semibold text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <div className="h-px w-6 bg-border" />
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{p.type}</div>
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight group-hover:text-brand transition-colors">{p.name}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{p.scope}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
