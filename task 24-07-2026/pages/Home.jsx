import { useEffect, useState } from "react";
import EmployeeCard from "../minipractice/EmployeeCard";
import EmployeeForm from "../minipractice/EmployeeForm";
import withLoading from "../hoc/withLoading";

const EmployeeList = withLoading(EmployeeCard);

function Home() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error();
        }
        return res.json();
      })
      .then((data) => {
        setEmployees(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to Fetch Data");
        setLoading(false);
      });
  }, []);

  return (
    <div>

      <EmployeeForm />

      {error && <h2>{error}</h2>}

      {employees.map((employee) => (
        <EmployeeList
          key={employee.id}
          loading={loading}
          employee={employee}
        />
      ))}

    </div>
  );
}

export default Home;