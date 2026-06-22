// src/components/MarketingDashboard/MarketingDashboard.jsx

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

const growthData = [
  { month: "Jan", traffic: 1200 },
  { month: "Feb", traffic: 1800 },
  { month: "Mar", traffic: 2600 },
  { month: "Apr", traffic: 3900 },
  { month: "May", traffic: 5100 },
  { month: "Jun", traffic: 7200 }
];

export default function MarketingDashboard() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Marketing Impact Dashboard
        </h2>

        <div className="
          bg-white/5
          backdrop-blur-lg
          rounded-3xl
          border border-white/10
          p-8
        ">
          <h3 className="text-2xl mb-8">
            Organic Traffic Growth
          </h3>

          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="traffic"
                  stroke="#06b6d4"
                  strokeWidth={4}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </section>
  );
}