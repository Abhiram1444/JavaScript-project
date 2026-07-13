import { useContext } from "react";
import UserContext from "../context/UserContext";

function Dashboard(){

const {user}=useContext(UserContext);

return(

<h3>{user}</h3>

);

}

export default Dashboard;