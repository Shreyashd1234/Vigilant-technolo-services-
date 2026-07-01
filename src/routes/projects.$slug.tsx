import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PROJECTS, PRODUCTS } from "@/lib/site-data";
import { Section } from "@/components/site/Primitives";
import { ArrowLeft, Clock, MapPin, Network, Target, Trophy, Building2, HardHat, Cog } from "lucide-react";
import { ContextualWhatsApp, CallButton } from "@/components/site/CTAs";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find(p => p.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return seo({
      title: `${loaderData.name} Case Study — Vigilant Techno Services`,
      description: `Security implementation case study for ${loaderData.name}. ${loaderData.scope}`,
      path: `/projects/${loaderData.slug}`,
      image: loaderData.image,
    });
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const p = Route.useLoaderData();
  const eq = PRODUCTS.filter(prod => p.equipmentUsed?.includes(prod.slug));
  
  return (
    <>
      {/* Editorial Hero */}
      <section className="relative min-h-[90svh] flex flex-col justify-end pb-32 bg-foreground text-background overflow-hidden pt-24">
        <img src={p.image} alt={p.name} className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-luminosity scale-105 animate-hero-zoom" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        <div className="container-x relative z-10 w-full animate-fade-up">
           <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white mb-8 transition-colors">
             <ArrowLeft className="h-4 w-4" /> Back to Case Studies
           </Link>
           <div className="flex items-center gap-3 mb-6">
             <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-white">
               <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Case Study
             </span>
           </div>
           <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.1] max-w-5xl text-white">
             Securing {p.name}
           </h1>
           <p className="mt-8 text-2xl text-white/80 max-w-3xl leading-relaxed font-light">{p.scope}</p>
        </div>
      </section>

      {/* Quick Facts Sidebar Layout */}
      <Section className="bg-surface border-b border-border/60">
         <div className="grid lg:grid-cols-[1fr_300px] gap-16">
            
            {/* The Narrative */}
            <div className="space-y-24">
               {/* Client Background */}
               <div>
                  <div className="flex items-center gap-4 mb-8">
                     <div className="h-12 w-12 rounded-xl bg-foreground text-background grid place-items-center"><Building2 className="h-6 w-6" /></div>
                     <h2 className="text-3xl font-semibold tracking-tight">The Client Background</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed text-balance">{p.clientBackground}</p>
               </div>

               {/* Business Requirement & Challenges */}
               <div className="grid sm:grid-cols-2 gap-12 p-10 rounded-[2.5rem] bg-background border border-border/60 shadow-sm">
                  <div>
                     <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><Target className="h-5 w-5 text-brand" /> The Requirement</h3>
                     <p className="text-muted-foreground leading-relaxed">{p.businessRequirement}</p>
                  </div>
                  <div>
                     <h3 className="text-xl font-semibold mb-4 flex items-center gap-2"><Target className="h-5 w-5 text-red-500" /> The Challenge</h3>
                     <p className="text-muted-foreground leading-relaxed">{p.securityChallenges}</p>
                  </div>
               </div>

               {/* Network Design */}
               <div>
                  <div className="flex items-center gap-4 mb-8">
                     <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand grid place-items-center"><Network className="h-6 w-6" /></div>
                     <h2 className="text-3xl font-semibold tracking-tight">Engineering the Network</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed text-balance">{p.networkDesign}</p>
                  
                  {p.gallery && p.gallery[0] && (
                     <img src={p.gallery[0]} alt="Network Design" className="mt-10 w-full rounded-[2rem] aspect-[21/9] object-cover border border-border/50" />
                  )}
               </div>

               {/* Installation Journey */}
               <div>
                  <div className="flex items-center gap-4 mb-8">
                     <div className="h-12 w-12 rounded-xl bg-foreground text-background grid place-items-center"><HardHat className="h-6 w-6" /></div>
                     <h2 className="text-3xl font-semibold tracking-tight">The Installation Journey</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed text-balance">{p.installationJourney}</p>
               </div>

               {/* Results & Benefits */}
               <div className="grid sm:grid-cols-2 gap-12">
                  <div>
                     <div className="flex items-center gap-4 mb-6">
                        <div className="h-10 w-10 rounded-full bg-brand/10 text-brand grid place-items-center"><Trophy className="h-5 w-5" /></div>
                        <h3 className="text-2xl font-semibold tracking-tight">Results Achieved</h3>
                     </div>
                     <p className="text-muted-foreground leading-relaxed">{p.resultsAchieved}</p>
                  </div>
                  <div>
                     <div className="flex items-center gap-4 mb-6">
                        <div className="h-10 w-10 rounded-full bg-green-500/10 text-green-600 grid place-items-center"><Trophy className="h-5 w-5" /></div>
                        <h3 className="text-2xl font-semibold tracking-tight">Customer Benefit</h3>
                     </div>
                     <p className="text-muted-foreground leading-relaxed">{p.customerBenefits}</p>
                  </div>
               </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="relative">
               <div className="sticky top-32 space-y-8">
                  {/* Quick Facts */}
                  <div className="surface-card p-8 border border-border/60">
                     <h4 className="text-sm uppercase tracking-widest font-semibold text-muted-foreground mb-6">Project Facts</h4>
                     <dl className="space-y-5 text-sm">
                        <div className="flex items-center gap-3">
                           <MapPin className="h-4 w-4 text-brand shrink-0" />
                           <span className="font-medium text-foreground">{p.name}, Pune</span>
                        </div>
                        <div className="flex items-center gap-3">
                           <Building2 className="h-4 w-4 text-brand shrink-0" />
                           <span className="font-medium text-foreground">{p.type}</span>
                        </div>
                        <div className="flex items-center gap-3">
                           <Clock className="h-4 w-4 text-brand shrink-0" />
                           <span className="font-medium text-foreground">{p.timeline} Completion</span>
                        </div>
                     </dl>
                  </div>

                  {/* Equipment Used */}
                  {eq.length > 0 && (
                     <div className="surface-card p-8 border border-border/60">
                        <h4 className="text-sm uppercase tracking-widest font-semibold text-muted-foreground mb-6 flex items-center gap-2"><Cog className="h-4 w-4" /> Equipment Used</h4>
                        <div className="space-y-4">
                           {eq.map(product => (
                              <Link key={product.slug} to="/products/$slug" params={{ slug: product.slug }} className="flex items-center gap-3 group">
                                 <img src={product.image} alt={product.name} className="h-12 w-12 rounded-lg object-contain bg-background border border-border/50 group-hover:border-brand transition-colors p-1" />
                                 <div>
                                    <div className="text-sm font-semibold text-foreground group-hover:text-brand transition-colors">{product.name}</div>
                                    <div className="text-[11px] text-muted-foreground uppercase">{product.category}</div>
                                 </div>
                              </Link>
                           ))}
                        </div>
                     </div>
                  )}

                  {/* CTA */}
                  <div className="bg-foreground text-background rounded-3xl p-8 shadow-xl">
                     <h4 className="font-semibold text-lg mb-2 text-white">Need a similar deployment?</h4>
                     <p className="text-sm text-white/70 mb-6">Our enterprise architects can design a custom network for your facility.</p>
                     <div className="flex flex-col gap-3">
                        <CallButton text="Book Architect Visit" className="w-full bg-white text-black hover:bg-white/90" />
                        <ContextualWhatsApp message={`Hi, I read the ${p.name} case study and want to discuss a similar enterprise deployment.`} text="Discuss Requirements" className="w-full justify-center border-white/20 hover:bg-white/10 text-white" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Section>

      {/* Large Image Gallery */}
      {p.gallery && p.gallery.length > 1 && (
         <Section>
            <div className="text-center mb-16">
               <span className="text-xs uppercase tracking-widest text-brand font-semibold">Gallery</span>
               <h2 className="text-3xl font-semibold mt-2">Installation Highlights</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
               {p.gallery.slice(1).map((img, i) => (
                  <img key={i} src={img} alt={`Installation ${i + 1}`} className="w-full rounded-3xl aspect-[16/10] object-cover hover:scale-[1.02] transition-transform duration-700 shadow-sm" loading="lazy" />
               ))}
            </div>
         </Section>
      )}
    </>
  );
}
