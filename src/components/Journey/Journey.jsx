const timeline = [
  "Kimaya Creatives",
  "Insights Success",
  "Freelancer",
  "ZentrumHub",
  "Peppermint Robotics",
];

export default function Journey() {
  return (
    <section className="min-h-screen py-32 px-10">
      <h2 className="text-center text-6xl font-bold mb-24">
        Career Journey
      </h2>

      <div className="max-w-4xl mx-auto">
        {timeline.map((item, index) => (
          <div
            key={index}
            className="border-l-2 border-cyan-400 pl-10 pb-16"
          >
            <div className="w-5 h-5 rounded-full bg-cyan-400 -ml-[50px] mb-4"></div>

            <h3 className="text-3xl font-semibold">
              {item}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}