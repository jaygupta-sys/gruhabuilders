"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface TextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  stagger?: number;
  highlightGoldWords?: string[];
}

export default function TextReveal({
  children,
  className = "",
  as = "h2",
  delay = 0,
  stagger = 0.05,
  highlightGoldWords = [],
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const words = el.querySelectorAll(".reveal-word");
    if (!words.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        {
          yPercent: 110,
          opacity: 0,
          rotateZ: 2,
        },
        {
          yPercent: 0,
          opacity: 1,
          rotateZ: 0,
          duration: 1.1,
          ease: "power4.out",
          stagger: stagger,
          delay: delay,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, stagger]);

  // Split words cleanly for masked translation
  const words = children.split(" ");
  const Component = as as any;

  return (
    <Component ref={containerRef} className={className}>
      {words.map((word, idx) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, "");
        const isGold = highlightGoldWords.some(
          (hw) => hw.toLowerCase() === cleanWord.toLowerCase()
        );

        return (
          <span
            key={idx}
            className="inline-block overflow-hidden align-top leading-tight mr-[0.26em] last:mr-0"
          >
            <span
              className={`reveal-word inline-block will-change-transform ${
                isGold ? "text-gold-gradient font-medium" : ""
              }`}
            >
              {word}
            </span>
          </span>
        );
      })}
    </Component>
  );
}
