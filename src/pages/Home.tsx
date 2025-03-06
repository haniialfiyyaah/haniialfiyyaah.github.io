import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaNodeJs, FaReact, FaCode, FaDatabase, FaServer, FaMobile, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
import { SiPostgresql, SiTypescript, SiExpress, SiTailwindcss } from 'react-icons/si';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Projects from './Projects';
import Contact from './Contact';

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

const sections = ['home', 'tech', 'projects', 'about', 'contact'];

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'tech', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= windowHeight / 2 && bottom >= windowHeight / 2) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <div className="relative h-screen overflow-y-scroll snap-y snap-mandatory">
        {/* Background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-purple-50/90 to-pink-50/90 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          </div>

          <div className="absolute inset-0">
            <div className="absolute top-0 -left-4 w-[600px] h-[600px] bg-blue-200/20 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute -top-4 -right-4 w-[600px] h-[600px] bg-purple-200/20 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-[600px] h-[600px] bg-pink-200/20 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        </div>

        {/* Hero Section */}
        <section id="home" className="h-screen snap-start snap-always flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center px-6 max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="relative inline-block mb-8">
                <motion.h1 
                  className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 text-transparent bg-clip-text mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Hi, I'm Hanii 👋
                </motion.h1>
              </div>
              <motion.p 
                className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Full Stack Developer specializing in building modern, scalable web applications
              </motion.p>
              <motion.div 
                className="flex justify-center space-x-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/haniialfiyyaah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300"
                >
                  <FaGithub className="h-10 w-10" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com/in/haniialfiyyaah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300"
                >
                  <FaLinkedin className="h-10 w-10" />
                </motion.a>
              </motion.div>
            </motion.div>
            
            {/* Enhanced Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            >
              <div 
                className="flex flex-col items-center cursor-pointer group" 
                onClick={() => {
                  const techSection = document.getElementById('tech');
                  if (techSection) {
                    techSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span className="text-sm text-gray-500 dark:text-gray-400 mb-3 group-hover:text-blue-500 transition-colors duration-300">
                  Explore More
                </span>
                <div className="w-8 h-14 border-2 border-gray-400 group-hover:border-blue-500 rounded-full p-2 transition-colors duration-300">
                  <div className="w-2 h-2 bg-gray-400 group-hover:bg-blue-500 rounded-full animate-bounce mx-auto transition-colors duration-300"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech" className="h-screen snap-start snap-always flex items-center justify-center relative px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="w-full max-w-7xl mx-auto bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-3xl shadow-xl border border-white/30 dark:border-gray-700/30 p-8 md:p-12 overflow-y-auto max-h-[calc(100vh-120px)]"
          >
            <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 text-transparent bg-clip-text mb-16">
              Tech Stack & Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/50 dark:bg-gray-700/50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/30 dark:border-gray-700/30 hover:border-blue-200/30 group"
                >
                  <div className="flex items-center mb-6">
                    <div className="text-blue-500 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold ml-4 text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-gray-600 dark:text-gray-300 flex items-center group-hover:translate-x-1 transition-transform duration-300">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="h-screen snap-start snap-always flex items-center justify-center relative px-6">
          <div className="w-full max-w-7xl mx-auto overflow-y-auto max-h-[calc(100vh-40px)]">
            <Projects />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="h-screen snap-start snap-always flex items-center justify-center relative px-6">
          <div className="w-full max-w-4xl mx-auto overflow-y-auto max-h-[calc(100vh-40px)]">
            <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 text-transparent bg-clip-text mb-16">
              About Me
            </h2>
            <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl p-10 shadow-xl border border-white/30 dark:border-gray-700/30">
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in building modern web applications.
                My focus is on creating efficient, scalable, and user-friendly solutions using the latest technologies.
                I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <motion.div 
                  className="text-center bg-white/30 dark:bg-gray-700/30 rounded-xl p-6 shadow-lg border border-white/20 dark:border-gray-600/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl font-bold text-blue-500 mb-2">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </motion.div>
                <motion.div 
                  className="text-center bg-white/30 dark:bg-gray-700/30 rounded-xl p-6 shadow-lg border border-white/20 dark:border-gray-600/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl font-bold text-green-500 mb-2">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </motion.div>
                <motion.div 
                  className="text-center bg-white/30 dark:bg-gray-700/30 rounded-xl p-6 shadow-lg border border-white/20 dark:border-gray-600/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl font-bold text-purple-500 mb-2">20+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
                </motion.div>
                <motion.div 
                  className="text-center bg-white/30 dark:bg-gray-700/30 rounded-xl p-6 shadow-lg border border-white/20 dark:border-gray-600/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="h-screen snap-start snap-always flex items-center justify-center relative px-6">
          <div className="w-full max-w-4xl mx-auto overflow-y-auto max-h-[calc(100vh-40px)]">
            <Contact />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home; 