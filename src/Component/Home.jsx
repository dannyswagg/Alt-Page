import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="text-center py-6">
        <h1 className="font-bold lg:text-6xl md:text-3xl text-2xl ">
          Alt-School Assignment
        </h1>
        <h3 className="font-bold py-6">Setting Up The Following:</h3>
        <ul className="font-bold text-3xl">
          <li className="py-3">React Router</li>
          <li className="py-3">Implemented Nested Routes</li>
          <li className="py-3">A 404 Page</li>
          <li className="py-3">Error Boundary</li>
          <li className="py-3">
            Client-Side Pagination: Using <code>randomuser.me</code>
          </li>
        </ul>
        <button className="bg-[#3F3D56] text-white py-4 rounded px-4">
          <Link to="users">View Users</Link>
        </button>
      </div>
    </>
  );
};

export default Home;
