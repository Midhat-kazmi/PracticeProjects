import React from "react";

export const Blog = () => {
  return (
    <section className="min-h-screen py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Blog <span className="text-blue-600">Posts</span>
        </h1>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          Coming soon! Here you'll find articles, insights, and tutorials on web
          development, React, and more.
        </p>

        {/* Placeholder for future blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">Blog Post Title</h2>
            <p className="text-gray-600 mb-4">
              Short summary of the blog post to be updated later.
            </p>
            <button className="text-blue-600 hover:underline">
              Read more →
            </button>
          </div>
          {/* Add more blog cards here later */}
        </div>
      </div>
    </section>
  );
};
