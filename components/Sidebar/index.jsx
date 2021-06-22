import useClickOutside from '../../hooks/useClickOutside';
import useStore from '../../utils/store';
import ActiveLink from '../ActiveLink';
import links from '../navLinks';

const Sidebar = () => {
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
      } sm:hidden fixed inset-y-0 flex items-center justify-center w-3/4 min-h-screen text-light bg-dark shadow-2xl z-20 transition transform duration-300 ease-in-out dark:bg-light dark:text-dark`}
    >
      <ul className='flex flex-col space-y-10 font-medium tracking-wide'>
        {links?.map((link) => (
          <li key={link.id} className='text-2xl uppercase'>
            <ActiveLink href={link.href} activeClassName='underline'>
              <a onClick={toggleSidebar}>{link.name}</a>
            </ActiveLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
