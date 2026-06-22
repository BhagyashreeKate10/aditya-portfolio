const cards = [
  "Video Production",
  "SEO Campaigns",
  "Podcast Features",
  "Brand Strategy",
  "Event Marketing",
];

export default function CreativeStudio() {
  return (
    <section className="min-h-screen py-32 px-10">
      <h2 className="text-center text-6xl font-bold mb-20">
        Creative Studio
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:scale-105 transition-all duration-500"
          >
            <h3 className="text-2xl">
              {card}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}