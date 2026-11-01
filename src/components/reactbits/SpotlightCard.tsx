import React, { useRef, useState, useCallback, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number;
  borderGlowColor?: string;
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(99, 102, 241, 0.12)",
  spotlightSize = 350,
  borderGlowColor = "rgba(99, 102, 241, 0.35)",
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setPosition(null);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative overflow-hidden rounded-sm border border-border/80 bg-card transition-all duration-300",
        className,
      )}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered && position ? 1 : 0,
          background: position
            ? `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`
            : "none",
        }}
        aria-hidden="true"
      />

      {/* Dynamic Border Edge Illumination */}
      <div
        className="pointer-events-none absolute -inset-px rounded-sm transition-opacity duration-300"
        style={{
          opacity: isHovered && position ? 1 : 0,
          background: position
            ? `radial-gradient(${spotlightSize * 0.7}px circle at ${position.x}px ${position.y}px, ${borderGlowColor}, transparent 60%)`
            : "none",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
