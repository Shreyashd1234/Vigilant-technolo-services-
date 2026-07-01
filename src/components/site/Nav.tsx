import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { NAV, BRAND } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/vigilant-logo.png.asset.json";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      )}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-foreground text-background">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <span className="font-display text-[15px] font-semibold tracking-tight">
            {BRAND.short}<span className="text-muted-foreground font-normal">.tech</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => {
            const active = pathname === item.to || (item.to !== "/" && pathname.startsWith(item.to));
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "link-underline text-[13.5px] font-medium transition-colors",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <button className="hidden sm:grid h-9 w-9 place-items-center rounded-full hover:bg-accent transition-colors" aria-label="Search">
            <Search className="h-4 w-4" />
          </button>
          <Link to="/account" className="hidden sm:grid h-9 w-9 place-items-center rounded-full hover:bg-accent transition-colors" aria-label="Account">
            <User className="h-4 w-4" />
          </Link>
          <Link to="/cart" className="grid h-9 w-9 place-items-center rounded-full hover:bg-accent transition-colors" aria-label="Cart">
            <ShoppingBag className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center rounded-full bg-foreground text-background px-4 py-2 text-[13px] font-medium btn-magnetic ml-2"
          >
            Book a Survey
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-9 w-9 place-items-center rounded-full hover:bg-accent"
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl animate-fade-up">
          <div className="container-x py-6 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link key={item.to} to={item.to} className="py-3 text-base font-medium border-b border-border/40 last:border-0">
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="mt-4 inline-flex items-center justify-center rounded-full bg-foreground text-background px-4 py-3 text-sm font-medium">
              Book a Free Site Survey
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
