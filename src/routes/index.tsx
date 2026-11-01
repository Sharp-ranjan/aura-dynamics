import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Network,
  TrendingUp,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, Section } from "@/components/site/Layout";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { BlurText } from "@/components/reactbits/BlurText";
import { CountUp } from "@/components/reactbits/CountUp";
import { Magnet } from "@/components/reactbits/Magnet";
import { createPageMeta, BRAND_NAME } from "@/lib/seo";
import hero from "@/assets/hero-office.jpg";
import local from "@/assets/local-professional.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    createPageMeta({
      title: "Empowering India's Digital Future — Holding Enterprise",
      description:
        "Aura Dynamics Enterprises Private Limited is an Indian digital aggregator holding enterprise and technology incubator headquartered in Patna, Bihar, driving PAN-India platforms.",
      canonicalPath: "/",
    }),
  component: Home,
});

const BUSINESS_DOMAINS = [
  {
    icon: Network,
    title: "Digital Aggregation Architecture",
    text: "Building unified technological frameworks that connect fragmented regional services, logistics networks, and skilled professionals under a centralized, secure platform infrastructure.",
  },
  {
    icon: Cpu,
    title: "High-Performance Cloud Engineering",
    text: "Engineering event-driven backend microservices capable of processing high-volume concurrent transactions with sub-second latency and zero-trust security controls.",
  },
  {
    icon: TrendingUp,
    title: "Socio-Economic Inclusion",
    text: "Creating structured digital pathways that directly onboard Tier-2, Tier-3, and metropolitan service providers into the formal economy, supporting regional financial autonomy.",
  },
];

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
        <img
          src={hero}
          alt="Aura Dynamics executive boardroom meeting"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
        <div className="bg-grid-blueprint absolute inset-0 -z-10 opacity-20" />

        <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
              <BlurText
                text="Empowering India's Digital Future."
                direction="bottom"
                delay={0.05}
                stepDuration={0.04}
              />
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-navy-muted sm:text-xl">
              {BRAND_NAME} is an Indian digital aggregator holding enterprise and technology
              incubator. Headquartered in Patna with a national footprint, we build high-capacity
              digital platforms that bridge technological infrastructure and regional economic
              empowerment.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Magnet strength={0.2} activeDistance={70}>
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-sm bg-primary px-7 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
                >
                  <Link to="/about-us">
                    Our Vision & Governance <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Magnet>

              <Magnet strength={0.15} activeDistance={60}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-sm border-navy-foreground/30 bg-navy/40 px-7 text-sm font-medium text-navy-foreground backdrop-blur-sm transition-all hover:border-navy-foreground hover:bg-navy-foreground hover:text-navy"
                >
                  <Link to="/contact-us">Corporate Inquiries</Link>
                </Button>
              </Magnet>
            </div>
          </div>
        </div>

        {/* METRICS STRIP */}
        <div className="border-t border-navy-foreground/15 bg-navy/85 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-navy-foreground/10 px-6 py-8 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            <div className="py-4 sm:px-6 sm:py-0 sm:first:pl-0">
              <div className="font-display text-3xl font-bold text-navy-foreground md:text-4xl">
                <CountUp to={10000} suffix="+" duration={2.2} />
              </div>
              <p className="mt-2 text-xs font-medium text-navy-muted">
                Livelihood Onboarding Target
              </p>
            </div>

            <div className="py-4 sm:px-6 sm:py-0">
              <div className="font-display text-3xl font-bold text-navy-foreground md:text-4xl">
                <CountUp to={54} suffix="+" duration={2} />
              </div>
              <p className="mt-2 text-xs font-medium text-navy-muted">
                Municipal Expansion Districts
              </p>
            </div>

            <div className="py-4 sm:px-6 sm:py-0">
              <div className="font-display text-3xl font-bold text-navy-foreground md:text-4xl">
                <CountUp to={100} suffix="%" duration={1.8} />
              </div>
              <p className="mt-2 text-xs font-medium text-navy-muted">Women-Promoted Ownership</p>
            </div>

            <div className="py-4 sm:px-6 sm:py-0 sm:last:pr-0">
              <div className="font-display text-3xl font-bold text-navy-foreground md:text-4xl">
                24/7
              </div>
              <p className="mt-2 text-xs font-medium text-navy-muted">Platform Core Availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORPORATE OVERVIEW SECTION */}
      <Section className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <Reveal>
          <h2 className="text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl lg:text-[42px]">
            Architecting Resilient Platforms for High-Growth Indian Markets.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Aura Dynamics operates as the parent holding entity, institutional steward, and
            engineering engine behind large-scale digital initiatives. We bridge the structural gap
            between advanced enterprise systems and unorganized regional service markets.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="space-y-6 text-muted-foreground">
          <p className="text-lg leading-relaxed">
            Headquartered in the commercial corridor of Patna, Bihar, our strategic positioning
            enables direct operational insight into emerging Tier-2 and Tier-3 urban economies—the
            core growth frontier of India's evolving digital landscape.
          </p>

          <div className="grid gap-6 pt-2 sm:grid-cols-2">
            <div className="rounded-sm border border-border bg-card p-6">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-base font-semibold text-foreground">
                Institutional Governance
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Rigorous regulatory compliance, structured accounting, and statutory audit integrity
                aligned with Indian corporate law.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-card p-6">
              <Layers className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-base font-semibold text-foreground">
                Proprietary Incubation
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Incubating autonomous consumer brands backed completely by centralized capital,
                legal, and engineering infrastructure.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/about-us"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Learn about our corporate structure and leadership <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* THREE CORE PILLARS */}
      <section className="bg-surface/80 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              Our Businesses
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Our operations combine high-assurance software engineering with direct grassroots
              socio-economic integration.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {BUSINESS_DOMAINS.map((domain) => (
              <SpotlightCard
                key={domain.title}
                spotlightColor="rgba(99, 102, 241, 0.12)"
                borderGlowColor="rgba(99, 102, 241, 0.35)"
                className="flex flex-col justify-between p-8"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10 text-primary">
                    <domain.icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>

                  <h3 className="mt-6 text-xl font-medium tracking-tight text-foreground">
                    {domain.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {domain.text}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* PROPRIETARY INCUBATION SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="overflow-hidden rounded-sm border border-border bg-card shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[4/3] w-full lg:aspect-auto">
              <img
                src={local}
                alt="Local service technician in Patna utilizing digital aggregator platform"
                loading="lazy"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-between bg-navy p-8 text-navy-foreground md:p-14">
              <div>
                <p className="text-xs font-medium text-navy-muted">Proprietary Incubation</p>

                <h2 className="mt-3 text-2xl font-medium leading-tight tracking-tight sm:text-3xl md:text-4xl">
                  Multi-Service Consumer Ecosystem
                </h2>

                <p className="mt-5 text-sm leading-relaxed text-navy-muted md:text-base">
                  Under strict confidentiality and intellectual property safeguards, our core
                  technology laboratory is incubating an advanced consumer-facing multi-service
                  platform. Designed to eliminate intermediaries, empower regional trade, and
                  optimize everyday household services, the platform is undergoing internal stress
                  tests, mock order settlement, and geo-clustering validation.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    "Zero-Trust Architecture & PCI-DSS Compliant Payment Clearing",
                    "Tier-2 and Tier-3 Regional Linguistic Engine (Hindi, Bhojpuri, English)",
                    "Independent Consumer Branding Unveiled Upon Market Launch",
                  ].map((feat) => (
                    <div
                      key={feat}
                      className="flex items-center gap-3 text-xs text-navy-foreground/90 sm:text-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 border-t border-navy-foreground/15 pt-6">
                <Button
                  asChild
                  size="lg"
                  className="rounded-sm bg-primary text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  <Link to="/ventures">
                    Platform Architecture <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL INQUIRIES SECTION */}
      <section className="border-t border-border bg-surface/50 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Institutional Partnerships
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            We welcome formal inquiries from municipal bodies, technology infrastructure providers,
            institutional partners, and strategic trade alliances.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Magnet strength={0.2} activeDistance={70}>
              <Button
                asChild
                size="lg"
                className="h-12 rounded-sm bg-primary px-8 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
              >
                <Link to="/contact-us">
                  Corporate Inquiries <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Magnet>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-sm border-border bg-background px-8 text-sm font-medium text-foreground hover:bg-surface"
            >
              <Link to="/governance">Board of Advisors</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
