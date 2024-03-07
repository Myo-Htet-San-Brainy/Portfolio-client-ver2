import React from "react";

const NavLink = ({ text, link }) => {
  return (
    <div className="py-8 hover:shadow-bottom  transition-all duration-200">
      <a
        href={link}
        className="hover:text-blue-400 transition-all duration-200 "
      >
        {text}
      </a>
    </div>
  );
};

export default NavLink;
