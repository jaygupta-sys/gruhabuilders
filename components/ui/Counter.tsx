"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface CounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export default function Counter({
  value,
  suffix = "",
  decimals = 0,
  duration = 2.0,
  className = "",
}: CounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayValue(value);
      return;
    }

    const counterObj = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(counterObj, {
        val: value,
        duration: duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true,
        },
        onUpdate: () => {
          setDisplayValue(
            decimals > 0
              ? parseFloat(counterObj.val.toFixed(decimals))
              : Math.round(counterObj.val)
          );
        },
      });
    }, el);

    return () => ctx.revert();
  }, [value, duration, decimals]);

  return (
    <span ref={elementRef} className={className}>
      {decimals > 0 ? displayValue.toFixed(decimals) : displayValue}
      {suffix}
    </span>
  );
}
