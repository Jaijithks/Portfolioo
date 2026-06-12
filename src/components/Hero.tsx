"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform
} from "framer-motion";

import ScrollyCanvas from "./ScrollyCanvas";

export default function Hero() {

  const heroRef = useRef<HTMLElement | null>(null);
  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        // show indicator if at least ~20% of the hero is visible
        setShowIndicator(entry.intersectionRatio > 0.2);
      },
      { threshold: [0, 0.2, 0.5, 0.8], rootMargin: '-80px 0px 0px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const { scrollY } = useScroll();

  const opacity = useTransform(
    scrollY,
    [0, 800],
    [1, 0]
  );

  const y = useTransform(
    scrollY,
    [0, 800],
    [0, -200]
  );
  return (
    <section ref={heroRef} className="relative">
      <ScrollyCanvas />
 <div className="absolute inset-0 bg-black/10 z-0" />

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black z-0" />
      <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center pb-24">

        <motion.div
  style={{
    opacity,
    y
  }}
  className="text-center z-10"
>

          <p className="uppercase tracking-[0.4em] text-gray-300 mb-6">
            FULL STACK DEVELOPER
          </p>

          <h1 className="text-6xl md:text-8xl font-bold">
  JAIJITH
</h1>

<h2 className="text-5xl md:text-7xl font-bold text-gray-400">
  KS
</h2>

          <div className="mt-12">
  <p className="text-sm md:text-base text-amber-300 tracking-[0.35em] font-semibold">
    SCROLL TO EXPLORE
  </p>
</div>

        </motion.div>

      </div>
      {showIndicator && (
        <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 pointer-events-none">
          <motion.div
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
            className="flex flex-col items-center gap-2 pointer-events-none"
            aria-hidden="true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-amber-400 drop-shadow-lg">
              <path fillRule="evenodd" d="M12.47 15.78a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06L12 13.19l4.53-4.52a.75.75 0 1 1 1.06 1.06l-5 5z" clipRule="evenodd" />
            </svg>
            <span className="text-xs text-gray-300 uppercase tracking-[0.25em]">Scroll</span>
          </motion.div>
        </div>
      )}
    </section>
  );
}