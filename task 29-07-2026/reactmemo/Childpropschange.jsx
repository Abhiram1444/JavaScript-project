import React from "react";

function Child({ name }) {

  console.log("Child Render");

  return (
    <h2>{name}</h2>
  );
}

export default React.memo(Child);