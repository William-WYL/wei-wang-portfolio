import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    // Re-animate when showAllProjects changes
    if (showAllProjects) {
      controls.start('visible');
    }
  }, [showAllProjects, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const allProjects = [
    {
      title: 'Air Quality Monitor',
      description: 'A responsive web application that displays real-time air quality data and weather forecasts for cities worldwide.',
      tags: ['React', 'JavaScript', 'Zustand', 'Tailwind CSS'],
      image: 'image/projects/aqi-project.gif',
      github: 'https://github.com/William-WYL/aqi-app',
      demo: 'https://aqi-app-gamma.vercel.app/',
    },
    {
      title: 'Game Hub',
      description: 'Game Hub is a practice project focused on mastering React and TypeScript integration, along with modern web development tools.',
      tags: ['React', 'TypeScript', 'Chakra UI', 'Axios'],
      image: 'image/projects/gamehub-project.gif',
      github: 'https://github.com/William-WYL/game-hub',
      demo: 'https://game-hub-lilac-three-69.vercel.app/'
    },
    {
      title: 'Fuji Sushi',
      description: 'Fuji Sushi is a practice project that serves as a responsive sushi restaurant website with essential features like interactive menus, form validation, and smooth UI animations.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      image: '../public/image/projects/fujisushi-project.gif',
      github: 'https://github.com/William-WYL/JS-FujiShushi',
      demo: 'https://william-wyl.github.io/JS-FujiShushi/',
    },
    {
      title: 'To-do List',
      description: "React Todo List is a functional task management application with core features like adding, editing, and deleting todos, along with smooth UI interactions powered by React's modern hooks system.",
      tags: ['React', 'JavaScript', 'UUID', 'Font Awesome'],
      image: '../public/image/projects/todolist-project.gif',
      github: 'https://github.com/William-WYL/react-todolist-app',
      demo: 'https://todolist-app-eight-nu.vercel.app/',
    },
    // {
    //   title: '',
    //   description: '',
    //   tags: ['React', 'Node.js', 'MongoDB'],
    //   image: '/api/placeholder/600/400',
    //   github: '#',
    //   demo: '#',
    // },
  ];

  const displayedProjects = showAllProjects ? allProjects : allProjects.slice(0, 3);

  const handleViewMore = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-purple-600 dark:text-purple-400">
            My Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects. Each one demonstrates different skills
            and technologies that I've mastered throughout my journey as a developer.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          key={showAllProjects ? 'all-projects' : 'featured-projects'}
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              layout
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex space-x-4">
                    <a
                      href={project.demo}
                      // New tag
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors duration-300"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="h-5 w-5 text-purple-900" />
                    </a>
                    <a
                      href={project.github}
                      // New tag
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors duration-300"
                      aria-label="View GitHub Repository"
                    >
                      <Github className="h-5 w-5 text-purple-900" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-12 text-center"
        >
          <motion.button
            onClick={handleViewMore}
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAllProjects ? 'Show Less Projects' : 'View More Projects'}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;