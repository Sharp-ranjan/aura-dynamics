import { createFileRoute } from "@tanstack/react-router";
import { UserRound } from "lucide-react";
import { PageHeader, Section } from "@/components/site/Layout";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { createPageMeta, BRAND_NAME } from "@/lib/seo";

export const Route = createFileRoute("/governance")({
  head: () =>
    createPageMeta({
      title: "Corporate Governance & Advisory Board — Leadership",
      description:
        "Meet the executive leadership and advisory board of Aura Dynamics Enterprises Private Limited. Institutional governance, technical stewardship, and financial integrity.",
      canonicalPath: "/governance",
    }),
  component: Governance,
});

const ADVISORY_BOARD = [
  {
    role: "Strategic Business & Scaling Advisor",
    experience: "15+ Years Industry Leadership",
    text: "Provides strategic guidance on institutional go-to-market roadmaps, operational scaling across complex regional demographics, and establishing nationwide commercial partnerships.",
    expertise: ["Pan-India Distribution", "Venture Growth Models", "Municipal Partnerships"],
  },
  {
    role: "Technology & Systems Architecture Mentor",
    experience: "Veteran Cloud Infrastructure Architect",
    text: "Guides our software engineering division on zero-trust cybersecurity protocols, resilient microservices topologies, and sub-second transaction throughput under extreme load.",
    expertise: ["Distributed Systems", "Zero-Trust Security", "Real-Time Event Processing"],
  },
  {
    role: "Financial & Corporate Compliance Strategist",
    experience: "Corporate Finance & Regulatory Expert",
    text: "Ensures comprehensive audit compliance, adherence to the Companies Act 2013, Reserve Bank of India payment guidelines, and transparent fiduciary reporting.",
    expertise: ["Regulatory Compliance", "Fiduciary Auditing", "Risk Management"],
  },
];

const GOVERNANCE_CHARTER = [
  {
    title: "Statutory & Regulatory Alignment",
    desc: "Rigorous compliance with the Ministry of Corporate Affairs (MCA), Companies Act 2013, and applicable state commercial directives in Bihar and nationwide.",
  },
  {
    title: "Fiduciary Responsibility & Audit Trail",
    desc: "Uncompromising financial clarity with independent statutory auditors and transparent governance protocols separating corporate reserves from operational venture capital.",
  },
  {
    title: "Zero-Tolerance Ethical Code",
    desc: "Comprehensive anti-bribery, conflict of interest, and data privacy charters binding all directors, advisors, officers, and technical personnel.",
  },
];

function Portrait({ title }: { title: string }) {
  return (
    <div
      className="group relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-sm border border-border bg-gradient-to-b from-surface via-card to-background p-6 shadow-sm"
      aria-label={title}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-border/80 bg-surface/80 text-primary shadow-inner transition-transform group-hover:scale-105">
          <UserRound className="h-10 w-10 text-primary/70" strokeWidth={1.5} />
        </div>
        <span className="mt-4 font-display text-xs font-medium text-muted-foreground">
          Executive Portrait
        </span>
      </div>
    </div>
  );
}

function Governance() {
  return (
    <>
      <PageHeader
        crumb="Governance & Advisors"
        title="Corporate Governance & Leadership"
        sub="Guided by visionary leadership, experienced advisors, and commitment to institutional transparency."
      />

      {/* EXECUTIVE LEADERSHIP */}
      <Section>
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Executive Leadership
        </h2>
        <p className="mt-4 max-w-3xl text-base text-muted-foreground">
          The strategic roadmap, day-to-day operations, banking relationships, and technological
          execution of {BRAND_NAME} are stewarded by our founding Managing Director and executive
          officers.
        </p>

        <div className="mt-12 grid gap-10 rounded-sm border border-border bg-card p-8 md:grid-cols-[300px_1fr] md:gap-14 md:p-12">
          <Portrait title="Founder Managing Director & CEO" />

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                Managing Director & Chief Executive Officer
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                Aura Dynamics Enterprises Private Limited
              </p>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  As the founding promoter and chief executive, she spearheads the overall vision,
                  institutional capital allocation, and expansion agenda for Aura Dynamics across
                  Eastern India and the broader national landscape.
                </p>
                <p>
                  Exercising sovereign operational control, she maintains direct oversight across
                  our product engineering teams, strategic trade alliances, banking relationships,
                  and regulatory filings. Her leadership stands as a prominent testament to
                  high-impact women entrepreneurship emerging from Bihar to lead national technology
                  transformation.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6 sm:grid-cols-3">
              <div>
                <span className="text-xs font-medium text-muted-foreground">Executive Mandate</span>
                <p className="mt-1 text-sm font-semibold text-foreground">Strategic Stewardship</p>
              </div>
              <div>
                <span className="text-xs font-medium text-muted-foreground">Headquarters</span>
                <p className="mt-1 text-sm font-semibold text-foreground">Patna, Bihar</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-xs font-medium text-muted-foreground">Operational Scope</span>
                <p className="mt-1 text-sm font-semibold text-foreground">PAN-India</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ADVISORY BOARD */}
      <section className="border-y border-border bg-surface/70 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              Board of Advisors
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Our executive team is counseled by independent specialists with deep domain experience
              across enterprise technology, scaled venture operations, and institutional compliance.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {ADVISORY_BOARD.map((adv) => (
              <SpotlightCard
                key={adv.role}
                spotlightColor="rgba(99, 102, 241, 0.12)"
                borderGlowColor="rgba(99, 102, 241, 0.35)"
                className="flex flex-col justify-between p-8"
              >
                <div>
                  <div className="flex aspect-[16/10] w-full items-center justify-center rounded-xs border border-border/80 bg-surface/60">
                    <UserRound className="h-12 w-12 text-muted-foreground/60" strokeWidth={1.25} />
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-foreground">{adv.role}</h3>
                    <p className="mt-1 text-xs font-medium text-muted-foreground">
                      {adv.experience}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{adv.text}</p>
                  </div>
                </div>

                <div className="mt-8 border-t border-border/60 pt-4">
                  <span className="text-xs font-medium text-muted-foreground">
                    Areas of Expertise:
                  </span>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {adv.expertise.map((exp) => (
                      <span
                        key={exp}
                        className="rounded-xs border border-border bg-card px-2 py-0.5 text-xs text-foreground/80"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* CORPORATE GOVERNANCE FRAMEWORK */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <h2 className="text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
              Corporate Governance Framework
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Aura Dynamics upholds corporate governance standards consistent with Tier-1 holding
              enterprises, ensuring investor protection, customer privacy, and employee dignity.
            </p>
          </div>

          <div className="space-y-6">
            {GOVERNANCE_CHARTER.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-sm border border-border bg-card p-6 shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm font-semibold text-primary">
                    0{idx + 1}.
                  </span>
                  <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
                </div>
                <p className="mt-3 pl-8 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
