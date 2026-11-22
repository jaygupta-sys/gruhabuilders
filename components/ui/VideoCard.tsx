"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play, X, Maximize2 } from "lucide-react";

interface VideoCardProps {
  src: string;
  poster: string;
  title: string;
  category: string;
  area?: string;
  duration?: string;
  description?: string;
}

export default function VideoCard({
  src,
  poster,
  title,
  category,
  area,
  duration,
  description,
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play().catch(() => {});
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  return (
    <>
      <div
        ref={containerRef}
        onClick={() => setIsLightboxOpen(true)}
        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#131821]/80 hover:border-[#E5A842]/60 transition-all duration-300 shadow-xl hover:shadow-[0_10px_35px_rgba(229,168,66,0.15)] flex flex-col"
      >
        {/* Video Preview - Vivid & Clearly Visible */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black">
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-100 contrast-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#080A0E] via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

          {/* Play Icon Pill */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#080A0E]/80 backdrop-blur-md text-[11px] text-[#F7CF7E] font-mono tracking-wider shadow-lg border border-[#E5A842]/30 font-semibold">
            <Play className="w-3 h-3 fill-[#E5A842] text-[#E5A842]" />
            <span>{duration || "WATCH"}</span>
          </div>

          {/* Hover indicator */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 rounded-full bg-amber-gradient text-black flex items-center justify-center shadow-[0_0_30px_rgba(229,168,66,0.7)] scale-90 group-hover:scale-100 transition-transform">
              <Play className="w-7 h-7 fill-black text-black translate-x-0.5" />
            </div>
          </div>
        </div>

        {/* Card Content Details */}
        <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs tracking-widest uppercase text-[#F7CF7E] font-mono mb-2 font-semibold">
              <span>{category}</span>
              {area && <span className="text-[#9BA3AF]">{area}</span>}
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#FBF9F4] font-normal group-hover:text-[#F7CF7E] transition-colors">
              {title}
            </h3>
            {description && (
              <p className="mt-2 text-xs sm:text-sm text-[#9BA3AF] line-clamp-2 leading-relaxed">
                {description}
              </p>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-[#E5A842] font-semibold group-hover:translate-x-1 transition-transform">
            <span>Play Cinematic Tour</span>
            <Maximize2 className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Fullscreen Video Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8 animate-fadeIn">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsLightboxOpen(false);
            }}
            aria-label="Close video player"
            className="absolute top-4 sm:top-8 right-4 sm:right-8 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-amber-gradient hover:text-black transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-black">
            <video
              src={src}
              autoPlay
              controls
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
