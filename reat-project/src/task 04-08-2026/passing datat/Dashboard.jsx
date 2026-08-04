import { useLocation } from "react-router-dom";

function Dashboard() {

  const location = useLocation();

  const user = location.state;

  return (

    <div>

      <h1>Dashboard</h1>

      <h2>Name : {user.name}</h2>

      <h2>Role : {user.role}</h2>

      <h2>Email : {user.email}</h2>

    </div>

  );

}

export default Dashboard;