import React from "react";

function Footer() {
  console.log("Footer Rendered");

  return (
    <div>
      <h2>Footer Component</h2>
    </div>
  );
}

export default React.memo(Footer);