import { createFileRoute, Link } from "@tanstack/react-router";
import { Btn, Section, SectionHeading } from "@/components/site/Primitives";
import { SOLUTIONS, INDUSTRIES } from "@/lib/site-data";

export const Route = createFileRoute("/solutions/")({
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map((s) => (
            <Link key={s.slug} to="/solutions/$slug" params={{ slug: s.slug }} className="group relative overflow-hidden rounded-3xl p-7 border border-border/50 bg-background hover:border-border transition-colors block aspect-[4/5] sm:aspect-auto sm:h-[400px]">
              <img src={s.image} alt={s.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity group-hover:opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-7 flex flex-col justify-end h-full">
                <s.icon className="h-6 w-6 text-white mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-white tracking-tight">{s.name}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeading eyebrow="Industries" title="Built for every environment." />
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-background/20 border border-background/20 rounded-3xl overflow-hidden">
          {INDUSTRIES.map((i) => (
            <div key={i.name} className="group relative aspect-square sm:aspect-[3/4] overflow-hidden bg-foreground">
              <img src={i.image} alt={i.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-40 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                <i.icon className="h-6 w-6 text-white mb-4" strokeWidth={1.5} />
                <div className="text-lg font-medium text-white">{i.name}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center"><Btn to="/contact">Discuss Your Project</Btn></div>
      </Section>
    </>
  );
}
