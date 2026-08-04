import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  function handleLogin() {

    navigate("/dashboard", {
      state: {
        name: "Abhiram",
        role: "React Developer",
        email: "abhiram@gmail.com"
      }
    });

  }

  return (

    <div>

      <h1>Home Page</h1>

      <button onClick={handleLogin}>
        Login
      </button>

    </div>

  );

}

export default Home;