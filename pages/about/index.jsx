import { Intro, Timeline, Uses } from '@/components/About';
import { PageSEO } from '@/components/SEO';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <PageSEO
        name="about"
        description="Here is what tools I use, my developer timeline, my scoial media handles etc."
      />
      <motion.div
        className="dark:bg-black flex-col bg-white divide-y divide-pink-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Intro />
        <Uses />
        <Timeline />
      </motion.div>
    </>
  );
};

export default About;
