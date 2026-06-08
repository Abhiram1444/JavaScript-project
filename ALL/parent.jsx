import React, { useState } from "react";

// Child Component
function Child({ message, onMessageChange }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>Child Component</h3>
      <p>Message from Parent: {message}</p>
      <input
        type="text"
        placeholder="Type to send to parent"
        onChange={(e) => onMessageChange(e.target.value)}
      />
    </div>
  );
}

// Parent Component
function Parent() {
  const [parentMessage, setParentMessage] = useState("Hello from Parent");

  // Callback to receive data from child
  const handleChildMessage = (newMessage) => {
    setParentMessage(newMessage);
  };

  return (
    <div style={{ border: "2px solid blue", padding: "15px" }}>
      <h2>Parent Component</h2>
      <p>Current Message: {parentMessage}</p>

      {/* Passing props to child */}
      <Child message={parentMessage} onMessageChange={handleChildMessage} />
    </div>
  );
}

export default Parent;
