import NextLink from 'next/link';
import { CopyrightIcon, NextjsIcon, TailwindIcon, VercelIcon } from '../Icons';

const Footer = () => {
  return (
    <footer className="dark:bg-black dark:text-light border-pink-600 sticky flex flex-col items-center justify-center w-full p-4 text-base text-center bg-white border-t-[1px]">
      <h5>
        Copyright <CopyrightIcon className="inline-block mb-1" />{' '}
        {new Date().getFullYear()},{' '}
        <NextLink href="/">
          <a className="hover:underline font-medium text-pink-600">
            TheSkinnyCoder
          </a>
        </NextLink>
        . All Right Reserved
      </h5>
      <h5 className="flex flex-col items-center justify-center">
        <span>This site is built with</span>
        <div className="flex space-x-2">
          <a
            href="https://nextjs.org"
            className="hover:-translate-y-1 transition duration-300 ease-in-out transform"
          >
            <NextjsIcon className="w-6 h-6" />
          </a>
          <a
            href="https://tailwindcss.com/"
            className="hover:-translate-y-1 transition duration-300 ease-in-out transform"
          >
            <TailwindIcon className="w-6 h-6 text-[#38B2AC]" />
          </a>
          <a
            href="https://vercel.com/"
            className="hover:-translate-y-1 transition duration-300 ease-in-out transform"
          >
            <VercelIcon className="w-6 h-6" />
          </a>
        </div>
      </h5>
    </footer>
  );
};

export default Footer;
