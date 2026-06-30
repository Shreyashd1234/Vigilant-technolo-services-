import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Download, FileText, Heart, MapPin, Package, ShieldCheck, User } from "lucide-react";
import { Section } from "@/components/site/Primitives";
import { inr, PRODUCTS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/account")({
  head: () => ({ meta: [{ title: "Account — Vigilant" }, { name: "description", content: "Your account dashboard." }]}),
  component: AccountPage,
});

const TABS = [
  { id: "orders", label: "Orders", icon: Package },
  { id: "wishlist", label: "Wishlist", icon: Heart },
  { id: "addresses", label: "Addresses", icon: MapPin },
  { id: "warranty", label: "Warranty", icon: ShieldCheck },
  { id: "invoices", label: "Invoices", icon: FileText },
  { id: "profile", label: "Profile", icon: User },
] as const;

function AccountPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("orders");
  return (
    <Section>
      <div className="grid lg:grid-cols-[260px_1fr] gap-10">
        <aside className="surface-card p-5 h-fit">
          <div className="px-3 py-4 border-b border-border mb-3">
            <div className="text-xs text-muted-foreground">Signed in as</div>
            <div className="font-semibold mt-1">Aarav Kumar</div>
            <div className="text-xs text-muted-foreground">aarav@example.com</div>
          </div>
          <nav className="space-y-1">
            {TABS.map((t) => (
              <button key={t.id} onClick={() => setTab(t.id)} className={cn("w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors", tab === t.id ? "bg-foreground text-background" : "text-muted-foreground hover:bg-accent hover:text-foreground")}>
                <t.icon className="h-4 w-4" />{t.label}
              </button>
            ))}
            <Link to="/login" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-accent">Sign out</Link>
          </nav>
        </aside>

        <div>
          {tab === "orders" && <Orders />}
          {tab === "wishlist" && <Wishlist />}
          {tab === "addresses" && <Addresses />}
          {tab === "warranty" && <Warranty />}
          {tab === "invoices" && <Invoices />}
          {tab === "profile" && <Profile />}
        </div>
      </div>
    </Section>
  );
}

function Orders() {
  const orders = [
    { id: "VG-2026-2841", date: "Jun 22, 2026", status: "Delivered", total: 47970, items: 3 },
    { id: "VG-2026-2102", date: "May 14, 2026", status: "Installed", total: 18990, items: 1 },
    { id: "VG-2025-9981", date: "Dec 03, 2025", status: "Delivered", total: 32990, items: 1 },
  ];
  return (
    <div>
      <h1 className="font-display text-3xl font-semibold tracking-tight">Orders</h1>
      <div className="mt-6 space-y-3">
        {orders.map((o) => (
          <div key={o.id} className="surface-card p-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <div className="text-xs text-muted-foreground tracking-widest uppercase">{o.date}</div>
              <div className="mt-1 font-medium">#{o.id}</div>
              <div className="text-sm text-muted-foreground mt-1">{o.items} item{o.items > 1 ? "s" : ""}</div>
            </div>
            <span className="self-start rounded-full bg-brand-soft text-foreground px-3 py-1 text-xs font-medium">{o.status}</span>
            <div className="font-semibold">{inr(o.total)}</div>
            <button className="text-sm font-medium link-underline">Details →</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Wishlist() {
  return (
    <div>
      <h1 className="font-display text-3xl font-semibold tracking-tight">Wishlist</h1>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {PRODUCTS.slice(0, 4).map((p) => (
          <Link key={p.id} to="/products/$slug" params={{ slug: p.slug }} className="surface-card surface-card-hover p-5 flex gap-4 items-center">
            <div className="h-16 w-16 rounded-lg mesh-bg grid place-items-center shrink-0"><span className="font-display font-semibold text-foreground/40">VG</span></div>
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate">{p.name}</div>
              <div className="text-sm text-muted-foreground">{inr(p.price)}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Addresses() {
  const list = [
    { tag: "Home", line: "A-1404, Lodha Belmondo", city: "Pune 411033" },
    { tag: "Office", line: "Vigilant House, Baner", city: "Pune 411045" },
  ];
  return (
    <div>
      <h1 className="font-display text-3xl font-semibold tracking-tight">Addresses</h1>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {list.map((a) => (
          <div key={a.tag} className="surface-card p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">{a.tag}</div>
            <div className="mt-2 font-medium">{a.line}</div>
            <div className="text-sm text-muted-foreground">{a.city}</div>
            <div className="mt-4 flex gap-3 text-sm">
              <button className="link-underline">Edit</button>
              <button className="link-underline text-muted-foreground">Remove</button>
            </div>
          </div>
        ))}
        <button className="rounded-2xl border-2 border-dashed border-border p-6 text-sm text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors">+ Add new address</button>
      </div>
    </div>
  );
}

function Warranty() {
  return (
    <div>
      <h1 className="font-display text-3xl font-semibold tracking-tight">Warranty</h1>
      <div className="mt-6 space-y-3">
        {PRODUCTS.slice(0, 3).map((p, i) => (
          <div key={p.id} className="surface-card p-6 flex items-center gap-5">
            <ShieldCheck className="h-5 w-5 text-brand" />
            <div className="flex-1">
              <div className="font-medium">{p.name}</div>
              <div className="text-xs text-muted-foreground mt-0.5">Activated · expires Jun {2027 + i}</div>
            </div>
            <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-medium">Active</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Invoices() {
  return (
    <div>
      <h1 className="font-display text-3xl font-semibold tracking-tight">Invoices</h1>
      <div className="mt-6 space-y-3">
        {["VG-2026-2841", "VG-2026-2102", "VG-2025-9981"].map((id) => (
          <div key={id} className="surface-card p-5 flex items-center justify-between">
            <div>
              <div className="font-medium">#{id}</div>
              <div className="text-xs text-muted-foreground mt-0.5">Tax invoice</div>
            </div>
            <button className="inline-flex items-center gap-1.5 text-sm font-medium link-underline"><Download className="h-3.5 w-3.5" /> Download PDF</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h1 className="font-display text-3xl font-semibold tracking-tight">Profile</h1>
      <div className="mt-6 surface-card p-8 grid sm:grid-cols-2 gap-5 max-w-2xl">
        {["Full name", "Email", "Phone", "Company"].map((l) => (
          <div key={l}>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">{l}</label>
            <input className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" defaultValue={l === "Full name" ? "Aarav Kumar" : ""} />
          </div>
        ))}
        <div className="sm:col-span-2">
          <button className="rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium">Save changes</button>
        </div>
      </div>
    </div>
  );
}
