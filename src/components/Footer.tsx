const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Hani Alfiyyah. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            Built with React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 