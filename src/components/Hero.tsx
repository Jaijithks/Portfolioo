"use client";

import {
  motion,
  useScroll,
  useTransform
} from "framer-motion";

import ScrollyCanvas from "./ScrollyCanvas";

export default function Hero() {

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
    <section className="relative">
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
  <p className="text-sm text-gray-400 tracking-[0.3em]">
    SCROLL TO EXPLORE
  </p>
</div>

        </motion.div>

      </div>
    </section>
  );
}