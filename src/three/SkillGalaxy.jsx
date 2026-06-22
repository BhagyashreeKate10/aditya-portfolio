import { motion } from "framer-motion";

const skills = [
  "SEO",
  "Branding",
  "Analytics",
  "Leadership",
  "Storytelling",
  "Content",
  "Events",
  "Video Production"
];

export default function SkillsGalaxy() {
  return (
    <section className="py-32">
      <h2 className="text-center text-5xl mb-20">
        Skills Galaxy
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map(skill => (
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: 5
            }}
            key={skill}
            className="px-8 py-4 rounded-full bg-cyan-500/20 border border-cyan-400"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}