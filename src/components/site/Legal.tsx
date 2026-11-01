import React from "react";
import { PageHeader, Section } from "./Layout";
import { ShieldCheck, Scale, FileText } from "lucide-react";
import { BRAND_NAME } from "@/lib/seo";

export interface LegalSection {
  heading: string;
  content: string[];
}

export function LegalPage({
  title,
  subtitle,
  sections,
  lastUpdated = "November 2026",
}: {
  title: string;
  subtitle: string;
  sections: LegalSection[];
  lastUpdated?: string;
}) {
  return (
    <>
      <PageHeader
        crumb={title}
        title={title}
        sub={`${BRAND_NAME} · Statutory Disclosure · Effective Date: ${lastUpdated}`}
      />
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 rounded-sm border border-border/80 bg-surface/50 p-6">
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <ShieldCheck className="h-4 w-4" />
              <span>Official Corporate Instrument</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{subtitle}</p>
          </div>

          <div className="space-y-12">
            {sections.map((sec, idx) => (
              <div key={sec.heading} className="border-b border-border/60 pb-8 last:border-b-0">
                <h2 className="font-display text-xl font-medium text-foreground">
                  {idx + 1}. {sec.heading}
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  {sec.content.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-sm border border-border bg-card p-6 text-xs text-muted-foreground">
            <p className="font-semibold text-foreground">Legal & Regulatory Division</p>
            <p className="mt-1">Aura Dynamics Enterprises Private Limited · Patna, Bihar, India</p>
            <p className="mt-0.5">
              Direct inquiries regarding legal statutory interpretation should be directed to{" "}
              <span className="font-mono text-foreground">legal@auradynamics.in</span>.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
