import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <>
      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 1.5rem;
          background: linear-gradient(to bottom right, #eff6ff, #f5f3ff, #ffe4e6);
          overflow-x: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          max-width: 1200px;
          width: 100%;
          align-items: center;
          z-index: 10;
          padding: 3rem 1rem;
        }

        @media (min-width: 768px) {
          .hero-container {
            grid-template-columns: 1fr 1fr;
            padding: 6rem 2rem;
          }
        }

        .hero-text h1 {
          font-size: 2.25rem;
          font-weight: 800;
          color: #111827;
        }

        @media (min-width: 768px) {
          .hero-text h1 {
            font-size: 3rem;
          }
        }

        .hero-text h2 {
          font-size: 1.25rem;
          color: #374151;
          margin-top: 0.5rem;
          font-weight: 500;
        }

        .hero-text p {
          margin-top: 1rem;
          font-size: 1rem;
          color: #4b5563;
          line-height: 1.75rem;
        }

        .hero-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        @media (min-width: 768px) {
          .hero-buttons {
            flex-direction: row;
          }
        }

        .hero-buttons button,
        .hero-buttons a {
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 1rem;
          border: 2px solid transparent;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .resume-btn {
          background: linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899);
          color: white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .resume-btn:hover {
          transform: scale(1.05);
        }

        .projects-link {
          border: 2px solid #3b82f6;
          color: #2563eb;
          background-color: white;
        }

        .projects-link:hover {
          background-color: #eff6ff;
        }

        .hero-image {
          display: flex;
          justify-content: center;
        }

        .hero-image img {
          width: 300px;
          max-width: 100%;
          border-radius: 1rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          object-fit: cover;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: bounce 2s infinite;
        }

        .scroll-indicator span {
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 0.5rem;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }
      `}</style>

      <section className="hero">
        <div className="hero-container">
          {/* Left: Text */}
          <div className="hero-text">
            <h1>Hi, I'm <br />Midhat</h1>
            <h2>Software Engineer</h2>
            <p>
              I specialize in building modern, responsive web applications with clean UI and optimal user experience.
              My passion lies in turning complex problems into simple, elegant solutions.
            </p>
            <div className="hero-buttons">
              <button className="resume-btn">Download Resume</button>
              <a href="#projects" className="projects-link">View Projects</a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="hero-image">
            <img
              src="https://res.cloudinary.com/dgve6ewpr/image/upload/v1752428200/dc79e6e585459508698bdffc51c7b8cc_mcfsm6.jpg"
              alt="Midhat Hero"
            />
          </div>
        </div>

        {/* Scroll Down */}
        <div className="scroll-indicator">
          <span>Scroll</span>
          <ArrowDown color="#3b82f6" />
        </div>
      </section>
    </>
  );
};
