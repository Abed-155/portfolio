import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

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

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="h-full">
        <header className="bg-gray-700 md:py-5 py-3">
          <nav className="w-11/12 m-auto flex justify-between items-center">
            <div>
              <Link
                className="text-white text-xl md:text-2xl flex gap-2"
                to="/"
              >
                <img className="w-8 rounded-full" src={logo} alt="logo" />
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
            <div
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <RxHamburgerMenu className="text-white text-2xl cursor-pointer" />
            </div>
          </nav>
        </header>
        <main className="w-11/12 m-auto">{children}</main>
      </div>
    </>
  );
}
