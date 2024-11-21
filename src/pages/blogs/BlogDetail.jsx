import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Particle from "../../components/Particle/Particle";

function BlogDetail() {
  const { slug } = useParams(); // Get the slug from the URL
  const navigate = useNavigate(); // For the back button
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    // Dynamically fetch the Markdown file within `/src/pages/blogs/md/`
    const filePath = `/src/pages/blogs/md/${slug}.md`;

    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Markdown file not found");
        }
        return response.text();
      })
      .then((text) => {
        // Transform Obsidian-style image links to standard Markdown image links with URI encoding
        const transformedText = text.replace(/!\[\[(.*?)\]\]/g, (match, p1) => {
          const imageName = p1.trim(); // Extract image name
          const encodedImageName = encodeURIComponent(imageName); // Encode the image name
          const resolvedPath = `/src/pages/blogs/images/${encodedImageName}`; // Construct the full path
          return `![${imageName}](${resolvedPath})`; // Return standard Markdown image syntax
        });
        setContent(transformedText);
        setError(false);
      })
      .catch(() => {
        setError(true);
        setContent(""); // Clear content on error
      });
  }, [slug]);

  return (
    <div className="min-h-screen relative text-white">
      {/* Particle.js Background */}
      <Particle />

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)} // Navigate back
        className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded fixed bottom-10 left-10 z-10"
      >
        ← Back to Blogs
      </button>

      {/* Blog Content */}
      <div className="container mx-auto px-4 py-16">
        {!error ? (
          <div className="prose prose-invert prose-lg mx-auto max-w-4xl lg:max-w-5xl px-6">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Not Found</h1>
            <p className="text-gray-400 mb-8">
              We couldn't find the blog you're looking for. Please check the URL
              or return to the blog list.
            </p>
            <button
              onClick={() => navigate(-1)} // Navigate back
              className="bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white rounded-full py-2 px-4 hover:scale-105 transition duration-300"
            >
              Back to Blogs
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogDetail;
