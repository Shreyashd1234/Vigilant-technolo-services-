import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Primitives";
import { ProductCard } from "@/components/site/ProductCard";
import { PRODUCTS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

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

  return (
    <>
      <Section className="!pb-12">
        <SectionHeading eyebrow="Products" title="Premium security hardware." lead="Hand-picked range of 4K IP cameras, recorders, biometric and networking gear — backed by Vigilant's installation and AMC." />
      </Section>
      <section className="container-x">
        <div className="surface-card p-4 sm:p-5 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={cn("rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium transition-colors", cat === c ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:text-foreground")}>{c}</button>
            ))}
          </div>
          <div className="flex gap-3 items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search…" className="w-full lg:w-64 rounded-full border border-border bg-background pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30" />
            </div>
            <select value={sort} onChange={(e) => setSort(e.target.value as "new" | "low" | "high")} className="rounded-full border border-border bg-background px-3 py-2 text-sm">
              <option value="new">Newest</option>
              <option value="low">Price: Low to high</option>
              <option value="high">Price: High to low</option>
            </select>
          </div>
        </div>
      </section>
      <Section className="!pt-12">
        {items.length === 0 ? (
          <div className="py-20 text-center text-muted-foreground">No products match.</div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        )}
        <div className="mt-16 text-sm text-muted-foreground text-center">
          Need a custom configuration? <Link to="/contact" className="link-underline text-foreground font-medium">Talk to an engineer →</Link>
        </div>
      </Section>
    </>
  );
}
