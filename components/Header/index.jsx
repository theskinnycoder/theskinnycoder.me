import Link from 'next/link';
import { FaMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import { HiX } from 'react-icons/hi';
import { RiMenu3Fill } from 'react-icons/ri';
import useStore from '../../utils/store';
import ActiveLink from '../ActiveLink';
import links from '../navLinks';

const Header = () => {
  const sidebar = useStore((state) => state.sidebar);
  const darkmode = useStore((state) => state.darkmode);
  const toggleSidebar = useStore((state) => state.toggleSidebar);
  const toggleDarkmode = useStore((state) => state.toggleDarkmode);

  return (
    <header className='dark:bg-dark dark:text-light dark:border-b-[1px] dark:border-light fixed inset-x-0 top-0 z-10 p-4 font-semibold text-black bg-white shadow-2xl'>
      <div className='flex items-center justify-between max-w-5xl px-4 mx-auto'>
        <h3 className='md:text-xl text-lg'>
          <Link href='/'>
            <a className='font-bold uppercase'>TSC</a>
          </Link>
        </h3>
        <div className='flex items-center'>
          <button
            className='focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-300 p-3 bg-gray-200 rounded-md outline-none'
            onClick={toggleDarkmode}
          >
            {darkmode ? <FiSun className='w-4 h-4' /> : <FaMoon className='w-4 h-4' />}
          </button>

          <ul className='sm:flex md:text-sm lg:text-base xl:text-md items-center justify-center hidden pl-10 ml-auto space-x-6 text-xs'>
            {links?.map((link) => (
              <li key={link.id} className='group'>
                <ActiveLink
                  href={link.href}
                  activeClassName='bg-dark dark:bg-white text-light dark:text-black rounded'
                >
                  <a className='p-2'>
                    <span className='relative'>
                      {link.name}
                      <span className='-bottom-1 group-hover:scale-x-100 dark:bg-white bg-dark absolute left-0 w-full h-1 transition duration-300 ease-in-out transform scale-x-0 rounded'></span>
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
              <RiMenu3Fill className='sm:w-8 sm:h-8 w-6 h-6' />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
