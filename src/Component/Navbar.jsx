import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="text-white sticky top-0 flex items-center justify-between h-20 lg:px-4 sm:px-2 bg-[#03312E]">
        <h1 className="lg:text-3xl sm:text-1xl font-bold w-full uppercase cursor-pointer sm:pl-2">
          <Link to="/">Hello</Link>
        </h1>
        <ul className="flex uppercase font-bold cursor-pointer">
          <li className="p-2">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2">
            <Link to="users">Users</Link>
          </li>
          <li className="p-2">
            <Link to="nest">Nest</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
