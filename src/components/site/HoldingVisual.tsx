import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Activity, Cpu, Layers, Server } from "lucide-react";
import { Crosshair } from "@/components/reactbits";

interface NodeData {
  id: string;
  x: number;
  y: number;
  label: string;
  sub: string;
  status: string;
  statLabel: string;
  statValue: string;
  icon: typeof Layers;
  description: string;
}

const NODES: NodeData[] = [
  {
    id: "core",
    x: 200,
    y: 80,
    label: "Aggregator Core",
    sub: "Parent Holding Framework",
    status: "PRIMARY",
    statLabel: "Settlement Rate",
    statValue: "99.98% SLA",
    icon: Layers,
    description: "Centralized identity governance, statutory audits, and unified billing orchestration.",
  },
  {
    id: "cloud",
    x: 88,
    y: 250,
    label: "Zero-Trust Cloud",
    sub: "Secure Backbone",
    status: "ENFORCED",
    statLabel: "Median Latency",
    statValue: "< 16ms",
    icon: ShieldCheck,
    description: "Hardened mTLS microservices mesh with automated horizontal elasticity and failover.",
  },
  {
    id: "mesh",
    x: 312,
    y: 250,
    label: "Regional Mesh",
    sub: "Tier-2 & Tier-3 Nodes",
    status: "DISTRIBUTED",
    statLabel: "Active Routing",
    statValue: "400+ Cities",
    icon: Cpu,
    description: "Grassroots connectivity routing essential digital demand directly to regional vendors.",
  },
];

export function HoldingVisual() {
  const [activeNode, setActiveNode] = useState<string>("core");
  const selected = NODES.find((n) => n.id === activeNode) ?? NODES[0]!;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-navy/15 bg-card p-6 shadow-[0_30px_70px_-25px_color-mix(in_oklab,var(--navy)_20%,transparent)] backdrop-blur-sm">
      <Crosshair className="top-2 left-2" />
      <Crosshair className="top-2 right-2" />
      <Crosshair className="bottom-2 left-2" />
      <Crosshair className="bottom-2 right-2" />

      {/* Header bar */}
      <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <p className="font-mono text-[11px] font-semibold tracking-wider uppercase text-navy">
            SYS // TOPOLOGY_MONITOR
          </p>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
          <Activity className="h-3 w-3 text-gold" />
          <span>TELEMETRY LIVE</span>
        </div>
      </div>

      {/* Interactive Canvas/SVG */}
      <div className="relative">
        <svg
          viewBox="0 0 400 360"
          className="w-full select-none"
          role="img"
          aria-label="Aura Dynamics interactive holding architecture visual"
        >
          <defs>
            <pattern id="arch-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" className="stroke-navy/[0.06]" strokeWidth="0.8" />
            </pattern>
            <linearGradient id="beam-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="var(--navy)" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          <rect width="400" height="360" fill="url(#arch-grid)" rx="8" />

          {/* Connection vectors */}
          <line
            x1="200"
            y1="80"
            x2="88"
            y2="250"
            className="stroke-navy/20"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          <line
            x1="200"
            y1="80"
            x2="312"
            y2="250"
            className="stroke-navy/20"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          <line
            x1="88"
            y1="250"
            x2="312"
            y2="250"
            className="stroke-navy/15"
            strokeWidth="1"
            strokeDasharray="2 4"
          />

          {/* Animated signal beams */}
          <line
            x1="200"
            y1="80"
            x2="88"
            y2="250"
            className="stroke-gold animate-dash"
            strokeWidth="1.8"
            strokeDasharray="6 12"
          />
          <line
            x1="200"
            y1="80"
            x2="312"
            y2="250"
            className="stroke-gold animate-dash"
            strokeWidth="1.8"
            strokeDasharray="6 12"
            style={{ animationDirection: "reverse" }}
          />

          {/* District satellite endpoints */}
          {[
            [35, 330],
            [90, 335],
            [140, 330],
            [260, 330],
            [310, 335],
            [365, 330],
          ].map(([lx, ly], i) => (
            <g key={i}>
              <line
                x1={i < 3 ? 88 : 312}
                y1={250}
                x2={lx}
                y2={ly}
                className="stroke-navy/20"
                strokeWidth="0.8"
              />
              <circle
                cx={lx}
                cy={ly}
                r="3"
                className="fill-gold animate-node"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            </g>
          ))}

          {/* Interactive Core Nodes */}
          {NODES.map((n) => {
            const isSelected = activeNode === n.id;
            return (
              <g
                key={n.id}
                className="cursor-pointer transition-transform duration-200"
                onClick={() => setActiveNode(n.id)}
              >
                {/* Aura pulse ring */}
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={isSelected ? 32 : 24}
                  className={`${
                    isSelected
                      ? "fill-gold/20 stroke-gold/60 stroke-[1.5]"
                      : "fill-navy/[0.04] stroke-transparent"
                  } transition-all duration-300`}
                />

                {/* Outer badge */}
                <circle
                  cx={n.x}
                  cy={n.y}
                  r="16"
                  className={
                    n.id === "core"
                      ? "fill-navy stroke-gold stroke-2"
                      : isSelected
                      ? "fill-gold stroke-navy stroke-2"
                      : "fill-card stroke-navy/40 stroke-1"
                  }
                />

                {/* Inner dot */}
                <circle
                  cx={n.x}
                  cy={n.y}
                  r="4"
                  className={n.id === "core" ? "fill-gold" : isSelected ? "fill-navy" : "fill-gold"}
                />

                {/* Label text */}
                <text
                  x={n.x}
                  y={n.y + (n.id === "core" ? -28 : 34)}
                  textAnchor="middle"
                  className={`text-[12px] font-semibold tracking-tight transition-colors ${
                    isSelected ? "fill-navy font-bold" : "fill-navy/80"
                  }`}
                >
                  {n.label}
                </text>
                <text
                  x={n.x}
                  y={n.y + (n.id === "core" ? -14 : 48)}
                  textAnchor="middle"
                  className="fill-muted-foreground text-[10px] font-mono"
                >
                  {n.sub}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Floating Node Telemetry Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="mt-3 rounded-xl border border-navy/10 bg-muted/60 p-3.5 text-xs text-navy"
          >
            <div className="flex items-center justify-between font-mono">
              <span className="flex items-center gap-1.5 font-semibold text-gold">
                <selected.icon className="h-3.5 w-3.5" />
                {selected.label}
              </span>
              <span className="rounded bg-navy px-1.5 py-0.5 text-[10px] font-medium text-primary-foreground">
                {selected.status}
              </span>
            </div>
            <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
              {selected.description}
            </p>
            <div className="mt-2.5 flex items-center justify-between border-t border-border pt-2 font-mono text-[11px]">
              <span className="text-muted-foreground">{selected.statLabel}:</span>
              <span className="font-semibold text-navy">{selected.statValue}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom KPI strip */}
      <div className="mt-4 grid grid-cols-3 border-t border-border pt-3.5 text-center">
        <div>
          <p className="font-mono text-sm font-bold tracking-tight text-navy">99.98%</p>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Target SLA</p>
        </div>
        <div className="border-x border-border">
          <p className="font-mono text-sm font-bold tracking-tight text-navy">mTLS 1.3</p>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Zero-Trust</p>
        </div>
        <div>
          <p className="font-mono text-sm font-bold tracking-tight text-navy">28+ States</p>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">PAN-India</p>
        </div>
      </div>
    </div>
  );
}
