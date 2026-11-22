"use client";

import { useEffect, useState } from "react";

/**
 * Detects low-end mobile devices or users who prefer reduced motion
 * to safely disable or scale down 3D effects and heavy animations.
 */
export function useLowPowerDevice(): boolean {
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    try {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      // Hardware concurrency check: <= 4 cores usually indicates budget/battery-saver device
      const hardwareConcurrency = navigator.hardwareConcurrency || 8;
      // Device memory check in GB (Chromium browsers)
      // @ts-expect-error deviceMemory is experimental
      const deviceMemory = navigator.deviceMemory || 8;

      if (prefersReduced || hardwareConcurrency <= 4 || deviceMemory <= 4) {
        setIsLowPower(true);
      }
    } catch {
      setIsLowPower(false);
    }
  }, []);

  return isLowPower;
}
