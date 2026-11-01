import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import logoAsset from "@/assets/aura-enterprises-logo.png.asset.json";
import inverseLogoAsset from "@/assets/aura-enterprises-logo-inverse.png.asset.json";
import monogramAsset from "@/assets/aura-enterprises-symbol.png.asset.json";
import {
  AuroraBackground,
  SplitText,
  BlurText,
  DecryptedText,
  Crosshair,
  InteractiveGridPattern,
} from "@/components/reactbits";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function Monogram({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img
      src={monogramAsset.url}
      className={`${className} object-contain`}
      alt="Aura Dynamics Monogram"
      aria-hidden="true"
    />
  );
}

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" className="flex shrink-0 items-center group" aria-label="Aura Dynamics home">
      <img
        src={inverse ? inverseLogoAsset.url : logoAsset.url}
        alt="Aura Dynamics Private Limited"
        width={220}
        height={71}
        className="h-auto w-[164px] object-contain sm:w-[190px] transition-opacity duration-200 group-hover:opacity-95"
      />
    </Link>
  );
}

export function PageHeader({
  crumb,
  kicker,
  title,
  lead,
}: {
  crumb: string;
  kicker: string;
  title: ReactNode;
  lead?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <InteractiveGridPattern className="opacity-70" />
      <AuroraBackground />
      <div className="container-x relative pb-16 pt-14 lg:pb-24 lg:pt-20">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-2 text-xs font-mono text-muted-foreground"
        >
          <Link to="/" className="hover:text-navy transition-colors">
            HOME
          </Link>
          <ChevronRight className="h-3 w-3 text-gold" />
          <span className="text-navy font-semibold">{crumb.toUpperCase()}</span>
        </nav>
        <div className="mb-5 inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          <p className="kicker">
            <DecryptedText text={kicker} />
          </p>
        </div>
        <h1 className="display max-w-4xl text-4xl sm:text-5xl lg:text-[62px] text-navy">
          {typeof title === "string" ? <SplitText text={title} /> : title}
        </h1>
        {lead && (
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            <BlurText text={lead} />
          </p>
        )}
      </div>
    </section>
  );
}

export function SplitSection({
  kicker,
  title,
  children,
  className = "",
}: {
  kicker: string;
  title: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`relative border-b border-border ${className}`}>
      <div className="container-x grid gap-10 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <p className="kicker">{kicker}</p>
            </div>
            <h2 className="display text-3xl sm:text-4xl lg:text-[44px] text-navy">
              {typeof title === "string" ? <BlurText text={title} /> : title}
            </h2>
          </div>
        </div>
        <div className="lg:col-span-7">{children}</div>
      </div>
    </section>
  );
}

export function StealthBadge() {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-gold shadow-sm backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-radar absolute inline-flex h-full w-full rounded-full bg-gold" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
      </span>
      Active R&amp;D &amp; Sandbox Testing — Stealth Mode
    </span>
  );
}
