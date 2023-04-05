import React from "react";
import NavLink from "./NavLink/NavLink"
const navbar = () => {
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Products", path: "/products" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "About", path: "/about" },
  ];

  return (
    <nav>
    
      <ul>
        {
            routes.map(route =>  <NavLink key={route.id} route={route}></NavLink> )
        }
       
  
      </ul>
    </nav> 
  );
};

export default navbar;
