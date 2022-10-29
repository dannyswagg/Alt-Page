import React from "react";
import { useOutletContext } from "react-router-dom";

const Second = () => {
  const [currentUser] = useOutletContext();
  return (
    <>
      <div className="text-3xl">Second Nested Route</div>
      <currentUser />
    </>
  );
};

export default Second;
