import { useState } from "react";
import Header from "./task 10-08-2026/Header";
import StudentList from "./task 10-08-2026/StudentList";
import "./App.css";

function App() {
  const [showStudents, setShowStudents] = useState(true);

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Abhiram",
      age: 22,
      course: "React"
    },
    {
      id: 2,
      name: "balaji",
      age: 23,
      course: "JavaScript"
    },
    {
      id: 3,
      name: "giri",
      age: 21,
      course: "HTML & CSS"
    }
  ]);

  const removeStudent = (id) => {
    setStudents(
      students.filter((student) => student.id !== id)
    );
  };

  return (
    <div>
      <Header />

      <button
        onClick={() => setShowStudents(!showStudents)}
      >
        {showStudents ? "Hide Students" : "Show Students"}
      </button>

      {showStudents ? (
        students.length > 0 ? (
          <StudentList
            students={students}
            onRemove={removeStudent}
          />
        ) : (
          <p>No students available.</p>
        )
      ) : (
        <p>Student list is hidden.</p>
      )}
    </div>
  );
}

export default App;