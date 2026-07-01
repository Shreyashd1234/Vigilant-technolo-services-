import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SOLUTIONS, PRODUCTS } from "@/lib/site-data";
import { Section } from "@/components/site/Primitives";
import { ProductCard } from "@/components/site/ProductCard";
import { ContextualWhatsApp, CallButton } from "@/components/site/CTAs";
import { CheckCircle2, ChevronRight, HardHat, Info, MapPin, Wrench } from "lucide-react";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const solution = SOLUTIONS.find(s => s.slug === params.slug);
    if (!solution) throw notFound();
    return solution;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return seo({
      title: `${loaderData.name} — Enterprise Security Solutions | Vigilant`,
      description: loaderData.desc,
      path: `/solutions/${loaderData.slug}`,
      image: loaderData.image,
    });
  },
  component: SolutionDetail,
});

function SolutionDetail() {
  const s = Route.useLoaderData();
  const relatedProducts = PRODUCTS.filter(p => p.category.toLowerCase().includes(s.slug.replace("-", " ")) || s.relatedSolutions.includes(p.slug)).slice(0, 4);
  
  return (
    <>
      {/* Immersive Split-Screen Hero */}
      <section className="relative pt-20 bg-background min-h-[85svh] flex items-center border-b border-border/60">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center py-20 z-10">
           <div className="animate-fade-up">
              <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6">
                 <s.icon className="h-5 w-5 text-brand" /> {s.name}
              </div>
              <h1 className="font-display text-5xl sm:text-7xl font-semibold tracking-tight text-foreground leading-[1.05]">
                 {s.short}
              </h1>
              <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-lg">
                 {s.desc}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                 <CallButton text="Consult an Architect" className="w-full sm:w-auto px-8" />
                 <ContextualWhatsApp message={`Hi Vigilant, we are looking for ${s.name} solutions for our facility.`} text="Request System Design" className="w-full sm:w-auto" />
              </div>
           </div>
           <div className="relative aspect-square lg:aspect-auto lg:h-[70vh] rounded-[3rem] overflow-hidden bg-surface group animate-fade-up delay-200">
              <img src={s.image} alt={s.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out" fetchPriority="high" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
           </div>
        </div>
      </section>

      {/* The Core Narrative */}
      <Section className="bg-surface">
         <div className="grid md:grid-cols-3 gap-16">
            <div className="md:col-span-2 space-y-20">
               <div>
                  <h2 className="text-3xl font-semibold tracking-tight mb-6">Why it matters.</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed text-balance">{s.why}</p>
               </div>
               
               <div className="grid sm:grid-cols-2 gap-12">
                  <div>
                     <div className="flex items-center gap-3 mb-4">
                        <MapPin className="h-6 w-6 text-brand" />
                        <h3 className="text-xl font-semibold">Where we deploy it</h3>
                     </div>
                     <p className="text-muted-foreground leading-relaxed">{s.where}</p>
                  </div>
                  <div>
                     <div className="flex items-center gap-3 mb-4">
                        <HardHat className="h-6 w-6 text-brand" />
                        <h3 className="text-xl font-semibold">How we build it</h3>
                     </div>
                     <p className="text-muted-foreground leading-relaxed">{s.how}</p>
                  </div>
               </div>

               <div className="p-8 sm:p-12 rounded-[2rem] bg-foreground text-background">
                  <div className="flex items-center gap-3 mb-6">
                     <Wrench className="h-6 w-6 text-brand" />
                     <h3 className="text-2xl font-semibold text-white">Maintenance Protocol</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed text-lg mb-8">{s.maintenance}</p>
                  <div className="border-t border-white/20 pt-8">
                     <h4 className="text-sm uppercase tracking-widest font-semibold text-white/60 mb-6">Engineering Best Practices</h4>
                     <ul className="space-y-4">
                        {s.bestPractices.map((bp, i) => (
                           <li key={i} className="flex items-start gap-3 text-white/90">
                              <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                              <span>{bp}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>

            {/* Technical Highlights Sidebar */}
            <div className="relative">
               <div className="sticky top-32 surface-card p-8 border border-border/60">
                  <h4 className="text-sm uppercase tracking-widest font-semibold text-muted-foreground mb-8 flex items-center gap-2"><Info className="h-4 w-4" /> Technical Highlights</h4>
                  <div className="space-y-6">
                     {s.technicalHighlights.map((th, i) => (
                        <div key={i} className="border-b border-border/50 pb-4 last:border-0 last:pb-0">
                           <div className="text-xs text-muted-foreground mb-1">{th.label}</div>
                           <div className="text-lg font-medium text-foreground">{th.value}</div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </Section>

      {/* Recommended Hardware */}
      {relatedProducts.length > 0 && (
         <Section className="border-t border-border/60 bg-background">
            <div className="flex items-end justify-between mb-16">
               <div>
                  <span className="text-xs uppercase tracking-widest text-brand font-semibold">Hardware</span>
                  <h2 className="text-3xl font-semibold mt-2">Recommended Equipment</h2>
               </div>
               <Link to="/products" className="hidden sm:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  View Full Catalogue <ChevronRight className="h-4 w-4" />
               </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
               {relatedProducts.map((p) => <ProductCard key={p.id} p={p} />)}
            </div>
         </Section>
      )}

      {/* FAQs */}
      {s.faqs.length > 0 && (
         <Section className="bg-surface border-t border-border/60">
            <div className="max-w-3xl mx-auto">
               <div className="text-center mb-16">
                  <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
               </div>
               <div className="space-y-6">
                  {s.faqs.map((faq, i) => (
                     <div key={i} className="surface-card p-8 border border-border/50">
                        <h4 className="font-semibold text-lg text-foreground mb-3">{faq.q}</h4>
                        <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                     </div>
                  ))}
               </div>
            </div>
         </Section>
      )}
    </>
  );
}
