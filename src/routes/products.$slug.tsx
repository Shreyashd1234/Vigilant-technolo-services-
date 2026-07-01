import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight, Download, Plus, Minus, ShieldCheck, Box, Tag, Link as LinkIcon } from "lucide-react";
import { Btn, Section, SectionHeading } from "@/components/site/Primitives";
import { ProductCard } from "@/components/site/ProductCard";
import { ContextualWhatsApp, CallButton } from "@/components/site/CTAs";
import { inr, PRODUCTS } from "@/lib/site-data";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({ 
    ...seo({
      title: `${loaderData?.product.name ?? "Product"} — Vigilant`,
      description: loaderData?.product.desc ?? "",
      path: `/products/${loaderData?.product.slug}`,
      image: loaderData?.product.image,
    })
  }),
  notFoundComponent: () => (
    <div className="container-x py-40 text-center">
      <h1 className="text-3xl font-semibold">Product not found</h1>
      <Link to="/products" className="mt-6 inline-block link-underline">Back to all products</Link>
    </div>
  ),
  component: ProductDetail,
});

function ProductDetail() {
  const { product: p } = Route.useLoaderData();
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<"specs" | "downloads" | "warranty">("specs");

  const accessories = PRODUCTS.filter((x) => p.accessories?.includes(x.slug));
  const related = PRODUCTS.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 4);

  return (
    <>
      {/* Product Breadcrumbs */}
      <div className="bg-background border-b border-border/60 sticky top-16 z-40">
         <div className="container-x h-12 flex items-center justify-between text-xs font-medium text-muted-foreground">
            <nav className="flex items-center gap-2">
               <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
               <ChevronRight className="h-3 w-3" />
               <Link to="/products" className="hover:text-foreground transition-colors">Products</Link>
               <ChevronRight className="h-3 w-3" />
               <span className="text-foreground">{p.name}</span>
            </nav>
            <div className="hidden sm:flex items-center gap-4">
               <span>{inr(p.price)}</span>
               <CallButton text="Buy Now" className="h-8 text-[11px] px-4" />
            </div>
         </div>
      </div>

      {/* Cinematic E-commerce Hero */}
      <Section className="!pt-12 !pb-24 bg-background">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Gallery */}
          <div className="space-y-6">
            <div className="surface-card aspect-square grid place-items-center overflow-hidden bg-gradient-to-b from-white to-white/60 p-12 relative group border border-border/60 rounded-[3rem]">
              {p.badge && (
                <div className="absolute top-8 left-8 bg-foreground text-background px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest z-10">
                   {p.badge}
                </div>
              )}
              <img src={p.image} alt={p.name} className="h-full w-full object-contain mix-blend-multiply drop-shadow-2xl transition-transform duration-[1200ms] ease-out group-hover:scale-110" loading="eager" />
            </div>
          </div>

          {/* Right: Buy Box */}
          <div className="flex flex-col justify-center">
            <div className="text-sm font-semibold uppercase tracking-widest text-brand mb-4">{p.category}</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-foreground">{p.name}</h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed font-light text-balance">{p.desc}</p>

            <div className="mt-10 flex items-baseline gap-4">
              <span className="font-display text-4xl font-semibold">{inr(p.price)}</span>
              {p.mrp > p.price && <span className="text-xl text-muted-foreground line-through font-light">{inr(p.mrp)}</span>}
            </div>
            <div className="mt-2 text-sm font-medium text-green-600 flex items-center gap-1.5">
               <Tag className="h-4 w-4" /> Inclusive of all taxes
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 border-y border-border/60 py-8">
              <div className="inline-flex items-center rounded-full border border-border h-14 w-full sm:w-auto bg-surface">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-full w-14 place-items-center hover:bg-accent rounded-l-full transition-colors"><Minus className="h-4 w-4" /></button>
                <span className="w-12 text-center font-medium">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="grid h-full w-14 place-items-center hover:bg-accent rounded-r-full transition-colors"><Plus className="h-4 w-4" /></button>
              </div>
              <Btn className="h-14 w-full sm:w-auto px-10 text-base" onClick={() => alert("Added to cart")}>Add to Cart</Btn>
            </div>

            <div className="mt-8 flex flex-col gap-3">
               <CallButton text="Request Bulk Quote" className="w-full bg-surface-elevated text-foreground hover:bg-accent border border-border/60" />
               <ContextualWhatsApp message={`Hi Vigilant, I want to inquire about purchasing the ${p.name}.`} text="Chat with an Expert" className="w-full justify-center" />
            </div>
          </div>
        </div>
      </Section>

      {/* Lifestyle Narrative */}
      {p.lifestyleImages && p.lifestyleImages.length > 0 && (
         <section className="relative h-[60vh] sm:h-[80vh] w-full overflow-hidden bg-foreground">
            <img src={p.lifestyleImages[0]} alt="Lifestyle" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity scale-105 animate-hero-zoom" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-12 sm:p-24 container-x text-white">
               <h3 className="text-3xl sm:text-5xl font-semibold tracking-tight max-w-2xl text-balance">Engineered to blend perfectly into premium environments.</h3>
            </div>
         </section>
      )}

      {/* Deep Specs & Accessories */}
      <Section className="bg-surface">
         <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Interactive Data Tabs */}
            <div className="lg:col-span-2">
               <div className="flex gap-8 border-b border-border/60 mb-8 overflow-x-auto scrollbar-hide">
                  {(["specs", "downloads", "warranty"] as const).map(tab => (
                     <button 
                        key={tab} 
                        onClick={() => setActiveTab(tab)}
                        className={`pb-4 text-sm font-semibold uppercase tracking-widest whitespace-nowrap border-b-2 transition-colors ${activeTab === tab ? 'border-brand text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
                     >
                        {tab}
                     </button>
                  ))}
               </div>
               
               <div className="min-h-[300px] animate-fade-in">
                  {activeTab === "specs" && (
                     <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                        {p.specs.map((s, i) => (
                           <div key={i} className="border-b border-border/40 pb-4">
                              <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{s.label}</div>
                              <div className="font-medium text-foreground text-lg">{s.value}</div>
                           </div>
                        ))}
                     </div>
                  )}

                  {activeTab === "downloads" && (
                     <div className="space-y-4">
                        <a href="#" className="flex items-center justify-between p-6 rounded-2xl bg-background border border-border/60 hover:border-brand transition-colors group">
                           <div className="flex items-center gap-4">
                              <Box className="h-6 w-6 text-brand" />
                              <div>
                                 <div className="font-semibold text-foreground">Technical Datasheet</div>
                                 <div className="text-xs text-muted-foreground mt-1">PDF · 2.4 MB</div>
                              </div>
                           </div>
                           <Download className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
                        </a>
                     </div>
                  )}

                  {activeTab === "warranty" && (
                     <div className="p-8 rounded-3xl bg-foreground text-background">
                        <ShieldCheck className="h-10 w-10 text-brand mb-6" />
                        <h4 className="text-2xl font-semibold mb-4 text-white">2-Year Replacement Warranty</h4>
                        <p className="text-white/70 leading-relaxed text-balance">
                           This product is backed by Vigilant's direct 2-year hardware replacement warranty. In the event of a manufacturing defect, our engineers will swap the unit directly at your premises. No third-party service centers involved.
                        </p>
                     </div>
                  )}
               </div>
            </div>

            {/* Frequently Bought Together / Accessories */}
            {accessories.length > 0 && (
               <div>
                  <h4 className="text-lg font-semibold tracking-tight mb-6 flex items-center gap-2"><LinkIcon className="h-5 w-5 text-brand" /> Often paired with</h4>
                  <div className="space-y-4">
                     {accessories.map(acc => (
                        <Link key={acc.slug} to="/products/$slug" params={{ slug: acc.slug }} className="flex items-center gap-4 p-4 rounded-2xl border border-border/50 bg-background hover:border-brand transition-colors group">
                           <div className="h-16 w-16 rounded-xl bg-white p-2 shrink-0 border border-border/50">
                              <img src={acc.image} alt={acc.name} className="w-full h-full object-contain mix-blend-multiply" />
                           </div>
                           <div>
                              <div className="font-semibold text-sm group-hover:text-brand transition-colors">{acc.name}</div>
                              <div className="text-xs text-muted-foreground mt-1">{inr(acc.price)}</div>
                           </div>
                        </Link>
                     ))}
                  </div>
               </div>
            )}

         </div>
      </Section>

      {/* Related / Complete the Ecosystem */}
      {related.length > 0 && (
        <Section className="border-t border-border/60 bg-background">
          <SectionHeading eyebrow="Explore More" title="Complete your ecosystem." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => <ProductCard key={r.id} p={r} />)}
          </div>
        </Section>
      )}
    </>
  );
}
