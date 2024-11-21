import React from "react";
import { Link } from "react-router-dom";
import Particle from "../../components/Particle/Particle";

function Blogs() {
  const blogs = [
    {
      title: "PostMessage XSS",
      description: "Understanding window.postMessage() and Its XSS Risks.",
      slug: "postmessage-xss", 
    },
    {
      title: "Advanced Bug Bounty Techniques",
      description: "Explore advanced techniques for finding and exploiting security vulnerabilities.",
      slug: "advanced-bug-bounty",
    },
    {
      title: "Git-Lost CTF Writeup",
      description: "Decoding hidden secrets in a Git repository: unraveling dangling commits, encrypted files, and the final flag.",
      slug: "git-lost-ctf-writeup",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Particle />
      {/* Header */}
      <div className="flex flex-col justify-center items-center font-space my-5 py-5">
        <h2 className="text-4xl font-medium text-gray-200 uppercase mb-8 tracking-widest">Blogs</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 font-light">
          Explore Our Latest Blogs on Cybersecurity
        </p>
      </div>

      {/* Blog Cards */}
      <div className="container mx-auto px-4 flex flex-wrap gap-8 justify-center align-center">
        {blogs.map(({ title, description, slug }, index) => (
          <Link
            to={`/blogs/${slug}`}
            key={index}
            className="max-w-xs bg-[#1a1a1a] rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <div className="p-4">
              <h3 className="text-md font-bold text-white mb-1">{title}</h3>
              <p className="text-gray-400 text-sm mb-3">{description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer or Spacer */}
      <div className="mt-auto py-5"></div>
    </div>
  );
}

export default Blogs;
