import useClickOutside from '../../hooks/useClickOutside';
import { useStore } from '../../utils';
import ActiveLink from '../ActiveLink';
import { allNavLinks } from '../links';

export default function Sidebar() {
  const sidebar = useStore((state) => state.sidebar);
  const toggleSidebar = useStore((state) => state.toggleSidebar);

  const domNode = useClickOutside(() => {
    sidebar && toggleSidebar(false);
  });

  return (
    <aside
      ref={domNode}
      className={`${
        sidebar ? '' : '-translate-x-full'
      } sm:hidden fixed inset-y-0 flex items-center justify-center w-3/4 min-h-screen text-white bg-black shadow-2xl z-20 transition transform duration-500 ease-in-out dark:bg-pink-100 dark:text-black border-pink-600 border-r-8`}
    >
      <ul className='flex flex-col space-y-10 font-medium tracking-wide'>
        {allNavLinks?.map((link, idx) => (
          <li key={idx} className='text-2xl uppercase'>
            <ActiveLink
              href={link.href}
              activeClassName='dark:border-black border-l-8 border-white bg-pink-600 text-white'
            >
              <a onClick={toggleSidebar} className='p-1.5'>
                {link.name}
              </a>
            </ActiveLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
