import { useState, useEffect } from 'react';
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import WelcomePage from "./components/WelcomePage";
import { motion, AnimatePresence, type Variants } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for the animation
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  // Animation variants for page load
  const containerVariants: Variants = {
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
  const loaderVariants: Variants = {
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
    <div className={`app dark`}>
      <AnimatePresence>
        {loading ? (
          <WelcomePage loaderVariants={loaderVariants} />
        ) : (
          <motion.div
            key="content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            <Navbar />
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