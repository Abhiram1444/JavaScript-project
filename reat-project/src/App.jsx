// Render lists dynamically using the map() method with input of names
// function App() {
//   const students = [
//     { id: 1, name: "Abhiram", course: "React" },
//     { id: 2, name: "Arjun", course: "Angular" },
//     { id: 3, name: "Aditya", course: "Selenium" }
//   ];

//   return (
//     <div>
//       <h2>Students</h2>

//       {students.map(student => (
//         <div key={student.id}>
//           <h3>{student.name}</h3>
//           <p>{student.course}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;



// Rendering Nested Lists with Proper Keys with unique key

// function App() {
//   const departments = [
//     {
//       id: 1,
//       department: "IT",
//       employees: ["Rahul", "Priya"]
//     },
//     {
//       id: 2,
//       department: "HR",
//       employees: ["Anjali", "Ravi"]
//     }
//   ];

//   return (
//     <div>
//       {departments.map(dept => (
//         <div key={dept.id}>
//           <h2>{dept.department}</h2>

//           <ul>
//             {dept.employees.map((employee, index) => (
//               <li key={index}>{employee}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;  


//Practiced Conditional Rendering Within Lists with map()
// function App() {
//   const products = [
//     { id: 1, name: "Laptop", price: 65000, inStock: true },
//     { id: 2, name: "Mobile", price: 25000, inStock: false },
//     { id: 3, name: "Keyboard", price: 1500, inStock: true }
//   ];

//   return (
//     <div>
//       <h1>Products</h1>

//       {products.map(product =>
//         product.inStock ? (
//           <div
//             key={product.id}
//             style={{
//               border: "5px solid black",
//               margin: "10px",
//               padding: "10px"
//             }}
//           >
//             <h3>{product.name}</h3>
//             <p>₹{product.price}</p>
//             <p>Available</p>
//           </div>
//         ) : null
//       )}
//     </div>
//   );
// }

// export default App;


// Object destructuring 
// function App() {
//   const employee = {
//     id: 101,
//     name: "Rahul",
//     department: "Development",
//     salary: 60000
//   };

//   const { id, name, department, salary } = employee;

//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>ID: {id}</p>
//       <p>{department}</p>
//       <p>₹{salary}</p>
//     </div>
//   );
// }

// export default App;


// Array destructuring
// function App() {
//   const colors = ["Red", "Green", "Blue", "Yellow"];

//   const [first, second, third] = colors;

//   return (
//     <div>
//       <h2>{first}</h2>
//       <h2>{second}</h2>
//       <h2>{third}</h2>
//     </div>
//   );
// }

// export default App;


//Destructuring with nested objects

// function App() {
//   const student = {
//     name: "Rahul",
//     address: {
//       city: "Hyderabad",
//       state: "Telangana"
//     }
//   };

//   const {
//     name,
//     address: { city, state }
//   } = student;

//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>{city}</p>
//       <p>{state}</p>
//     </div>
//   );
// }

// export default App;


// destructuring with function parametrs

// function User({ name, age }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>{age}</p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <User
//       name="Priya"
//       age={24}
//     />
//   );
// }

// export default App;

// nested drestructuring with map method
// function App() {
//   const employees = [
//     {
//       id: 1,
//       name: "Rahul",
//       address: {
//         city: "Hyderabad",
//         state: "Telangana"
//       }
//     },
//     {
//       id: 2,
//       name: "Priya",
//       address: {
//         city: "Bangalore",
//         state: "Karnataka"
//       }
//     }
//   ];

//   return (
//     <div>
//       {employees.map(
//         ({
//           id,
//           name,
//           address: { city, state }
//         }) => (
//           <div key={id}>
//             <h2>{name}</h2>
//             <p>{city}</p>
//             <p>{state}</p>
//           </div>
//         )
//       )}
//     </div>
//   );
// }

// export default App;

// destructuring with props and state
// import Student from "../../task 31-07-2026/Students";

// function App() {
//   return (
//     <Student
//       name="Abhiram"
//       age={24}
//       course="React"
//     />
//   );
// }

// export default App;

// destructuring with state

// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("Abhiram");

//   return (
//     <div>
//       <h2>{name}</h2>

//       <button onClick={() => setName("Rahul")}>
//         Change Name
//       </button>
//     </div>
//   );
// }

// export default App;


// same with multiple states
// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("Abhiram");
//   const [age, setAge] = useState(22);
//   const [course, setCourse] = useState("React");

//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>{age}</p>
//       <p>{course}</p>

//       <button onClick={() => setName("Rahul")}>
//         Change Name
//       </button>

//       <button onClick={() => setAge(25)}>
//         Change Age
//       </button>

//       <button onClick={() => setCourse("Angular")}>
//         Change Course
//       </button>
//     </div>
//   );
// }

// export default App;

// Reactlazy loading ans suspense

// import React, { Suspense } from "react";

// const Home = React.lazy(() =>
//   import("./task 31-07-2026/reactlazyandsuspense/Home")
// );

// const About = React.lazy(() =>
//   import("./task 31-07-2026/reactlazyandsuspense/About")
// );

// const Contact = React.lazy(() =>
//   import("./task 31-07-2026/reactlazyandsuspense/Contact")
// );

// function App() {
//   return (
//     <Suspense fallback={<h2>Loading Components...</h2>}>
//       <Home />
//       <About />
//       <Contact />
//     </Suspense>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import React, { Suspense } from "react";

// const Home = React.lazy(() => import("./task 31-07-2026/reactlazyandsuspense/Home"));
// const About = React.lazy(() => import("./task 31-07-2026/reactlazyandsuspense/About"));
// const Contact = React.lazy(() => import("./task 31-07-2026/reactlazyandsuspense/Contact"));

// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/">Home</Link> |{" "}
//         <Link to="/about">About</Link> |{" "}
//         <Link to="/contact">Contact</Link>
//       </nav>

//       <Suspense fallback={<h2>Loading Page...</h2>}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </Suspense>
//     </BrowserRouter>
//   );
// }

// export default App;