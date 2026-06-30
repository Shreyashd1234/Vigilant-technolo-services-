import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Primitives";
import { PROJECTS } from "@/lib/site-data";

export const Route = createFileRoute("/projects")({
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <article key={p.name} className="surface-card surface-card-hover overflow-hidden">
              <div className="aspect-[4/3] mesh-bg relative grid place-items-center">
                <span className="font-display text-6xl font-semibold text-foreground/15">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="p-6">
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{p.type}</div>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.scope}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
