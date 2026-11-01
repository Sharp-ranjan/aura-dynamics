import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2, Send, MapPin, Mail, Clock, Building2, Phone, Check, Copy } from "lucide-react";
import { PageHeader } from "@/components/site/primitives";
import { Button } from "@/components/ui/button";
import { inquirySchema, type Inquiry } from "@/lib/inquiry-schema";
import { seo } from "@/lib/seo";
import { BorderBeam, Crosshair, Magnet, SpotlightCard } from "@/components/reactbits";

export const Route = createFileRoute("/contact-us")({
  head: () =>
    seo(
      "Contact Us",
      "Corporate inquiries and institutional partnerships with Aura Dynamics Private Limited, Patna, Bihar.",
      "/contact-us",
    ),
  component: Contact,
});

const FIELDS: { k: keyof Inquiry; label: string; type?: string; ph: string; full?: boolean }[] = [
  { k: "name", label: "Full Name", ph: "e.g. Aditi Sharma" },
  { k: "org", label: "Organization / Institution Name", ph: "e.g. Northern Capital Partners" },
  { k: "email", label: "Official Corporate Email", type: "email", ph: "aditi@company.com" },
  { k: "phone", label: "Contact Telephone Number (+91 format)", type: "tel", ph: "+91 98765 43210" },
  { k: "subject", label: "Subject of Inquiry", ph: "e.g. Institutional Partnership / API Integration", full: true },
];

const EMPTY: Inquiry = { name: "", org: "", email: "", phone: "+91 ", subject: "", message: "" };

interface MapNode {
  name: string;
  x: number;
  y: number;
  type: "hq" | "edge";
  latency: string;
}

const REGIONAL_NODES: MapNode[] = [
  { name: "Patna HQ", x: 236, y: 142, type: "hq", latency: "Central Hub" },
  { name: "Lucknow Node", x: 195, y: 130, type: "edge", latency: "< 12ms" },
  { name: "Ranchi Node", x: 242, y: 168, type: "edge", latency: "< 14ms" },
  { name: "Varanasi Node", x: 215, y: 148, type: "edge", latency: "< 10ms" },
  { name: "Kolkata Edge", x: 268, y: 180, type: "edge", latency: "< 18ms" },
  { name: "Bhopal Edge", x: 160, y: 175, type: "edge", latency: "< 20ms" },
  { name: "Jaipur Node", x: 135, y: 130, type: "edge", latency: "< 22ms" },
];

