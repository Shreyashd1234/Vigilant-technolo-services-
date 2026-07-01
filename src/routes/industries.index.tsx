import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Primitives";
import { INDUSTRIES } from "@/lib/site-data";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/industries/")({
  head: () => seo({
    title: "Industries We Protect — Vigilant Technologies",
    description: "Specialized security architectures for residential, commercial, industrial and institutional environments.",
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <Section>
        <SectionHeading eyebrow="Industries" title={<>Built for every <span className="text-muted-foreground">environment.</span></>} lead="Every industry faces unique security challenges. We design bespoke systems tailored to your specific operational needs." />
      </Section>
      <section className="container-x pb-32">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border/60 border border-border/60 rounded-3xl overflow-hidden">
          {INDUSTRIES.map((i) => (
            <Link key={i.slug} to="/industries/$slug" params={{ slug: i.slug }} className="group relative aspect-[3/4] overflow-hidden bg-foreground">
              <img src={i.image} alt={i.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-40 transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <i.icon className="h-6 w-6 text-white mb-6" strokeWidth={1.5} />
                <div className="text-xl font-semibold text-white">{i.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
