import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-10">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 80 }}
        transition={{ duration: 1 }}
        className="max-w-4xl text-center"
      >
        <h2 className="text-6xl font-bold mb-10">
          About Me
        </h2>

        <p className="text-xl text-gray-300 leading-9">
          Marketing leader, SEO strategist and storyteller with
          expertise in organic growth, content strategy,
          branding, multimedia production and event marketing.
        </p>
      </motion.div>
    </section>
  );
}