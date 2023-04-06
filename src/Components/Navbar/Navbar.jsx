import React, { useState } from "react";
import NavLink from "./NavLink/NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Products", path: "/products" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "About", path: "/about" },
  ];

  return (
    <div className="div">
      <nav className="bg-purple-300">
        {/* -----logic-----{ open ? 'close- icon' : 'open-icon' }  ---- logic----  */}

        <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden  ">
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </div>

        <ul
          className={`bg-purple-300 w-full md:flex text-center justify-center absolute md:static duration-500 ease-in  ${
            open ? "top-6" : "top-[-120px]"
          } `}
        >
          {routes.map((route) => (
            <NavLink key={route.id} route={route}></NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default navbar;
