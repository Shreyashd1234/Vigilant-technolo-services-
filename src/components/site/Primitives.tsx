import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Section({ className, children, ...props }: ComponentProps<"section">) {
  return (
    <section {...props} className={cn("container-x py-24 sm:py-32", className)}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-surface-elevated px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow, title, lead, align = "left",
}: { eyebrow?: string; title: ReactNode; lead?: ReactNode; align?: "left" | "center" }) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <div className="mb-5"><Eyebrow>{eyebrow}</Eyebrow></div>}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">{title}</h2>
      {lead && <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{lead}</p>}
    </div>
  );
}

type BtnProps = {
  to?: string;
  href?: string;
  variant?: "primary" | "ghost" | "outline";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Btn({ to, href, variant = "primary", children, className, onClick, type }: BtnProps) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all btn-magnetic";
  const styles = {
    primary: "bg-foreground text-background hover:bg-foreground/90",
    outline: "border border-border bg-surface-elevated text-foreground hover:border-foreground/40",
    ghost: "text-foreground hover:bg-accent",
  }[variant];
  const cls = cn(base, styles, className);
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button type={type ?? "button"} onClick={onClick} className={cls}>{children}</button>;
}

export function ArrowLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
      {children}
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
