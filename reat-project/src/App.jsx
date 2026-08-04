import { Routes, Route } from "react-router-dom";

import Home from "./task 04-08-2026/nested routing/Home";
import Dashboard from "./task 04-08-2026/nested routing/Dashboard";
import DashboardHome from "./task 04-08-2026/nested routing/DashboardHome";
import Profile from "./task 04-08-2026/nested routing/Profile";
import Settings from "./task 04-08-2026/nested routing/Settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;




// import { Routes, Route, Link } from "react-router-dom";

// import Home from "./task 04-08-2026/Dynamioc routing/Home";
// import Products from "./task 04-08-2026/Dynamioc routing/Products";
// import ProductDetails from "./task 04-08-2026/Dynamioc routing/ProductsDetails";

// function App() {
//   return (
//     <div>
//       <nav>
//         <Link to="/">Home</Link> |{" "}
//         <Link to="/products">Products</Link>
//       </nav>

//       <hr />

//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route path="/products" element={<Products />} />

//         <Route
//           path="/products/:id"
//           element={<ProductDetails />}
//         />
//       </Routes>
//     </div>
//   );
// }

// export default App;



// import { Routes, Route } from "react-router-dom";
// import Home from "./task 04-08-2026/Usenavigate/Home";
// import Login from "./task 04-08-2026/Usenavigate/Login";
// import Dashboard from "./task 04-08-2026/Usenavigate/Dashboard";

// function App() {
//   return (
//     <Routes>

//       <Route path="/" element={<Home />} />

//       <Route path="/login" element={<Login />} />

//       <Route path="/dashboard" element={<Dashboard />} />

//     </Routes>
//   );
// }

// export default App;


// import { Routes, Route } from "react-router-dom";

// import Home from "./task 04-08-2026/authenticated/Home";
// import Login from "./task 04-08-2026/authenticated/Login";
// import Dashboard from "./task 04-08-2026/authenticated/Dashboard";
// import ProtectedRoute from "./task 04-08-2026/authenticated/components/Protectedroute";

// function App() {
//   return (
//     <Routes>

//       <Route path="/" element={<Home />} />

//       <Route path="/login" element={<Login />} />

//       <Route
//         path="/dashboard"
//         element={
//           <ProtectedRoute>
//             <Dashboard />
//           </ProtectedRoute>
//         }
//       />

//     </Routes>
//   );
// }

// export default App;






// import { Routes, Route } from "react-router-dom";

// import Home from "./task 04-08-2026/404 page/Home";
// import About from "./task 04-08-2026/404 page/About";
// import Contact from "./task 04-08-2026/404 page/Contact";
// import NotFound from "./task 04-08-2026/404 page/NotFound";

// function App() {
//   return (
//     <Routes>

//       <Route path="/" element={<Home />} />

//       <Route path="/about" element={<About />} />

//       <Route path="/contact" element={<Contact />} />

//       <Route path="*" element={<NotFound />} />

//     </Routes>
//   );
// }

// export default App;




// import { Routes, Route } from "react-router-dom";

// import Home from "./task 04-08-2026/passing datat/Home";
// import Dashboard from "./task 04-08-2026/passing datat/Dashboard";

// function App() {
//   return (
//     <Routes>

//       <Route path="/" element={<Home />} />

//       <Route
//         path="/dashboard"
//         element={<Dashboard />}
//       />

//     </Routes>
//   );
// }

// export default App;