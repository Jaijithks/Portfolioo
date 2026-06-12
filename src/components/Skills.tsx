"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    description:
      "Building responsive and interactive user interfaces with modern web technologies.",
    skills: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description:
      "Creating scalable APIs, managing databases, and developing robust server-side applications.",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    title: "Tools",
    description:
      "Using industry-standard tools for development, collaboration, and deployment.",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    title: "Currently Learning",
    description:
      "Continuously exploring new technologies and expanding my development skills.",
    skills: ["AI Workflows", "LLMs", "Automation"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-4 lg:px-[8vw]"
    >
      <div className="max-w-7xl mx-auto py-16">

      

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.4em] text-amber-500 text-4xl underline mb-6 font-bold"
        >
          Tech Stack
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-20"
        >
          Tools & Technologies
        </motion.h2>

        

        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                border border-white/10
                rounded-3xl
                p-8
                min-h-[240px]
                bg-white/[0.02]
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-white/20
                hover:bg-white/[0.04]
              "
            >
              <h3 className="text-3xl font-bold mb-4">
                {category.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-8">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4
                      py-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      text-sm
                      transition-all
                      duration-300
                      hover:bg-white/10
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}