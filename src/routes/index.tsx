import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Award, Cloud, Eye, ShieldCheck, Smartphone, Sparkles, Star, Users, Wrench, User } from "lucide-react";
import { Btn, Section, SectionHeading, ArrowLink } from "@/components/site/Primitives";
import { ProductCard } from "@/components/site/ProductCard";
import { BRAND, INDUSTRIES, METRICS, PROCESS, PRODUCTS, SOLUTIONS, TESTIMONIALS, EXPERTISE, PARTNERS, CLIENTS, PROJECTS } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-control-room.jpg";
import officeExterior from "@/assets/generated/office_exterior_1784034617668.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vigilant Technologies — Secure Every Corner" },
      { name: "description", content: "Premium CCTV, IP cameras, biometric access, video door phones, and networking services in Pune & across India." },
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
          ].map((b, i) => (
            <div key={b.t} className={cn("flex items-center gap-3 rounded-2xl border border-border/70 bg-surface-elevated px-4 py-3.5 hover:border-border hover:shadow-sm transition-all animate-fade-up", `delay-${(i % 6) * 100}`)}>
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-foreground text-background">
                <b.icon className="h-4 w-4" strokeWidth={1.75} />
              </div>
              <span className="text-[13px] font-medium truncate">{b.t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="container-x py-24 sm:py-32">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Our Expertise</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">Top class engineers serve you the best security solutions.</h2>
            <p className="mt-6 text-muted-foreground">We pride ourselves on technical excellence and deep integration capabilities across the entire security stack.</p>
          </div>
          <div className="lg:w-2/3 grid gap-4 sm:grid-cols-2">
            {EXPERTISE.map((exp, i) => (
              <div key={i} className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6 hover:bg-surface-elevated transition-colors">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand font-semibold text-sm">
                  {i + 1}
                </div>
                <p className="text-sm font-medium leading-relaxed pt-1">{exp}</p>
              </div>
            ))}
          </div>
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
            <Link key={s.slug} to="/solutions" className="group relative overflow-hidden rounded-3xl p-7 border border-border/50 bg-background hover:border-border transition-colors block aspect-[4/5] sm:aspect-auto sm:h-[400px]">
              <img src={s.image} alt={s.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity group-hover:opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-7 flex flex-col justify-end h-full">
                <s.icon className="h-6 w-6 text-white mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-white tracking-tight">{s.name}</h3>
                <p className="mt-2 text-sm text-white/70 line-clamp-2">{s.short}</p>
              </div>
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
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-background/20 border border-background/20 rounded-3xl overflow-hidden">
            {INDUSTRIES.map((i) => (
              <Link key={i.slug} to="/industries/$slug" params={{ slug: i.slug }} className="group relative aspect-square sm:aspect-[3/4] overflow-hidden bg-foreground">
                <img src={i.image} alt={i.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-40 transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                  <i.icon className="h-6 w-6 text-white mb-4" strokeWidth={1.5} />
                  <div className="text-lg font-medium text-white">{i.name}</div>
                </div>
              </Link>
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

      {/* PARTNERS */}
      <section className="bg-white py-24">
        <div className="container-x">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide uppercase text-black/90">
              Strategic Partners
            </h2>
            <div className="h-1.5 w-24 bg-brand mt-4 rounded-full" />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16 max-w-5xl mx-auto">
            {PARTNERS.map((partner, i) => (
              <LogoCard key={i} item={partner} type="partner" className="w-28 sm:w-36 h-20" />
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="bg-white py-20 pb-32">
        <div className="container-x">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide uppercase text-black/90">
              Our Clients
            </h2>
            <div className="h-1.5 w-24 bg-brand mt-4 rounded-full" />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-12 lg:gap-16">
            {CLIENTS.map((client, i) => (
              <LogoCard key={i} item={client} type="client" className="w-24 sm:w-32 h-16 sm:h-20" />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Section>
        <SectionHeading eyebrow="Testimonials" title={<>Loved by India's most exacting facility teams.</>} />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure key={t.name} className={cn("surface-card p-8 flex flex-col justify-between animate-fade-up relative overflow-hidden", `delay-${(i % 3) * 100}`)}>
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="flex gap-1">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-brand text-brand" />)}</div>
                <blockquote className="mt-6 text-[17px] leading-relaxed font-medium tracking-tight text-foreground/90">"{t.quote}"</blockquote>
              </div>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-border/60 pt-6 relative z-10">
                {t.avatar ? (
                   <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full object-cover ring-2 ring-background shadow-sm bg-surface" loading="lazy" />
                ) : (
                   <div className="h-11 w-11 rounded-full ring-2 ring-background shadow-sm bg-surface flex items-center justify-center text-muted-foreground">
                      <User className="h-5 w-5" />
                   </div>
                )}
                <div className="text-sm">
                  <div className="font-semibold text-foreground/90">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="surface-card overflow-hidden relative">
          <img src={officeExterior} alt="Modern office" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/50" />
          <div className="relative p-12 sm:p-16 lg:p-24">
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

function LogoCard({ item, className, type }: { item: { name: string; domain?: string; logo?: string }, className?: string, type: "partner" | "client" }) {
  const [errorCount, setErrorCount] = useState(0);
  const safeName = item.name.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
  
  // Try custom logo first, then PNG, if that fails try SVG, if that fails show text
  let imgSrc = item.logo ? encodeURI(item.logo) : `/logos/${type}_${safeName}.png`;
  if (errorCount === 1 && !item.logo) {
    imgSrc = `/logos/${type}_${safeName}.svg`;
  }

  return (
    <div className={cn("flex items-center justify-center group relative transition-all", className)} title={item.name}>
      {errorCount < (item.logo ? 1 : 2) ? (
        <img 
          src={imgSrc} 
          alt={item.name}
          className="max-h-full max-w-full object-contain transition-all duration-500 group-hover:scale-105 mix-blend-multiply"
          onError={() => setErrorCount(c => c + 1)}
          loading="lazy"
        />
      ) : (
        <span className="font-bold text-sm text-black/60 truncate text-center w-full px-2">{item.name}</span>
      )}
    </div>
  );
}
