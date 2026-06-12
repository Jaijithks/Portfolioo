"use client";
import Image from 'next/image';

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center"
    >
      <div className="w-full mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

       <div>
  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="uppercase tracking-[0.4em] text-amber-500 text-4xl underline mb-6 font-bold"
  >
    ABOUT
  </motion.p>

  <motion.h2
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl"
  >
   Building modern web experiences
from frontend to backend.
  </motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3 }}
    className="mt-8 text-gray-400 text-lg leading-relaxed max-w-xl"
  >
    I'm a recent Computer Science graduate and Full
    Stack Developer who enjoys building both frontend
    experiences and backend systems. I love exploring
    new technologies, learning how things work, and
    continuously improving my skills.
  </motion.p>
</div>
<div className="flex justify-center">
  <div className="relative">

    <div className="absolute inset-0 bg-purple-500/30 blur-[100px] rounded-full" />

    <div className="relative w-80 h-96 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">

      {/* Replace later with your image */}
      <div className="w-full h-full flex items-center justify-center text-gray-500 ">
        <Image
  src="/profile1.png"
  alt="Jaijith KS"
  fill
  className="object-cover"
/>
      </div>

    </div>

  </div>
</div>
<div className="flex gap-12 mt-10">
  <div>
    <h3 className="text-3xl font-bold">Adaptable</h3>
    <p className="text-gray-500">Builder</p>
  </div>

<div>
  <h3 className="text-3xl font-bold">Quick</h3>
  <p className="text-gray-500">Learner</p>
</div>

  <div>
    <h3 className="text-3xl font-bold">∞</h3>
    <p className="text-gray-500">Curiosity</p>
  </div>
</div>
      </div>
    </section>
  );
}