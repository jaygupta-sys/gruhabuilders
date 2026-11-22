"use client";

import { useState } from "react";
import { siteContent } from "@/data/content";
import TextReveal from "@/components/ui/TextReveal";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const { testimonials } = siteContent;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="relative py-20 sm:py-28 bg-[#0D1117] border-t border-white/10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E5A842]/40 bg-[#131821] text-[11px] font-mono uppercase tracking-[0.2em] text-[#F7CF7E] mb-4 shadow-sm font-semibold">
            <span>CLIENT PERSPECTIVES</span>
          </div>
          <TextReveal
            as="h2"
            className="font-serif section-title text-[#FBF9F4] font-light"
            highlightGoldWords={["Patrons.", "Living"]}
          >
            Voices of Our Discerning Patrons.
          </TextReveal>
        </div>

        {/* Testimonial Feature Card */}
        <div className="relative p-8 sm:p-14 rounded-2xl bg-[#131821]/90 backdrop-blur-xl border border-[#E5A842]/35 shadow-2xl">
          <Quote className="w-12 h-12 text-[#E5A842]/30 mb-6" />

          {/* Star Rating */}
          <div className="flex items-center gap-1 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#E5A842] text-[#E5A842]" />
            ))}
          </div>

          {/* Testimonial Quote */}
          <blockquote className="font-serif text-lg sm:text-2xl text-[#FBF9F4] font-light leading-relaxed italic mb-8">
            "{current.quote}"
          </blockquote>

          {/* Client Info & Project Tag */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div>
              <div className="font-serif text-lg text-[#FBF9F4] font-medium">
                {current.name}
              </div>
              <div className="text-xs text-[#9BA3AF] mt-0.5">
                {current.role} • {current.location}
              </div>
              <div className="text-[11px] font-mono text-[#F7CF7E] mt-1 font-semibold">
                Project: {current.project} ({current.year})
              </div>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full bg-[#080A0E] border border-white/10 text-[#FBF9F4] hover:border-[#E5A842] hover:text-[#F7CF7E] flex items-center justify-center transition-colors min-h-[44px]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full bg-[#080A0E] border border-white/10 text-[#FBF9F4] hover:border-[#E5A842] hover:text-[#F7CF7E] flex items-center justify-center transition-colors min-h-[44px]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
