import React from "react";
import error from "../Assests/error.svg";

const Error = () => {
  return (
    <>
      <div className="w-3/4 mx-auto">
        <h1 className="text-center font-bold text-8xl md:text-4xl sm:text-2xl pt-4">
          Page Not Found
        </h1>
        <img
          style={{ width: "inherit", height: "inherit" }}
          className="mx-auto"
          src={error}
          alt="Error SVG file"
        />
      </div>
    </>
  );
};
export default Error;
