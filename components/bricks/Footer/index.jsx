import { ThemeChooser } from '@/components/micros';
import {
  CopyrightIcon,
  GraphQLIcon,
  NextjsIcon,
  TailwindIcon,
  VercelIcon,
} from '@/icons';
import NextLink from 'next/link';

const Footer = () => {
  return (
    <footer className="dark:bg-black dark:text-brand-light dark:border-gray-800 w-full p-4 text-base text-center bg-white border-t-[1px] border-brand-divide">
      <div className="justify-evenly flex items-center max-w-5xl mx-auto">
        <div className="sm:block hidden">
          <ThemeChooser />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h5>
            Copyright <CopyrightIcon className="inline-block mb-1" />{' '}
            {new Date().getFullYear()},{' '}
            <NextLink href="/">
              <a className="hover:underline text-brand font-medium">
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
                href="https://graphql.org/"
                className="hover:-translate-y-1 transition duration-300 ease-in-out transform"
              >
                <GraphQLIcon className="w-6 h-6 text-[#E00098]" />
              </a>
              <a
                href="https://vercel.com/"
                className="hover:-translate-y-1 transition duration-300 ease-in-out transform"
              >
                <VercelIcon className="w-6 h-6" />
              </a>
            </div>
          </h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
