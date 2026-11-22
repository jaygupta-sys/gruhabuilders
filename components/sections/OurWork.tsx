"use client";

import { siteContent } from "@/data/content";
import TextReveal from "@/components/ui/TextReveal";
import VideoCard from "@/components/ui/VideoCard";

export default function OurWork() {
  const { workShowcase } = siteContent;

  return (
    <section id="showcase" className="relative py-20 sm:py-28 bg-[#080A0E] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E5A842]/40 bg-[#131821] text-[11px] font-mono uppercase tracking-[0.2em] text-[#F7CF7E] mb-4 shadow-sm font-semibold">
            <span>{workShowcase.badge}</span>
          </div>
          <TextReveal
            as="h2"
            className="font-serif section-title text-[#FBF9F4] font-light"
            highlightGoldWords={["Motion.", "Mastery"]}
          >
            {workShowcase.title}
          </TextReveal>
          <p className="mt-3 text-sm sm:text-base text-[#9BA3AF] max-w-xl mx-auto">
            {workShowcase.subtitle}
          </p>
        </div>

        {/* 2 Cinematic Video Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {workShowcase.videos.map((video) => (
            <VideoCard
              key={video.id}
              src={video.src}
              poster={video.poster}
              title={video.title}
              category={video.category}
              area={video.area}
              duration={video.duration}
              description={video.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
