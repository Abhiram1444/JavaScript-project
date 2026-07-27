// import Users from "../../task 27-07-2026/Users";

// function App() {
//   return (
//     <div>
//       <h1>User List</h1>
//       <Users />
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import Header from "../../task 27-07-2026/Header";
// import Footer from "../../task 27-07-2026/Footer";

// function App() {
//   const [count, setCount] = useState(0);

//   console.log("Parent Rendered");

//   return (
//     <div style={{ textAlign: "center" }}>
//       <Header />

//       <h1>Count: {count}</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>

//       <Footer />
//     </div>
//   );
// }

// export default App;

import UserList from "../../task 27-07-2026/Minipractice/UserList";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>User Directory</h1>
      <UserList />
    </div>
  );
}

export default App;