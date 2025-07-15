import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 50;
          transition: all 0.3s ease;
        }
        .navbar.default {
          background-color: transparent;
          padding: 1rem 0;
        }
        .navbar.scrolled {
          background-color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 0.75rem 0;
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          background: linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .nav-links {
          display: none;
        }
        @media (min-width: 768px) {
          .nav-links {
            display: flex;
            gap: 2rem;
          }
        }
        .nav-links a {
          color: #374151;
          text-decoration: none;
          font-weight: 500;
        }
        .nav-links a:hover {
          color: #2563eb;
        }
        .social-icons {
          display: none;
        }
        @media (min-width: 768px) {
          .social-icons {
            display: flex;
            gap: 1rem;
            color: #2563eb;
            font-size: 1.25rem;
          }
        }
        .menu-toggle {
          background-color: rgba(255, 255, 255, 0.8);
          padding: 0.5rem;
          border-radius: 9999px;
          border: none;
          font-size: 1.5rem;
          color: #2563eb;
          box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
        }
        .mobile-menu {
          position: fixed;
          inset: 0;
          background-color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 40;
        }
        .mobile-menu a {
          font-size: 1.5rem;
          font-weight: 600;
          color: #374151;
          text-decoration: none;
          margin-bottom: 1rem;
        }
        .mobile-menu a:hover {
          color: #3b82f6;
        }
        .mobile-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          padding: 0.5rem;
          border-radius: 9999px;
          background-color: #e5e7eb;
          border: none;
          font-size: 1.5rem;
        }
      `}</style>

      <nav className={`navbar ${isScrolled ? "scrolled" : "default"}`}>
        <div className="nav-container">
          <Link to="/" className="logo">midhat</Link>

          <div className="nav-links">
            {navItems.map(({ name, path }, key) => (
              <Link key={key} to={path}>
                {name}
              </Link>
            ))}
          </div>

          <div className="social-icons">
            <a href="https://github.com/Midhat-kazmi" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/syeda-midhat-kazmi-a5111a339" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-toggle"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="mobile-close"
            >
              <X size={28} />
            </button>
            {navItems.map(({ name, path }, key) => (
              <Link
                key={key}
                to={path}
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};
export default Navbar;