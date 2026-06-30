import { Link } from "@tanstack/react-router";
import { Heart, ShoppingBag } from "lucide-react";
import { inr, type Product } from "@/lib/site-data";

export function ProductCard({ p }: { p: Product }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: p.slug }}
      className="surface-card surface-card-hover group block overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface mesh-bg">
        <div className="absolute inset-0 grid place-items-center">
          <div className="h-32 w-32 rounded-2xl bg-foreground/5 backdrop-blur-sm border border-border/40 grid place-items-center transition-transform duration-700 group-hover:scale-110">
            <span className="font-display text-2xl font-semibold text-foreground/40">VG</span>
          </div>
        </div>
        {p.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-foreground text-background px-2.5 py-1 text-[10px] uppercase tracking-wider font-medium">
            {p.badge}
          </span>
        )}
        <button
          aria-label="Wishlist"
          onClick={(e) => e.preventDefault()}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-background/80 backdrop-blur border border-border/60 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-3.5 w-3.5" />
        </button>
      </div>
      <div className="p-5">
        <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{p.category}</div>
        <h3 className="mt-1.5 text-[15px] font-medium leading-snug">{p.name}</h3>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-base font-semibold">{inr(p.price)}</div>
            {p.mrp > p.price && <div className="text-xs text-muted-foreground line-through">{inr(p.mrp)}</div>}
          </div>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-background opacity-0 group-hover:opacity-100 transition-opacity">
            <ShoppingBag className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
