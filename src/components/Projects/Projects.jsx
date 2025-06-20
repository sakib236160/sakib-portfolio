import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import projectsData from "../../../public/Data/projects.json";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-[#0A0D18] text-white min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-block bg-cyan-400 text-black px-4 py-2 rounded hover:bg-cyan-300 mb-6"
        >
          ← Back to Home
        </Link>

        {/* Title */}
        <h2
          className="text-4xl font-bold text-center mb-8"
          data-aos="fade-down"
        >
          ALL PROJECTS
        </h2>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center mr-10 ml-10 mb-4">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
