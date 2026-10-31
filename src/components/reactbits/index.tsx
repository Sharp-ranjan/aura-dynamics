// Animated components adapted from the React Bits collection (reactbits.dev),
// rewritten on framer-motion + canvas so no extra packages are needed.
import { motion, useInView, useMotionValue, useSpring, useScroll, useVelocity, useTransform, useAnimationFrame, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";
import { canvasQuality } from "@/lib/animation-policy";

/* ---------- Aurora / Particles canvas background ---------- */
export function AuroraBackground({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let raf = 0, w = 0, h = 0;
    const styles = getComputedStyle(c);
    const accent = styles.getPropertyValue("--gold").trim();
    let pts: { x: number; y: number; vx: number; vy: number }[] = [];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const resize = () => {
      const quality = canvasQuality(window.innerWidth, window.devicePixelRatio);
      w = c.clientWidth; h = c.clientHeight;
      c.width = Math.round(w * quality.pixelRatio); c.height = Math.round(h * quality.pixelRatio);
      ctx.setTransform(quality.pixelRatio, 0, 0, quality.pixelRatio, 0, 0);
      if (pts.length !== quality.particleCount) pts = Array.from({ length: quality.particleCount }, () => ({ x: Math.random(), y: Math.random(), vx: (Math.random() - 0.5) * 0.0006, vy: (Math.random() - 0.5) * 0.0006 }));
      if (reduce) draw(0);
    };
    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      // aurora ribbons
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        const amp = h * (0.08 + i * 0.03);
        for (let x = 0; x <= w; x += 12) {
          const y = h * (0.3 + i * 0.12) + Math.sin(x * 0.004 + t * 0.0004 * (i + 1)) * amp + Math.cos(x * 0.0017 - t * 0.0003) * amp * 0.6;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.lineTo(w, 0); ctx.lineTo(0, 0); ctx.closePath();
        ctx.globalAlpha = dark ? 0.12 - i * 0.03 : 0.07 - i * 0.015;
        ctx.fillStyle = accent; ctx.fill();
      }
      // particle network
      ctx.globalAlpha = 1;
      for (const p of pts) {
        if (!reduce) { p.x += p.vx; p.y += p.vy; }
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        if (!a) continue;
        ctx.globalAlpha = dark ? 0.7 : 0.45; ctx.fillStyle = accent;
        ctx.beginPath(); ctx.arc(a.x * w, a.y * h, 1.6, 0, Math.PI * 2); ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          if (!b) continue;
          const d = Math.hypot((a.x - b.x) * w, (a.y - b.y) * h);
          if (d < 130) { ctx.globalAlpha = (1 - d / 130) * (dark ? 0.35 : 0.2); ctx.strokeStyle = accent; ctx.lineWidth = 0.6; ctx.beginPath(); ctx.moveTo(a.x * w, a.y * h); ctx.lineTo(b.x * w, b.y * h); ctx.stroke(); }
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
    return () => { cancelAnimationFrame(raf); observer.disconnect(); window.removeEventListener("resize", resize); document.removeEventListener("visibilitychange", visibility); };
  }, [dark]);
  return <canvas ref={ref} aria-hidden="true" className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} />;
}

/* ---------- SplitText: per-word rise ---------- */
export function SplitText({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span key={i} aria-hidden="true">
          <motion.span className="inline-block max-w-full align-baseline [overflow-wrap:anywhere]" initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduce ? 0 : 0.45, ease: "easeOut", delay: reduce ? 0 : delay + i * 0.04 }}>
            {w}
          </motion.span>
          {i < text.split(" ").length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
}

/* ---------- BlurText ---------- */
export function BlurText({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <span ref={ref} className={className}>
      {text.split(" ").map((w, i) => (
        <motion.span key={i} className="inline-block" initial={{ filter: "blur(10px)", opacity: 0, y: 10 }} animate={inView ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.04 }}>
          {w}&nbsp;
        </motion.span>
      ))}
    </span>
  );
}

/* ---------- ShinyText ---------- */
export function ShinyText({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`shiny-text ${className}`}>{children}</span>;
}

