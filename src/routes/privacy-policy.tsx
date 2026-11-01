import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/Legal";
import { createPageMeta, BRAND_NAME } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    createPageMeta({
      title: "Privacy Policy — Corporate Data Protection Standards",
      description:
        "Official privacy charter of Aura Dynamics Enterprises Private Limited. Minimal data collection, non-monetization of user data, and compliance with the Digital Personal Data Protection Act (DPDP).",
      canonicalPath: "/privacy-policy",
    }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <LegalPage
      title="Corporate Privacy Policy"
      subtitle="This charter governs how Aura Dynamics Enterprises Private Limited processes, safeguards, and respects information submitted through our official corporate web portals."
      sections={[
        {
          heading: "Principle of Minimal Data Collection",
          content: [
            `${BRAND_NAME} operates under a strict principle of purposeful, minimal data collection. We do not engage in covert device fingerprinting, unauthorized telemetry, or predatory tracking across third-party websites.`,
            "Information is gathered exclusively when deliberately submitted by institutional visitors through our verified corporate inquiry forms or official secretariat email channels.",
          ],
        },
        {
          heading: "Utilization of Institutional Inquiry Information",
          content: [
            "Data provided—including names, corporate affiliations, business email addresses, and communication transcripts—is utilized solely to evaluate strategic proposals, respond to institutional correspondence, and fulfill statutory commercial obligations.",
            "Under no circumstances does Aura Dynamics monetize, license, rent, or trade corporate or personal information to advertising brokers or marketing syndicates.",
          ],
        },
        {
          heading: "Data Security Architecture & Retention Standards",
          content: [
            "All communications submitted through our corporate web infrastructure are encrypted in transit using industry-standard TLS 1.3 cryptographic protocols and stored within isolated, zero-trust enterprise environments.",
            "Data retention is governed by statutory requirements under Indian law. Information is archived only as long as necessary to address the inquiry or maintain corporate audit compliance.",
          ],
        },
        {
          heading: "Digital Personal Data Protection Act Compliance",
          content: [
            "We adhere rigorously to the statutory provisions of India's Digital Personal Data Protection (DPDP) Act, 2023. Visitors maintain sovereign rights to request the inspection, rectification, or withdrawal of their submitted institutional contact details.",
            "To exercise your statutory data rights, transmit a formal signed request to our designated Data Protection Officer at privacy@auradynamics.in.",
          ],
        },
      ]}
    />
  );
}
