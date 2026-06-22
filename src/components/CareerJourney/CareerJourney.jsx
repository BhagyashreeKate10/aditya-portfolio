// src/components/CareerJourney/CareerJourney.jsx

import { motion } from "framer-motion";
import { timelineData } from "../../data/timelineData";

export default function CareerJourney() {
  return (
    <section className="py-32 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-20">
          Career Journey
        </h2>

        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-1 bg-cyan-500"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative pl-16 mb-16"
            >

              {/* Timeline Dot */}
              <div className="absolute left-0 top-4 w-8 h-8 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500"></div>

              {/* Card */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                  y: -5
                }}
                className="
                  bg-white/5
                  backdrop-blur-lg
                  border border-white/10
                  rounded-3xl
                  p-8
                "
              >
                <p className="text-cyan-400 text-sm">
                  {item.year}
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  {item.company}
                </h3>

                <p className="text-gray-400 mb-6">
                  {item.role}
                </p>

                <div className="grid gap-3">
                  {item.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className="
                        bg-cyan-500/10
                        border border-cyan-500/20
                        rounded-xl
                        px-4
                        py-3
                      "
                    >
                      {achievement}
                    </div>
                  ))}
                </div>
              </motion.div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}