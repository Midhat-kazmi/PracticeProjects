import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectDetails = () => {
  return (
    <section className="px-4 py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Shopora Multivendor Ecommerce Website
          </h1>
          <p className="mt-4 text-pink-600 font-semibold text-sm">
            Full-Stack Multi-Vendor E-commerce App | 2025
          </p>
        </div>

        {/* Description */}
        <div className="text-gray-700 text-base md:text-lg leading-relaxed">
          <p>
            <strong>Shopora</strong> is a full-stack multi-vendor e-commerce platform built with the MERN stack. It features:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Multiple seller and buyer accounts</li>
            <li>Real-time messaging between users</li>
            <li>Event-based product sales with countdown timers</li>
            <li>Secure authentication and authorization</li>
            <li>Product, order, and cart management with Redux</li>
            <li>Stripe-integrated payment system</li>
          </ul>
        </div>

        {/* Tags / Tech Stack */}
        <div className="flex flex-wrap gap-3">
          {["React", "Redux", "Node.js", "Express", "MongoDB", "Socket.IO", "Stripe"].map((tech, idx) => (
            <span
              key={idx}
              className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-sm px-3 py-1 rounded-full border text-blue-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <a
            href="https://multivendor-five.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Live Demo <ExternalLink size={18} />
          </a>
          <a
            href="https://github.com/Midhat-kazmi/multivendor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-400 text-gray-700 hover:border-pink-500 hover:text-pink-600 transition"
          >
            GitHub Repo <Github size={18} />
          </a>
        </div>

        {/* Back Button */}
        <div className="text-center pt-8">
          <Link
            to="/#projects"
            className="text-sm text-blue-500 underline hover:text-blue-700 transition"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
