import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ChevronRight, Heart, Minus, Plus, Shield, ShoppingBag, Truck } from "lucide-react";
import { Btn, Section, SectionHeading } from "@/components/site/Primitives";
import { ProductCard } from "@/components/site/ProductCard";
import { inr, PRODUCTS } from "@/lib/site-data";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({ meta: [
    { title: `${loaderData?.product.name ?? "Product"} — Vigilant` },
    { name: "description", content: loaderData?.product.short ?? "" },
    { property: "og:title", content: `${loaderData?.product.name ?? "Product"} — Vigilant` },
    { property: "og:description", content: loaderData?.product.short ?? "" },
  ]}),
  notFoundComponent: () => (
    <div className="container-x py-40 text-center">
      <h1 className="text-3xl font-semibold">Product not found</h1>
      <Link to="/products" className="mt-6 inline-block link-underline">Back to all products</Link>
    </div>
  ),
  errorComponent: () => <div className="container-x py-40 text-center text-muted-foreground">Something went wrong loading this product.</div>,
  component: ProductDetail,
});

function ProductDetail() {
  const { product: p } = Route.useLoaderData();
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<"overview" | "specs" | "shipping">("overview");
  const related = PRODUCTS.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 4);

  return (
    <>
      <div className="container-x pt-10">
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/products" className="hover:text-foreground">Products</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{p.name}</span>
        </nav>
      </div>

      <Section className="!pt-10 !pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="surface-card aspect-square mesh-bg grid place-items-center overflow-hidden">
            <div className="h-56 w-56 rounded-3xl bg-foreground/5 backdrop-blur border border-border grid place-items-center animate-float">
              <span className="font-display text-5xl font-semibold text-foreground/40">VG</span>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">{p.category}</div>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">{p.name}</h1>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{p.short}</p>

            <div className="mt-8 flex items-baseline gap-3">
              <span className="font-display text-3xl font-semibold">{inr(p.price)}</span>
              {p.mrp > p.price && <span className="text-muted-foreground line-through">{inr(p.mrp)}</span>}
              <span className="ml-2 rounded-full bg-brand-soft text-foreground px-2.5 py-0.5 text-xs font-medium">Inclusive of GST</span>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="inline-flex items-center rounded-full border border-border">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-10 w-10 place-items-center hover:bg-accent rounded-l-full"><Minus className="h-3.5 w-3.5" /></button>
                <span className="w-10 text-center text-sm font-medium">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="grid h-10 w-10 place-items-center hover:bg-accent rounded-r-full"><Plus className="h-3.5 w-3.5" /></button>
              </div>
              <Btn to="/cart"><ShoppingBag className="h-4 w-4" /> Add to Cart</Btn>
              <button className="grid h-11 w-11 place-items-center rounded-full border border-border hover:bg-accent" aria-label="Wishlist"><Heart className="h-4 w-4" /></button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 text-[12.5px]">
              {[
                { icon: Truck, t: "Free delivery", s: "Across Pune" },
                { icon: Shield, t: "2-year warranty", s: "Manufacturer" },
                { icon: Check, t: "Pro installation", s: "Available" },
              ].map((b) => (
                <div key={b.t} className="surface-card p-4">
                  <b.icon className="h-4 w-4 text-foreground" strokeWidth={1.5} />
                  <div className="mt-3 font-medium">{b.t}</div>
                  <div className="text-muted-foreground">{b.s}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 border-t border-border">
              <div className="flex gap-6 -mb-px">
                {(["overview", "specs", "shipping"] as const).map((t) => (
                  <button key={t} onClick={() => setTab(t)} className={"py-4 text-sm font-medium capitalize border-b-2 transition-colors " + (tab === t ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground")}>{t}</button>
                ))}
              </div>
              <div className="py-6 text-sm text-muted-foreground leading-relaxed">
                {tab === "overview" && <p>The {p.name} is engineered for round-the-clock performance with premium components, intelligent analytics and a hardened weatherproof body. Designed and tested in India.</p>}
                {tab === "specs" && (
                  <dl className="grid grid-cols-2 gap-x-8 gap-y-3 max-w-lg">
                    {p.specs.map((s) => (
                      <div key={s.label} className="flex justify-between border-b border-border/60 py-2">
                        <dt className="text-muted-foreground">{s.label}</dt>
                        <dd className="text-foreground font-medium">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                {tab === "shipping" && <p>Free shipping across Pune. India-wide delivery in 3–5 business days. Professional installation is bundled with site-survey based projects.</p>}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {related.length > 0 && (
        <Section>
          <SectionHeading eyebrow="Related" title="You may also like." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => <ProductCard key={r.id} p={r} />)}
          </div>
        </Section>
      )}
    </>
  );
}
