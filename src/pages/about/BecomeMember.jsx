import React, { useState } from "react";
import Particle from "../../components/Particle/Particle";
import Typewriters from "typewriter-effect";
import emailjs from "emailjs-com"; // Import emailjs
import { FaUserFriends, FaLaptopCode, FaShieldAlt, FaHandsHelping } from "react-icons/fa"; // Icons for perks

function BecomeMember() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interests: "",
    message: "",
  });
  const [response, setResponse] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      interests: formData.interests,
      message: formData.message,
    };

    emailjs
      .send(
        'service_0918cuh', // Replace with your EmailJS Service ID
        'template_5jctsar', // Replace with your EmailJS Template ID
        templateParams,
        'OfwUCt284r7meTA7n' // Replace with your EmailJS User ID (or public key)
      )
      .then(
        (result) => {
          console.log(result.text);
          setResponse("Your membership request has been submitted successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            interests: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setResponse("Failed to submit your request. Please try again later.");
        }
      );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Particle />
      {/* Header */}
      <div className="flex flex-col justify-center items-center font-space my-5 py-5">
        <h2 className="text-4xl text-gray-200 uppercase mb-8 tracking-widest">Become A Member</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 font-light italic">
          Join Our Thriving Community of Cybersecurity Enthusiasts
        </p>
      </div>

      {/* Membership Form and Benefits Section */}
      <section className="pb-10 lg:pb-20 font-space text-white">
        <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap">
            {/* Membership Benefits on the Left */}
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div className="lg:max-w-md">
                <p className="px-4 mb-10 text-base leading-7 text-gray-300 font-light">
                  Ready to become a part of a vibrant community? Join us in
                  building a safer digital world by contributing your skills and
                  learning from experts. Fill out the form below to become a
                  member of Nova.
                </p>
                <h2 className="text-3xl font-bold text-gray-200 mb-4">Why Join Us?</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div className="text-left flex">
                    <FaUserFriends className="text-4xl text-blue-500 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-100">Exclusive Events</h3>
                      <p className="text-gray-400 font-light">
                        Participate in members-only events and workshops.
                      </p>
                    </div>
                  </div>
                  <div className="text-left flex">
                    <FaHandsHelping className="text-4xl text-green-500 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-100">Mentorship Programs</h3>
                      <p className="text-gray-400 font-light">
                        Gain guidance from industry experts and seasoned professionals.
                      </p>
                    </div>
                  </div>
                  <div className="text-left flex">
                    <FaShieldAlt className="text-4xl text-red-500 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-100">CTF Participation</h3>
                      <p className="text-gray-400 font-light">
                        Join exciting Capture the Flag (CTF) competitions.
                      </p>
                    </div>
                  </div>
                  <div className="text-left flex">
                    <FaLaptopCode className="text-4xl text-purple-500 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-100">Networking Opportunities</h3>
                      <p className="text-gray-400 font-light">
                        Connect with like-minded individuals and grow your network.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Membership Form on the Right */}
            <div className="w-full px-4 lg:w-1/2">
              <form onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-300 font-light">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="rounded-lg p-2 bg-gray-800 border-2 border-gray-700 text-gray-300"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-300 font-light">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="rounded-lg p-2 bg-gray-800 border-2 border-gray-700 text-gray-300"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-300 font-light">Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="rounded-lg p-2 bg-gray-800 border-2 border-gray-700 text-gray-300"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-300 font-light">Areas of Interest</label>
                    <input
                      type="text"
                      name="interests"
                      value={formData.interests}
                      onChange={handleInputChange}
                      className="rounded-lg p-2 bg-gray-800 border-2 border-gray-700 text-gray-300"
                      placeholder="e.g. Cybersecurity, Bug Bounty"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-300 font-light">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="rounded-lg p-2 bg-gray-800 border-2 border-gray-700 text-gray-300"
                      rows="5"
                      placeholder="Tell us why you're interested in joining"
                      required
                    ></textarea>
                  </div>
                  <p className="py-2 text-green-400 italic font-light">{response}</p>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-lg py-3 px-6 font-semibold shadow-md hover:shadow-lg hover:bg-gray-600 transition-all duration-300 ease-in-out"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </div>
  );
}

export default BecomeMember;
