import { ExternalLink, Github } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Shopora MultiVendor App",
      description:
        "A complete multivendor eCommerce platform using the MERN stack with authentication, product management, and seller dashboards.",
      image:
        "https://res.cloudinary.com/dgve6ewpr/image/upload/v1752440757/Untitled_c8xmgv.jpg",
      tags: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe"],
      liveLink: "https://multivendor-five.vercel.app/",
      githubUrl: "https://github.com/Midhat-kazmi/multivendor",
    },
  ];

  return (
    <>
      <style>{`
        .projects-section {
          padding: 6rem 1rem;
          background: linear-gradient(to bottom right, #eff6ff, #f5f3ff, #fce7f3);
        }

        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .projects-title {
          text-align: center;
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 4rem;
          background: linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }

        @media (min-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (min-width: 1024px) {
          .projects-grid {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }

        .project-card {
          background: white;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
        }

        .project-img-wrapper {
          position: relative;
          height: 12rem;
          overflow: hidden;
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .project-card:hover .project-img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
          opacity: 0.7;
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tag {
          font-size: 0.75rem;
          font-weight: 500;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          background: linear-gradient(to right, #dbeafe, #ede9fe, #fce7f3);
          color: #1e3a8a;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }

        .project-desc {
          font-size: 0.875rem;
          color: #4b5563;
          line-height: 1.6;
        }

        .project-buttons {
          margin-top: 1rem;
          display: flex;
          gap: 1rem;
        }

        .project-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          border-radius: 9999px;
          text-decoration: none;
          transition: background 0.3s;
        }

        .btn-live {
          background-color: #d1fae5;
          color: #065f46;
        }

        .btn-live:hover {
          background-color: #a7f3d0;
        }

        .btn-github {
          background-color: #f3f4f6;
          color: #374151;
        }

        .btn-github:hover {
          background-color: #e5e7eb;
        }
      `}</style>

      <section id="projects" className="projects-section">
        <div className="projects-container">
          <h2 className="projects-title">Featured Projects</h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-img-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                  />
                  <div className="project-overlay"></div>
                </div>

                <div className="project-content">
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-buttons">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn btn-live"
                    >
                      <ExternalLink size={18} />
                      Live URL
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn btn-github"
                    >
                      <Github size={18} />
                      GitHub Repo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
