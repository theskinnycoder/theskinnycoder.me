import { ActiveLink, DarkModeSwitch } from '@/components/micros';
import { useProgressBar, useRouter, useSideBar } from '@/hooks';
import { HamburgerIcon } from '@/icons';
import { isAnArticle } from '@/utils/helperFunctions';
import { navLinks } from '../links';

const Header = () => {
  const { path } = useRouter();
  const { toggleSideBar } = useSideBar();
  const { barLength } = useProgressBar();

  return (
    <header className="dark:bg-transparent dark:text-white md:p-5 dark:backdrop-filter dark:backdrop-blur-3xl dark:backdrop-saturate-50 sticky inset-x-0 top-0 z-10 p-4 font-medium text-black bg-white shadow-2xl">
      {isAnArticle(path) && (
        <div
          className="max-w-[100vw] fixed inset-x-0 h-1 rounded-sm bg-white bg-gradient-to-r from-brand via-brand-divide to-brand top-0"
          style={{
            width: `${barLength}%`,
          }}
        ></div>
      )}
      <div className="flex items-center justify-between max-w-5xl px-4 mx-auto">
        <button
          className="focus:outline-none sm:hidden outline-none"
          onClick={toggleSideBar}
        >
          <HamburgerIcon className="sm:w-8 sm:h-8 w-6 h-6" />
        </button>

        <DarkModeSwitch />

        <ul className="sm:flex md:text-md lg:text-lg xl:text-xl items-center justify-center hidden pl-10 space-x-6 text-base">
          {navLinks?.map((link, idx) => (
            <li key={idx} className="group">
              <ActiveLink
                href={link.href}
                className="text-brand-contrast-text"
                activeClassName="bg-brand rounded text-brand-contrast-text"
              >
                <a className="px-2 py-1.5">
                  <span className="relative">
                    {link.name}
                    <span className="-bottom-1 group-hover:scale-x-100 bg-brand absolute left-0 w-full h-1 transition duration-300 ease-in-out transform scale-x-0 rounded"></span>
                  </span>
                </a>
              </ActiveLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
