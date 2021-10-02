import useProgressBar from '@/hooks/useProgressBar';
import useRouter from '@/hooks/useRouter';
import useSideBar from '@/hooks/useSideBar';
import { isAnArticle } from '@/utils/helperFunctions';
import NextLink from 'next/link';
import ActiveLink from '../ActiveLink';
import { CrossIcon, HamburgerIcon } from '../Icons';
import { navLinks } from '../links';
import ThemeSwitch from '../Switch';

const Header = () => {
  const { path } = useRouter();
  const { sideBar, togglesideBar } = useSideBar();
  const { barLength } = useProgressBar();

  return (
    <header className="dark:bg-black dark:text-white dark:border-b-[1px] dark:border-gray-700 inset-x-0 top-0 z-10 p-4 md:p-5 font-semibold text-black shadow-2xl sticky bg-white standalone:h-24">
      {isAnArticle(path) && (
        <div
          className="max-w-[100vw] fixed inset-x-0 h-1 rounded-sm bg-white bg-gradient-to-r from-brand via-brand-divide to-brand top-0"
          style={{
            width: `${barLength}%`,
          }}
        ></div>
      )}
      <div className="flex items-center justify-between max-w-5xl px-4 mx-auto">
        <h3 className="md:text-2xl text-xl">
          <NextLink href="/">
            <a className="text-brand font-bold uppercase">TSC</a>
          </NextLink>
        </h3>
        <div className="flex items-center">
          <ThemeSwitch />

          <ul className="sm:flex md:text-md lg:text-lg xl:text-xl items-center justify-center hidden pl-10 ml-auto space-x-6 text-base">
            {navLinks?.map((link, idx) => (
              <li key={idx} className="group">
                <ActiveLink
                  href={link.href}
                  activeClassName="bg-brand text-black rounded"
                >
                  <a className="p-2">
                    <span className="relative">
                      {link.name}
                      <span className="-bottom-1 group-hover:scale-x-100 bg-brand absolute left-0 w-full h-1 transition duration-300 ease-in-out transform scale-x-0 rounded"></span>
                    </span>
                  </a>
                </ActiveLink>
              </li>
            ))}
          </ul>
          <button
            className="focus:outline-none sm:hidden ml-3.5 outline-none"
            onClick={togglesideBar}
          >
            {sideBar ? (
              <CrossIcon className="sm:w-8 sm:h-8 w-6 h-6" />
            ) : (
              <HamburgerIcon className="sm:w-8 sm:h-8 w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
