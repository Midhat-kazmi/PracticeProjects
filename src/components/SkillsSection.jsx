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
    <>
      <style>{`
        .skills-section {
          width: 100%;
          background-color: #f9fafb;
          padding: 2.5rem 1rem;
          box-sizing: border-box;
        }

        .skills-container {
          max-width: 1120px;
          margin: 0 auto;
        }

        .skills-heading {
          text-align: center;
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
        }

        .skills-filters {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .skills-filters button {
          padding: 0.5rem 0.75rem;
          font-size: 0.75rem;
          font-weight: 500;
          border-radius: 9999px;
          border: 1px solid #d1d5db;
          background-color: white;
          color: #2563eb;
          cursor: pointer;
          transition: background 0.3s, color 0.3s, border 0.3s;
        }

        .skills-filters button.active {
          background-color: #2563eb;
          color: white;
          border-color: #2563eb;
        }

        .skills-filters button:hover {
          background-color: #e0f2fe;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        @media (min-width: 640px) {
          .skills-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 768px) {
          .skills-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .skill-card {
          background-color: white;
          border-radius: 0.5rem;
          text-align: center;
          font-size: 0.875rem;
          font-weight: 500;
          padding: 0.75rem;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
          transition: box-shadow 0.3s;
        }

        .skill-card:hover {
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
      `}</style>

      <section id="skills" className="skills-section">
        <div className="skills-container">
          <h2 className="skills-heading">Skills & Technologies</h2>

          <div className="skills-filters">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "active" : ""}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="skills-grid">
            {filteredSkills.map((skill) => (
              <div key={skill.name} className="skill-card">
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

