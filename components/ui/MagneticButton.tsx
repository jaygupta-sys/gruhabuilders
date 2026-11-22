"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "amber" | "outline" | "gold" | "primary" | "ghost";
  ariaLabel?: string;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  variant = "amber",
  ariaLabel,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    setIsPointer(window.matchMedia("(pointer: fine)").matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPointer || !buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (e.clientX - centerX) * 0.28;
    const deltaY = (e.clientY - centerY) * 0.28;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    "relative inline-flex items-center justify-center font-sans uppercase tracking-[0.2em] text-xs font-bold px-7 py-4 min-h-[48px] rounded-sm transition-all duration-300 overflow-hidden group select-none";

  const variants = {
    amber:
      "bg-amber-gradient text-[#080A0E] shadow-[0_4px_25px_rgba(229,168,66,0.35)] hover:shadow-[0_4px_35px_rgba(229,168,66,0.6)] hover:brightness-105 active:scale-95",
    primary:
      "bg-amber-gradient text-[#080A0E] shadow-[0_4px_25px_rgba(229,168,66,0.35)] hover:shadow-[0_4px_35px_rgba(229,168,66,0.6)] hover:brightness-105 active:scale-95",
    gold:
      "bg-amber-gradient text-[#080A0E] shadow-[0_4px_25px_rgba(229,168,66,0.35)] hover:shadow-[0_4px_35px_rgba(229,168,66,0.6)] hover:brightness-105 active:scale-95",
    outline:
      "border border-[#E5A842]/50 text-[#FBF9F4] bg-[#131821]/60 backdrop-blur-md hover:border-[#E5A842] hover:bg-[#E5A842]/15 hover:text-[#F7CF7E] active:scale-95 shadow-sm",
    ghost: "text-[#FBF9F4] hover:text-[#F7CF7E] hover:bg-white/5 active:scale-95",
  };

  const content = (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isPointer ? `translate3d(${position.x}px, ${position.y}px, 0)` : undefined,
        transition: position.x === 0 ? "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)" : "none",
      }}
      className={cn(baseStyles, variants[variant as keyof typeof variants] || variants.amber, className)}
    >
      <span className="absolute inset-0 w-full h-full bg-shimmer-amber -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className="inline-block">
      {content}
    </button>
  );
}
