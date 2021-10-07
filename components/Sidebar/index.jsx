import useClickOutside from '@/hooks/useClickOutside';
import useSideBar from '@/hooks/useSideBar';
import ActiveLink from '../ActiveLink';
import { allNavLinks } from '../links';
import ThemeChooser from '../Micros/ThemeChooser';

const SideBar = () => {
  const { sideBar, toggleSideBar } = useSideBar();

  const domNode = useClickOutside(() => {
    sideBar && toggleSideBar(false);
  });

  return (
    <aside
      ref={domNode}
      className={`${
        sideBar ? '' : '-translate-x-full'
      } sm:hidden fixed inset-y-0 w-3/4 min-h-screen text-white bg-black shadow-2xl z-20 transition transform duration-500 ease-in-out dark:bg-brand-light dark:text-black border-brand border-r-8 flex flex-col justify-evenly items-center`}
    >
      <ThemeChooser />
      <ul className="flex flex-col justify-center p-5 space-y-10 font-medium tracking-wide">
        {allNavLinks?.map((link, idx) => (
          <li key={idx} className="text-2xl uppercase">
            <ActiveLink
              href={link.href}
              activeClassName="dark:border-black border-l-8 border-white bg-brand text-black"
            >
              <a onClick={toggleSideBar} className="p-1.5">
                {link.name}
              </a>
            </ActiveLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
