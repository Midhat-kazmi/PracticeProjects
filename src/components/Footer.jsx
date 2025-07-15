import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-gray-200 mt-12 pt-8 flex flex-wrap justify-between items-center gap-6">
      {/* Left: Copyright */}
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Midhat's Portfolio. All rights reserved.
      </p>

      {/* Center: Let's Connect */}
      <div className="flex items-center gap-4 text-blue-600 text-xl">
        <span className="text-sm font-medium text-gray-700">Let’s Connect:</span>
        <a
          href="mailto:ksyedamidhat@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
        >
          <MdEmail />
        </a>
        <a
          href="https://github.com/Midhat-kazmi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/syeda-midhat-kazmi-a5111a339"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Right: Back to Top */}
      <a
        href="#hero"
        className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
