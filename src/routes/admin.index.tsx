import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, DollarSign, Package, ShoppingCart, Users, TrendingUp } from "lucide-react";
import { AdminCard, AdminPageHeader } from "@/components/admin/AdminShell";

const STATS = [
  { icon: DollarSign, label: "Revenue (MTD)", value: "₹ 24.8L", delta: "+18.2%", trend: "up" },
  { icon: ShoppingCart, label: "Orders", value: "312", delta: "+9.4%", trend: "up" },
  { icon: Users, label: "New customers", value: "84", delta: "+12.1%", trend: "up" },
  { icon: Package, label: "Low-stock SKUs", value: "7", delta: "-2", trend: "down" },
];

const RECENT = [
  { id: "#VG-10248", customer: "Rohan Mehta", total: "₹ 42,900", status: "Paid" },
  { id: "#VG-10247", customer: "Anita Sharma", total: "₹ 18,990", status: "Processing" },
  { id: "#VG-10246", customer: "Iqbal Khan", total: "₹ 1,24,500", status: "Shipped" },
  { id: "#VG-10245", customer: "Priya Nair", total: "₹ 7,490", status: "Paid" },
  { id: "#VG-10244", customer: "Karan Shah", total: "₹ 32,990", status: "Refunded" },
];

export const Route = createFileRoute("/admin/")({
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      <AdminPageHeader
        title="Dashboard Overview"
        subtitle="Real-time analytics and store performance at a glance."
        actions={
          <button className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-[14px] font-semibold hover:bg-foreground/90 transition-colors btn-magnetic shadow-sm">
            Export Report <ArrowUpRight className="h-4 w-4" />
          </button>
        }
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <AdminCard key={s.label} delay={`delay-${i * 100}`} className="surface-card-hover group cursor-default">
            <div className="flex items-start justify-between">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-surface border border-border/50 text-muted-foreground group-hover:text-brand group-hover:border-brand/20 transition-colors">
                <s.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <span className={`inline-flex items-center gap-1 text-[12px] font-semibold px-2 py-1 rounded-md ${
                s.trend === 'up' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
              }`}>
                {s.trend === 'up' ? <TrendingUp className="h-3 w-3" /> : null}
                {s.delta}
              </span>
            </div>
            <div className="mt-6 font-display text-3xl font-bold tracking-tight text-foreground">{s.value}</div>
            <div className="text-[14px] font-medium text-muted-foreground mt-1.5">{s.label}</div>
          </AdminCard>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <AdminCard className="lg:col-span-2 delay-300">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-[16px] font-semibold">Revenue</h2>
              <p className="text-[13px] text-muted-foreground mt-1">Daily performance over the last 30 days</p>
            </div>
            <span className="text-[13px] font-medium bg-surface px-3 py-1 rounded-full border border-border">₹ (INR)</span>
          </div>
          <div className="flex items-end gap-2 h-[220px]">
            {Array.from({ length: 30 }).map((_, i) => {
              const h = 20 + Math.round(Math.abs(Math.sin(i * 0.6)) * 70 + (i % 5) * 5);
              return (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm bg-brand/20 hover:bg-brand transition-colors relative group"
                  style={{ height: `${h}%` }}
                >
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-[11px] font-bold px-2 py-1 rounded pointer-events-none transition-opacity whitespace-nowrap z-10">
                    ₹{h},000
                  </div>
                </div>
              );
            })}
          </div>
        </AdminCard>

        <AdminCard className="delay-400">
          <h2 className="text-[16px] font-semibold mb-6">Traffic Sources</h2>
          <div className="space-y-6">
            {[
              { name: "Direct", pct: 44, color: "bg-brand" },
              { name: "Google Organic", pct: 31, color: "bg-violet-500" },
              { name: "Referral", pct: 15, color: "bg-blue-500" },
              { name: "Instagram", pct: 10, color: "bg-rose-500" },
            ].map((t) => (
              <div key={t.name}>
                <div className="flex justify-between text-[14px] mb-2 font-medium">
                  <span>{t.name}</span>
                  <span className="text-muted-foreground">{t.pct}%</span>
                </div>
                <div className="h-2 rounded-full bg-surface border border-border overflow-hidden">
                  <div className={`h-full ${t.color}`} style={{ width: `${t.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </AdminCard>
      </div>

      <AdminCard className="mt-6 delay-500 overflow-hidden p-0">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-[16px] font-semibold">Recent Orders</h2>
            <p className="text-[13px] text-muted-foreground mt-1">Latest transactions from your store.</p>
          </div>
          <button className="text-[13px] font-medium text-brand hover:text-brand-soft transition-colors">View All Orders &rarr;</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[14px]">
            <thead className="bg-surface/50 text-left text-muted-foreground text-[12px] font-semibold uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Order ID</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Total</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {RECENT.map((r) => (
                <tr key={r.id} className="hover:bg-surface/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-foreground">{r.id}</td>
                  <td className="px-6 py-4 font-medium">{r.customer}</td>
                  <td className="px-6 py-4 text-muted-foreground">{r.total}</td>
                  <td className="px-6 py-4">
                    <span className={
                      "inline-flex items-center rounded-full px-3 py-1 text-[12px] font-semibold border " +
                      (r.status === "Paid" ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400" :
                       r.status === "Shipped" ? "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-400" :
                       r.status === "Processing" ? "bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400" :
                       "bg-rose-500/10 text-rose-600 border-rose-500/20 dark:text-rose-400")
                    }>{r.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminCard>
    </div>
  );
}
