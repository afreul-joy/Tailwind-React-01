import React from "react";

const navLink = ({ route }) => {
  return (
    <>
      <li className="mr-2">
       <a href={route.path}> {route.name} </a>{" "}
      </li>
    </>
  );
};

export default navLink;


