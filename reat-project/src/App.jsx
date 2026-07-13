import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>React Context API  with Abhiram</h1>

      <hr />

      <h2>Theme Management </h2>

      <Navbar />
      <Home />
      <Footer />

      <hr />

      <h2>User Context API </h2>

      <Dashboard />
      <Profile />
    </div>
  );
}

export default App;