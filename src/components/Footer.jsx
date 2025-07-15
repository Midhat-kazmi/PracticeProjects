import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <>
      <style>{`
        .footer {
          padding: 3rem 1rem;
          background-color: #ffffff;
          border-top: 1px solid #e5e7eb;
          margin-top: 3rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
        }

        .footer p {
          font-size: 0.875rem;
          color: #6b7280;
          margin: 0;
        }

        .footer-connect {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.25rem;
          color: #2563eb;
        }

        .footer-connect span {
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
        }

        .footer-connect a {
          color: #2563eb;
          transition: color 0.3s;
        }

        .footer-connect a:hover {
          color: #111827;
        }

        .footer-top-btn {
          padding: 0.5rem;
          border-radius: 9999px;
          background-color: #dbeafe;
          color: #2563eb;
          transition: background-color 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-top-btn:hover {
          background-color: #bfdbfe;
        }

        @media (max-width: 640px) {
          .footer {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>

      <footer className="footer">
        {/* Left: Copyright */}
        <p>
          &copy; {new Date().getFullYear()} Midhat's Portfolio. All rights reserved.
        </p>

        {/* Center: Socials */}
        <div className="footer-connect">
          <span>Let’s Connect:</span>
          <a
            href="mailto:ksyedamidhat@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <MdEmail />
          </a>
          <a
            href="https://github.com/Midhat-kazmi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/syeda-midhat-kazmi-a5111a339"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Right: Back to Top */}
        <a
          href="#hero"
          className="footer-top-btn"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </a>
      </footer>
    </>
  );
};
