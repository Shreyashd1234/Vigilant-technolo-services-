import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Primitives";
import { TESTIMONIALS, BRAND } from "@/lib/site-data";
import { Star, User } from "lucide-react";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/reviews")({
  head: () => seo({
    title: "Customer Reviews — Vigilant Technologies",
    description: `Read why businesses and homes across ${BRAND.city} rate us ${BRAND.rating} on Google.`,
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <Section>
        <div className="max-w-4xl">
          <SectionHeading eyebrow="Customer Reviews" title={<>Rated <span className="text-brand">{BRAND.rating}</span> by Pune's top facility managers.</>} lead="We don't just sell boxes. We build relationships through impeccable service and rapid support. Here is what our clients say." />
          
          <div className="mt-10 flex items-center gap-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />)}
            </div>
            <div className="text-lg font-medium text-foreground">Verified Google Reviews</div>
          </div>
        </div>
      </Section>

      <section className="container-x pb-32">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="surface-card p-8 break-inside-avoid border border-border/50">
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground bg-accent px-2 py-1 rounded-md">{t.type}</span>
              </div>
              <blockquote className="text-[17px] leading-relaxed font-medium tracking-tight text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-border/60 pt-6">
                {t.avatar ? (
                   <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full object-cover ring-2 ring-background shadow-sm bg-surface" loading="lazy" />
                ) : (
                   <div className="h-11 w-11 rounded-full ring-2 ring-background shadow-sm bg-surface flex items-center justify-center text-muted-foreground">
                      <User className="h-5 w-5" />
                   </div>
                )}
                <div className="text-sm">
                  <div className="font-semibold text-foreground/90">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
