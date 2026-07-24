function EmployeeCard({ employee }) {
  return (
    <div className="card">

      <h2>{employee.name}</h2>

      <p>{employee.email}</p>

      <p>{employee.phone}</p>

    </div>
  );
}

export default EmployeeCard;