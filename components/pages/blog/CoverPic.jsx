import { AnimatePresence, motion } from 'framer-motion';
import NextImage from 'next/image';

const CoverPic = ({ pic }) => {
  const { url, height, width, fileName } = pic;
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        layoutId={fileName}
        className="pt-5"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
      >
        <NextImage src={url} alt={fileName} width={width} height={height} />
      </motion.div>
    </AnimatePresence>
  );
};

export default CoverPic;
