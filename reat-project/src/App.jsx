import Home from "../../task 24-07-2026/pages/Home";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
// import { useState } from "react";
// import Login from "../../task 24-07-2026/Login";
// import Dashboard from "../../task 24-07-2026/Dashboard";
// import AdminDashboard from "../../task 24-07-2026/AdminDashboard";
// import StudentDashboard from "../../task 24-07-2026/StudentDashboard";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [role, setRole] = useState("");

//   return (
//     <div>
//       <h1>Conditional Rendering Example</h1>

//       {!isLoggedIn ? (
//         <Login
//           setIsLoggedIn={setIsLoggedIn}
//           setRole={setRole}
//         />
//       ) : (
//         <>
//           <button
//             onClick={() => {
//               setIsLoggedIn(false);
//               setRole("");
//             }}
//           >
//             Logout
//           </button>

//           {role === "admin" ? (
//             <AdminDashboard />
//           ) : role === "student" ? (
//             <StudentDashboard />
//           ) : (
//             <Dashboard />
//           )}
//         </>
//       )}
//     </div>
//   );
// }

// export default App;

// import Counter from "../../task 24-07-2026/Counter";

// function App() {
//   return (
//     <div>
//       <h1>useEffect Hook Example</h1>
//       <Counter />
//     </div>
//   );
// }

// export default App;

// import { useEffect, useState } from "react";
// import UserCard from "../../task 24-07-2026/UserCard";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch users");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("Something went wrong!");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <h2>Loading Users...</h2>;
//   }

//   if (error) {
//     return <h2>{error}</h2>;
//   }

//   return (
//     <div>
//       <h1>User List</h1>

//       {users.map((user) => (
//         <UserCard key={user.id} user={user} />
//       ))}
//     </div>
//   );
// }

// export default App;