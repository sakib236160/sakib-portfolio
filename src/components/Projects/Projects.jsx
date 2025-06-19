import React from 'react';

const projects = [
  {
    id: 1,
    title: 'MediHub – Medical Camp Platform',
    description: 'A full-featured MERN stack project with Stripe payment and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: 'https://medihub.web.app',
    github: 'https://github.com/your-repo/medihub',
  },
  {
    id: 2,
    title: 'BookNest – Library App',
    description: 'A MERN stack project to borrow and return books with JWT-based auth.',
    technologies: ['React', 'Express', 'MongoDB'],
    liveLink: '#',
    github: '#',
  },
   {
    id: 1,
    title: 'MediHub – Medical Camp Platform',
    description: 'A full-featured MERN stack project with Stripe payment and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: 'https://medihub.web.app',
    github: 'https://github.com/your-repo/medihub',
  },


   {
    id: 2,
    title: 'BookNest – Library App',
    description: 'A MERN stack project to borrow and return books with JWT-based auth.',
    technologies: ['React', 'Express', 'MongoDB'],
    liveLink: '#',
    github: '#',
  },

   {
    id: 1,
    title: 'MediHub – Medical Camp Platform',
    description: 'A full-featured MERN stack project with Stripe payment and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: 'https://medihub.web.app',
    github: 'https://github.com/your-repo/medihub',
  },


   {
    id: 2,
    title: 'BookNest – Library App',
    description: 'A MERN stack project to borrow and return books with JWT-based auth.',
    technologies: ['React', 'Express', 'MongoDB'],
    liveLink: '#',
    github: '#',
  },

   {
    id: 1,
    title: 'MediHub – Medical Camp Platform',
    description: 'A full-featured MERN stack project with Stripe payment and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: 'https://medihub.web.app',
    github: 'https://github.com/your-repo/medihub',
  },
  // আরও প্রজেক্ট যোগ করতে পারেন
];

const Projects = () => {
  return (
    <section id="project" className="bg-[#0d1117] text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-cyan-400 mb-10 text-center">My Projects</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="bg-[#161b22] rounded-lg shadow-lg p-6 hover:shadow-cyan-500/20 transition">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-3">{project.description}</p>
              <div className="text-sm mb-4">
                <strong className="text-white">Tech:</strong>{' '}
                {project.technologies.join(', ')}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  Live Site
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
