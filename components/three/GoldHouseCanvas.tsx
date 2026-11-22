"use client";

import React, { useRef, useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import GoldHouseModel from "./GoldHouseModel";
import { useLowPowerDevice } from "@/hooks/useLowPowerDevice";

export default function GoldHouseCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const isLowPower = useLowPowerDevice();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (isLowPower) {
    return (
      <div
        ref={containerRef}
        className="relative w-full aspect-square max-w-[480px] mx-auto flex flex-col items-center justify-center p-8 rounded-2xl bg-[#131821] border border-[#E5A842]/30 shadow-2xl overflow-hidden"
      >
        <div className="relative w-44 h-44 sm:w-56 sm:h-56">
          <div className="absolute inset-0 rounded-full bg-[#E5A842]/20 blur-3xl animate-pulse-slow" />
          <div className="relative z-10 w-full h-full p-3 rounded-full bg-[#080A0E] shadow-2xl flex items-center justify-center border border-[#E5A842]/30">
            <Image
              src="/assets/logo.png"
              alt="GRUHA Architectural Model"
              width={220}
              height={220}
              className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(229,168,66,0.6)]"
            />
          </div>
        </div>
        <div className="mt-4 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#F7CF7E] font-mono font-bold">
            ARCHITECTURAL SANCTUARY
          </span>
          <p className="text-xs text-[#9BA3AF] mt-1">
            Engineered with seismic-grade precision and timeless Indian Vastu
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[500px] mx-auto rounded-2xl overflow-hidden bg-[#131821]/80 backdrop-blur-xl border border-[#E5A842]/40 flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(229,168,66,0.1)]"
    >
      {/* Decorative Corner Framing */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#E5A842]/60 pointer-events-none z-10" />
      <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#E5A842]/60 pointer-events-none z-10" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#E5A842]/60 pointer-events-none z-10" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#E5A842]/60 pointer-events-none z-10" />

      {/* Floating 3D Badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-[#080A0E]/85 backdrop-blur-md border border-[#E5A842]/40 text-[10px] text-[#F7CF7E] font-mono uppercase tracking-widest pointer-events-none shadow-md font-semibold">
        <span className="w-1.5 h-1.5 rounded-full bg-[#E5A842] animate-ping" />
        <span>INTERACTIVE 3D SANCTUARY</span>
      </div>

      <div className="absolute bottom-4 right-4 z-10 text-[10px] text-[#9BA3AF] font-mono tracking-wider pointer-events-none bg-[#080A0E]/80 px-2.5 py-1 rounded border border-white/10 shadow-md">
        DRAG TO ROTATE
      </div>

      <Canvas
        camera={{ position: [0, 1.8, 4.6], fov: 42 }}
        dpr={[1, 1.5]}
        frameloop={isVisible ? "always" : "never"}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 8, 5]} intensity={1.8} color="#FFF8EB" />
        <directionalLight position={[-5, -2, -5]} intensity={0.5} color="#E5A842" />

        <Suspense fallback={null}>
          <Environment preset="night" />
          <GoldHouseModel isPointerActive={isVisible} />
        </Suspense>
      </Canvas>
    </div>
  );
}
