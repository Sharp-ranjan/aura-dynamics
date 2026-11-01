import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Scale, Award, FileCheck2, ArrowRight } from "lucide-react";
import { PageHeader, Reveal } from "@/components/site/primitives";
import { seo } from "@/lib/seo";
import { BorderBeam, Crosshair, SpotlightCard, Magnet } from "@/components/reactbits";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/governance")({
  head: () =>
    seo(
      "Governance & Advisors",
      "Corporate governance, executive leadership, and the board of advisors guiding Aura Dynamics Private Limited.",
      "/governance",
    ),
  component: Governance,
});

const ADVISORS = [
  {
    role: "Strategic Business & Scaling Advisor",
    exp: "15+ Years Experience",
    note: "Specializing in multi-region venture expansion, franchise/partner network rollouts, and unit-economics optimization across emerging Indian markets.",
    tags: ["Go-to-Market", "Venture Scaling", "Institutional Partnerships"],
  },
  {
    role: "Technology & Architecture Mentor",
    exp: "Veteran Systems Architect",
    note: "Advising on zero-trust cybersecurity protocols, resilient microservices topologies, and distributed cloud meshes engineered for national throughput.",
    tags: ["Zero-Trust Security", "Distributed Systems", "Cloud Governance"],
  },
  {
    role: "Financial & Statutory Compliance Strategist",
    exp: "Senior Corporate Finance Counsel",
    note: "Providing institutional direction across MCA-21 statutory filings, direct/indirect tax compliance, financial audit integrity, and institutional debt/equity capitalization.",
    tags: ["Statutory Compliance", "Tax Governance", "Institutional Capital"],
  },
];

const COMPLIANCE_PILLARS = [
  {
    title: "Ministry of Corporate Affairs (MCA)",
    desc: "Strict adherence to the Companies Act, 2013, with active filings, statutory registers, and board minutes maintained under formal secretarial audit.",
  },
  {
    title: "Digital Personal Data Protection Act, 2023",
    desc: "Full institutional data fiduciary compliance: zero consumer-data monetization, purpose-limited data collection, and robust citizen consent frameworks.",
  },
  {
    title: "Financial Rails & Payment Settlements",
    desc: "Architected to interface directly with RBI-regulated banking partners and escrow mechanisms for transparent, verifiable vendor payouts.",
  },
  {
    title: "Intellectual Property Safeguards",
    desc: "All source code, platform architectures, and brand identifiers protected under the Indian Copyright Act, 1957 and Trademarks Act, 1999.",
  },
];

