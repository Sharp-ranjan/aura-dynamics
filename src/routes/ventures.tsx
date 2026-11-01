import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Server, Cpu, Database, Layers } from "lucide-react";
import { PageHeader, Section } from "@/components/site/Layout";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { Magnet } from "@/components/reactbits/Magnet";
import { Button } from "@/components/ui/button";
import { createPageMeta, BRAND_NAME } from "@/lib/seo";

export const Route = createFileRoute("/ventures")({
  head: () =>
    createPageMeta({
      title: "Strategic Ventures & R&D — Technology Incubation",
      description:
        "Explore the technology incubation pipeline of Aura Dynamics Enterprises: proprietary R&D, multi-service platform architecture, and distributed cloud engineering.",
      canonicalPath: "/ventures",
    }),
  component: Ventures,
});

const ARCHITECTURE_LAYERS = [
  {
    icon: Server,
    name: "Unified API Gateway & Edge Security",
    desc: "Sub-millisecond routing, rate limiting, and zero-trust authentication verifying every incoming request with standard enterprise encryption.",
  },
  {
    icon: Cpu,
    name: "Autonomous Dispatch & Match Engine",
    desc: "Low-latency algorithmic clustering that pairs real-time consumer requests with certified local professionals based on verified skills and location.",
  },
  {
    icon: Database,
    name: "Event-Driven State Settlement",
    desc: "High-throughput asynchronous ledger managing order lifecycle, escrow holds, and instant payout disbursements with complete auditability.",
  },
  {
    icon: Layers,
    name: "Localized Linguistic Presentation",
    desc: "Cross-platform mobile interfaces supporting multilingual vernacular voice, chat, and visual workflows tailored for Tier-2 and Tier-3 users.",
  },
];

function Ventures() {
  return (
    <>
      <PageHeader
        crumb="Ventures"
        title="Strategic Ventures & Proprietary Incubation"
        sub="Engineering scalable digital ecosystems designed to transform fragmented service economies across India."
      />

      {/* OVERVIEW SECTION */}
      <Section className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div>
          <h2 className="text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
            Technology Incubation & R&D Strategy
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

      {/* FEATURED INCUBATION */}
      <section className="bg-surface/80 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-sm border border-border bg-card shadow-sm">
            <div className="p-8 md:p-14">
              <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
                <div>
                  <h3 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                    Multi-Service Platform Architecture
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
                      <span className="text-xs font-medium text-muted-foreground">
                        Development Stage
                      </span>
                      <p className="mt-1 font-display text-base font-semibold text-foreground">
                        Phase 3 — Security Hardening
                      </p>
                    </div>
                    <div className="rounded-sm border border-border/70 bg-surface/50 p-4">
                      <span className="text-xs font-medium text-muted-foreground">
                        Initial Target Geography
                      </span>
                      <p className="mt-1 font-display text-base font-semibold text-foreground">
                        Patna Corridor to PAN-India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Governance Callout */}
                <div className="flex flex-col justify-between border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                  <div className="space-y-5">
                    <h4 className="text-base font-semibold text-foreground">
                      Intellectual Property & Governance
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      To preserve strategic competitive advantage and safeguard intellectual
                      property rights under the Indian Copyright & Trademarks Acts, exact brand
                      names, UI schematics, and commercial release dates remain confidential during
                      development.
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      The venture is completely financed, engineered, and legally stewarded by{" "}
                      {BRAND_NAME}.
                    </p>
                  </div>

                  <div className="pt-8">
                    <Button
                      asChild
                      size="lg"
                      className="w-full rounded-sm bg-primary text-sm font-medium text-primary-foreground hover:bg-primary/90"
                    >
                      <Link to="/contact-us">Inquire via Corporate Secretariat</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* ARCHITECTURE LAYERS */}
              <div className="mt-16 border-t border-border pt-14">
                <div className="max-w-xl">
                  <h4 className="text-2xl font-medium tracking-tight text-foreground">
                    Platform Architecture
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Core technical components supporting high-throughput transaction clearing and
                    distributed dispatch.
                  </p>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {ARCHITECTURE_LAYERS.map((layer) => (
                    <SpotlightCard
                      key={layer.name}
                      spotlightColor="rgba(99, 102, 241, 0.12)"
                      borderGlowColor="rgba(99, 102, 241, 0.35)"
                      className="p-6"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-primary/10 text-primary">
                        <layer.icon className="h-5 w-5" />
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

      {/* PARTNERSHIPS */}
      <Section className="text-center">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Technology Alliances & Pilot Programs
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
          Aura Dynamics engages with certified telecommunications, financial institutions, and
          municipal utility networks.
        </p>
        <div className="mt-8">
          <Magnet strength={0.2} activeDistance={70}>
            <Button
              asChild
              size="lg"
              className="h-12 rounded-sm bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90"
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
