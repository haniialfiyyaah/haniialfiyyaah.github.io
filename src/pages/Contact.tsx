import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 text-transparent bg-clip-text mb-16">
        Get In Touch
      </h2>
      
      <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg rounded-2xl p-10 shadow-xl border border-white/30 dark:border-gray-700/30">
        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I'm always open to new opportunities and collaborations.
          Feel free to reach out through any of these platforms!
        </motion.p>

        <div className="flex flex-col items-center space-y-8">
          <motion.a
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:hanii.alfiyyah@gmail.com"
            className="flex items-center space-x-4 text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-300 bg-white/30 dark:bg-gray-700/30 px-8 py-4 rounded-full backdrop-blur-lg border border-white/20 dark:border-gray-600/20 hover:border-blue-200/30 hover:shadow-lg group"
          >
            <FaEnvelope className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xl">hanii.alfiyyah@gmail.com</span>
          </motion.a>

          <div className="flex space-x-8 mt-8">
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/haniialfiyyaah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 bg-white/20 dark:bg-gray-700/20 p-4 rounded-full backdrop-blur-lg hover:shadow-lg"
            >
              <FaGithub className="h-8 w-8" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/haniialfiyyaah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300 bg-white/20 dark:bg-gray-700/20 p-4 rounded-full backdrop-blur-lg hover:shadow-lg"
            >
              <FaLinkedin className="h-8 w-8" />
            </motion.a>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto mt-16"
          onSubmit={(e) => {
            e.preventDefault();
            // Add form submission logic here
          }}
        >
          <div className="mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 rounded-xl bg-white/20 dark:bg-gray-700/30 border border-white/20 dark:border-gray-600/20 focus:border-blue-500 focus:bg-white/30 focus:ring-2 focus:ring-blue-500/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                required
              />
            </motion.div>
          </div>
          <div className="mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 rounded-xl bg-white/20 dark:bg-gray-700/30 border border-white/20 dark:border-gray-600/20 focus:border-blue-500 focus:bg-white/30 focus:ring-2 focus:ring-blue-500/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                required
              />
            </motion.div>
          </div>
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative"
            >
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-6 py-4 rounded-xl bg-white/20 dark:bg-gray-700/30 border border-white/20 dark:border-gray-600/20 focus:border-blue-500 focus:bg-white/30 focus:ring-2 focus:ring-blue-500/20 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 resize-none"
                required
              ></textarea>
            </motion.div>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group"
          >
            <span>Send Message</span>
            <FaPaperPlane className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact; 