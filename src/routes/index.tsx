import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Layers, Cpu, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SplitSection, StealthBadge } from "@/components/site/primitives";
import { HoldingVisual } from "@/components/site/HoldingVisual";
import { seo } from "@/lib/seo";
import { AuroraBackground, SplitText, ShinyText, GradientText, CountUp, SpotlightCard, TiltedCard, Magnet, ScrollVelocity, DecryptedText, BlurText } from "@/components/reactbits";

export const Route = createFileRoute("/")({
  head: () => seo("Empowering India's Digital Future", "Aura Dynamics Private Limited is a multi-service digital aggregator holding enterprise building scalable technology backbones across PAN-India.", "/"),
  component: Home,
});

const METRICS: [string, number, string, string][] = [
  ["01", 28, "+", "States in PAN-India vision"],
  ["02", 400, "+", "Tier-2 & Tier-3 cities targeted"],
  ["03", 3, "", "Core service pillars"],
  ["04", 100, "%", "Institutional governance"],
];

const PILLARS = [
  { icon: Layers, title: "Digital Aggregation", body: "Unified multi-utility services delivered under one scalable API umbrella — a single contract, a single integration surface, and a consistent quality standard across every vertical.", points: ["Unified service API", "Multi-utility orchestration", "Single settlement layer"] },
  { icon: Cpu, title: "Technology Innovation", body: "High-throughput, zero-trust cloud infrastructure engineered for massive concurrency, regional failover, and auditable data handling from day one.", points: ["Zero-trust by default", "Horizontal auto-scaling", "Regional failover"] },
  { icon: Users, title: "Inclusive Growth", body: "Socio-economic empowerment that connects local gig workers and micro-enterprises to formal digital demand, steady income, and fair participation.", points: ["Gig-worker onboarding", "Micro-enterprise enablement", "Grassroots upskilling"] },
];

