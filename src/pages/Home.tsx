import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaNodeJs, FaReact, FaCode, FaDatabase, FaServer, FaMobile } from 'react-icons/fa';
import { SiPostgresql, SiTypescript, SiExpress, SiTailwindcss } from 'react-icons/si';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FaCode className="h-8 w-8 text-blue-500" />,
    skills: ["React.js", "TypeScript", "Tailwind CSS", "Responsive Design"]
  },
  {
    title: "Backend Development",
    icon: <FaServer className="h-8 w-8 text-green-500" />,
    skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL"]
  },
  {
    title: "Database Management",
    icon: <FaDatabase className="h-8 w-8 text-purple-500" />,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Database Design"]
  },
  {
    title: "Mobile & Responsive",
    icon: <FaMobile className="h-8 w-8 text-orange-500" />,
    skills: ["React Native", "Progressive Web Apps", "Mobile-First Design"]
  }
];

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="fixed inset-0 -z-10">
        {/* Main gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.4),rgba(255,255,255,0))]"></div>
        </div>

        {/* Animated blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-200/40 dark:bg-blue-900/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute -top-4 -right-4 w-96 h-96 bg-purple-200/40 dark:bg-purple-900/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-200/40 dark:bg-pink-900/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white/20 rounded-full
              animate-float-${i % 3} top-${Math.floor(Math.random() * 100)}
              left-${Math.floor(Math.random() * 100)}`}
            style={{
              animationDelay: `${i * 0.5}s`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 space-y-20">
        {/* Hero Section with enhanced visuals */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative text-center py-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="relative inline-block">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I'm Hanii 👋
              </motion.h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20 dark:opacity-30 group-hover:opacity-40 transition duration-1000"></div>
            </div>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full Stack Developer specializing in building modern, scalable web applications
              with Node.js, React, and PostgreSQL
            </motion.p>
            <motion.div 
              className="flex justify-center space-x-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/haniialfiyyaah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <FaGithub className="h-8 w-8" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/haniialfiyyaah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <FaLinkedin className="h-8 w-8" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Tech Stack Section with glass effect */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-20 bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-3xl shadow-lg mx-4 border border-white/20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Tech Stack & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold ml-3 text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-600 dark:text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* About Section with enhanced glass effect */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-20 max-w-4xl mx-auto px-4"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/20">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in building modern web applications.
              My focus is on creating efficient, scalable, and user-friendly solutions using the latest technologies.
              I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500">20+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mt-8 text-center"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 bg-white/40 dark:bg-gray-700/40 backdrop-blur-lg p-6 rounded-xl inline-block border border-white/20">
              💬 Let's collaborate on your next project! Feel free to reach out.
            </p>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home; 