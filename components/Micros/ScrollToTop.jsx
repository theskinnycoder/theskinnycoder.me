import useScrollToTop from '@/hooks/useScrollToTop';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpIcon } from '../Icons';

const ScrollToTop = () => {
  const { makeScroll, showScroll } = useScrollToTop();

  return (
    <AnimatePresence>
      {showScroll && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          exit={{ y: '100vh' }}
          transition={{ duration: 0.3 }}
          className="hidden sm:block bottom-5 xl:bottom-16 right-3.5 md:right-5 xl:right-20 fixed z-20 cursor-pointer bg-pink-600 rounded-full p-1.5"
          onClick={makeScroll}
        >
          <ArrowUpIcon className="xl:w-12 xl:h-12 w-7 h-7 dark:text-black text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
