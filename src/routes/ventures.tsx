import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Lock,
  Server,
  Cpu,
  Database,
  ShieldAlert,
  Sparkles,
  Layers,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { Kicker, PageHeader, Section } from "@/components/site/Layout";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { Magnet } from "@/components/reactbits/Magnet";
import { Button } from "@/components/ui/button";
import { createPageMeta, BRAND_NAME } from "@/lib/seo";

export const Route = createFileRoute("/ventures")({
  head: () =>
    createPageMeta({
      title: "Strategic Ventures & R&D — Proprietary Incubation Pipeline",
      description:
        "Explore the technology incubation pipeline of Aura Dynamics Enterprises: proprietary R&D, stealth-mode multi-service ecosystem, and distributed cloud architectures.",
      canonicalPath: "/ventures",
    }),
  component: Ventures,
});

const ARCHITECTURE_LAYERS = [
  {
    icon: Server,
    layer: "Layer 01",
    name: "Unified API Gateway & Edge Security",
    desc: "Sub-millisecond routing, rate limiting, and zero-trust authentication verifying every incoming request with military-grade encryption.",
  },
  {
    icon: Cpu,
    layer: "Layer 02",
    name: "Autonomous Dispatch & Match Engine",
    desc: "Low-latency algorithmic clustering that pairs real-time consumer requests with nearest certified local professionals based on skills and telemetry.",
  },
  {
    icon: Database,
    layer: "Layer 03",
    name: "Event-Driven State Settlement",
    desc: "High-throughput asynchronous ledger managing order lifecycle, escrow holds, and instant payout disbursements with complete auditability.",
  },
  {
    icon: Layers,
    layer: "Layer 04",
    name: "Localized Linguistic Presentation",
    desc: "Fluid cross-platform mobile interfaces supporting multilingual vernacular voice, chat, and visual workflows tailored for Tier-2 and Tier-3 users.",
  },
];

function Ventures() {
  return (
    <>
      <PageHeader
        crumb="Ventures"
        title="Strategic Ventures & Proprietary Incubation."
        sub="Engineering scalable digital ecosystems designed to transform fragmented service economies across PAN-India."
      />

      {/* VENTURES OVERVIEW SECTION */}
      <Section className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div>
          <Kicker>Incubation Framework</Kicker>
          <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-4xl">
            From High-Assurance R&D to Sovereign Market Platforms.
          </h2>
        </div>

        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Aura Dynamics operates a centralized corporate incubator and technological testbed. We
            identify fundamental systemic inefficiencies in regional retail, personal services, and
            gig supply chains, then engineer end-to-end digital architectures to solve them.
          </p>
          <p>
            Our incubated platforms are engineered from inception to handle millions of
            transactions, adhere strictly to Reserve Bank of India (RBI) payment clearing
            guidelines, and provide seamless operational resilience even under low-bandwidth mobile
            connectivity.
          </p>
        </div>
      </Section>

      {/* FEATURED STEALTH MODE INCUBATION */}
      <section className="bg-surface/80 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-sm border border-border bg-card shadow-sm">
            {/* Header Strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border bg-surface/40 px-8 py-5">
              <div className="flex items-center gap-3">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="font-display text-sm font-semibold tracking-wider text-foreground">
                  Featured Incubation Project
                </span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xs border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <Lock className="h-3.5 w-3.5" />
                <span>Stealth Mode · Proprietary R&D</span>
              </div>
            </div>

            {/* Main Project Details */}
            <div className="p-8 md:p-14">
              <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
                <div>
                  <h3 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                    Proprietary Multi-Service Consumer Ecosystem
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                    Our flagship technology initiative is a unified digital aggregator designed to
                    revolutionize how household, technical, maintenance, and commercial services are
                    discovered, booked, fulfilled, and settled across Indian cities.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Currently undergoing closed-loop architectural hardening, synthetic load
                    testing, and localized pilot validation, the platform will be officially
                    unveiled under an independent consumer brand identity at an optimal strategic
                    market juncture.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-sm border border-border/70 bg-surface/50 p-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        Development Stage
                      </span>
                      <p className="mt-1 font-display text-lg font-medium text-foreground">
                        Phase 3 — Security Hardening
                      </p>
                    </div>
                    <div className="rounded-sm border border-border/70 bg-surface/50 p-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        Target Market
                      </span>
                      <p className="mt-1 font-display text-lg font-medium text-foreground">
                        Patna Corridor to PAN-India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stance & Governance Callout */}
                <div className="flex flex-col justify-between border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                  <div className="space-y-5">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground">
                      <ShieldAlert className="h-4 w-4 text-primary" />
                      <span>Corporate Governance Stance</span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      To preserve strategic competitive advantage and safeguard intellectual
                      property rights under the Indian Copyright & Trademarks Acts, exact brand
                      names, UI schematics, and commercial release dates remain strictly
                      confidential.
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      The venture is 100% financed, engineered, and legally stewarded by{" "}
                      {BRAND_NAME}.
                    </p>
                  </div>

                  <div className="pt-8">
                    <Button
                      asChild
                      size="lg"
                      className="w-full rounded-sm bg-primary text-xs font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
                    >
                      <Link to="/contact-us">Inquire via Corporate Secretariat</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* ARCHITECTURE DEEP DIVE */}
              <div className="mt-16 border-t border-border pt-14">
                <div className="max-w-xl">
                  <Kicker>Core Technology Stack</Kicker>
                  <h4 className="text-2xl font-medium tracking-tight text-foreground">
                    Architectural Blueprint & Resilience Model
                  </h4>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {ARCHITECTURE_LAYERS.map((layer) => (
                    <SpotlightCard
                      key={layer.name}
                      spotlightColor="rgba(99, 102, 241, 0.12)"
                      borderGlowColor="rgba(99, 102, 241, 0.35)"
                      className="p-6"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-primary/10 text-primary">
                          <layer.icon className="h-5 w-5" />
                        </div>
                        <span className="font-display text-[11px] font-semibold text-primary">
                          {layer.layer}
                        </span>
                      </div>
                      <h5 className="mt-5 text-base font-medium text-foreground">{layer.name}</h5>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {layer.desc}
                      </p>
                    </SpotlightCard>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL CTA */}
      <Section className="text-center">
        <Kicker>Partnership Channels</Kicker>
        <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
          Interested in Technology Alliances or Pilot Programs?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
          Aura Dynamics partners with certified telecommunications, banking, and municipal utility
          providers.
        </p>
        <div className="mt-8">
          <Magnet strength={0.25} activeDistance={75}>
            <Button
              asChild
              size="lg"
              className="h-12 rounded-sm bg-primary px-8 text-sm font-semibold tracking-wide text-primary-foreground hover:bg-primary/90"
            >
              <Link to="/contact-us">
                Connect with Enterprise Secretariat <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Magnet>
        </div>
      </Section>
    </>
  );
}
