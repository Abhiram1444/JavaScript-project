import { useState } from "react";

function UserDashboard() {

  const [role, setRole] = useState("Guest");

  // Function to render dashboard based on role
  const renderDashboard = () => {

    switch (role) {

      case "Admin":
        return (
          <div className="admin">
            <h2>Admin Dashboard</h2>

            <ul>
              <li>Manage Users</li>
              <li>Manage Employees</li>
              <li>Generate Reports</li>
              <li>Application Settings</li>
            </ul>
          </div>
        );

      case "Employee":
        return (
          <div className="employee">
            <h2>Employee Dashboard</h2>

            <ul>
              <li>Today's Tasks</li>
              <li>Attendance</li>
              <li>Salary Details</li>
              <li>Leave Requests</li>
            </ul>
          </div>
        );

      case "Student":
        return (
          <div className="student">
            <h2>Student Dashboard</h2>

            <ul>
              <li>Courses</li>
              <li>Assignments</li>
              <li>Results</li>
              <li>Profile</li>
            </ul>
          </div>
        );

      default:
        return (
          <div className="guest">
            <h2>Guest Dashboard</h2>

            <p>Please login to access dashboard features.</p>
          </div>
        );
    }
  };

  return (

    <div className="dashboard">

      <h1>Role Based Dashboard (Switch Case)</h1>

      <div className="buttons">

        <button onClick={() => setRole("Admin")}>
          Admin
        </button>

        <button onClick={() => setRole("Employee")}>
          Employee
        </button>

        <button onClick={() => setRole("Student")}>
          Student
        </button>

        <button onClick={() => setRole("Guest")}>
          Guest
        </button>

      </div>

      <hr />

      {renderDashboard()}

    </div>

  );
}

export default UserDashboard;