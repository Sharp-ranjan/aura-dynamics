import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { PageHeader } from "@/components/site/primitives";
import { Button } from "@/components/ui/button";
import { inquirySchema, type Inquiry } from "@/lib/inquiry-schema";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact-us")({
  head: () => seo("Contact Us", "Corporate inquiries and institutional partnerships with Aura Dynamics Private Limited, Patna, Bihar.", "/contact-us"),
  component: Contact,
});

const FIELDS: { k: keyof Inquiry; label: string; type?: string; ph: string; full?: boolean }[] = [
  { k: "name", label: "Full Name", ph: "Your full name" },
  { k: "org", label: "Organization / Entity Name", ph: "Company or institution" },
  { k: "email", label: "Official Corporate Email", type: "email", ph: "name@company.com" },
  { k: "phone", label: "Contact Telephone Number", type: "tel", ph: "+91 98765 43210" },
  { k: "subject", label: "Subject of Inquiry", ph: "e.g. Strategic partnership", full: true },
];

const EMPTY: Inquiry = { name: "", org: "", email: "", phone: "+91 ", subject: "", message: "" };

// Approximate positions on an India outline viewBox
const NODES: [number, number][] = [[150, 95], [95, 140], [200, 185], [120, 230], [170, 265], [215, 120], [80, 180]];
const PATNA: [number, number] = [236, 142];

function Contact() {
  const [v, setV] = useState<Inquiry>(EMPTY);
  const [err, setErr] = useState<Partial<Record<keyof Inquiry, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Inquiry, boolean>>>({});
  const [busy, setBusy] = useState(false);

  const validate = (next: Inquiry) => {
    const r = inquirySchema.safeParse(next);
    const e: typeof err = {};
    if (!r.success) r.error.issues.forEach((i) => { e[i.path[0] as keyof Inquiry] ??= i.message; });
    setErr(e);
    return r.success;
  };
  const set = (k: keyof Inquiry, val: string) => { const n = { ...v, [k]: val }; setV(n); validate(n); };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, org: true, email: true, phone: true, subject: true, message: true });
    if (!validate(v)) return;
    setBusy(true);
    await new Promise((r) => setTimeout(r, 1200));
    setBusy(false);
    toast.success("Inquiry received", { description: "Our corporate office will respond within 2 business days." });
    setV(EMPTY); setTouched({}); setErr({});
  };

  const inputCls = (k: keyof Inquiry) => `mt-2 w-full rounded-md border bg-card px-3.5 py-3 text-[15px] outline-none transition-colors placeholder:text-muted-foreground focus:border-gold focus:ring-2 focus:ring-gold/20 ${touched[k] && err[k] ? "border-destructive" : "border-input"}`;

  return (
    <>
      <PageHeader crumb="Contact Us" kicker="Corporate Communications" title="Corporate Inquiries & Institutional Partnerships." />
      <section>
        <div className="container-x grid gap-14 py-20 lg:grid-cols-12 lg:py-24">
          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="kicker mb-6">Corporate Headquarters &amp; Presence</p>
              <dl className="divide-y border-y text-[15px]">
                <Row t="Registered Office">Aura Dynamics Private Limited<br />Patna, Bihar, India — PIN 800XXX</Row>
                <Row t="Operational Scope">PAN-India Service Aggregation Mesh</Row>
                <Row t="Official Inquiries"><a className="hover:text-gold" href="mailto:info@auradynamics.com">info@auradynamics.com</a><br /><a className="hover:text-gold" href="mailto:corporate@auradynamics.com">corporate@auradynamics.com</a></Row>
                <Row t="Operating Hours">Monday to Saturday<br />09:30 AM – 06:30 PM IST</Row>
              </dl>
              <div className="mt-8 rounded-xl border bg-card p-5">
                <div className="mb-3 flex items-center justify-between"><p className="kicker">Regional Node Indicator</p><span className="text-[11px] text-muted-foreground">HQ · Patna</span></div>
                <svg viewBox="0 0 320 320" className="w-full" role="img" aria-label="Map showing Patna headquarters and PAN-India regional nodes">
                  <path d="M140 20 L175 30 L190 60 L230 75 L270 110 L300 120 L295 150 L255 160 L240 190 L215 210 L195 250 L175 300 L160 305 L140 270 L120 240 L95 225 L75 200 L50 185 L60 160 L85 150 L95 120 L110 95 L120 60 Z" className="fill-muted stroke-navy/25" strokeWidth="1.2" strokeLinejoin="round" />
                  {NODES.map(([x, y], i) => (
                    <g key={i}>
                      <line x1={PATNA[0]} y1={PATNA[1]} x2={x} y2={y} className="stroke-gold/60 animate-dash" strokeWidth="0.8" strokeDasharray="3 5" />
                      <circle cx={x} cy={y} r="3.5" className="fill-navy animate-node" style={{ animationDelay: `${i * 0.3}s` }} />
                    </g>
                  ))}
                  <circle cx={PATNA[0]} cy={PATNA[1]} r="14" className="fill-gold/25 animate-node" />
                  <circle cx={PATNA[0]} cy={PATNA[1]} r="6" className="fill-gold stroke-card" strokeWidth="2" />
                  <text x={PATNA[0] + 12} y={PATNA[1] - 12} className="fill-navy text-[11px] font-semibold">Patna HQ</text>
                </svg>
              </div>
            </div>
          </aside>

          <form onSubmit={submit} noValidate className="rounded-xl border bg-card p-8 lg:col-span-7 lg:p-12">
            <p className="kicker">Enterprise Inquiry Form</p>
            <h2 className="display mt-3 text-3xl">Tell us about your institution.</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {FIELDS.map((f) => (
                <div key={f.k} className={f.full ? "sm:col-span-2" : ""}>
                  <label htmlFor={f.k} className="text-[13px] font-medium">{f.label}</label>
                  <input id={f.k} type={f.type ?? "text"} value={v[f.k]} placeholder={f.ph}
                    onChange={(e) => set(f.k, e.target.value)} onBlur={() => setTouched((t) => ({ ...t, [f.k]: true }))}
                    aria-invalid={!!(touched[f.k] && err[f.k])} aria-describedby={touched[f.k] && err[f.k] ? `${f.k}-err` : undefined} className={inputCls(f.k)} />
                  {touched[f.k] && err[f.k] && <p id={`${f.k}-err`} className="mt-1.5 text-xs text-destructive">{err[f.k]}</p>}
                </div>
              ))}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-[13px] font-medium">Detailed Message</label>
                <textarea id="message" rows={6} value={v.message} placeholder="Describe the nature and scope of your inquiry"
                  onChange={(e) => set("message", e.target.value)} onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                  aria-invalid={!!(touched.message && err.message)} aria-describedby="message-err" className={inputCls("message")} />
                <div className="mt-1.5 flex justify-between text-xs">
                  <span id="message-err" aria-live="polite" className="text-destructive">{touched.message && err.message}</span>
                  <span className="text-muted-foreground">{v.message.length}/2000</span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-sm text-xs text-muted-foreground">Data is used solely to respond to your inquiry. See our Privacy Policy.</p>
              <Button type="submit" variant="navy" size="lg" disabled={busy}>
                {busy ? <><Loader2 className="animate-spin" /> Submitting</> : <>Submit Inquiry <Send /></>}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Row({ t, children }: { t: string; children: React.ReactNode }) {
  return <div className="grid gap-1 py-5 sm:grid-cols-[150px_1fr]"><dt className="text-[13px] text-muted-foreground">{t}</dt><dd className="font-medium">{children}</dd></div>;
}
