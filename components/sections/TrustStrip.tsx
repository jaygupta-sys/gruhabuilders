"use client";

import { siteContent } from "@/data/content";
import Counter from "@/components/ui/Counter";

export default function TrustStrip() {
  const { stats, marqueeKeywords } = siteContent;

  return (
    <section id="stats" className="relative z-20 bg-[#0B0F15] border-y border-[#E5A842]/25 py-12 sm:py-16 overflow-hidden">
      {/* Background Architectural Watermark */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 font-serif text-[120px] sm:text-[160px] font-bold text-white/[0.03] tracking-tighter select-none pointer-events-none">
        TRUST
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Marquee Strip */}
        <div className="mb-12 overflow-hidden whitespace-nowrap relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0B0F15] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0B0F15] to-transparent z-10 pointer-events-none" />

          <div className="inline-flex gap-8 animate-marquee">
            {[...marqueeKeywords, ...marqueeKeywords].map((word, idx) => (
              <span
                key={idx}
                className="text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-[#F7CF7E] flex items-center gap-6 font-semibold"
              >
                <span>{word}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5A842]" />
              </span>
            ))}
          </div>
        </div>

        {/* 4 Quantitative Proof Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-7 rounded-xl bg-[#131821]/80 border border-white/10 hover:border-[#E5A842]/50 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="w-8 h-[2px] bg-amber-gradient mb-4 group-hover:w-14 transition-all" />

              <div>
                <div className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-amber-gradient flex items-baseline drop-shadow">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                  />
                </div>
                <h3 className="mt-2 text-sm sm:text-base font-semibold text-[#FBF9F4] tracking-wide font-sans">
                  {stat.label}
                </h3>
              </div>

              <p className="mt-3 text-xs text-[#9BA3AF] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
