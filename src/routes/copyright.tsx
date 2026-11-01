import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/Legal";
import { createPageMeta, BRAND_NAME } from "@/lib/seo";

export const Route = createFileRoute("/copyright")({
  head: () =>
    createPageMeta({
      title: "IP & Copyright Notice — Statutory Protection Under Indian Law",
      description:
        "Official intellectual property and copyright disclosure of Aura Dynamics Enterprises Private Limited. Protection under Copyright Act 1957 and Trademarks Act 1999.",
      canonicalPath: "/copyright",
    }),
  component: Copyright,
});

function Copyright() {
  return (
    <LegalPage
      title="Intellectual Property & Copyright Notice"
      subtitle="Comprehensive statutory reservation of all proprietary marks, architectural frameworks, technical codebases, and digital assets under the laws of India and international treaties."
      sections={[
        {
          heading: "Statutory Copyright Reservation",
          content: [
            `© 2026 ${BRAND_NAME}. All Rights Reserved worldwide.`,
            "All literary works, software architectures, visual designs, graphic assets, typography compositions, and textual narratives published across this website are protected under the Copyright Act, 1957 (India) and the Berne Convention for the Protection of Literary and Artistic Works.",
          ],
        },
        {
          heading: "Trademark & Brand Assets Protection",
          content: [
            '"Aura Dynamics", "Aura Dynamics Enterprises Private Limited", and the distinctive corporate geometric emblem are trademarks and proprietary service marks owned exclusively by the corporation.',
            "Registration, protection, and enforcement are actively maintained pursuant to the Trademarks Act, 1999. Unauthorized usage, deceptively similar marks, or unauthorized trade branding is strictly prohibited and subject to civil injunctions and criminal prosecution under Indian law.",
          ],
        },
        {
          heading: "Stealth-Mode Incubation & Trade Secret Protection",
          content: [
            "Certain technological platforms, microservices architectures, and consumer ecosystem designs referenced on this domain are actively incubated in stealth mode.",
            "The technical specifications, database schematics, business logic, algorithmic models, and operational frameworks constitute trade secrets and confidential business information protected under Indian law.",
          ],
        },
        {
          heading: "Infringement Notification & Legal Secretariat",
          content: [
            "If any institution or individual believes that any material present on this corporate website infringes upon their protected intellectual property rights, please deliver a formal signed notice to:",
            "Legal Secretariat & Intellectual Property Cell\nAura Dynamics Enterprises Private Limited\nPatna, Bihar, India\nEmail: legal@auradynamics.in",
          ],
        },
      ]}
    />
  );
}
