import { motion, type Variants } from 'framer-motion';

interface WelcomePageProps {
  loaderVariants: Variants;
}

const Welcompage = ({ loaderVariants }: WelcomePageProps) => {
  return (
    <><motion.div
      key="loader"
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 purple-theme:bg-purple-900"
      variants={loaderVariants}
      initial="initial"
      exit="exit"
    >
      <div className="text-center">
        <div className="relative mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold"
          >
            <span className="text-purple-600 text-3xl">Welcome</span>
          </motion.div>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="text-2xl font-bold text-gray-900 dark:text-white purple-theme:text-white"
        >
          I am <span className="text-purple-600">Wei Wang</span>, a Full Stack Web Developer.
        </motion.h1>
      </div>
    </motion.div></>
  );
};

export default Welcompage;