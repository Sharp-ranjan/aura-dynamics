import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/primitives";
import { seo } from "@/lib/seo";
import { normalizeLegalSlug } from "@/lib/legal-aliases";

const DOCS: Record<string, { title: string; desc: string; sections: [string, string][] }> = {
  "privacy-policy": {
    title: "Privacy Policy",
    desc: "How Aura Dynamics collects and protects the minimal data submitted through enterprise inquiries.",
    sections: [
      ["Scope of Collection", "We collect only the information you voluntarily submit through our enterprise inquiry form — name, organization, official email, telephone number, and message content — strictly for the purpose of responding to institutional inquiries."],
      ["Zero Consumer-Data Monetization", "Aura Dynamics maintains a strict policy against the sale, rental, or monetization of any personal or consumer data. Information is never shared with advertisers or data brokers."],
      ["Retention & Security", "Inquiry data is retained only as long as necessary for correspondence and statutory record-keeping, and is protected with access controls and encryption in transit."],
      ["Your Rights", "You may request access, correction, or deletion of your data by writing to corporate@auradynamics.com, in line with the Digital Personal Data Protection Act, 2023."],
    ],
  },
  "terms-of-service": {
    title: "Terms of Service",
    desc: "Terms governing use of the Aura Dynamics corporate website, under the jurisdiction of courts in Patna, Bihar.",
    sections: [
      ["Use of Website", "This website is provided for informational purposes regarding Aura Dynamics Private Limited. Content may not be reproduced for commercial purposes without written consent."],
      ["No Offer or Solicitation", "Nothing on this website constitutes an offer of securities, investment advice, or a binding commercial commitment."],
      ["Governing Law & Jurisdiction", "These terms are governed by the laws of India. Any dispute shall be subject to the exclusive jurisdiction of the competent courts located in Patna, Bihar, India."],
    ],
  },
  "ip-copyright": {
    title: "IP & Copyright Notice",
    desc: "Intellectual property protections covering Aura Dynamics R&D, codebases, and documentation.",
    sections: [
      ["Ownership", "All research and development, source code, system architectures, designs, and corporate documentation are the exclusive property of Aura Dynamics Private Limited."],
      ["Statutory Protection", "These works are protected under the Indian Copyright Act, 1957 and the Trademarks Act, 1999. The names, marks, and monogram of Aura Dynamics are proprietary identifiers."],
      ["Infringement", "Unauthorized reproduction, reverse engineering, or use of proprietary materials may result in civil and criminal proceedings."],
    ],
  },
  disclaimers: {
    title: "Statutory Disclaimers",
    desc: "Statutory disclaimers regarding forward-looking statements and placeholder corporate information.",
    sections: [
      ["Forward-Looking Statements", "References to ventures in development, roadmaps, or market unveiling reflect current intentions and are subject to change without notice."],
      ["Corporate Identifiers", "Corporate Identification Number and registered office details shown are subject to confirmation with the Ministry of Corporate Affairs records."],
      ["No Warranty", "Information is provided on an 'as is' basis without warranties of completeness or accuracy."],
    ],
  },
};

export const Route = createFileRoute("/legal/$doc")({
  loader: ({ params }) => {
    const d = DOCS[normalizeLegalSlug(params.doc)];
    if (!d) throw notFound();
    return d;
  },
  head: ({ loaderData, params }) => loaderData ? seo(loaderData.title, loaderData.desc, `/legal/${params.doc}`) : { ...seo("Legal document unavailable", "This Aura Dynamics legal document could not be found.", `/legal/${params.doc}`), meta: [...seo("Legal document unavailable", "This Aura Dynamics legal document could not be found.", `/legal/${params.doc}`).meta, { name: "robots", content: "noindex" }] },
  component: Legal,
});

function Legal() {
  const d = Route.useLoaderData();
  return (
    <>
      <PageHeader crumb={d.title} kicker="Legal & Regulatory" title={d.title} lead={d.desc} />
      <section className="container-x grid gap-10 py-20 lg:grid-cols-12">
        <p className="text-xs text-muted-foreground lg:col-span-3">Last updated: October 2026</p>
        <div className="space-y-10 lg:col-span-7">
          {d.sections.map(([h, b], i) => (
            <div key={h} className="border-t pt-6">
              <h2 className="text-xl font-semibold tracking-tight"><span className="mr-3 font-mono text-sm text-gold">{i + 1}.</span>{h}</h2>
              <p className="mt-3 leading-[1.8] text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