function Governance() {
  return (
    <>
      <PageHeader
        crumb="Governance & Advisors"
        kicker="Corporate Leadership"
        title="Corporate Governance & Leadership — Visionary Promoters, Proven Industry Guidance."
        lead="Aura Dynamics Private Limited is governed by an unshakeable standard of statutory compliance, fiduciary responsibility, and long-term shareholder trust."
      />

      {/* ---------- EXECUTIVE LEADERSHIP SPOTLIGHT ---------- */}
      <section className="relative border-b border-border bg-background py-20 lg:py-28">
        <div className="container-x">
          <div className="mb-10 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <p className="kicker">Executive Leadership</p>
          </div>

          <Reveal>
            <article className="relative overflow-hidden rounded-2xl border border-navy/20 bg-card shadow-lg lg:grid lg:grid-cols-12">
              <BorderBeam size={260} duration={8} colorFrom="var(--gold)" />
              <Crosshair className="top-3 left-3" />
              <Crosshair className="bottom-3 right-3" />

              {/* MD Medallion / Profile Column */}
              <div className="relative flex flex-col justify-between bg-navy p-10 text-primary-foreground lg:col-span-4 lg:p-12">
                <div>
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10 font-serif text-4xl italic text-gold shadow-sm">
                    MD
                  </div>
                  <div className="mt-8">
                    <p className="font-mono text-xs text-gold uppercase tracking-wider">FOUNDING PROMOTER DIRECTOR</p>
                    <h3 className="text-2xl font-bold tracking-tight text-primary-foreground mt-1">
                      Managing Director &amp; CEO
                    </h3>
                    <p className="mt-1 text-xs text-ink-muted">Aura Dynamics Private Limited</p>
                  </div>
                </div>

                <div className="mt-10 border-t border-ink-border pt-6 font-mono text-xs text-ink-muted">
                  <p>OPERATIONAL AUTHORITY: FULL</p>
                  <p className="mt-1">HEADQUARTERS: PATNA, BIHAR</p>
                </div>
              </div>

              {/* Executive Biography & Mandate */}
              <div className="p-10 lg:col-span-8 lg:p-14 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-2xl text-navy italic">
                    "Institutional discipline is not an afterthought — it is our chief competitive advantage."
                  </h4>

                  <p className="mt-6 text-base sm:text-lg leading-[1.8] text-muted-foreground">
                    The Founding Managing Director &amp; CEO leads Aura Dynamics' PAN-India strategic vision and holds day-to-day executive authority across all corporate operations. Her mandate encompasses operational discipline, strategic banking relationships, and regulatory milestones — from incorporation and statutory compliance to the technological frameworks that will guide the enterprise through national scale.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-8">
                  {[
                    "Day-to-day Executive Authority",
                    "PAN-India Expansion Mandate",
                    "Banking & Institutional Capital Relations",
                    "Direct Statutory Compliance Oversight",
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-2 rounded-lg border border-gold/30 bg-gold/10 px-3.5 py-2 text-xs font-semibold text-navy font-mono"
                    >
                      <ShieldCheck className="h-4 w-4 text-gold shrink-0" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ---------- BOARD OF ADVISORS & MENTORS ---------- */}
      <section className="relative border-b border-border bg-card py-20 lg:py-28">
        <div className="container-x">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="mb-3 inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <p className="kicker">Board of Advisors &amp; Mentors</p>
              </div>
              <h2 className="display text-3xl sm:text-4xl lg:text-[44px] text-navy">
                Proven guidance across scale, systems, and capital.
              </h2>
            </div>
            <p className="max-w-md font-mono text-xs text-muted-foreground lg:text-right">
              ADVISORY COUNCIL // IDENTITIES DISCLOSED UPON FORMAL BOARD INDUCTION
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {ADVISORS.map((a, i) => (
              <SpotlightCard key={a.role} className="flex h-full flex-col p-8">
                <Crosshair className="top-2 left-2" />
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="font-mono text-xs font-bold text-gold">ADV // 0{i + 1}</span>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">ADVISORY BOARD</span>
                </div>

                <h3 className="mt-5 text-xl font-bold tracking-tight text-navy">{a.role}</h3>
                <p className="mt-1 font-mono text-xs font-semibold text-gold">{a.exp}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{a.note}</p>

                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-border pt-4">
                  {a.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-muted px-2.5 py-1 text-[11px] font-mono font-medium text-navy"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- STATUTORY COMPLIANCE & LEGAL FRAMEWORK ---------- */}
      <section className="relative bg-background py-20 lg:py-28">
        <div className="container-x">
          <div className="mb-12 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <p className="kicker">Statutory Governance</p>
          </div>

          <h2 className="display max-w-2xl text-3xl sm:text-4xl text-navy">
            Institutional compliance built into the operational DNA.
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {COMPLIANCE_PILLARS.map((col) => (
              <div key={col.title} className="relative rounded-xl border border-border bg-card p-6 shadow-sm">
                <Crosshair className="top-2 right-2" />
                <div className="flex items-center gap-2">
                  <Scale className="h-4 w-4 text-gold shrink-0" />
                  <h3 className="text-base font-bold text-navy">{col.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{col.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Magnet>
              <Button asChild variant="navy" size="lg">
                <Link to="/contact-us">
                  Connect with Corporate Office <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </Magnet>
          </div>
        </div>
      </section>
    </>
  );
}
