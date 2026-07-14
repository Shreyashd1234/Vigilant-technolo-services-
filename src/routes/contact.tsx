import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, MapPin, Navigation, Phone, Star, ShieldAlert } from "lucide-react";
import { Btn, Section, SectionHeading } from "@/components/site/Primitives";
import { BRAND } from "@/lib/site-data";
import { ContextualWhatsApp, CallButton } from "@/components/site/CTAs";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo({
    title: "Contact Us — Vigilant Techno Services",
    description: "Get in touch for a free site survey, enterprise security consultation, or 24x7 support in Pune.",
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <Section>
        <SectionHeading eyebrow="Contact" title={<>Let's secure <span className="text-muted-foreground">what matters.</span></>} lead="Tell us about your premises. Our engineers will reply within 4 hours with the next steps." />
      </Section>

      <section className="container-x grid lg:grid-cols-[1.5fr_1fr] gap-10 pb-32">
        <div className="space-y-10">
           <form
             onSubmit={(e) => { e.preventDefault(); setSent(true); }}
             className="surface-card p-8 sm:p-10 border border-border/50 shadow-sm"
           >
             <div className="grid sm:grid-cols-2 gap-6">
               <Field label="Full name" name="name" />
               <Field label="Phone" name="phone" type="tel" />
               <Field label="Email" name="email" type="email" className="sm:col-span-2" />
               <Field label="Premises type" name="type" placeholder="e.g. Office, Warehouse, Villa" className="sm:col-span-2" />
               <div className="sm:col-span-2">
                 <label className="text-xs font-medium text-foreground uppercase tracking-widest">Project requirements</label>
                 <textarea name="msg" rows={5} placeholder="How can we help secure your space?" className="mt-2 w-full rounded-2xl border border-border/70 bg-surface px-4 py-3.5 text-sm outline-none transition-all focus:border-foreground focus:ring-1 focus:ring-foreground resize-none" />
               </div>
             </div>
             <div className="mt-10 flex items-center justify-between gap-4">
               <p className="text-xs text-muted-foreground max-w-[200px]">Your information is strictly confidential.</p>
               <Btn type="submit">{sent ? "Sent — we'll be in touch" : "Request Consultation"}</Btn>
             </div>
           </form>

           {/* Emergency & Support */}
           <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-red-500/10 border border-red-500/20 rounded-3xl p-8 flex flex-col gap-4">
                 <ShieldAlert className="h-8 w-8 text-red-500" />
                 <h4 className="font-semibold text-foreground">Emergency Support</h4>
                 <p className="text-sm text-muted-foreground">For critical system failures requiring immediate NOC assistance.</p>
                 <CallButton text="Call 24×7 NOC" className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white focus-visible:ring-red-500" />
              </div>
              <div className="surface-card p-8 flex flex-col gap-4 border border-border/50">
                 <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                 <h4 className="font-semibold text-foreground">Top Rated in {BRAND.city}</h4>
                 <p className="text-sm text-muted-foreground">Rated {BRAND.rating} on Google by leading facility managers and homeowners.</p>
                 <Btn variant="outline" className="mt-2 w-full" to="/reviews">Read Reviews</Btn>
              </div>
           </div>
        </div>

        <aside className="space-y-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/50 bg-surface">
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0436043445!2d73.79292671512402!3d18.5246035532585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{ border: 0, filter: "grayscale(1) contrast(1.2) opacity(0.8)" }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="absolute inset-0 h-full w-full pointer-events-none sm:pointer-events-auto"
            />
          </div>

          <InfoCard icon={Phone} label="Sales & Inquiries" value={BRAND.phone} href={`tel:${BRAND.phone}`} />
          
          <div className="surface-card p-6 border border-border/50">
             <div className="flex items-center gap-4 mb-6">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-foreground text-background"><Clock className="h-4 w-4" /></div>
                <div>
                   <div className="text-xs uppercase tracking-widest text-muted-foreground">Business Hours</div>
                   <div className="mt-1 text-sm font-medium">Mon-Sat, 9:30 AM – 7:00 PM</div>
                </div>
             </div>
             <div className="text-sm text-muted-foreground pt-4 border-t border-border/60">
                Service Areas: Baner, Hinjewadi, Wakad, Kothrud, Viman Nagar, Kharadi, PCMC and across Pune district.
             </div>
          </div>

          <div className="pt-4">
             <ContextualWhatsApp className="w-full justify-center" />
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", className, placeholder }: { label: string; name: string; type?: string; className?: string; placeholder?: string }) {
  return (
    <div className={className}>
      <label className="text-xs font-medium text-foreground uppercase tracking-widest" htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} className="mt-2 w-full rounded-2xl border border-border/70 bg-surface px-4 py-3.5 text-sm outline-none transition-all focus:border-foreground focus:ring-1 focus:ring-foreground" />
    </div>
  );
}

function InfoCard({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const Inner = (
    <div className="surface-card surface-card-hover p-6 flex items-center gap-4 border border-border/50">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-foreground text-background"><Icon className="h-4 w-4" /></div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="mt-1 text-sm font-medium truncate">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{Inner}</a> : Inner;
}
