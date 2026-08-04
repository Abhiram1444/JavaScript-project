import { Link } from "react-router-dom";

function Home() {

  return (

    <div>

      <h1>Home Page</h1>

      <Link to="/about">About</Link>

      <br /><br />

      <Link to="/contact">Contact</Link>

    </div>

  );

}

export default Home;