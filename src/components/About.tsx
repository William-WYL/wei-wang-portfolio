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
                  src="public\image\profile-picture-man-using-virtual-reality-headset-metaverse-digital-cyber-world-technology-illustration-vector.jpg"
                  alt="Profile"
                  className="w-full h-auto rounded-lg shadow-xl object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl"
                />
              </div>
            </div>
          </motion.div>

          <motion.div className="md:w-1/2" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-600 dark:text-purple-400">
              Wei (William) Wang
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              I'm a <span className="text-purple-600 dark:text-purple-400">Full Stack Developer</span>
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
              I am a student in Term 3 of a program in Red River College, Canada, in Full Stack Web Development.
              With a strong foundation in both client-side and server-side development from one year college training
              and one year self-learning, I deliver seamless, responsive user experiences backed by scalable and
              robust backend systems.
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