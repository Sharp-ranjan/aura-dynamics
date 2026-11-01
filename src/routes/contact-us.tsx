import { createFileRoute } from "@tanstack/react-router";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Building2, Globe2, Mail, Clock, Send, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Kicker, PageHeader, Section } from "@/components/site/Layout";
import { Magnet } from "@/components/reactbits/Magnet";
import { createPageMeta, BRAND_NAME, HEADQUARTERS_CITY, HEADQUARTERS_STATE } from "@/lib/seo";

export const Route = createFileRoute("/contact-us")({
  head: () =>
    createPageMeta({
      title: "Corporate Inquiries & Secretariat — Patna Headquarters",
      description:
        "Connect with the corporate headquarters of Aura Dynamics Enterprises Private Limited in Patna, Bihar. Institutional partnerships, venture inquiries, and secretariat communications.",
      canonicalPath: "/contact-us",
    }),
  component: Contact,
});

const inquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name cannot exceed 100 characters"),
  organization: z
    .string()
    .trim()
    .min(2, "Organization or entity name is required")
    .max(150, "Organization name cannot exceed 150 characters"),
  email: z
    .string()
    .trim()
    .email("Please provide a valid official corporate email address")
    .max(255),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d\s-]{7,20}$/, "Please provide a valid contact telephone number"),
  department: z.string().min(1, "Please select an inquiry department"),
  subject: z
    .string()
    .trim()
    .min(4, "Subject must be at least 4 characters")
    .max(150, "Subject cannot exceed 150 characters"),
  message: z
    .string()
    .trim()
    .min(15, "Inquiry message must be at least 15 characters to provide adequate context")
    .max(3000, "Inquiry message cannot exceed 3000 characters"),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

