import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Cloud, Eye, ShieldCheck, Smartphone, Sparkles, Star, Users, Wrench } from "lucide-react";
import { Btn, Section, SectionHeading, ArrowLink } from "@/components/site/Primitives";
import { ProductCard } from "@/components/site/ProductCard";
import { BRAND, INDUSTRIES, METRICS, PROCESS, PRODUCTS, SOLUTIONS, TESTIMONIALS } from "@/lib/site-data";
import heroImage from "@/assets/hero-control-room.jpg";

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
      {/* HERO — cinematic full-bleed */}
      <section className="relative -mt-16 min-h-[100svh] flex items-end overflow-hidden bg-foreground text-background">
        <img
          src={heroImage}
          alt="Vigilant Technologies 24×7 security operations control room"
          className="absolute inset-0 h-full w-full object-cover scale-105 animate-hero-zoom"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        {/* gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

        <div className="container-x relative w-full pt-40 pb-16 sm:pb-24">
          <div className="max-w-3xl animate-blur-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-3.5 py-1.5 text-[11px] uppercase tracking-widest text-white/90">
              <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" /></span>
              Live · Pune · Est. 2013
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-semibold tracking-tight leading-[0.95] text-white">
              Intelligent security,
              <br />
              <span className="bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">engineered for the modern world.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg text-white/70 leading-relaxed">
              Premium CCTV, AI cameras, biometric access and enterprise networking — designed, installed and maintained by India's most trusted smart-security partner.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3.5 text-sm font-medium btn-magnetic hover:bg-white/90 transition-colors">
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur-md text-white px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition-colors">
                Book Free Site Survey
              </Link>
            </div>

            {/* trust row */}
            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 text-white/70 text-[13px]">
              <div className="flex items-center gap-2"><div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />)}</div><span className="font-medium text-white">4.9</span><span>· 1,200+ Google reviews</span></div>
              <div className="hidden sm:block h-4 w-px bg-white/20" />
              <div>12+ years · 4,200+ installations</div>
              <div className="hidden md:block h-4 w-px bg-white/20" />
              <div>24×7 NOC · 60+ certified engineers</div>
            </div>
          </div>

          {/* floating feature cards */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-5 gap-3 max-w-5xl">
            {[
              { icon: Eye, t: "AI Detection", s: "Smart motion zones" },
              { icon: Cloud, t: "Cloud Backup", s: "30-day retention" },
              { icon: Smartphone, t: "Mobile Alerts", s: "iOS & Android" },
              { icon: ShieldCheck, t: "24×7 Monitoring", s: "NOC watch" },
              { icon: Sparkles, t: "Remote Access", s: "One app, any site" },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-4 hover:bg-white/[0.1] transition-colors">
                <c.icon className="h-4 w-4 text-white" strokeWidth={1.5} />
                <div className="mt-6 text-[13px] font-semibold text-white">{c.t}</div>
                <div className="text-[12px] text-white/60">{c.s}</div>
              </div>
            ))}
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

      {/* TRUST BADGES */}
      <section className="container-x py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { icon: Star, t: "Google 4.9★" },
            { icon: ShieldCheck, t: "2-Yr Warranty" },
            { icon: Award, t: "Genuine Products" },
            { icon: Wrench, t: "Pro Installation" },
            { icon: Users, t: "Certified Engineers" },
            { icon: Cloud, t: "24×7 Support" },
          ].map((b) => (
            <div key={b.t} className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3.5">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-foreground text-background">
                <b.icon className="h-4 w-4" strokeWidth={1.75} />
              </div>
              <span className="text-[13px] font-medium truncate">{b.t}</span>
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
