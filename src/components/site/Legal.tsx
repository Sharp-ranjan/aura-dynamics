import React from "react";
import { PageHeader, Section } from "./Layout";
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
        sub={`${BRAND_NAME} · Statutory Disclosure · Effective ${lastUpdated}`}
      />
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 border-b border-border pb-8">
            <p className="text-base leading-relaxed text-muted-foreground">{subtitle}</p>
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

          <div className="mt-14 border-t border-border pt-8 text-xs text-muted-foreground">
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
