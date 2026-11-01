import React, { useRef, useState, useCallback, type MouseEvent, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface MagnetProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  activeDistance?: number;
  disabled?: boolean;
}

export function Magnet({
  children,
  className = "",
  strength = 0.25,
  activeDistance = 100,
  disabled = false,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (disabled || shouldReduceMotion || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const distance = Math.hypot(distX, distY);

      if (distance < activeDistance) {
        setOffset({
          x: distX * strength,
          y: distY * strength,
        });
      } else {
        setOffset({ x: 0, y: 0 });
      }
    },
    [disabled, shouldReduceMotion, activeDistance, strength],
  );

  const handleMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
  }, []);

  if (disabled || shouldReduceMotion) {
    return <div className={cn("inline-block", className)}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.5 }}
      className={cn("inline-block will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}

