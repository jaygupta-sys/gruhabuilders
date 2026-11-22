"use client";

import { useState } from "react";
import { siteContent } from "@/data/content";
import TextReveal from "@/components/ui/TextReveal";
import {
  ShieldCheck,
  Scale,
  Clock,
  Video,
  Compass,
  CheckCircle2,
  FileText,
  Activity,
  Layers,
} from "lucide-react";

export default function WhyChooseUs() {
  const { whyChooseUs } = siteContent;

  return (
    <section id="why-us" className="relative py-20 sm:py-28 bg-[#0D1117] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E5A842]/40 bg-[#131821] text-[11px] font-mono uppercase tracking-[0.2em] text-[#F7CF7E] mb-4 shadow-sm font-semibold">
              <span>INSTITUTIONAL GOVERNANCE</span>
            </div>
            <TextReveal
              as="h2"
              className="font-serif section-title text-[#FBF9F4] font-light"
              highlightGoldWords={["Foundation", "Trust."]}
            >
              The Architectural Bento of Trust.
            </TextReveal>
            <p className="mt-3 text-sm sm:text-base text-[#9BA3AF]">
              Engineered with institutional governance: legally enforceable guarantees, fixed-cost contracts, and forensic lab audits.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-mono text-[#F7CF7E]">
            <span className="w-2 h-2 rounded-full bg-[#E5A842] animate-ping" />
            <span>ISO 9001:2015 CERTIFIED PROTOCOL</span>
          </div>
        </div>

        {/* High-End Architectural Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {/* Card 1: 10-Year Warranty (Spans 8 cols on desktop) */}
          <div className="md:col-span-8 p-7 sm:p-9 rounded-2xl bg-[#131821]/80 border border-[#E5A842]/30 shadow-2xl hover:border-[#E5A842]/60 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#E5A842]/15 via-transparent to-transparent rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#080A0E] border border-[#E5A842]/30 flex items-center justify-center text-[#E5A842] shadow-md">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#080A0E] border border-[#E5A842]/40 text-[10px] font-mono text-[#F7CF7E] uppercase tracking-wider font-semibold">
                  LEGAL INSTRUMENT #01
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#FBF9F4] font-normal mb-3">
                10-Year Registered Structural Warranty
              </h3>
              <p className="text-sm text-[#D1D5DB] leading-relaxed max-w-xl">
                Our structural design criteria exceed standard IS 456 codes. We issue a legally registered 10-year structural guarantee protecting every column, foundation plinth, and RCC slab against settlement and structural defects.
              </p>
            </div>

            {/* Micro Structural Spec Badges */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-3 rounded-lg bg-[#080A0E] border border-white/5">
                <div className="text-[10px] uppercase font-mono text-[#E5A842] font-semibold">
                  Seismic Resistance
                </div>
                <div className="text-xs font-semibold text-[#FBF9F4] mt-0.5">
                  Zone II / III Engineered
                </div>
              </div>
              <div className="p-3 rounded-lg bg-[#080A0E] border border-white/5">
                <div className="text-[10px] uppercase font-mono text-[#E5A842] font-semibold">
                  Steel Reinforcement
                </div>
                <div className="text-xs font-semibold text-[#FBF9F4] mt-0.5">
                  Tata Tiscon 550D TMT
                </div>
              </div>
              <div className="p-3 rounded-lg bg-[#080A0E] border border-white/5 col-span-2 sm:col-span-1">
                <div className="text-[10px] uppercase font-mono text-[#E5A842] font-semibold">
                  Concrete Curing
                </div>
                <div className="text-xs font-semibold text-[#FBF9F4] mt-0.5">
                  28-Day Pond Test Logged
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Zero Escalation (Spans 4 cols on desktop) */}
          <div className="md:col-span-4 p-7 sm:p-9 rounded-2xl bg-[#131821]/80 border border-white/10 hover:border-[#E5A842]/50 shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#080A0E] border border-white/10 flex items-center justify-center text-[#E5A842] shadow-md">
                  <Scale className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs text-[#E5A842] font-bold">02</span>
              </div>

              <h3 className="font-serif text-2xl text-[#FBF9F4] font-normal mb-3">
                Zero Price Escalation Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-[#9BA3AF] leading-relaxed">
                No mid-construction surprises. Our exhaustive 3D BIM Bill of Quantities freezes all procurement and labour rates from contract signing to final handover.
              </p>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-[#080A0E] border border-white/5 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase text-[#F7CF7E] font-semibold">
                  Contract Model
                </div>
                <div className="text-xs font-bold text-[#FBF9F4]">
                  Fixed-Cost Turnkey
                </div>
              </div>
              <FileText className="w-5 h-5 text-[#E5A842]" />
            </div>
          </div>

          {/* Card 3: Guaranteed On-Time Delivery (Spans 4 cols) */}
          <div className="md:col-span-4 p-7 sm:p-9 rounded-2xl bg-[#131821]/80 border border-white/10 hover:border-[#E5A842]/50 shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#080A0E] border border-white/10 flex items-center justify-center text-[#E5A842] shadow-md">
                  <Clock className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs text-[#E5A842] font-bold">03</span>
              </div>

              <h3 className="font-serif text-2xl text-[#FBF9F4] font-normal mb-3">
                Guaranteed On-Time Delivery
              </h3>
              <p className="text-xs sm:text-sm text-[#9BA3AF] leading-relaxed">
                We contractually commit to our completion dates. In the improbable event of an unexcused delay, we pay you a fixed daily contractual compensation.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-[#E5A842]">
              <CheckCircle2 className="w-4 h-4" />
              <span>Contractual Delay Compensation Clause</span>
            </div>
          </div>

          {/* Card 4: Weekly 4K Drone & VR Site Logs (Spans 4 cols) */}
          <div className="md:col-span-4 p-7 sm:p-9 rounded-2xl bg-[#131821]/80 border border-white/10 hover:border-[#E5A842]/50 shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#080A0E] border border-white/10 flex items-center justify-center text-[#E5A842] shadow-md">
                  <Video className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs text-[#E5A842] font-bold">04</span>
              </div>

              <h3 className="font-serif text-2xl text-[#FBF9F4] font-normal mb-3">
                Weekly 4K Drone & VR Logs
              </h3>
              <p className="text-xs sm:text-sm text-[#9BA3AF] leading-relaxed">
                Track site progress from anywhere in the world. Ideal for NRIs and frequent travellers, with weekly aerial footage and cube crushing test uploads.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs font-mono text-[#F7CF7E] font-semibold">
              <Activity className="w-4 h-4" />
              <span>Live Cloud Client Portal</span>
            </div>
          </div>

          {/* Card 5: Vastu Shastra & Climate Architecture (Spans 4 cols) */}
          <div className="md:col-span-4 p-7 sm:p-9 rounded-2xl bg-[#131821]/80 border border-white/10 hover:border-[#E5A842]/50 shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#080A0E] border border-white/10 flex items-center justify-center text-[#E5A842] shadow-md">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs text-[#E5A842] font-bold">05</span>
              </div>

              <h3 className="font-serif text-2xl text-[#FBF9F4] font-normal mb-3">
                Vastu & Biophilic Harmony
              </h3>
              <p className="text-xs sm:text-sm text-[#9BA3AF] leading-relaxed">
                Every layout balances natural solar geometry, cross-breeze wind vectors, and authentic Vastu Shastra orientation for family health and prosperity.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-[#E5A842]">
              <Layers className="w-4 h-4" />
              <span>Solar Wind-Path Climate Modeling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
