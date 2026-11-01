import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Layers, Cpu, Users, Shield, Terminal, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SplitSection, StealthBadge } from "@/components/site/primitives";
import { HoldingVisual } from "@/components/site/HoldingVisual";
import { seo } from "@/lib/seo";
import {
  AuroraBackground,
  InteractiveGridPattern,
  SplitText,
  ShinyText,
  GradientText,
  CountUp,
  SpotlightCard,
  TiltedCard,
  Magnet,
  ScrollVelocity,
  BlurText,
  MorphingKicker,
  BorderBeam,
  Crosshair,
} from "@/components/reactbits";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "Empowering India's Digital Future",
      "Aura Dynamics Private Limited is a multi-service digital aggregator holding enterprise building scalable technology backbones across PAN-India.",
      "/",
    ),
  component: Home,
});

const METRICS: [string, number, string, string, string][] = [
  ["01", 28, "+", "States in PAN-India Vision", "National distribution perimeter"],
  ["02", 400, "+", "Tier-2 & Tier-3 Cities", "High-density urban market reach"],
  ["03", 3, "", "Core Operating Disciplines", "Aggregation, Innovation, Inclusion"],
  ["04", 100, "%", "Institutional Governance", "Statutory audit & women-led board"],
];

const PILLARS = [
  {
    id: "aggregation",
    icon: Layers,
    title: "Digital Aggregation",
    tagline: "One unified contract. Universal multi-utility execution.",
    body: "Unified multi-utility services delivered under one scalable API umbrella — a single contract, a single integration surface, and a consistent quality standard across every consumer vertical.",
    points: [
      "Unified service API contracts",
      "Multi-utility request orchestration",
      "Real-time settlement & reconciliation layer",
      "Strict merchant & delivery SLAs",
    ],
    metric: "14,200 req/sec",
    metricLabel: "Peak Concurrency Target",
  },
  {
    id: "technology",
    icon: Cpu,
    title: "Technology Innovation",
    tagline: "Engineered for national scale with zero-trust security.",
    body: "High-throughput, zero-trust cloud infrastructure engineered for massive concurrency, regional failover, and auditable data handling compliant with Indian statutory standards from day one.",
    points: [
      "Zero-trust mTLS default security",
      "Horizontal auto-scaling edge pods",
      "Regional database replication & failover",
      "Encrypted ledger with audit trails",
    ],
    metric: "< 18ms",
    metricLabel: "Edge Gateway Latency",
  },
  {
    id: "inclusion",
    icon: Users,
    title: "Inclusive Growth",
    tagline: "Empowering grassroots partners and local livelihoods.",
    body: "Socio-economic empowerment that bridges local gig professionals and grassroots micro-enterprises directly into formal digital demand, guaranteed earnings, and institutional banking rails.",
    points: [
      "Direct gig-worker onboarding rails",
      "Intermediary-free micro-enterprise enablement",
      "Grassroots digital quality certifications",
      "Transparent digital earnings documentation",
    ],
    metric: "100% Direct",
    metricLabel: "Formalized Partner Payouts",
  },
];

