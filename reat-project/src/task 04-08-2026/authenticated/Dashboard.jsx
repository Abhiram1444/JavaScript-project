import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  function handleLogout() {

    localStorage.removeItem("isLoggedIn");

    alert("Logged Out");

    navigate("/login");

  }

  return (

    <div>

      <h1>Dashboard</h1>

      <h2>Welcome User</h2>

      <button onClick={handleLogout}>
        Logout
      </button>

    </div>

  );

}

export default Dashboard;