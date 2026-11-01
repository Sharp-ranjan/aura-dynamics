import React, { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface LogoLoopProps {
  items: Array<{ label: string; icon?: ReactNode; badge?: string }>;
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}

export function LogoLoop({
  items,
  speed = "normal",
  direction = "left",
  pauseOnHover = true,
  className = "",
}: LogoLoopProps) {
  const speedClass = {
    slow: "duration-[45s]",
    normal: "duration-[30s]",
    fast: "duration-[18s]",
  }[speed];

  const dirClass = direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center justify-around gap-8 py-3",
          dirClass,
          speedClass,
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <div
            key={`${item.label}-${idx}`}
            className="flex items-center gap-2.5 rounded-sm border border-border/60 bg-surface/50 px-4 py-2 text-xs font-medium tracking-wide text-foreground/80 backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-surface"
          >
            {item.icon && <span className="text-primary">{item.icon}</span>}
            <span>{item.label}</span>
            {item.badge && (
              <span className="rounded-xs bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                {item.badge}
              </span>
            )}
          </div>
        ))}
      </div>

      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 items-center justify-around gap-8 py-3",
          dirClass,
          speedClass,
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <div
            key={`dup-${item.label}-${idx}`}
            className="flex items-center gap-2.5 rounded-sm border border-border/60 bg-surface/50 px-4 py-2 text-xs font-medium tracking-wide text-foreground/80 backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-surface"
          >
            {item.icon && <span className="text-primary">{item.icon}</span>}
            <span>{item.label}</span>
            {item.badge && (
              <span className="rounded-xs bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                {item.badge}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
