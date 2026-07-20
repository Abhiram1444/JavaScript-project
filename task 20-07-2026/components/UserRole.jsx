function UserRole() {

    const role = "Admin";

    return (

        <div>

            {
                role === "Admin"
                ? <h2>Admin Dashboard</h2>

                : role === "Employee"

                ? <h2>Employee Dashboard</h2>

                : <h2>Student Dashboard</h2>

            }

        </div>

    );

}

export default UserRole;