import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Let's Connect
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          I'm always open to new opportunities and collaborations.
          Feel free to reach out through any of these platforms!
        </p>

        <div className="flex justify-center space-x-8 mb-16">
          <a
            href="https://github.com/haniialfiyyaah"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <FaGithub className="h-10 w-10" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/haniialfiyyaah"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <FaLinkedin className="h-10 w-10" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:hanii.alfiyyah@gmail.com"
            className="flex flex-col items-center space-y-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <FaEnvelope className="h-10 w-10" />
            <span>Email</span>
          </a>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            // Add form submission logic here
          }}
        >
          <div className="mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-gray-900 dark:text-white"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-gray-900 dark:text-white"
              required
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-gray-900 dark:text-white"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact; 