function Contact() {
  const [v, setV] = useState<Inquiry>(EMPTY);
  const [err, setErr] = useState<Partial<Record<keyof Inquiry, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Inquiry, boolean>>>({});
  const [busy, setBusy] = useState(false);
  const [activeNode, setActiveNode] = useState<MapNode>(REGIONAL_NODES[0]!);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const validate = (next: Inquiry) => {
    const r = inquirySchema.safeParse(next);
    const e: typeof err = {};
    if (!r.success) {
      r.error.issues.forEach((i) => {
        e[i.path[0] as keyof Inquiry] ??= i.message;
      });
    }
    setErr(e);
    return r.success;
  };

  const set = (k: keyof Inquiry, val: string) => {
    const n = { ...v, [k]: val };
    setV(n);
    validate(n);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, org: true, email: true, phone: true, subject: true, message: true });
    if (!validate(v)) {
      toast.error("Please complete all required fields correctly.");
      return;
    }
    setBusy(true);
    await new Promise((r) => setTimeout(r, 1200));
    setBusy(false);
    toast.success("Inquiry Successfully Transmitted", {
      description: "Our corporate executive office will review and respond within 2 business days.",
    });
    setV(EMPTY);
    setTouched({});
    setErr({});
  };

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    toast.success(`Copied ${email} to clipboard`);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const inputCls = (k: keyof Inquiry) =>
    `mt-2 w-full rounded-lg border bg-card px-4 py-3 text-[14px] outline-none transition-all placeholder:text-muted-foreground focus:border-gold focus:ring-2 focus:ring-gold/20 ${
      touched[k] && err[k] ? "border-destructive ring-1 ring-destructive/20" : "border-border"
    }`;

  const patna = REGIONAL_NODES[0]!;

  return (
    <>
      <PageHeader
        crumb="Contact Us"
        kicker="Corporate Communications"
        title="Corporate Inquiries & Institutional Partnerships."
        lead="Direct your correspondence to our registered corporate office in Patna or submit an enterprise brief for institutional review."
      />

      <section className="relative bg-background">
        <div className="container-x grid gap-14 py-20 lg:grid-cols-12 lg:py-24">
          {/* Left Column: Corporate Presence & Interactive Map */}
          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 space-y-8">
              <div>
                <div className="mb-4 inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <p className="kicker">Headquarters &amp; Scope</p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-5">
                  <Crosshair className="top-2 right-2" />

                  <div className="flex items-start gap-3">
                    <Building2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="font-mono text-xs uppercase text-muted-foreground">Registered Office</p>
                      <p className="font-semibold text-navy mt-0.5">Aura Dynamics Private Limited</p>
                      <p className="text-sm text-muted-foreground">Patna, Bihar, India — PIN 800001 (Placeholder)</p>
                      <p className="text-xs font-mono text-gold mt-1">CIN: U72900BR2026PTCXXXXXX</p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4 flex items-start gap-3">
                    <Mail className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-mono text-xs uppercase text-muted-foreground">Official Communications</p>
                      <div className="mt-1 space-y-1">
                        {["info@auradynamics.com", "corporate@auradynamics.com"].map((email) => (
                          <div key={email} className="flex items-center justify-between group">
                            <a href={`mailto:${email}`} className="text-sm font-medium text-navy hover:text-gold transition-colors">
                              {email}
                            </a>
                            <button
                              type="button"
                              onClick={() => copyEmail(email)}
                              className="text-muted-foreground hover:text-navy p-1 transition-colors"
                              title="Copy email"
                            >
                              {copiedEmail === email ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4 flex items-start gap-3">
                    <Clock className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="font-mono text-xs uppercase text-muted-foreground">Official Operating Hours</p>
                      <p className="text-sm font-medium text-navy mt-0.5">Monday to Saturday</p>
                      <p className="text-xs text-muted-foreground">09:30 AM – 06:30 PM Indian Standard Time (IST)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Regional Node Map */}
              <div className="rounded-2xl border border-navy/15 bg-card p-6 shadow-sm">
                <Crosshair className="top-2 left-2" />
                <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase text-gold">REGIONAL DISTRIBUTION MESH</p>
                    <p className="text-xs text-muted-foreground">Hover or tap on nodes to inspect network pings</p>
                  </div>
                  <span className="font-mono text-[10px] text-navy font-semibold px-2 py-0.5 bg-muted rounded">
                    PATNA HUB
                  </span>
                </div>

                <div className="relative">
                  <svg
                    viewBox="0 0 320 320"
                    className="w-full select-none"
                    role="img"
                    aria-label="Map showing Patna headquarters and PAN-India regional nodes"
                  >
                    {/* Simplified India Geometrical Perimeter */}
                    <path
                      d="M140 20 L175 30 L190 60 L230 75 L270 110 L300 120 L295 150 L255 160 L240 190 L215 210 L195 250 L175 300 L160 305 L140 270 L120 240 L95 225 L75 200 L50 185 L60 160 L85 150 L95 120 L110 95 L120 60 Z"
                      className="fill-muted/70 stroke-navy/20"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />

                    {/* Regional Vectors */}
                    {REGIONAL_NODES.slice(1).map((node) => (
                      <g key={node.name}>
                        <line
                          x1={patna.x}
                          y1={patna.y}
                          x2={node.x}
                          y2={node.y}
                          className="stroke-gold/50 animate-dash"
                          strokeWidth="1"
                          strokeDasharray="3 4"
                        />
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={activeNode.name === node.name ? 5 : 3.5}
                          className="fill-navy cursor-pointer transition-all hover:fill-gold"
                          onMouseEnter={() => setActiveNode(node)}
                          onClick={() => setActiveNode(node)}
                        />
                      </g>
                    ))}

                    {/* Central Patna HQ Node */}
                    <circle cx={patna.x} cy={patna.y} r="16" className="fill-gold/20 animate-node" />
                    <circle cx={patna.x} cy={patna.y} r="6" className="fill-gold stroke-card stroke-2" />
                    <text x={patna.x + 12} y={patna.y - 10} className="fill-navy text-[11px] font-bold">
                      Patna HQ
                    </text>
                  </svg>

                  {/* Active Node Ping Card */}
                  <div className="mt-3 rounded-lg border border-border bg-background p-3 text-xs font-mono flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-semibold text-navy">{activeNode.name}</span>
                    </div>
                    <span className="text-gold font-bold">{activeNode.latency}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Column: Enterprise Inquiry Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={submit}
              noValidate
              className="relative overflow-hidden rounded-2xl border border-navy/20 bg-card p-8 lg:p-12 shadow-lg"
            >
              <BorderBeam size={280} duration={9} colorFrom="var(--gold)" />
              <Crosshair className="top-3 left-3" />
              <Crosshair className="bottom-3 right-3" />

              <div className="mb-3 inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <p className="kicker">Institutional Form</p>
              </div>

              <h2 className="display text-3xl sm:text-4xl text-navy">
                Initiate an Institutional Dialogue.
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Complete the fields below to schedule a confidential briefing with our executive promoters or technology architects.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {FIELDS.map((f) => (
                  <div key={f.k} className={f.full ? "sm:col-span-2" : ""}>
                    <label htmlFor={f.k} className="text-[13px] font-semibold text-navy">
                      {f.label}
                    </label>
                    <input
                      id={f.k}
                      type={f.type ?? "text"}
                      value={v[f.k]}
                      placeholder={f.ph}
                      onChange={(e) => set(f.k, e.target.value)}
                      onBlur={() => setTouched((t) => ({ ...t, [f.k]: true }))}
                      aria-invalid={!!(touched[f.k] && err[f.k])}
                      aria-describedby={touched[f.k] && err[f.k] ? `${f.k}-err` : undefined}
                      className={inputCls(f.k)}
                    />
                    {touched[f.k] && err[f.k] && (
                      <p id={`${f.k}-err`} className="mt-1.5 text-xs text-destructive font-medium">
                        {err[f.k]}
                      </p>
                    )}
                  </div>
                ))}

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-[13px] font-semibold text-navy">
                    Detailed Message &amp; Context
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={v.message}
                    placeholder="Describe the nature, scope, or institutional parameters of your inquiry..."
                    onChange={(e) => set("message", e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                    aria-invalid={!!(touched.message && err.message)}
                    aria-describedby="message-err"
                    className={inputCls("message")}
                  />
                  <div className="mt-1.5 flex justify-between text-xs">
                    <span id="message-err" aria-live="polite" className="text-destructive font-medium">
                      {touched.message && err.message}
                    </span>
                    <span className="text-muted-foreground font-mono">{v.message.length} / 2000</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-xs text-muted-foreground leading-normal">
                  Data submitted is held under strict non-disclosure pursuant to the DPDP Act, 2023. Zero consumer data monetization.
                </p>
                <Magnet>
                  <Button type="submit" variant="navy" size="lg" disabled={busy} className="min-w-44">
                    {busy ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                      </>
                    ) : (
                      <>
                        Submit Inquiry <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </Magnet>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
