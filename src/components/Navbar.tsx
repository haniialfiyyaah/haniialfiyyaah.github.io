import { motion } from 'framer-motion';

interface NavbarProps {
  activeSection: string;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'tech', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
];

const Navbar = ({ activeSection }: NavbarProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50"
    >
      <div className="space-y-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-full py-6 px-3 shadow-lg border border-white/20 dark:border-gray-700/20">
        {navItems.map((item) => (
          <motion.div 
            key={item.id} 
            className="group flex items-center justify-end gap-3 cursor-pointer"
            onClick={() => scrollToSection(item.id)}
            whileHover={{ x: -6 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs font-medium text-gray-800 dark:text-gray-200 pr-2 whitespace-nowrap bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full py-1 px-3 shadow-sm border border-white/20 dark:border-gray-700/20">
              {item.label}
            </span>
            <div
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 relative ${
                activeSection === item.id
                  ? 'bg-blue-500 scale-110 shadow-md shadow-blue-500/30'
                  : 'bg-gray-400/50 hover:bg-gray-600/50 group-hover:scale-105'
              }`}
            >
              {activeSection === item.id && (
                <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping"></div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Navigation Indicator */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 md:hidden">
        <div className="flex space-x-3 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-full p-2.5 shadow-lg border border-white/20 dark:border-gray-700/20">
          {navItems.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeSection === item.id
                  ? 'bg-blue-500 scale-110 shadow-md shadow-blue-500/30'
                  : 'bg-gray-400/50'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 