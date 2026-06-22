import { motion } from "framer-motion";

const stats = [
  { value: "469+", label: "Inbound Leads" },
  { value: "100K+", label: "Website Views" },
  { value: "730K+", label: "LinkedIn Impressions" },
  { value: "89", label: "Projects Delivered" }
];

export default function ImpactDashboard() {
  return (
    <section className="py-32">
      <h2 className="text-center text-5xl mb-20">
        Marketing Impact
      </h2>

      <div className="grid md:grid-cols-4 gap-8 px-12">
        {stats.map((item) => (
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -10
            }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg"
            key={item.label}
          >
            <h3 className="text-5xl text-cyan-400">
              {item.value}
            </h3>

            <p className="mt-4">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}