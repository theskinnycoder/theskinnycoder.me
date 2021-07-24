import useClickOutside from '@hooks/useClickOutside';
import useSideBar from '@hooks/useSideBar';
import ActiveLink from '../ActiveLink';
import { allNavLinks } from '../links';

export default function SideBar() {
  const { sideBar, togglesideBar } = useSideBar();

  const domNode = useClickOutside(() => {
    sideBar && togglesideBar(false);
  });

  return (
    <aside
      ref={domNode}
      className={`${
        sideBar ? '' : '-translate-x-full'
      } sm:hidden fixed inset-y-0 flex items-center justify-center w-3/4 min-h-screen text-white bg-black shadow-2xl z-20 transition transform duration-500 ease-in-out dark:bg-pink-100 dark:text-black border-pink-600 border-r-8`}
    >
      <ul className='flex flex-col space-y-10 font-medium tracking-wide'>
        {allNavLinks?.map((link, idx) => (
          <li key={idx} className='text-2xl uppercase'>
            <ActiveLink
              href={link.href}
              activeClassName='dark:border-black border-l-8 border-white bg-pink-600 text-white'
            >
              <a onClick={togglesideBar} className='p-1.5'>
                {link.name}
              </a>
            </ActiveLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
