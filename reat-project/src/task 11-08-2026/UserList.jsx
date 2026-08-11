import { useEffect, useState } from "react";

function UserList() {
  // State for storing API data
  const [users, setUsers] = useState([]);

  // State for loading status
  const [loading, setLoading] = useState(true);

  // State for error message
  const [error, setError] = useState("");

  useEffect(() => {
    // Function to fetch users
    const fetchUsers = async () => {
      try {
        // Start loading
        setLoading(true);

        // Clear previous error
        setError("");

        // Fetch data from API
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        // Check whether response is successful
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        // Convert response to JSON
        const data = await response.json();

        // Store API data in state
        setUsers(data);
      } catch (error) {
        // Store error message
        setError(error.message);
      } finally {
        // Stop loading
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Display loading message
  if (loading) {
    return <p className="status loading">Loading users...</p>;
  }

  // Display error message
  if (error) {
    return <p className="status error">Error: {error}</p>;
  }

  // Display users
  return (
    <div className="user-container">
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <h2>{user.name}</h2>

          <p>
            <strong>Username:</strong> {user.username}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>Phone:</strong> {user.phone}
          </p>

          <p>
            <strong>Website:</strong> {user.website}
          </p>
        </div>
      ))}
    </div>
  );
}

export default UserList;