"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="projects"
      className="px-4 lg:px-[8vw]"
    >
      <div className="w-full mx-auto py-16 space-y-12">

        {/* HEADER */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.4em] text-amber-500 text-4xl underline mb-6 font-bold"
        >
          Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold mb-24"
        >
          Selected Work
        </motion.h2>

        {/* ===================================== */}
        {/* PROJECT 1 - RESTAURANT MENU UI/UX */}
        {/* ===================================== */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-40"
        >
          <a
            href="https://restaurant-menu-3-five.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden">

              <Image
                src="/restaurant-menu.png"
                alt="Restaurant Menu Experience"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-10 left-10 z-20">

                <p className="text-sm tracking-[0.4em] text-gray-300 mb-3">
                  UI / UX DESIGN
                </p>

                <h3 className="text-4xl md:text-6xl font-bold">
                  Restaurant Menu
                  <br />
                  Experience
                </h3>

              </div>
            </div>
          </a>

          <div className="mt-10 max-w-3xl">

            <p className="text-gray-400 text-lg leading-relaxed">
              Designed and developed a modern mobile-first digital restaurant
              menu focused on user experience, smooth animations, category
              navigation, and intuitive food discovery.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "Next.js",
                "Tailwind CSS",
                "Framer Motion",
                "UI/UX",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://github.com/Jaijithks/Restaurant-menu-3"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-white text-black px-7 py-4 text-base font-semibold shadow-lg shadow-white/10 transition hover:bg-slate-100"
              >
                GitHub
              </a>

              <a
                href="https://restaurant-menu-3-five.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-amber-400 text-black px-7 py-4 text-base font-semibold shadow-lg shadow-amber-400/25 transition hover:bg-amber-300"
              >
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>

        {/* ===================================== */}
        {/* PROJECT 2 - FULL STACK RESTAURANT */}
        {/* ===================================== */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-32"
        >
          <a
            href="https://restaurant-full-stack-w1bu.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden">

              <Image
                src="/restaurant.png"
                alt="Restaurant Management System"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-10 left-10 z-20">

                <p className="text-sm tracking-[0.4em] text-gray-300 mb-3">
                  MERN STACK
                </p>

                <h3 className="text-4xl md:text-6xl font-bold">
                  Restaurant
                  <br />
                  Management System
                </h3>

              </div>
            </div>
          </a>

          <div className="mt-10 max-w-3xl">

            <p className="text-gray-400 text-lg leading-relaxed">
              Built a full-stack restaurant management platform featuring
              reservations, authentication, menu management, customer
              interactions, and administrative controls.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "React",
                "Node.js",
                "Express",
                "MongoDB",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://github.com/Jaijithks/Restaurant-Full-Stack"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-white text-black px-7 py-4 text-base font-semibold shadow-lg shadow-white/10 transition hover:bg-slate-100"
              >
                GitHub
              </a>

              <a
                href="https://restaurant-full-stack-w1bu.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-amber-400 text-black px-7 py-4 text-base font-semibold shadow-lg shadow-amber-400/25 transition hover:bg-amber-300"
              >
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>

        {/* SHOW MORE BUTTON */}

        <div className="flex justify-center mt-16">
          <button
            onClick={() => setShowMore(!showMore)}
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-12 py-5 text-black text-lg font-semibold transition-all duration-300 hover:bg-amber-300"
          >
            {showMore ? "Show Less" : "Show More Projects"}
            <span
              className={`transition-transform ${
                showMore ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>
          </button>
        </div>

        {/* ===================================== */}
        {/* HIDDEN PROJECTS */}
        {/* ===================================== */}

        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >

              {/* READEASE */}

              <div className="mt-32">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                  <div>

                    <p className="text-sm tracking-[0.4em] text-gray-500 mb-4">
                      IoT PROJECT
                    </p>

                    <h3 className="text-4xl md:text-6xl font-bold">
                      ReadEase
                      <br />
                      Automatic Rain Meter
                    </h3>

                    <p className="text-gray-400 text-lg leading-relaxed mt-8">
                      Developed an automated rainfall monitoring system capable
                      of collecting and measuring rainfall data efficiently while
                      providing real-time insights.
                    </p>

                  </div>

                  <div className="relative h-[500px] rounded-3xl overflow-hidden">

                    <Image
                      src="/readEase.png"
                      alt="ReadEase"
                      fill
                      className="object-contain"
                    />

                  </div>

                </div>
<div className="flex flex-wrap gap-4 mt-8">
  <a
    href="https://github.com/Jaijithks/FINAL-PROJECT"
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center bg-white text-black px-7 py-4 text-base font-semibold shadow-lg shadow-white/10 transition hover:bg-slate-100"
  >
    GitHub
  </a>

  <a
    href="https://final-project-beta-brown.vercel.app/"
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center bg-amber-400 text-black px-7 py-4 text-base font-semibold shadow-lg shadow-amber-400/25 transition hover:bg-amber-300"
  >
    Live Demo
  </a>
</div>
              </div>

              {/* ECOMMERCE */}

              <div className="mt-32">

                <a
                  href="https://e-commerce-website-basic-murex.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative h-[500px] rounded-3xl overflow-hidden">

                    <Image
                      src="/e_commerce.png"
                      alt="E-Commerce"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                    <div className="absolute bottom-10 left-10 z-20">

                      <p className="text-sm tracking-[0.4em] text-gray-300 mb-3">
                        FULL STACK APPLICATION
                      </p>

                      <h3 className="text-4xl md:text-6xl font-bold">
                        E-Commerce
                        <br />
                        Platform
                      </h3>

                    </div>
                  </div>
                  
                </a>
              <div className="flex flex-wrap gap-4 mt-8">
  <a
    href="https://github.com/Jaijithks/E-COMMERCE-website-basic-"
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center bg-white text-black px-7 py-4 text-base font-semibold shadow-lg shadow-white/10 transition hover:bg-slate-100"
  >
    GitHub
  </a>

  <a
    href="https://e-commerce-website-basic-murex.vercel.app/"
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center bg-amber-400 text-black px-7 py-4 text-base font-semibold shadow-lg shadow-amber-400/25 transition hover:bg-amber-300"
  >
    Live Demo
  </a>
</div>
              </div>
<div className="mt-20 text-center">

  <a
    href="https://github.com/Jaijithks"
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center rounded-full bg-amber-400 text-black px-8 py-4 text-base font-semibold shadow-lg shadow-amber-400/25 transition transform hover:-translate-y-0.5 hover:bg-amber-300"
  >
    Explore My GitHub →
  </a>

</div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}