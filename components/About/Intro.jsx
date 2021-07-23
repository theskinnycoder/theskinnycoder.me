import NextImage from 'next/image';
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Intro() {
  return (
    <section
      className='dark:bg-black dark:text-light flex flex-col items-center justify-center min-h-screen space-y-10 text-left'
      id='about'
    >
      <h1 className='md:text-6xl sm:text-5xl text-4xl text-center'>
        About <span className='font-bold text-pink-600'>Me</span>
      </h1>
      <div className='flex items-center justify-between space-x-5'>
        <section className='md:text-left md:w-3/5 flex flex-col justify-center p-2 space-y-4 font-normal text-center'>
          <h1 className='md:text-4xl text-2xl'>
            Hello, There! This is{' '}
            <span className='font-bold text-pink-600'>Rahul SriRam</span>.
          </h1>
          <p className='md:text-xl text-base'>
            I'm a Fullstack Web Developer who's addicted to Bournvita & my
            laptop. I live by the motto{' '}
            <span className='font-semibold text-pink-600'>
              teach right if it isn't being taught right
            </span>
            , so I’m excited to share the things I learn with you!
          </p>
          <div className='lg:justify-start flex items-center justify-center space-x-5'>
            <a
              href='https://youtube.com/c/TheSkinnyCoder'
              target='_blank'
              className='hover:-translate-y-1 transition duration-300 ease-in-out transform'
            >
              <FaYoutube className='w-8 h-8 md:w-16 md:h-16 text-[#FF0000] dark:text-[#dd3939]' />
            </a>
            <a
              href='https://twitter.com/theskinnycoder'
              target='_blank'
              className='hover:-translate-y-1 transition duration-300 ease-in-out transform'
            >
              <FaTwitter className='text-[#49a1eb] dark:text-[#0d8af0] md:w-14 md:h-14 w-7 h-7' />
            </a>
            <a
              href='https://www.instagram.com/_theskinnycoder_/'
              target='_blank'
              className='hover:-translate-y-1 transition duration-300 ease-in-out transform'
            >
              <FaInstagram className='md:w-14 md:h-14 w-7 h-7 text-[#9D09A6] dark:text-[#cf40d6]' />
            </a>
            <a
              href='https://github.com/theskinnycoder'
              target='_blank'
              className='hover:-translate-y-1 transition duration-300 ease-in-out transform'
            >
              <FaGithub className='md:w-14 md:h-14 w-[1.78rem] h-[1.78rem]' />
            </a>
          </div>
        </section>
        <div className='md:block hidden w-1/4'>
          <NextImage
            className='rounded-full'
            src='https://avatars.githubusercontent.com/u/64031854?v=4'
            alt='Me'
            width='250'
            height='250'
          />
        </div>
      </div>
    </section>
  );
}
