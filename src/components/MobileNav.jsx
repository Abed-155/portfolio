/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function MobileNav({ navItems, onClose }) {
  return (
    <nav className="w-11/12 m-auto flex justify-between items-center">
      <div>
        <Link className="text-white text-xl md:text-2xl flex gap-2" to="/">
          ABED
        </Link>
      </div>
      <div className="md:hidden mt-9 fixed top-4 left-0 w-full h-full bg-slate-900 ">
        <ul className="flex gap-4 flex-col justify-center items-center pt-4 border-t border-slate-400">
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
        <button onClick={onClose}>
          <FaTimes className="text-white text-xl cursor-pointer" />
        </button>
      </div>
    </nav>
  );
}
