import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-white/5 backdrop-blur-md border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-600 dark:text-gray-300"
          >
            © {new Date().getFullYear()} Hanii. All rights reserved.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-sm mt-2"
          >
            Built with React & Tailwind CSS
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 