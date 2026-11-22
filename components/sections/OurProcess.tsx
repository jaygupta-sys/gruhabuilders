"use client";

import { useEffect, useRef, useState } from "react";
import { siteContent } from "@/data/content";
import TextReveal from "@/components/ui/TextReveal";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Check, ArrowRight } from "lucide-react";

export default function OurProcess() {
  const { process } = siteContent;
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (window.innerWidth < 1024 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const totalSteps = process.steps.length;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionEl,
        start: "top top",
        end: `+=${totalSteps * 550}`,
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          const stepIndex = Math.min(
            Math.floor(progress * totalSteps),
            totalSteps - 1
          );
          setActiveStep(stepIndex);
        },
      });
    }, sectionEl);

    return () => ctx.revert();
  }, [process.steps.length]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative min-h-[100svh] w-full bg-[#080A0E] text-[#FBF9F4] flex flex-col justify-center py-20 lg:py-0 overflow-hidden border-t border-white/10"
    >
      {/* Background Construction Video - Vivid & Prominent */}
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-45 pointer-events-none">
        <video
          src={process.videoBackground.src}
          poster={process.videoBackground.poster}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover filter brightness-100 contrast-120 saturate-110"
        >
          <source src={process.videoBackground.src} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#080A0E] via-[#080A0E]/75 to-[#080A0E]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080A0E] via-transparent to-[#080A0E]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E5A842]/40 bg-[#131821] text-[11px] font-mono uppercase tracking-[0.2em] text-[#F7CF7E] mb-3 shadow-sm font-semibold">
            <span>{process.badge}</span>
          </div>
          <TextReveal
            as="h2"
            className="font-serif section-title text-[#FBF9F4] font-light"
            highlightGoldWords={["Journey.", "Standard."]}
          >
            {process.title}
          </TextReveal>
          <p className="mt-2 text-sm sm:text-base text-[#9BA3AF]">
            {process.subtitle}
          </p>
        </div>

        {/* Desktop View: Pinned Step Showcase */}
        <div className="hidden lg:grid grid-cols-12 gap-10 items-center">
          {/* Left: Step Navigation */}
          <div className="col-span-5 flex flex-col gap-3">
            {process.steps.map((step, idx) => (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between border ${
                  activeStep === idx
                    ? "bg-[#131821] border-[#E5A842] shadow-[0_0_20px_rgba(229,168,66,0.2)] text-[#FBF9F4]"
                    : "bg-[#080A0E]/60 border-white/5 opacity-60 hover:opacity-90 hover:bg-[#131821]/50 text-[#D1D5DB]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-mono text-sm font-bold ${
                      activeStep === idx ? "text-[#E5A842]" : "text-[#768396]"
                    }`}
                  >
                    {step.number}
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#9BA3AF]">
                      {step.phase} • {step.duration}
                    </div>
                    <div className="font-serif text-lg text-[#FBF9F4] font-normal">
                      {step.title}
                    </div>
                  </div>
                </div>
                {activeStep === idx && <ArrowRight className="w-4 h-4 text-[#E5A842]" />}
              </button>
            ))}
          </div>

          {/* Right: Active Step Highlight Detail Card */}
          <div className="col-span-7">
            {(() => {
              const current = process.steps[activeStep];
              return (
                <div className="p-8 sm:p-10 rounded-2xl bg-[#131821]/90 backdrop-blur-xl border border-[#E5A842]/40 relative overflow-hidden shadow-2xl animate-fadeIn">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#F7CF7E] bg-[#080A0E] px-3 py-1 rounded border border-[#E5A842]/30 font-semibold">
                      {current.phase} ({current.duration})
                    </span>
                    <span className="font-serif text-4xl text-[#E5A842]/40 font-light">
                      {current.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl text-[#FBF9F4] font-normal mb-4">
                    {current.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed mb-6">
                    {current.description}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-white/10">
                    <div className="text-xs uppercase tracking-widest text-[#F7CF7E] font-mono mb-2 font-semibold">
                      Engineering Rigor Checklist:
                    </div>
                    {current.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3 text-sm text-[#FBF9F4]">
                        <Check className="w-4 h-4 text-[#E5A842] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Mobile View: Vertical Step Sequence Cards */}
        <div className="lg:hidden flex flex-col gap-5">
          {process.steps.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-xl bg-[#131821]/90 backdrop-blur-md border border-white/10 shadow-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-[#F7CF7E] uppercase tracking-wider font-semibold">
                  {step.phase} • {step.duration}
                </span>
                <span className="font-serif text-2xl text-[#E5A842] font-bold">
                  {step.number}
                </span>
              </div>
              <h3 className="font-serif text-xl text-[#FBF9F4] font-normal mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-[#9BA3AF] leading-relaxed mb-4">
                {step.description}
              </p>
              <div className="space-y-2 pt-3 border-t border-white/10">
                {step.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-xs text-[#E5E7EB]">
                    <Check className="w-3.5 h-3.5 text-[#E5A842] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
