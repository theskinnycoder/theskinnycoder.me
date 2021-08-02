import { motion } from 'framer-motion';
import TypeWriter from 'react-typing-effect';

const HeroSection = () => {
  return (
    <section className="dark:bg-black dark:text-white flex flex-col items-center justify-center min-h-screen p-2 pb-20 mx-auto text-center">
      <motion.h1
        className="md:text-8xl text-7xl uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        The <span className="font-bold text-pink-600">Skinny</span> Coder
      </motion.h1>
      <h3 className="md:text-5xl mt-12 text-3xl">
        <TypeWriter
          cursorClassName="text-pink-600"
          text={['Developer', 'YouTuber', 'Tutor']}
          eraseDelay={700}
          eraseSpeed={110}
          typingDelay={250}
          speed={110}
        />
      </h3>
    </section>
  );
};

export default HeroSection;