function Home() {
  const [tab, setTab] = useState(0);
  const P = PILLARS[tab] ?? PILLARS[0];
  if (!P) return null;
  return (
    <>
      <section className="relative overflow-hidden border-b">
        <div className="hairline-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />
        <AuroraBackground />
        <div className="container-x relative grid items-center gap-14 py-16 lg:grid-cols-10 lg:py-24">
          <Reveal className="lg:col-span-6">
            <p className="kicker mb-6"><DecryptedText text="Aura Dynamics Private Limited · Est. 2026" /></p>
            <h1 className="display text-[40px] sm:text-6xl lg:text-[68px]">
              <SplitText text="Empowering India's Digital Future Through" /> <span className="font-serif font-normal italic"><GradientText>Scalable</GradientText></span> <SplitText text="Enterprise Frameworks" delay={0.4} />
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Aura Dynamics Private Limited operates as a premier multi-service digital aggregator holding enterprise, architecting high-availability technological backbones and mass-market digital solutions across PAN-India.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Magnet><Button asChild variant="navy" size="lg"><Link to="/about-us">Explore Corporate Vision <ArrowRight /></Link></Button></Magnet>
              <Magnet><Button asChild variant="outline" size="lg"><Link to="/contact-us">Institutional Inquiries</Link></Button></Magnet>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-4"><TiltedCard><HoldingVisual /></TiltedCard></Reveal>
        </div>
      </section>

      <section className="border-b bg-card">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4">
          {METRICS.map(([n, a, suf, b], i) => (
            <div key={n} className={`py-8 pr-4 ${i % 2 ? "pl-6 border-l" : ""} lg:pl-6 ${i ? "lg:border-l" : "lg:pl-0"} ${i > 1 ? "border-t lg:border-t-0" : ""}`}>
              <p className="font-mono text-[11px] text-gold">{n}</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight"><CountUp to={a} suffix={suf} /></p>
              <p className="text-sm text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b py-10 text-navy/80">
        <ScrollVelocity items={["Digital Aggregation", "Zero-Trust Cloud", "Inclusive Growth", "PAN-India Mesh", "Institutional Governance"]} />
      </section>

      <SplitSection kicker="Strategic Overview" title="Driving Innovation, Delivering Operational Excellence">
        <div className="space-y-8 text-[17px] leading-[1.8] text-muted-foreground">
          <Reveal><p><span className="text-navy font-medium">India's next billion digital transactions will not originate in metros alone.</span> They will come from Tier-2 and Tier-3 cities, where demand is rising faster than the infrastructure built to serve it.</p></Reveal>
          <Reveal><p>Aura Dynamics exists to close that gap. We bridge regional markets with metropolitan-grade technological infrastructure — bringing the same reliability, security, and service quality enjoyed in India's largest cities to every district we operate in.</p></Reveal>
          <Reveal><p>As a holding corporation, we build the shared backbone once — identity, payments orchestration, logistics routing, and compliance — and let each venture compound on it. The result is lower cost-to-serve, faster rollouts, and institutional discipline at every layer.</p></Reveal>
          <Reveal>
            <div className="grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2">
              {[["Regional reach", "Designed for district-level density"], ["Metro-grade stack", "Enterprise SLAs, zero-trust security"]].map(([a, b]) => (
                <div key={a} className="bg-background p-6"><p className="font-semibold text-navy">{a}</p><p className="mt-1 text-sm">{b}</p></div>
              ))}
            </div>
          </Reveal>
        </div>
      </SplitSection>

      <section className="border-b">
        <div className="container-x py-20 lg:py-28">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div><p className="kicker mb-4">Core Pillars</p><h2 className="display max-w-xl text-3xl sm:text-4xl lg:text-[44px]"><BlurText text="Three disciplines. One operating backbone." /></h2></div>
          </div>
          <SpotlightCard className="grid lg:grid-cols-12">
            <div className="flex flex-col border-b lg:col-span-4 lg:border-b-0 lg:border-r" role="tablist">
              {PILLARS.map((p, i) => (
                <button key={p.title} role="tab" aria-selected={tab === i} onClick={() => setTab(i)}
                  className={`group flex items-center justify-between border-b px-6 py-6 text-left transition-colors last:border-b-0 ${tab === i ? "bg-navy text-primary-foreground" : "hover:bg-muted"}`}>
                  <span className="flex items-center gap-4">
                    <span className={`font-mono text-xs ${tab === i ? "text-gold" : "text-muted-foreground"}`}>0{i + 1}</span>
                    <span className="text-lg font-semibold tracking-tight">{p.title}</span>
                  </span>
                  <ArrowRight className={`h-4 w-4 transition-transform ${tab === i ? "text-gold translate-x-0" : "-translate-x-1 opacity-0 group-hover:opacity-60"}`} />
                </button>
              ))}
            </div>
            <div key={tab} className="animate-in fade-in slide-in-from-bottom-2 grid gap-10 p-8 duration-500 lg:col-span-8 lg:grid-cols-5 lg:p-12">
              <div className="lg:col-span-3">
                <P.icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                <h3 className="display mt-6 text-3xl">{P.title}</h3>
                <p className="mt-5 leading-relaxed text-muted-foreground">{P.body}</p>
              </div>
              <ul className="space-y-0 self-end lg:col-span-2">
                {P.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-3 border-t py-4 text-sm font-medium"><span className="h-1.5 w-1.5 rounded-full bg-gold" />{pt}</li>
                ))}
              </ul>
            </div>
          </SpotlightCard>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy text-primary-foreground">
        <AuroraBackground dark />
        <div className="container-x relative grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-24">
          <Reveal className="lg:col-span-8">
            <StealthBadge />
            <h2 className="display mt-8 text-3xl sm:text-4xl lg:text-5xl">Proprietary incubation, <span className="font-serif font-normal italic"><GradientText>in quiet development.</GradientText></span></h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
              Our primary consumer-facing multi-service ecosystem is currently undergoing architectural hardening and sandbox testing. Public rollout is scheduled under an independent brand identity.
            </p>
            <Link to="/ventures" className="mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 text-sm font-medium text-gold hover:gap-3 transition-all">
              View <ShinyText>Strategic Ventures</ShinyText> <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="relative mx-auto flex h-56 w-56 items-center justify-center lg:col-span-4" aria-hidden="true">
            {[0, 0.8, 1.6].map((d) => (
              <span key={d} className="animate-radar absolute h-24 w-24 rounded-full border border-gold/60" style={{ animationDelay: `${d}s`, animationDuration: "3.2s" }} />
            ))}
            <span className="absolute h-56 w-56 rounded-full border border-ink-border" />
            <span className="absolute h-36 w-36 rounded-full border border-ink-border" />
            <span className="h-4 w-4 rounded-full bg-gold shadow-[0_0_24px_var(--gold)]" />
          </div>
        </div>
      </section>
    </>
  );
}
