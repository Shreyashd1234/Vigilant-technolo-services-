import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Sparkles } from "lucide-react";
import { Section, Btn } from "@/components/site/Primitives";
import { ProductCard } from "@/components/site/ProductCard";
import { PRODUCTS, inr } from "@/lib/site-data";
import { cn } from "@/lib/utils";

import heroBg from "@/assets/generated/vg_hero_network_1782929083774.png";

export const Route = createFileRoute("/products/")({
  head: () => ({ meta: [
    { title: "Products — Vigilant Technologies" },
    { name: "description", content: "Premium CCTV, IP cameras, biometric, access control, NVRs and networking — engineered for India." },
    { property: "og:title", content: "Products — Vigilant Technologies" },
  ]}),
  component: ProductsPage,
});

function ProductsPage() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))], []);
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"new" | "low" | "high">("new");

  const items = useMemo(() => {
    let list = PRODUCTS.filter((p) => (cat === "All" || p.category === cat) && (q === "" || p.name.toLowerCase().includes(q.toLowerCase())));
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [cat, q, sort]);

  const featured = PRODUCTS[0];

  return (
    <>
      {/* Immersive Products Hero */}
      <section className="relative pt-20 bg-foreground min-h-[60svh] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Network Gear" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity scale-105 animate-hero-zoom" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="relative z-10 text-center max-w-3xl container-x animate-fade-up">
           <div className="flex items-center justify-center gap-2 text-brand font-semibold tracking-widest uppercase text-xs mb-6">
              <Sparkles className="h-4 w-4" /> Professional Grade
           </div>
           <h1 className="text-5xl sm:text-7xl font-display font-semibold text-white tracking-tight leading-[1.05]">
              Engineered for <br/> Absolute Security.
           </h1>
           <p className="mt-8 text-xl text-white/70 leading-relaxed font-light">
              Explore our hand-picked ecosystem of edge AI cameras, unbreachable access controls, and enterprise switching.
           </p>
        </div>
      </section>

      {/* Floating Apple-Style Filter Bar */}
      <div className="sticky top-[73px] z-30 bg-background/80 backdrop-blur-xl border-b border-border/60 py-4">
         <div className="container-x flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide max-w-full">
               {categories.map((c) => (
                  <button 
                     key={c} 
                     onClick={() => setCat(c)} 
                     className={cn("whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-colors", cat === c ? "bg-foreground text-background" : "bg-surface text-muted-foreground hover:text-foreground")}
                  >
                     {c}
                  </button>
               ))}
            </div>
            <div className="flex w-full md:w-auto gap-3 items-center">
               <div className="relative w-full md:w-64">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products…" className="w-full rounded-full border-none bg-surface pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand font-medium" />
               </div>
               <select value={sort} onChange={(e) => setSort(e.target.value as "new" | "low" | "high")} className="hidden sm:block rounded-full border-none bg-surface px-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand appearance-none cursor-pointer">
                  <option value="new">Newest</option>
                  <option value="low">Price: Low to high</option>
                  <option value="high">Price: High to low</option>
               </select>
            </div>
         </div>
      </div>

      <Section className="bg-background !pt-16 min-h-[50vh]">
        {items.length === 0 ? (
          <div className="py-32 text-center">
             <h3 className="text-2xl font-semibold mb-2">No hardware found.</h3>
             <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
             <button onClick={() => { setCat("All"); setQ(""); }} className="mt-6 text-brand font-semibold link-underline">Clear all filters</button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        )}
      </Section>

      {/* Featured Ecosystem CTA */}
      <Section className="bg-foreground text-background border-t border-border/10">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">Need a complete architecture?</h2>
               <p className="text-xl text-white/70 leading-relaxed font-light mb-10">
                  Stop buying individual components. Let our certified engineers design a unified, cohesive security ecosystem for your entire facility.
               </p>
               <Btn to="/contact" className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg">Talk to an Architect</Btn>
            </div>
            <div className="relative aspect-square sm:aspect-video rounded-3xl overflow-hidden bg-zinc-950/40 border border-white/10 p-12 flex flex-col justify-between">
               <img src={featured.image} alt={featured.name} className="absolute -right-10 -bottom-10 w-3/4 object-contain opacity-50 mix-blend-plus-lighter" />
               <div className="relative z-10">
                  <span className="text-brand font-bold uppercase tracking-widest text-xs">Featured Hardware</span>
                  <h3 className="text-3xl font-semibold mt-2 text-white">{featured.name}</h3>
                  <p className="text-white/60 mt-2">{featured.short}</p>
               </div>
               <div className="relative z-10">
                  <Link to="/products/$slug" params={{ slug: featured.slug }} className="inline-flex items-center gap-2 text-white font-medium hover:text-brand transition-colors">
                     Explore Product <Sparkles className="h-4 w-4" />
                  </Link>
               </div>
            </div>
         </div>
      </Section>
    </>
  );
}
