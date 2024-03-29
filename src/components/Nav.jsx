/* eslint-disable react/prop-types */
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Nav({ navItems, onIsOpen }) {
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
        <button onClick={onIsOpen}>
          <FaBars className="text-white text-xl cursor-pointer" />
        </button>
      </div>
    </nav>
  );
}
