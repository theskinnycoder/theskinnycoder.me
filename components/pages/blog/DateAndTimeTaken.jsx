import { formatDistanceToNow } from 'date-fns';
import { AnimatePresence, motion } from 'framer-motion';
import readingTime from 'reading-time';

const DateAndTimeTaken = ({ updatedAt, content }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.span
        className="md:text-md inline-block text-sm font-medium text-gray-500"
        initial={{
          x: '-100vw',
        }}
        animate={{
          x: 0,
        }}
        exit={{
          x: '-100vw',
        }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
      >
        Published{' '}
        {formatDistanceToNow(new Date(updatedAt), {
          addSuffix: true,
          includeSeconds: true,
        })}
        {' . '}
        {readingTime(content).text}
      </motion.span>
    </AnimatePresence>
  );
};

export default DateAndTimeTaken;
