// Animated components adapted from the React Bits collection (reactbits.dev),
// rewritten on framer-motion + canvas so no extra packages are needed.
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useScroll,
  useVelocity,
  useTransform,
  useAnimationFrame,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type MouseEvent,
  type CSSProperties,
} from "react";
import { canvasQuality } from "@/lib/animation-policy";

/* ---------- Aurora / Particles canvas background ---------- */
export function AuroraBackground({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let raf = 0,
      w = 0,
      h = 0;
    const styles = getComputedStyle(c);
    const accent = styles.getPropertyValue("--gold").trim();
    let pts: { x: number; y: number; vx: number; vy: number }[] = [];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const resize = () => {
      const quality = canvasQuality(window.innerWidth, window.devicePixelRatio);
      w = c.clientWidth;
      h = c.clientHeight;
      c.width = Math.round(w * quality.pixelRatio);
      c.height = Math.round(h * quality.pixelRatio);
      ctx.setTransform(quality.pixelRatio, 0, 0, quality.pixelRatio, 0, 0);
      if (pts.length !== quality.particleCount)
        pts = Array.from({ length: quality.particleCount }, () => ({
          x: Math.random(),
          y: Math.random(),
          vx: (Math.random() - 0.5) * 0.0006,
          vy: (Math.random() - 0.5) * 0.0006,
        }));
      if (reduce) draw(0);
    };
    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      // aurora ribbons
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        const amp = h * (0.08 + i * 0.03);
        for (let x = 0; x <= w; x += 12) {
          const y =
            h * (0.3 + i * 0.12) +
            Math.sin(x * 0.004 + t * 0.0004 * (i + 1)) * amp +
            Math.cos(x * 0.0017 - t * 0.0003) * amp * 0.6;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.lineTo(w, 0);
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.globalAlpha = dark ? 0.12 - i * 0.03 : 0.07 - i * 0.015;
        ctx.fillStyle = accent;
        ctx.fill();
      }
      // particle network
      ctx.globalAlpha = 1;
      for (const p of pts) {
        if (!reduce) {
          p.x += p.vx;
          p.y += p.vy;
        }
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        if (!a) continue;
        ctx.globalAlpha = dark ? 0.7 : 0.45;
        ctx.fillStyle = accent;
        ctx.beginPath();
        ctx.arc(a.x * w, a.y * h, 1.6, 0, Math.PI * 2);
        ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          if (!b) continue;
          const d = Math.hypot((a.x - b.x) * w, (a.y - b.y) * h);
          if (d < 130) {
            ctx.globalAlpha = (1 - d / 130) * (dark ? 0.35 : 0.2);
            ctx.strokeStyle = accent;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x * w, a.y * h);
            ctx.lineTo(b.x * w, b.y * h);
            ctx.stroke();
          }
        }
      }
      if (!reduce && !document.hidden) raf = requestAnimationFrame(draw);
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(c);
    window.addEventListener("resize", resize);
    const visibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduce) raf = requestAnimationFrame(draw);
    };
    document.addEventListener("visibilitychange", visibility);
    if (!reduce) raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, [dark]);
  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}

/* ---------- InteractiveGridPattern (Cursor-reactive drafting grid) ---------- */
export function InteractiveGridPattern({
  className = "",
  width = 48,
  height = 48,
  numSquares = 40,
  maxOpacity = 0.5,
  dark = false,
}: {
  className?: string;
  width?: number;
  height?: number;
  numSquares?: number;
  maxOpacity?: number;
  dark?: boolean;
}) {
  const [hoveredSquare, setHoveredSquare] = useState<[number, number] | null>(null);

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-auto absolute inset-0 h-full w-full stroke-current ${
        dark ? "text-ink-border" : "text-navy/10"
      } ${className}`}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = Math.floor((e.clientX - rect.left) / width);
        const y = Math.floor((e.clientY - rect.top) / height);
        setHoveredSquare([x, y]);
      }}
      onMouseLeave={() => setHoveredSquare(null)}
    >
      <defs>
        <pattern id="grid-pattern-el" width={width} height={height} patternUnits="userSpaceOnUse" x="-1" y="-1">
          <path d={`M.5 ${height}V.5H${width}`} fill="none" strokeWidth="1" strokeDasharray="0" />
          <circle cx="0.5" cy="0.5" r="1.5" className={dark ? "fill-gold/40" : "fill-navy/20"} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid-pattern-el)" />
      {hoveredSquare && (
        <rect
          x={hoveredSquare[0] * width}
          y={hoveredSquare[1] * height}
          width={width}
          height={height}
          className={`${dark ? "fill-gold/20" : "fill-gold/15"} transition-all duration-300`}
          strokeWidth={0}
        />
      )}
    </svg>
  );
}

/* ---------- BorderBeam (Tactile card perimeter glow) ---------- */
export function BorderBeam({
  className = "",
  size = 180,
  duration = 8,
  delay = 0,
  colorFrom = "var(--gold)",
  colorTo = "transparent",
}: {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
}) {
  return (
    <div
      style={
        {
          "--size": `${size}px`,
          "--duration": `${duration}s`,
          "--delay": `-${delay}s`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
        } as CSSProperties
      }
      className={`pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] ${className}`}
    >
      <div
        className="absolute aspect-square w-[var(--size)] animate-border-beam [animation-delay:var(--delay)] [animation-duration:var(--duration)] [background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] [offset-anchor:calc(var(--size)/2)_50%] [offset-path:rect(0_auto_auto_0_round_calc(var(--size)/2))]"
      />
    </div>
  );
}

/* ---------- DraftingCrosshair (Architectural corner marks) ---------- */
export function Crosshair({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute font-mono text-[10px] leading-none text-gold/60 select-none ${className}`}>
      +
    </div>
  );
}

