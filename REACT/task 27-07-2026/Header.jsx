import React from "react";

function Header() {
  console.log("Header Component Rendered");

  return (
    <div>
      <h2>React.memo Demo</h2>
    </div>
  );
}

export default React.memo(Header);