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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur shadow py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link
  to="/"
  className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
>
  midhat  
</Link>


        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map(({ name, path }, key) => (
            <Link
              key={key}
              to={path}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Socials + Mobile Menu */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-4 text-blue-600 text-xl">
            <a href="https://github.com/Midhat-kazmi" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/syeda-midhat-kazmi-a5111a339" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 bg-white/80 shadow rounded-full text-blue-600"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white/90 backdrop-blur z-40 flex flex-col items-center justify-center">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-gray-200"
          >
            <X size={28} />
          </button>
          <div className="flex flex-col gap-8 text-2xl font-semibold">
            {navItems.map(({ name, path }, key) => (
              <Link
                key={key}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-500"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
