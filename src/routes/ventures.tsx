import { createFileRoute } from "@tanstack/react-router";
import { Check, Lock } from "lucide-react";
import { PageHeader, Reveal, SplitSection, StealthBadge } from "@/components/site/primitives";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/ventures")({
  head: () => seo("Strategic Ventures", "How Aura Dynamics incubates proprietary digital ventures for mass scale, including its stealth multi-service consumer ecosystem.", "/ventures"),
  component: Ventures,
});

const STAGES = [
  { n: "Stage 1", t: "Architecture Complete", s: "done" },
  { n: "Stage 2", t: "Sandbox Testing & Security Audits", s: "active" },
  { n: "Stage 3", t: "Market Unveiling", s: "locked" },
] as const;

function Ventures() {
  return (
    <>
      <PageHeader crumb="Ventures" kicker="Portfolio & Incubation" title="Our Strategic Ventures — Incubating Disruptive Digital Solutions for Mass Scale." />

      <SplitSection kicker="Holding & Incubation Thesis" title="Build the backbone once. Let every venture compound on it.">
        <div className="grid gap-px overflow-hidden rounded-xl border bg-border">
          {[
            ["Proprietary Backbones", "We design and own core infrastructure — identity, payments orchestration, routing, and observability — at the parent level, so ventures launch on proven rails."],
            ["Financing Early R&D", "The holding company funds early-stage research directly, allowing teams to pursue architectural correctness before commercial pressure."],
            ["Shielding Early Assets", "Pre-launch technology is held under confidentiality, IP protection, and controlled disclosure until it is market-ready."],
          ].map(([t, b], i) => (
            <Reveal key={t}><div className="grid gap-3 bg-card p-8 sm:grid-cols-[48px_1fr]"><span className="font-mono text-sm text-gold">0{i + 1}</span><div><h3 className="text-xl font-semibold tracking-tight">{t}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{b}</p></div></div></Reveal>
          ))}
        </div>
      </SplitSection>

      <section className="bg-navy text-primary-foreground">
        <div className="container-x py-20 lg:py-28">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="kicker">Featured Incubation Spotlight · Confidential</p>
            <StealthBadge />
          </div>
          <h2 className="display mt-8 max-w-3xl text-4xl lg:text-[52px]">Proprietary Multi-Service Consumer Ecosystem</h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-ink-border bg-ink-border lg:grid-cols-2">
            <div className="bg-navy p-8"><p className="kicker mb-3">Architectural Status</p><p className="text-lg">Sandbox Testing / Zero-Trust Security Hardening</p></div>
            <div className="bg-navy p-8"><p className="kicker mb-3">Governance Stance</p><p className="leading-relaxed text-ink-muted">Operates under an independent consumer-facing brand, entirely anchored by the technological, operational, and financial framework of Aura Dynamics Private Limited.</p></div>
          </div>

          <div className="mt-16">
            <p className="kicker mb-8">R&amp;D Roadmap</p>
            <ol className="grid gap-8 md:grid-cols-3 md:gap-0">
              {STAGES.map((st, i) => (
                <li key={st.n} className="relative md:pr-8">
                  <div className="flex items-center">
                    <span className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${st.s === "done" ? "border-gold bg-gold text-navy" : st.s === "active" ? "border-gold text-gold" : "border-ink-border text-ink-muted"}`}>
                      {st.s === "active" && <span className="animate-radar absolute inset-0 rounded-full bg-gold/40" />}
                      {st.s === "done" ? <Check className="h-4 w-4" /> : st.s === "locked" ? <Lock className="h-3.5 w-3.5" /> : <span className="h-2 w-2 rounded-full bg-gold" />}
                    </span>
                    {i < 2 && <span className={`ml-3 hidden h-px flex-1 md:block ${st.s === "done" ? "bg-gold" : "bg-ink-border"}`} />}
                  </div>
                  <p className="mt-5 font-mono text-[11px] uppercase tracking-wider text-ink-muted">{st.n}{st.s === "active" && <span className="ml-2 text-gold">· Active</span>}{st.s === "locked" && <span className="ml-2">· Confidential</span>}</p>
                  <p className="mt-1 text-lg font-semibold tracking-tight">{st.t}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
