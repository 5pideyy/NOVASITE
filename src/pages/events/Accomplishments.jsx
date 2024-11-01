import React from "react";
import Particle from "../../components/Particle/Particle";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaTrophy } from "react-icons/fa"; // Trophy icon for accomplishments

function Accomplishments() {
  return (
    <>
      <Particle />
      <div className="flex flex-col justify-center items-center font-space my-5 py-5">
        <h2 className="text-4xl font-medium text-gray-200 uppercase mb-8 tracking-widest">
          TEAM NOVA Achievements
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 font-light italic">
          "Pioneering the digital frontier, one milestone at a time."
        </p>
      </div>

      <VerticalTimeline lineColor="rgba(255, 255, 255, 0.3)" className="py-10">
        {[...Array(10)].map((_, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(40, 44, 52, 0.85)", color: "#E5E5E5", borderRadius: "8px" }}
            contentArrowStyle={{ borderRight: "7px solid rgba(40, 44, 52, 0.85)" }}
            date={`Milestone ${index + 1}`}
            iconStyle={{ background: "rgba(40, 44, 52, 0.85)", color: "#FFD700" }}
            icon={<FaTrophy />}
          >
            <h3 className="vertical-timeline-element-title">Achievement Title {index + 1}</h3>
            <h4 className="vertical-timeline-element-subtitle">Achievement Location {index + 1}</h4>
            <p className="text-gray-300 leading-relaxed">
              "Recognized for exceptional contributions in cybersecurity, this milestone marks our continuous dedication to excellence and innovation. Team Nova’s expertise and teamwork drive our success as we tackle new challenges in the digital world."
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      {/* Closing Quote */}
      <div className="text-center mt-12 mb-20 px-6">
        <p className="text-xl font-light text-gray-400 italic">
          "Our journey of achievements continues, with new heights yet to reach."
        </p>
      </div>
    </>
  );
}

export default Accomplishments;
