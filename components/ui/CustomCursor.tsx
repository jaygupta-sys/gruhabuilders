"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest("a, button, [role='button'], input, textarea, select, video, .interactive-hover");
      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleElementHover);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#E5A842] pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 border border-[#E5A842]/70 transition-all duration-300 ease-out ${
          isHovered
            ? "w-14 h-14 bg-[#E5A842]/15 scale-125 border-[#E5A842] shadow-[0_0_20px_rgba(229,168,66,0.5)]"
            : "w-8 h-8 bg-transparent scale-100"
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
    </>
  );
}
