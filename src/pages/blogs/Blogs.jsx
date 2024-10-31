import React from "react";
import Particle from "../../components/Particle/Particle";
import Typewriters from "typewriter-effect";

function Blogs() {
  const blogs = [
    {
      title: "PostMessage XSS ",
      description: "Understanding window.postMessage() and Its XSS Risks.",
      link: "https://medium.com/@spideyyy/understanding-window-postmessage-and-its-xss-risks-5a96bcd90428",
      image: "https://th.bing.com/th/id/OSK.HEROOWUwOulSQTjyqab7AyBtrP_FDCn6kuUvHdAeaz4-kUw?rs=1&pid=ImgDetMain",
    },
    {
      title: "Advanced Bug Bounty Techniques",
      description:
        "Explore advanced techniques for finding and exploiting security vulnerabilities.",
      link: "https://medium.com/@yourprofile/advanced-bug-bounty-techniques",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Understanding Cyber Threats",
      description:
        "A deep dive into various cyber threats and how to protect against them.",
      link: "https://medium.com/@yourprofile/understanding-cyber-threats",
      image: "https://via.placeholder.com/150",
    },
    // Add more blog data here as needed
  ];

  return (
    <>
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
        <div className="ontainer mx-auto px-4 flex flex-wrap gap-8 justify-center align-center">
          {blogs.map(({ title, description, link, image }, index) => (
            <div
              key={index}
              className="max-w-xs bg-[#1a1a1a] rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <img
                className="w-full h-32 object-cover"
                src={image}
                alt={title}
              />
              <div className="p-4">
                <h3 className="text-md font-bold text-white mb-1">{title}</h3>
                <p className="text-gray-400 text-sm mb-3">{description}</p>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline font-semibold inline-flex items-center"
                >
                  Read more on Medium
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer or Spacer */}
        <div className="mt-auto py-5"></div>
      </div>
    </>
  );
}

export default Blogs;
