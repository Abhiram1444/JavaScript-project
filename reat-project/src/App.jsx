import UserList from "./task 11-08-2026/UserList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Users List</h1>
      <p className="subtitle">
        Fetching users from a sample API using useEffect and useState
      </p>

      <UserList />
    </div>
  );
}

export default App;