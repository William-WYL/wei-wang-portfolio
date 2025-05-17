import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-gray-900 dark:text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div className="md:w-1/2" variants={itemVariants}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 opacity-75 blur"></div>
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="src\assets\profile-picture-man-using-virtual-reality-headset-metaverse-digital-cyber-world-technology-illustration-vector.jpg"
                  alt="Profile"
                  className="w-full h-auto rounded-lg shadow-xl object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div className="md:w-1/2" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-600 dark:text-purple-400">
              About Me
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              I'm a <span className="text-purple-600 dark:text-purple-400">Frontend Developer</span> with a passion for creating beautiful user experiences
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
              I specialize in building modern, responsive web applications using React and TypeScript.
              With a keen eye for design and a strong technical foundation, I create seamless user interfaces
              that are both functional and visually appealing.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or sharing my knowledge through blog posts and mentoring junior developers.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                className="px-6 py-3 bg-transparent border-2 border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white font-medium rounded-lg transition-colors duration-300 inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                View My Work
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;