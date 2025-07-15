import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectDetails = () => {
  const project = {
    title: "Shopora MultiVendor App",
    year: "2025",
    image:
      "https://res.cloudinary.com/dgve6ewpr/image/upload/v1752440757/Untitled_c8xmgv.jpg",
    liveLink: "https://multivendor-five.vercel.app/",
    githubUrl: "https://github.com/Midhat-kazmi/multivendor",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Vercel",
      "Socket.IO",
      "Stripe",
      "Cloudinary",
      "Nodemailer",
    ],
    features: [
      "Multiple sellers and buyers with authentication",
      "Real-time messaging via Socket.IO",
      "Event-based product sales with countdown timers",
      "Seller dashboard for managing products and orders",
      "Buyer dashboard for tracking orders and payments",
      "Secure payments with Stripe and PayPal",
      "Cloudinary for optimized image uploads",
      "Email notifications with Nodemailer",
    ],
  };

  return (
    <>
      <style>{`
        .project-section {
          padding: 5rem 1rem;
          background: linear-gradient(to bottom right, #eff6ff, #f5f3ff, #ffe4e6);
          min-height: 100vh;
          box-sizing: border-box;
        }

        .project-container {
          max-width: 960px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding: 0 1.5rem;
        }

        .project-title {
          text-align: center;
        }

        .project-title h1 {
          font-size: 2.25rem;
          font-weight: bold;
          color: #111827;
          margin-bottom: 0.5rem;
        }

        .project-title p {
          color: #db2777;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .project-image img {
          width: 100%;
          border-radius: 1rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }

        .section-heading {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          color: #1e293b;
        }

        .project-description,
        .project-stack,
        .project-features {
          font-size: 1rem;
          color: #374151;
          line-height: 1.7;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .project-tags span {
          background: #e0e7ff;
          color: #1d4ed8;
          font-size: 0.875rem;
          padding: 0.4rem 0.8rem;
          border-radius: 9999px;
        }

        .project-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1rem;
        }

        @media (min-width: 640px) {
          .project-buttons {
            flex-direction: row;
          }
        }

        .project-buttons a {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          font-weight: 500;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-live {
          background-color: #2563eb;
          color: white;
        }

        .btn-live:hover {
          background-color: #1e40af;
        }

        .btn-github {
          border: 1px solid #9ca3af;
          color: #374151;
        }

        .btn-github:hover {
          border-color: #ec4899;
          color: #db2777;
        }

        .back-link {
          text-align: center;
          margin-top: 2rem;
        }

        .back-link a {
          font-size: 0.875rem;
          color: #2563eb;
          text-decoration: underline;
          transition: color 0.3s ease;
        }

        .back-link a:hover {
          color: #1d4ed8;
        }
      `}</style>

      <section className="project-section">
        <div className="project-container">
          {/* Header */}
          <div className="project-title">
            <h1>{project.title}</h1>
            <p>Full-Stack Multi-Vendor E-commerce | {project.year}</p>
          </div>

          {/* Image */}
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="section-heading">Tech Stack</h3>
            <div className="project-tags">
              {project.stack.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="section-heading">Key Features</h3>
            <ul className="project-features">
              {project.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="project-buttons">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-live"
            >
              Live Demo <ExternalLink size={18} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github"
            >
              GitHub Repo <Github size={18} />
            </a>
          </div>

          {/* Back to Projects */}
          <div className="back-link">
            <Link to="/#projects">← Back to Projects</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
