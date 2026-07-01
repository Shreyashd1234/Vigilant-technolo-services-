import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Primitives";
import { cn } from "@/lib/utils";
import { METRICS, PROCESS } from "@/lib/site-data";
import { Target, Lightbulb, HeartHandshake, ShieldCheck, Award } from "lucide-react";
import { ContextualWhatsApp, CallButton } from "@/components/site/CTAs";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => seo({
    title: "About Us — Vigilant Techno Services",
    description: "Discover our journey from 2013 to becoming Pune's premier smart-security partner. Learn about our mission, vision, and the team behind our success.",
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative min-h-[80svh] flex items-center justify-center bg-foreground overflow-hidden">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" alt="Vigilant Office" className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-luminosity scale-105 animate-hero-zoom" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="container-x relative z-10 text-center max-w-4xl pt-32 animate-fade-up">
           <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-4 py-1.5 text-[11px] uppercase tracking-widest text-white/90 mb-8">
              Est. 2013 · Pune, India
           </span>
           <h1 className="font-display text-5xl sm:text-7xl font-semibold tracking-tight text-white leading-none">Engineering a safer tomorrow.</h1>
           <p className="mt-8 text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
              For over a decade, Vigilant Techno Services has built premium security infrastructure for homes, businesses, and the country's most demanding facilities — quietly, reliably, beautifully.
           </p>
        </div>
      </section>

      {/* The Story */}
      <section className="container-x grid lg:grid-cols-2 gap-16 py-32">
        <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-border/50 bg-surface group">
          <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80" alt="Vigilant team at work" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute inset-0 p-12 flex items-end">
            <h3 className="text-3xl font-semibold text-white tracking-tight">Our Story</h3>
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-8 text-lg leading-relaxed text-muted-foreground">
          <p>We started in 2013 with a single conviction — that security in India was being sold like a commodity, when it should be designed like enterprise infrastructure.</p>
          <p>The market was flooded with unreliable hardware and fly-by-night operators who disappeared after installation. We saw a desperate need for a security partner who valued engineering integrity, clean aesthetics, and lifelong support.</p>
          <p className="text-foreground font-medium text-xl">Today, we secure over 4,200+ sites with a 60-strong team of certified engineers and an unwavering commitment to quality.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <Section className="bg-surface border-y border-border/60">
        <div className="grid md:grid-cols-2 gap-12">
           <div className="surface-card p-10 sm:p-16 flex flex-col gap-6">
              <div className="h-14 w-14 rounded-2xl bg-brand/10 text-brand grid place-items-center"><Target className="h-7 w-7" /></div>
              <h3 className="text-3xl font-semibold tracking-tight">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">To provide uncompromising, intelligent security solutions that protect people, assets, and data through expert engineering and dedicated support.</p>
           </div>
           <div className="surface-card p-10 sm:p-16 flex flex-col gap-6">
              <div className="h-14 w-14 rounded-2xl bg-brand/10 text-brand grid place-items-center"><Lightbulb className="h-7 w-7" /></div>
              <h3 className="text-3xl font-semibold tracking-tight">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">To be India's most trusted technology partner, setting the absolute gold standard for electronic security and automation infrastructure.</p>
           </div>
        </div>
      </Section>

      {/* Metrics */}
      <section className="bg-foreground text-background py-24">
        <div className="container-x grid grid-cols-2 md:grid-cols-5 divide-x divide-background/20 gap-y-12">
          {METRICS.map((m, i) => (
            <div key={m.label} className={cn("px-4 text-center animate-fade-up", `delay-${i * 100}`)}>
              <div className="font-display text-4xl sm:text-5xl font-semibold">{m.value}</div>
              <div className="mt-3 text-xs uppercase tracking-widest text-background/60">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <Section>
        <SectionHeading eyebrow="Core Values" title="What drives us forward." />
        <div className="mt-16 grid sm:grid-cols-3 gap-6">
           {[
              { icon: ShieldCheck, t: "Absolute Integrity", d: "We never compromise on hardware quality or installation standards. Zero shortcuts." },
              { icon: HeartHandshake, t: "Customer Obsession", d: "From 48-hour survey turnarounds to 1-hour AMC responses, our clients always come first." },
              { icon: Award, t: "Engineering Excellence", d: "Neat cabling, perfect alignment, and future-proof networking architectures." }
           ].map((v, i) => (
              <div key={i} className="surface-card p-10 flex flex-col gap-5 border border-border/50">
                 <v.icon className="h-8 w-8 text-foreground" strokeWidth={1.5} />
                 <h4 className="text-xl font-semibold">{v.t}</h4>
                 <p className="text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
           ))}
        </div>
      </Section>

      {/* Team Layout Placeholder */}
      <Section className="bg-surface border-y border-border/60">
        <SectionHeading eyebrow="Leadership" title="Meet the minds behind Vigilant." lead="Our leadership team brings decades of combined experience in network engineering, physical security, and operations." />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {[1, 2, 3, 4].map((t) => (
              <div key={t} className="group">
                 <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-background border border-border/60 relative">
                    <img src={`https://images.unsplash.com/photo-${1550000000000 + t}?auto=format&fit=crop&w=600&q=80`} alt="Team member" className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1200ms] object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-700" />
                 </div>
                 <div className="mt-6">
                    <h4 className="text-lg font-semibold">Leadership Member {t}</h4>
                    <div className="text-sm text-brand uppercase tracking-widest mt-1">Director</div>
                 </div>
              </div>
           ))}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeading eyebrow="Quality Promise" title="A process built on trust." />
        <ol className="mt-16 space-y-px bg-border rounded-[2rem] overflow-hidden border border-border">
          {PROCESS.map((p, i) => (
            <li key={p.step} className={cn("bg-surface-elevated p-8 md:p-12 flex flex-col md:flex-row md:items-baseline gap-3 md:gap-12 hover:bg-accent/40 transition-colors animate-fade-up", `delay-${i * 100}`)}>
              <div className="font-display text-sm text-muted-foreground tracking-widest md:w-16">{p.step}</div>
              <div className="md:w-64 font-semibold text-2xl tracking-tight">{p.title}</div>
              <div className="text-muted-foreground text-lg flex-1 leading-relaxed">{p.desc}</div>
            </li>
          ))}
        </ol>
        
        <div className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-4">
           <CallButton text="Speak to our team" />
           <ContextualWhatsApp text="Chat with Leadership" message="Hi, I would like to speak with the Vigilant team regarding an enterprise deployment." />
        </div>
      </Section>
    </>
  );
}
