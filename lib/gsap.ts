import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Only register in browser environment
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  // Default config for smooth responsive scroll performance
  ScrollTrigger.config({
    limitCallbacks: true,
    ignoreMobileResize: true,
  });
}

export { gsap, ScrollTrigger };
