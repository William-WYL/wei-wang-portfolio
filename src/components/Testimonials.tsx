import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
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

  const testimonials = [
    {
      name: 'Alex Johnson',
      position: 'CTO at TechStart',
      quote: 'Working with this developer was a game-changer for our project. Their attention to detail and ability to translate complex requirements into elegant solutions exceeded our expectations.',
      image: '/api/placeholder/80/80',
    },
    {
      name: 'Sarah Williams',
      position: 'Product Manager at DesignHub',
      quote: 'I was impressed by how quickly they grasped our vision and turned it into reality. Their technical skills are matched by their excellent communication and project management abilities.',
      image: '/api/placeholder/80/80',
    },
    {
      name: 'Michael Chen',
      position: 'Founder of AppLaunch',
      quote: 'We hired them to redesign our user interface, and the results were outstanding. Not only did they deliver a beautiful design, but they also improved performance and made the code more maintainable.',
      image: '/api/placeholder/80/80',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-purple-600 dark:text-purple-400">
            What Clients Say
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I've had the pleasure of working with amazing clients who have trusted me with their projects.
            Here's what some of them have to say about our collaboration.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <svg className="h-8 w-8 text-purple-500 dark:text-purple-400 mb-2" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8v6a6 6 0 01-6 6H4v4h4a10 10 0 0010-10V8h-8zm18 0v6a6 6 0 01-6 6h0v4h4a10 10 0 0010-10V8h-8z" />
                  </svg>
                  <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.quote}"</p>
                </div>
                <div className="mt-auto flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-4 border-2 border-purple-500"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-16 flex justify-center items-center gap-8 flex-wrap"
        >
          <motion.h3 variants={itemVariants} className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Trusted by companies worldwide
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {[1, 2, 3, 4].map((_, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="h-12 w-32 bg-white dark:bg-gray-700 rounded flex items-center justify-center p-2"
              >
                <div className="text-gray-400 font-semibold">LOGO {index + 1}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;