import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Btn, Section, SectionHeading } from "@/components/site/Primitives";
import { BRAND } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact — Vigilant Technologies" },
    { name: "description", content: "Book a free site survey or call our team in Pune." },
    { property: "og:title", content: "Contact — Vigilant Technologies" },
  ]}),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <Section>
        <SectionHeading eyebrow="Contact" title={<>Let's secure <span className="text-muted-foreground">what matters.</span></>} lead="Tell us about your premises. An engineer will reply within 24 hours with next steps." />
      </Section>

      <section className="container-x grid lg:grid-cols-[1.2fr_1fr] gap-10 pb-32">
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="surface-card p-8 sm:p-10"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Full name" name="name" />
            <Field label="Phone" name="phone" type="tel" />
            <Field label="Email" name="email" type="email" className="sm:col-span-2" />
            <Field label="Premises type" name="type" placeholder="Home, office, warehouse…" className="sm:col-span-2" />
            <div className="sm:col-span-2">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Project details</label>
              <textarea name="msg" rows={5} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 resize-none" />
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">By submitting, you agree to our privacy policy.</p>
            <Btn type="submit">{sent ? "Sent — we'll be in touch" : "Send Request"}</Btn>
          </div>
        </form>

        <aside className="space-y-3">
          <InfoCard icon={Phone} label="Call us" value={BRAND.phone} href={`tel:${BRAND.phone}`} />
          <InfoCard icon={Mail} label="Email" value={BRAND.email} href={`mailto:${BRAND.email}`} />
          <InfoCard icon={MessageCircle} label="WhatsApp" value="Quick reply" href={`https://wa.me/919800000000`} />
          <InfoCard icon={MapPin} label="Office" value={BRAND.address} />
          <div className="surface-card mesh-bg aspect-[4/3] grid place-items-center overflow-hidden">
            <div className="text-center">
              <MapPin className="h-6 w-6 mx-auto text-foreground/40" />
              <p className="mt-3 text-sm text-muted-foreground">{BRAND.city}</p>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", className, placeholder }: { label: string; name: string; type?: string; className?: string; placeholder?: string }) {
  return (
    <div className={className}>
      <label className="text-xs font-medium text-muted-foreground uppercase tracking-widest" htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30" />
    </div>
  );
}

function InfoCard({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const Inner = (
    <div className="surface-card surface-card-hover p-6 flex items-start gap-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-foreground text-background"><Icon className="h-4 w-4" /></div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="mt-1 text-sm font-medium truncate">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{Inner}</a> : Inner;
}
