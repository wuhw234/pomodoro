import React from "react";
import Navbar from "./Navbar";

const Error = () => {
  return (
    <div className="error">
      <Navbar background="error" page="" />
      <h1>Oops! </h1> <p>Looks like this page doesn't exist.</p>
    </div>
  );
};

export default Error;
