import React from "react";
import Particles from "../../components/Particle/Particle";
import { motion } from "framer-motion";
import { members_2024 } from "../members/2024";
import blank from "../../images/members/blank.png";
import vishal from "../../images/members/vishal.png";
import pradyun from "../../images/members/pradyun.png";
import subhash from "../../images/members/subhash.png";
import shriram from "../../images/members/shriram.png";
import kishoreram from "../../images/members/kishoreram.jpeg";
import hariharan from "../../images/members/hariharan.jpeg";
import abiya from "../../images/members/abiya.jpeg";
import manojkumar from "../../images/members/manojkumar.jpeg";
import LinkedIn from "../../images/icons/linkedin.png";
import EmailIcon from "../../images/icons/email.png";
import Instagram from "../../images/icons/instagram.png";
import logo from "../../images/icons/novaflag.png"; 
import ctftime from "../../images/icons/ctftime.png";
import HackTheBoxIcon from "../../images/icons/hackthebox.png";

function Root() {
  const img2024 = [vishal, kishoreram, abiya, subhash, shriram, pradyun, hariharan, manojkumar];

  const members2024 = members_2024.map(
    ({ id, name, position, github, linkedin, instagram, email, hackthebox }) => (
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

        {/* Social Icons Section */}
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
              <img src={ctftime} alt="Ctftime" className="w-20 h-auto mx-auto"/>
            </a>
            <a href="https://app.hackthebox.com/teams/overview/5351" target="_blank">
              <div className="flex align-center gap-2 justify-center mx-auto">
                <img src={HackTheBoxIcon} alt="HackTheBox" className="w-5 h-5"/>
                <span className="font-bold text-green-300">HACK<p className="font-normal inline mx-1 text-white">THE</p>BOX</span>
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
            Join the NOVA Legacy
          </a>
        </motion.div>
      </div>

      {/* Members Section */}
      <div className="text-left my-24 bg-gray-900 bg-opacity-0 text-white rounded-md py-16 px-8 shadow-lg backdrop-filter">
        <h2 className="text-4xl text-center text-gray-100 uppercase mb-12 tracking-widest">Our Team</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-16 font-light text-center italic">
          Meet the experts driving Nova forward with passion, skill, and a commitment to cybersecurity.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-5">
          {members2024}
        </div>
      </div>
    </div>
  );
}

export default Root;
