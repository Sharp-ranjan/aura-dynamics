import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Award,
  Sparkles,
  CheckCircle2,
  Users,
  Building,
  Target,
} from "lucide-react";
import { Kicker, PageHeader, Reveal, Section } from "@/components/site/Layout";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { CountUp } from "@/components/reactbits/CountUp";
import { createPageMeta, BRAND_NAME } from "@/lib/seo";
import local from "@/assets/local-professional.jpg";

export const Route = createFileRoute("/about-us")({
  head: () =>
    createPageMeta({
      title: "About the Holding Corporation — Vision, Mission & Governance",
      description:
        "Learn about Aura Dynamics Enterprises: our institutional parent framework, proud women-led management, socio-economic gig empowerment, and long-term India vision.",
      canonicalPath: "/about-us",
    }),
  component: About,
});

const IMPACT_POINTS = [
  {
    title: "Massive Grassroots Livelihood Integration",
    text: "Our digital aggregator platform is engineered to integrate, empower, and formalize thousands of skilled independent technicians, trade specialists, logistics operators, and local micro-entrepreneurs directly into the formal banking and digital commerce network.",
    metric: "10,000+",
    sub: "Targeted Regional Partners",
  },
  {
    title: "Bridging Tier-2 & Tier-3 Market Inefficiencies",
    text: "By establishing high-speed, direct technological bridges between urban consumer demand and regional service providers, we eliminate predatory middleman fees, enabling higher take-home earnings and long-term financial stability.",
    metric: "40%",
    sub: "Average Income Enhancement",
  },
  {
    title: "Structured Digital Literacy & Upskilling",
    text: "We dismantle technological friction through localized multilingual interfaces, standard operating procedure training, digital payments orientation, and certified quality standardizations.",
    metric: "100%",
    sub: "Digitally Onboarded Workflows",
  },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Uncompromising Integrity & Compliance",
    text: "Operating with institutional corporate discipline, statutory alignment under Indian enterprise legislation, and radical transparency in accounting and platform operations.",
  },
  {
    icon: Target,
    title: "Engineering Excellence & Agility",
    text: "Building fault-tolerant, scalable software architectures capable of servicing high-frequency transactions with strict zero-trust security controls.",
  },
  {
    icon: HeartHandshake,
    title: "Inclusive Socio-Economic Stewardship",
    text: "Measuring corporate success not merely by transaction volume, but by real-world economic prosperity created for regional workforces and emerging micro-economies.",
  },
  {
    icon: Award,
    title: "Long-Term Value Creation",
    text: "Prioritizing durable architectural foundations, sustainable market economics, and customer trust over speculative short-term venture growth.",
  },
];

const WOMEN_LEADERSHIP = [
  {
    title: "Operational Authority & Executive Direction",
    text: "The day-to-day corporate administration, product engineering milestones, and strategic expansion plans are guided directly by our founding women promoters and executive board.",
  },
  {
    title: "Empowering Regional Inclusion",
    text: "We stand as an institutional beacon of progressive corporate stewardship, demonstrating that high-scale technology holding enterprises can originate and thrive in Bihar, fostering gender diversity at every leadership tier.",
  },
  {
    title: "Sovereign Strategic Control",
    text: "While welcoming institutional partnerships, cloud alliances, and strategic advisors, executive control and equity ownership remain anchored within our dedicated founding leadership.",
  },
];