const DEPARTMENTS = [
  "Strategic Technology Alliance & Cloud Partnerships",
  "Institutional Investment & Holding Inquiries",
  "Municipal & Government Digital Initiatives",
  "Vendor & Gig-Economy Regional Integration",
  "Press, Media & Corporate Communications",
  "General Secretariat & Statutory Correspondence",
];

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      fullName: "",
      organization: "",
      email: "",
      phone: "",
      department: DEPARTMENTS[0] ?? "",
      subject: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<InquiryFormValues> = async (data) => {
    // Realistic enterprise submission latency
    await new Promise((resolve) => setTimeout(resolve, 800));

    toast.success("Corporate Inquiry Lodged Successfully", {
      description: `Reference confirmation logged for ${data.organization}. The Secretariat will respond within 24 to 48 business hours.`,
      duration: 6000,
    });
    reset();
  };

  return (
    <>
      <PageHeader
        crumb="Contact Us"
        title="Corporate Secretariat & Institutional Inquiries."
        sub="Direct channels to our executive offices, venture directors, and registered headquarters in Patna, Bihar."
      />

      <Section className="grid gap-14 lg:grid-cols-[1fr_1.35fr]">
        {/* OFFICE DIRECTORY DOSSIER */}
        <div className="space-y-8">
          <div>
            <Kicker>Executive Secretariat</Kicker>
            <h2 className="text-3xl font-medium tracking-tight text-foreground">
              Corporate Headquarters
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              All formal legal notices, institutional proposals, and regulatory filings should be
              addressed to our registered office in Patna.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 rounded-sm border border-border bg-card p-6 shadow-xs">
              <Building2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">
                  Registered Office & Corporate Secretariat
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {BRAND_NAME}
                  <br />
                  Corporate Commercial Corridor
                  <br />
                  {HEADQUARTERS_CITY}, {HEADQUARTERS_STATE} — 800001, India
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-primary">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>State of Incorporation: Bihar (ROC Patna)</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 rounded-sm border border-border bg-card p-6 shadow-xs">
              <Globe2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Operational Mandate</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  PAN-India Digital Aggregator Ecosystem with primary deployment gateway centered in
                  Eastern India.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-sm border border-border bg-card p-6 shadow-xs">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Corporate Mailbox</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Official Inquiries:{" "}
                  <span className="font-mono text-foreground font-medium">
                    corporate@auradynamics.in
                  </span>
                  <br />
                  Secretariat Desk:{" "}
                  <span className="font-mono text-foreground font-medium">
                    secretariat@auradynamics.in
                  </span>
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-sm border border-border bg-card p-6 shadow-xs">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Secretariat Working Hours</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Monday to Saturday | 09:30 AM – 06:30 PM IST
                  <br />
                  <span className="text-xs text-muted-foreground/80">
                    Closed on Sundays & Statutory Indian Bank Holidays
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* INSTITUTIONAL INQUIRY FORM */}
        <div className="rounded-sm border border-border bg-surface/80 p-8 md:p-12 shadow-sm">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Institutional Gateway
            </span>
            <h3 className="mt-1 text-2xl font-medium tracking-tight text-foreground">
              Corporate Inquiry Form
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Please complete all mandatory fields. Submissions are encrypted and routed directly to
              the appropriate executive division.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label
                  htmlFor="fullName"
                  className="text-xs font-semibold uppercase tracking-wider"
                >
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  placeholder="e.g. Dr. Rajesh Verma"
                  aria-invalid={errors.fullName ? "true" : "false"}
                  className="mt-2 h-11 bg-background text-sm"
                  {...register("fullName")}
                />
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-destructive" role="alert">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <Label
                  htmlFor="organization"
                  className="text-xs font-semibold uppercase tracking-wider"
                >
                  Organization / Entity *
                </Label>
                <Input
                  id="organization"
                  placeholder="e.g. National Infra Partners Ltd"
                  aria-invalid={errors.organization ? "true" : "false"}
                  className="mt-2 h-11 bg-background text-sm"
                  {...register("organization")}
                />
                {errors.organization && (
                  <p className="mt-1.5 text-xs text-destructive" role="alert">
                    {errors.organization.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider">
                  Official Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@organization.com"
                  aria-invalid={errors.email ? "true" : "false"}
                  className="mt-2 h-11 bg-background text-sm"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-destructive" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider">
                  Contact Telephone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  aria-invalid={errors.phone ? "true" : "false"}
                  className="mt-2 h-11 bg-background text-sm"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-destructive" role="alert">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Label
                htmlFor="department"
                className="text-xs font-semibold uppercase tracking-wider"
              >
                Inquiry Classification *
              </Label>
              <select
                id="department"
                className="mt-2 flex h-11 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                {...register("department")}
              >
                {DEPARTMENTS.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <Label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider">
                Subject of Inquiry *
              </Label>
              <Input
                id="subject"
                placeholder="e.g. Strategic Partnership Proposal — Tier-2 Cloud Integration"
                aria-invalid={errors.subject ? "true" : "false"}
                className="mt-2 h-11 bg-background text-sm"
                {...register("subject")}
              />
              {errors.subject && (
                <p className="mt-1.5 text-xs text-destructive" role="alert">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider">
                Detailed Proposition / Message *
              </Label>
              <Textarea
                id="message"
                rows={5}
                placeholder="Please outline the nature of your institution, proposed scope of collaboration, or specific inquiries for our executive leadership."
                aria-invalid={errors.message ? "true" : "false"}
                className="mt-2 bg-background text-sm leading-relaxed"
                {...register("message")}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-destructive" role="alert">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="pt-2">
              <Magnet strength={0.2} activeDistance={60}>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="h-12 w-full rounded-sm bg-primary px-8 text-sm font-semibold tracking-wide text-primary-foreground shadow-sm hover:bg-primary/90 sm:w-auto"
                >
                  {isSubmitting ? (
                    "Transmitting to Secretariat..."
                  ) : (
                    <>
                      Submit Formal Inquiry <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </Magnet>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
