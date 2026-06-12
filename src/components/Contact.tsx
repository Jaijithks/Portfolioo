"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-4 lg:px-[8vw]"
    >
      <div className="max-w-6xl mx-auto py-24 text-center">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.4em] text-amber-500 text-4xl underline mb-6 font-bold"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-8"
        >
          Let's Build Something
          <br />
          Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed mb-16"
        >
          I'm always open to discussing new
          opportunities, innovative projects,
          and collaborations. Feel free to
          reach out if you'd like to connect.
        </motion.p>

        {/* CONTACT LINKS */}

        <div className="grid md:grid-cols-3 gap-6 mb-16">

          <a
            href="mailto:jajithks01@gmail.com"
            className="
              border border-white/10
              rounded-3xl
              p-8
              bg-white/[0.02]
              hover:bg-white/[0.05]
              transition-all
              duration-300
            "
          >
            <p className="text-gray-500 mb-2">
              Email
            </p>

            <h3 className="text-xl font-semibold">
              Contact Me
            </h3>
          </a>

          <a
            href="https://www.linkedin.com/in/jaijithks01/"
            target="_blank"
            className="
              border border-white/10
              rounded-3xl
              p-8
              bg-white/[0.02]
              hover:bg-white/[0.05]
              transition-all
              duration-300
            "
          >
            <p className="text-gray-500 mb-2">
              LinkedIn
            </p>

            <h3 className="text-xl font-semibold">
              Connect
            </h3>
          </a>

          <a
            href="https://github.com/Jaijithks"
            target="_blank"
            className="
              border border-white/10
              rounded-3xl
              p-8
              bg-white/[0.02]
              hover:bg-white/[0.05]
              transition-all
              duration-300
            "
          >
            <p className="text-gray-500 mb-2">
              GitHub
            </p>

            <h3 className="text-xl font-semibold">
              View Projects
            </h3>
          </a>

        </div>

        {/* RESUME BUTTON */}

        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold shadow-lg shadow-cyan-400/30 transition hover:bg-cyan-300"
        >
          Download Resume ↓
        </a>

      </div>
    </section>
  );
}