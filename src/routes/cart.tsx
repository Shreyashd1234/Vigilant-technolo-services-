import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Btn, Section, SectionHeading } from "@/components/site/Primitives";
import { inr, PRODUCTS } from "@/lib/site-data";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Cart — Vigilant" }, { name: "description", content: "Your shopping cart." }]}),
  component: CartPage,
});

function CartPage() {
  // Visual demo — preload 3 items
  const [items, setItems] = useState(
    PRODUCTS.slice(0, 3).map((p) => ({ ...p, qty: 1 }))
  );
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal > 0 ? 0 : 0;
  const total = subtotal + shipping;

  return (
    <Section>
      <SectionHeading eyebrow="Cart" title="Your selection." />
      {items.length === 0 ? (
        <div className="mt-16 surface-card p-16 text-center">
          <p className="text-muted-foreground">Your cart is empty.</p>
          <Btn to="/products" className="mt-6">Browse products</Btn>
        </div>
      ) : (
        <div className="mt-12 grid lg:grid-cols-[1.6fr_1fr] gap-10">
          <ul className="space-y-3">
            {items.map((it) => (
              <li key={it.id} className="surface-card p-5 flex gap-5 items-center">
                <div className="h-20 w-20 shrink-0 rounded-xl mesh-bg grid place-items-center">
                  <span className="font-display font-semibold text-foreground/40">VG</span>
                </div>
                <div className="flex-1 min-w-0">
                  <Link to="/products/$slug" params={{ slug: it.slug }} className="font-medium hover:underline truncate block">{it.name}</Link>
                  <div className="text-xs text-muted-foreground mt-1">{it.category}</div>
                </div>
                <div className="inline-flex items-center rounded-full border border-border">
                  <button onClick={() => setItems((arr) => arr.map((x) => x.id === it.id ? { ...x, qty: Math.max(1, x.qty - 1) } : x))} className="grid h-8 w-8 place-items-center"><Minus className="h-3 w-3" /></button>
                  <span className="w-8 text-center text-sm">{it.qty}</span>
                  <button onClick={() => setItems((arr) => arr.map((x) => x.id === it.id ? { ...x, qty: x.qty + 1 } : x))} className="grid h-8 w-8 place-items-center"><Plus className="h-3 w-3" /></button>
                </div>
                <div className="w-28 text-right font-semibold">{inr(it.price * it.qty)}</div>
                <button onClick={() => setItems((arr) => arr.filter((x) => x.id !== it.id))} aria-label="Remove" className="grid h-9 w-9 place-items-center rounded-full hover:bg-accent"><Trash2 className="h-4 w-4" /></button>
              </li>
            ))}
          </ul>

          <aside className="surface-card p-7 h-fit sticky top-24">
            <h3 className="font-display text-lg font-semibold">Order summary</h3>
            <dl className="mt-6 space-y-3 text-sm">
              <Row label="Subtotal" value={inr(subtotal)} />
              <Row label="Shipping" value={shipping === 0 ? "Free" : inr(shipping)} />
              <Row label="GST" value="Inclusive" muted />
            </dl>
            <div className="my-6 h-px bg-border" />
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-muted-foreground">Total</span>
              <span className="font-display text-2xl font-semibold">{inr(total)}</span>
            </div>
            <input placeholder="Coupon code" className="mt-6 w-full rounded-full border border-border bg-background px-4 py-2.5 text-sm" />
            <Btn to="/checkout" className="mt-4 w-full">Proceed to Checkout</Btn>
            <Link to="/products" className="mt-4 block text-center text-sm text-muted-foreground link-underline">Continue shopping</Link>
          </aside>
        </div>
      )}
    </Section>
  );
}

function Row({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="flex justify-between">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className={muted ? "text-muted-foreground" : ""}>{value}</dd>
    </div>
  );
}
