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

    // Prepare the template parameters for EmailJS
    const templateParams = {
      from_name: formData.name, // Sending name
      from_email: formData.email, // Sending email
      phone: formData.phone, // Sending phone number
      interests: formData.interests, // Sending interests
      message: formData.message, // Sending message
    };

    // Send the email using EmailJS
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
    <>
      <Particle />
      {/* Header */}
      <div className="flex flex-col justify-center items-center font-space my-5 py-5">
        {/*<h2 className="my-5 text-base font-medium tracking-tight text-gray-200 uppercase">
          <Typewriters
            options={{
              strings: ["Become A Member"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
*/}
        <h2 className="text-4xl font-medium text-gray-200 uppercase mb-8 tracking-widest">Become A Member</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 font-light">
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
                <p className="px-4 mb-10 text-base leading-7 text-white">
                  Ready to become a part of a vibrant community? Join us in
                  building a safer digital world by contributing your skills and
                  learning from experts. Fill out the form below to become a
                  member of Nova.
                </p>
                <h2 className="text-3xl font-bold mb-4">Why Join Us?</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div className="text-left flex">
                    <FaUserFriends className="text-4xl text-blue-500 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold">Exclusive Events</h3>
                      <p className="text-gray-300">
                        Participate in members-only events and workshops.
                      </p>
                    </div>
                  </div>
                  <div className="text-left flex">
                    <FaHandsHelping className="text-4xl text-green-500 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold">Mentorship Programs</h3>
                      <p className="text-gray-300">
                        Gain guidance from industry experts and seasoned professionals.
                      </p>
                    </div>
                  </div>
                  <div className="text-left flex">
                    <FaShieldAlt className="text-4xl text-red-500 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold">CTF Participation</h3>
                      <p className="text-gray-300">
                        Join exciting Capture the Flag (CTF) competitions.
                      </p>
                    </div>
                  </div>
                  <div className="text-left flex">
                    <FaLaptopCode className="text-4xl text-purple-500 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold">Networking Opportunities</h3>
                      <p className="text-gray-300">
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
                    <label className="text-sm text-gray-300">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="rounded-lg p-2 bg-[rgb(50,49,49)] border-2 border-[rgb(96,96,96)]"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-300">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="rounded-lg p-2 bg-[rgb(50,49,49)] border-2 border-[rgb(96,96,96)]"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-300">Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="rounded-lg p-2 bg-[rgb(50,49,49)] border-2 border-[rgb(96,96,96)]"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-300">Areas of Interest</label>
                    <input
                      type="text"
                      name="interests"
                      value={formData.interests}
                      onChange={handleInputChange}
                      className="rounded-lg p-2 bg-[rgb(50,49,49)] border-2 border-[rgb(96,96,96)]"
                      placeholder="e.g. Cybersecurity, Bug Bounty"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm text-gray-300">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="rounded-lg p-2 bg-[rgb(50,49,49)] border-2 border-[rgb(96,96,96)]"
                      rows="5"
                      placeholder="Tell us why you're interested in joining"
                      required
                    ></textarea>
                  </div>
                  <p className="py-2 text-green-400">{response}</p>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white rounded-full py-2 px-4 hover:scale-105 transition duration-300"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BecomeMember;
