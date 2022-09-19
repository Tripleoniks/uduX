import React from "react";
import NavBar from "./NavBar";

const index = ({ getQuery }) => {
  return (
    <div>
      <NavBar getQuery={getQuery} />
    </div>
  );
};

export default index;
