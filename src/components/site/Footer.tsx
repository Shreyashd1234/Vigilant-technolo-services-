import { Link } from "@tanstack/react-router";
import { ShieldCheck, Award } from "lucide-react";
import { BRAND, NAV } from "@/lib/site-data";
import logoUrl from "@/assets/Vigilant_Techno_Services_logo.png";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      <div className="container-x py-24 relative z-10">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[2.5fr_1fr_1fr_1fr_1.5fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logoUrl} alt={BRAND.name} className="h-12 w-auto object-contain" loading="lazy" />
            </div>
            <p className="mt-5 max-w-sm text-sm text-muted-foreground leading-relaxed">
              {BRAND.tagline} India's premium smart-security partner — installations, integration & lifetime AMC.
            </p>
            <p className="mt-6 text-xs text-muted-foreground">{BRAND.address}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background px-3 py-1.5 text-[10px] font-medium uppercase tracking-widest text-foreground shadow-sm">
                <ShieldCheck className="h-3 w-3 text-brand" /> Certified Secure
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background px-3 py-1.5 text-[10px] font-medium uppercase tracking-widest text-foreground shadow-sm">
                <Award className="h-3 w-3 text-brand" /> Genuine Hardware
              </div>
            </div>
          </div>

          <FooterCol title="Explore" items={NAV.slice(0, 4)} />
          <FooterCol title="Company" items={NAV.slice(4)} />

          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li><a href={`tel:${BRAND.phone}`} className="hover:text-foreground text-muted-foreground link-underline">{BRAND.phone}</a></li>
              <li><a href={`mailto:${BRAND.email}`} className="hover:text-foreground text-muted-foreground link-underline">{BRAND.email}</a></li>
              <li className="text-muted-foreground">{BRAND.city}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Stay Updated</h4>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              Security insights & product updates, once a month.
            </p>
            <form className="mt-4 flex rounded-full border border-border/70 bg-surface-elevated p-1 shadow-sm focus-within:ring-2 focus-within:ring-brand/30 transition-all">
              <input type="email" placeholder="Email address" className="min-w-0 flex-1 bg-transparent px-4 text-[13px] outline-none" required />
              <button type="submit" className="rounded-full bg-foreground px-4 py-2 text-[13px] font-medium text-background hover:bg-foreground/90 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Warranty</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: readonly { label: string; to: string }[] }) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-widest text-muted-foreground">{title}</h4>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map((i) => (
          <li key={i.to}>
            <Link to={i.to} className="text-muted-foreground hover:text-foreground link-underline">{i.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
