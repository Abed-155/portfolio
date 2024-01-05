import { NavLink, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const navItems = [
  {
    id: "123",
    title: "Home",
    url: "/",
  },
  {
    id: "124",
    title: "About",
    url: "/about",
  },
  {
    id: "125",
    title: "Blogs",
    url: "/blogs",
  },
  {
    id: "126",
    title: "Contact",
    url: "/contact",
  },
  {
    id: "127",
    title: "Projects",
    url: "/projects",
  },
];

export default function Nav() {
  return (
    <nav className="w-11/12 m-auto flex justify-between items-center">
      <div>
        <Link className="text-white text-xl md:text-2xl flex gap-2" to="/">
          ABED
        </Link>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-cyan-500 text-lg"
                    : "text-white hover:text-cyan-500 transition text-lg"
                }
                to={item.url}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden">
        <FaBars className="text-white text-xl cursor-pointer" />
      </div>
    </nav>
  );
}
