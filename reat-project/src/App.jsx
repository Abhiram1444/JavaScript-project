import Navbar from "./task 03-08-2026/components/Navbar";

import Home from "./task 03-08-2026/pages/Home";
import About from "./task 03-08-2026/pages/About";
import Contact from "./task 03-08-2026/pages/Contact";
import Services from "./task 03-08-2026/pages/Services";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/services" element={<Services />} />

      </Routes>

    </>
  );
}

export default App;