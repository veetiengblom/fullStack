import React from "react";

import Part from "./Part";
import Total from "./Total";
import { Toast } from "materialize-css";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <Total parts={parts} />
    </div>
  );
};

export default Content;
