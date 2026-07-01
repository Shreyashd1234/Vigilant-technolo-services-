import { createFileRoute, notFound } from "@tanstack/react-router";
import { INDUSTRIES, PRODUCTS } from "@/lib/site-data";
import { Section } from "@/components/site/Primitives";
import { ProductCard } from "@/components/site/ProductCard";
import { ContextualWhatsApp, CallButton } from "@/components/site/CTAs";
import { CheckCircle2, ChevronRight, ShieldCheck } from "lucide-react";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = INDUSTRIES.find(i => i.slug === params.slug);
    if (!industry) throw notFound();
    return industry;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return seo({
      title: `${loaderData.name} Security Solutions — Vigilant Techno Services`,
      description: loaderData.challenges,
      path: `/industries/${loaderData.slug}`,
      image: loaderData.image,
    });
  },
  component: IndustryDetail,
});

function IndustryDetail() {
  const i = Route.useLoaderData();
  const recProducts = PRODUCTS.filter(p => i.recommendedProducts.includes(p.slug));
  
  return (
    <>
      {/* Dynamic Immersive Hero */}
      <section className="relative min-h-[85svh] flex items-center justify-center bg-foreground overflow-hidden pt-20">
        <img src={i.image} alt={i.name} className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity scale-105 animate-hero-zoom" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        
        <div className="container-x relative z-10 text-center max-w-4xl pt-20 animate-fade-up">
           <i.icon className="h-16 w-16 text-brand mx-auto mb-8" strokeWidth={1.5} />
           <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-foreground leading-[1.05]">
             {i.name} Security
           </h1>
           <p className="mt-8 text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
             {i.challenges}
           </p>
           <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <CallButton text="Book Site Survey" className="w-full sm:w-auto px-8" />
              <ContextualWhatsApp message={`Hi Vigilant, we need specialized security architectures for our ${i.name} facility.`} text="Consult an Expert" className="w-full sm:w-auto" />
           </div>
        </div>
      </section>

      {/* Customized Industry Deep Dive */}
      <Section className="border-t border-border/60 bg-surface">
         <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Engineered for your environment.</h2>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
               Generic security systems fail because they ignore the unique operational workflows of your industry. We design architectures that integrate seamlessly into your daily operations.
            </p>
         </div>

         <div className="grid md:grid-cols-2 gap-8">
            {i.details.map((detail, idx) => (
               <div key={idx} className="surface-card p-10 border border-border/50 group hover:border-brand/50 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                     <div className="h-12 w-12 rounded-full bg-foreground text-background grid place-items-center group-hover:bg-brand group-hover:text-white transition-colors">
                        <ShieldCheck className="h-6 w-6" />
                     </div>
                     <h3 className="text-2xl font-semibold">{detail.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">{detail.content}</p>
               </div>
            ))}
         </div>
      </Section>

      {/* Specialized Hardware */}
      {recProducts.length > 0 && (
         <Section className="bg-background border-t border-border/60">
            <div className="text-center mb-16 max-w-2xl mx-auto">
               <span className="text-xs uppercase tracking-widest text-brand font-semibold">Purpose-Built</span>
               <h2 className="text-3xl font-semibold mt-2">Recommended Hardware</h2>
               <p className="mt-4 text-muted-foreground">The exact equipment our engineers specify for {i.name.toLowerCase()} environments.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center max-w-5xl mx-auto">
               {recProducts.map((p) => <ProductCard key={p.id} p={p} />)}
            </div>
         </Section>
      )}

      {/* Trust CTA */}
      <Section className="bg-foreground text-background text-center py-32">
         <div className="max-w-2xl mx-auto">
            <ShieldCheck className="h-16 w-16 mx-auto mb-8 text-white/50" strokeWidth={1} />
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-8">Trust the experts.</h2>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
               Stop relying on local vendors for enterprise requirements. Speak to an architect who understands the specific compliance and security demands of your industry.
            </p>
            <CallButton text="Call our Engineering Team" className="bg-white text-black hover:bg-white/90" />
         </div>
      </Section>
    </>
  );
}
