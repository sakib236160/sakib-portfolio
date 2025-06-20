import projectsData from "../../../public/Data/projects.json";
import { Link } from "react-router-dom";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <section className="bg-[#0d1117] text-white min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-block bg-cyan-400 text-black px-4 py-2 rounded hover:bg-cyan-300 mb-6"
        >
          ← Back to Home
        </Link>
        <h2 className="text-4xl font-bold text-center mb-12">ALL PROJECTS</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