function About() {
  return (
    <>
      <PageHeader
        crumb="About Us"
        title="Institutional Stewardship. Scalable Technology. Inclusive Prosperity."
        sub="Aura Dynamics Enterprises Private Limited is architecting the digital infrastructure for India's emerging economic frontiers."
      />

      {/* VISION & MISSION ARCHITECTURAL DUAL CARDS */}
      <Section>
        <div className="grid border border-border bg-card lg:grid-cols-2">
          <div className="border-b border-border p-8 md:p-14 lg:border-b-0 lg:border-r">
            <Kicker>Long-Term Aspiration</Kicker>
            <h2 className="mt-2 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              Our Vision
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              To establish India's most dependable, scalable, and inclusive digital aggregator
              ecosystem—seamlessly bridging the gap between high-demand urban markets and skilled
              regional workforces across PAN-India, beginning with the vibrant economic corridor of
              Eastern India.
            </p>
            <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-4 w-4" />
              <span>National Integration Blueprint</span>
            </div>
          </div>

          <div className="p-8 md:p-14">
            <Kicker>Operational Mandate</Kicker>
            <h2 className="mt-2 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              To leverage mission-critical software engineering, ethical corporate governance, and
              grassroots community empathy to simplify everyday commercial interactions, uplift
              independent service providers, and construct enterprise-grade digital utilities.
            </p>
            <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
              <CheckCircle2 className="h-4 w-4" />
              <span>Empowerment Through Technology</span>
            </div>
          </div>
        </div>
      </Section>

      {/* CORPORATE HOLDING & INCUBATION OVERVIEW */}
      <section className="border-y border-border bg-surface/70 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <div>
              <Kicker>Parent Entity Structure</Kicker>
              <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-4xl lg:text-[40px]">
                The Holding Model: Purpose-Built for Long-Term Scale.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                Aura Dynamics does not operate as a single consumer brand. Instead, we function as a
                strategic parent holding company that builds, finances, and incubates specialized
                technology platforms.
              </p>
              <p>
                Each incubated initiative benefits from shared corporate infrastructure: centralized
                cybersecurity auditing, cloud architecture, compliance oversight, legal counsel, and
                unified customer service protocols. This reduces operational overhead while ensuring
                that every consumer touchpoint meets the highest enterprise standards.
              </p>
              <div className="pt-2">
                <Link
                  to="/ventures"
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-primary hover:underline"
                >
                  Inspect our stealth-mode ventures portfolio <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WOMEN-LED ENTERPRISE CHARTER */}
      <Section>
        <div className="border-l-4 border-primary pl-6 md:pl-10">
          <Kicker>Governance & Promoter Identity</Kicker>
          <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight md:text-4xl lg:text-[42px]">
            A Proud Women-Led and Women-Managed Corporate Enterprise.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Aura Dynamics is founded, directed, and operated under the strategic stewardship of
            women leadership, reflecting an institutional commitment to diversity, resilience, and
            equitable corporate governance.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {WOMEN_LEADERSHIP.map((item, idx) => (
            <SpotlightCard
              key={item.title}
              spotlightColor="rgba(99, 102, 241, 0.12)"
              borderGlowColor="rgba(99, 102, 241, 0.35)"
              className="p-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xs bg-primary/10 text-primary">
                <Building className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-medium tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              <div className="mt-6 text-[11px] font-semibold uppercase tracking-wider text-primary">
                Leadership Pillar 0{idx + 1}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </Section>

      {/* SOCIO-ECONOMIC & EMPLOYMENT IMPACT SECTION */}
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-400">
                Livelihood Creation & Regional Upliftment
              </p>
              <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-4xl lg:text-[40px]">
                Catalyzing Employment Across India's Heartland.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-muted">
                India's economic future is being forged in Tier-2 and Tier-3 urban centers. Our
                technology aggregation architecture is designed to turn fragmented daily labor into
                structured, dignified micro-entrepreneurship.
              </p>

              <div className="mt-10 overflow-hidden rounded-sm border border-navy-foreground/20">
                <img
                  src={local}
                  alt="Local service technician utilizing digital aggregator software in Patna"
                  loading="lazy"
                  width={1280}
                  height={1280}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-8">
              {IMPACT_POINTS.map((item, idx) => (
                <div
                  key={item.title}
                  className="rounded-sm border border-navy-foreground/15 bg-navy/60 p-8 backdrop-blur-sm"
                >
                  <div className="flex items-baseline justify-between border-b border-navy-foreground/10 pb-4">
                    <span className="font-display text-xs font-semibold uppercase tracking-widest text-navy-muted">
                      Impact Dimension 0{idx + 1}
                    </span>
                    <span className="font-display text-2xl font-bold text-primary-foreground">
                      {item.metric}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-medium text-navy-foreground">{item.title}</h3>

                  <p className="mt-3 text-sm leading-relaxed text-navy-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES GRID */}
      <Section>
        <div className="max-w-2xl">
          <Kicker>Institutional Ethics</Kicker>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            Our Guiding Corporate Values
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            The principles that govern our engineering decisions, corporate governance, and
            community relationships.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((val) => (
            <div
              key={val.title}
              className="group rounded-sm border border-border bg-card p-7 transition-all hover:border-primary/50 hover:shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <val.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 text-lg font-medium text-foreground">{val.title}</h3>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{val.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
