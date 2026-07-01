import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, DollarSign, Package, ShoppingCart, Users } from "lucide-react";
import { AdminCard, AdminPageHeader } from "@/components/admin/AdminShell";

const STATS = [
  { icon: DollarSign, label: "Revenue (MTD)", value: "₹ 24.8L", delta: "+18.2%" },
  { icon: ShoppingCart, label: "Orders", value: "312", delta: "+9.4%" },
  { icon: Users, label: "New customers", value: "84", delta: "+12.1%" },
  { icon: Package, label: "Low-stock SKUs", value: "7", delta: "-2" },
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
    <>
      <AdminPageHeader
        title="Dashboard"
        subtitle="A calm, real-time overview of Vigilant's storefront and operations."
        actions={
          <button className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-[13px] font-medium">
            Export report <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s) => (
          <AdminCard key={s.label}>
            <div className="flex items-start justify-between">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10">
                <s.icon className="h-4 w-4" strokeWidth={1.75} />
              </div>
              <span className="text-[11px] text-emerald-400 font-medium">{s.delta}</span>
            </div>
            <div className="mt-6 font-display text-2xl font-semibold">{s.value}</div>
            <div className="text-[12px] text-white/50 mt-1">{s.label}</div>
          </AdminCard>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <AdminCard className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-semibold">Revenue · last 30 days</h2>
            <span className="text-[11px] text-white/50">₹ · daily</span>
          </div>
          <div className="flex items-end gap-1.5 h-52">
            {Array.from({ length: 30 }).map((_, i) => {
              const h = 20 + Math.round(Math.abs(Math.sin(i * 0.6)) * 70 + (i % 5) * 5);
              return (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-white/10 to-white/70"
                  style={{ height: `${h}%` }}
                />
              );
            })}
          </div>
        </AdminCard>

        <AdminCard>
          <h2 className="text-sm font-semibold mb-4">Traffic sources</h2>
          <div className="space-y-4">
            {[
              { name: "Direct", pct: 44 },
              { name: "Google organic", pct: 31 },
              { name: "Referral", pct: 15 },
              { name: "Instagram", pct: 10 },
            ].map((t) => (
              <div key={t.name}>
                <div className="flex justify-between text-[12px] mb-1.5">
                  <span>{t.name}</span>
                  <span className="text-white/50">{t.pct}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full bg-white/80" style={{ width: `${t.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </AdminCard>
      </div>

      <AdminCard className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold">Recent orders</h2>
          <button className="text-[12px] text-white/60 hover:text-white">View all</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead className="text-left text-white/40 text-[11px] uppercase tracking-widest">
              <tr>
                <th className="py-3 font-medium">Order</th>
                <th className="py-3 font-medium">Customer</th>
                <th className="py-3 font-medium">Total</th>
                <th className="py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {RECENT.map((r) => (
                <tr key={r.id}>
                  <td className="py-3.5 font-medium">{r.id}</td>
                  <td className="py-3.5 text-white/80">{r.customer}</td>
                  <td className="py-3.5">{r.total}</td>
                  <td className="py-3.5">
                    <span className={
                      "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium " +
                      (r.status === "Paid" ? "bg-emerald-500/15 text-emerald-300" :
                       r.status === "Shipped" ? "bg-blue-500/15 text-blue-300" :
                       r.status === "Processing" ? "bg-amber-500/15 text-amber-300" :
                       "bg-rose-500/15 text-rose-300")
                    }>{r.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminCard>
    </>
  );
}
