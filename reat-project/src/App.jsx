import { Link, Routes, Route } from "react-router-dom";

import Home from "./task 14-08-2026/Home";
import About from "./task 14-08-2026/About";
import Products from "./task 14-08-2026/Products";
import ProductDetails from "./task 14-08-2026/ProductDetails";
import NotFound from "./task 14-08-2026/NotFound";

function App() {
  return (
    <div>
      <nav className="navbar">
        <h2>My React App</h2>

        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </div>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/products" element={<Products />} />

          {/* Dynamic Route */}
          <Route path="/products/:id" element={<ProductDetails />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;