/* ---------- GradientText ---------- */
export function GradientText({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`gradient-text ${className}`}>{children}</span>;
}

/* ---------- DecryptedText ---------- */
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&";
export function DecryptedText({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [out, setOut] = useState(text);
  useEffect(() => {
    if (!inView) return;
    let f = 0;
    const id = setInterval(() => {
      f++;
      setOut(text.split("").map((ch, i) => (ch === " " || i < f / 2 ? ch : CHARS[Math.floor(Math.random() * CHARS.length)])).join(""));
      if (f / 2 >= text.length) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, [inView, text]);
  return <span ref={ref} className={`font-mono ${className}`}>{out}</span>;
}

/* ---------- CountUp ---------- */
export function CountUp({ to, suffix = "", className = "" }: { to: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 2000, bounce: 0 });
  useEffect(() => { if (inView) mv.set(to); }, [inView, to, mv]);
  useEffect(() => spring.on("change", (v) => { if (ref.current) ref.current.textContent = Math.round(v).toLocaleString("en-IN") + suffix; }), [spring, suffix]);
  return <span ref={ref} className={className}>0{suffix}</span>;
}

/* ---------- SpotlightCard ---------- */
export function SpotlightCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: MouseEvent) => {
    const card = ref.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return <div ref={ref} onMouseMove={move} className={`spotlight-card relative overflow-hidden rounded-xl border bg-card ${className}`}>{children}</div>;
}

/* ---------- TiltedCard ---------- */
export function TiltedCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const rx = useSpring(0, { stiffness: 150, damping: 15 });
  const ry = useSpring(0, { stiffness: 150, damping: 15 });
  return (
    <motion.div className={className} style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); ry.set(((e.clientX - r.left) / r.width - 0.5) * 10); rx.set(-((e.clientY - r.top) / r.height - 0.5) * 10); }}
      onMouseLeave={() => { rx.set(0); ry.set(0); }}>
      {children}
    </motion.div>
  );
}

/* ---------- Magnet ---------- */
export function Magnet({ children, strength = 0.3 }: { children: ReactNode; strength?: number }) {
  const x = useSpring(0, { stiffness: 200, damping: 15 });
  const y = useSpring(0, { stiffness: 200, damping: 15 });
  return (
    <motion.div className="inline-block" style={{ x, y }}
      onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * strength); y.set((e.clientY - r.top - r.height / 2) * strength); }}
      onMouseLeave={() => { x.set(0); y.set(0); }}>
      {children}
    </motion.div>
  );
}

/* ---------- ScrollVelocity marquee ---------- */
export function ScrollVelocity({ items, className = "" }: { items: string[]; className?: string }) {
  const base = useMotionValue(0);
  const { scrollY } = useScroll();
  const vel = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(vel, [0, 1000], [0, 5], { clamp: false });
  const x = useTransform(base, (v) => `${((v % 50) - 50) % 50}%`);
  useAnimationFrame((_, delta) => { base.set(base.get() - (2 + Math.abs(factor.get())) * (delta / 1000)); });
  const row = [...items, ...items];
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div className="flex w-max gap-12" style={{ x }}>
        {[...row, ...row].map((t, i) => (
          <span key={i} className="flex items-center gap-12 text-3xl font-semibold tracking-tight sm:text-5xl">
            {t}<span className="h-2 w-2 rounded-full bg-gold" />
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
      {sparks.map((s) => Array.from({ length: 8 }, (_, i) => (
        <motion.span key={`${s.id}-${i}`} className="absolute h-3 w-0.5 rounded-full bg-gold" style={{ left: s.x, top: s.y, rotate: i * 45, originY: 0 }}
          initial={{ opacity: 1, y: 0, scaleY: 1 }} animate={{ opacity: 0, y: 18, scaleY: 0.2 }} transition={{ duration: 0.45, ease: "easeOut" }} />
      )))}
    </div>
  );
}

/* ---------- Scroll progress bar ---------- */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return <motion.div className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gold" style={{ scaleX: scrollYProgress }} />;
}
