import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaArrowRight } from 'react-icons/fa';

// Technology color mapping
const techColors = {
  '#react': 'text-blue-400 bg-blue-900',
  '#redux': 'text-purple-400 bg-purple-900',
  '#tailwind': 'text-teal-400 bg-teal-900',
  '#node': 'text-green-300 bg-gradient-to-r from-green-700 to-green-900',
  '#express': 'text-gray-300 bg-gray-800',
  '#mongoDB': 'text-green-300 bg-green-800',
};

const projectsData = [
  {
    id: 1,
    image: 'https://i.ibb.co/L5hY8xG/quick-bites-preview.png',
    title: 'Quick-Bites (MERN)',
    description: 'Quick Bites is an online food delivery website where users will be able to order food.',
    technologies: ['#react', '#redux', '#tailwind', '#node', '#express', '#mongoDB'],
    liveLink: 'https://example.com/quick-bites',
    github: 'https://github.com/your-repo/quick-bites',
  },
  {
    id: 2,
    image: 'https://i.ibb.co/3k87xLw/bookishbd-preview.png',
    title: 'BookishBD-24 (MERN)',
    description: 'BookishBD-24 is an online book selling website. Users can buy their preferable books.',
    technologies: ['#react', '#redux', '#tailwind', '#node', '#express', '#mongoDB'],
    liveLink: 'https://example.com/bookishbd24',
    github: 'https://github.com/your-repo/bookishbd24',
  },
  {
    id: 3,
    image: 'https://i.ibb.co/7N6d65w/tools-zone-preview.png',
    title: 'Tools-Zone (MERN)',
    description: 'It is an inventory Management Website. Users can order product by maintaining minimum .',
    technologies: ['#react', '#tailwind', '#node', '#express', '#mongoDB'],
    liveLink: 'https://example.com/tools-zone',
    github: 'https://github.com/your-repo/tools-zone',
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="project" className="bg-[#0D1117] text-gray-300 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center" data-aos="fade-up">
          MY PROJECTS
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="relative bg-[#1F1C36] rounded-xl shadow-lg border border-gray-700 overflow-hidden hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Project Image */}
              <div className="relative p-3 rounded-t-xl overflow-hidden bg-gray-900 border-b border-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-lg"
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                {/* Title and GitHub Icon */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-black bg-opacity-70 rounded-full p-2 text-white text-lg hover:bg-opacity-90 transition-all duration-300 ml-4"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub />
                  </a>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-4" data-aos="fade-down" data-aos-delay={(index * 100) + 150}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6" data-aos="fade-up" data-aos-delay={(index * 100) + 250}>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${techColors[tech] || 'text-white bg-gray-700'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Live Preview Button */}
                <div className="flex justify-center">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="relative flex items-center justify-center w-full gap-2 bg-[#2A2A48] text-white px-8 py-3 rounded-full overflow-hidden font-semibold group hover:bg-purple-600 transition-colors duration-300"
                  >
                    <span className="absolute left-0 top-0 h-full w-1/3 bg-black bg-opacity-30 rounded-l-full"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-white mr-1"></span>
                      Live Preview
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Projects */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="300">
          <a href="#all-projects" className="inline-flex items-center gap-2 text-purple-400 text-lg font-semibold hover:underline">
            see more projects <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
