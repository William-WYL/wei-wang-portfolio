import { useState, useEffect } from 'react';
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'purple'>('light');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'purple' | null;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }

    // Simulate loading for the animation
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    // Update document class for theme
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('purple-theme');
    } else if (theme === 'purple') {
      document.documentElement.classList.add('purple-theme');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.remove('dark', 'purple-theme');
    }

    // Save preference
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(current => {
      if (current === 'light') return 'dark';
      if (current === 'dark') return 'purple';
      return 'light';
    });
  };

  // Animation variants for page load
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Variants for loader screen
  const loaderVariants = {
    initial: { scale: 1 },
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  };

  return (
    <div className={`app ${theme}`}>
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 purple-theme:bg-purple-900"
            variants={loaderVariants}
            initial="initial"
            exit="exit"
          >
            <div className="text-center">
              <div className="relative mb-8">
                <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-purple-600 animate-spin"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold">
                  <span className="text-purple-600">P</span>
                </div>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white purple-theme:text-white">
                <span className="text-purple-600">Port</span>folio
              </h1>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            <Navbar toggleTheme={toggleTheme} theme={theme} />
            <main>
              <About />
              <Skills />
              <Projects />
              <Testimonials />
              <Contact />
            </main>
            <footer className="py-8 bg-gray-100 dark:bg-gray-800 text-center text-gray-600 dark:text-gray-300">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
                <p className="mt-2 text-sm">
                  Designed & built with
                  <span className="text-red-500 mx-1">❤</span>
                  using React & Typescript
                </p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;