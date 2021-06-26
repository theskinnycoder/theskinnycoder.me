import Link from 'next/link';
import { FaRegCopyright } from 'react-icons/fa';
import { IoLogoVercel } from 'react-icons/io5';
import { SiNextDotJs, SiTailwindcss } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className='dark:bg-black dark:text-light border-pink-600 sticky flex flex-col items-center justify-center w-full p-4 text-base text-center bg-white border-t-[1px]'>
      <h5>
        Copyright <FaRegCopyright className='inline-block mb-1' /> {new Date().getFullYear()},{' '}
        <Link href='/'>
          <a className='hover:underline font-medium text-pink-600'>TheSkinnyCoder</a>
        </Link>
        . All Right Reserved
      </h5>
      <h5 className='flex flex-col items-center justify-center'>
        <span>This site is built with</span>
        <div className='flex space-x-2'>
          <a
            href='https://nextjs.org'
            className='hover:-translate-y-1 transition duration-300 ease-in-out transform'
          >
            <SiNextDotJs className='w-6 h-6' />
          </a>
          <a
            href='https://tailwindcss.com/'
            className='hover:-translate-y-1 transition duration-300 ease-in-out transform'
          >
            <SiTailwindcss className='w-6 h-6 text-[#38B2AC]' />
          </a>
          <a
            href='https://vercel.com/'
            className='hover:-translate-y-1 transition duration-300 ease-in-out transform'
          >
            <IoLogoVercel className='w-6 h-6' />
          </a>
        </div>
      </h5>
    </footer>
  );
};

export default Footer;
