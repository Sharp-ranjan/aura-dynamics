import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Lock, ShieldCheck, Terminal, Layers, ArrowRight, Zap, RefreshCw } from "lucide-react";
import { PageHeader, Reveal, SplitSection, StealthBadge } from "@/components/site/primitives";
import { seo } from "@/lib/seo";
import { BorderBeam, Crosshair, SpotlightCard, Magnet, AuroraBackground, InteractiveGridPattern } from "@/components/reactbits";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/ventures")({
  head: () =>
    seo(
      "Strategic Ventures",
      "How Aura Dynamics incubates proprietary digital ventures for mass scale, including its stealth multi-service consumer ecosystem.",
      "/ventures",
    ),
  component: Ventures,
});

const STAGES = [
  {
    n: "Stage 01",
    t: "Architecture & Data Rails",
    s: "done",
    desc: "Foundational microservices topology, multi-utility API contracts, and database schema hardening completed.",
  },
  {
    n: "Stage 02",
    t: "Sandbox Testing & Security Audits",
    s: "active",
    desc: "Currently executing end-to-end sandbox load tests, multi-region failover verification, and zero-trust security audits.",
  },
  {
    n: "Stage 03",
    t: "Market Unveiling",
    s: "locked",
    desc: "Confidential public rollout under an independent consumer-facing brand identity across designated launch clusters.",
  },
] as const;

const THESIS = [
  {
    id: "01",
    title: "Proprietary Backbones",
    desc: "We engineer and hold core infrastructure — unified identity, payments orchestration, logistics routing, and automated telemetry — at the parent level, so ventures launch on hardened, battle-tested rails.",
  },
  {
    id: "02",
    title: "Financing Early R&D",
    desc: "The holding company funds intensive early-stage research directly from internal treasury, shielding venture engineering teams from short-term commercial pressure and premature compromises.",
  },
  {
    id: "03",
    title: "Shielding Intellectual Property",
    desc: "Pre-launch algorithms, proprietary routing meshes, and supply-chain contracts are kept under strict confidentiality, formal copyright filings, and controlled institutional disclosures.",
  },
];

