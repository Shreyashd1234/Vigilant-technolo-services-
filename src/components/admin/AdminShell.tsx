import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard, Package, Boxes, Warehouse, ShoppingCart, Users, Star, Ticket,
  Image as ImageIcon, LayoutTemplate, Sparkles, FileText, Mail, Settings,
  ShieldCheck, UserCircle, Search, Bell, LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/vigilant-logo.png.asset.json";

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
    <div className="min-h-svh flex bg-[#0b0d10] text-white">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-white/10 bg-[#0b0d10]/95 sticky top-0 h-svh">
        <div className="flex items-center gap-2.5 px-5 h-16 border-b border-white/10">
          <img src={logoAsset.url} alt="Vigilant" className="h-8 w-auto object-contain" />
          <div className="text-[13px] font-semibold tracking-tight">Vigilant<span className="text-white/40"> Admin</span></div>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-5 space-y-6">
          {NAV_GROUPS.map((g) => (
            <div key={g.label}>
              <div className="px-3 pb-2 text-[10px] uppercase tracking-widest text-white/40">{g.label}</div>
              <div className="space-y-0.5">
                {g.items.map((i) => {
                  const active = pathname === i.to || (i.to !== "/admin" && pathname.startsWith(i.to));
                  return (
                    <Link
                      key={i.to}
                      to={i.to}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] transition-colors",
                        active ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      <i.icon className="h-4 w-4" strokeWidth={1.75} />
                      {i.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
        <div className="border-t border-white/10 p-3">
          <Link to="/" className="flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] text-white/60 hover:bg-white/5 hover:text-white">
            <LogOut className="h-4 w-4" /> Exit to site
          </Link>
        </div>
      </aside>

      <div className="flex-1 min-w-0 flex flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-20 h-16 border-b border-white/10 bg-[#0b0d10]/80 backdrop-blur-xl">
          <div className="h-full px-6 flex items-center gap-4">
            <div className="flex-1 max-w-md relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
              <input
                placeholder="Search products, orders, customers…"
                className="w-full rounded-full bg-white/[0.06] border border-white/10 pl-9 pr-4 py-2 text-[13px] outline-none focus:border-white/30"
              />
            </div>
            <button className="grid h-9 w-9 place-items-center rounded-full hover:bg-white/10 relative">
              <Bell className="h-4 w-4" />
              <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </button>
            <div className="flex items-center gap-2.5 rounded-full bg-white/[0.06] border border-white/10 pl-1 pr-3 py-1">
              <div className="grid h-7 w-7 place-items-center rounded-full bg-white text-black text-[11px] font-semibold">AR</div>
              <div className="text-[12px]">
                <div className="font-medium leading-tight">Admin</div>
                <div className="text-white/50 leading-tight">Owner</div>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 p-6 lg:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export function AdminPageHeader({ title, subtitle, actions }: { title: string; subtitle?: string; actions?: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
      <div>
        <h1 className="font-display text-3xl font-semibold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-2 text-sm text-white/60 max-w-xl">{subtitle}</p>}
      </div>
      {actions && <div className="flex gap-2">{actions}</div>}
    </div>
  );
}

export function AdminCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-2xl border border-white/10 bg-white/[0.03] p-6", className)}>
      {children}
    </div>
  );
}

export function AdminPlaceholder({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <>
      <AdminPageHeader title={title} subtitle={subtitle} />
      <div className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <AdminCard key={i}>
            <div className="h-2 w-20 rounded-full bg-white/10" />
            <div className="mt-4 h-6 w-32 rounded bg-white/[0.08]" />
            <div className="mt-3 h-3 w-full rounded bg-white/[0.05]" />
            <div className="mt-2 h-3 w-3/4 rounded bg-white/[0.05]" />
          </AdminCard>
        ))}
      </div>
    </>
  );
}
