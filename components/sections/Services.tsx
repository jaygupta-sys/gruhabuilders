"use client";

import { siteContent } from "@/data/content";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import {
  Home,
  Building2,
  KeyRound,
  Sparkles,
  Compass,
  ArrowRight,
  Check,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Home,
  Building2,
  KeyRound,
  Sparkles,
  Compass,
};

export default function Services() {
  const { services } = siteContent;

  return (
    <section id="services" className="relative py-20 sm:py-28 bg-[#0D1117] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E5A842]/40 bg-[#131821] text-[11px] font-mono uppercase tracking-[0.2em] text-[#F7CF7E] mb-4 shadow-sm font-semibold">
              <span>OUR EXPERTISE</span>
            </div>
            <TextReveal
              as="h2"
              className="font-serif section-title text-[#FBF9F4] font-light"
              highlightGoldWords={["Sanctuaries.", "Standards."]}
            >
              Crafting Generational Sanctuaries.
            </TextReveal>
            <p className="mt-3 text-sm sm:text-base text-[#9BA3AF]">
              Comprehensive architectural drafting, civil engineering, and luxury turnkey execution with single-point accountability.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <MagneticButton href="#contact" variant="outline" className="text-xs">
              <span>Custom Proposal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>
        </div>

        {/* 5 Luxury Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Home;

            return (
              <div
                key={service.id}
                className="group relative p-7 sm:p-8 rounded-2xl bg-[#131821]/80 border border-white/10 hover:border-[#E5A842]/60 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-[0_10px_35px_rgba(229,168,66,0.15)] hover:-translate-y-1"
              >
                {/* Top Corner Indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#080A0E] border border-white/10 flex items-center justify-center text-[#E5A842] group-hover:bg-[#E5A842] group-hover:text-black transition-colors duration-300 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-[#E5A842] font-bold">
                    0{idx + 1}
                  </span>
                </div>

                {/* Service Title & Subtitle */}
                <div>
                  <h3 className="font-serif text-2xl text-[#FBF9F4] font-normal group-hover:text-[#F7CF7E] transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs text-[#E5A842] font-semibold uppercase tracking-wider mt-1 mb-3">
                    {service.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-[#9BA3AF] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-[#E5E7EB]">
                        <Check className="w-3.5 h-3.5 text-[#E5A842] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags Footer */}
                <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-[#080A0E] text-[#9BA3AF] border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
