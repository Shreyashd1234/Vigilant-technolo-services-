import { Link } from "@tanstack/react-router";
import { BRAND, NAV } from "@/lib/site-data";
import logoAsset from "@/assets/vigilant-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-surface">
      <div className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-foreground text-background">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <span className="font-display text-base font-semibold">{BRAND.name}</span>
            </div>
            <p className="mt-5 max-w-sm text-sm text-muted-foreground leading-relaxed">
              {BRAND.tagline} India's premium smart-security partner — installations, integration & lifetime AMC.
            </p>
            <p className="mt-6 text-xs text-muted-foreground">{BRAND.address}</p>
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
