"use client";

import { useEffect, useRef } from "react";
import { siteContent } from "@/data/content";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowDown, ShieldCheck, Award, Clock } from "lucide-react";
import { gsap } from "@/lib/gsap";

export default function Hero() {
  const { hero } = siteContent;
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        y: 60,
        opacity: 0.9,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#080A0E] text-[#FBF9F4]"
    >
      {/* Background Hero Video - Highly Visible & Vivid */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={hero.video.poster}
          className="w-full h-full object-cover scale-105 will-change-transform opacity-80 filter brightness-95 contrast-110 saturate-110"
        >
          <source src={hero.video.src} type="video/mp4" />
        </video>

        {/* Cinematic Vignette Overlay - Keeps video clearly visible while ensuring text pops */}
        <div className="absolute inset-0 bg-hero-vignette pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080A0E] via-transparent to-[#080A0E]/60 pointer-events-none" />
      </div>

      {/* Hero Core Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 flex flex-col items-center text-center"
      >
        {/* Architectural Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#0D1117]/85 backdrop-blur-md border border-[#E5A842]/40 mb-6 sm:mb-8 animate-fadeIn max-w-[92vw] shadow-[0_0_20px_rgba(229,168,66,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5A842] animate-ping shrink-0" />
          <span className="text-[9px] sm:text-xs font-mono uppercase tracking-[0.15em] sm:tracking-[0.25em] text-[#F7CF7E] text-center font-semibold">
            {hero.badge}
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="font-serif hero-headline font-light tracking-tight text-[#FAF7F2] max-w-4xl mx-auto drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
          <TextReveal as="span" highlightGoldWords={["Spaces.", "Memories."]}>
            {hero.headlineLine1}
          </TextReveal>
          <br className="hidden sm:inline" />
          <span className="inline-block sm:ml-2">
            <TextReveal as="span" delay={0.2} highlightGoldWords={["Memories."]}>
              {hero.headlineLine2}
            </TextReveal>
          </span>
        </h1>

        {/* Subtitle / Description */}
        <p className="mt-6 sm:mt-8 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-[#D1D5DB] font-light leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          {hero.description}
        </p>

        {/* CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <MagneticButton
            href={hero.primaryCta.href}
            variant="amber"
            className="w-full sm:w-auto text-xs px-8 py-4"
          >
            {hero.primaryCta.text}
          </MagneticButton>
          <MagneticButton
            href={hero.secondaryCta.href}
            variant="outline"
            className="w-full sm:w-auto text-xs px-8 py-4"
          >
            {hero.secondaryCta.text}
          </MagneticButton>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/15 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#E5A842] shrink-0" />
            <span className="text-xs text-[#E5E7EB] font-medium leading-tight drop-shadow">
              10-Year Enforceable Structural Warranty
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#E5A842] shrink-0" />
            <span className="text-xs text-[#E5E7EB] font-medium leading-tight drop-shadow">
              RERA Compliant & On-Time Penalty Clause
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-[#E5A842] shrink-0" />
            <span className="text-xs text-[#E5E7EB] font-medium leading-tight drop-shadow">
              240+ German Precision Quality Tests
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#stats"
        aria-label="Scroll down to statistics"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-[#F7CF7E] hover:text-white transition-colors focus:outline-none drop-shadow-md"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-mono font-semibold">SCROLL</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