/* ---------- SplitText: per-word rise ---------- */
export function SplitText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span key={i} aria-hidden="true">
          <motion.span
            className="inline-block max-w-full align-baseline [overflow-wrap:anywhere]"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduce ? 0 : 0.5,
              ease: [0.215, 0.61, 0.355, 1],
              delay: reduce ? 0 : delay + i * 0.045,
            }}
          >
            {w}
          </motion.span>
          {i < text.split(" ").length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
}

/* ---------- BlurText ---------- */
export function BlurText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <span ref={ref} className={className}>
      {text.split(" ").map((w, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ filter: "blur(8px)", opacity: 0, y: 8 }}
          animate={inView ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.035 }}
        >
          {w}&nbsp;
        </motion.span>
      ))}
    </span>
  );
}

/* ---------- ShinyText ---------- */
export function ShinyText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`shiny-text ${className}`}>{children}</span>;
}

/* ---------- GradientText ---------- */
export function GradientText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`gradient-text ${className}`}>{children}</span>;
}

/* ---------- DecryptedText ---------- */
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_#$&";
export function DecryptedText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [out, setOut] = useState(text);
  useEffect(() => {
    if (!inView) return;
    let f = 0;
    const id = setInterval(() => {
      f++;
      setOut(
        text
          .split("")
          .map((ch, i) =>
            ch === " " || i < f / 2
              ? ch
              : CHARS[Math.floor(Math.random() * CHARS.length)],
          )
          .join(""),
      );
      if (f / 2 >= text.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, [inView, text]);
  return <span ref={ref} className={`font-mono ${className}`}>{out}</span>;
}

/* ---------- MorphingKicker (Rotating institutional pill) ---------- */
export function MorphingKicker({
  items,
  interval = 3500,
  className = "",
}: {
  items: string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval]);

  return (
    <div className={`inline-flex items-center gap-2 overflow-hidden ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
      <AnimatePresence mode="wait">
        <motion.span
          key={items[index]}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="kicker"
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

/* ---------- CountUp ---------- */
export function CountUp({
  to,
  suffix = "",
  className = "",
}: {
  to: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1800, bounce: 0 });
  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);
  useEffect(
    () =>
      spring.on("change", (v) => {
        if (ref.current)
          ref.current.textContent =
            Math.round(v).toLocaleString("en-IN") + suffix;
      }),
    [spring, suffix],
  );
  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}

/* ---------- SpotlightCard ---------- */
export function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: MouseEvent) => {
    const card = ref.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div
      ref={ref}
      onMouseMove={move}
      className={`spotlight-card relative overflow-hidden rounded-xl border bg-card ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------- TiltedCard ---------- */
export function TiltedCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const rx = useSpring(0, { stiffness: 150, damping: 15 });
  const ry = useSpring(0, { stiffness: 150, damping: 15 });
  return (
    <motion.div
      className={className}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        ry.set(((e.clientX - r.left) / r.width - 0.5) * 8);
        rx.set(-((e.clientY - r.top) / r.height - 0.5) * 8);
      }}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Magnet ---------- */
export function Magnet({
  children,
  strength = 0.25,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const x = useSpring(0, { stiffness: 220, damping: 18 });
  const y = useSpring(0, { stiffness: 220, damping: 18 });
  return (
    <motion.div
      className="inline-block"
      style={{ x, y }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * strength);
        y.set((e.clientY - r.top - r.height / 2) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- ScrollVelocity marquee ---------- */
export function ScrollVelocity({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  const base = useMotionValue(0);
  const { scrollY } = useScroll();
  const vel = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(vel, [0, 1000], [0, 5], { clamp: false });
  const x = useTransform(base, (v) => `${((v % 50) - 50) % 50}%`);
  useAnimationFrame((_, delta) => {
    base.set(base.get() - (1.6 + Math.abs(factor.get())) * (delta / 1000));
  });
  const row = [...items, ...items];
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div className="flex w-max gap-12" style={{ x }}>
        {[...row, ...row].map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-sans text-2xl font-semibold tracking-tight sm:text-4xl text-navy/90"
          >
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ---------- ClickSpark (global) ---------- */
export function ClickSpark() {
  const [sparks, setSparks] = useState<{ id: number; x: number; y: number }[]>([]);
  useEffect(() => {
    const on = (e: globalThis.MouseEvent) => {
      const id = Date.now() + Math.random();
      setSparks((s) => [...s, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setSparks((s) => s.filter((p) => p.id !== id)), 500);
    };
    window.addEventListener("click", on);
    return () => window.removeEventListener("click", on);
  }, []);
  return (
    <div className="pointer-events-none fixed inset-0 z-[100]" aria-hidden="true">
      {sparks.map((s) =>
        Array.from({ length: 8 }, (_, i) => (
          <motion.span
            key={`${s.id}-${i}`}
            className="absolute h-3 w-0.5 rounded-full bg-gold"
            style={{
              left: s.x,
              top: s.y,
              rotate: i * 45,
              originY: 0,
            }}
            initial={{ opacity: 1, y: 0, scaleY: 1 }}
            animate={{ opacity: 0, y: 18, scaleY: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          />
        )),
      )}
    </div>
  );
}

/* ---------- Scroll progress bar ---------- */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-[2.5px] origin-left bg-gradient-to-r from-gold via-navy to-gold"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
