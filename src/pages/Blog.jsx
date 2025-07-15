import React from "react";

export const Blog = () => {
  return (
    <>
      <style>{`
        .blog-section {
          min-height: 100vh;
          padding: 5rem 1rem;
          text-align: center;
        }

        .blog-container {
          max-width: 768px;
          margin: 0 auto;
        }

        .blog-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #111827;
        }

        @media (min-width: 768px) {
          .blog-title {
            font-size: 3rem;
          }
        }

        .blog-highlight {
          color: #2563eb; /* blue-600 */
        }

        .blog-text {
          color: #4b5563; /* gray-600 */
          font-size: 1rem;
          line-height: 1.75rem;
          max-width: 600px;
          margin: 0 auto;
        }
      `}</style>

      <section className="blog-section">
        <div className="blog-container">
          <h1 className="blog-title">
            Blog <span className="blog-highlight">Posts</span>
          </h1>
          <p className="blog-text">
            Coming soon! Here you'll find articles, insights, and tutorials on web
            development, React, and more.
          </p>
        </div>
      </section>
    </>
  );
};
