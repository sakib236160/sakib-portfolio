import React, { useEffect } from "react";
import { FaMobileAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const skillsData = [
  { title: "Design", skills: ["Figma", "HTML", "CSS"] },
  { title: "Programming", skills: ["JavaScript", "TypeScript", "Java"] },
  { title: "Front-end", skills: ["React", "Next", "Node", "Angular"] },
  { title: "Databases", skills: ["MySQL", "MongoDB"] },
  { title: "APIs", skills: ["REST API", "JSON"] },
  { title: "ORM", skills: ["Mongoose"] },
  {
    title: "UI Frameworks",
    skills: ["Material UI", "Tailwind CSS", "Radix UI"],
  },
  { title: "Version Control", skills: ["Git & GitHub", "Docker"] },
  { title: "Deployments", skills: ["Netlify", "Vercel","surge"] },
];

const SkillsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0D18] text-[#e0e0e0] px-[30px] md:px-[100px] py-16 font-sans">
      {/* Header */}
      <div className="flex items-center gap-3 mb-12" data-aos="fade-right">
        <FaMobileAlt className="text-cyan-400 text-2xl" />
        <h1 className="text-4xl font-bold text-[#e0e0e0] whitespace-nowrap">
          Skills
        </h1>
        <div className="flex-1 h-px bg-cyan-400" />
      </div>

      <div className="flex flex-wrap gap-12 lg:gap-20">
        {/* Design Section */}
        <div
          className="w-full lg:w-[280px] flex flex-col gap-10 mx-auto lg:mx-0"
          data-aos="zoom-in"
        >
          {/* Upper Dot Grid - Center */}
          <div className="grid grid-cols-4 gap-2 self-center">
            {[...Array(16)].map((_, i) => (
              <span
                key={i}
                className="w-2.5 h-2.5 bg-gray-500 rounded-full"
              ></span>
            ))}
          </div>

          {/* Spiral Box - Centered but Right-Aligned */}
          <div className="flex justify-center lg:justify-end w-full">
            <div className="relative w-32 h-32">
              <div className="absolute w-[100px] h-[100px] border-2 border-purple-600 top-0 left-0"></div>
              <div className="absolute w-[100px] h-[100px] border-2 border-purple-600 top-5 left-5"></div>
            </div>
          </div>

          {/* Lower Dot Grid - Center or Left */}
          <div className="grid grid-cols-6 gap-2.5 self-center lg:self-start">
            {[...Array(24)].map((_, i) => (
              <span key={i} className="w-3 h-3 bg-gray-500 rounded-full"></span>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-grow items-stretch">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="bg-[#0A0D18] p-5 border border-[#3a3a4e] flex flex-col h-full transition duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-3 pb-1 border-b border-[#3a3a4e]">
                {category.title}
              </h3>
              <ul className="flex-grow">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className={`flex items-center mb-2 pb-2 ${
                      i !== category.skills.length - 1
                        ? "border-b border-gray-600"
                        : ""
                    }`}
                  >
                    <span className="text-[#e0e0e0] mr-2 font-bold">
                      &rarr;
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
