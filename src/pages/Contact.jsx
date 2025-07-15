
import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert("Message sent! Thank you for your message. I'll get back to you soon.");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-blue-600">Touch</span>
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:ksyedamidhat@gmail.com"
                    className="text-gray-600 hover:text-blue-600 transition"
                  >
                    ksyedamidhat@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+923211722775"
                    className="text-gray-600 hover:text-blue-600 transition"
                  >
                    +92 321 1722775
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-gray-600">Lahore, Pakistan</span>
                </div>
              </div>
            </div>

            {/* Connect With Me - aligned left */}
          
          </div>

          {/* Right Side: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Syeda Midhat..."
                  className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
