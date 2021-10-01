import { AnimatePresence, motion } from 'framer-motion';
import NextImage from 'next/image';
import {
  GithubIcon,
  InstagramIcon,
  LinkedinFilledIcon,
  TwitterFilledIcon,
  YoutubeIcon,
} from '../Icons';

const Intro = () => {
  return (
    <section
      className="dark:bg-black dark:text-light lg:min-h-screen flex flex-col items-center justify-center min-h-full px-3 py-5 space-y-10 text-left"
      id="about"
    >
      <h1 className="md:text-6xl sm:text-5xl text-4xl text-center">
        About <span className="font-bold text-pink-600">Me</span>
      </h1>
      <div className="flex items-center justify-between space-x-5">
        <section className="md:text-left md:w-3/5 flex flex-col justify-center p-2 space-y-4 font-normal text-center">
          <h1 className="md:text-4xl text-2xl">
            Hello, There! This is{' '}
            <span className="font-bold text-pink-600">Rahul SriRam</span>.
          </h1>
          <p className="md:text-xl text-base">
            I&apos;m a Fullstack Web Developer who&apos;s addicted to Bournvita
            & my laptop. I live by the motto{' '}
            <span className="font-semibold text-pink-600">
              teach right if it isn&apos;t being taught right
            </span>
            , so I’m excited to share the things I learn with you!
          </p>
          <div className="lg:justify-start flex items-center justify-center space-x-5">
            <a
              href="https://youtube.com/c/TheSkinnyCoder"
              target="_blank"
              className="hover:-translate-y-1 transition duration-300 ease-in-out transform"
              rel="noreferrer"
            >
              <YoutubeIcon className="w-8 h-8 md:w-16 md:h-16 text-[#FF0000] dark:text-[#dd3939]" />
            </a>
            <a
              href="https://twitter.com/theskinnycoder"
              target="_blank"
              className="hover:-translate-y-1 transition duration-300 ease-in-out transform"
              rel="noreferrer"
            >
              <TwitterFilledIcon className="text-[#49a1eb] dark:text-[#0d8af0] md:w-14 md:h-14 w-7 h-7" />
            </a>
            <a
              href="https://www.instagram.com/_rahulsriram_/"
              target="_blank"
              className="hover:-translate-y-1 transition duration-300 ease-in-out transform"
              rel="noreferrer"
            >
              <InstagramIcon className="md:w-14 md:h-14 w-7 h-7 text-[#9D09A6] dark:text-[#cf40d6]" />
            </a>
            <a
              href="https://github.com/theskinnycoder"
              target="_blank"
              className="hover:-translate-y-1 transition duration-300 ease-in-out transform"
              rel="noreferrer"
            >
              <GithubIcon className="md:w-14 md:h-14 w-[1.78rem] h-[1.78rem]" />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-sriram-50a519173/"
              target="_blank"
              className="hover:-translate-y-1 transition duration-300 ease-in-out transform"
              rel="noreferrer"
            >
              <LinkedinFilledIcon className="md:w-14 md:h-14 w-[1.78rem] h-[1.78rem] text-[#0A66C2] dark:text-[#429cf7]" />
            </a>
          </div>
        </section>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className="md:flex items-center justify-center hidden w-1/4 p-1 bg-pink-600 rounded-full"
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw' }}
            transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
          >
            <NextImage
              src="https://avatars.githubusercontent.com/u/64031854?v=4"
              alt="Me"
              width="250"
              height="250"
              className="rounded-full"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Intro;
