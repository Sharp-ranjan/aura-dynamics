import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/Legal";
import { createPageMeta, BRAND_NAME, HEADQUARTERS_CITY, HEADQUARTERS_STATE } from "@/lib/seo";

export const Route = createFileRoute("/terms-of-service")({
  head: () =>
    createPageMeta({
      title: "Terms of Service — Corporate Governance & Legal Jurisdiction",
      description:
        "Terms and statutory conditions governing access to the corporate website of Aura Dynamics Enterprises Private Limited. Exclusive jurisdiction in Patna, Bihar.",
      canonicalPath: "/terms-of-service",
    }),
  component: TermsOfService,
});

function TermsOfService() {
  return (
    <LegalPage
      title="Terms of Service & Corporate Governance"
      subtitle="These statutory terms establish the legal parameters, proprietary ownership boundaries, and dispute resolution mechanisms governing interaction with the corporate infrastructure of Aura Dynamics Enterprises Private Limited."
      sections={[
        {
          heading: "Acceptance of Corporate Terms",
          content: [
            `By accessing, reviewing, or interacting with the digital assets, venture blueprints, or communications infrastructure of ${BRAND_NAME}, you formally acknowledge and agree to be bound by these corporate terms of service.`,
            "If you do not accept these terms in their entirety, you must discontinue utilization of this corporate domain immediately.",
          ],
        },
        {
          heading: "Proprietary Rights & Intellectual Property Reservation",
          content: [
            "All text, graphics, system architecture diagrams, trademarks, logos, trade secrets, software codebases, and conceptual frameworks contained on this website are the sovereign intellectual property of Aura Dynamics Enterprises Private Limited.",
            "No content may be reproduced, reverse-engineered, scraped, mirrored, or redistributed without prior express written authorization signed by an authorized director of the corporation.",
          ],
        },
        {
          heading: "Stealth-Mode Incubation Non-Disclosure",
          content: [
            "All details, architectural descriptions, and technical blueprints pertaining to our stealth-mode consumer ecosystems are proprietary trade secrets.",
            "Access to non-public materials or confidential briefs via corporate correspondence creates a strict duty of confidentiality under Indian common law and applicable contracts.",
          ],
        },
        {
          heading: "Limitation of Corporate Liability",
          content: [
            "Information on this website is provided for institutional informational purposes only and does not constitute a public solicitation of securities, debentures, or venture capital under SEBI regulations.",
            "Aura Dynamics makes no representations or warranties regarding third-party service availability or uninterrupted server access.",
          ],
        },
        {
          heading: "Governing Law & Exclusive Judicial Jurisdiction",
          content: [
            "These terms shall be constructed, governed, and enforced strictly in accordance with the laws of the Republic of India.",
            `Any legal proceeding, dispute, claim, or statutory arbitration arising out of or in connection with this corporate website or holding operations shall be submitted to the exclusive jurisdiction of the competent courts of law situated in ${HEADQUARTERS_CITY}, ${HEADQUARTERS_STATE}, India.`,
          ],
        },
      ]}
    />
  );
}
