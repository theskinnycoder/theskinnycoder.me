import useStore from "../../utils/store"
import ActiveLink from "../ActiveLink"
import links from "../navLinks"

const Sidebar = () => {
  const sidebar = useStore(state => state.sidebar)
  const toggleSidebar = useStore(state => state.toggleSidebar)

  return (
    <aside
      className={`${
        sidebar ? "" : "-translate-x-full"
      } md:hidden fixed inset-y-0 flex items-center justify-center w-3/4 h-screen text-white bg-black shadow-2xl z-20 transition transform duration-300 ease-in-out`}
    >
      <ul className="flex flex-col items-center justify-center space-y-10">
        {links?.map(link => (
          <li key={link.id} className="group text-3xl uppercase">
            <ActiveLink href={link.href} activeClassName="underline">
              <a onClick={toggleSidebar}>{link.name}</a>
            </ActiveLink>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
