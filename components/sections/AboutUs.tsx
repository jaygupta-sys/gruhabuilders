"use client";

import dynamic from "next/dynamic";
import { siteContent } from "@/data/content";
import TextReveal from "@/components/ui/TextReveal";
import { CheckCircle2, Play } from "lucide-react";

const GoldHouseCanvas = dynamic(
  () => import("@/components/three/GoldHouseCanvas"),
  {
    ssr: false,
    loading: () => (
      <div className="relative w-full aspect-square max-w-[480px] mx-auto flex items-center justify-center rounded-2xl glass-card-accent">
        <span className="text-xs uppercase tracking-[0.2em] text-[#E5A842] font-mono animate-pulse">
          INITIALIZING 3D ENVIRONMENT...
        </span>
      </div>
    ),
  }
);

export default function AboutUs() {
  const { about } = siteContent;

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-[#080A0E] overflow-hidden">
      {/* Subtle Amber Glow backdrop */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#E5A842]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E5A842]/40 bg-[#131821] text-[11px] font-mono uppercase tracking-[0.2em] text-[#F7CF7E] mb-4 shadow-sm font-semibold">
            <span>{about.badge}</span>
          </div>
          <TextReveal
            as="h2"
            className="font-serif section-title text-[#FBF9F4] font-light"
            highlightGoldWords={["Precision.", "Trust."]}
          >
            {about.title}
          </TextReveal>
          <p className="mt-3 text-base sm:text-lg text-[#F7CF7E] font-serif italic">
            {about.subtitle}
          </p>
        </div>

        {/* 2-Column Showcase: Content + 3D Model */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Story & Quality Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="space-y-4 text-sm sm:text-base text-[#D1D5DB] font-light leading-relaxed">
              {about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* 3 Pillars */}
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              {about.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#131821]/80 border border-white/10 hover:border-[#E5A842]/50 transition-colors shadow-lg"
                >
                  <div className="flex items-center gap-2 text-[#FBF9F4] font-serif text-lg font-medium mb-1">
                    <CheckCircle2 className="w-4 h-4 text-[#E5A842] shrink-0" />
                    <span>{pillar.title}</span>
                  </div>
                  <p className="text-xs text-[#9BA3AF] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Live Excavation / Site Work Video Badge Preview - Highly Visible */}
            <div className="mt-2 p-4 rounded-xl bg-[#131821] border border-white/10 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-24 h-16 rounded-lg overflow-hidden bg-black shrink-0 border border-[#E5A842]/40 shadow-md">
                  <video
                    src={about.video.src}
                    poster={about.video.poster}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover filter brightness-105"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Play className="w-5 h-5 fill-[#E5A842] text-[#E5A842]" />
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-widest text-[#F7CF7E] font-semibold">
                    LIVE EXCAVATION PROTOCOL
                  </div>
                  <div className="text-xs sm:text-sm text-[#FBF9F4] font-medium mt-0.5">
                    {about.video.caption}
                  </div>
                </div>
              </div>
              <span className="text-[11px] font-mono text-[#E5A842] border border-[#E5A842]/30 px-3 py-1 rounded bg-[#080A0E] font-semibold">
                ISO 9001:2015 AUDITED
              </span>
            </div>
          </div>

          {/* Right Column: 3D House Model Canvas */}
          <div className="lg:col-span-5 flex justify-center">
            <GoldHouseCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}
