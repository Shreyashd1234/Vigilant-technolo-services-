import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Btn, Section } from "@/components/site/Primitives";
import { ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — Vigilant" }, { name: "description", content: "Sign in to your Vigilant account." }]}),
  component: LoginPage,
});

function LoginPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 items-stretch max-w-5xl mx-auto">
        <div className="surface-card mesh-bg p-10 hidden lg:flex flex-col justify-between min-h-[520px]">
          <ShieldCheck className="h-8 w-8" />
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight leading-tight">Your security, in one place.</h2>
            <p className="mt-3 text-sm text-muted-foreground">Track installations, download invoices and monitor your sites from a single dashboard.</p>
          </div>
        </div>

        <div className="surface-card p-10">
          <h1 className="font-display text-3xl font-semibold tracking-tight">
            {mode === "signin" ? "Welcome back." : "Create your account."}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {mode === "signin" ? "Sign in to your Vigilant account." : "It takes less than a minute."}
          </p>

          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            {mode === "signup" && (
              <Input label="Full name" type="text" />
            )}
            <Input label="Email" type="email" />
            <Input label="Password" type="password" />
            <Btn type="submit" className="w-full mt-2">{mode === "signin" ? "Sign in" : "Create account"}</Btn>
          </form>

          <div className="my-7 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="h-px flex-1 bg-border" /> or <div className="h-px flex-1 bg-border" />
          </div>

          <button className="w-full rounded-full border border-border py-2.5 text-sm font-medium hover:bg-accent">Continue with Google</button>

          <p className="mt-8 text-sm text-center text-muted-foreground">
            {mode === "signin" ? "New to Vigilant?" : "Already have an account?"}{" "}
            <button onClick={() => setMode(mode === "signin" ? "signup" : "signin")} className="text-foreground font-medium link-underline">
              {mode === "signin" ? "Create an account" : "Sign in"}
            </button>
          </p>
          <p className="mt-2 text-xs text-center text-muted-foreground">
            <Link to="/account" className="link-underline">Preview account dashboard →</Link>
          </p>
        </div>
      </div>
    </Section>
  );
}

function Input({ label, type }: { label: string; type: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input type={type} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30" />
    </div>
  );
}
