import About from "../About/About";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import projectsData from "../../../public/Data/projects.json";
import { Link } from "react-router-dom";
import { FaMobileAlt } from "react-icons/fa";
import ProjectCard from "../ProjectCard/ProjectCard";
import QuoteBox from "../QuoteBox/QuoteBox";
import SkillsSection from "../SkillsSection/SkillsSection";

const Home = () => {
  const firstThree = projectsData.slice(0, 3);

  return (
    <main className="bg-[#0A0D18] text-white">
      <Hero />
      <QuoteBox></QuoteBox>

      <section className="py-16 px-4 md:px-8">
        {/* Title Row */}
        <div className="flex items-center gap-3 mb-8 mr-25 ml-25 ">
          {/* Icon and Text */}
          <div className="flex items-center gap-2">
            <FaMobileAlt className="text-pink-400 text-xl" />
            <h2 className="text-2xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent whitespace-nowrap">
              All Projects
            </h2>
          </div>

          {/* Right-side Line */}
          <div className="flex-1 h-px bg-pink-500" />
        </div>

        {/* Subheading */}
        <p className="text-left text-4xl font-bold text-white mb-20 mr-25 ml-25 ">
          Projects that I have done,
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6 mr-25 ml-25 ">
          {firstThree.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* See All Projects Link */}
        <div className="text-center mt-10">
          <Link
            to="/project"
            className="text-2xl font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent hover:underline"
          >
            See All Projects →
          </Link>
        </div>
      </section>

      <SkillsSection></SkillsSection>
      <About />

      <Contact />
    </main>
  );
};

export default Home;
