import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Nest = () => {
  const [currentUser, setCurrentUser] = useState([]);
  return (
    <>
      <div className="text-center">
        <h1 className="font-bold text-5xl py-4">Nested Routes</h1>
        <ul className="flex">
          <li className="mx-auto bg-[#03312E] p-4 text-white">
            <Link to="first">First Nest</Link>
          </li>
          <li className="ml-2 mx-auto bg-[#03312E] p-4 text-white">
            <Link to="second">Second Nest</Link>
          </li>
        </ul>
        <Outlet context={[currentUser]} />
      </div>
    </>
  );
};

export default Nest;
