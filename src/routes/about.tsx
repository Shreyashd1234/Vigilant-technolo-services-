import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Primitives";
import { METRICS, PROCESS } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About — Vigilant Technologies" },
    { name: "description", content: "Vigilant Technologies is India's premium smart-security partner — engineered in Pune, deployed nationwide." },
    { property: "og:title", content: "About — Vigilant Technologies" },
  ]}),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Section>
        <SectionHeading eyebrow="About" title={<>Engineered in Pune. <br /><span className="text-muted-foreground">Trusted across India.</span></>} lead="For over a decade, Vigilant has built premium security infrastructure for homes, businesses and the country's most demanding facilities — quietly, reliably, beautifully." />
      </Section>

      <section className="container-x grid lg:grid-cols-2 gap-16 pb-32">
        <div className="surface-card mesh-bg aspect-square grid place-items-center">
          <span className="font-display text-7xl font-semibold text-foreground/15">2013</span>
        </div>
        <div className="space-y-6 text-[17px] leading-relaxed text-muted-foreground">
          <p>We started in 2013 with a single conviction — that security in India was being sold like a commodity, when it should be designed like infrastructure.</p>
          <p>Today, we secure 4,200+ sites with a 60-strong team of certified engineers, a 24×7 NOC, and AMC contracts measured in hours, not days.</p>
          <p className="text-foreground font-medium">Premium hardware. Engineering-led design. Lifetime support.</p>
        </div>
      </section>

      <section className="border-y border-border/60 bg-surface">
        <div className="container-x grid grid-cols-2 md:grid-cols-5 divide-x divide-border/60">
          {METRICS.map((m) => (
            <div key={m.label} className="px-4 py-12 text-center">
              <div className="font-display text-3xl sm:text-4xl font-semibold">{m.value}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Section>
        <SectionHeading eyebrow="How we work" title="A process built on trust." />
        <ol className="mt-16 space-y-px bg-border rounded-3xl overflow-hidden border border-border">
          {PROCESS.map((p) => (
            <li key={p.step} className="bg-surface-elevated p-8 md:p-10 flex flex-col md:flex-row md:items-baseline gap-3 md:gap-12">
              <div className="font-display text-sm text-muted-foreground tracking-widest md:w-16">{p.step}</div>
              <div className="md:w-64 font-semibold text-lg">{p.title}</div>
              <div className="text-muted-foreground flex-1">{p.desc}</div>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
