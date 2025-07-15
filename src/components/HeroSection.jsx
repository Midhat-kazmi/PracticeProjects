import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10 py-12 px-6">
        {/* Left: Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
            Hi, I'm 
              Midhat
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-700">
           Software Engineer
          </h2>

          <p className="text-gray-600 text-base md:text-lg">
            I specialize in building modern, responsive web applications with clean UI and optimal user experience. 
            My passion lies in turning complex problems into simple, elegant solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 pt-4 justify-center md:justify-start">
            <button
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-md hover:scale-105 transition-transform"
            >
              Download Resume
            </button>
            <a
              href="#projects"
              className="px-6 py-3 rounded-full border-2 border-blue-500 text-blue-600 font-semibold hover:bg-blue-50 transition"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dgve6ewpr/image/upload/v1752428200/dc79e6e585459508698bdffc51c7b8cc_mcfsm6.jpg"
            alt="Midhat Hero"
            className="w-72 md:w-96 rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-500 mb-2">Scroll</span>
        <ArrowDown className="h-6 w-6 text-blue-500" />
      </div>
    </section>
  );
};
