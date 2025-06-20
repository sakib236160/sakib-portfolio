import { FaGithub } from 'react-icons/fa';
import 'aos/dist/aos.css';

const techColors = {
  '#react': 'text-blue-400 bg-blue-900',
  '#redux': 'text-purple-400 bg-purple-900',
  '#tailwind': 'text-teal-400 bg-teal-900',
  '#node': 'text-green-300 bg-green-900',
  '#express': 'text-gray-300 bg-gray-800',
  '#mongoDB': 'text-green-300 bg-green-800',
};

const ProjectCard = ({ project }) => {
  return (
    <div
      className="bg-[#0A0D18] border border-gray-700 rounded-xl p-4 shadow transition hover:shadow-purple-500/20 hover:shadow-lg w-full max-w-[340px] mx-auto flex flex-col"
      data-aos="fade-up"
    >
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-44 object-cover rounded mb-4"
      />

      {/* Title & GitHub */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-white font-semibold text-lg">{project.title}</h3>
        <a href={project.github} target="_blank" rel="noreferrer">
          <FaGithub className="text-xl hover:text-gray-300" />
        </a>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-400 mb-3 flex-1">{project.description}</p>

      {/* Technologies with animation */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, i) => (
          <span
            key={i}
            data-aos="zoom-in-down"
            data-aos-delay={i * 100}
            className={`text-xs px-2 py-1 rounded ${techColors[tech] || 'bg-gray-700 text-white'}`}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Live Preview Button */}
      {/* <a
        href={project.liveLink}
        target="_blank"
        rel="noreferrer"
        className="mt-auto block text-left text-white py-2 rounded font-medium transition"
      >
        Live Preview
      </a> */}

    <a
  href={project.liveLink}
  target="_blank"
  rel="noreferrer"
  className="mt-auto flex text-left items-center text-white  py-2 px-4 rounded font-medium transition"
>
  <span className="w-3 h-3 mr-2 rounded-full bg-green-500 animate-pulse"></span>
  Live Preview
</a>
    </div>
  );
};

export default ProjectCard;


