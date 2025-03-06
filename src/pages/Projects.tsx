import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'E-commerce CMS',
    description: 'A content management system for e-commerce platform built with Vue.js',
    tech: ['Vue.js', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/haniialfiyyaah/ecommerce-client-CMS',
    live: '#'
  },
  {
    title: 'E-commerce Customer',
    description: 'Customer-facing e-commerce platform with modern UI/UX',
    tech: ['Vue.js', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/haniialfiyyaah/ecommerce-client-customer',
    live: '#'
  },
  {
    title: 'Kanban Board',
    description: 'Project management tool with drag-and-drop functionality',
    tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
    github: 'https://github.com/haniialfiyyaah/kanban-client',
    live: '#'
  },
  {
    title: 'Fancy Todo',
    description: 'Task management application with beautiful UI',
    tech: ['JavaScript', 'Node.js', 'Express.js'],
    github: 'https://github.com/haniialfiyyaah/fancy-todo',
    live: '#'
  }
];

const Projects = () => {
  return (
    <div className="py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
      >
        My Projects
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <FaGithub className="h-5 w-5 mr-2" />
                  Code
                </a>
                {project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <FaExternalLinkAlt className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 