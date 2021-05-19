import Link from "next/link"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import useStore from "../../utils/store"
import ActiveLink from "../ActiveLink"
import links from "../navLinks"

const Header = () => {
  const sidebar = useStore(state => state.sidebar)
  const toggleSidebar = useStore(state => state.toggleSidebar)

  return (
    <header className="lg:px-8 fixed inset-x-0 top-0 z-10 flex items-center justify-between px-4 py-6 font-semibold bg-white shadow-2xl">
      <h3 className="lg:text-4xl text-2xl">
        <Link href="/">
          <a className="font-bold uppercase">TSC</a>
        </Link>
      </h3>
      <ul className="md:flex md:text-lg lg:text-xl xl:text-2xl items-center justify-center hidden ml-auto space-x-10 text-base uppercase">
        {links?.map(link => (
          <li key={link.id} className="group">
            <ActiveLink
              href={link.href}
              activeClassName="bg-tuna-900 text-white rounded"
            >
              <a className="p-2">
                <span className="relative">
                  {link.name}
                  <span className="-bottom-1 group-hover:scale-x-100 bg-tuna-900 absolute left-0 w-full h-1 transition duration-300 ease-in-out transform scale-x-0 rounded"></span>
                </span>
              </a>
            </ActiveLink>
          </li>
        ))}
      </ul>
      <button
        className="focus:outline-none outline-none"
        onClick={toggleSidebar}
      >
        {sidebar ? (
          <HiX className="md:hidden w-8 h-8" />
        ) : (
          <HiMenuAlt3 className="md:hidden w-8 h-8" />
        )}
      </button>
    </header>
  )
}

export default Header
