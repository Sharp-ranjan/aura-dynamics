import { Link, useRouterState } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowUpRight, ShieldCheck, MapPin } from "lucide-react";
import { useState, useEffect, type ReactNode } from "react";
import markDark from "@/assets/aura-mark-dark.png";
import markLight from "@/assets/aura-mark-light.png";
import { Magnet } from "@/components/reactbits/Magnet";
import { BlurText } from "@/components/reactbits/BlurText";
import { BRAND_NAME, BRAND_SHORT, HEADQUARTERS_CITY, HEADQUARTERS_STATE } from "@/lib/seo";

export const BRAND = BRAND_NAME;

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/ventures", label: "Ventures & R&D" },
  { to: "/governance", label: "Governance & Advisors" },
  { to: "/contact-us", label: "Contact Us" },
] as const;

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className="group flex items-center gap-3.5"
      aria-label="Aura Dynamics Enterprises — Return to Homepage"
    >
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xs border border-border/40 bg-surface/30 p-1 transition-transform duration-300 group-hover:scale-105">
        <img
          src={light ? markLight : markDark}
          alt=""
          className="h-8 w-auto object-contain"
          width={36}
          height={32}
        />
      </div>
      <div className="flex flex-col justify-center leading-none">
        <span className="font-display text-[17px] font-semibold tracking-[0.24em] text-foreground transition-colors group-hover:text-primary">
          AURA
        </span>
        <span
          className={`mt-1 font-sans text-[9px] font-medium uppercase tracking-[0.38em] ${
            light ? "text-navy-muted" : "text-muted-foreground"
          }`}
        >
          Dynamics · Pvt Ltd
        </span>
      </div>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  // Close mobile drawer on route change or Escape key
  useEffect(() => {
    setOpen(false);
  }, [currentPath]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md transition-all">
      {/* Institutional Top Ticker */}
      <div className="border-b border-border/40 bg-surface/40 px-6 py-1.5 text-[11px] font-medium tracking-wider text-muted-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="uppercase text-foreground/90">
              Corporate Holding & Incubation Engine
            </span>
          </div>
          <div className="hidden items-center gap-4 sm:flex">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3 text-primary" />
              <span>
                Headquarters: {HEADQUARTERS_CITY}, {HEADQUARTERS_STATE}
              </span>
            </span>
            <span className="text-border">|</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3 w-3 text-primary" />
              <span>Women-Led Corporate Enterprise</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden h-full items-center gap-8 lg:flex" aria-label="Main Navigation">
          {NAV_LINKS.map((n) => {
            const isActive = currentPath === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: true }}
                className="relative flex h-full items-center text-[14px] font-medium tracking-wide text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-2"
              >
                {n.label}
                {isActive && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Header Action */}
        <div className="hidden items-center gap-4 lg:flex">
          <Magnet strength={0.2} activeDistance={70}>
            <Link
              to="/contact-us"
              className="inline-flex h-10 items-center justify-center rounded-sm bg-primary px-5 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md focus-visible:outline-2"
            >
              Corporate Inquiries
            </Link>
          </Magnet>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground hover:bg-surface lg:hidden focus-visible:outline-2"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-x-0 top-[102px] z-50 border-b border-border bg-background/98 px-6 py-6 shadow-xl backdrop-blur-xl lg:hidden"
        >
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {NAV_LINKS.map((n) => {
              const isActive = currentPath === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between border-b border-border/50 py-3.5 text-base font-medium ${
                    isActive ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  <span>{n.label}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                </Link>
              );
            })}
            <div className="pt-6">
              <Link
                to="/contact-us"
                onClick={() => setOpen(false)}
                className="flex h-12 w-full items-center justify-center rounded-sm bg-primary text-sm font-semibold uppercase tracking-wider text-primary-foreground"
              >
                Submit Corporate Inquiry
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer
      className="border-t border-border/60 bg-navy text-navy-foreground"
      aria-label="Corporate Footer"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.8fr_1fr_1fr_1.2fr]">
          {/* Column 1: Identity & Legal Registration */}
          <div className="space-y-6">
            <Logo light />
            <p className="max-w-sm text-sm leading-relaxed text-navy-muted">
              {BRAND_NAME} is a multi-service digital aggregator holding enterprise and technology
              incubator pioneering next-generation technological frameworks across PAN-India.
            </p>
            <div className="space-y-1.5 border-l-2 border-primary/60 pl-3 text-xs text-navy-muted">
              <p className="font-semibold text-navy-foreground">Registered Corporate Office:</p>
              <p>Patna, Bihar — India</p>
              <p className="text-[11px] text-navy-muted/80">
                Corporate Affairs & Statutory Compliance Division
              </p>
            </div>
          </div>

          {/* Column 2: Holding & Architecture */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-navy-foreground">
              Ventures & R&D
            </h3>
            <ul className="space-y-3 text-sm text-navy-muted">
              <li>
                <Link to="/ventures" className="transition-colors hover:text-navy-foreground">
                  Stealth Incubation
                </Link>
              </li>
              <li>
                <Link to="/ventures" className="transition-colors hover:text-navy-foreground">
                  Digital Aggregation
                </Link>
              </li>
              <li>
                <Link to="/ventures" className="transition-colors hover:text-navy-foreground">
                  Platform Architecture
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="transition-colors hover:text-navy-foreground">
                  Socio-Economic Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Governance & Corporation */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-navy-foreground">
              Corporation
            </h3>
            <ul className="space-y-3 text-sm text-navy-muted">
              <li>
                <Link to="/about-us" className="transition-colors hover:text-navy-foreground">
                  About the Enterprise
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="transition-colors hover:text-navy-foreground">
                  Women-Led Leadership
                </Link>
              </li>
              <li>
                <Link to="/governance" className="transition-colors hover:text-navy-foreground">
                  Board of Advisors
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="transition-colors hover:text-navy-foreground">
                  Patna Secretariat
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Compliance & Statutory Governance */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-navy-foreground">
              Statutory Governance
            </h3>
            <ul className="space-y-3 text-sm text-navy-muted">
              <li>
                <Link
                  to="/privacy-policy"
                  className="flex items-center gap-1.5 transition-colors hover:text-navy-foreground"
                >
                  Privacy Policy <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="flex items-center gap-1.5 transition-colors hover:text-navy-foreground"
                >
                  Terms of Service <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  to="/copyright"
                  className="flex items-center gap-1.5 transition-colors hover:text-navy-foreground"
                >
                  IP & Copyright Notice <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
              <li className="pt-2 text-xs text-navy-muted/70">
                Exclusive Jurisdiction: Competent Courts of Patna, Bihar, India.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-navy-foreground/10 pt-8 text-xs text-navy-muted sm:flex-row">
          <p>© 2026 {BRAND_NAME}. All Rights Reserved.</p>
          <p className="tracking-wide">
            Protected under Copyright Act, 1957 & Trademarks Act, 1999 (India).
          </p>
        </div>
      </div>
    </footer>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function PageHeader({ crumb, title, sub }: { crumb: string; title: string; sub: string }) {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      {/* Blueprint Grid Atmosphere */}
      <div className="bg-grid-blueprint absolute inset-0 -z-10 opacity-30" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/70"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:pb-24 md:pt-20">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs uppercase tracking-wider text-navy-muted">
            <li>
              <Link to="/" className="transition-colors hover:text-navy-foreground">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-semibold text-primary-foreground" aria-current="page">
              {crumb}
            </li>
          </ol>
        </nav>

        <BlurText
          as="h1"
          text={title}
          direction="bottom"
          className="max-w-4xl text-3xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-6xl"
        />

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-muted md:text-xl">{sub}</p>
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-6 py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <div className="mb-3 inline-flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {children}
      </span>
    </div>
  );
}
