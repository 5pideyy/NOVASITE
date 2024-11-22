import React, { useState } from "react";
import Particles from "../../components/Particle/Particle";
import { motion, AnimatePresence } from "framer-motion";
import { members_2024 } from "../members/member";
import { mentors_2024 } from "../mentors/mentors"; // Import mentors data
import blank from "../../images/members/blank.png";
import vishal from "../../images/members/vishal.png";
import kishoreram from "../../images/members/kishoreram.jpeg";
import abiya from "../../images/members/abiya.jpeg";
import subhash from "../../images/members/subhash.png";
import shriram from "../../images/members/shriram.png";
import pradyun from "../../images/members/pradyun.png";
import hariharan from "../../images/members/hariharan.jpeg";
import logo from "../../images/icons/novaflag.png";
import ctftime from "../../images/icons/ctftime.png";
import LinkedIn from "../../images/icons/linkedin.png";
import EmailIcon from "../../images/icons/email.png";
import HackTheBoxIcon from "../../images/icons/hackthebox.png";

// Sponsor Images and URLs
import KIlogo from "../../images/icons/KI.png";
import IqubeLogo from "../../images/icons/iqube.jpg";

function Root() {
  const [selectedTab, setSelectedTab] = useState("members");

  // Images for members
  const img2024 = [vishal, abiya, subhash, shriram, pradyun, hariharan, blank];

  // Images for mentors (use blank as default for mentors if no specific image is provided)
  const imgMentors = [blank, blank]; // Add actual mentor images if available

  // Members data (cards)
  const members2024 = members_2024.map(
    ({ id, name, position, linkedin, email, hackthebox }) => (
      <div
        key={id}
        className="flex flex-col items-center bg-gray-900 bg-opacity-60 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
      >
        <img
          src={img2024[id]}
          alt={name}
          className="w-28 h-28 mb-4 rounded-full border border-gray-600 object-cover"
        />
        <h2 className="text-xl font-semibold text-gray-100 mb-1">{name}</h2>
        <p className="text-sm font-light text-gray-400 mb-4 italic">{position}</p>
        <div className="flex justify-center items-center space-x-4 mt-4">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`} rel="noopener noreferrer">
              <img src={EmailIcon} alt="Email" className="w-8 h-8" />
            </a>
          )}
          {hackthebox && (
            <a href={hackthebox} target="_blank" rel="noopener noreferrer">
              <img src={HackTheBoxIcon} alt="Hack The Box" className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    )
  );

  // Mentors data (cards)
  const mentors2024 = mentors_2024.map(
    ({ id, name, position, linkedin, email, hackthebox }) => (
      <div
        key={id}
        className="flex flex-col items-center bg-gray-900 bg-opacity-60 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
      >
        <img
          src={imgMentors[id]}
          alt={name}
          className="w-28 h-28 mb-4 rounded-full border border-gray-600 object-cover"
        />
        <h2 className="text-xl font-semibold text-gray-100 mb-1">{name}</h2>
        <p className="text-sm font-light text-gray-400 mb-4 italic text-center whitespace-pre-line">{position}</p>
        <div className="flex justify-center items-center space-x-4 mt-4">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`} rel="noopener noreferrer">
              <img src={EmailIcon} alt="Email" className="w-8 h-8" />
            </a>
          )}
          {hackthebox && (
            <a href={hackthebox} target="_blank" rel="noopener noreferrer">
              <img src={HackTheBoxIcon} alt="Hack The Box" className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    )
  );

  return (
    <div className="relative min-h-screen bg-gray-900 bg-opacity-0 text-white font-sans p-10">
      {/* Particles Background */}
      <Particles />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto pt-24 pb-16 px-4 sm:px-14 backdrop-filter">
        
        {/* Header with Flex Layout for Content and Logo */}
        <div className="flex flex-col md:flex-row justify-between mb-16">
          {/* Text Content */}
          <div className="md:w-2/3 pr-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl font-bold uppercase tracking-widest text-gray-100 mb-4"
            >
              TEAM NOVA
            </motion.h1>
            <p className="text-2xl italic text-gray-400 mb-6 font-light">
              [ safeguarding the digital future ]
            </p>
            <div className="space-y-8">
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                We are Team Nova, a top cybersecurity team recognized among the Top 20 globally on Hack The Box. Our team collaborates with law enforcement and industry experts to address real-world cyber threats. With national accolades from competitions like Pentathon-24 and police hackathons, we train future cybersecurity professionals dedicated to protecting the digital landscape. Supported by a network of alumni in Fortune 50 companies, we are driven by innovation and committed to securing the digital future.
              </p>
            </div>
          </div>

          {/* Logo Section */}
          <div className="md:w-1/3 flex flex-col gap-4 mt-10 md:mt-0">
            <img src={logo} alt="Team Nova Logo" className="w-1000 h-auto" />
            <a href="https://ctftime.org/team/48032" target="_blank">
              <img src={ctftime} alt="Ctftime" className="w-20 h-auto mx-auto" />
            </a>
            <a href="https://app.hackthebox.com/teams/overview/5351" target="_blank">
              <div className="flex align-center gap-2 justify-center mx-auto">
                <img src={HackTheBoxIcon} alt="Hack The Box" className="w-5 h-5" />
                <span className="font-bold text-green-300">
                  HACK<p className="font-normal inline mx-1 text-white">THE</p>BOX
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 text-left"
        >
          <a
            href="#/membership"
            className="px-10 py-4 border-2 border-white text-white rounded-md text-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors"
          >
            Join the TEAM NOVA
          </a>
        </motion.div>
      </div>

      {/* Toggle Tabs Section */}
      <div className="text-center mt-24 mb-12">
        <div className="flex justify-center items-center text-center">
          <span
            onClick={() => setSelectedTab("members")}
            className={`cursor-pointer text-4xl uppercase tracking-widest ${
              selectedTab === "members" ? "font-bold text-gray-100" : "font-normal text-gray-500"
            }`}
          >
            Core Members
          </span>
          <span className="text-4xl font-normal uppercase tracking-widest text-gray-500 mx-4">|</span>
          <span
            onClick={() => setSelectedTab("mentors")}
            className={`cursor-pointer text-4xl uppercase tracking-widest ${
              selectedTab === "mentors" ? "font-bold text-gray-100" : "font-normal text-gray-500"
            }`}
          >
            Team Mentors
          </span>
        </div>
      </div>

      {/* Members or Mentors Section */}
      <div className="text-left bg-gray-900 bg-opacity-0 text-white rounded-md py-16 px-8 shadow-lg backdrop-filter">
        <AnimatePresence>
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-5"
          >
            {selectedTab === "members" ? members2024 : mentors2024}
          </motion.div>
        </AnimatePresence>
      </div>


{/* 
<div className="text-center mt-16">
  <h2 className="text-4xl font-medium text-gray-200 uppercase mb-6 tracking-widest">
    Our Proud Sponsors
  </h2>
  
  <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 font-light italic">
    "Together with our sponsors, we are shaping the future of cybersecurity."
  </p>

  <motion.div
    className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 lg:px-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >

    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 max-w-lg mx-auto">
      <a href="https://kct.ac.in" target="_blank" rel="noopener noreferrer">
        <img
          src={KIlogo}
          alt="Kumaraguru College of Technology"
          className="w-full max-h-28 mb-6 object-contain"
        />
      </a>
      <h2 className="text-2xl font-semibold text-gray-100 mb-4 text-left">
        Kumaraguru College of Technology
      </h2>
      <p className="text-sm text-gray-300 font-light text-left leading-relaxed mb-4">
        Kumaraguru College of Technology, a premier engineering institution in Coimbatore, India, offers a range of undergraduate and postgraduate programs. Established in 1984, KCT is committed to academic excellence and innovation, providing state-of-the-art facilities and fostering a vibrant learning environment.
      </p>
      <a
        href="https://kct.ac.in"
        target="_blank"
        className="text-blue-400 hover:underline font-medium text-left block"
        rel="noopener noreferrer"
      >
      </a>
    </div>


    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 max-w-lg mx-auto">
      <a href="https://iqubekct.ac.in" target="_blank" rel="noopener noreferrer">
        <img
          src={IqubeLogo}
          alt="iQube"
          className="w-full max-h-28 mb-6 object-contain"
        />
      </a>
      <h2 className="text-2xl font-semibold text-gray-100 mb-4 text-left">iQube</h2>
      <p className="text-sm text-gray-300 font-light text-left leading-relaxed mb-4">
        iQube is the Technology Innovation Centre at KCT, dedicated to nurturing tech enthusiasts by providing resources, mentorship, and opportunities to transform innovative ideas into viable products. It focuses on domains like Embedded and IoT, Software Development, Cyber Security, AR/VR Development, Mechanical Design, and AI/ML.
      </p>
      <a
        href="https://iqubekct.ac.in"
        target="_blank"
        className="text-blue-400 hover:underline font-medium text-left block"
        rel="noopener noreferrer"
      >
      </a>
    </div>
  </motion.div>
</div>
 */}

    </div>
  );
}

export default Root;
