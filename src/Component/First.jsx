import React from "react";
import { useOutletContext } from "react-router-dom";

const First = () => {
  const [currentUser] = useOutletContext();
  return (
    <>
      <div className="text-3xl">First Nested Route</div>
      <currentUser />
    </>
  );
};

export default First;
