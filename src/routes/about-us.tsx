import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Award, Sparkles, Building, Briefcase } from "lucide-react";
import { PageHeader, Reveal, SplitSection } from "@/components/site/primitives";
import { seo } from "@/lib/seo";
import { BorderBeam, Crosshair, SpotlightCard, Magnet } from "@/components/reactbits";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about-us")({
  head: () =>
    seo(
      "About Us",
      "Aura Dynamics is a women-led technology holding corporation architecting scalable, inclusive digital infrastructure for India.",
      "/about-us",
    ),
  component: About,
});

const IMPACT = [
  {
    title: "Massive Livelihood Creation",
    subtitle: "Formalizing Tier-2 & Tier-3 gig supply chains",
    description:
      "Direct onboarding of gig professionals, local delivery runners, and home service technicians into the formal digital economy — complete with transparent transaction records, scheduled digital payouts, and institutional financial access.",
    stat: "100%",
    statLabel: "Direct Payout Transparency",
  },
  {
    title: "Empowering Local Micro-Businesses",
    subtitle: "Eliminating middleman extraction",
    description:
      "Removing monopolistic platform fees and predatory intermediary friction so local merchants, grocers, and regional vendors reach consumer demand directly, unlocking stable and predictable margins.",
    stat: "0%",
    statLabel: "Intermediary Markup",
  },
  {
    title: "Skill Advancement & Digital Inclusion",
    subtitle: "Codifying service quality standards",
    description:
      "Regular vernacular training modules and codified quality benchmarks that upskill grassroots partners, raising lifetime earning potential while guaranteeing dependable SLAs to citizens across emerging urban clusters.",
    stat: "Vernacular",
    statLabel: "Multi-Dialect Training",
  },
];

