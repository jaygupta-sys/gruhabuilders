"use client";

import { siteContent } from "@/data/content";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowUpRight } from "lucide-react";

export default function CtaSection() {
  const { ctaSection } = siteContent;

  return (
    <section className="relative py-24 sm:py-32 bg-[#080A0E] border-t border-[#E5A842]/30 overflow-hidden text-center">
      {/* Decorative Radial Amber Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E5A842]/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Large Background Outlined Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[12vw] font-bold text-white/[0.03] tracking-tighter select-none pointer-events-none whitespace-nowrap">
        GRUHA BUILDERS
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E5A842]/40 bg-[#131821] text-[11px] font-mono uppercase tracking-[0.2em] text-[#F7CF7E] mb-6 shadow-sm font-semibold">
          <span>{ctaSection.badge}</span>
        </div>

        <TextReveal
          as="h2"
          className="font-serif section-title text-[#FBF9F4] font-light max-w-3xl mx-auto"
          highlightGoldWords={["Legacy?", "Architectural"]}
        >
          {ctaSection.headline}
        </TextReveal>

        <p className="mt-6 text-sm sm:text-base lg:text-lg text-[#D1D5DB] font-light max-w-2xl mx-auto leading-relaxed">
          {ctaSection.subheadline}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton
            href={ctaSection.buttonHref}
            variant="amber"
            className="w-full sm:w-auto text-xs px-9 py-4"
          >
            <span>{ctaSection.buttonText}</span>
            <ArrowUpRight className="w-4 h-4 text-black" />
          </MagneticButton>

          <MagneticButton
            href="#projects"
            variant="outline"
            className="w-full sm:w-auto text-xs px-8 py-4"
          >
            <span>Browse Full Gallery</span>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
