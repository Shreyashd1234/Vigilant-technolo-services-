import { createFileRoute } from "@tanstack/react-router";
import { Btn, Section, SectionHeading } from "@/components/site/Primitives";
import { SOLUTIONS, INDUSTRIES } from "@/lib/site-data";

export const Route = createFileRoute("/solutions")({
  head: () => ({ meta: [
    { title: "Solutions — Vigilant Technologies" },
    { name: "description", content: "End-to-end security solutions: CCTV, IP cameras, biometric, access control, networking, AMC and smart security." },
    { property: "og:title", content: "Solutions — Vigilant Technologies" },
  ]}),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <Section>
        <SectionHeading eyebrow="Solutions" title={<>Every layer of protection. <span className="text-muted-foreground">One trusted partner.</span></>} lead="From a single 4K dome at the entrance to a 500-camera campus deployment — Vigilant designs, installs and maintains it." />
      </Section>
      <Section className="!pt-0">
        <div className="grid gap-px bg-border border border-border rounded-3xl overflow-hidden md:grid-cols-2">
          {SOLUTIONS.map((s) => (
            <div key={s.slug} className="bg-surface-elevated p-10 hover:bg-accent/30 transition-colors group">
              <div className="flex items-start gap-6">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-foreground text-background">
                  <s.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-semibold tracking-tight">{s.name}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeading eyebrow="Industries" title="Built for every environment." />
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {INDUSTRIES.map((i) => (
            <div key={i.name} className="surface-card surface-card-hover p-6">
              <i.icon className="h-5 w-5" strokeWidth={1.5} />
              <div className="mt-8 text-sm font-medium">{i.name}</div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center"><Btn to="/contact">Discuss Your Project</Btn></div>
      </Section>
    </>
  );
}
