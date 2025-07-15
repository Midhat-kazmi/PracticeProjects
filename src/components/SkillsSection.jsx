import { useState } from "react";

const skills = [
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Git/GitHub", category: "tools" },
  { name: "Firebase", category: "tools" },
  { name: "Stripe", category: "tools" },
  { name: "Cloudinary", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="w-full bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl font-bold mb-6">
          Skills & Technologies
        </h2>

        <div className="flex justify-center flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                activeCategory === category
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-blue-600 border-gray-300 hover:bg-blue-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white rounded-lg text-center text-sm font-medium p-3 shadow hover:shadow-md transition"
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
