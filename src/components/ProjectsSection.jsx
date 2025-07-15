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
    <section
      id="projects"
      className="py-24 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col items-center">
              {/* Card */}
              <div className="group w-full bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-blue-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Buttons Below the Card */}
              <div className="mt-4 flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-full bg-green-100 text-green-700 font-medium hover:bg-green-200 transition"
                >
                  <ExternalLink size={18} />
                  Live URL
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition"
                >
                  <Github size={18} />
                  GitHub Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
