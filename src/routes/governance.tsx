import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { PageHeader, Reveal } from "@/components/site/primitives";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/governance")({
  head: () => seo("Governance & Advisors", "Corporate governance, executive leadership, and the board of advisors guiding Aura Dynamics Private Limited.", "/governance"),
  component: Governance,
});

const ADVISORS = [
  { role: "Strategic Business & Scaling Advisor", exp: "15+ years", note: "Scaling digital ventures and leading multi-region venture expansion.", tags: ["Go-to-Market", "Venture Scaling", "Partnerships"] },
  { role: "Technology & Architecture Mentor", exp: "Veteran architect", note: "Zero-trust cybersecurity and distributed cloud systems at national scale.", tags: ["Zero-Trust", "Distributed Systems", "Cloud"] },
  { role: "Financial & Corporate Compliance Strategist", exp: "Corporate finance veteran", note: "Statutory compliance, tax governance, and institutional funding.", tags: ["Statutory Compliance", "Tax Governance", "Funding"] },
];

function Governance() {
  return (
    <>
      <PageHeader crumb="Governance & Advisors" kicker="Leadership" title="Corporate Governance & Leadership — Visionary Promoters, Proven Industry Guidance." />

      <section className="border-b">
        <div className="container-x py-20 lg:py-28">
          <p className="kicker mb-8">Executive Leadership</p>
          <Reveal>
            <article className="grid overflow-hidden rounded-xl border bg-card lg:grid-cols-12">
              <div className="relative flex flex-col justify-between bg-navy p-10 text-primary-foreground lg:col-span-4">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-gold/50 font-serif text-5xl italic text-gold">MD</div>
                <div className="mt-12">
                  <p className="text-2xl font-semibold tracking-tight">Managing Director &amp; CEO</p>
                  <p className="mt-1 text-sm text-ink-muted">Founding Promoter Director</p>
                </div>
              </div>
              <div className="p-10 lg:col-span-8 lg:p-14">
                <p className="text-lg leading-[1.8] text-muted-foreground">
                  The Founding Managing Director &amp; CEO leads Aura Dynamics' PAN-India strategic vision and holds day-to-day executive authority across operations. Her mandate spans operational discipline, banking and capital relationships, and the company's regulatory milestones — from incorporation and statutory registrations to the governance frameworks that will carry the enterprise through its next phase of scale.
                </p>
                <div className="mt-10 flex flex-wrap gap-3 border-t pt-8">
                  {["Day-to-day Executive Authority", "PAN-India Expansion", "Banking & Capital Relations"].map((b) => (
                    <span key={b} className="inline-flex items-center gap-2 rounded-md border border-gold/40 bg-gold/10 px-3 py-2 text-[13px] font-medium"><ShieldCheck className="h-4 w-4 text-gold" />{b}</span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container-x py-20 lg:py-28">
          <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
            <div><p className="kicker mb-4">Board of Advisors &amp; Mentors</p><h2 className="display text-3xl sm:text-4xl">Proven guidance across scale, systems, and capital.</h2></div>
            <p className="text-muted-foreground lg:text-right">Advisor identities are disclosed upon formal board appointment.</p>
          </div>
          <div className="grid border-t md:grid-cols-3">
            {ADVISORS.map((a, i) => (
              <Reveal key={a.role} delay={i * 0.08}>
                <div className={`flex h-full flex-col py-10 md:px-8 ${i ? "border-t md:border-l md:border-t-0" : "md:pl-0"}`}>
                  <span className="font-mono text-xs text-gold">ADV—0{i + 1}</span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">{a.role}</h3>
                  <p className="mt-2 text-sm font-medium text-navy">{a.exp}</p>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{a.note}</p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {a.tags.map((t) => <span key={t} className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium">{t}</span>)}
                  </div>
                  <p className="mt-6 border-t pt-4 text-xs uppercase tracking-wider text-muted-foreground">Institutional role · Advisory Board</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
