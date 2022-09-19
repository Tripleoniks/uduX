import React from "react";
import Row from "./Row";

const index = ({ title, songs }) => {
  return (
    <div>
      <Row title={title} songs={songs} />
    </div>
  );
};

export default index;
