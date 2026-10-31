import { Link } from "@tanstack/react-router";
import { Logo } from "./primitives";
import { NAV } from "./Header";

const LEGAL = [
  { doc: "privacy-policy", label: "Privacy Policy" },
  { doc: "terms-of-service", label: "Terms of Service" },
  { doc: "ip-copyright", label: "IP & Copyright Notice" },
  { doc: "disclaimers", label: "Statutory Disclaimers" },
] as const;

export function Footer() {
  return (
    <footer className="bg-ink text-ink-muted">
      <div className="container-x grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo inverse />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">
            A multi-service digital aggregator and technology holding corporation architecting scalable infrastructure for India.
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <div><dt className="kicker mb-1">Registered Office</dt><dd className="text-ink-foreground">Patna, Bihar, India</dd></div>
            <div><dt className="kicker mb-1">CIN</dt><dd className="font-mono text-[13px] text-ink-foreground">U72900BR2026PTCXXXXXX</dd></div>
          </dl>
        </div>
        <FooterCol title="Navigation" className="lg:col-span-2">
          {NAV.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-ink-foreground">{n.label}</Link></li>)}
        </FooterCol>
        <FooterCol title="Legal & Regulatory" className="lg:col-span-3">
          {LEGAL.map((n) => <li key={n.doc}><Link to="/legal/$doc" params={{ doc: n.doc }} className="hover:text-ink-foreground">{n.label}</Link></li>)}
        </FooterCol>
        <FooterCol title="Corporate Communications" className="lg:col-span-3">
          <li><a href="mailto:info@auradynamics.com" className="text-ink-foreground hover:text-gold">info@auradynamics.com</a></li>
          <li><a href="mailto:corporate@auradynamics.com" className="text-ink-foreground hover:text-gold">corporate@auradynamics.com</a></li>
          <li className="pt-2">Mon–Sat<br />09:30 AM – 06:30 PM IST</li>
        </FooterCol>
      </div>
      <div className="border-t border-ink-border">
        <div className="container-x flex flex-col gap-2 py-6 text-xs md:flex-row md:justify-between">
          <p>© 2026 Aura Dynamics Private Limited. All Rights Reserved.</p>
          <p>Protected under the Indian Copyright Act, 1957 &amp; Trademarks Act, 1999.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <p className="kicker mb-5">{title}</p>
      <ul className="space-y-3 text-sm">{children}</ul>
    </div>
  );
}
