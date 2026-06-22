import { motion } from "framer-motion";

const stats = [
  {
    value: "469+",
    label: "Inbound Leads",
  },
  {
    value: "100K+",
    label: "Website Views",
  },
  {
    value: "730K+",
    label: "LinkedIn Impressions",
  },
  {
    value: "89",
    label: "Projects Delivered",
  },
];

export default function ImpactDashboard() {
  return (
    <section className="min-h-screen px-10 py-32">
      <h2 className="text-center text-6xl font-bold mb-20">
        Impact Dashboard
      </h2>

      <div className="grid md:grid-cols-4 gap-8">
        {stats.map((item) => (
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            key={item.label}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center"
          >
            <h3 className="text-5xl text-cyan-400">
              {item.value}
            </h3>

            <p className="mt-3 text-gray-300">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}