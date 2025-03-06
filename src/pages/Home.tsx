import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiPostgresql, SiTypescript } from 'react-icons/si';

const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-20"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm Hani Alfiyyah 👋
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Full Stack Developer specializing in Node.js, React, and PostgreSQL
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/haniialfiyyaah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <FaGithub className="h-8 w-8" />
          </a>
          <a
            href="https://linkedin.com/in/haniialfiyyaah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <FaLinkedin className="h-8 w-8" />
          </a>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-20"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center space-y-2">
            <FaNodeJs className="h-16 w-16 text-green-600" />
            <span className="text-gray-600 dark:text-gray-300">Node.js</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <FaReact className="h-16 w-16 text-blue-500" />
            <span className="text-gray-600 dark:text-gray-300">React</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <SiPostgresql className="h-16 w-16 text-blue-700" />
            <span className="text-gray-600 dark:text-gray-300">PostgreSQL</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <SiTypescript className="h-16 w-16 text-blue-600" />
            <span className="text-gray-600 dark:text-gray-300">TypeScript</span>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="py-20 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          About Me
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-6">
          I'm a passionate Full Stack Developer with expertise in building modern web applications.
          My focus is on creating efficient, scalable, and user-friendly solutions using the latest technologies.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
          💬 Feel free to reach out if you'd like to collaborate on a project or just want to chat about web development!
        </p>
      </motion.section>
    </div>
  );
};

export default Home; 