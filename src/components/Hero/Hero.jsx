import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-black" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 px-6"
      >
        <h1 className="text-7xl font-bold">
          Aditya Gaikar
        </h1>

        <TypeAnimation
          sequence={[
            "SEO Strategist",
            2000,
            "Growth Marketer",
            2000,
            "Storyteller",
            2000,
            "Brand Builder",
            2000,
          ]}
          repeat={Infinity}
          className="text-cyan-400 text-3xl mt-6"
        />

        <p className="mt-8 text-xl max-w-3xl mx-auto">
          Turning ideas into traffic,
          brands into conversations,
          and content into growth.
        </p>
      </motion.div>
    </section>
  );
}