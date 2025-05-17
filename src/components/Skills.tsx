import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const skills = [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'TypeScript', level: 85, icon: '🔷' },
    { name: 'JavaScript', level: 95, icon: '🟨' },
    { name: 'HTML & CSS', level: 90, icon: '🌐' },
    { name: 'Redux', level: 80, icon: '🔄' },
    { name: 'Next.js', level: 75, icon: '⏭️' },
    { name: 'Tailwind CSS', level: 85, icon: '🌊' },
    { name: 'Node.js', level: 70, icon: '🟢' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-purple-600 dark:text-purple-400">
            My Skills
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I've worked with a variety of technologies in the web development world.
            Here are my main areas of expertise and the technologies I use daily.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{skill.icon}</span>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                <motion.div
                  className="bg-gradient-to-r from-purple-500 to-purple-700 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                ></motion.div>
              </div>
              <div className="mt-2 text-right text-sm text-gray-500 dark:text-gray-400">{skill.level}%</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-16 text-center"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-6 text-purple-600 dark:text-purple-400">
            Other Technologies I Work With
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              'Git', 'GitHub', 'GraphQL', 'Jest', 'Webpack', 'Firebase',
              'Figma', 'Storybook', 'Material UI', 'CSS-in-JS', 'AWS',
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full shadow-md text-gray-800 dark:text-gray-200 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;