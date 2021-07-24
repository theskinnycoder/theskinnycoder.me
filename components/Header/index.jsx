import useSideBar from '@hooks/useSideBar';
import NextLink from 'next/link';
import ActiveLink from '../ActiveLink';
import { CrossIcon, HamburgerIcon } from '../Icons';
import { navLinks } from '../links';
import ThemeSwitch from '../Switch';

export default function Header() {
  const { sideBar, togglesideBar } = useSideBar();

  return (
    <header className='dark:bg-transparent dark:text-white dark:border-b-[1px] dark:border-pink-600 inset-x-0 top-0 z-10 p-4 md:p-5 font-semibold text-black shadow-2xl sticky bg-white dark:backdrop-filter dark:backdrop-blur-3xl dark:backdrop-saturate-50'>
      <div className='flex items-center justify-between max-w-5xl px-4 mx-auto'>
        <h3 className='md:text-2xl text-xl'>
          <NextLink href='/'>
            <a className='font-bold text-pink-600 uppercase'>TSC</a>
          </NextLink>
        </h3>
        <div className='flex items-center'>
          <ThemeSwitch />

          <ul className='sm:flex md:text-md lg:text-lg xl:text-xl items-center justify-center hidden pl-10 ml-auto space-x-6 text-base'>
            {navLinks?.map((link, idx) => (
              <li key={idx} className='group'>
                <ActiveLink
                  href={link.href}
                  activeClassName='bg-pink-600 text-light rounded'
                >
                  <a className='p-2'>
                    <span className='relative'>
                      {link.name}
                      <span className='-bottom-1 group-hover:scale-x-100 absolute left-0 w-full h-1 transition duration-300 ease-in-out transform scale-x-0 bg-pink-600 rounded'></span>
                    </span>
                  </a>
                </ActiveLink>
              </li>
            ))}
          </ul>
          <button
            className='focus:outline-none sm:hidden ml-3.5 outline-none'
            onClick={togglesideBar}
          >
            {sideBar ? (
              <CrossIcon className='sm:w-8 sm:h-8 w-6 h-6' />
            ) : (
              <HamburgerIcon className='sm:w-8 sm:h-8 w-6 h-6' />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