function Home() {
  const [tab, setTab] = useState(0);
  const P = PILLARS[tab] ?? PILLARS[0]!;

  return (
    <>
      {/* ---------- HERO SECTION ---------- */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <InteractiveGridPattern className="opacity-60" />
        <AuroraBackground />

        {/* Ambient Top System Status */}
        <div className="border-b border-border/70 bg-card/40 backdrop-blur-sm">
          <div className="container-x flex items-center justify-between py-2 text-[11px] font-mono text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="hidden sm:inline">HOLDING REGISTRY:</span> AURA DYNAMICS (CIN: U72900BR2026PTCXXXXXX)
            </span>
            <span className="text-navy font-medium">HQ: PATNA, BIHAR // PAN-INDIA MESH</span>
          </div>
        </div>

        <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <Reveal className="lg:col-span-7">
            <div className="mb-6">
              <MorphingKicker
                items={[
                  "Aura Dynamics Private Limited · Est. 2026",
                  "PAN-India Digital Aggregation Mesh",
                  "Tier-2 & Tier-3 Infrastructure Focus",
                  "Proudly Women-Led & Governed Enterprise",
                ]}
              />
            </div>

            <h1 className="display text-[38px] leading-[1.06] tracking-tight sm:text-5xl lg:text-[66px] text-navy">
              <SplitText text="Empowering India's Digital Future Through" />{" "}
              <span className="font-serif font-normal italic tracking-normal text-gold">
                <GradientText>Scalable</GradientText>
              </span>{" "}
              <SplitText text="Enterprise Frameworks" delay={0.35} />
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Aura Dynamics Private Limited operates as a premier multi-service digital aggregator holding enterprise, architecting high-availability technological backbones and mass-market digital solutions across PAN-India.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Magnet strength={0.3}>
                <Button asChild variant="navy" size="lg" className="shadow-sm">
                  <Link to="/about-us">
                    Explore Corporate Vision <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </Magnet>
              <Magnet strength={0.3}>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact-us">Institutional Inquiries</Link>
                </Button>
              </Magnet>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-border pt-6 text-xs font-mono text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-gold" />
                <span>Statutory Compliance Audited</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-gold" />
                <span>Zero-Trust Infrastructure</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-gold" />
                <span>99.98% High Availability</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5">
            <TiltedCard>
              <HoldingVisual />
            </TiltedCard>
          </Reveal>
        </div>
      </section>

      {/* ---------- HIGH-TRUST METRICS CONTROL STRIP ---------- */}
      <section className="relative border-b border-border bg-card">
        <div className="container-x grid grid-cols-2 divide-y divide-border sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          {METRICS.map(([n, val, suf, label, sub], i) => (
            <div key={n} className="relative p-6 lg:p-8">
              <Crosshair className="top-2 left-2" />
              <Crosshair className="bottom-2 right-2" />
              <p className="font-mono text-[11px] font-semibold text-gold">[{n}]</p>
              <p className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-navy">
                <CountUp to={val} suffix={suf} />
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">{label}</p>
              <p className="mt-1 text-xs text-muted-foreground leading-normal">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- VELOCITY TICKER ---------- */}
      <section className="border-b border-border py-8 bg-muted/40">
        <ScrollVelocity
          items={[
            "Digital Aggregation",
            "Zero-Trust Cloud",
            "Inclusive Growth",
            "PAN-India Mesh",
            "Institutional Governance",
            "Women-Led Enterprise",
          ]}
        />
      </section>

      {/* ---------- STRATEGIC OVERVIEW ---------- */}
      <SplitSection kicker="Strategic Overview" title="Driving Innovation, Delivering Operational Excellence">
        <div className="space-y-8 text-[17px] leading-[1.8] text-muted-foreground">
          <Reveal>
            <p className="text-xl leading-relaxed">
              <span className="text-navy font-semibold">
                India's next billion digital transactions will not originate in metros alone.
              </span>{" "}
              They will come from Tier-2 and Tier-3 cities, where demand is rising faster than the infrastructure built to serve it.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Aura Dynamics exists to close that gap. We bridge regional markets with metropolitan-grade technological infrastructure — bringing the same reliability, security, and service quality enjoyed in India's largest cities to every district we operate in.
            </p>
          </Reveal>
          <Reveal>
            <p>
              As a holding corporation, we build the shared backbone once — identity, payments orchestration, logistics routing, and compliance — and let each venture compound on it. The result is lower cost-to-serve, faster rollouts, and institutional discipline at every layer.
            </p>
          </Reveal>
          <Reveal>
            <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
              {[
                ["Regional Density", "Engineered for district-level concurrency and local network variances."],
                ["Metro-Grade Stack", "Zero-trust microservices, instant settlement rails, and automated failover."],
              ].map(([head, desc]) => (
                <div key={head} className="relative bg-background p-6">
                  <Crosshair className="top-2 right-2" />
                  <p className="font-semibold text-navy text-base">{head}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </SplitSection>

      {/* ---------- CORE PILLARS BENTO SECTION ---------- */}
      <section className="relative border-b border-border bg-background py-20 lg:py-28">
        <div className="container-x">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="mb-3 inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <p className="kicker">Core Operating Pillars</p>
              </div>
              <h2 className="display max-w-2xl text-3xl sm:text-4xl lg:text-[46px] text-navy">
                <BlurText text="Three disciplines. One operating backbone." />
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Our holding framework separates shared infrastructure from specialized market execution, driving compounding returns.
            </p>
          </div>

          <SpotlightCard className="grid lg:grid-cols-12 shadow-sm">
            {/* Tab navigation list */}
            <div className="flex flex-col border-b border-border lg:col-span-4 lg:border-b-0 lg:border-r" role="tablist">
              {PILLARS.map((p, i) => (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={tab === i}
                  onClick={() => setTab(i)}
                  className={`group relative flex items-center justify-between border-b border-border p-6 text-left transition-colors last:border-b-0 outline-none ${
                    tab === i ? "bg-navy text-primary-foreground" : "hover:bg-muted/70 text-foreground"
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <span className={`font-mono text-xs font-semibold ${tab === i ? "text-gold" : "text-muted-foreground"}`}>
                      0{i + 1}
                    </span>
                    <span className="text-lg font-semibold tracking-tight">{p.title}</span>
                  </span>
                  <ArrowRight
                    className={`h-4 w-4 transition-transform duration-200 ${
                      tab === i ? "text-gold translate-x-0" : "-translate-x-1 opacity-0 group-hover:opacity-60"
                    }`}
                  />
                  {tab === i && <span className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />}
                </button>
              ))}
            </div>

            {/* Tab detail panel */}
            <div
              key={tab}
              className="animate-in fade-in slide-in-from-bottom-2 grid gap-10 p-8 duration-500 lg:col-span-8 lg:grid-cols-5 lg:p-12"
            >
              <div className="lg:col-span-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold border border-gold/30">
                  <P.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="display mt-6 text-3xl text-navy">{P.title}</h3>
                <p className="mt-2 font-mono text-xs text-gold uppercase tracking-wider">{P.tagline}</p>
                <p className="mt-5 leading-relaxed text-muted-foreground text-[15px]">{P.body}</p>

                <div className="mt-8 rounded-xl border border-navy/10 bg-muted/40 p-4">
                  <p className="font-mono text-xs text-muted-foreground">{P.metricLabel}</p>
                  <p className="mt-1 font-mono text-2xl font-bold text-navy">{P.metric}</p>
                </div>
              </div>

              <div className="self-end lg:col-span-2">
                <p className="mb-4 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  Architectural Deliverables
                </p>
                <ul className="space-y-0">
                  {P.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-center gap-3 border-t border-border py-3.5 text-sm font-medium text-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* ---------- STEALTH R&D INCUBATOR (DARK SECTION) ---------- */}
      <section className="relative overflow-hidden bg-navy text-primary-foreground py-20 lg:py-28">
        <AuroraBackground dark />
        <InteractiveGridPattern dark className="opacity-40" />

        <div className="container-x relative grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <StealthBadge />

            <h2 className="display mt-8 text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Proprietary incubation,{" "}
              <span className="font-serif font-normal italic text-gold">
                <GradientText>in quiet development.</GradientText>
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
              Our primary consumer-facing multi-service ecosystem is currently undergoing architectural hardening and sandbox testing. Public rollout is scheduled under an independent brand identity.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 max-w-xl">
              <div className="rounded-xl border border-ink-border bg-ink/60 p-5 backdrop-blur-sm">
                <p className="font-mono text-[11px] text-gold uppercase tracking-wider">CURRENT MILESTONE</p>
                <p className="mt-2 text-base font-semibold text-ink-foreground">Sandbox Security Audits</p>
                <p className="mt-1 text-xs text-ink-muted">Stage 02 of 03 in progress</p>
              </div>
              <div className="rounded-xl border border-ink-border bg-ink/60 p-5 backdrop-blur-sm">
                <p className="font-mono text-[11px] text-gold uppercase tracking-wider">GOVERNANCE STANCE</p>
                <p className="mt-2 text-base font-semibold text-ink-foreground">Confidential Rollout</p>
                <p className="mt-1 text-xs text-ink-muted">Independent brand deployment</p>
              </div>
            </div>

            <div className="mt-10">
              <Link
                to="/ventures"
                className="group inline-flex items-center gap-2 border-b border-gold pb-1 text-sm font-semibold text-gold transition-all hover:gap-3"
              >
                Inspect Strategic Ventures Pipeline <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>

          {/* Animated Mission Radar Beacon */}
          <div className="relative mx-auto flex h-64 w-64 items-center justify-center lg:col-span-4" aria-hidden="true">
            <BorderBeam size={220} duration={6} colorFrom="var(--gold)" />
            {[0, 0.9, 1.8].map((d) => (
              <span
                key={d}
                className="animate-radar absolute h-28 w-28 rounded-full border border-gold/60"
                style={{ animationDelay: `${d}s`, animationDuration: "3.2s" }}
              />
            ))}
            <span className="absolute h-60 w-60 rounded-full border border-ink-border" />
            <span className="absolute h-40 w-40 rounded-full border border-ink-border" />
            <span className="absolute h-20 w-20 rounded-full border border-gold/30" />
            <span className="h-4 w-4 rounded-full bg-gold shadow-[0_0_28px_var(--gold)]" />
            <span className="absolute bottom-2 font-mono text-[10px] text-gold tracking-widest uppercase">
              SANDBOX R&amp;D ACTIVE
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
