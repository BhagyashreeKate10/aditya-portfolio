import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import ParticleBackground from "../ParticleBackground/ParticleBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full blur-[150px] opacity-20"></div>

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-[180px] opacity-20"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          ADITYA
        </h1>

        <h1 className="text-7xl md:text-8xl font-black text-white">
          GAIKAR
        </h1>

        <p className="text-cyan-400 mt-6 text-2xl">
          Marketing Leader • SEO Strategist • Storyteller
        </p>

        <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-300">
          Turning ideas into traffic, brands into conversations,
          and content into measurable growth.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <button className="px-8 py-4 rounded-full bg-cyan-500 hover:scale-110 transition">
            Explore Journey
          </button>

          <button className="px-8 py-4 rounded-full border border-white hover:bg-white hover:text-black transition">
            View Work
          </button>
        </div>
      </motion.div>

      <div className="absolute bottom-10 animate-bounce">
        <FaArrowDown size={25} />
      </div>

    </section>
    
  );
  <div className="absolute right-10 top-20 w-[500px] h-[500px]">
   <Globe />
</div>
}