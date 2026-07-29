import React from "react";

function Child({ handleClick }) {

  console.log("Child Rendered");

  return (
    <button onClick={handleClick}>
       Button
    </button>
  );
}

export default React.memo(Child);