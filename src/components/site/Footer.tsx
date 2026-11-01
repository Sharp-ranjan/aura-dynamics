import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./primitives";
import { NAV } from "./Header";
import { Crosshair } from "@/components/reactbits";

const LEGAL = [
  { doc: "privacy-policy", label: "Privacy Policy" },
  { doc: "terms-of-service", label: "Terms of Service" },
  { doc: "ip-copyright", label: "IP & Copyright Notice" },
  { doc: "disclaimers", label: "Statutory Disclaimers" },
] as const;

export function Footer() {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const update = () => {
      setTimeStr(
        new Date().toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " IST",
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative bg-ink text-ink-muted border-t border-ink-border overflow-hidden">
      <div className="container-x grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-12 relative">
        <Crosshair className="top-4 left-4" />
        <Crosshair className="top-4 right-4" />

        <div className="lg:col-span-4">
          <Logo inverse />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-muted">
            A multi-service digital aggregator and technology holding corporation architecting scalable infrastructure for India's emerging economic hubs.
          </p>
          <dl className="mt-8 space-y-4 text-sm font-mono">
            <div>
              <dt className="kicker mb-1 text-gold">REGISTERED OFFICE</dt>
              <dd className="text-ink-foreground">Patna, Bihar, India — PIN 800001</dd>
            </div>
            <div>
              <dt className="kicker mb-1 text-gold">CORPORATE IDENTIFICATION (CIN)</dt>
              <dd className="text-[13px] text-ink-foreground">U72900BR2026PTCXXXXXX</dd>
            </div>
            <div>
              <dt className="kicker mb-1 text-gold">PATNA REGIONAL TIME</dt>
              <dd className="text-xs text-gold font-semibold">{timeStr || "09:30:00 AM IST"}</dd>
            </div>
          </dl>
        </div>

        <FooterCol title="Navigation" className="lg:col-span-2">
          {NAV.map((n) => (
            <li key={n.to}>
              <Link to={n.to} className="hover:text-gold transition-colors font-sans">
                {n.label}
              </Link>
            </li>
          ))}
        </FooterCol>

        <FooterCol title="Legal & Regulatory" className="lg:col-span-3">
          {LEGAL.map((n) => (
            <li key={n.doc}>
              <Link to="/legal/$doc" params={{ doc: n.doc }} className="hover:text-gold transition-colors font-sans">
                {n.label}
              </Link>
            </li>
          ))}
        </FooterCol>

        <FooterCol title="Corporate Communications" className="lg:col-span-3">
          <li>
            <a href="mailto:info@auradynamics.com" className="text-ink-foreground hover:text-gold transition-colors font-mono text-xs">
              info@auradynamics.com
            </a>
          </li>
          <li>
            <a href="mailto:corporate@auradynamics.com" className="text-ink-foreground hover:text-gold transition-colors font-mono text-xs">
              corporate@auradynamics.com
            </a>
          </li>
          <li className="pt-2 text-xs text-ink-muted leading-relaxed font-sans">
            Operating Hours:<br />
            Monday to Saturday<br />
            09:30 AM – 06:30 PM IST
          </li>
        </FooterCol>
      </div>

      <div className="border-t border-ink-border">
        <div className="container-x flex flex-col gap-2 py-6 text-xs md:flex-row md:justify-between text-ink-muted">
          <p>© 2026 Aura Dynamics Private Limited. All Rights Reserved.</p>
          <p className="font-mono text-[11px]">Protected under the Indian Copyright Act, 1957 &amp; Trademarks Act, 1999.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="kicker mb-5 text-gold font-mono">{title}</p>
      <ul className="space-y-3 text-sm">{children}</ul>
    </div>
  );
}
