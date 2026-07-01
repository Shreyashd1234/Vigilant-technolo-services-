import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Primitives";
import { PROJECTS, SOLUTIONS, INDUSTRIES } from "@/lib/site-data";
import { useState } from "react";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () => seo({
    title: "Installation Gallery — Vigilant Technologies",
    description: "View our recent security installations across homes, commercial spaces, and industrial facilities in Pune.",
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [filter, setFilter] = useState("All");

  // Collect all images from data sources to form a rich gallery
  const allImages = [
    ...PROJECTS.map(p => ({ url: p.image, category: "Projects", alt: p.name })),
    ...SOLUTIONS.flatMap(s => s.gallery.map(g => ({ url: g, category: "Installations", alt: s.name }))),
    ...INDUSTRIES.map(i => ({ url: i.image, category: "Commercial", alt: i.name })),
  ];
  
  // Deduplicate by URL
  const uniqueImages = Array.from(new Map(allImages.map(item => [item.url, item])).values());
  const categories = ["All", "Projects", "Installations", "Commercial"];
  const filtered = filter === "All" ? uniqueImages : uniqueImages.filter(i => i.category === filter);

  return (
    <>
      <Section>
        <div className="max-w-4xl">
          <SectionHeading eyebrow="Gallery" title="See our work." lead="Clean wiring, perfect camera alignment, and impeccable rack management. We take pride in the details." />
          
          <div className="mt-12 flex flex-wrap gap-2">
            {categories.map(c => (
              <button 
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${filter === c ? 'bg-foreground text-background' : 'bg-surface-elevated text-muted-foreground hover:text-foreground border border-border/60'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </Section>

      <section className="container-x pb-32">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl break-inside-avoid bg-surface">
              <img src={img.url} alt={img.alt} loading="lazy" className="w-full h-auto object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="text-white text-sm font-medium tracking-wide">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
