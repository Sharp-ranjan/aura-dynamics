import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Network,
  TrendingUp,
  Layers,
  CheckCircle2,
  Lock,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Kicker, Reveal, Section } from "@/components/site/Layout";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { BlurText } from "@/components/reactbits/BlurText";
import { CountUp } from "@/components/reactbits/CountUp";
import { Magnet } from "@/components/reactbits/Magnet";
import { LogoLoop } from "@/components/reactbits/LogoLoop";
import { createPageMeta, BRAND_NAME, SITE_URL } from "@/lib/seo";
import hero from "@/assets/hero-office.jpg";
import local from "@/assets/local-professional.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    createPageMeta({
      title: "Empowering India's Digital Future — Holding Enterprise",
      description:
        "Aura Dynamics Enterprises Private Limited is a premier multi-service digital aggregator holding enterprise and technology incubator headquartered in Patna, Bihar, driving PAN-India platforms.",
      canonicalPath: "/",
    }),
  component: Home,
});

const PILLARS = [
  {
    icon: Network,
    badge: "Enterprise Core",
    title: "Digital Aggregation Architecture",
    text: "Architecting high-scale corporate aggregation frameworks that seamlessly unite fragmented regional services, logistics, and skilled professionals under a centralized, secure technological umbrella.",
  },
  {
    icon: Cpu,
    badge: "Infrastructure",
    title: "Scalable Cloud Engineering",
    text: "Engineering resilient, event-driven backend microservices capable of processing high-volume concurrent transactions with sub-second latency and zero-trust data protection.",
  },
  {
    icon: TrendingUp,
    badge: "Impact Mandate",
    title: "Inclusive Socio-Economic Growth",
    text: "Fostering an inclusive digital ecosystem that directly onboards Tier-2, Tier-3, and metropolitan service providers into the formal economy, accelerating regional financial autonomy.",
  },
];

const CAPABILITIES = [
  { label: "Distributed Microservices Architecture", badge: "Engineered" },
  { label: "Sub-Second Transaction Settlement", badge: "Fintech" },
  { label: "Zero-Trust Security & ISO Alignment", badge: "Security" },
  { label: "Autonomous Dispatch & Route Optimization", badge: "AI/ML" },
  { label: "Tier-2 & Tier-3 Regional Localization", badge: "Impact" },
  { label: "Women-Promoted Corporate Governance", badge: "Leadership" },
];

