import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { Btn, Section } from "@/components/site/Primitives";
import { inr, PRODUCTS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — Vigilant" }, { name: "description", content: "Secure checkout." }]}),
  component: CheckoutPage,
});

const STEPS = ["Address", "Delivery", "Payment", "Confirm"] as const;

function CheckoutPage() {
  const [step, setStep] = useState(0);
  const [placed, setPlaced] = useState(false);
  const items = PRODUCTS.slice(0, 3).map((p) => ({ ...p, qty: 1 }));
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  if (placed) {
    return (
      <Section>
        <div className="surface-card p-16 text-center max-w-xl mx-auto">
          <div className="grid h-14 w-14 mx-auto place-items-center rounded-full bg-foreground text-background">
            <Check className="h-6 w-6" />
          </div>
          <h1 className="mt-8 font-display text-3xl font-semibold tracking-tight">Order placed</h1>
          <p className="mt-3 text-muted-foreground">Order ID #VG-2026-{Math.floor(Math.random() * 9000 + 1000)} — we've emailed your invoice.</p>
          <div className="mt-10 flex gap-3 justify-center">
            <Btn to="/account">View Orders</Btn>
            <Btn variant="outline" to="/products">Continue Shopping</Btn>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <ol className="flex items-center gap-3 text-xs">
        {STEPS.map((s, i) => (
          <li key={s} className="flex items-center gap-3">
            <span className={cn("grid h-7 w-7 place-items-center rounded-full text-[11px] font-semibold", i <= step ? "bg-foreground text-background" : "bg-muted text-muted-foreground")}>{i + 1}</span>
            <span className={cn("font-medium", i === step ? "text-foreground" : "text-muted-foreground")}>{s}</span>
            {i < STEPS.length - 1 && <span className="h-px w-8 bg-border mx-2" />}
          </li>
        ))}
      </ol>

      <div className="mt-10 grid lg:grid-cols-[1.6fr_1fr] gap-10">
        <div className="surface-card p-8 sm:p-10">
          {step === 0 && <AddressStep />}
          {step === 1 && <DeliveryStep />}
          {step === 2 && <PaymentStep />}
          {step === 3 && (
            <div>
              <h2 className="font-display text-2xl font-semibold">Confirm order</h2>
              <p className="mt-3 text-sm text-muted-foreground">Please review your details and confirm. We'll send installation scheduling separately.</p>
            </div>
          )}
          <div className="mt-10 flex justify-between">
            <button onClick={() => setStep((s) => Math.max(0, s - 1))} className="text-sm text-muted-foreground hover:text-foreground">{step > 0 ? "← Back" : <Link to="/cart">← Back to cart</Link>}</button>
            {step < 3 ? <Btn onClick={() => setStep((s) => s + 1)}>Continue</Btn> : <Btn onClick={() => setPlaced(true)}>Place Order</Btn>}
          </div>
        </div>

        <aside className="surface-card p-7 h-fit sticky top-24">
          <h3 className="font-display font-semibold">Summary</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {items.map((i) => (
              <li key={i.id} className="flex justify-between gap-3">
                <span className="text-muted-foreground truncate">{i.name} × {i.qty}</span>
                <span>{inr(i.price * i.qty)}</span>
              </li>
            ))}
          </ul>
          <div className="my-5 h-px bg-border" />
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-muted-foreground">Total</span>
            <span className="font-display text-2xl font-semibold">{inr(total)}</span>
          </div>
        </aside>
      </div>
    </Section>
  );
}

function AddressStep() {
  return (
    <>
      <h2 className="font-display text-2xl font-semibold tracking-tight">Shipping address</h2>
      <div className="mt-8 grid sm:grid-cols-2 gap-5">
        {["Full name", "Phone", "Email", "Pincode", "Address line", "City", "State"].map((l) => (
          <div key={l} className={l === "Address line" ? "sm:col-span-2" : ""}>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">{l}</label>
            <input className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30" />
          </div>
        ))}
      </div>
    </>
  );
}

function DeliveryStep() {
  return (
    <>
      <h2 className="font-display text-2xl font-semibold tracking-tight">Delivery method</h2>
      <div className="mt-8 space-y-3">
        {[
          { t: "Standard", d: "3–5 business days", p: "Free" },
          { t: "Express", d: "1–2 business days", p: "₹ 499" },
          { t: "Pro Installation", d: "Includes site visit & setup", p: "Quoted" },
        ].map((o, i) => (
          <label key={o.t} className="surface-card surface-card-hover p-5 flex items-center gap-4 cursor-pointer">
            <input type="radio" name="delivery" defaultChecked={i === 0} className="accent-foreground" />
            <div className="flex-1">
              <div className="font-medium">{o.t}</div>
              <div className="text-xs text-muted-foreground">{o.d}</div>
            </div>
            <div className="text-sm font-medium">{o.p}</div>
          </label>
        ))}
      </div>
    </>
  );
}

function PaymentStep() {
  return (
    <>
      <h2 className="font-display text-2xl font-semibold tracking-tight">Payment</h2>
      <div className="mt-8 space-y-3">
        {["UPI", "Credit / Debit Card", "Net Banking", "Cash on Delivery"].map((m, i) => (
          <label key={m} className="surface-card surface-card-hover p-5 flex items-center gap-4 cursor-pointer">
            <input type="radio" name="pay" defaultChecked={i === 0} className="accent-foreground" />
            <span className="font-medium">{m}</span>
          </label>
        ))}
      </div>
    </>
  );
}
