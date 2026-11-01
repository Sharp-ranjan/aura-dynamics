import { motion, useReducedMotion } from "framer-motion";
import React, { useMemo } from "react";
import { cn } from "@/lib/utils";

export interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  stepDuration?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export function BlurText({
  text,
  className = "",
  delay = 0,
  stepDuration = 0.04,
  animateBy = "words",
  direction = "bottom",
  as: Component = "span",
}: BlurTextProps) {
  const shouldReduceMotion = useReducedMotion();

  const elements = useMemo(() => {
    if (animateBy === "words") {
      return text.split(" ");
    }
    return text.split("");
  }, [text, animateBy]);

  const yOffset = direction === "top" ? -12 : 12;

  if (shouldReduceMotion) {
    return <Component className={className}>{text}</Component>;
  }

  return (
    <Component className={cn("inline-flex flex-wrap", className)} aria-label={text}>
      {elements.map((el, i) => (
        <motion.span
          key={`${el}-${i}`}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            y: yOffset,
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.5,
            delay: delay + i * stepDuration,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="inline-block will-change-[transform,opacity,filter]"
        >
          {el}
          {animateBy === "words" && i < elements.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </Component>
  );
}
