import { FaGithub } from 'react-icons/fa';

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
    <div className="bg-[#1F1C36] border border-gray-700 rounded-xl p-4 space-y-4 hover:shadow-purple-500/20 hover:shadow transition">
      <img src={project.image} alt={project.title} className="w-full h-44 object-cover rounded" />
      <div className="flex justify-between items-center">
        <h3 className="text-white font-semibold text-lg">{project.title}</h3>
        <a href={project.github} target="_blank" rel="noreferrer">
          <FaGithub className="text-xl" />
        </a>
      </div>
      <p className="text-sm text-gray-400">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, i) => (
          <span key={i} className={`text-xs px-2 py-1 rounded ${techColors[tech] || 'bg-gray-700 text-white'}`}>
            {tech}
          </span>
        ))}
      </div>
      <a href={project.liveLink} target="_blank" rel="noreferrer" className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded mt-2">
        Live Preview
      </a>
    </div>
  );
};

export default ProjectCard;
