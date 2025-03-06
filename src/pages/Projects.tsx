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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 text-transparent bg-clip-text mb-16">
        Featured Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-white/30 dark:border-gray-700/30 hover:border-blue-200/30"
          >
            <div className="p-8">
              <motion.h3 
                className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {project.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                {project.description}
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-2 mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.4 }}
              >
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    className="px-4 py-1.5 bg-blue-100/50 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium border border-blue-200/30 dark:border-blue-700/30 hover:bg-blue-200/50 dark:hover:bg-blue-800/50 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
              <motion.div 
                className="flex space-x-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.5 }}
              >
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300 group/link"
                >
                  <FaGithub className="h-5 w-5 mr-2 group-hover/link:rotate-12 transition-transform duration-300" />
                  <span className="border-b border-transparent group-hover/link:border-current transition-colors duration-300">
                    View Code
                  </span>
                </motion.a>
                {project.live !== '#' && (
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300 group/link"
                  >
                    <FaExternalLinkAlt className="h-4 w-4 mr-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                    <span className="border-b border-transparent group-hover/link:border-current transition-colors duration-300">
                      Live Demo
                    </span>
                  </motion.a>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects; 