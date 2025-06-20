import About from "../About/About";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import projectsData from "../../../public/Data/projects.json";
import { Link } from "react-router-dom";
import ProjectCard from "../ProjectCard/ProjectCard";

const Home = () => {
  const firstThree = projectsData.slice(0, 3);

  return (
    <main className="bg-[#0d1117] text-white">
      <Hero />
      <About />

      <section className="py-16 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">MY PROJECTS</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {firstThree.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/project"
            className="text-xl font-semibold text-cyan-400 hover:underline"
          >
            See All Projects →
          </Link>
        </div>
      </section>

      <Contact />
    </main>
  );
};

export default Home;