function About() {
  return (
    <>
      <PageHeader
        crumb="About Us"
        kicker="Who We Are"
        title="About Aura Dynamics — Architecting Scalable, Inclusive Digital Infrastructure."
        lead="Aura Dynamics Private Limited is a specialized technology holding corporation founded to build, capitalize, and govern the infrastructure powering essential digital services across India's next-wave urban markets."
      />

      {/* ---------- VISION & MISSION DUAL SHOWCASE ---------- */}
      <section className="relative border-b border-border bg-background">
        <div className="container-x grid gap-8 py-20 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-7">
            <div className="relative h-full overflow-hidden rounded-2xl border border-navy/20 bg-navy p-10 text-primary-foreground lg:p-14 shadow-lg">
              <BorderBeam size={240} duration={9} colorFrom="var(--gold)" />
              <Crosshair className="top-3 left-3" />
              <Crosshair className="bottom-3 right-3" />

              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <p className="kicker text-gold">Corporate Vision</p>
              </div>

              <h2 className="display mt-4 text-3xl sm:text-4xl lg:text-[42px] leading-tight text-primary-foreground">
                To become India's most trusted digital backbone for essential services — reaching every district with metropolitan-grade reliability.
              </h2>

              <p className="mt-8 text-base leading-relaxed text-ink-muted">
                We believe geographic boundaries should never dictate technology access. A citizen in a Tier-3 district deserves the exact same latency, security, and consumer service standard as someone in a Tier-1 metro.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative rounded-2xl border border-border bg-card p-10 lg:p-12 shadow-sm">
              <Crosshair className="top-3 left-3" />
              <Crosshair className="bottom-3 right-3" />

              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <p className="kicker">Institutional Mission</p>
              </div>

              <h3 className="display mt-4 text-2xl sm:text-3xl text-navy">
                Disciplined engineering, fair economics, and relentless compliance.
              </h3>

              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                To build, finance, and govern technology ventures that aggregate high-utility services, formalise local livelihoods, and operate under uncompromising standards of compliance and audit.
              </p>

              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>PATNA HEADQUARTERS</span>
                <span className="text-navy font-semibold">ESTABLISHED 2026</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- CORPORATE HOLDING FRAMEWORK ---------- */}
      <SplitSection kicker="Corporate Holding Framework" title="A parent company built for disciplined scale.">
        <div className="space-y-6 text-[17px] leading-[1.8] text-muted-foreground">
          <p>
            Aura Dynamics Private Limited serves as the parent holding entity for a portfolio of high-impact technology ventures. The holding company owns the shared technology backbone, sets risk and compliance policy, and allocates capital to ventures that meet defined milestones.
          </p>
          <p>
            Every venture operates within a governance perimeter defined by the board: statutory audits, segregated financial reporting, data-protection controls, and periodic internal reviews.
          </p>

          <dl className="mt-10 divide-y divide-border border-y border-border">
            {[
              ["IP & Architecture Ownership", "Shared core codebases, zero-trust infrastructure, and proprietary patents held at the parent holding level."],
              ["Venture Capital Governance", "Stage-gated capital allocations tied strictly to operational KPIs, SLA compliance, and regulatory milestones."],
              ["Statutory Assurance", "Annual statutory audit oversight, formal internal risk controls, and automated compliance reporting."],
            ].map(([term, detail]) => (
              <div key={term} className="grid gap-2 py-5 sm:grid-cols-3">
                <dt className="font-semibold text-navy text-[15px]">{term}</dt>
                <dd className="sm:col-span-2 text-[15px] leading-relaxed text-muted-foreground">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </SplitSection>

      {/* ---------- WOMEN-LED & MANAGED EDITORIAL SPOTLIGHT ---------- */}
      <section className="relative overflow-hidden border-b border-border bg-card py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <p className="kicker">Editorial Spotlight</p>
            </div>
            <h2 className="display text-3xl sm:text-4xl lg:text-[44px] text-navy">
              Proudly Women-Led &amp; Managed Enterprise
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Aura Dynamics was founded on the conviction that inclusive governance produces resilient, long-term companies. Our founding women promoters and directors hold full operational control, executive governance, and daily strategic authority across the enterprise.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {[
                "100% Day-to-Day Operational Authority",
                "Full Executive Governance",
                "Direct Banking Relationships",
                "Strategic Capital Allocation",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-md border border-navy/15 bg-background px-3 py-1.5 font-mono text-xs font-medium text-navy"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-gold" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <Reveal className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border border-navy/15 bg-background p-10 lg:p-14 shadow-sm">
              <BorderBeam size={200} duration={8} colorFrom="var(--gold)" />
              <Crosshair className="top-3 left-3" />
              <Crosshair className="bottom-3 right-3" />

              <span className="absolute right-8 top-4 font-serif text-[130px] leading-none text-gold/15 select-none" aria-hidden="true">
                “
              </span>

              <blockquote className="relative z-10 font-serif text-2xl sm:text-3xl leading-snug text-navy">
                Diversity in leadership is not a statement of values alone — it is a discipline. It sharpens our judgement, strengthens our financial prudence, and keeps us building for the people we intend to serve.
              </blockquote>

              <div className="mt-10 flex flex-wrap items-end justify-between gap-6 border-t border-border pt-6">
                <div>
                  <p className="font-serif text-3xl italic text-gold">The Founding Promoters</p>
                  <p className="mt-1 text-sm font-medium text-navy">Promoter Directors, Aura Dynamics Private Limited</p>
                  <p className="text-xs font-mono text-muted-foreground">CIN: U72900BR2026PTCXXXXXX · Patna, Bihar</p>
                </div>

                {/* Institutional Gold Seal Badge */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-gold/60 bg-gold/10 font-serif text-xs font-bold uppercase tracking-wider text-gold">
                  SEAL · 26
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- SOCIO-ECONOMIC IMPACT DEEP DIVE ---------- */}
      <SplitSection kicker="Socio-Economic Impact" title="Large-scale employment, by design.">
        <div className="space-y-6">
          {IMPACT.map((item, idx) => (
            <Reveal key={item.title}>
              <div className="relative overflow-hidden rounded-xl border border-border bg-card p-8">
                <Crosshair className="top-2 right-2" />
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-border pb-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-bold text-gold">0{idx + 1}</span>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-navy">{item.title}</h3>
                      <p className="text-xs font-mono text-muted-foreground">{item.subtitle}</p>
                    </div>
                  </div>
                  <div className="sm:text-right">
                    <span className="font-mono text-lg font-bold text-gold">{item.stat}</span>
                    <p className="text-[11px] text-muted-foreground uppercase">{item.statLabel}</p>
                  </div>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </SplitSection>

      {/* ---------- CORE VALUES ---------- */}
      <section className="relative border-b border-border bg-background py-20 lg:py-28">
        <div className="container-x">
          <div className="mb-12 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <p className="kicker">Core Values</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                id: "01",
                title: "Integrity & Transparency",
                body: "Clear books, honest disclosure, and governance decisions that withstand any statutory audit without compromise.",
              },
              {
                id: "02",
                title: "Agility & Innovation",
                body: "Ship carefully, test rigorously in sandboxes, learn from edge behavior, and harden technology backbones for decades.",
              },
              {
                id: "03",
                title: "Economic Empowerment",
                body: "Measure corporate success by sustainable livelihoods created and local vendors uplifted, not vanity GMV alone.",
              },
            ].map((v) => (
              <SpotlightCard key={v.id} className="p-8">
                <Crosshair className="top-2 left-2" />
                <span className="font-mono text-xs font-bold text-gold">VAL // {v.id}</span>
                <h3 className="display mt-6 text-2xl text-navy">{v.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{v.body}</p>
              </SpotlightCard>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Magnet>
              <Button asChild variant="navy" size="lg">
                <Link to="/ventures">
                  Explore Strategic Ventures <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </Magnet>
          </div>
        </div>
      </section>
    </>
  );
}
