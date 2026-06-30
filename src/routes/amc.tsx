import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Btn, Section, SectionHeading } from "@/components/site/Primitives";
import { AMC_PLANS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/amc")({
  head: () => ({ meta: [
    { title: "AMC Services — Vigilant Technologies" },
    { name: "description", content: "Annual maintenance contracts with proactive monitoring, fast SLAs and dedicated technicians." },
    { property: "og:title", content: "AMC Services — Vigilant Technologies" },
  ]}),
  component: AmcPage,
});

function AmcPage() {
  return (
    <>
      <Section>
        <SectionHeading eyebrow="AMC Services" title={<>Lifetime care for <span className="text-muted-foreground">your security stack.</span></>} lead="Our AMC programs keep cameras, recorders and networks performing at 100% — with response SLAs you can audit." />
      </Section>
      <Section className="!pt-0">
        <div className="grid gap-6 lg:grid-cols-3">
          {AMC_PLANS.map((plan) => (
            <div key={plan.name} className={cn("surface-card p-8 flex flex-col", plan.popular && "ring-2 ring-foreground")}>
              {plan.popular && <span className="self-start rounded-full bg-foreground text-background px-2.5 py-1 text-[10px] uppercase tracking-widest font-medium mb-4">Most popular</span>}
              <h3 className="font-display text-xl font-semibold tracking-tight">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-semibold tracking-tight">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="mt-8 space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3"><Check className="h-4 w-4 mt-0.5 text-brand shrink-0" /><span>{f}</span></li>
                ))}
              </ul>
              <Btn variant={plan.popular ? "primary" : "outline"} to="/contact" className="mt-10 w-full">Get this plan</Btn>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
