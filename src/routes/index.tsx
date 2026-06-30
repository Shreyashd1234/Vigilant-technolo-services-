import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Btn, Eyebrow, Section, SectionHeading, ArrowLink } from "@/components/site/Primitives";
import { ProductCard } from "@/components/site/ProductCard";
import { BRAND, INDUSTRIES, METRICS, PROCESS, PRODUCTS, SOLUTIONS, TESTIMONIALS } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vigilant Technologies — Secure Every Corner" },
      { name: "description", content: "Premium CCTV, IP cameras, biometric access, video door phones, networking and AMC services in Pune & across India." },
      { property: "og:title", content: "Vigilant Technologies — Secure Every Corner" },
      { property: "og:description", content: "Protecting what matters through intelligent security." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full blur-3xl opacity-30 mesh-bg pointer-events-none" />
        <div className="container-x relative pt-24 sm:pt-32 pb-20">
          <div className="mx-auto max-w-4xl text-center animate-blur-in">
            <Eyebrow>Pune · Established 2013</Eyebrow>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-[0.95]">
              Secure every corner.
              <br />
              <span className="text-gradient">Protect what matters most.</span>
            </h1>
            <p className="mt-8 mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Premium CCTV surveillance, smart security, biometric access, networking and enterprise-grade protection — engineered for homes, businesses and industries.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Btn to="/products">Explore Products <ArrowRight className="h-4 w-4" /></Btn>
              <Btn variant="outline" to="/contact">Book Free Site Survey</Btn>
            </div>
          </div>

          {/* Hero visual */}
          <div className="mt-20 relative mx-auto max-w-5xl">
            <div className="surface-card aspect-[16/9] mesh-bg relative overflow-hidden">
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <div className="mx-auto h-20 w-20 rounded-3xl bg-foreground/5 backdrop-blur border border-border grid place-items-center animate-float">
                    <ShieldCheck className="h-8 w-8 text-foreground/70" />
                  </div>
                  <p className="mt-6 text-sm text-muted-foreground">Live control room · 24×7 NOC monitoring</p>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {["AI Detection", "4K Recording", "Cloud Backup", "Mobile Alerts"].map((t) => (
                  <div key={t} className="rounded-xl bg-background/70 backdrop-blur border border-border/60 px-4 py-3 text-xs font-medium text-left">
                    <Sparkles className="h-3 w-3 inline mr-1.5 text-brand" /> {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="border-y border-border/60 bg-surface">
        <div className="container-x grid grid-cols-2 md:grid-cols-5 divide-x divide-border/60">
          {METRICS.map((m) => (
            <div key={m.label} className="px-4 py-10 text-center first:pl-0 last:pr-0">
              <div className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">{m.value}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTIONS */}
      <Section>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <SectionHeading eyebrow="Solutions" title={<>One partner. <span className="text-muted-foreground">Every layer of security.</span></>} />
          <ArrowLink to="/solutions">Browse all solutions</ArrowLink>
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map((s) => (
            <Link key={s.slug} to="/solutions" className="surface-card surface-card-hover group p-7">
              <s.icon className="h-6 w-6 text-foreground" strokeWidth={1.5} />
              <h3 className="mt-8 text-[15px] font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* INDUSTRIES */}
      <section className="bg-foreground text-background py-32">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-background/60">Industries</span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Trusted across India's most demanding environments.
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-background/10 border border-background/10 rounded-3xl overflow-hidden">
            {INDUSTRIES.map((i) => (
              <div key={i.name} className="bg-foreground p-8 hover:bg-background/5 transition-colors">
                <i.icon className="h-5 w-5 text-background/80" strokeWidth={1.5} />
                <div className="mt-10 text-sm font-medium">{i.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <Section>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <SectionHeading eyebrow="Featured Products" title="Engineered for performance." />
          <ArrowLink to="/products">View all products</ArrowLink>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.slice(0, 4).map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </Section>

      {/* PROCESS */}
      <section className="bg-surface border-y border-border/60">
        <div className="container-x py-24 sm:py-32">
          <SectionHeading eyebrow="The Process" title="From survey to lifetime support." />
          <div className="mt-16 grid gap-px bg-border md:grid-cols-5 rounded-2xl overflow-hidden border border-border">
            {PROCESS.map((p) => (
              <div key={p.step} className="bg-surface-elevated p-7 hover:bg-accent/40 transition-colors">
                <div className="font-display text-xs text-muted-foreground tracking-widest">{p.step}</div>
                <h3 className="mt-6 font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Section>
        <SectionHeading eyebrow="Testimonials" title={<>Loved by India's most exacting facility teams.</>} />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="surface-card p-8">
              <div className="flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-foreground text-foreground" />)}</div>
              <blockquote className="mt-6 text-[17px] leading-relaxed font-medium tracking-tight">"{t.quote}"</blockquote>
              <figcaption className="mt-8 text-sm">
                <div className="font-semibold">{t.name}</div>
                <div className="text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="surface-card overflow-hidden">
          <div className="relative mesh-bg p-12 sm:p-16 lg:p-24">
            <div className="max-w-2xl">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
                Book your free site survey today.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                Our engineers will map your premises, design a system and quote — all within 48 hours.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Btn to="/contact">Schedule Survey</Btn>
                <Btn variant="outline" href={`tel:${BRAND.phone}`}>Call {BRAND.phone}</Btn>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
