"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const duration = 1.6;
    const counterObj = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(counterObj, {
        val: 100,
        duration: duration,
        ease: "power2.inOut",
        onUpdate: () => {
          setCount(Math.round(counterObj.val));
        },
      });

      if (progressLineRef.current) {
        gsap.to(progressLineRef.current, {
          scaleX: 1,
          duration: duration,
          ease: "power2.inOut",
        });
      }

      if (logoRef.current) {
        gsap.fromTo(
          logoRef.current,
          { opacity: 0, scale: 0.88, filter: "brightness(0.6) blur(6px)" },
          {
            opacity: 1,
            scale: 1,
            filter: "brightness(1.1) blur(0px)",
            duration: 1.1,
            ease: "power3.out",
          }
        );
      }

      gsap.to(containerRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1.0,
        ease: "power4.inOut",
        delay: duration + 0.1,
        onComplete: () => {
          setIsFinished(true);
          document.body.style.overflow = "";
          if (onComplete) onComplete();
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (isFinished) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050709] text-[#FBF9F4]"
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      }}
    >
      <div className="relative flex flex-col items-center text-center px-6">
        <div ref={logoRef} className="relative mb-6 w-24 h-24 sm:w-28 sm:h-28">
          <div className="absolute inset-0 rounded-full bg-[#E5A842]/20 blur-3xl animate-pulse-slow" />
          <div className="relative z-10 w-full h-full p-2 rounded-full bg-[#131821] shadow-2xl flex items-center justify-center border border-[#E5A842]/40">
            <Image
              src="/assets/logo.png"
              alt="GRUHA BUILDERS Logo"
              width={100}
              height={100}
              priority
              className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(229,168,66,0.6)]"
            />
          </div>
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl tracking-widest text-[#FBF9F4] uppercase font-light">
          GRUHA <span className="text-[#E5A842] font-semibold">BUILDERS</span>
        </h1>
        <p className="mt-1 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#9BA3AF]">
          Building Your Trust
        </p>

        <div className="mt-8 w-48 sm:w-64 flex flex-col items-center">
          <div className="w-full h-[2px] bg-white/10 relative overflow-hidden rounded-full">
            <div
              ref={progressLineRef}
              className="absolute left-0 top-0 bottom-0 w-full bg-amber-gradient origin-left scale-x-0"
            />
          </div>
          <div ref={counterRef} className="mt-3 flex items-center gap-2 font-mono text-xs text-[#9BA3AF]">
            <span>LOADING ARCHITECTURE</span>
            <span className="text-[#F7CF7E] font-bold">{count}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
