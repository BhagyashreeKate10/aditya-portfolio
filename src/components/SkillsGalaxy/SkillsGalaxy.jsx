const skills = [
  "SEO",
  "Branding",
  "Leadership",
  "Storytelling",
  "Analytics",
  "Content",
  "Growth",
  "Video Production",
];

export default function SkillsGalaxy() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-6xl font-bold mb-20">
        Skills Galaxy
      </h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-8 py-4 rounded-full bg-cyan-500/20 border border-cyan-500"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}