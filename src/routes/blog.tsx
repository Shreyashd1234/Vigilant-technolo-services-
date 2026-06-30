import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Primitives";
import { BLOG } from "@/lib/site-data";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [
    { title: "Insights — Vigilant Technologies" },
    { name: "description", content: "Field notes from India's smart-security frontier — analytics, AMC, biometrics and beyond." },
    { property: "og:title", content: "Insights — Vigilant Technologies" },
  ]}),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <Section>
        <SectionHeading eyebrow="Insights" title="Field notes from the security frontier." lead="Practical reading for facility managers, IT leads and homeowners building a serious security setup." />
      </Section>
      <Section className="!pt-0">
        <div className="grid gap-4">
          {BLOG.map((post) => (
            <a key={post.slug} href="#" className="surface-card surface-card-hover group p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="text-xs text-muted-foreground tracking-widest uppercase md:w-40 shrink-0">{post.date} · {post.read}</div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-snug">{post.title}</h3>
                <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
