import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard, Package, Boxes, Warehouse, ShoppingCart, Users, Star, Ticket,
  Image as ImageIcon, LayoutTemplate, Sparkles, FileText, Mail, Settings,
  ShieldCheck, UserCircle, Search, Bell, LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/Vigilant_Techno_Services_logo.png";

const NAV_GROUPS: { label: string; items: { to: string; label: string; icon: typeof LayoutDashboard }[] }[] = [
  {
    label: "Overview",
    items: [{ to: "/admin", label: "Dashboard", icon: LayoutDashboard }],
  },
  {
    label: "Catalog",
    items: [
      { to: "/admin/products", label: "Products", icon: Package },
      { to: "/admin/categories", label: "Categories", icon: Boxes },
      { to: "/admin/inventory", label: "Inventory", icon: Warehouse },
    ],
  },
  {
    label: "Commerce",
    items: [
      { to: "/admin/orders", label: "Orders", icon: ShoppingCart },
      { to: "/admin/customers", label: "Customers", icon: Users },
      { to: "/admin/reviews", label: "Reviews", icon: Star },
      { to: "/admin/coupons", label: "Coupons", icon: Ticket },
    ],
  },
  {
    label: "Content",
    items: [
      { to: "/admin/media", label: "Media Library", icon: ImageIcon },
      { to: "/admin/hero", label: "Hero Manager", icon: Sparkles },
      { to: "/admin/sections", label: "Homepage Sections", icon: LayoutTemplate },
      { to: "/admin/blog", label: "Blog", icon: FileText },
      { to: "/admin/leads", label: "Contact Leads", icon: Mail },
    ],
  },
  {
    label: "System",
    items: [
      { to: "/admin/settings", label: "Website Settings", icon: Settings },
      { to: "/admin/roles", label: "User Roles", icon: ShieldCheck },
      { to: "/admin/profile", label: "Profile", icon: UserCircle },
    ],
  },
];

export function AdminShell() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="min-h-svh flex bg-background text-foreground selection:bg-brand/20">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-border/40 bg-surface sticky top-0 h-svh">
        <Link to="/" className="flex items-center gap-3 px-6 h-[72px] border-b border-border/40 hover:opacity-80 transition-opacity">
          <img src={logo} alt="Vigilant" className="h-7 w-auto object-contain" />
          <div className="text-[14px] font-semibold tracking-tight">Vigilant<span className="text-muted-foreground font-medium"> Admin</span></div>
        </Link>
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-8">
          {NAV_GROUPS.map((g) => (
            <div key={g.label}>
              <div className="px-3 pb-3 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">{g.label}</div>
              <div className="space-y-1">
                {g.items.map((i) => {
                  const active = pathname === i.to || (i.to !== "/admin" && pathname.startsWith(i.to));
                  return (
                    <Link
                      key={i.to}
                      to={i.to}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium transition-all duration-300",
                        active 
                          ? "bg-foreground text-background shadow-md shadow-foreground/5" 
                          : "text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
                      )}
                    >
                      <i.icon className="h-[18px] w-[18px]" strokeWidth={active ? 2 : 1.75} />
                      {i.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
        <div className="border-t border-border/40 p-4">
          <Link to="/" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14px] font-medium text-muted-foreground hover:bg-surface-elevated hover:text-foreground transition-colors">
            <LogOut className="h-[18px] w-[18px]" /> Exit to site
          </Link>
        </div>
      </aside>

      <div className="flex-1 min-w-0 flex flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-20 h-[72px] border-b border-border/40 bg-background/80 backdrop-blur-xl">
          <div className="h-full px-8 flex items-center justify-between gap-4">
            <div className="flex-1 max-w-md relative group">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-[18px] w-[18px] text-muted-foreground group-focus-within:text-brand transition-colors" />
              <input
                placeholder="Search products, orders, customers…"
                className="w-full rounded-full bg-surface border border-border/50 pl-11 pr-4 py-2.5 text-[14px] outline-none focus:border-brand/30 focus:ring-4 focus:ring-brand/10 transition-all shadow-sm"
              />
            </div>
            <div className="flex items-center gap-5">
              <button className="relative text-muted-foreground hover:text-foreground transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute 1 top-0 right-0.5 h-2 w-2 rounded-full bg-brand border-2 border-background" />
              </button>
              <div className="flex items-center gap-3 pl-5 border-l border-border/50">
                <div className="text-right hidden sm:block">
                  <div className="text-[13px] font-semibold leading-tight">Admin User</div>
                  <div className="text-[12px] text-muted-foreground leading-tight mt-0.5">Owner</div>
                </div>
                <div className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-background text-[13px] font-bold shadow-sm">
                  AD
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 p-6 lg:p-10 bg-surface/30">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export function AdminPageHeader({ title, subtitle, actions }: { title: string; subtitle?: string; actions?: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 animate-fade-up">
      <div>
        <h1 className="font-display text-3xl font-semibold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-2 text-[15px] text-muted-foreground max-w-xl leading-relaxed">{subtitle}</p>}
      </div>
      {actions && <div className="flex gap-3">{actions}</div>}
    </div>
  );
}

export function AdminCard({ children, className, delay = "" }: { children: React.ReactNode; className?: string, delay?: string }) {
  return (
    <div className={cn("surface-card p-6 animate-fade-up", delay, className)}>
      {children}
    </div>
  );
}

export function AdminPlaceholder({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <>
      <AdminPageHeader title={title} subtitle={subtitle} />
      <div className="grid gap-6 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <AdminCard key={i} delay={`delay-${(i * 100) % 500}`}>
            <div className="h-2.5 w-24 rounded-full bg-border" />
            <div className="mt-5 h-7 w-40 rounded-md bg-surface-elevated border border-border/50" />
            <div className="mt-4 h-3 w-full rounded bg-surface-elevated" />
            <div className="mt-2.5 h-3 w-3/4 rounded bg-surface-elevated" />
          </AdminCard>
        ))}
      </div>
    </>
  );
}