function Ventures() {
  return (
    <>
      <PageHeader
        crumb="Ventures"
        kicker="Portfolio & Incubation"
        title="Our Strategic Ventures — Incubating Disruptive Digital Solutions for Mass Scale."
        lead="Aura Dynamics operates as an incubation engine and technological parent corporation. We design, fund, and harden high-volume platforms to serve essential everyday needs across India."
      />

      {/* ---------- HOLDING & INCUBATION THESIS ---------- */}
      <SplitSection
        kicker="Holding & Incubation Thesis"
        title="Build the backbone once. Let every venture compound on it."
      >
        <div className="space-y-6">
          <p className="text-[17px] leading-[1.8] text-muted-foreground">
            Conventional venture builders rush half-finished codebases to market. At Aura Dynamics, we follow an institutional thesis: core technological infrastructure must be architected with bank-grade security and limitless horizontal elasticity before public debut.
          </p>

          <div className="grid gap-4 sm:grid-cols-1">
            {THESIS.map((item) => (
              <SpotlightCard key={item.id} className="p-8">
                <Crosshair className="top-2 left-2" />
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="font-mono text-xs font-bold text-gold">THESIS // {item.id}</span>
                  <span className="text-[10px] font-mono uppercase text-muted-foreground">PARENT IP</span>
                </div>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-navy">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{item.desc}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </SplitSection>

      {/* ---------- FEATURED INCUBATION SPOTLIGHT (STEALTH ASSET) ---------- */}
      <section className="relative overflow-hidden bg-navy text-primary-foreground py-20 lg:py-28">
        <AuroraBackground dark />
        <InteractiveGridPattern dark className="opacity-30" />

        <div className="container-x relative">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink-border pb-8">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
              <p className="kicker text-gold">Featured Incubation Spotlight · Confidential Asset</p>
            </div>
            <StealthBadge />
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <h2 className="display text-3xl sm:text-4xl lg:text-[50px] leading-tight text-ink-foreground">
                Proprietary Multi-Service Consumer Ecosystem
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-ink-muted">
                Our primary consumer-facing application layer unifies hyper-local retail aggregation, doorstep logistics, and service fulfillment under an ultra-responsive interface designed for Tier-2 and Tier-3 smartphone users.
              </p>

              {/* Status & Governance blocks */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="relative overflow-hidden rounded-xl border border-ink-border bg-ink/70 p-6 backdrop-blur-sm">
                  <Crosshair className="top-2 left-2" />
                  <p className="font-mono text-[11px] text-gold uppercase tracking-wider">ARCHITECTURAL STATUS</p>
                  <p className="mt-2 text-base font-semibold text-ink-foreground">Sandbox Hardening Active</p>
                  <p className="mt-1 text-xs text-ink-muted">Rigorous synthetic concurrency load testing</p>
                </div>
                <div className="relative overflow-hidden rounded-xl border border-ink-border bg-ink/70 p-6 backdrop-blur-sm">
                  <Crosshair className="top-2 left-2" />
                  <p className="font-mono text-[11px] text-gold uppercase tracking-wider">GOVERNANCE STANCE</p>
                  <p className="mt-2 text-base font-semibold text-ink-foreground">Wholly Owned Subsidiary Asset</p>
                  <p className="mt-1 text-xs text-ink-muted">Independent brand identity rollout</p>
                </div>
              </div>
            </div>

            {/* Live Security & Architectural Specs Card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-gold/40 bg-ink/90 p-8 shadow-2xl backdrop-blur-md">
                <BorderBeam size={220} duration={7} colorFrom="var(--gold)" />
                <Crosshair className="top-3 left-3" />
                <Crosshair className="bottom-3 right-3" />

                <div className="flex items-center justify-between border-b border-ink-border pb-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-gold" />
                    <span className="font-mono text-xs font-semibold uppercase text-gold">AUDIT CHECKLIST // VERIFIED</span>
                  </div>
                  <span className="font-mono text-[10px] text-ink-muted">STAGE 02</span>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    ["Identity Isolation", "OAuth2 / PKCE with zero consumer credential reuse"],
                    ["Settlement Rail", "Instant digital ledger integration with automated RTGS/UPI"],
                    ["Data Residency", "100% on-soil Indian cloud regions, compliant with DPDP 2023"],
                    ["Edge Caching", "District-level routing nodes for sub-20ms screen loads"],
                  ].map(([spec, detail]) => (
                    <div key={spec} className="border-b border-ink-border/60 pb-3 last:border-b-0">
                      <div className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-gold shrink-0" />
                        <p className="text-sm font-semibold text-ink-foreground">{spec}</p>
                      </div>
                      <p className="mt-1 ml-5 text-xs text-ink-muted leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ---------- R&D ROADMAP STEPPER ---------- */}
          <div className="mt-20 border-t border-ink-border pt-16">
            <div className="mb-10 flex items-center justify-between">
              <div>
                <p className="font-mono text-xs font-semibold text-gold uppercase tracking-wider">R&amp;D ROADMAP</p>
                <h3 className="display mt-2 text-2xl text-ink-foreground">Milestone Delivery Sequence</h3>
              </div>
              <span className="font-mono text-xs text-ink-muted">CURRENT PHASE: STAGE 02</span>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {STAGES.map((st, i) => (
                <div
                  key={st.n}
                  className={`relative rounded-xl border p-6 transition-all ${
                    st.s === "active"
                      ? "border-gold bg-ink/80 shadow-md"
                      : "border-ink-border bg-ink/40"
                  }`}
                >
                  {st.s === "active" && <BorderBeam size={160} duration={6} colorFrom="var(--gold)" />}
                  <Crosshair className="top-2 right-2" />

                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full font-mono text-xs font-bold ${
                        st.s === "done"
                          ? "bg-gold text-navy"
                          : st.s === "active"
                          ? "border border-gold text-gold"
                          : "border border-ink-border text-ink-muted"
                      }`}
                    >
                      {st.s === "done" ? (
                        <Check className="h-4 w-4" />
                      ) : st.s === "locked" ? (
                        <Lock className="h-3.5 w-3.5" />
                      ) : (
                        <RefreshCw className="h-3.5 w-3.5 animate-spin text-gold" />
                      )}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-gold">
                      {st.s === "done" ? "COMPLETE" : st.s === "active" ? "ACTIVE SANDBOX" : "CONFIDENTIAL"}
                    </span>
                  </div>

                  <p className="mt-4 font-mono text-[11px] text-ink-muted">{st.n}</p>
                  <h4 className="mt-1 text-lg font-bold text-ink-foreground">{st.t}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-ink-muted">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Inquiry Callout */}
      <section className="border-b border-border bg-background py-16 text-center">
        <div className="container-x max-w-2xl">
          <h3 className="display text-2xl sm:text-3xl text-navy">
            Interested in institutional integration or early testing?
          </h3>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            We collaborate with select technology partners, financial institutions, and regional logistics operators under formal Non-Disclosure Agreements (NDAs).
          </p>
          <div className="mt-8">
            <Magnet>
              <Button asChild variant="navy" size="lg">
                <Link to="/contact-us">
                  Request Institutional Briefing <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </Magnet>
          </div>
        </div>
      </section>
    </>
  );
}
