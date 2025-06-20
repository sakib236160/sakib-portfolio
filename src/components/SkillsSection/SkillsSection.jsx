import React, { useEffect } from "react";
import { FaMobileAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const skillsData = [
  {
    title: "Design",
    skills: ["Figma", "HTML", "CSS"],
  },
  {
    title: "Programming",
    skills: ["JavaScript", "TypeScript", "Java"],
  },
  {
    title: "Front-end",
    skills: ["React", "Next", "Angular"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "APIs",
    skills: ["REST API", "GraphQL", "JSON"],
  },
  {
    title: "ORM",
    skills: ["Prisma", "Mongoose", "TypeORM", "Sequelize"],
  },
  {
    title: "UI Frameworks",
    skills: ["Material UI", "Fluent UI", "Tailwind CSS", "Radix UI"],
  },
  {
    title: "Version Control",
    skills: ["Git & GitHub", "BitBucket", "Docker", "Jira"],
  },
  {
    title: "Deployments",
    skills: ["Docker", "AWS"],
  },
];

const SkillsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0D18] text-[#e0e0e0] p-10 flex flex-col font-sans mx-[30px] md:mx-[100px]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-12" data-aos="fade-right">
        <FaMobileAlt className="text-cyan-400 text-2xl" />
        <h1 className="text-4xl font-bold text-[#e0e0e0] whitespace-nowrap">
          Skills
        </h1>
        <div className="flex-1 h-px bg-cyan-400" />
      </div>

      <div className="flex flex-wrap gap-12 lg:gap-20">
        {/* Left Design Elements */}
        <div
          className="flex-shrink-0 w-[280px] flex flex-col items-center pt-5"
          data-aos="zoom-in"
        >
          {/* Upper Dot Grid */}
          <div className="grid grid-cols-4 gap-2 mb-35">
            {[...Array(16)].map((_, i) => (
              <span
                key={i}
                className="w-2.5 h-2.5 bg-gray-500 rounded-full"
              ></span>
            ))}
          </div>

          {/* Middle Spiral Design (Right aligned) */}
          <div className="relative w-32 h-32 self-end mb-50">
            <div className="absolute w-[100px] h-[100px] border-2 border-purple-600 top-0 left-0"></div>
            <div className="absolute w-[100px] h-[100px] border-2 border-purple-600 top-5 left-5 "></div>
          </div>

          {/* Lower Dot Grid (Bigger, more, left aligned, lower down) */}
          <div className="grid grid-cols-6 gap-2.5 mt-4 self-start">
            {[...Array(24)].map((_, i) => (
              <span
                key={i}
                className="w-3 h-3 bg-gray-500 rounded-full"
              ></span>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-grow items-stretch">
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
                    <span className="text-[#e0e0e0] mr-2 font-bold">&rarr;</span>
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
