import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

export const ContactSection = () => {
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
    <>
      <style>{`
        .contact-section {
          padding: 6rem 1rem;
          background-color: #f3f4f6;
        }

        .contact-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-heading {
          text-align: center;
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .contact-heading span {
          color: #2563eb;
        }

        .contact-desc {
          text-align: center;
          color: #4b5563;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .contact-info h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .info-icon {
          background: #dbeafe;
          padding: 0.75rem;
          border-radius: 9999px;
        }

        .info-text h4 {
          font-weight: 500;
          margin-bottom: 0.25rem;
        }

        .info-text a,
        .info-text span {
          color: #4b5563;
          text-decoration: none;
          transition: color 0.3s;
        }

        .info-text a:hover {
          color: #2563eb;
        }

        .form-box {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.05);
        }

        .form-box h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .form-group {
          margin-bottom: 1.25rem;
        }

        .form-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          border-radius: 0.5rem;
          border: 1px solid #d1d5db;
          background-color: white;
          outline: none;
          transition: border-color 0.3s;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px #bfdbfe;
        }

        .form-textarea {
          resize: none;
          height: 120px;
        }

        .form-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.75rem 1rem;
          background-color: #2563eb;
          color: white;
          font-weight: 500;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
          transition: background 0.3s;
        }

        .form-button:hover {
          background-color: #1d4ed8;
        }

        .form-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="contact-heading">
            Get In <span>Touch</span>
          </h2>

          <p className="contact-desc">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>

          <div className="contact-grid">
            {/* Left Side - Contact Info */}
            <div className="contact-info">
              <h3>Contact Information</h3>

              <div className="info-item">
                <div className="info-icon">
                  <Mail className="icon" />
                </div>
                <div className="info-text">
                  <h4>Email</h4>
                  <a href="mailto:ksyedamidhat@gmail.com">
                    ksyedamidhat@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Phone className="icon" />
                </div>
                <div className="info-text">
                  <h4>Phone</h4>
                  <a href="tel:+923211722775">+92 321 1722775</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <MapPin className="icon" />
                </div>
                <div className="info-text">
                  <h4>Location</h4>
                  <span>Lahore, Pakistan</span>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <form onSubmit={handleSubmit} className="form-box">
              <h3>Send a Message</h3>

              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Syeda Midhat..."
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="example@gmail.com"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Hello, I'd like to talk about..."
                  className="form-textarea"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="form-button"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

