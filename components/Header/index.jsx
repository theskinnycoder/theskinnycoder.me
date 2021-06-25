import NextLink from 'next/link';
import { FaMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import useStore from '../../utils/store';
import ActiveLink from '../ActiveLink';
import links from '../navLinks';

const Header = () => {
  const sidebar = useStore((state) => state.sidebar);
  const darkmode = useStore((state) => state.darkmode);
  const toggleSidebar = useStore((state) => state.toggleSidebar);
  const toggleDarkmode = useStore((state) => state.toggleDarkmode);

  return (
    <header className='dark:bg-black dark:text-white dark:border-b-[1px] dark:border-pink-600 fixed inset-x-0 top-0 z-10 p-4 font-semibold text-black bg-white shadow-2xl'>
      <div className='flex items-center justify-between max-w-5xl px-4 mx-auto'>
        <h3 className='md:text-2xl text-xl'>
          <NextLink href='/'>
            <a className='font-bold text-pink-600 uppercase'>TSC</a>
          </NextLink>
        </h3>
        <div className='flex items-center'>
          <button
            className='dark:text-black focus:outline-none hover:bg-pink-400 p-3 bg-pink-300 rounded-md outline-none'
            onClick={toggleDarkmode}
          >
            {darkmode ? <FiSun className='w-4 h-4' /> : <FaMoon className='w-4 h-4' />}
          </button>

          <ul className='sm:flex md:text-md lg:text-lg xl:text-xl items-center justify-center hidden pl-10 ml-auto space-x-6 text-base'>
            {links?.map((link) => (
              <li key={link.id} className='group'>
                <ActiveLink href={link.href} activeClassName='bg-pink-600 text-light rounded'>
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
            onClick={toggleSidebar}
          >
            {sidebar ? (
              <HiX className='sm:w-8 sm:h-8 w-6 h-6' />
            ) : (
              <HiMenuAlt3 className='sm:w-8 sm:h-8 w-6 h-6' />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
