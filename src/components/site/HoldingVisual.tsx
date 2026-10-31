export function HoldingVisual() {
  const nodes = [
    { x: 200, y: 70, label: "Aggregator Core", sub: "Parent holding" },
    { x: 80, y: 250, label: "Secure Cloud", sub: "Zero-trust backbone" },
    { x: 320, y: 250, label: "Service Mesh", sub: "Regional nodes" },
  ];
  const leaves = [[40, 360], [120, 360], [280, 360], [360, 360]];
  return (
    <div className="relative rounded-xl border bg-card p-6 shadow-[0_30px_60px_-30px_color-mix(in_oklab,var(--navy)_30%,transparent)]">
      <div className="mb-4 flex items-center justify-between">
        <p className="kicker">Holding Structure</p>
        <span className="font-mono text-[10px] text-muted-foreground">SYS · LIVE</span>
      </div>
      <svg viewBox="0 0 400 400" className="w-full" role="img" aria-label="Holding structure diagram: Aggregator Core linked to Secure Cloud Backbone and Regional Service Mesh">
        <defs>
          <pattern id="g" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M20 0H0V20" fill="none" className="stroke-border" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#g)" />
        {[1, 2].map((i) => (
          <line key={i} x1="200" y1="70" x2={nodes[i]!.x} y2={nodes[i]!.y} className="stroke-gold animate-dash" strokeWidth="1.2" strokeDasharray="4 8" />
        ))}
        <line x1="80" y1="250" x2="320" y2="250" className="stroke-navy/30" strokeWidth="1" strokeDasharray="2 4" />
        {leaves.map(([x, y], i) => (
          <g key={i}>
            <line x1={i < 2 ? 80 : 320} y1="250" x2={x} y2={y} className="stroke-navy/25" strokeWidth="1" />
            <circle cx={x} cy={y} r="4" className="fill-gold animate-node" style={{ animationDelay: `${i * 0.5}s` }} />
          </g>
        ))}
        {nodes.map((n, i) => (
          <g key={n.label}>
            <circle cx={n.x} cy={n.y} r="22" className="fill-gold/15 animate-node" style={{ animationDelay: `${i * 0.7}s` }} />
            <circle cx={n.x} cy={n.y} r="11" className={i === 0 ? "fill-navy" : "fill-card stroke-navy"} strokeWidth="1.5" />
            {i === 0 && <circle cx={n.x} cy={n.y} r="4" className="fill-gold" />}
            <text x={n.x} y={n.y + (i === 0 ? -34 : 42)} textAnchor="middle" className="fill-navy text-[12px] font-semibold">{n.label}</text>
            <text x={n.x} y={n.y + (i === 0 ? -20 : 56)} textAnchor="middle" className="fill-muted-foreground text-[10px]">{n.sub}</text>
          </g>
        ))}
      </svg>
      <div className="mt-4 grid grid-cols-3 border-t pt-4 text-center">
        {[["99.95%", "Target SLA"], ["Zero-Trust", "Security"], ["PAN-India", "Mesh"]].map(([a, b]) => (
          <div key={b}><p className="text-sm font-semibold tracking-tight">{a}</p><p className="text-[10px] uppercase tracking-wider text-muted-foreground">{b}</p></div>
        ))}
      </div>
    </div>
  );
}
