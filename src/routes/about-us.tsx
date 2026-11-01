import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, HeartHandshake, Award, Building, Target } from "lucide-react";
import { PageHeader, Reveal, Section } from "@/components/site/Layout";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";
import { createPageMeta, BRAND_NAME } from "@/lib/seo";
import local from "@/assets/local-professional.jpg";

export const Route = createFileRoute("/about-us")({
  head: () =>
    createPageMeta({
      title: "About Us — Corporate Vision & Governance",
      description:
        "Learn about Aura Dynamics Enterprises: our institutional parent framework, women-led management, socio-economic gig empowerment, and long-term India vision.",
      canonicalPath: "/about-us",
    }),
  component: About,
});

const IMPACT_POINTS = [
  {
    title: "Grassroots Livelihood Integration",
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
    title: "Structured Digital Literacy & Standards",
    text: "We dismantle technological friction through localized multilingual interfaces, standard operating procedure training, digital payments orientation, and certified quality standardizations.",
    metric: "100%",
    sub: "Digitally Onboarded Workflows",
  },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Integrity & Compliance",
    text: "Operating with institutional corporate discipline, statutory alignment under Indian enterprise legislation, and radical transparency in accounting and platform operations.",
  },
  {
    icon: Target,
    title: "Engineering Excellence",
    text: "Building fault-tolerant, scalable software architectures capable of servicing high-frequency transactions with strict zero-trust security controls.",
  },
  {
    icon: HeartHandshake,
    title: "Socio-Economic Stewardship",
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
    title: "Executive Direction & Governance",
    text: "Day-to-day corporate administration, product engineering milestones, and strategic expansion plans are guided directly by our founding women promoters and executive board.",
  },
  {
    title: "Regional Representation",
    text: "We stand as an institutional example of progressive corporate stewardship, demonstrating that high-scale technology holding enterprises can originate and thrive in Bihar, fostering gender diversity at every leadership tier.",
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
        title="About Aura Dynamics Enterprises"
        sub="Institutional stewardship, scalable software engineering, and regional economic participation."
      />

      {/* VISION & MISSION SECTION */}
      <Section>
        <div className="grid border border-border bg-card lg:grid-cols-2">
          <div className="border-b border-border p-8 md:p-14 lg:border-b-0 lg:border-r">
            <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              Our Vision
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              To establish India's most dependable, scalable, and inclusive digital aggregator
              ecosystem—seamlessly bridging the gap between high-demand urban markets and skilled
              regional workforces across PAN-India, beginning with the vibrant economic corridor of
              Eastern India.
            </p>
          </div>

          <div className="p-8 md:p-14">
            <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              To leverage mission-critical software engineering, ethical corporate governance, and
              grassroots community empathy to simplify everyday commercial interactions, uplift
              independent service providers, and construct enterprise-grade digital utilities.
            </p>
          </div>
        </div>
      </Section>

      {/* CORPORATE STRUCTURE */}
      <section className="border-y border-border bg-surface/70 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <div>
              <h2 className="text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl lg:text-[40px]">
                Corporate Structure & Holding Model
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
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Our technology ventures and R&D <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WOMEN-LED ENTERPRISE */}
      <Section>
        <div className="border-l-4 border-primary pl-6 md:pl-10">
          <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl lg:text-[42px]">
            Women-Led Corporate Stewardship
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Aura Dynamics is founded, directed, and operated under the strategic stewardship of
            women leadership, reflecting an institutional commitment to diversity, resilience, and
            equitable corporate governance.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {WOMEN_LEADERSHIP.map((item) => (
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
            </SpotlightCard>
          ))}
        </div>
      </Section>

      {/* EMPLOYMENT & SOCIO-ECONOMIC IMPACT */}
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <div>
              <h2 className="text-3xl font-medium leading-tight tracking-tight text-navy-foreground md:text-4xl lg:text-[40px]">
                Employment & Socio-Economic Impact
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

            <div className="space-y-6">
              {IMPACT_POINTS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-sm border border-navy-foreground/15 bg-navy/60 p-8 backdrop-blur-sm"
                >
                  <div className="flex items-baseline justify-between border-b border-navy-foreground/10 pb-4">
                    <h3 className="text-xl font-medium text-navy-foreground">{item.title}</h3>
                    <span className="font-display text-2xl font-bold text-primary-foreground">
                      {item.metric}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-navy-muted">{item.text}</p>
                  <p className="mt-2 text-xs font-medium text-navy-muted/80">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <Section>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Our Values
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
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{val.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
