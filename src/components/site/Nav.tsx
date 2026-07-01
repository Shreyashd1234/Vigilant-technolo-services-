import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { BRAND, NAV } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import logo from "@/assets/Vigilant_Techno_Services_logo.png";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const routerState = useRouterState();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setMobileMenuOpen(false);
  }, [routerState.location.pathname]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled 
            ? "py-3 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
            : "py-6 bg-transparent"
        )}
      >
        <div className="container-x flex items-center justify-between">
          
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 relative z-50">
            <img src={logo} alt={BRAND.name} className="h-8 w-auto" />
            <span className="font-display font-semibold text-lg tracking-tight hidden sm:block">{BRAND.name}</span>
          </Link>

          {/* Desktop Links (No Dropdowns) */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-[15px] font-medium text-muted-foreground hover:text-foreground transition-colors"
                activeProps={{ className: "!text-foreground font-semibold" }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-4 relative z-50">
            <a 
              href={`tel:${BRAND.phone}`}
              className="hidden sm:flex h-11 px-7 items-center justify-center rounded-full bg-foreground text-background text-[15px] font-semibold hover:bg-foreground/90 transition-colors"
            >
              Call Expert
            </a>
            <button 
              className="lg:hidden h-11 w-11 flex items-center justify-center rounded-full bg-surface border border-border/50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl transition-all duration-500 lg:hidden flex flex-col justify-center px-8",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-6 text-center">
           {NAV.map(item => (
              <Link 
                 key={item.label}
                 to={item.to}
                 className="text-3xl font-display font-semibold text-foreground/80 hover:text-brand transition-colors"
                 activeProps={{ className: "!text-brand" }}
              >
                 {item.label}
              </Link>
           ))}
           <a 
              href={`tel:${BRAND.phone}`}
              className="mt-8 mx-auto h-14 px-8 flex items-center justify-center rounded-full bg-foreground text-background text-lg font-semibold w-full max-w-xs"
           >
              Call {BRAND.phone}
           </a>
        </div>
      </div>
    </>
  );
}
