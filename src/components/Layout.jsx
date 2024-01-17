/* eslint-disable react/prop-types */
import { useState } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

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
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="h-full">
        <header className="bg-slate-900 md:py-5 py-3">
          {isOpen ? (
            <MobileNav navItems={navItems} onClose={handleClose} />
          ) : (
            <Nav navItems={navItems} onIsOpen={handleIsOpen} />
          )}
        </header>
        <main className="w-11/12 m-auto">{children}</main>
      </div>
    </>
  );
}