function Home() {
  return (
    <>
      {/* HERO SECTION — DXC ENTERPRISE SLATE AESTHETIC */}
      <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
        {/* Background Atmosphere */}
        <img
          src={hero}
          alt="Aura Dynamics strategic executive leadership meeting in corporate headquarters"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
        <div className="bg-grid-blueprint absolute inset-0 -z-10 opacity-30" />

        <div className="mx-auto max-w-7xl px-6 py-28 md:py-40">
          <div className="max-w-4xl">
            {/* Status Pill */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-navy-foreground/20 bg-navy/60 px-3.5 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold uppercase tracking-widest text-navy-muted">
                Holding Enterprise · Incubation Division
              </span>
            </div>

            {/* Headline with BlurText Reveal */}
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
              <BlurText
                text="Empowering India's Digital Future."
                direction="bottom"
                delay={0.1}
                stepDuration={0.05}
              />
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-navy-muted sm:text-xl">
              {BRAND_NAME} is an institutional multi-service digital aggregator holding enterprise
              and proprietary technology incubator. Headquartered in Patna with a PAN-India horizon,
              we build high-capacity digital platforms that bridge technological infrastructure and
              regional economic empowerment.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Magnet strength={0.25} activeDistance={80}>
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-sm bg-primary px-7 text-sm font-semibold tracking-wide text-primary-foreground shadow-md transition-all hover:bg-primary/90"
                >
                  <Link to="/about-us">
                    Explore Holding Vision <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Magnet>

              <Magnet strength={0.2} activeDistance={70}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-sm border-navy-foreground/30 bg-navy/40 px-7 text-sm font-semibold tracking-wide text-navy-foreground backdrop-blur-sm transition-all hover:border-navy-foreground hover:bg-navy-foreground hover:text-navy"
                >
                  <Link to="/contact-us">Corporate Inquiries</Link>
                </Button>
              </Magnet>
            </div>
          </div>
        </div>

        {/* Live Empirical Metrics Strip */}
        <div className="border-t border-navy-foreground/15 bg-navy/80 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-navy-foreground/10 px-6 py-8 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            <div className="py-4 sm:px-6 sm:py-0 sm:first:pl-0">
              <div className="font-display text-3xl font-bold text-navy-foreground md:text-4xl">
                <CountUp to={10000} suffix="+" duration={2.2} />
              </div>
              <p className="mt-1 text-xs uppercase tracking-wider text-navy-muted">
                Livelihood Onboarding Target
              </p>
            </div>

            <div className="py-4 sm:px-6 sm:py-0">
              <div className="font-display text-3xl font-bold text-navy-foreground md:text-4xl">
                <CountUp to={54} suffix="+" duration={2} />
              </div>
              <p className="mt-1 text-xs uppercase tracking-wider text-navy-muted">
                Municipal Expansion Districts
              </p>
            </div>

            <div className="py-4 sm:px-6 sm:py-0">
              <div className="font-display text-3xl font-bold text-navy-foreground md:text-4xl">
                <CountUp to={100} suffix="%" duration={1.8} />
              </div>
              <p className="mt-1 text-xs uppercase tracking-wider text-navy-muted">
                Women-Promoted Leadership
              </p>
            </div>

            <div className="py-4 sm:px-6 sm:py-0 sm:last:pr-0">
              <div className="font-display text-3xl font-bold text-navy-foreground md:text-4xl">
                24/7
              </div>
              <p className="mt-1 text-xs uppercase tracking-wider text-navy-muted">
                High-Availability Cloud Core
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTINUOUS LOGO / CAPABILITIES MARQUEE */}
      <section className="border-b border-border bg-surface/60 py-4" aria-label="Core Capabilities">
        <div className="mx-auto max-w-7xl px-6">
          <LogoLoop items={CAPABILITIES} speed="normal" />
        </div>
      </section>

      {/* COMPANY OVERVIEW SECTION */}
      <Section className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <Reveal>
          <Kicker>Holding Enterprise Overview</Kicker>
          <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-4xl lg:text-[42px]">
            Architecting Resilient Platforms for High-Growth Indian Markets.
          </h2>
          <p className="mt-6 text-base font-normal leading-relaxed text-muted-foreground">
            Aura Dynamics operates as the strategic parent entity, institutional steward, and
            engineering engine behind large-scale digital initiatives. We bridge the structural gap
            between advanced enterprise systems and unorganized service markets.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="space-y-6 text-muted-foreground">
          <p className="text-lg leading-relaxed">
            Headquartered in the historic commercial corridor of Patna, Bihar, our strategic
            positioning enables unprecedented insight into emerging Tier-2 and Tier-3 urban
            economies—the true growth frontier of India's next trillion-dollar digital expansion.
          </p>
          <div className="grid gap-4 pt-2 sm:grid-cols-2">
            <div className="rounded-sm border border-border bg-card p-5">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <h3 className="mt-3 text-base font-semibold text-foreground">
                Institutional Governance
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                Rigorous regulatory adherence, structured accounting, and clear audit compliance
                aligned with Indian corporate law.
              </p>
            </div>

            <div className="rounded-sm border border-border bg-card p-5">
              <Layers className="h-6 w-6 text-primary" />
              <h3 className="mt-3 text-base font-semibold text-foreground">
                Proprietary Incubation
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                Incubating autonomous consumer brands backed completely by centralized capital,
                legal, and engineering infrastructure.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/about-us"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-primary hover:underline"
            >
              Learn about our women-led corporate hierarchy <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* THREE CORE PILLARS — REACTBITS SPOTLIGHT CARDS */}
      <section className="bg-surface/80 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <Kicker>Strategic Framework</Kicker>
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              How We Create Enduring Market Value
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Our operations combine high-assurance software engineering with direct grassroots
              socio-economic integration.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {PILLARS.map((p, idx) => (
              <SpotlightCard
                key={p.title}
                spotlightColor="rgba(99, 102, 241, 0.16)"
                borderGlowColor="rgba(99, 102, 241, 0.4)"
                className="flex flex-col justify-between p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10 text-primary">
                      <p.icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-medium tracking-tight text-foreground">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>

                <div className="mt-8 border-t border-border/60 pt-4 text-xs font-medium text-foreground/70">
                  Pillar 0{idx + 1} · Holding Architecture
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGIC R&D & STEALTH INCUBATION SPOTLIGHT */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="overflow-hidden rounded-sm border border-border bg-card shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[4/3] w-full lg:aspect-auto">
              <img
                src={local}
                alt="Local service technician in Patna utilizing the upcoming digital ecosystem on smartphone"
                loading="lazy"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent lg:hidden" />
              <div className="absolute bottom-6 left-6 right-6 lg:hidden">
                <span className="rounded-xs bg-primary px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                  Active Stealth Pipeline
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between bg-navy p-8 text-navy-foreground md:p-14">
              <div>
                <div className="hidden items-center gap-3 lg:flex">
                  <span className="rounded-xs border border-emerald-400/40 bg-emerald-950/40 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-emerald-300">
                    Active Stealth Pipeline
                  </span>
                  <span className="text-xs text-navy-muted">Confidential R&D Mandate</span>
                </div>

                <h2 className="mt-6 text-2xl font-medium leading-tight tracking-tight sm:text-3xl md:text-4xl">
                  Proprietary Multi-Service Consumer Ecosystem
                </h2>

                <p className="mt-5 text-sm leading-relaxed text-navy-muted md:text-base">
                  Under strict confidentiality and intellectual property safeguards, our core
                  technology laboratory is incubating an advanced consumer-facing multi-service
                  platform. Designed to eliminate intermediaries, empower regional trade, and
                  optimize everyday household services, the platform is undergoing internal stress
                  tests, mock order settlement, and geo-clustering algorithms.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    "Zero-Trust Architecture & PCI-DSS Compliant Payment Clearing",
                    "Tier-2/Tier-3 Regional Linguistic Engine (Hindi, Bhojpuri, English)",
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
                  className="rounded-sm bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  <Link to="/ventures">
                    Review Ventures Architecture <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL CONVERSION STRIP */}
      <section className="border-t border-border bg-surface/50 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Kicker>Institutional Engagements</Kicker>
          <h2 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">
            Partner With India's Next Digital Holding Corporation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            We welcome formal inquiries from municipal bodies, technology infrastructure providers,
            institutional investors, and strategic trade alliances.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Magnet strength={0.25} activeDistance={75}>
              <Button
                asChild
                size="lg"
                className="h-12 rounded-sm bg-primary px-8 text-sm font-semibold tracking-wide text-primary-foreground shadow-sm hover:bg-primary/90"
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
              className="h-12 rounded-sm border-border bg-background px-8 text-sm font-semibold tracking-wide text-foreground hover:bg-surface"
            >
              <Link to="/governance">Review Executive Board</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
