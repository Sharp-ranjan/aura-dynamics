import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Reveal, SplitSection } from "@/components/site/primitives";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about-us")({
  head: () => seo("About Us", "Aura Dynamics is a women-led technology holding corporation architecting scalable, inclusive digital infrastructure for India.", "/about-us"),
  component: About,
});

const IMPACT = [
  ["Massive Livelihood Creation", "Direct onboarding of gig professionals, delivery networks, and local service providers into the formal digital economy — with transparent earnings, documented engagement, and access to formal financial rails."],
  ["Empowering Local Micro-Businesses", "Eliminating intermediary friction across Tier-2 and Tier-3 cities so local merchants and service enterprises reach demand directly and unlock steady, predictable income streams."],
  ["Skill Advancement & Digital Inclusion", "Digital literacy workshops and codified quality standards that upskill grassroots service partners, raising both earning potential and the consistency of service delivered to citizens."],
];

function About() {
  return (
    <>
      <PageHeader crumb="About Us" kicker="Who We Are" title="About Aura Dynamics — Architecting Scalable, Inclusive Digital Infrastructure." />

      <section className="border-b">
        <div className="container-x grid gap-6 py-20 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-7">
            <div className="relative h-full rounded-xl border bg-navy p-10 text-primary-foreground lg:p-14">
              <span className="absolute left-0 top-10 h-16 w-[3px] bg-gold" />
              <p className="kicker">Vision</p>
              <p className="display mt-6 text-3xl leading-tight lg:text-[40px]">To become India's most trusted digital backbone for essential services — reaching every district with metropolitan-grade reliability.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:mt-16">
            <div className="relative rounded-xl border bg-card p-10">
              <span className="absolute left-0 top-10 h-16 w-[3px] bg-gold" />
              <p className="kicker">Mission</p>
              <p className="mt-6 text-lg leading-relaxed">To build, finance, and govern technology ventures that aggregate high-utility services, formalise local livelihoods, and operate under uncompromising standards of compliance and audit.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <SplitSection kicker="Corporate Holding Framework" title="A parent company built for disciplined scale.">
        <div className="space-y-6 text-[17px] leading-[1.8] text-muted-foreground">
          <p>Aura Dynamics Private Limited serves as the parent holding entity for a portfolio of high-impact technology ventures. The holding company owns the shared technology backbone, sets risk and compliance policy, and allocates capital to ventures that meet defined milestones.</p>
          <p>Every venture operates within a governance perimeter defined by the board: statutory audits, segregated financial reporting, data-protection controls, and periodic internal reviews.</p>
          <dl className="mt-10 divide-y border-y">
            {[["Ownership", "Shared IP, infrastructure, and brand assets held at the parent level"], ["Oversight", "Board-level review of capital allocation and venture milestones"], ["Assurance", "Statutory audit, internal controls, and compliance reporting"]].map(([a, b]) => (
              <div key={a} className="grid gap-2 py-5 sm:grid-cols-3"><dt className="font-semibold text-navy">{a}</dt><dd className="sm:col-span-2 text-[15px]">{b}</dd></div>
            ))}
          </dl>
        </div>
      </SplitSection>

      <section className="border-b bg-card">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-4">
            <p className="kicker mb-4">Editorial Spotlight</p>
            <h2 className="display text-3xl sm:text-4xl">Proudly Women-Led &amp; Managed Enterprise</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">Our founding women promoters and directors hold full operational control, executive governance, and daily strategic authority across the enterprise.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Operational Control", "Executive Governance", "Strategic Authority"].map((t) => (
                <span key={t} className="rounded-full border px-3 py-1 text-xs font-medium">{t}</span>
              ))}
            </div>
          </div>
          <Reveal className="lg:col-span-8">
            <figure className="relative rounded-xl border-l-[3px] border-gold bg-background p-10 lg:p-14">
              <span className="absolute right-10 top-4 font-serif text-[120px] leading-none text-gold/30" aria-hidden="true">“</span>
              <blockquote className="font-serif text-2xl leading-snug text-navy lg:text-[34px]">
                Diversity in leadership is not a statement of values alone — it is a discipline. It sharpens our judgement, strengthens our financial prudence, and keeps us building for the people we intend to serve.
              </blockquote>
              <figcaption className="mt-10 flex items-end justify-between border-t pt-6">
                <div>
                  <p className="font-serif text-3xl italic text-gold">The Founding Promoters</p>
                  <p className="mt-1 text-sm text-muted-foreground">Promoter Directors, Aura Dynamics Private Limited</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <SplitSection kicker="Socio-Economic Impact" title="Large-scale employment, by design.">
        <ol className="space-y-0">
          {IMPACT.map(([t, b], i) => (
            <Reveal key={t}>
              <li className="grid gap-4 border-t py-10 sm:grid-cols-[80px_1fr]">
                <span className="font-mono text-sm text-gold">0{i + 1}</span>
                <div><h3 className="text-2xl font-semibold tracking-tight">{t}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{b}</p></div>
              </li>
            </Reveal>
          ))}
        </ol>
      </SplitSection>

      <section>
        <div className="container-x py-20 lg:py-28">
          <p className="kicker mb-4">Core Values</p>
          <div className="mt-8 grid border-t lg:grid-cols-3">
            {[["Integrity & Transparency", "Clear books, honest disclosure, and decisions that withstand audit."], ["Agility & Innovation", "Ship carefully, learn quickly, and harden what works."], ["Economic Empowerment", "Measure success by livelihoods created, not just revenue earned."]].map(([t, b], i) => (
              <div key={t} className={`py-10 lg:px-8 ${i ? "border-t lg:border-l lg:border-t-0" : "lg:pl-0"}`}>
                <h3 className="display text-2xl">{t}</h3>
                <p className="mt-3 text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
